import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Grid,
  CircularProgress,
  Box,
} from "@mui/material";

const Form = () => {
  const [open, setOpen] = useState(false);
  const [fields, setFields] = useState([]);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [showAddressFields, setShowAddressFields] = useState(false);

  // ✅ Corrected field data with address subfields inside the parent
  const fielddata = [
    { label: "First Name", fieldname: "finame", datatype: "text" },
    { label: "Last Name", fieldname: "lname", datatype: "text" },
    { label: "Age", fieldname: "age", datatype: "number" },
    { label: "Type", fieldname: "type", datatype: "text" },
    { label: "Email", fieldname: "email", datatype: "text" },
    
    {
      label: "MyAddress",
      fieldname: "address",
      datatype: "address",
            // datatype: "fedress",
            
      sabfields: [
        { label: "City", fieldname: "city", datatype: "text" },
        { label: "State", fieldname: "state", datatype: "text" },
        { label: "Pincode", fieldname: "pincode", datatype: "text" },

        //       { label: "village", fieldname: "civillagety", datatype: "text" },
        // { label: "market", fieldname: "market", datatype: "text" },
        // { label: "code", fieldname: "code", datatype: "text" },
      ],
    },
  ];

const handleOpen = () => {
  const dynamicFields = [];
  const initialData = {};

  fielddata.forEach((f) => {
    // 🔹 Parent field
    dynamicFields.push({
      label: f.label,
      fieldname: f.fieldname,
      datatype: f.datatype,
    });

    initialData[f.fieldname] = "";

    // 🔹 Only for address datatype
    if (f.datatype === "address") {
      Object.entries(f).forEach(([key, value]) => {

        // ✅ Case 1: Array mila (address ke andar fields list)
        if (Array.isArray(value)) {
          value.forEach((innerField) => {
            if (innerField && typeof innerField === "object") {
              const childName = innerField.fieldname || key;

              dynamicFields.push({
                label: innerField.label || childName,
                fieldname: `${f.fieldname}.${childName}`,
                datatype: innerField.datatype || "text",
                parent: f.fieldname,
              });

              initialData[`${f.fieldname}.${childName}`] = "";
            }
          });
        }

        // ✅ Case 2: Object mila (city, state, pincode type)
        else if (
          typeof value === "object" &&
          value !== null &&
          !Array.isArray(value)
        ) {
          Object.keys(value).forEach((childKey) => {
            dynamicFields.push({
              label: childKey.toUpperCase(),
              fieldname: `${f.fieldname}.${childKey}`,
              datatype: "text",
              parent: f.fieldname,
            });

            initialData[`${f.fieldname}.${childKey}`] = "";
          });
        }
      });
    }
  });

  console.log("Dynamic Fields:", dynamicFields);
  console.log("Initial Data:", initialData);

  setFields(dynamicFields);
  setFormData(initialData);
  setOpen(true);
};

  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    setLoading(true);

    // Build payload with nested address if exists
    const payload = {};
    Object.keys(formData).forEach((key) => {
      if (key.includes(".")) {
        const [main, sub] = key.split(".");
        payload[main] = payload[main] || {};
        payload[main][sub] = formData[key];
      } else {
        payload[key] = formData[key];
      }
    });

    console.log("Payload to submit:", payload);
    alert("Check console for payload");

    setLoading(false);
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        Open Dynamic Form
      </Button>

      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>Dynamic Form</DialogTitle>
        <DialogContent>
  <Box mt={2}>
  <Grid container spacing={2}>
    {fields.map((field) => {
      // Parent Address button
      if (field.datatype === "address") {
        return (
          <Grid item xs={12} key={field.fieldname}>
            <Button
              variant="outlined"
              fullWidth
              onClick={() => setShowAddressFields(true)} // Click -> show subfields
            >
              MyAddress
            </Button>
          </Grid>
        );
      }

      // Subfields: show only if parent (MyAddress) clicked
      if (field.parent && !showAddressFields) return null;

      return (
        <Grid item xs={12} sm={6} key={field.fieldname}>
          <TextField
            fullWidth
            label={field.label}
            name={field.fieldname}
            value={formData[field.fieldname] || ""}
            onChange={handleChange}
            type={field.datatype === "number" ? "number" : "text"}
          />
        </Grid>
      );
    })}
  </Grid>
</Box>

        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            variant="contained"
            disabled={loading}
            startIcon={loading && <CircularProgress size={20} />}
          >
            {loading ? "Submitting..." : "Submit"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Form;

















// import React, { useState } from "react";
// import {
//   Button, Dialog, DialogTitle, DialogContent, DialogActions,
//   TextField, Grid, CircularProgress, Box
// } from "@mui/material";
// import axios from "axios";

// const Form = () => {
//   const [open, setOpen] = useState(false);
//   const [fields, setFields] = useState([]);
//   const [formData, setFormData] = useState({});
//   const [loading, setLoading] = useState(false);

//   const handleOpen = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/api/auth/getdata?type=customer");
//       const fetchedFields = res.data.fields;

//       const initialData = {};
//       fetchedFields.forEach(f => {
//         initialData[f.fieldname] = ""; // myaddress.city/state/pincode bhi yahi aa jaayenge
//       });

//       setFields(fetchedFields);
//       setFormData(initialData);
//       setOpen(true);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const handleClose = () => setOpen(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async () => {
//     setLoading(true);
//     try {
//       // Convert nested fields back to JSON
//       const payload = {};
//       Object.keys(formData).forEach(key => {
//         if (key.startsWith("myaddress.")) {
//           payload.myaddress = payload.myaddress || {};
//           const subKey = key.split(".")[1];
//           payload.myaddress[subKey] = formData[key];
//         } else {
//           payload[key] = formData[key];
//         }
//       });

//       payload.type = "customer"; // table name
//       await axios.post("http://localhost:5000/api/auth/custsel", payload);

//       setLoading(false);
//       setOpen(false);
//       alert("Form submitted successfully!");
//     } catch (err) {
//       console.error(err);
//       setLoading(false);
//       alert("Error submitting form");
//     }
//   };

//   return (
//     <div>
//       <Button variant="contained" onClick={handleOpen}>
//         Open Dynamic Form
//       </Button>

//       <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
//         <DialogTitle>Dynamic Form</DialogTitle>
//         <DialogContent>
//           <Box sx={{ mt: 1 }}>
//             <Grid container spacing={2}>
//               {fields.length === 0 ? (
//                 <Grid item xs={12}>Loading fields...</Grid>
//               ) : (
//                 fields.map(field => (
//                   <Grid item xs={12} sm={6} key={field.fieldname}>
//                     <TextField
//                       fullWidth
//                       label={field.label}
//                       name={field.fieldname}
//                       value={formData[field.fieldname] || ""}
//                       onChange={handleChange}
//                       type={field.datatype.includes("integer") ? "number" : "text"}
//                       inputProps={{ maxLength: field.data_length || undefined }}
//                     />
//                   </Grid>
//                 ))
//               )}
//             </Grid>
//           </Box>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Cancel</Button>
//           <Button
//             variant="contained"
//             onClick={handleSubmit}
//             disabled={loading}
//             startIcon={loading && <CircularProgress size={20} />}
//           >
//             {loading ? "Submitting..." : "Submit"}
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// };

// export default Form;




























































// import React, { useState } from "react";
// import {
//   Button,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   TextField,
//   Grid,
//   CircularProgress,
//   Box,
// } from "@mui/material";

// const Form = () => {
//   const [open, setOpen] = useState(false);
//   const [fields, setFields] = useState([]);
//   const [formData, setFormData] = useState({});
//   const [loading, setLoading] = useState(false);
//   const [expandedFields, setExpandedFields] = useState({});

//   // 🔹 CONFIG (name kuch bhi ho sakta hai)
//   const fielddata = [
//     { label: "First Name", fieldname: "finame", datatype: "text" },
//     { label: "Last Name", fieldname: "lname", datatype: "text" },
//     { label: "Age", fieldname: "age", datatype: "number" },
//     { label: "Type", fieldname: "type", datatype: "text" },
//     { label: "Email", fieldname: "email", datatype: "text" },
//     {
//       label: "My---Address",
//       fieldname: "address",
//       datatype: "address",
//       data: [
//         { label: "City", fieldname: "city", datatype: "text" },
//         { label: "State", fieldname: "state", datatype: "text" },
//         { label: "Pincode", fieldname: "pincode", datatype: "text" },



//         // { label: "village", fieldname: "civillagety", datatype: "text" },
//         // { label: "market", fieldname: "market", datatype: "text" },
//         // { label: "code", fieldname: "code", datatype: "text" },
//       ],
//     },
//   ];

//   // 🔥 CORE LOGIC (NO HARD CODED KEY)
//   const generateFields = (data, parent = null, acc = [], init = {}) => {
//     data.forEach((field) => {
//       const fullName = parent ? `${parent}.${field.fieldname}` : field.fieldname;

//       acc.push({
//         label: field.label,
//         fieldname: fullName,
//         datatype: field.datatype,
//         parent,
//       });

//       init[fullName] = "";

//       // ✅ ONLY CHECK datatype === address
//       if (field.datatype === "address") {
//         Object.values(field).forEach((value) => {
//           // 🔥 kisi bhi naam ka array mile → recursion
//           if (
//             Array.isArray(value) &&
//             value.length &&
//             typeof value[0] === "object" &&
//             value[0].fieldname
//           ) {
//             generateFields(value, fullName, acc, init);
//           }
//         });
//       }
//     });

//     return { dynamicFields: acc, initialData: init };
//   };

//   const handleOpen = () => {
//     const { dynamicFields, initialData } = generateFields(fielddata);
//     setFields(dynamicFields);
//     setFormData(initialData);
//     setOpen(true);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((p) => ({ ...p, [name]: value }));
//   };

//   const toggleExpand = (name) => {
//     setExpandedFields((p) => ({ ...p, [name]: !p[name] }));
//   };

//   const handleSubmit = () => {
//     setLoading(true);

//     const payload = {};
//     Object.entries(formData).forEach(([key, val]) => {
//       const keys = key.split(".");
//       let cur = payload;
//       keys.forEach((k, i) => {
//         if (i === keys.length - 1) cur[k] = val;
//         else {
//           cur[k] = cur[k] || {};
//           cur = cur[k];
//         }
//       });
//     });

//     console.log("FINAL PAYLOAD 👉", payload);
//     alert("Console check karo");
//     setLoading(false);
//     setOpen(false);
//   };

//   return (
//     <div>
//       <Button variant="contained" onClick={handleOpen}>
//         Open Dynamic Form
//       </Button>

//       <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth>
//         <DialogTitle>Dynamic Form</DialogTitle>

//         <DialogContent>
//           <Box mt={2}>
//             <Grid container spacing={2}>
//               {fields.map((f) => {
//                 if (f.parent && !expandedFields[f.parent]) return null;

//                 if (f.datatype === "address" && !f.parent) {
//                   return (
//                     <Grid item xs={12} key={f.fieldname}>
//                       <TextField
//                         fullWidth
//                         label={f.label}
//                         name={f.fieldname}
//                         value={formData[f.fieldname]}
//                         onFocus={() => toggleExpand(f.fieldname)}
//                         onChange={handleChange}
//                       />
//                     </Grid>
//                   );
//                 }

//                 return (
//                   <Grid item xs={12} sm={6} key={f.fieldname}>
//                     <TextField
//                       fullWidth
//                       label={f.label}
//                       name={f.fieldname}
//                       value={formData[f.fieldname]}
//                       onChange={handleChange}
//                       type={f.datatype === "number" ? "number" : "text"}
//                     />
//                   </Grid>
//                 );
//               })}
//             </Grid>
//           </Box>
//         </DialogContent>

//         <DialogActions>
//           <Button onClick={() => setOpen(false)}>Cancel</Button>
//           <Button
//             variant="contained"
//             onClick={handleSubmit}
//             disabled={loading}
//             startIcon={loading && <CircularProgress size={18} />}
//           >
//             Submit
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// };

// export default Form;





















