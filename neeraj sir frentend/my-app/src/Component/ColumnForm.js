// // // import React, { useState } from "react";
// // // import { Box, TextField, Button, Typography, Paper, CircularProgress, Grid } from "@mui/material";
// // // import axios from "axios";

// // // const ColumnForm = () => {
// // //   const [objectId, setObjectId] = useState("");
// // //   const [columnName, setColumnName] = useState("");
// // //   const [columnType, setColumnType] = useState("");
// // //   const [columnLength, setColumnLength] = useState("");
// // //   const [response, setResponse] = useState(null);
// // //   const [loading, setLoading] = useState(false);
// // //   const [error, setError] = useState("");

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();

// // //     if (!objectId || !columnName || !columnType) {
// // //       setError("Object ID, Column Name, and Column Type are required");
// // //       return;
// // //     }

// // //     const objIdNum = parseInt(objectId, 10);
// // //     if (isNaN(objIdNum)) {
// // //       setError("Object ID must be a number");
// // //       return;
// // //     }

// // //     setLoading(true);
// // //     setError("");
// // //     setResponse(null);

// // //     try {
// // //       const res = await axios.post("http://localhost:5000/api/auth/table", {
// // //         object_id: objIdNum,
// // //         column_name: columnName,
// // //         column_type: columnType,
// // //         column_length: columnLength ? parseInt(columnLength, 10) : null,
// // //       });

// // //       setResponse(res.data);
// // //       setObjectId("");
// // //       setColumnName("");
// // //       setColumnType("");
// // //       setColumnLength("");
// // //     } catch (err) {
// // //       setError(err.response?.data?.error || "Something went wrong");
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   return (
// // //     <Box display="flex" justifyContent="center" alignItems="flex-start" minHeight="100vh" bgcolor="#f0f2f5" pt={12} px={2}>
// // //       <Paper
// // //         elevation={6}
// // //         sx={{
// // //           p: 6,
// // //           width: "100%",
// // //           maxWidth: 500,
// // //           borderRadius: 3,
// // //           boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
// // //         }}
// // //       >
// // //         <Typography variant="h4" textAlign="center" mb={4} fontWeight="bold">
// // //           Add Column
// // //         </Typography>

// // //         <form onSubmit={handleSubmit}>
// // //           <Grid container spacing={3} direction="column">
// // //             {/** Object ID */}
// // //             <Grid item container alignItems="center" spacing={2}>
// // //               <Grid item xs={4} display="flex" alignItems="center">
// // //                 <Typography fontWeight={500} sx={{ textAlign: "right" }}>
// // //                   Object ID:
// // //                 </Typography>
// // //               </Grid>
// // //               <Grid item xs={8}>
// // //                 <TextField
// // //                   value={objectId}
// // //                   onChange={(e) => setObjectId(e.target.value)}
// // //                   fullWidth
// // //                   size="medium"
// // //                   placeholder="Enter Object ID"
// // //                 />
// // //               </Grid>
// // //             </Grid>

// // //             {/** Column Name */}
// // //             <Grid item container alignItems="center" spacing={2}>
// // //               <Grid item xs={4} display="flex" alignItems="center">
// // //                 <Typography fontWeight={500} sx={{ textAlign: "right" }}>
// // //                   Column Name:
// // //                 </Typography>
// // //               </Grid>
// // //               <Grid item xs={8}>
// // //                 <TextField
// // //                   value={columnName}
// // //                   onChange={(e) => setColumnName(e.target.value)}
// // //                   fullWidth
// // //                   size="medium"
// // //                   placeholder="Enter Column Name"
// // //                 />
// // //               </Grid>
// // //             </Grid>

// // //             {/** Column Type */}
// // //             <Grid item container alignItems="center" spacing={2}>
// // //               <Grid item xs={4} display="flex" alignItems="center">
// // //                 <Typography fontWeight={500} sx={{ textAlign: "right" }}>
// // //                   Column Type:
// // //                 </Typography>
// // //               </Grid>
// // //               <Grid item xs={8}>
// // //                 <TextField
// // //                   value={columnType}
// // //                   onChange={(e) => setColumnType(e.target.value)}
// // //                   fullWidth
// // //                   size="medium"
// // //                   placeholder="INT / VARCHAR / etc."
// // //                 />
// // //               </Grid>
// // //             </Grid>

// // //             {/** Column Length */}
// // //             <Grid item container alignItems="center" spacing={2}>
// // //               <Grid item xs={4} display="flex" alignItems="center">
// // //                 <Typography fontWeight={500} sx={{ textAlign: "right" }}>
// // //                   Column Length:
// // //                 </Typography>
// // //               </Grid>
// // //               <Grid item xs={8}>
// // //                 <TextField
// // //                   value={columnLength}
// // //                   onChange={(e) => setColumnLength(e.target.value)}
// // //                   fullWidth
// // //                   size="medium"
// // //                   type="number"
// // //                   placeholder="Optional"
// // //                 />
// // //               </Grid>
// // //             </Grid>

// // //             {/** Submit Button */}
// // //             <Grid item container justifyContent="flex-end">
// // //               <Grid item xs={8}>
// // //                 <Button
// // //                   type="submit"
// // //                   variant="contained"
// // //                   color="primary"
// // //                   fullWidth
// // //                   disabled={loading}
// // //                   sx={{ py: 1.5 }}
// // //                 >
// // //                   {loading ? <CircularProgress size={24} color="inherit" /> : "Add Column"}
// // //                 </Button>
// // //               </Grid>
// // //             </Grid>
// // //           </Grid>
// // //         </form>

// // //         {/** Error Message */}
// // //         {error && (
// // //           <Typography color="error" mt={3} textAlign="center">
// // //             {error}
// // //           </Typography>
// // //         )}

// // //         {/** Response Box */}

// // //       </Paper>
// // //     </Box>
// // //   );
// // // };

// // // export default ColumnForm;



















































// import React, { useEffect, useState } from "react";
// import {
//   Box,
//   TextField,
//   Button,
//   Typography,
//   Paper,
//   CircularProgress,
//   Grid,
//   MenuItem,
// } from "@mui/material";
// import axios from "axios";

// const ColumnForm = () => {
//   const [objects, setObjects] = useState([]);
//   const [objectId, setObjectId] = useState("");
//   const [columnName, setColumnName] = useState("");
//   const [columnType, setColumnType] = useState("");
//   const [columnLength, setColumnLength] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   // 🔹 GET OBJECT IDs
//   useEffect(() => {
//     const fetchObjects = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/api/auth/objects_id");
//         setObjects(res.data);
//       } catch {
//         setError("Failed to load objects");
//       }
//     };
//     fetchObjects();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!objectId || !columnName || !columnType) {
//       setError("All required fields are mandatory");
//       return;
//     }

//     setLoading(true);
//     setError("");

//     try {
//       await axios.post("http://localhost:5000/api/auth/table", {
//         object_id: objectId,
//         column_name: columnName,
//         column_type: columnType,
//         column_length: columnLength ? Number(columnLength) : null,
//       });

//       setObjectId("");
//       setColumnName("");
//       setColumnType("");
//       setColumnLength("");
//       alert("Column Added Successfully");
//     } catch (err) {
//       setError(err.response?.data?.error || "Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Box
//       display="flex"
//       justifyContent="center"
//       alignItems="flex-start"
//       minHeight="100vh"
//       bgcolor="#f0f2f5"
//       pt={12}
//       px={2}
//     >
//       <Paper sx={{ p: 6, maxWidth: 500, width: "100%", borderRadius: 3 }}>
//         <Typography variant="h4" textAlign="center" mb={4} fontWeight="bold">
//           Add Column
//         </Typography>

//         <form onSubmit={handleSubmit}>
//           <Grid container spacing={3} direction="column">

//             {/* 🔹 Object ID (Dropdown – full width, arrow at end) */}
//             <Grid item container alignItems="center" spacing={2}>
//               <Grid item xs={4}>
//                 <Typography fontWeight={500} textAlign="right">
//                   Object ID:
//                 </Typography>
//               </Grid>
//               <Grid item xs={8}>
//                 <TextField
//                   select
//                   fullWidth
//                   size="medium"
//                   value={objectId}
//                   onChange={(e) => setObjectId(e.target.value)}
//                   sx={{ minWidth: '100%' }} // Ensure full width like other fields
//                 >
//                   {objects.length === 0 ? (
//                     <MenuItem disabled>No Objects</MenuItem>
//                   ) : (
//                     objects.map((obj) => (
//                       <MenuItem key={obj.object_id} value={obj.object_id}>
//                         {obj.object_name} (ID: {obj.object_id})
//                       </MenuItem>
//                     ))
//                   )}
//                 </TextField>
//               </Grid>
//             </Grid>

//             {/* Column Name */}
//             <Grid item container alignItems="center" spacing={2}>
//               <Grid item xs={4}>
//                 <Typography fontWeight={500} textAlign="right">
//                   Column Name:
//                 </Typography>
//               </Grid>
//               <Grid item xs={8}>
//                 <TextField
//                   fullWidth
//                   value={columnName}
//                   onChange={(e) => setColumnName(e.target.value)}
//                 />
//               </Grid>
//             </Grid>

//             {/* Column Type */}
//             <Grid item container alignItems="center" spacing={2}>
//               <Grid item xs={4}>
//                 <Typography fontWeight={500} textAlign="right">
//                   Column Type:
//                 </Typography>
//               </Grid>
//               <Grid item xs={8}>
//                 <TextField
//                   fullWidth
//                   value={columnType}
//                   onChange={(e) => setColumnType(e.target.value)}
//                   placeholder="INT / VARCHAR / TEXT / etc."
//                 />
//               </Grid>
//             </Grid>

//             {/* Column Length */}
//             <Grid item container alignItems="center" spacing={2}>
//               <Grid item xs={4}>
//                 <Typography fontWeight={500} textAlign="right">
//                   Column Length:
//                 </Typography>
//               </Grid>
//               <Grid item xs={8}>
//                 <TextField
//                   type="number"
//                   fullWidth
//                   value={columnLength}
//                   onChange={(e) => setColumnLength(e.target.value)}
//                 />
//               </Grid>
//             </Grid>

//             {/* Submit */}
//             <Grid item container justifyContent="flex-end">
//               <Grid item xs={8}>
//                 <Button
//                   type="submit"
//                   variant="contained"
//                   fullWidth
//                   disabled={loading}
//                 >
//                   {loading ? <CircularProgress size={22} /> : "Add Column"}
//                 </Button>
//               </Grid>
//             </Grid>

//           </Grid>
//         </form>

//         {error && (
//           <Typography color="error" mt={3} textAlign="center">
//             {error}
//           </Typography>
//         )}
//       </Paper>
//     </Box>
//   );
// };

// export default ColumnForm;


















// import React, { useEffect, useState } from "react";
// import {
//   Box,
//   Paper,
//   Typography,
//   TextField,
//   Button,
//   Grid,
//   CircularProgress,
//   MenuItem,
// } from "@mui/material";
// import axios from "axios";

// const ColumnForm = () => {
//   const [objects, setObjects] = useState([]);
//   const [objectId, setObjectId] = useState("");
//   const [columnName, setColumnName] = useState("");
//   const [columnType, setColumnType] = useState("");
//   const [columnLength, setColumnLength] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchObjects = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/api/auth/objects_id");
//         setObjects(res.data);
//       } catch {
//         setError("Failed to load objects");
//       }
//     };
//     fetchObjects();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!objectId || !columnName || !columnType) {
//       setError("All required fields are mandatory");
//       return;
//     }

//     setLoading(true);
//     setError("");

//     try {
//       await axios.post("http://localhost:5000/api/auth/table", {
//         object_id: objectId,
//         column_name: columnName,
//         column_type: columnType,
//         column_length: columnLength ? Number(columnLength) : null,
//       });

//       setObjectId("");
//       setColumnName("");
//       setColumnType("");
//       setColumnLength("");
//       alert("Column Added Successfully");
//     } catch (err) {
//       setError(err.response?.data?.error || "Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Box>
//       <Paper sx={{ p: 6, width: "100%", maxWidth: 500, borderRadius: 3 }}>
//         <Typography variant="h4" textAlign="center" mb={4} fontWeight="bold">
//           Add Column
//         </Typography>

//         <form onSubmit={handleSubmit}>
//           <Grid container spacing={2} direction="column">
//             <Grid item container spacing={2} alignItems="center">
//               <Grid item xs={4}>
//                 <Typography textAlign="right">Object ID:</Typography>
//               </Grid>
//               <Grid item xs={8}>
//                 <TextField
//                   select
//                   fullWidth
//                   value={objectId}
//                   onChange={(e) => setObjectId(e.target.value)}
//                 >
//                   {objects.length === 0 ? (
//                     <MenuItem disabled>No Objects</MenuItem>
//                   ) : (
//                     objects.map((obj) => (
//                       <MenuItem key={obj.object_id} value={obj.object_id}>
//                         {obj.object_name} (ID: {obj.object_id})
//                       </MenuItem>
//                     ))
//                   )}
//                 </TextField>
//               </Grid>
//             </Grid>

//             <Grid item container spacing={2} alignItems="center">
//               <Grid item xs={4}>
//                 <Typography textAlign="right">Column Name:</Typography>
//               </Grid>
//               <Grid item xs={8}>
//                 <TextField fullWidth value={columnName} onChange={(e) => setColumnName(e.target.value)} />
//               </Grid>
//             </Grid>

//             <Grid item container spacing={2} alignItems="center">
//               <Grid item xs={4}>
//                 <Typography textAlign="right">Column Type:</Typography>
//               </Grid>
//               <Grid item xs={8}>
//                 <TextField fullWidth value={columnType} onChange={(e) => setColumnType(e.target.value)} />
//               </Grid>
//             </Grid>

//             <Grid item container spacing={2} alignItems="center">
//               <Grid item xs={4}>
//                 <Typography textAlign="right">Column Length:</Typography>
//               </Grid>
//               <Grid item xs={8}>
//                 <TextField type="number" fullWidth value={columnLength} onChange={(e) => setColumnLength(e.target.value)} />
//               </Grid>
//             </Grid>

//             <Grid item>
//               <Button type="submit" variant="contained" fullWidth disabled={loading}>
//                 {loading ? <CircularProgress size={24} /> : "Add Column"}
//               </Button>
//             </Grid>

//             {error && <Typography color="error" mt={2}>{error}</Typography>}
//           </Grid>
//         </form>
//       </Paper>
//     </Box>
//   );
// };

// export default ColumnForm;
























// import React, { useEffect, useState } from "react";
// import {
//   Box,
//   Paper,
//   Typography,
//   TextField,
//   Button,
//   Grid,
//   CircularProgress,
//   MenuItem,
// } from "@mui/material";
// import axios from "axios";

// const ColumnForm = () => {
//   const [objects, setObjects] = useState([]);
//   const [dataTypes, setDataTypes] = useState([]);
//   const [objectId, setObjectId] = useState("");
//   const [columnName, setColumnName] = useState("");
//   const [columnType, setColumnType] = useState("");
//   const [columnLength, setColumnLength] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   // Fetch Objects and Data Types
//   useEffect(() => {
//     const fetchObjects = async () => {
//       try {
//         const res = await axios.get(
//           "http://localhost:5000/api/auth/objects_id"
//         );
//         setObjects(res.data);
//       } catch {
//         setError("Failed to load objects");
//       }
//     };

//     const fetchDataTypes = async () => {
//       try {
//         const res = await axios.get(
//           "http://localhost:5000/api/auth/data-types"
//         );
//         setDataTypes(res.data);
//       } catch {
//         setError("Failed to load data types");
//       }
//     };

//     fetchObjects();
//     fetchDataTypes();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!objectId || !columnName || !columnType) {
//       setError("All required fields are mandatory");
//       return;
//     }

//     setLoading(true);
//     setError("");

//     try {
//       await axios.post("http://localhost:5000/api/auth/table", {
//         object_id: objectId,
//         column_name: columnName,
//         column_type: columnType,
//         column_length: columnLength ? Number(columnLength) : null,
//       });

//       setObjectId("");
//       setColumnName("");
//       setColumnType("");
//       setColumnLength("");
//       alert("Column Added Successfully");
//     } catch (err) {
//       setError(err.response?.data?.error || "Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Box>
//       <Paper sx={{ p: 6, width: "100%", maxWidth: 500, borderRadius: 3 }}>
//         <Typography variant="h4" textAlign="center" mb={4} fontWeight="bold">
//           Add Column
//         </Typography>

//         <form onSubmit={handleSubmit}>
//           <Grid container spacing={2} direction="column">
//             {/* Object ID */}
//             <Grid item container spacing={2} alignItems="center">
//               <Grid item xs={4}>
//                 <Typography textAlign="right">Object ID:</Typography>
//               </Grid>
//               <Grid item xs={8}>
//                 <TextField
//                   select
//                   fullWidth
//                   value={objectId}
//                   onChange={(e) => setObjectId(e.target.value)}
//                 >
//                   {objects.length === 0 ? (
//                     <MenuItem disabled>No Objects</MenuItem>
//                   ) : (
//                     objects.map((obj) => (
//                       <MenuItem key={obj.object_id} value={obj.object_id}>
//                         {obj.object_name} (ID: {obj.object_id})
//                       </MenuItem>
//                     ))
//                   )}
//                 </TextField>
//               </Grid>
//             </Grid>

//             {/* Column Name */}
//             <Grid item container spacing={2} alignItems="center">
//               <Grid item xs={4}>
//                 <Typography textAlign="right">Column Name:</Typography>
//               </Grid>
//               <Grid item xs={8}>
//                 <TextField
//                   fullWidth
//                   value={columnName}
//                   onChange={(e) => setColumnName(e.target.value)}
//                 />
//               </Grid>
//             </Grid>

//             {/* Column Type */}
//             <Grid item container spacing={2} alignItems="center">
//               <Grid item xs={4}>
//                 <Typography textAlign="right">Column Type:</Typography>
//               </Grid>
//               <Grid item xs={8}>
//                 <TextField
//                   select
//                   fullWidth
//                   value={columnType}
//                   onChange={(e) => setColumnType(e.target.value)}
//                 >
//                   {dataTypes.length === 0 ? (
//                     <MenuItem disabled>No Data Types</MenuItem>
//                   ) : (
//                     dataTypes.map((type, index) => (
//                       <MenuItem key={index} value={type}>
//                         {type}
//                       </MenuItem>
//                     ))
//                   )}
//                 </TextField>
//               </Grid>
//             </Grid>

//             {/* Column Length */}
//             <Grid item container spacing={2} alignItems="center">
//               <Grid item xs={4}>
//                 <Typography textAlign="right">Column Length:</Typography>
//               </Grid>
//               <Grid item xs={8}>
//                 <TextField
//                   type="number"
//                   fullWidth
//                   value={columnLength}
//                   onChange={(e) => setColumnLength(e.target.value)}
//                 />
//               </Grid>
//             </Grid>

//             {/* Submit Button */}
//             <Grid item>
//               <Button
//                 type="submit"
//                 variant="contained"
//                 fullWidth
//                 disabled={loading}
//               >
//                 {loading ? <CircularProgress size={24} /> : "Add Column"}
//               </Button>
//             </Grid>

//             {/* Error */}
//             {error && (
//               <Typography color="error" mt={2}>
//                 {error}
//               </Typography>
//             )}
//           </Grid>
//         </form>
//       </Paper>
//     </Box>
//   );
// };

// export default ColumnForm;


























import React, { useEffect, useState } from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Grid,
  CircularProgress,
  MenuItem,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import axios from "axios";

const ColumnForm = () => {
  const [objects, setObjects] = useState([]);
  const [dataTypes, setDataTypes] = useState([]);
  const [objectId, setObjectId] = useState("");
  const [columnName, setColumnName] = useState("");
  const [columnType, setColumnType] = useState("");
  const [columnLength, setColumnLength] = useState("");
  const [defaultValue, setDefaultValue] = useState("");
  const [isNullPossible, setIsNullPossible] = useState(false); // Checkbox state
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formLabel, setFormLabel] = useState("");


  // Fetch Objects and Data Types
  useEffect(() => {
    const fetchObjects = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/auth/objects_id");
        setObjects(res.data);
      } catch {
        setError("Failed to load objects");
      }
    };

    const fetchDataTypes = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/auth/data-types");
        setDataTypes(res.data);
      } catch {
        setError("Failed to load data types");
      }
    };

    fetchObjects();
    fetchDataTypes();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    //   if (!objectId || !columnName || !columnType || !formLabel) {
    //   setError("All required fields are mandatory");
    //   return;
    // }


    // ✅ Frontend Checkbox validation
    

    setLoading(true);
    setError("");

    try {
      // API call
      await axios.post("http://localhost:5000/api/auth/table", {
        object_id: objectId,
        column_name: columnName,
        form_label: formLabel, // 👈 NEW
        column_type: columnType,
        column_length: columnLength ? Number(columnLength) : null,
        default_value: defaultValue || null,
not_null: isNullPossible
      });


      // Reset form
      setObjectId("");
      setColumnName("");
      setColumnType("");
      setColumnLength("");
      setDefaultValue("");
      setFormLabel("");

      setIsNullPossible(false);
      alert("Column Added Successfully");
    } catch (err) {
      setError(err.response?.data?.error || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

useEffect(() => {
  if (!showLengthField) {
    setColumnLength("");
  }
}, [columnType]);

const showLengthField =
  columnType &&
  (columnType.toLowerCase() === "character" ||
columnType.toLowerCase() === "text");


// useEffect(() => {
//   const showLengthField =
//     columnType &&
//     (columnType.toLowerCase() === "character" || columnType.toLowerCase() === "text");

//   if (!showLengthField) {
//     setColumnLength("");
//   }
// }, [showLengthField]); // ✅ only columnType dependency



  return (
    <Box>
      <Paper sx={{ p: 6, width: "100%", maxWidth: 500, borderRadius: 3 }}>
        <Typography variant="h4" textAlign="center" mb={4} fontWeight="bold">
          Add Column
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={2} direction="column">
            {/* Object ID */}
            <Grid item container spacing={4} alignItems="center">
              <Grid item xs={4}>
                <Typography textAlign="right">Object ID:</Typography>
              </Grid>
              <Grid item xs={8}>
                <TextField
                  select
                  fullWidth
                  value={objectId}
                  onChange={(e) => setObjectId(e.target.value)}
                  style={{ width: 250 }}
                >
                  {objects.length === 0 ? (
                    <MenuItem disabled>No Objects</MenuItem>
                  ) : (
                    objects.map((obj) => (
                      <MenuItem key={obj.object_id} value={obj.object_id}>
                        {obj.object_name} (ID: {obj.object_id})
                      </MenuItem>
                    ))
                  )}
                </TextField>
              </Grid>
            </Grid>


            {/* Form Label Name */}
            {/* <Grid item container spacing={2} alignItems="center"> */}
            {/* <Grid item xs={4}>
    <Typography textAlign="right">Form Label Name:</Typography>
  </Grid>
  <Grid item xs={8}>
    <TextField
      fullWidth
      value={formLabel}
      onChange={(e) => setFormLabel(e.target .value)}
      placeholder="e.g. User Name"
    />
  </Grid>
</Grid> */}





            {/* Column Name */}
            <Grid item container spacing={2} alignItems="center">
              <Grid item xs={4}>
                <Typography textAlign="right">Column Name:</Typography>
              </Grid>
              <Grid item xs={8}>
                <TextField
                  fullWidth
                  value={columnName}
                  onChange={(e) => setColumnName(e.target.value)}
                />
              </Grid>
            </Grid>


          


            {/* Column Type */}
            <Grid item container spacing={2} alignItems="center">

              <Grid item xs={4}>
                <Typography textAlign="right">Column Type:</Typography>
              </Grid>
              <TextField
                select
                value={columnType}
                onChange={(e) => setColumnType(e.target.value)}
                style={{ width: 250 }} // width pixels me
              >
                {dataTypes.map((type, index) => (
                  <MenuItem key={index} value={type}>
                    {type}
                  </MenuItem>
                ))}
              </TextField>

              <Grid item xs={8}>
                {/* <TextField
                  select
                  fullWidth
                  value={columnType}
                  onChange={(e) => setColumnType(e.target.value)}
                >
                  {dataTypes.length === 0 ? (
                    <MenuItem disabled>No Data Types</MenuItem>
                  ) : (
                    dataTypes.map((type, index) => (
                      <MenuItem key={index} value={type}>
                        {type}
                      </MenuItem>
                    ))
                  )}
                </TextField> */
                }
              </Grid>
            </Grid>




            {/* Column Length */}
          {showLengthField && (
  <Grid item container spacing={2} alignItems="center">
    <Grid item xs={4}>
      <Typography textAlign="right">Column Length:</Typography>
    </Grid>
    <Grid item xs={8}>
      <TextField
        type="number"
        fullWidth
        value={columnLength}
        onChange={(e) => setColumnLength(e.target.value)}
      />
    </Grid>
  </Grid>
)}



            {/* Default Value */}
            <Grid item container spacing={2} alignItems="center">
              <Grid item xs={4}>
                <Typography textAlign="right">Default Value:</Typography>
              </Grid>
              <Grid item xs={8}>
                <TextField
                  fullWidth
                  value={defaultValue}
                  onChange={(e) => setDefaultValue(e.target.value)}
                  placeholder="Optional"
                />
              </Grid>
            </Grid>




            <Grid item container spacing={2} alignItems="center">
              <Grid item xs={4}>
                <Typography textAlign="right">formLabel:</Typography>
              </Grid>
              <Grid item xs={8}>
                <TextField
                  fullWidth
                  value={formLabel}
                  onChange={(e) => setFormLabel(e.target.value)}
                  placeholder="form_name"
                />
              </Grid>
            </Grid>



            {/* Checkbox */}
            <Grid item>
           <FormControlLabel
  control={
    <Checkbox
      checked={isNullPossible}
      onChange={(e) => setIsNullPossible(e.target.checked)}
    />
  }
  label="NOT NULL"
/>


            </Grid>

            {/* Submit Button */}
            <Grid item>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                disabled={loading}
              >
                {loading ? <CircularProgress size={24} /> : "Add Column"}
              </Button>
            </Grid>

            {/* Error */}
            {error && (
              <Typography color="error" mt={2}>
                {error}
              </Typography>
            )}
          </Grid>
        </form>
      </Paper>
    </Box>
  );
};

export default ColumnForm;















