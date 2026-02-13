// import React, { useState, useEffect } from "react";
// import { Typography, Button, Box, Modal, TextField } from "@mui/material";
// import axios from "axios";

// const ManagePage = () => {
//   const [tables, setTables] = useState([]); // All tables
//   const [selectedTableId, setSelectedTableId] = useState(null); // Selected table for form
//   const [columns, setColumns] = useState([]); // Columns of selected table
//   const [openFormModal, setOpenFormModal] = useState(false); // Form modal
//   const [openBlankModal, setOpenBlankModal] = useState(false); // Blank modal on "Open Tables"

//   // Fetch tables from API on mount
//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/api/auth/getUsedObjects")
//       .then((res) => setTables(res.data))
//       .catch((err) => console.log(err));
//   }, []);

//   // Handle table button click (sidebar)
//   const handleTableClick = (tableId) => {
//     setSelectedTableId(tableId);
//     axios
//       .get(`http://localhost:5000/api/auth/getColumnsByObjectId/${tableId}`)
//       .then((res) => setColumns(res.data))
//       .catch((err) => console.log(err));

//     setOpenFormModal(true); // Open form modal
//   };

//   return (
//     <Box>
//       <Typography variant="h4" gutterBottom>
//         Manage Page
//       </Typography>
//       <Typography paragraph>
//         Sidebar shows all tables. Click a table to open its form.
//       </Typography>

//       {/* Button to open blank modal */}
//       <Button variant="contained" onClick={() => setOpenBlankModal(true)}>
//         Open Tables
//       </Button>

//       {/* Sidebar table buttons (inside ManagePage) */}
//       <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 2 }}>
//         {tables.map((table) => (
//           <Button
//             key={table.object_id}
//             variant="outlined"
//             onClick={() => handleTableClick(table.object_id)}
//           >
//             {table.object_name}
//           </Button>
//         ))}
//       </Box>

//       {/* Blank modal on "Open Tables" button */}
//       <Modal
//         open={openBlankModal}
//         onClose={() => setOpenBlankModal(false)}
//         aria-labelledby="blank-modal-title"
//       >
//         <Box
//           sx={{
//             position: "absolute",
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//             width: 400,
//             height: 200,
//             bgcolor: "background.paper",
//             borderRadius: 2,
//             boxShadow: 24,
//             p: 4,
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <Typography id="blank-modal-title">Blank Modal</Typography>
//         </Box>
//       </Modal>

//       {/* Modal for dynamic form */}
//       <Modal
//         open={openFormModal}
//         onClose={() => setOpenFormModal(false)}
//         aria-labelledby="form-modal-title"
//       >
//         <Box
//           sx={{
//             position: "absolute",
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//             width: 500,
//             bgcolor: "background.paper",
//             borderRadius: 2,
//             boxShadow: 24,
//             p: 4,
//             maxHeight: "80vh",
//             overflowY: "auto",
//           }}
//         >
//           <Typography id="form-modal-title" variant="h6" gutterBottom>
//             Form for {tables.find((t) => t.object_id === selectedTableId)?.object_name}
//           </Typography>

//           <form>
//             {columns.map((col) => (
//               <TextField
//                 key={col.column_name}
//                 label={col.column_name}
//                 type={
//                   col.column_type === "int"
//                     ? "number"
//                     : col.column_type === "date"
//                     ? "date"
//                     : "text"
//                 }
//                 required={!col.is_null_possible}
//                 fullWidth
//                 margin="normal"
//               />
//             ))}

//             <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
//               Submit
//             </Button>
//           </form>
//         </Box>
//       </Modal>
//     </Box>
//   );
// };

// export default ManagePage;




// import React, { useState } from "react";
// import { Box, Typography, Button, Modal } from "@mui/material";

// const ManagePage = () => {
//   const [openBlankModal, setOpenBlankModal] = useState(false);

//   return (
//     <Box>
//       <Typography variant="h4" gutterBottom>
//         Manage Page
//       </Typography>
//       <Typography paragraph>
//         Click the button below to open a blank modal. Sidebar contains all table buttons.
//       </Typography>

//       <Button variant="contained" onClick={() => setOpenBlankModal(true)}>
//         Open Modal
//       </Button>

//       {/* Blank modal */}
//       <Modal
//         open={openBlankModal}
//         onClose={() => setOpenBlankModal(false)}
//         aria-labelledby="blank-modal-title"
//       >
//         <Box
//           sx={{
//             position: "absolute",
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//             width: 400,
//             height: 200,
//             bgcolor: "background.paper",
//             borderRadius: 2,
//             boxShadow: 24,
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <Typography id="blank-modal-title">Blank Modal</Typography>
//         </Box>
//       </Modal>
//     </Box>
//   );
// };

// export default ManagePage;





// import React, { useState, useEffect } from "react";
// import { Box, Typography, Button, Modal, TextField } from "@mui/material";
// import axios from "axios";

// const ManagePage = ({ selectedTable }) => {
//   const [columns, setColumns] = useState([]);
//   const [openModal, setOpenModal] = useState(false);
//   const [formData, setFormData] = useState({}); // Store field values

//   // Fetch columns for the selected table
//   const fetchColumns = async () => {
//     if (!selectedTable) return;

//     try {
//       const res = await axios.get(
//         `http://localhost:5000/api/columnsget?object_id=${selectedTable.object_id}`
//       );
//       setColumns(res.data || []);

//       // Initialize formData with existing values (if any) or empty strings
//       const initialData = {};
//       (res.data || []).forEach((col) => {
//         initialData[col.column_name] = col.value || "";
//       });
//       setFormData(initialData);
//     } catch (err) {
//       console.error("Error fetching columns:", err);
//       setColumns([]);
//       setFormData({});
//     }
//   };

//   // Open modal
//   const handleOpenModal = () => {
//     if (!selectedTable) {
//       alert("Please select a table from the sidebar first.");
//       return;
//     }
//     fetchColumns();
//     setOpenModal(true);
//   };

//   // Handle input changes in the form
//   const handleChange = (columnName, value) => {
//     setFormData((prev) => ({ ...prev, [columnName]: value }));
//   };

//   // Submit the form
//   const handleSubmit = () => {
//     console.log("Submitted data:", formData);
//     alert("Form submitted! Check console for values.");
//     setOpenModal(false);
//   };

//   return (
//     <Box>
//       <Typography variant="h4" gutterBottom>
//         Manage Page
//       </Typography>
//       <Typography paragraph>
//         Select a table from the sidebar and click the button below to open its
//         dynamic form.
//       </Typography>

//       <Button
//         variant="contained"
//         onClick={handleOpenModal}
//         disabled={!selectedTable}
//       >
//         Open Form Modal
//       </Button>

//       {/* Modal showing dynamic fields */}
//       <Modal open={openModal} onClose={() => setOpenModal(false)}>
//         <Box
//           sx={{
//             position: "absolute",
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//             width: 600,
//             maxHeight: "80vh",
//             bgcolor: "background.paper",
//             borderRadius: 2,
//             boxShadow: 24,
//             p: 4,
//             overflowY: "auto",
//           }}
//         >
//           <Typography variant="h6" gutterBottom>
//             {selectedTable?.object_name || "Table"} - Dynamic Form
//           </Typography>

//           {columns.length === 0 ? (
//             <Typography>No fields available</Typography>
//           ) : (
//             columns.map((col) => (
//               <TextField
//                 key={col.id}
//                 label={col.column_name}
//                 variant="outlined"
//                 fullWidth
//                 sx={{ mb: 2 }}
//                 value={formData[col.column_name] || ""}
//                 onChange={(e) => handleChange(col.column_name, e.target.value)}
//               />
//             ))
//           )}

//           <Button
//             variant="contained"
//             sx={{ mt: 2 }}
//             onClick={handleSubmit}
//           >
//             Submit
//           </Button>
//         </Box>
//       </Modal>
//     </Box>
//   );
// };

// export default ManagePage;










// import React, { useState, useEffect } from "react";
// import { Box, Typography, Button, Modal, TextField } from "@mui/material";
// import axios from "axios";

// const ManagePage = ({ selectedTable }) => {
//   const [columns, setColumns] = useState([]);
//   const [openModal, setOpenModal] = useState(false);
//   const [formData, setFormData] = useState({}); // Store field values

//   // Fetch columns for the selected table
//   const fetchColumns = async () => {
//     if (!selectedTable) return;

//     try {
//       const res = await axios.get(
//         `http://localhost:5000/api/auth/columnsget?object_id=${selectedTable.object_id}`
//       );

//       // Save the columns
//       setColumns(res.data || []);

//       // Initialize formData with existing values or empty strings
//       const initialData = {};
//       (res.data || []).forEach((col) => {
//         initialData[col.column_name] = col.value || "";
//       });
//       setFormData(initialData);
//     } catch (err) {
//       console.error("Error fetching columns:", err);
//       setColumns([]);
//       setFormData({});
//     }
//   };

//   // Open modal
//   const handleOpenModal = () => {
//     if (!selectedTable) {
//       alert("Please select a table from the sidebar first.");
//       return;
//     }
//     fetchColumns(); // Fetch columns when modal opens
//     setOpenModal(true);
//   };

//   // Handle input changes in the form
//   const handleChange = (columnName, value) => {
//     setFormData((prev) => ({ ...prev, [columnName]: value }));
//   };

//   // Submit the form
//   const handleSubmit = () => {
//     console.log("Submitted data:", formData);
//     alert("Form submitted! Check console for values.");
//     setOpenModal(false);
//   };

//   return (
//     <Box>
//       <Typography variant="h4" gutterBottom>
//             {selectedTable?.object_name || "Table"} -  Form
//       </Typography>
//         <Typography variant="h6" gutterBottom>
//           </Typography>
//       {/* <Typography paragraph>
//         Select a table from the sidebar and click the button below to open its
//         dynamic form.
//       </Typography> */}

//     <Button
//   variant="contained"
//   onClick={handleOpenModal}
//   disabled={!selectedTable}
//   size="large"
//   sx={{
//     px: 5,        // left-right padding (button width)
//     py: 1.8,      // top-bottom padding (button height)
//     fontSize: "16px",
//     borderRadius: 2,
//     mt: 2
//   }}
// >
//   open form {}
// </Button>


//       {/* Modal showing dynamic fields */}
//       <Modal open={openModal} onClose={() => setOpenModal(false)}>
//         <Box
//           sx={{
//             position: "absolute",
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//             width: 500,
//             maxHeight: "80vh",
//             bgcolor: "background.paper",
//             borderRadius: 2,
//             boxShadow: 24,
//             p: 4,
//             overflowY: "auto",
//           }}
//         >
    

//           {columns.length === 0 ? (
//             <Typography>No fields available</Typography>
//           ) : (
//             columns.map((col) => (
//               <TextField
//                 key={col.id}
//                 label={col.column_name}
//                 variant="outlined"
//                 fullWidth
//                 sx={{ mb: 2 }}
//                 value={formData[col.column_name] || ""}
//                 onChange={(e) => handleChange(col.column_name, e.target.value)}
//               />
//             ))
//           )}
    
//           <Button
//             variant="contained"
//             sx={{ mt: 2 }}
//             onClick={handleSubmit}
//           >
//             Submit
//           </Button>
//         </Box>
//       </Modal>
//     </Box>
//   );
// };

// export default ManagePage;

















// import React, { useState } from "react";
// import { Box, Typography, Button, Modal, TextField } from "@mui/material";
// import axios from "axios";

// const ManagePage = ({ selectedTable }) => {
//   const [columns, setColumns] = React.useState([]);
//   const [openModal, setOpenModal] = React.useState(false);
//   const [formData, setFormData] = React.useState({});

//   const fetchColumns = async () => {
//     if (!selectedTable) return;
//     try {
//       const res = await axios.get(
//         `http://localhost:5000/api/auth/columnsget?object_id=${selectedTable.object_id}`
//       );

//       setColumns(res.data || []);

//       // Initialize formData: agar default_value nahi hai to empty string use karo
//       const initialData = {};
//       res.data.forEach(col => {
//         initialData[col.column_name] = ""; // default_value nahi hai, to empty string
//       });
//       setFormData(initialData);

//     } catch (err) {
//       console.error(err);
//       setColumns([]);
//       setFormData({});
//     }
//   };

//   const handleOpenModal = () => {
//     if (!selectedTable) return alert("Please select a table first");
//     fetchColumns();
//     setOpenModal(true);
//   };

//   const handleChange = (columnName, value) => {
//     setFormData(prev => ({ ...prev, [columnName]: value }));
//   };

//   const handleSubmit = async () => {

//      // 1️⃣ Check for blank fields
//   const emptyFields = columns
//     .map(col => col.column_name)
//     .filter(name => !formData[name] || formData[name].trim() === "");

//   if (emptyFields.length > 0) {
//     alert(
//       `Please fill all fields before submitting. Missing: ${emptyFields.join(
//         ", "
//       )}`
//     );
//     return; 
//   }
//     try {
//       await axios.post("http://localhost:5000/api/auth/getTableDataByObjectId", {
//         object_id: selectedTable.object_id,
//         data: formData
//       });
//       alert("Form submitted successfully!");
//       setOpenModal(false);
//     } catch (err) {
//       console.error(err);
//       alert("Error submitting form");
//     }
//   };

//   return (
//     <Box>
//       <Typography variant="h4" gutterBottom>
//         {selectedTable?.object_name || "Table"} - Form
//       </Typography>

//       <Button
//         variant="contained"
//         onClick={handleOpenModal}
//         disabled={!selectedTable}
//         sx={{ mt: 2, px: 5, py: 1.8, fontSize: 16, borderRadius: 2 }}
//       >
//         Open Form
//       </Button>

//       <Modal open={openModal} onClose={() => setOpenModal(false)}>
//         <Box
//           sx={{
//             position: "absolute",
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//             width: 500,
//             maxHeight: "80vh",
//             bgcolor: "background.paper",
//             borderRadius: 2,
//             boxShadow: 24,
//             p: 4,
//             overflowY: "auto"
//           }}
//         >
//           {columns.length === 0 ? (
//             <Typography>No fields available</Typography>
//           ) : (
//             columns.map(col => (
//               <TextField
//                 key={col.id}
//                 label={col.form_label || col.column_name}
//                 placeholder={`Enter ${col.form_label || col.column_name}`}
//                 variant="outlined"
//                 fullWidth
//                 sx={{ mb: 2 }}
//                 value={formData[col.column_name]}
//                 onChange={e => handleChange(col.column_name, e.target.value)}
//               />
//             ))
//           )}

//           <Button
//             variant="contained"
//             sx={{ mt: 2 }}
//             onClick={handleSubmit}
//           >
//             Submit
//           </Button>
//         </Box>
//       </Modal>
//     </Box>
//   );
// };

// export default ManagePage;






















// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Typography,
//   Button,
//   Modal,
//   TextField,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   IconButton
// } from "@mui/material";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
// import axios from "axios";

// const ManagePage = ({ selectedTable }) => {
//   const [columns, setColumns] = useState([]);
//   const [openModal, setOpenModal] = useState(false);
//   const [formData, setFormData] = useState({});
//   const [tableData, setTableData] = useState([]);

//   // 🔹 Fetch Columns (Form Fields)
//   const fetchColumns = async () => {
//     if (!selectedTable) return;
//     try {
//       const res = await axios.get(
//         `http://localhost:5000/api/auth/columnsget?object_id=${selectedTable.object_id}`
//       );

//       setColumns(res.data || []);

//       const initialData = {};
//       res.data.forEach((col) => {
//         initialData[col.column_name] = "";
//       });
//       setFormData(initialData);

//     } catch (err) {
//       console.error(err);
//       setColumns([]);
//       setFormData({});
//     }
//   };

//   // 🔹 Fetch Table Data (GET API)
//   const fetchTableData = async () => {
//     if (!selectedTable) return;

//     try {
//       const res = await axios.get(
//         `http://localhost:5000/api/auth/getDataByObjectId?object_id=${selectedTable.object_id}`
//       );

//       setTableData(res.data.data || []);
//     } catch (err) {
//       console.error(err);
//       setTableData([]);
//     }
//   };

//   // 🔹 When table changes
//   useEffect(() => {
//     fetchTableData();
//   }, [selectedTable]);

//   const handleOpenModal = () => {
//     if (!selectedTable) return alert("Please select a table first");
//     fetchColumns();
//     setOpenModal(true);
//   };

//   const handleChange = (columnName, value) => {
//     setFormData((prev) => ({ ...prev, [columnName]: value }));
//   };

//   const handleSubmit = async () => {
//     const emptyFields = columns
//       .map((col) => col.column_name)
//       .filter((name) => !formData[name] || formData[name].trim() === "");

//     if (emptyFields.length > 0) {
//       alert(
//         `Please fill all fields before submitting. Missing: ${emptyFields.join(
//           ", "
//         )}`
//       );
//       return;
//     }

//     try {
//       await axios.post(
//         "http://localhost:5000/api/auth/getTableDataByObjectId",
//         {
//           object_id: selectedTable.object_id,
//           data: formData,
//         }
//       );

//       alert("Form submitted successfully!");
//       setOpenModal(false);
//       fetchTableData(); // 🔥 Auto refresh after submit

//     } catch (err) {
//       console.error(err);
//       alert("Error submitting form");
//     }
//   };

//   // 🔹 Edit
// const handleEdit = async (row) => {
//   if (!selectedTable) return;

//   try {
//     const res = await axios.get(
//       `http://localhost:5000/api/auth/columnsget?object_id=${selectedTable.object_id}`
//     );

//     const cols = res.data || [];
//     setColumns(cols);

//     const editData = {};
//     cols.forEach((col) => {
//       editData[col.column_name] = row[col.column_name] || "";
//     });

//     setFormData(editData);
//     setOpenModal(true);

//   } catch (err) {
//     console.error(err);
//   }
// };


//   // 🔹 Delete (API later)
//   const handleDelete = (row) => {
//     alert("Delete API will be implemented later");
//   };

//   return (
//     <Box>
//       <Typography variant="h4" gutterBottom>
//         {selectedTable?.object_name || "Table"} - Form
//       </Typography>

//       <Button
//         variant="contained"
//         onClick={handleOpenModal}
//         disabled={!selectedTable}
//         sx={{ mt: 2, px: 5, py: 1.8, fontSize: 16, borderRadius: 2 }}
//       >
//         Open Form
//       </Button>

//       {/* 🔹 Modal Form */}
//       <Modal open={openModal} onClose={() => setOpenModal(false)}>
//         <Box
//           sx={{
//             position: "absolute",
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//             width: 500,
//             maxHeight: "80vh",
//             bgcolor: "background.paper",
//             borderRadius: 2,
//             boxShadow: 24,
//             p: 4,
//             overflowY: "auto",
//           }}
//         >
//           {columns.length === 0 ? (
//             <Typography>No fields available</Typography>
//           ) : (
//             columns.map((col) => (
//               <TextField
//                 key={col.id}
//                 label={col.form_label || col.column_name}
//                 placeholder={`Enter ${col.form_label || col.column_name}`}
//                 variant="outlined"
//                 fullWidth
//                 sx={{ mb: 2 }}
//                 value={formData[col.column_name] || ""}
//                 onChange={(e) =>
//                   handleChange(col.column_name, e.target.value)
//                 }
//               />
//             ))
//           )}

//           <Button
//             variant="contained"
//             sx={{ mt: 2 }}
//             onClick={handleSubmit}
//           >
//             Submit
//           </Button>
//         </Box>
//       </Modal>

//       {/* 🔹 Data Table */}
//       {tableData.length > 0 && (
//         <TableContainer component={Paper} sx={{ mt: 4 }}>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 {Object.keys(tableData[0]).map((key) => (
//                   <TableCell key={key} sx={{ fontWeight: "bold" }}>
//                     {key}
//                   </TableCell>
//                 ))}
//                 <TableCell sx={{ fontWeight: "bold" }}>
//                   Actions
//                 </TableCell>
//               </TableRow>
//             </TableHead>

//             <TableBody>
//               {tableData.map((row, index) => (
//                 <TableRow key={index}>
//                   {Object.values(row).map((value, i) => (
//                     <TableCell key={i}>{value}</TableCell>
//                   ))}

//                   <TableCell>
//                     <IconButton
//                       color="primary"
//                       onClick={() => handleEdit(row)}
//                     >
//                       <EditIcon />
//                     </IconButton>

//                     <IconButton
//                       color="error"
//                       onClick={() => handleDelete(row)}
//                     >
//                       <DeleteIcon />
//                     </IconButton>
//                   </TableCell>

//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       )}
//     </Box>
//   );
// };

// export default ManagePage;














// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Typography,
//   Button,
//   Modal,
//   TextField,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   IconButton
// } from "@mui/material";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
// import axios from "axios";

// const ManagePage = ({ selectedTable }) => {
//   const [columns, setColumns] = useState([]);
//   const [openModal, setOpenModal] = useState(false);
//   const [formData, setFormData] = useState({});
//   const [tableData, setTableData] = useState([]);
//   const [isEdit, setIsEdit] = useState(false);
//   const [selectedRowId, setSelectedRowId] = useState(null);
// const [tableColumns, setTableColumns] = useState([]);

//   // 🔹 Fetch Columns (Form Fields)
//   const fetchColumns = async () => {
//     if (!selectedTable) return;
//     try {
//       const res = await axios.get(
//         `http://localhost:5000/api/auth/columnsget?object_id=${selectedTable.object_id}`
//       );

//       setColumns(res.data || []);
//       const initialData = {};
//       res.data.forEach((col) => {
//         initialData[col.column_name] = "";
//       });
//       setFormData(initialData);

//     } catch (err) {
//       console.error(err);
//       setColumns([]);
//       setFormData({});
//     }
//   };

//   // 🔹 Fetch Table Data
//   const fetchTableData = async () => {
//     if (!selectedTable) return;

//     try {
//       const res = await axios.get(
//         `http://localhost:5000/api/auth/getDataByObjectId?object_id=${selectedTable.object_id}`
//       );

//       setTableData(res.data.data || []);
//     } catch (err) {
//       console.error(err);
//       setTableData([]);
//     }
//   };

//   useEffect(() => {
//     fetchTableData();
//   }, [selectedTable]);

//   // 🔹 Open Add Modal
//   const handleOpenModal = async () => {
//     if (!selectedTable) return alert("Please select a table first");
//     setIsEdit(false);
//     setSelectedRowId(null);
//     await fetchColumns();
//     setOpenModal(true);
//   };

//   // 🔹 Form Change
//   const handleChange = (columnName, value) => {
//     setFormData((prev) => ({ ...prev, [columnName]: value }));
//   };

//   // 🔹 Submit (Add / Update)
//   const handleSubmit = async () => {
//     const emptyFields = columns
//       .map((col) => col.column_name)
//       .filter((name) => !formData[name] || formData[name].trim() === "");

//     if (emptyFields.length > 0) {
//       alert(`Please fill all fields: ${emptyFields.join(", ")}`);
//       return;
//     }

//     try {
//       if (isEdit) {
//         // 🔹 UPDATE API
//         await axios.put(
//           "http://localhost:5000/api/auth/updateDataById",
//           {
//             object_id: selectedTable.object_id,
//             id: selectedRowId,
//             data: formData
//           }
//         );
//       } else {
//         // 🔹 INSERT API
//         await axios.post(
//           "http://localhost:5000/api/auth/getTableDataByObjectId",
//           {
//             object_id: selectedTable.object_id,
//             data: formData
//           }
//         );
//       }

//       setOpenModal(false);
//       fetchTableData(); // Refresh table

//     } catch (err) {
//       console.error(err);
//       alert("Operation failed");
//     }
//   };

//   // 🔹 Edit Row
//   const handleEdit = async (row) => {
//     if (!selectedTable) return;

//     await fetchColumns();
//     const editData = {};
//     columns.forEach((col) => {
//       editData[col.column_name] = row[col.column_name] || "";
//     });

//     setFormData(editData);
//     setSelectedRowId(row.id);
//     setIsEdit(true);
//     setOpenModal(true);
//   };

//   // 🔹 Delete Row
//   const handleDelete = async (row) => {
//     if (!selectedTable || !row.id) return;
//     if (!window.confirm("Are you sure you want to delete this row?")) return;

//     try {
//       await axios.delete("http://localhost:5000/api/auth/deleteDataById", {
//         data: {
//           object_id: selectedTable.object_id,
//           id: row.id
//         }
//       });
//       fetchTableData(); // Refresh table
//     } catch (err) {
//       console.error(err);
//       alert("Delete failed");
//     }
//   };

//   return (
//     <Box>
//       <Typography variant="h4" gutterBottom>
//         {selectedTable?.object_name || "Table"} - Form
//       </Typography>

//       <Button
//         variant="contained"
//         onClick={handleOpenModal}
//         disabled={!selectedTable}
//         sx={{ mt: 2, px: 5, py: 1.8, fontSize: 16, borderRadius: 2 }}
//       >
//         {isEdit ? "Edit Record" : "Add Record"}
//       </Button>

//       {/* 🔹 Modal Form */}
//       <Modal open={openModal} onClose={() => setOpenModal(false)}>
//         <Box
//           sx={{
//             position: "absolute",
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//             width: 500,
//             maxHeight: "80vh",
//             bgcolor: "background.paper",
//             borderRadius: 2,
//             boxShadow: 24,
//             p: 4,
//             overflowY: "auto",
//           }}
//         >
//           {columns.length === 0 ? (
//             <Typography>No fields available</Typography>
//           ) : (
//             columns.map((col) => (
//               <TextField
//                 key={col.id}
//                 label={col.form_label || col.column_name}
//                 placeholder={`Enter ${col.form_label || col.column_name}`}
//                 variant="outlined"
//                 fullWidth
//                 sx={{ mb: 2 }}
//                 value={formData[col.column_name] || ""}
//                 onChange={(e) => handleChange(col.column_name, e.target.value)}
//               />
//             ))
//           )}

//           <Button
//             variant="contained"
//             sx={{ mt: 2 }}
//             onClick={handleSubmit}
//           >
//             {isEdit ? "Update" : "Submit"}
//           </Button>
//         </Box>
//       </Modal>

//       {/* 🔹 Data Table */}
//       {tableData.length > 0 && (
//         <TableContainer component={Paper} sx={{ mt: 4 }}>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 {Object.keys(tableData[0]).map((key) => (
//                   <TableCell key={key} sx={{ fontWeight: "bold" }}>
//                     {key}
//                   </TableCell>
//                 ))}
//                 <TableCell sx={{ fontWeight: "bold" }}>Actions</TableCell>
//               </TableRow>
//             </TableHead>

//             <TableBody>
//               {tableData.map((row) => (
//                 <TableRow key={row.id}>
//                   {Object.values(row).map((value, i) => (
//                     <TableCell key={i}>{value}</TableCell>
//                   ))}

//                   <TableCell>
//                     <IconButton color="primary" onClick={() => handleEdit(row)}>
//                       <EditIcon />
//                     </IconButton>
//                     <IconButton color="error" onClick={() => handleDelete(row)}>
//                       <DeleteIcon />
//                     </IconButton>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       )}
//     </Box>
//   );
// };

// export default ManagePage;











// import React, { useState, useEffect,useCallback  } from "react";
// import {
//   Box,
//   Typography,
//   Button,
//   Modal,
//   TextField,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   IconButton
// } from "@mui/material";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
// import axios from "axios";

// const ManagePage = ({ selectedTable }) => {
//   const [columns, setColumns] = useState([]); // Form columns
//   const [tableColumns, setTableColumns] = useState([]); // Table columns
//   const [openModal, setOpenModal] = useState(false);
//   const [formData, setFormData] = useState({});
//   const [tableData, setTableData] = useState([]);
//   const [isEdit, setIsEdit] = useState(false);
//   const [selectedRowId, setSelectedRowId] = useState(null);
//   const [errors, setErrors] = useState({}); 


//   // 🔹 Fetch Table Data (Columns + Rows)
//  const fetchTableData = useCallback(async () => {
//   if (!selectedTable) return;

//   try {
//     const res = await axios.get(
//       `http://localhost:5000/api/auth/getDataByObjectId?object_id=${selectedTable.object_id}`
//     );

//     setTableData(res.data.data || []);
//     setTableColumns(res.data.columns || []);
//   } catch (err) {
//     console.error(err);
//     setTableData([]);
//     setTableColumns([]);
//   }
// }, [selectedTable]); // ✅ dependency array me selectedTable hai

//   // 🔹 Fetch Columns for Form
//   const fetchColumns = async () => {
//     if (!selectedTable) return;

//     try {
//       const res = await axios.get(
//         `http://localhost:5000/api/auth/columnsget?object_id=${selectedTable.object_id}`
//       );

//       setColumns(res.data || []);

//       const initialData = {};
//       res.data.forEach((col) => {
//         initialData[col.column_name] = "";
//       });

//       setFormData(initialData);

//     } catch (err) {
//       console.error(err);
//       setColumns([]);
//       setFormData({});
//     }
//   };

// useEffect(() => {
//   fetchTableData();
// }, [fetchTableData]); // ✅ now ESLint happy


//   // 🔹 Open Modal
//   const handleOpenModal = async () => {
//     if (!selectedTable) return alert("Please select a table first");
//     setIsEdit(false);
//     setSelectedRowId(null);
//     await fetchColumns();
//     setOpenModal(true);
//   };

//   // 🔹 Form Change
//   const handleChange = (columnName, value) => {
//     setFormData((prev) => ({ ...prev, [columnName]: value }));
//   };

//   // 🔹 Submit
// const handleSubmit = async () => {
//   const newErrors = {};

//   columns.forEach((col) => {
//     const value = formData[col.column_name];

//     // Safe check for empty
//     if (
//       value === undefined || 
//       value === null || 
//       (typeof value === "string" && value.trim() === "")
//     ) {
//       newErrors[col.column_name] = `${col.form_label || col.column_name} is required`;
//     }
//   });

//   if (Object.keys(newErrors).length > 0) {
//     setErrors(newErrors);
//     return; // Stop submission
//   }

//   try {
//     if (isEdit) {
//       await axios.put(
//         "http://localhost:5000/api/auth/updateDataById",
//         {
//           object_id: selectedTable.object_id,
//           id: selectedRowId,
//           data: formData
//         }
//       );
//     } else {
//       await axios.post(
//         "http://localhost:5000/api/auth/getTableDataByObjectId",
//         {
//           object_id: selectedTable.object_id,
//           data: formData
//         }
//       );
//     }

//     setOpenModal(false);
//     fetchTableData();
//     setErrors({});
//   } catch (err) {
//     console.error(err);
//     alert("Operation failed");
//   }
// };



//   // 🔹 Edit Row
//   const handleEdit = async (row) => {
//     await fetchColumns();

//     const editData = {};
//     columns.forEach((col) => {
//       editData[col.column_name] = row[col.column_name] || "";
//     });

//     setFormData(editData);
//     setSelectedRowId(row.id);
//     setIsEdit(true);
//     setOpenModal(true);
//   };

//   // 🔹 Delete Row
//   const handleDelete = async (row) => {
//     if (!window.confirm("Are you sure you want to delete this row?")) return;

//     try {
//       await axios.delete(
//         "http://localhost:5000/api/auth/deleteDataById",
//         {
//           data: {
//             object_id: selectedTable.object_id,
//             id: row.id
//           }
//         }
//       );

//       fetchTableData();
//     } catch (err) {
//       console.error(err);
//       alert("Delete failed");
//     }
//   };
// console.log(fetchTableData)

//   return (
//     <Box>
//       <Typography variant="h4" gutterBottom>
//         {selectedTable?.object_name || "Table"} - Form
//       </Typography>

//       <Button
//         variant="contained"
//         onClick={handleOpenModal}
//         disabled={!selectedTable}
//         sx={{ mt: 2, px: 5, py: 1.8, fontSize: 16, borderRadius: 2 }}
//       >
//         Add Record
//       </Button>

//       {/* 🔹 Modal */}
//       <Modal open={openModal} onClose={() => setOpenModal(false)}>
//         <Box
//           sx={{
//             position: "absolute",
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//             width: 500,
//             maxHeight: "80vh",
//             bgcolor: "background.paper",
//             borderRadius: 2,
//             boxShadow: 24,
//             p: 4,
//             overflowY: "auto",
//           }}
//         >
//           {columns.length === 0 ? (
//             <Typography>No fields available</Typography>
//           ) : (
//             columns.map((col) => (
//            <TextField
//   key={col.column_name}
//   label={col.form_label || col.column_name}
//   fullWidth
//   sx={{ mb: 2 }}
//   value={formData[col.column_name] || ""}
//   onChange={(e) => handleChange(col.column_name, e.target.value)}
//   error={!!errors[col.column_name]}
//   helperText={errors[col.column_name] || ""}
// />

//             ))
//           )}

//           <Button
//             variant="contained"   
//             sx={{ mt: 2 }}
//             onClick={handleSubmit}
//           >
//             {isEdit ? "Update" : "Submit"}
//           </Button>
//         </Box>
//       </Modal>

//       {/* 🔹 Table */}
//       {tableColumns.length > 0 && (

// <TableContainer component={Paper} sx={{ mt: 4 }}>
//   <Table size="small">
//     <TableHead>
//       <TableRow>
//         {tableColumns.map((col, index) => (
//           <TableCell
//             key={col}
//             sx={{
//               fontWeight: "bold",
//               py: 0.5,
//               px: 1,
//               whiteSpace: "nowrap",
//               borderBottom: "1px solid #9e9e9e", // dark gray horizontal
//               borderRight: index !== tableColumns.length - 1 ? "1px solid #9e9e9e" : "none" // dark gray vertical
//             }}
//           >
//             {col}
//           </TableCell>
//         ))}
//         <TableCell
//           sx={{
//             fontWeight: "bold",
//             py: 0.5,
//             px: 1,
//             borderBottom: "1px solid #9e9e9e"
//           }}
//         >
//           Actions
//         </TableCell>
//       </TableRow>
//     </TableHead>

//     <TableBody>
//       {tableData.length === 0 ? (
//         <TableRow>
//           <TableCell
//             colSpan={tableColumns.length + 1}
//             align="center"
//             sx={{ py: 0.5, borderBottom: "1px solid #9e9e9e" }}
//           >
//             No Records Found
//           </TableCell>
//         </TableRow>
//       ) : (
//         tableData.map((row) => (
//           <TableRow key={row.id}>
//             {tableColumns.map((col, index) => (
//               <TableCell
//                 key={col}
//                 sx={{
//                   py: 0.5,
//                   px: 1,
//                   whiteSpace: "nowrap",
//                   borderBottom: "1px solid #9e9e9e",
//                   borderRight: index !== tableColumns.length - 1 ? "1px solid #9e9e9e" : "none"
//                 }}
//               >
//                 {row[col]}
//               </TableCell>
//             ))}
//             <TableCell sx={{ py: 0.5, px: 1, borderBottom: "1px solid #9e9e9e" }}>
//               <IconButton color="primary" onClick={() => handleEdit(row)}>
//                 <EditIcon />
//               </IconButton>
//               <IconButton color="error" onClick={() => handleDelete(row)}>
//                 <DeleteIcon />
//               </IconButton>
//             </TableCell>
//           </TableRow>
//         ))
//       )}
//     </TableBody>
//   </Table>
// </TableContainer>

//       )}
//     </Box>
//   );
// };

// export default ManagePage;










import React, { useState, useEffect, useCallback } from "react";
import {
  Box,
  Typography,
  Button,
  Modal,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";

const ManagePage = ({ selectedTable }) => {
  const [columns, setColumns] = useState([]);
  const [tableColumns, setTableColumns] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState({});
  const [tableData, setTableData] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [selectedRowId, setSelectedRowId] = useState(null);
  const [errors, setErrors] = useState({});

  // ✅ Fetch Table Data
  const fetchTableData = useCallback(async () => {
    if (!selectedTable) return;
    try {
      const res = await axios.get(
        `http://localhost:5000/api/auth/getDataByObjectId?object_id=${selectedTable.object_id}`
      );
      setTableData(res.data.data || []);
      setTableColumns(res.data.columns || []);
    } catch (err) {
      console.error(err);
      setTableData([]);
      setTableColumns([]);
    }
  }, [selectedTable]);

  // ✅ Fetch Columns
  const fetchColumns = async () => {
    if (!selectedTable) return;
    try {
      const res = await axios.get(
        `http://localhost:5000/api/auth/columnsget?object_id=${selectedTable.object_id}`
      );
      setColumns(res.data || []);
      const initialData = {};
      res.data.forEach((col) => {
        initialData[col.column_name] = "";
      });
      setFormData(initialData);
      setErrors({});
    } catch (err) {
      console.error(err);
      setColumns([]);
      setFormData({});
      setErrors({});
    }
  };

  useEffect(() => {
    fetchTableData();
  }, [fetchTableData]);

  // ✅ Open Modal
  const handleOpenModal = async () => {
    if (!selectedTable) return alert("Please select a table first");
    setIsEdit(false);
    setSelectedRowId(null);
    await fetchColumns();
    setOpenModal(true);
  };

  const handleChange = (columnName, value) => {
    setFormData((prev) => ({ ...prev, [columnName]: value }));

    setErrors((prev) => {
      const newErrors = { ...prev };
      if (value === undefined || value === null || (typeof value === "string" && value.trim() === "")) {
        newErrors[columnName] = `${columnName} is required`;
      } else {
        delete newErrors[columnName];
      }
      return newErrors;
    });
  };

  const handleSubmit = async () => {
    const newErrors = {};

    columns.forEach((col) => {
      const value = formData[col.column_name];
      if (value === undefined || value === null) {
        newErrors[col.column_name] = `${col.form_label || col.column_name} is required`;
      } else if (typeof value === "string" && value.trim() === "") {
        newErrors[col.column_name] = `${col.form_label || col.column_name} is required`;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return; // Stop submission
    }

    try {
      if (isEdit) {
        await axios.put("http://localhost:5000/api/auth/updateDataById", {
          object_id: selectedTable.object_id,
          id: selectedRowId,
          data: formData
        });
      } else {
        await axios.post("http://localhost:5000/api/auth/getTableDataByObjectId", {
          object_id: selectedTable.object_id,
          data: formData
        });
      }

      setOpenModal(false);
      fetchTableData();
      setErrors({});
    } catch (err) {
      console.error(err);
      alert("Operation failed");
    }
  };

  const handleEdit = async (row) => {
    await fetchColumns();
    const editData = {};
    columns.forEach((col) => {
      const val = row[col.column_name];
      editData[col.column_name] = val !== null && val !== undefined ? val : "";
    });
    setFormData(editData);
    setSelectedRowId(row.id);
    setIsEdit(true);
    setOpenModal(true);
  };

  const handleDelete = async (row) => {
    if (!window.confirm("Are you sure you want to delete this row?")) return;
    try {
      await axios.delete("http://localhost:5000/api/auth/deleteDataById", {
        data: { object_id: selectedTable.object_id, id: row.id }
      });
      fetchTableData();
    } catch (err) {
      console.error(err);
      alert("Delete failed");
    }
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        {selectedTable?.object_name || "Table"} - Form
      </Typography>

      <Button
        variant="contained"
        onClick={handleOpenModal}
        disabled={!selectedTable}
        sx={{ mt: 2, px: 5, py: 1.8, fontSize: 16, borderRadius: 2 }}
      >
        Add Record
      </Button>

      {/* 🔹 Modal */}
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 500,
            maxHeight: "80vh",
            bgcolor: "background.paper",
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
            overflowY: "auto"
          }}
        >
          {columns.length === 0 ? (
            <Typography>No fields available</Typography>
          ) : (
            columns.map((col) => (
              <TextField
                key={col.column_name}
                label={col.form_label || col.column_name}
                fullWidth
                sx={{ mb: 2 }}
                value={formData[col.column_name] || ""}
                onChange={(e) => handleChange(col.column_name, e.target.value)}
                error={!!errors[col.column_name]}
                helperText={errors[col.column_name] || ""}
              />
            ))
          )}

          <Button
            variant="contained"
            sx={{ mt: 2 }}
            onClick={handleSubmit}
            disabled={Object.keys(errors).length > 0} // disable if errors exist
          >
            {isEdit ? "Update" : "Submit"}
          </Button>
        </Box>
      </Modal>

      {/* 🔹 Table */}
      {tableColumns.length > 0 && (
        <TableContainer component={Paper} sx={{ mt: 4 }}>
          <Table size="small">
            <TableHead>
              <TableRow>
                {tableColumns.map((col, index) => (
                  <TableCell
                    key={col}
                    sx={{
                      fontWeight: "bold",
                      py: 0.5,
                      px: 1,
                      whiteSpace: "nowrap",
                      borderBottom: "1px solid #9e9e9e",
                      borderRight: index !== tableColumns.length - 1 ? "1px solid #9e9e9e" : "none"
                    }}
                  >
                    {col}
                  </TableCell>
                ))}
                <TableCell
                  sx={{ fontWeight: "bold", py: 0.5, px: 1, borderBottom: "1px solid #9e9e9e" }}
                >
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {tableData.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={tableColumns.length + 1} align="center" sx={{ py: 0.5, borderBottom: "1px solid #9e9e9e" }}>
                    No Records Found
                  </TableCell>
                </TableRow>
              ) : (
                tableData.map((row) => (
                  <TableRow key={row.id}>
                    {tableColumns.map((col, index) => (
                      <TableCell
                        key={col}
                        sx={{
                          py: 0.5,
                          px: 1,
                          whiteSpace: "nowrap",
                          borderBottom: "1px solid #9e9e9e",
                          borderRight: index !== tableColumns.length - 1 ? "1px solid #9e9e9e" : "none"
                        }}
                      >
                        {row[col]}
                      </TableCell>
                    ))}
                    <TableCell sx={{ py: 0.5, px: 1, borderBottom: "1px solid #9e9e9e" }}>
                      <IconButton color="primary" onClick={() => handleEdit(row)}>
                        <EditIcon />
                      </IconButton>
                      <IconButton color="error" onClick={() => handleDelete(row)}>
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};

export default ManagePage;




















