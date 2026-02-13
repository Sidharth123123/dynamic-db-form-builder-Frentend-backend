// import React from "react";
// import { Box, Typography, Button } from "@mui/material";
// import { useNavigate } from "react-router-dom";

// const CreateDatabasePage = () => {
//   const navigate = useNavigate();

//   return (
//     <Box>
//       <Typography variant="h4" gutterBottom>
//         Create Database
//       </Typography>

//       <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
//         {/* 🔹 Navigate to Object Page */}
//         <Button
//           variant="contained"
//           onClick={() => navigate("/object")} // replace with your Object page route
//         >
//           Object Page
//         </Button>

//         {/* 🔹 Navigate to Column Page */}
//         <Button
//           variant="contained"
//           color="secondary"
//           onClick={() => navigate("/column")} // replace with your Column page route
//         >
//           Column Page
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// export default CreateDatabasePage;





// import React, { useState } from "react";
// import {
//   Box,
//   Typography,
//   Button,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper
// } from "@mui/material";
// import ObjectForm from "./ObjectForm";
// import ColumnForm from "./ColumnForm";

// const CreateDatabasePage = ({ tables }) => {
//   const [openObject, setOpenObject] = useState(false);
//   const [openColumn, setOpenColumn] = useState(false);

//   return (
//     <Box sx={{ p: 3 }}>
//       <Typography variant="h4" gutterBottom>
//         Create Database
//       </Typography>

//       <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
//         <Button variant="contained" onClick={() => setOpenObject(true)}>
//           Object Page
//         </Button>
//         <Button
//           variant="contained"
//           color="secondary"
//           onClick={() => setOpenColumn(true)}
//         >
//           Column Page
//         </Button>
//       </Box>

//       {/* ✅ Same API Data Show Here */}
//       <Box sx={{ mt: 4 }}>
//         <Typography variant="h6">Used Objects</Typography>

//         <TableContainer component={Paper} sx={{ mt: 2 }}>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell><b>Object ID</b></TableCell>
//                 <TableCell><b>Object Name</b></TableCell>
//               </TableRow>
//             </TableHead>

//             <TableBody>
//    {tables && tables.length > 0 ? (
//   tables.map((table) => (
//     <TableRow key={table.object_id}>
//       <TableCell>{table.object_id}</TableCell>
//       <TableCell>{table.object_name}</TableCell>
//     </TableRow>
//   ))
// ) : (
//   <TableRow>
//     <TableCell colSpan={2} align="center">
//       No Data Found
//     </TableCell>
//   </TableRow>
// )}

//             </TableBody>
//           </Table>
//         </TableContainer>
//       </Box>

//       {/* Object Form Popup */}
//       <Dialog open={openObject} onClose={() => setOpenObject(false)} fullWidth maxWidth="md">
//         <DialogTitle>Create Object</DialogTitle>
//         <DialogContent dividers sx={{ maxHeight: "70vh", overflowY: "auto" }}>
//           <ObjectForm />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={() => setOpenObject(false)}>Close</Button>
//         </DialogActions>
//       </Dialog>

//       {/* Column Form Popup */}
//       <Dialog open={openColumn} onClose={() => setOpenColumn(false)} fullWidth maxWidth="md">
//         <DialogTitle>Add Column</DialogTitle>
//         <DialogContent dividers sx={{ maxHeight: "70vh", overflowY: "auto" }}>
//           <ColumnForm />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={() => setOpenColumn(false)}>Close</Button>
//         </DialogActions>
//       </Dialog>
//     </Box>
//   );
// };

// export default CreateDatabasePage;






















// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Typography,
//   Button,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper
// } from "@mui/material";
// import axios from "axios";
// import ObjectForm from "./ObjectForm";
// import ColumnForm from "./ColumnForm";

// const CreateDatabasePage = () => {
//   const [openObject, setOpenObject] = useState(false);
//   const [openColumn, setOpenColumn] = useState(false);
//   const [tables, setTables] = useState([]);

//   // ✅ API Call on Page Load
//   useEffect(() => {
//     fetchUsedObjects1();
//   }, []);

//   const fetchUsedObjects1 = async () => {
//     try {
// const res = await axios.get("http://localhost:5000/api/auth/getUsedObjects1");
//       setTables(res.data || []);
//     } catch (error) {
//       console.error("Error fetching objects:", error);
//     }
//   };

//   return (
//     <Box sx={{ p: 3 }}>
//       <Typography variant="h4" gutterBottom>
//         Create Database
//       </Typography>

//       {/* Buttons */}
//       <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
//         <Button variant="contained" onClick={() => setOpenObject(true)}>
//           Object Page
//         </Button>
//         <Button
//           variant="contained"
//           color="secondary"
//           onClick={() => setOpenColumn(true)}
//         >
//           Column Page
//         </Button>
//       </Box>

//       {/* Table showing API data */}
//       <Box sx={{ mt: 4 }}>
//         <Typography variant="h6">Used Objects</Typography>

//         <TableContainer component={Paper} sx={{ mt: 2 }}>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell><b>Object ID</b></TableCell>
//                 <TableCell><b>Object Name</b></TableCell>
//               </TableRow>
//             </TableHead>

//             <TableBody>
//               {tables.length > 0 ? (
//                 tables.map((table) => (
//                   <TableRow key={table.object_id}>
//                     <TableCell>{table.object_id}</TableCell>
//                     <TableCell>{table.object_name}</TableCell>
//                   </TableRow>
//                 ))
//               ) : (
//                 <TableRow>
//                   <TableCell colSpan={2} align="center">
//                     No Data Found
//                   </TableCell>
//                 </TableRow>
//               )}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </Box>

//       {/* Object Form Popup */}
//       <Dialog open={openObject} onClose={() => setOpenObject(false)} fullWidth maxWidth="md">
//         <DialogTitle>Create Object</DialogTitle>
//         <DialogContent dividers sx={{ maxHeight: "70vh", overflowY: "auto" }}>
//           <ObjectForm />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={() => setOpenObject(false)}>Close</Button>
//         </DialogActions>
//       </Dialog>

//       {/* Column Form Popup */}
//       <Dialog open={openColumn} onClose={() => setOpenColumn(false)} fullWidth maxWidth="md">
//         <DialogTitle>Add Column</DialogTitle>
//         <DialogContent dividers sx={{ maxHeight: "70vh", overflowY: "auto" }}>
//           <ColumnForm />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={() => setOpenColumn(false)}>Close</Button>
//         </DialogActions>
//       </Dialog>
//     </Box>
//   );
// };

// export default CreateDatabasePage;
































import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import axios from "axios";
import ObjectForm from "./ObjectForm";
import ColumnForm from "./ColumnForm";

const CreateDatabasePage = () => {
  const [openObject, setOpenObject] = useState(false);
  const [openColumn, setOpenColumn] = useState(false);
  const [tables, setTables] = useState([]);
  const [columns, setColumns] = useState([]);
  const [selectedObjectId, setSelectedObjectId] = useState(null);

  // Fetch all objects on page load







const handleDeleteColumn = async (column_name) => {
  if (!selectedObjectId) return;


  const Confirmed = window.confirm(`Are you sure you want to delete the column "${column_name}"`);
if(!Confirmed) return


  
try {
    const res = await axios.delete(
      "http://localhost:5000/api/auth/deleteColumn",
      {
        data: {
          object_id: selectedObjectId,
          column_name: column_name.trim()
        },
      }
    );
  
    console.log(res.data);

    // Refresh columns list after deletion
    fetchColumns(selectedObjectId);
  } catch (err) {
    console.error("Error deleting column:", err.response?.data || err.message);
    alert(err.response?.data?.error || "Failed to delete column");
  }
};















  useEffect(() => {
    fetchUsedObjects();
  }, []);

  const fetchUsedObjects = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/auth/getUsedObjects1"
      );
      setTables(res.data || []);
    } catch (error) {
      console.error("Error fetching objects:", error);
    }
  };

  // Fetch columns for clicked object
  const fetchColumns = async (objectId) => {
    try {
      setSelectedObjectId(objectId);
      const res = await axios.get(
        "http://localhost:5000/api/auth/objectdataincreatetable",
        { params: { object_id: objectId } }
      );
      setColumns(res.data || []);
    } catch (error) {
      console.error("Error fetching columns:", error);
      setColumns([]);
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      {/* Header */}
      <Typography variant="h4" gutterBottom>
        Create Database
      </Typography>

      {/* Top Buttons */}
      <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
        <Button variant="contained" onClick={() => setOpenObject(true)}>
          Object Page
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setOpenColumn(true)}
        >
          Column Page
        </Button>
      </Box>

      {/* Tables Side by Side */}
      <Box sx={{ display: "flex", gap: 1, mt: 4 }}>
        {/* Left Table: Objects */}
        <Box sx={{ width: "25%" }}>
          <Typography variant="h6">Used Objects</Typography>
          <TableContainer
            component={Paper}
            sx={{ mt: 2, maxHeight: 500, overflowY: "auto" }}
          >
            <Table stickyHeader size="small">
              <TableHead>
                <TableRow>
                  <TableCell><b>ID</b></TableCell>
                  <TableCell><b>Name</b></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tables.length > 0 ? (
                  tables.map((table) => (
                    <TableRow
                      key={table.object_id}
                      hover
                      sx={{
                        cursor: "pointer",
                        backgroundColor:
                          selectedObjectId === table.object_id
                            ? "#f0f0f0"
                            : "inherit",
                      }}
                      onClick={() => fetchColumns(table.object_id)}
                    >
                      <TableCell>{table.object_id ?? "-"}</TableCell>
                      <TableCell>{table.object_name ?? "-"}</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={2} align="center">
                      No Data Found
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        {/* Right Table: Columns */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6">
            Columns for Object ID: {selectedObjectId || "-"}
          </Typography>
          <TableContainer
            component={Paper}
            sx={{ mt: 2, maxHeight: 500, overflowY: "auto" }}
          >
            <Table stickyHeader size="small">
              <TableHead>
                <TableRow>
                  <TableCell><b>Column Name</b></TableCell>
                  <TableCell><b>Type</b></TableCell>
                  <TableCell><b>Length</b></TableCell>
                  <TableCell><b>Default</b></TableCell>
                  <TableCell><b>Nullable</b></TableCell>
                                    <TableCell><b>Action</b></TableCell>

                </TableRow>
              </TableHead>
              <TableBody>
                {columns.length > 0 ? (
//                   columns.map((col, index) => (
//                     <TableRow key={index}>
//                       <TableCell>{col.column_name ?? "-"}</TableCell>
//                       <TableCell>{col.column_type ?? "-"}</TableCell>
//                       <TableCell>{col.column_length ?? "-"}</TableCell>
//                       <TableCell>{col.default_value ?? "-"}</TableCell>
//                       {/* NOT NULL human-readable */}
//                       <TableCell>

// <TableCell>
//   {col.not_null === 1 || col.not_null === true ? "true" : "false"}
// </TableCell>


//                       </TableCell>
//                     </TableRow>
//                   ))



columns.map((col, index) => (
  <TableRow key={index}>
    <TableCell>{col.column_name ?? "-"}</TableCell>
    <TableCell>{col.column_type ?? "-"}</TableCell>
    <TableCell>{col.column_length ?? "-"}</TableCell>
    <TableCell>{col.default_value ?? "-"}</TableCell>

    <TableCell>
      {col.not_null === 1 || col.not_null === true ? "true" : "false"}
    </TableCell>

    {/* Delete Button Only */}
  <TableCell>
  <Button
    variant="contained"
    color="error"
    size="small"
    onClick={() => handleDeleteColumn(col.column_name)}
  >
    Delete
  </Button>
</TableCell>

  </TableRow>
))



                ) : (
                  <TableRow>
                    <TableCell colSpan={5} align="center">
                      No Columns Found
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>

      {/* Object Form Dialog */}
      <Dialog
        open={openObject}
        onClose={() => setOpenObject(false)}
        fullWidth
        maxWidth="md"
      >
        <DialogTitle>Create Object</DialogTitle>
        <DialogContent
          dividers
          sx={{ maxHeight: "70vh", overflowY: "auto" }}
        >
          <ObjectForm />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenObject(false)}>Close</Button>
        </DialogActions>
      </Dialog>

      {/* Column Form Dialog */}
      <Dialog
        open={openColumn}
        onClose={() => setOpenColumn(false)}
        fullWidth
        maxWidth="md"
      >
        <DialogTitle>Add Column</DialogTitle>
        <DialogContent
          dividers
          sx={{ maxHeight: "70vh", overflowY: "auto" }}
        >
          <ColumnForm />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenColumn(false)}>Close</Button>



       
        </DialogActions>
       
      </Dialog>

      
    </Box>
    
  );
};

export default CreateDatabasePage;
