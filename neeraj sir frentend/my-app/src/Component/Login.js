// import React, { useState } from "react";
// import { TextField, Button, Box, Typography, CircularProgress, Alert } from "@mui/material";
// import axios from "axios";

// const Login = () => {
//   const [name, setName] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     try {
//       const res = await axios.post("http://localhost:5000/api/auth/login", {
//         name,
//         password,
//       });

//       console.log("JWT Token:", res.data.token);
//       localStorage.setItem("token", res.data.token);
//       alert("Login successful!");

//       setName("");
//       setPassword("");
//     } catch (err) {
//       setError(err.response?.data?.message || "Login failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Box
//       sx={{
//         maxWidth: 400,
//         mx: "auto",
//         mt: 8,
//         p: 4,
//         border: "1px solid #ccc",
//         borderRadius: 2,
//         boxShadow: 2,
//       }}
//     >
//       <Typography variant="h5" mb={3} align="center">
//         Login
//       </Typography>

//       {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

//       <form onSubmit={handleSubmit}>
//         <TextField
//           label="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           fullWidth
//           margin="normal"
//           required
//         />

//         <TextField
//           label="Password"
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           fullWidth
//           margin="normal"
//           required
//         />

//         <Button
//           type="submit"
//           variant="contained"
//           color="primary"
//           fullWidth
//           sx={{ mt: 2 }}
//           disabled={loading}
//         >
//           {loading ? <CircularProgress size={24} color="inherit" /> : "Login"}
//         </Button>
//       </form>
//     </Box>
//   );
// };

// export default Login;










import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ import
import { TextField, Button, Box, Typography, CircularProgress, Alert } from "@mui/material";
import axios from "axios";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate(); // ✅ hook

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        name,
        password,
      });

      localStorage.setItem("token", res.data.token);
      alert("Login successful!");

      // ✅ redirect to dashboard
      navigate("/dashboard");

      setName("");
      setPassword("");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 400,
        mx: "auto",
        mt: 8,
        p: 4,
        border: "1px solid #ccc",
        borderRadius: 2,
        boxShadow: 2,
      }}
    >
      <Typography variant="h5" mb={3} align="center">
        Login
      </Typography>

      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          margin="normal"
          required
        />

        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          margin="normal"
          required
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} color="inherit" /> : "Login"}
        </Button>
      </form>
    </Box>
  );
};

export default Login;
