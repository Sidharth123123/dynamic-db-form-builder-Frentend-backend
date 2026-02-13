// // Button1Page.js
// import React, { useEffect, useState } from "react";
// import {
//   Box,
//   Typography,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Radio,
//   Checkbox,
//   CircularProgress,
// } from "@mui/material";
// import axios from "axios";

// const Button1Page = () => {
//   const [tables, setTables] = useState([]);
//   const [columns, setColumns] = useState([]);
//   const [loadingTables, setLoadingTables] = useState(true);
//   const [loadingColumns, setLoadingColumns] = useState(false);
//   const [selectedObjectId, setSelectedObjectId] = useState(null);
//   const [selectedColumn, setSelectedColumn] = useState(null);
//   const [selectedTables, setSelectedTables] = useState({});

//   // ✅ Fetch Objects
//   const fetchUsedObjects = async () => {
//     try {
//       setLoadingTables(true);
//       const res = await axios.get(
//         "http://localhost:5000/api/auth/getUsedObjects1"
//       );

//       setTables(res.data || []);

//       const initialState = {};
//       (res.data || []).forEach((obj) => {
//         const objectId = obj.object_id || obj.id;
//         initialState[objectId] = false;
//       });

//       setSelectedTables(initialState);
//       setLoadingTables(false);
//     } catch (error) {
//       console.error("Error fetching objects:", error);
//       setLoadingTables(false);
//     }
//   };

//   // ✅ Fetch Columns by Object ID
//   const fetchColumns = async (objectId) => {
//     try {
//       setLoadingColumns(true);
//       setSelectedObjectId(objectId);

//       const res = await axios.get(
//         `http://localhost:5000/api/auth/getDataByObjectId?object_id=${objectId}`
//       );

//       setColumns(res.data || []);
//       setSelectedColumn(null);
//       setLoadingColumns(false);
//     } catch (error) {
//       console.error("Error fetching columns:", error);
//       setColumns([]);
//       setLoadingColumns(false);
//     }
//   };

//   // ✅ Toggle Checkbox
//   const handleToggleTable = (objectId) => {
//     setSelectedTables((prev) => ({
//       ...prev,
//       [objectId]: !prev[objectId],
//     }));

//     // fetch columns when checked
//     fetchColumns(objectId);
//   };

//   const handleSelectColumn = (columnId) => {
//     setSelectedColumn(columnId);
//   };

//   useEffect(() => {
//     fetchUsedObjects();
//   }, []);

//   return (
//     <Box sx={{ p: 3 }}>
//       <Typography variant="h4" gutterBottom>
//         Button1 Page
//       </Typography>

//       {loadingTables ? (
//         <CircularProgress />
//       ) : (
//         <TableContainer component={Paper} sx={{ mb: 3 }}>
//           <Table>
//             <TableHead sx={{ bgcolor: "#1976d2" }}>
//               <TableRow>
//                 <TableCell sx={{ color: "white" }}>Select</TableCell>
//                 <TableCell sx={{ color: "white" }}>Object ID</TableCell>
//                 <TableCell sx={{ color: "white" }}>Object Name</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {tables.map((obj) => {
//                 const objectId = obj.object_id || obj.id;
//                 const objectName = obj.object_name || obj.name;

//                 return (
//                   <TableRow key={objectId}>
//                     <TableCell>
//                       <Checkbox
//                         checked={selectedTables[objectId] || false}
//                         onChange={() => handleToggleTable(objectId)}
//                       />
//                     </TableCell>
//                     <TableCell>{objectId}</TableCell>
//                     <TableCell
//                       sx={{ cursor: "pointer", color: "#1976d2" }}
//                       onClick={() => fetchColumns(objectId)}
//                     >
//                       {objectName}
//                     </TableCell>
//                   </TableRow>
//                 );
//               })}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       )}

//       {/* Columns */}
//       {selectedObjectId && (
//         <Box>
//           <Typography variant="h6" sx={{ mb: 2 }}>
//             Columns for Object ID: {selectedObjectId}
//           </Typography>

//           {loadingColumns ? (
//             <CircularProgress />
//           ) : columns.length > 0 ? (
//             <TableContainer component={Paper}>
//               <Table>
//                 <TableHead sx={{ bgcolor: "#1976d2" }}>
//                   <TableRow>
//                     <TableCell sx={{ color: "white" }}>Select</TableCell>
//                     <TableCell sx={{ color: "white" }}>Column ID</TableCell>
//                     <TableCell sx={{ color: "white" }}>Column Name</TableCell>
//                     <TableCell sx={{ color: "white" }}>Column Type</TableCell>
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   {columns.map((col) => {
//                     const columnId = col.column_id || col.id;

//                     return (
//                       <TableRow key={columnId}>
//                         <TableCell>
//                           <Radio
//                             checked={selectedColumn === columnId}
//                             onChange={() => handleSelectColumn(columnId)}
//                           />
//                         </TableCell>
//                         <TableCell>{columnId}</TableCell>
//                         <TableCell>{col.column_name}</TableCell>
//                         <TableCell>{col.data_type || "N/A"}</TableCell>
//                       </TableRow>
//                     );
//                   })}
//                 </TableBody>
//               </Table>
//             </TableContainer>
//           ) : (
//             <Typography>No columns found</Typography>
//           )}
//         </Box>
//       )}
//     </Box>
//   );
// };

// export default Button1Page;


















// import React, { useEffect, useState } from "react";
// import {
//   Box,
//   Typography,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   CircularProgress,
//   Checkbox,
//   Radio,
// } from "@mui/material";
// import axios from "axios";

// const Button1Page = () => {
//   const [objects, setObjects] = useState([]);
//   const [selectedObjects, setSelectedObjects] = useState({});
//   const [tableData, setTableData] = useState([]);
//   const [columns, setColumns] = useState([]);
//   const [selectedObjectId, setSelectedObjectId] = useState(null);
//   const [selectedRowId, setSelectedRowId] = useState(null);
//   const [loadingObjects, setLoadingObjects] = useState(true);
//   const [loadingData, setLoadingData] = useState(false);

//   // Fetch Objects
//   const fetchObjects = async () => {
//     try {
//       const res = await axios.get(
//         "http://localhost:5000/api/auth/getUsedObjects1"
//       );
//       setObjects(res.data || []);

//       const initial = {};
//       (res.data || []).forEach((obj) => {
//         initial[obj.object_id] = false;
//       });
//       setSelectedObjects(initial);

//       setLoadingObjects(false);
//     } catch (err) {
//       console.error(err);
//       setLoadingObjects(false);
//     }
//   };

//   // Fetch Data by Object ID
//   const fetchDataByObjectId = async (objectId) => {
//     try {
//       setLoadingData(true);
//       setSelectedObjectId(objectId);

//       const res = await axios.get(
//         `http://localhost:5000/api/auth/getDataByObjectId?object_id=${objectId}`
//       );

//       const data = res.data.data || [];

//       setTableData(data);

//       if (data.length > 0) {
//         setColumns(Object.keys(data[0]));
//       } else {
//         setColumns([]);
//       }

//       setSelectedRowId(null); // reset radio selection
//       setLoadingData(false);
//     } catch (err) {
//       console.error(err);
//       setTableData([]);
//       setColumns([]);
//       setLoadingData(false);
//     }
//   };

//   useEffect(() => {
//     fetchObjects();
//   }, []);

//   // Only checkbox toggle (separate from row click)
  
//   const handleObjectCheckbox = (objectId) => {
//     setSelectedObjects((prev) => ({
//       ...prev,
//       [objectId]: !prev[objectId],
//     }));
//   };


//   return (

// <Box sx={{ p: 3, backgroundColor: "#f0f2f5", minHeight: "100vh" }}>
//   {/* Header */}
//   <Typography
//     variant="h5"
//     sx={{ mb: 3, fontWeight: 700, color: "#1f2937" }}
//   >
//     Button1 Page
//   </Typography>

//   {/* Tables Side by Side */}
//   <Box sx={{ display: "flex", gap: 4, alignItems: "flex-start" }}>
//     {/* LEFT TABLE - DATA */}
//     <Box sx={{ flex: 1 }}>
//       <Paper
//         sx={{
//           borderRadius: 4,
//           overflow: "hidden",
//           boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
//           border: "1px solid #e5e7eb",
//           backgroundColor: "#ffffff",
//         }}
//       >
//         {/* Header */}
//         <Box
//           sx={{
//             px: 3,
//             py: 2,
//             backgroundColor: "#ffffff",
//             borderBottom: "1px solid #e5e7eb",
//           }}
//         >
//           <Typography variant="subtitle1" fontWeight={700}>
//             Data for Object ID: {selectedObjectId || "-"}
//           </Typography>
//         </Box>

//         {/* Table Body */}
//         {loadingData ? (
//           <Box sx={{ p: 4, textAlign: "center" }}>
//             <CircularProgress size={28} />
//           </Box>
//         ) : columns.length > 0 ? (
//           <TableContainer sx={{ maxHeight: 450 }}>
//             <Table
//               size="small"
//               stickyHeader
//               sx={{
//                 "& .MuiTableCell-root": {
//                   fontSize: "14px",
//                   padding: "10px 16px",
//                   borderBottom: "1px solid #f1f3f6",
//                   color: "#374151",
//                 },
//                 "& .MuiTableHead-root .MuiTableCell-root": {
//                   backgroundColor: "#f8fafc",
//                   fontWeight: 600,
//                   color: "#1f2937",
//                 },
//                 "& .MuiTableRow-root:hover": {
//                   backgroundColor: "#f3f6fb",
//                 },
//               }}
//             >
//               <TableHead>
//                 <TableRow>
//                   <TableCell width={60}>Select</TableCell>
//                   {columns.map((col) => (
//                     <TableCell key={col}>{col}</TableCell>
//                   ))}
//                 </TableRow>
//               </TableHead>

//               <TableBody>
//                 {tableData.map((row, index) => (
//                   <TableRow
//                     key={index}
//                     sx={{
//                       backgroundColor:
//                         selectedRowId === row.id ? "#e8f0fe" : "transparent",
//                     }}
//                   >
//                     <TableCell>
//                       <Radio
//                         size="small"
//                         checked={selectedRowId === row.id}
//                         onChange={() => setSelectedRowId(row.id)}
//                       />
//                     </TableCell>

//                     {columns.map((col) => (
//                       <TableCell key={col}>{row[col]}</TableCell>
//                     ))}
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         ) : (
//           <Box sx={{ p: 4, textAlign: "center" }}>
//             <Typography color="text.secondary">No Data Found</Typography>
//           </Box>
//         )}
//       </Paper>
//     </Box>

//     {/* RIGHT TABLE - OBJECTS */}
//     <Box sx={{ width: 340 }}>
//       <Paper
//         sx={{
//           borderRadius: 4,
//           overflow: "hidden",
//           boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
//           border: "1px solid #e5e7eb",
//           backgroundColor: "#ffffff",
//         }}
//       >
//         {/* Header */}
//         <Box
//           sx={{
//             px: 3,
//             py: 2,
//             backgroundColor: "#ffffff",
//             borderBottom: "1px solid #e5e7eb",
//           }}
//         >
//           <Typography variant="subtitle1" fontWeight={700}>
//             Objects
//           </Typography>
//         </Box>

//         {/* Table Body */}
//         {loadingObjects ? (
//           <Box sx={{ p: 4, textAlign: "center" }}>
//             <CircularProgress size={28} />
//           </Box>
//         ) : (
//           <TableContainer sx={{ maxHeight: 450 }}>
//             <Table
//               size="small"
//               stickyHeader
//               sx={{
//                 "& .MuiTableCell-root": {
//                   fontSize: "14px",
//                   padding: "10px 16px",
//                   borderBottom: "1px solid #f1f3f6",
//                   color: "#374151",
//                 },
//                 "& .MuiTableHead-root .MuiTableCell-root": {
//                   backgroundColor: "#f8fafc",
//                   fontWeight: 600,
//                   color: "#1f2937",
//                 },
//                 "& .MuiTableRow-root:hover": {
//                   backgroundColor: "#f3f6fb",
//                 },
//               }}
//             >
//               <TableHead>
//                 <TableRow>
//                   <TableCell width={60}>Select</TableCell>
//                   <TableCell align="center">ID</TableCell>
//                   <TableCell>Name</TableCell>
//                 </TableRow>
//               </TableHead>

//               <TableBody>
//                 {objects.map((obj) => (
//                   <TableRow
//                     key={obj.object_id}
//                     hover
//                     onClick={() => fetchDataByObjectId(obj.object_id)}
//                     sx={{ cursor: "pointer" }}
//                   >
//                     <TableCell onClick={(e) => e.stopPropagation()}>
//                       <Checkbox
//                         size="small"
//                         checked={selectedObjects[obj.object_id] || false}
//                         onChange={() => handleObjectCheckbox(obj.object_id)}
//                       />
//                     </TableCell>

//                     <TableCell align="center">{obj.object_id}</TableCell>
//                     <TableCell>{obj.object_name}</TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         )}
//       </Paper>
//     </Box>
//   </Box>
// </Box>

//   );
// };




// export default Button1Page;








// import React, { useEffect, useState } from "react";
// import {
//   Box,
//   Typography,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   CircularProgress,
//   Checkbox,
//   Radio,
// } from "@mui/material";
// import axios from "axios";

// const Button1Page = () => {
//   const [objects, setObjects] = useState([]);
//   const [selectedObjects, setSelectedObjects] = useState({});
//   const [tableData, setTableData] = useState([]);
//   const [columns, setColumns] = useState([]);
//   const [selectedObjectId, setSelectedObjectId] = useState(null);
// const [selectedProfileId, setSelectedProfileId] = useState(null);
//   const [loadingObjects, setLoadingObjects] = useState(true);
//   const [loadingData, setLoadingData] = useState(false);

//   const profile_id = 1; // example profile id, replace with your logic

//   // Fetch Objects
//   const fetchObjects = async () => {
//     try {
//       const res = await axios.get(
//         "http://localhost:5000/api/auth/getUsedObjects1"
//       );
//       setObjects(res.data || []);

//       const initial = {};
//       (res.data || []).forEach((obj) => {
//         initial[obj.object_id] = false;
//       });
//       setSelectedObjects(initial);

//       setLoadingObjects(false);
//     } catch (err) {
//       console.error(err);
//       setLoadingObjects(false);
//     }
//   };

//   // Fetch Data by Object ID
//   const fetchDataByObjectId = async (objectId) => {
//     try {
//       setLoadingData(true);
//       setSelectedObjectId(objectId);

//       const res = await axios.get(
//         `http://localhost:5000/api/auth/getDataByObjectId?object_id=${objectId}`
//       );

//       const data = res.data.data || [];

//       setTableData(data);

//       if (data.length > 0) {
//         setColumns(Object.keys(data[0]));
//       } else {
//         setColumns([]);
//       }

//       setSelectedRowId(null);
//       setLoadingData(false);
//     } catch (err) {
//       console.error(err);
//       setTableData([]);
//       setColumns([]);
//       setLoadingData(false);
//     }
//   };

//   useEffect(() => {
//     fetchObjects();
//   }, []);

//   // 🔹 Handle Object Checkbox
// const handleObjectCheckbox = async (objectId) => {
//   const isSelected = selectedObjects[objectId];
//   setSelectedObjects((prev) => ({
//     ...prev,
//     [objectId]: !prev[objectId],
//   }));

//   if (!selectedProfileId) return;

//   try {
//     if (isSelected) {
//       // Was selected → now unchecking
//       await axios.post("http://localhost:5000/api/auth/uncheckSelection", {
//         profile_id: selectedProfileId,
//         object_id: objectId,
//       });
//     } else {
//       // Was unselected → now checking
//       await axios.post("http://localhost:5000/api/auth/saveSelection", {
//         profile_id: selectedProfileId,
//         object_id: [objectId],
//       });
//     }
//   } catch (err) {
//     console.error(err);
//   }
// };

//   return (
//     <Box sx={{ p: 3, backgroundColor: "#f0f2f5", minHeight: "100vh" }}>
//       <Typography variant="h5" sx={{ mb: 3, fontWeight: 700, color: "#1f2937" }}>
//         Button1 Page
//       </Typography>

//       <Box sx={{ display: "flex", gap: 4, alignItems: "flex-start" }}>
//         {/* LEFT TABLE - DATA */}
//         <Box sx={{ flex: 1 }}>
//           <Paper
//             sx={{
//               borderRadius: 4,
//               overflow: "hidden",
//               boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
//               border: "1px solid #e5e7eb",
//               backgroundColor: "#ffffff",
//             }}
//           >
//             <Box sx={{ px: 3, py: 2, backgroundColor: "#ffffff", borderBottom: "1px solid #e5e7eb" }}>
//               <Typography variant="subtitle1" fontWeight={700}>
//                 Data for Object ID: {selectedObjectId || "-"}
//               </Typography>
//             </Box>

//             {loadingData ? (
//               <Box sx={{ p: 4, textAlign: "center" }}>
//                 <CircularProgress size={28} />
//               </Box>
//             ) : columns.length > 0 ? (
//               <TableContainer sx={{ maxHeight: 450 }}>
//                 <Table
//                   size="small"
//                   stickyHeader
//                   sx={{
//                     "& .MuiTableCell-root": {
//                       fontSize: "14px",
//                       padding: "10px 16px",
//                       borderBottom: "1px solid #f1f3f6",
//                       color: "#374151",
//                     },
//                     "& .MuiTableHead-root .MuiTableCell-root": {
//                       backgroundColor: "#f8fafc",
//                       fontWeight: 600,
//                       color: "#1f2937",
//                     },
//                     "& .MuiTableRow-root:hover": {
//                       backgroundColor: "#f3f6fb",
//                     },
//                   }}
//                 >
//                   <TableHead>
//                     <TableRow>
//                       <TableCell width={60}>Select</TableCell>
//                       {columns.map((col) => (
//                         <TableCell key={col}>{col}</TableCell>
//                       ))}
//                     </TableRow>
//                   </TableHead>

//                   <TableBody>
//                     {tableData.map((row, index) => (
//                       <TableRow
//                         key={index}
//                         sx={{
//                           backgroundColor: selectedRowId === row.id ? "#e8f0fe" : "transparent",
//                         }}
//                       >
//                         <TableCell>
//                           <Radio
//                             size="small"
//                             checked={selectedRowId === row.id}
//                             onChange={() => handleRowSelect(row)}
//                           />
//                         </TableCell>

//                         {columns.map((col) => (
//                           <TableCell key={col}>{row[col]}</TableCell>
//                         ))}
//                       </TableRow>
//                     ))}
//                   </TableBody>
//                 </Table>
//               </TableContainer>
//             ) : (
//               <Box sx={{ p: 4, textAlign: "center" }}>
//                 <Typography color="text.secondary">No Data Found</Typography>
//               </Box>
//             )}
//           </Paper>
//         </Box>

//         {/* RIGHT TABLE - OBJECTS */}
//         <Box sx={{ width: 340 }}>
//           <Paper
//             sx={{
//               borderRadius: 4,
//               overflow: "hidden",
//               boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
//               border: "1px solid #e5e7eb",
//               backgroundColor: "#ffffff",
//             }}
//           >
//             <Box sx={{ px: 3, py: 2, backgroundColor: "#ffffff", borderBottom: "1px solid #e5e7eb" }}>
//               <Typography variant="subtitle1" fontWeight={700}>
//                 Objects
//               </Typography>
//             </Box>

//             {loadingObjects ? (
//               <Box sx={{ p: 4, textAlign: "center" }}>
//                 <CircularProgress size={28} />
//               </Box>
//             ) : (
//               <TableContainer sx={{ maxHeight: 450 }}>
//                 <Table
//                   size="small"
//                   stickyHeader
//                   sx={{
//                     "& .MuiTableCell-root": {
//                       fontSize: "14px",
//                       padding: "10px 16px",
//                       borderBottom: "1px solid #f1f3f6",
//                       color: "#374151",
//                     },
//                     "& .MuiTableHead-root .MuiTableCell-root": {
//                       backgroundColor: "#f8fafc",
//                       fontWeight: 600,
//                       color: "#1f2937",
//                     },
//                     "& .MuiTableRow-root:hover": {
//                       backgroundColor: "#f3f6fb",
//                     },
//                   }}
//                 >
//                   <TableHead>
//                     <TableRow>
//                       <TableCell width={60}>Select</TableCell>
//                       <TableCell align="center">ID</TableCell>
//                       <TableCell>Name</TableCell>
//                     </TableRow>
//                   </TableHead>

//                   <TableBody>
//                     {objects.map((obj) => (
//                       <TableRow
//                         key={obj.object_id}
//                         hover
//                         onClick={() => fetchDataByObjectId(obj.object_id)}
//                         sx={{ cursor: "pointer" }}
//                       >
//                         <TableCell onClick={(e) => e.stopPropagation()}>
//                           <Checkbox
//                             size="small"
//                             checked={selectedObjects[obj.object_id] || false}
//                             onChange={() => handleObjectCheckbox(obj.object_id)}
//                           />
//                         </TableCell>

//                         <TableCell align="center">{obj.object_id}</TableCell>
//                         <TableCell>{obj.object_name}</TableCell>
//                       </TableRow>
//                     ))}
//                   </TableBody>
//                 </Table>
//               </TableContainer>
//             )}
//           </Paper>
//         </Box>
//       </Box>
//     </Box>
//   )
// };

// export default Button1Page;




















// import React, { useEffect, useState } from "react";
// import {
//   Box,
//   Typography,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   CircularProgress,
//   Checkbox,
//   Radio,
//   Button,
// } from "@mui/material";
// import axios from "axios";

// const Button1Page = () => {
//   const [objects, setObjects] = useState([]);
//   const [selectedObjects, setSelectedObjects] = useState({});
//   const [tableData, setTableData] = useState([]);
//   const [columns, setColumns] = useState([]);
//   const [selectedObjectId, setSelectedObjectId] = useState(null);
//   const [selectedRowId, setSelectedRowId] = useState(null);
//   const [loadingObjects, setLoadingObjects] = useState(true);
//   const [loadingData, setLoadingData] = useState(false);
//   const [saving, setSaving] = useState(false);

//   // 🔹 Fetch Objects
//   const fetchObjects = async () => {
//     try {
//       const res = await axios.get(
//         "http://localhost:5000/api/auth/getUsedObjects1"
//       );
//       setObjects(res.data || []);
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoadingObjects(false);
//     }
//   };

//   // 🔹 Fetch Table Data by Object
//   const fetchDataByObjectId = async (objectId) => {
//     setLoadingData(true);
//     setSelectedObjectId(objectId);
//     setSelectedRowId(null); // Reset previous selection

//     try {
//       const res = await axios.get(
//         `http://localhost:5000/api/auth/getDataByObjectId?object_id=${objectId}`
//       );
//       const data = res.data.data || [];
//       setTableData(data);
//       setColumns(data.length > 0 ? Object.keys(data[0]) : []);
//     } catch (err) {
//       console.error(err);
//       setTableData([]);
//       setColumns([]);
//     } finally {
//       setLoadingData(false);
//     }
//   };

//   // 🔹 Row Selection (Profile Selection)
//   const handleRowSelect = (rowId) => {
//     setSelectedRowId((prev) => (prev === rowId ? null : rowId));
//   };

//   // 🔹 Object Checkbox
//   const handleObjectCheckbox = (objectId) => {
//     if (!selectedRowId) {
//       alert("Select profile row first!");
//       return;
//     }

//     setSelectedObjects((prev) => {
//       const newValue = !prev[objectId];
//       const updated = { ...prev, [objectId]: newValue };

//       // If unchecked → delete from DB
//       if (!newValue) {
//         axios
//           .delete("http://localhost:5000/api/auth/uncheckSelection", {
//             data: { profile_id: selectedRowId, object_id: objectId },
//           })
//           .then((res) => console.log("Unchecked deleted"))
//           .catch((err) =>
//             console.error(err.response?.data || err.message)
//           );
//       }

//       return updated;
//     });
//   };

//   // 🔹 Save Selection
//   const saveSelection = async () => {
//     if (!selectedRowId) {
//       alert("Select profile row first!");
//       return;
//     }

//     const selectedObjIds = Object.keys(selectedObjects).filter(
//       (id) => selectedObjects[id]
//     );

//     if (selectedObjIds.length === 0) {
//       alert("Select at least one object!");
//       return;
//     }

//     setSaving(true);

//     try {
//      await axios.post(
//   "http://localhost:5000/api/auth/saveSelection", // ✅ yahi correct
//   {
//     profile_id: selectedRowId,
//     object_id: selectedObjIds,
//   }

// );



//       // Reset selection
//       setSelectedObjects({});
//     } catch (err) {
//       console.error(err.response?.data || err.message);
//       alert(err.response?.data?.error || "Error saving data");
//     } finally {
//       setSaving(false);
//     }
//   };

//   useEffect(() => {
//     fetchObjects();
//   }, []);

//   return (
//     <Box sx={{ p: 3 }}>
//       <Typography variant="h5" sx={{ mb: 3, fontWeight: 700 }}>
//         Button1 Page
//       </Typography>

//       <Box sx={{ display: "flex", gap: 4, alignItems: "flex-start" }}>
//         {/* LEFT TABLE - Profile Rows */}
//         <Box sx={{ flex: 2 }}>
//           <Paper sx={{ borderRadius: 2, p: 2 }}>
//             <Typography sx={{ mb: 1 }}>
//               Data for Object ID: {selectedObjectId || "-"}
//             </Typography>

//             {loadingData ? (
//               <CircularProgress />
//             ) : tableData.length > 0 ? (
//               <TableContainer>
//                 <Table size="small">
//                   <TableHead>
//                     <TableRow>
//                       <TableCell>Select</TableCell>
//                       {columns.map((col) => (
//                         <TableCell key={col}>{col}</TableCell>
//                       ))}
//                     </TableRow>
//                   </TableHead>
//                   <TableBody>
//                     {tableData.map((row) => (
//                       <TableRow
//                         key={row.id}
//                         sx={{
//                           backgroundColor:
//                             selectedRowId === row.id ? "#e8f0fe" : "transparent",
//                         }}
//                       >
//                         <TableCell>
//                           <Radio
//                             checked={selectedRowId === row.id}
//                             onChange={() => handleRowSelect(row.id)}
//                           />
//                         </TableCell>
//                         {columns.map((col) => (
//                           <TableCell key={col}>{row[col]}</TableCell>
//                         ))}
//                       </TableRow>
//                     ))}
//                   </TableBody>
//                 </Table>
//               </TableContainer>
//             ) : (
//               <Typography>No Data Found</Typography>
//             )}
//           </Paper>
//         </Box>

//         {/* RIGHT TABLE - Objects */}
//         <Box sx={{ flex: 1 }}>
//           <Paper sx={{ borderRadius: 2, p: 2 }}>
//             {loadingObjects ? (
//               <CircularProgress />
//             ) : (
//               <TableContainer>
//                 <Table size="small">
//                   <TableHead>
//                     <TableRow>
//                       <TableCell>Select</TableCell>
//                       <TableCell>ID</TableCell>
//                       <TableCell>Name</TableCell>
//                     </TableRow>
//                   </TableHead>
//                   <TableBody>
//                     {objects.map((obj) => (
//                       <TableRow
//                         key={obj.object_id}
//                         hover
//                         onClick={() => fetchDataByObjectId(obj.object_id)}
//                         sx={{ cursor: "pointer" }}
//                       >
//                         <TableCell onClick={(e) => e.stopPropagation()}>
//                           <Checkbox
//                             checked={selectedObjects[obj.object_id] || false}
//                             onChange={() => handleObjectCheckbox(obj.object_id)}
//                           />
//                         </TableCell>
//                         <TableCell>{obj.object_id}</TableCell>
//                         <TableCell>{obj.object_name}</TableCell>
//                       </TableRow>
//                     ))}
//                   </TableBody>
//                 </Table>
//               </TableContainer>
//             )}
//           </Paper>

//           <Box sx={{ mt: 2 }}>
//             <Button
//               variant="contained"
//               fullWidth
//               onClick={saveSelection}
//               disabled={saving}
//             >
//               {saving ? "Saving..." : "Save Selection"}
//             </Button>
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Button1Page;










import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
  Checkbox,
  Radio,
  Button,
} from "@mui/material";
import axios from "axios";

const Button1Page = () => {
  const [objects, setObjects] = useState([]);
  const [selectedObjects, setSelectedObjects] = useState({});
  const [profilesData, setProfilesData] = useState([]);
  const [selectedProfileId, setSelectedProfileId] = useState(null);
  const [loadingObjects, setLoadingObjects] = useState(true);
  const [loadingProfiles, setLoadingProfiles] = useState(false);
  const [saving, setSaving] = useState(false);


  const fetchObjects = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/auth/getUsedObjects1");
      setObjects(res.data || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingObjects(false);
    }
  };


const fetchProfilesData = async () => {
  setLoadingProfiles(true);
  try {
    const res = await axios.get(
      "http://localhost:5000/api/auth/getProfileDataByObjectId"
    );
    // ✅ Fix: assign res.data.data
    const data = res.data?.data || [];
    setProfilesData(data);

    if (data.length > 0) {
      setSelectedProfileId(data[0].id); // first row selected by default
    }
  } catch (err) {
    console.error(err);
    setProfilesData([]);
  } finally {
    setLoadingProfiles(false);
  }
};


const handleProfileSelect = (profileId) => {
  setSelectedProfileId(profileId);
  localStorage.setItem("lastProfileId", profileId);
  loadSelectedObjects(profileId);
};








//  const handleObjectCheckbox = async (objectId) => {
//   if (!selectedProfileId) {
//     alert("Select profile first!");
//     return;
//   }

//   const newValue = !selectedObjects[objectId];

//   setSelectedObjects((prev) => ({
//     ...prev,
//     [objectId]: newValue,
//   }));

//   try {
//     if (newValue) {
//       // ✅ CHECKED → POST
//       await axios.post("http://localhost:5000/api/auth/saveSelection", {
//         profile_id: selectedProfileId,
//         object_id: [objectId],
//       });
//     } else {
//       // ✅ UNCHECKED → DELETE
//       await axios.delete("http://localhost:5000/api/auth/uncheckSelection", {
//         data: {
//           profile_id: selectedProfileId,
//           object_id: objectId,
//         },
//       });
//     }
//   } catch (err) {
//     console.error(err.response?.data || err.message);
//   }
// };










const handleObjectCheckbox = async (objectId) => {
  if (!selectedProfileId) {
    alert("Select profile first!");
    return;
  }

  const newValue = !selectedObjects[objectId];

  // UI instant update (optimistic update)
  setSelectedObjects((prev) => ({
    ...prev,
    [objectId]: newValue,
  }));

  try {
    await axios.post("http://localhost:5000/api/auth/updateSelection", {
      profile_id: selectedProfileId,
      object_id: [objectId],
      action: newValue ? "check" : "uncheck",
    });
  } catch (err) {
    console.error(err.response?.data || err.message);

    // ❗ Agar error aaye to revert UI
    setSelectedObjects((prev) => ({
      ...prev,
      [objectId]: !newValue,
    }));
  }
};









  const saveSelection = async () => {
    if (!selectedProfileId) {
      alert("Select profile first!");
      return;
    }

    const selectedObjIds = Object.keys(selectedObjects).filter(
      (id) => selectedObjects[id]
    );

    if (selectedObjIds.length === 0) {
      alert("Select at least one object!");
      return;
    }

    setSaving(true);
    try {
      await axios.post("http://localhost:5000/api/auth/saveSelection", {
        profile_id: selectedProfileId,
        object_id: selectedObjIds,
      });
      alert("Saved Successfully");
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert(err.response?.data?.error || "Error saving data");
    } finally {
      setSaving(false);
    }
  };




const loadSelectedObjects = async (profileId) => {
  try {
    const res = await axios.get(
      `http://localhost:5000/api/auth/getSelectionByProfile?profile_id=${profileId}`
    );
    const selected = {};
    res.data
      .filter((item) => item.profile_id === profileId)
      .forEach((item) => {
        selected[item.object_id] = true;
      });
    setSelectedObjects(selected);
  } catch (err) {
    console.error(err);
    setSelectedObjects({});
  }
};

useEffect(() => {
  fetchObjects();       
  fetchProfilesData();  
}, []);

useEffect(() => {
  if (selectedProfileId) {
    loadSelectedObjects(selectedProfileId);
  }
}, [selectedProfileId]);



  // 🔹 On mount
  // useEffect(() => {
  //   fetchObjects();
  //   fetchProfilesData(); 
  // }, []);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" sx={{ mb: 3, fontWeight: 700 }}>
        Button1 Page
      </Typography>

      <Box sx={{ display: "flex", gap: 4 }}>
        <Box sx={{ flex: 2 }}>
          <Paper sx={{ borderRadius: 2, p: 2 }}>
            <Typography sx={{ mb: 1 }}>Profile Data</Typography>

            {loadingProfiles ? (
              <CircularProgress />
            ) : profilesData.length > 0 ? (
              <TableContainer>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>Select</TableCell>
                      {Object.keys(profilesData[0] || {}).map((col) => (
                        <TableCell key={col}>{col}</TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {profilesData.map((row) => (
                      <TableRow
                        key={row.id}
                        sx={{
                          backgroundColor:
                            selectedProfileId === row.id ? "#e8f0fe" : "transparent",
                        }}
                      >
                        <TableCell>
                          <Radio
                            checked={selectedProfileId === row.id}
                            onChange={() => handleProfileSelect(row.id)}
                          />
                        </TableCell>
                        {Object.keys(row).map((col) => (
                          <TableCell key={col}>{row[col]}</TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            ) : (
              <Typography>No Profile Data Found</Typography>
            )}
          </Paper>
        </Box>

        <Box sx={{ flex: 1 }}>
          <Paper sx={{ borderRadius: 2, p: 2 }}>
            {loadingObjects ? (
              <CircularProgress />
            ) : (
              <TableContainer>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>Select</TableCell>
                      <TableCell>ID</TableCell>
                      <TableCell>Name</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {objects.map((obj) => (
                      <TableRow
                        key={obj.object_id}
                        hover
                        sx={{ cursor: "pointer" }}
                      >
                        <TableCell onClick={(e) => e.stopPropagation()}>
                          <Checkbox
                            checked={selectedObjects[obj.object_id] || false}
                            onChange={() => handleObjectCheckbox(obj.object_id)}
                          />
                        </TableCell>
                        <TableCell>{obj.object_id}</TableCell>
                        <TableCell>{obj.object_name}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            )}
          </Paper>

          <Box sx={{ mt: 2 }}>
         {/* <Button
  variant="contained"
  fullWidth
  onClick={saveSelection}
  disabled={saving}
>
  {saving ? "Saving..." : "Save Selection"}
</Button> */}

          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Button1Page;
