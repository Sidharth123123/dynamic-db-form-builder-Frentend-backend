

// import React, { useState } from "react";
// import {
//   Box,
//   Paper,
//   Typography,
//   TextField,
//   Button,
//   Grid,
//   CircularProgress,
// } from "@mui/material";
// import axios from "axios";

// const ObjectForm = () => {
//   const [objectName, setObjectName] = useState("");
//   const [response, setResponse] = useState(null);
//   const [loading, setLoading] = useState(false);
  
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");
//     setResponse(null);

//     try {
//       const res = await axios.post("http://localhost:5000/api/auth/objects", {
//         object_name: objectName,
//       });
//       setResponse(res.data);
//       setObjectName("");
//     } catch (err) {
//       setError(err.response?.data?.error || "Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Box>
//       <Paper sx={{ p: 6, width: "100%", maxWidth: 500, marginLeft:"100px", borderRadius: 3 }}>
//         <Typography variant="h4" textAlign="center" mb={4} fontWeight="bold">
//           Create Object
//         </Typography>

//         <form onSubmit={handleSubmit}>
//           <Grid container spacing={2} alignItems="center">
//             <Grid item xs={4}>
//               <Typography fontWeight={500}>Object Name:</Typography>
//             </Grid>
//             <Grid item xs={8}>
//               <TextField
//                 value={objectName}
//                 onChange={(e) => setObjectName(e.target.value)}
//                 fullWidth
//                 required
//                 placeholder="Enter object name"
//               />
//             </Grid>

//             <Grid item xs={12}>
//               <Button
//                 type="submit"
//                 variant="contained"
//                 color="primary"
//                 fullWidth
//                 disabled={loading}
//                 sx={{ ml: 15 }}
//               >
//                 {loading ? <CircularProgress size={20} /> : "Submit"}
//               </Button>
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

// export default ObjectForm;

  





















import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Grid,
  CircularProgress,
  Snackbar,
  Alert,
} from "@mui/material";
import axios from "axios";

const ObjectForm = () => {
  const [objectName, setObjectName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successOpen, setSuccessOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await axios.post("http://localhost:5000/api/auth/objects", {
        object_name: objectName,
      });

      setObjectName("");
      setLoading(false);

      // Show popup instantly
      setSuccessOpen(true);
    } catch (err) {
      setError(err.response?.data?.error || "Something went wrong");
      setLoading(false);
    }
  };

  // Automatically closes after 2s, no button needed
  const handleCloseSnackbar = (_, reason) => {
    if (reason === "clickaway") return; // ignore clickaway
    setSuccessOpen(false);
  };

  return (
    <Box>
      <Paper
        sx={{
          p: 6,
          width: "100%",
          maxWidth: 500,
          margin: "50px auto",
          borderRadius: 3,
          boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
        }}
      >
        <Typography variant="h4" textAlign="center" mb={4} fontWeight="bold">
          Create Object
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={4}>
              <Typography fontWeight={500}>Object Name:</Typography>
            </Grid>
            <Grid item xs={8}>
              <TextField
                value={objectName}
                onChange={(e) => setObjectName(e.target.value)}
                fullWidth
                required
                placeholder="Enter object name"
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                disabled={loading}
                sx={{ mt: 2 }}
              >
                {loading ? <CircularProgress size={20} /> : "Submit"}
              </Button>
            </Grid>
          </Grid>
        </form>

        {error && (
          <Typography color="error" mt={3} textAlign="center">
            {error}
          </Typography>
        )}
      </Paper>

      {/* Success popup, no close button */}
      <Snackbar
        open={successOpen}
        onClose={handleCloseSnackbar}
        autoHideDuration={2000} // Auto-close after 2 seconds
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          severity="success"
          variant="filled"
          sx={{
            width: "400px",
            fontSize: "1.1rem",
            fontWeight: 500,
            bgcolor: "#4caf50",
            color: "#fff",
            boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
            borderRadius: 2,
            textAlign: "center",
          }}
        >
          Object created successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ObjectForm;
