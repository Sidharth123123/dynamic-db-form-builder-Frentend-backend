// import React, { useState } from "react";
// import {
//   Box,
//   AppBar,
//   Toolbar,
//   Typography,
//   Drawer,
//   List,
//   ListItem,
//   ListItemButton,
//   ListItemText,
//   CssBaseline,
//   Divider,
//   IconButton,
//   ListItemIcon,
//   Tooltip,
// } from "@mui/material";
// import { Menu as MenuIcon, Home as HomeIcon, Person as PersonIcon } from "@mui/icons-material";

// import CreateDatabasePage from "./CreateDatabasePage";

// const drawerWidth = 240;

// const Dashboard = () => {
//   const [selected, setSelected] = useState("Home");
//   const [open, setOpen] = useState(true);

//   const handleDrawerToggle = () => setOpen(!open);

//   const menuItems = [
//     { text: "Home", icon: <HomeIcon /> },
//     { text: "Create Database", icon: <PersonIcon /> },
//   ];

//   return (
//     <Box sx={{ display: "flex" }}>
//       <CssBaseline />

//       {/* Header */}
//       <AppBar
//         position="fixed"
//         sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, bgcolor: "#1976d2" }}
//       >
//         <Toolbar>
//           <IconButton color="inherit" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2 }}>
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" noWrap>
//             My Dashboard
//           </Typography>
//         </Toolbar>
//       </AppBar>

//       {/* Sidebar */}
//       <Drawer
//         variant="persistent"
//         open={open}
//         sx={{
//           width: drawerWidth,
//           flexShrink: 0,
//           "& .MuiDrawer-paper": { width: drawerWidth, boxSizing: "border-box", bgcolor: "#f0f0f0" },
//         }}
//       >
//         <Toolbar />
//         <Divider />
//         <List>
//           {menuItems.map(({ text, icon }) => (
//             <ListItem key={text} disablePadding>
//               <Tooltip title={text} placement="right">
//                 <ListItemButton
//                   selected={selected === text}
//                   onClick={() => setSelected(text)}
//                   sx={{
//                     "&.Mui-selected": { bgcolor: "#1976d2", color: "white", "& .MuiListItemIcon-root": { color: "white" } },
//                   }}
//                 >
//                   <ListItemIcon>{icon}</ListItemIcon>
//                   <ListItemText primary={text} />
//                 </ListItemButton>
//               </Tooltip>
//             </ListItem>
//           ))}
//         </List>
//       </Drawer>

//       {/* Main Content */}
//       <Box
//         component="main"
//         sx={{ flexGrow: 1, p: 3, transition: "margin 0.3s", marginLeft: open ? `${drawerWidth}px` : 0 }}
//       >
//         <Toolbar />

//         {/* Conditional Rendering */}
//         {selected === "Home" && (
//           <>
//             <Typography variant="h4" gutterBottom>
//               Home
//             </Typography>
//             <Typography paragraph>
//               Welcome to the Home section.
//             </Typography>
//           </>
//         )}

//         {selected === "Create Database" && <CreateDatabasePage />}

//         {/* Footer */}
//         <Box
//           sx={{
//             position: "fixed",
//             bottom: 0,
//             left: open ? `${drawerWidth}px` : 0,
//             right: 0,
//             bgcolor: "#1976d2",
//             color: "white",
//             p: 2,
//             textAlign: "center",
//           }}
//         >
//           &copy; 2026 My Company
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Dashboard;




// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   AppBar,
//   Toolbar,
//   Typography,
//   Drawer,
//   List,
//   ListItem,
//   ListItemButton,
//   ListItemText,
//   CssBaseline,
//   Divider,
//   IconButton,
//   ListItemIcon,
//   Tooltip,
// } from "@mui/material";
// import { Menu as MenuIcon, Home as HomeIcon, Storage as StorageIcon } from "@mui/icons-material";

// import CreateDatabasePage from "./CreateDatabasePage";
// import axios from "axios";

// const drawerWidth = 240;

// const Dashboard = () => {
//   const [selected, setSelected] = useState("Home");
//   const [open, setOpen] = useState(true);
//   const [tables, setTables] = useState([]); // Dynamic table buttons
//   const [selectedTableId, setSelectedTableId] = useState(null);

//   const handleDrawerToggle = () => setOpen(!open);

//   const menuItems = [
//     { text: "Home", icon: <HomeIcon /> },
//     { text: "Create Database", icon: <StorageIcon /> },
//   ];

//   // Fetch tables dynamically from API
 

//   return (
//     <Box sx={{ display: "flex" }}>
//       <CssBaseline />

//       {/* Header */}
//       <AppBar
//         position="fixed"
//         sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, bgcolor: "#1976d2" }}
//       >
//         <Toolbar>
//           <IconButton color="inherit" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2 }}>
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" noWrap>
//             My Dashboard
//           </Typography>
//         </Toolbar>
//       </AppBar>

//       {/* Sidebar */}
//       <Drawer
//         variant="persistent"
//         open={open}
//         sx={{
//           width: drawerWidth,
//           flexShrink: 0,
//           "& .MuiDrawer-paper": { width: drawerWidth, boxSizing: "border-box", bgcolor: "#f0f0f0" },
//         }}
//       >
//         <Toolbar />
//         <Divider />
//         <List>
//           {menuItems.map(({ text, icon }) => (
//             <ListItem key={text} disablePadding>
//               <Tooltip title={text} placement="right">
//                 <ListItemButton
//                   selected={selected === text}
//                   onClick={() => setSelected(text)}
//                   sx={{
//                     "&.Mui-selected": {
//                       bgcolor: "#1976d2",
//                       color: "white",
//                       "& .MuiListItemIcon-root": { color: "white" },
//                     },
//                   }}
//                 >
//                   <ListItemIcon>{icon}</ListItemIcon>
//                   <ListItemText primary={text} />
//                 </ListItemButton>
//               </Tooltip>
//             </ListItem>
//           ))}

//           {/* Dynamic table buttons only in Create Database */}
//           {selected === "Create Database" &&
//             tables.map((table) => (
//               <ListItem key={table.object_id} disablePadding>
//                 <ListItemButton
//                   selected={selectedTableId === table.object_id}
//                   onClick={() => setSelectedTableId(table.object_id)}
//                   sx={{
//                     pl: 4,
//                     "&.Mui-selected": { bgcolor: "#1976d2", color: "white" },
//                   }}
//                 >
//                   <ListItemText primary={table.object_name} />
//                 </ListItemButton>
//               </ListItem>
//             ))}
//         </List>
//       </Drawer>

//       {/* Main Content */}
//       <Box
//         component="main"
//         sx={{ flexGrow: 1, p: 3, transition: "margin 0.3s", marginLeft: open ? `${drawerWidth}px` : 0 }}
//       >
//         <Toolbar />

//         {selected === "Home" && (
//           <>
//             <Typography variant="h4" gutterBottom>
//               Home
//             </Typography>
//             <Typography paragraph>Welcome to the Home section.</Typography>
//           </>
//         )}

//         {selected === "Create Database" && (
//           <CreateDatabasePage selectedTableId={selectedTableId} />
//         )}

//         {/* Footer */}
//         <Box
//           sx={{
//             position: "fixed",
//             bottom: 0,
//             left: open ? `${drawerWidth}px` : 0,
//             right: 0,
//             bgcolor: "#1976d2",
//             color: "white",
//             p: 2,
//             textAlign: "center",
//           }}
//         >
//           &copy; 2026 My Company
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Dashboard;



















// import React, { useState } from "react";
// import {
//   Box,
//   AppBar,
//   Toolbar,
//   Typography,
//   Drawer,
//   List,
//   ListItem,
//   ListItemButton,
//   ListItemText,
//   CssBaseline,
//   Divider,
//   IconButton,
//   ListItemIcon,
//   Tooltip,
// } from "@mui/material";
// import { Menu as MenuIcon, Home as HomeIcon, Storage as StorageIcon, Settings as SettingsIcon } from "@mui/icons-material";

// import CreateDatabasePage from "./CreateDatabasePage";
// import ManagePage from "./ManagePage"; // New Manage Page component

// const drawerWidth = 240;

// const Dashboard = () => {
//   const [selected, setSelected] = useState("Home");
//   const [open, setOpen] = useState(true);
//   const [selectedTableId, setSelectedTableId] = useState(null);

//   const handleDrawerToggle = () => setOpen(!open);

//   // Sidebar menu items
//   const menuItems = [
//     { text: "Home", icon: <HomeIcon /> },
//     { text: "Create Database", icon: <StorageIcon /> },
//     { text: "Manage Page", icon: <SettingsIcon /> }, // Added Manage Page button
//   ];

//   return (
//     <Box sx={{ display: "flex" }}>
//       <CssBaseline />

//       {/* Header */}
//       <AppBar
//         position="fixed"
//         sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, bgcolor: "#1976d2" }}
//       >
//         <Toolbar>
//           <IconButton color="inherit" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2 }}>
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" noWrap>
//             My Dashboard
//           </Typography>
//         </Toolbar>
//       </AppBar>

//       {/* Sidebar */}
//       <Drawer
//         variant="persistent"
//         open={open}
//         sx={{
//           width: drawerWidth,
//           flexShrink: 0,
//           "& .MuiDrawer-paper": { width: drawerWidth, boxSizing: "border-box", bgcolor: "#f0f0f0" },
//         }}
//       >
//         <Toolbar />
//         <Divider />
//         <List>
//           {menuItems.map(({ text, icon }) => (
//             <ListItem key={text} disablePadding>
//               <Tooltip title={text} placement="right">
//                 <ListItemButton
//                   selected={selected === text}
//                   onClick={() => setSelected(text)}
//                   sx={{
//                     "&.Mui-selected": {
//                       bgcolor: "#1976d2",
//                       color: "white",
//                       "& .MuiListItemIcon-root": { color: "white" },
//                     },
//                   }}
//                 >
//                   <ListItemIcon>{icon}</ListItemIcon>
//                   <ListItemText primary={text} />
//                 </ListItemButton>
//               </Tooltip>
//             </ListItem>
//           ))}
//         </List>
//       </Drawer>

//       {/* Main Content */}
//       <Box
//         component="main"
//         sx={{ flexGrow: 1, p: 3, transition: "margin 0.3s", marginLeft: open ? `${drawerWidth}px` : 0 }}
//       >
//         <Toolbar />

//         {/* Home Page */}
//         {selected === "Home" && (
//           <>
//             <Typography variant="h4" gutterBottom>
//               Home
//             </Typography>
//             <Typography paragraph>Welcome to the Home section.</Typography>
//           </>
//         )}

//         {/* Create Database Page */}
//         {selected === "Create Database" && (
//           <CreateDatabasePage selectedTableId={selectedTableId} />
//         )}

//         {/* Manage Page */}
//         {selected === "Manage Page" && (
//           <ManagePage /> 
//         )}

//         {/* Footer */}
//         <Box
//           sx={{
//             position: "fixed",
//             bottom: 0,
//             left: open ? `${drawerWidth}px` : 0,
//             right: 0,
//             bgcolor: "#1976d2",
//             color: "white",
//             p: 2,
//             textAlign: "center",
//           }}
//         >
//           &copy; 2026 My Company
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Dashboard;















































// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   AppBar,
//   Toolbar,
//   Typography,
//   Drawer,
//   List,
//   ListItem,
//   ListItemButton,
//   ListItemText,
//   CssBaseline,
//   Divider,
//   IconButton,
//   ListItemIcon,
//   Tooltip,
// } from "@mui/material";
// import { Menu as MenuIcon, Home as HomeIcon, Storage as StorageIcon, Settings as SettingsIcon } from "@mui/icons-material";

// import CreateDatabasePage from "./CreateDatabasePage";
// import ManagePage from "./ManagePage";
// // import axios from "axios";

// const drawerWidth = 240;

// const Dashboard = () => {
//   const [selected, setSelected] = useState("Home");
//   const [open, setOpen] = useState(true);
//   const [tables, setTables] = useState([]); // Tables for sidebar (Manage Page only)
//   const [selectedTableId, setSelectedTableId] = useState(null);

//   const handleDrawerToggle = () => setOpen(!open);

//   // Sidebar menu items
//   const menuItems = [
//     { text: "Home", icon: <HomeIcon /> },
//     { text: "Create Database", icon: <StorageIcon /> },
//     { text: "Manage Page", icon: <SettingsIcon /> },
//   ];

//   // Fetch tables **only when Manage Page is selected**
//   // useEffect(() => {
//   //   if (selected === "Manage Page") {
//   //     axios
//   //       .get("http://localhost:5000/api/auth/getObjectsCombined")
//   //       .then((res) => setTables(res.data))
//   //       .catch((err) => console.log(err));
//   //   } else {
//   //     setTables([]); // Clear tables for other pages
//   //     setSelectedTableId(null);
//   //   }
//   // }, [selected]);

//   return (
//     <Box sx={{ display: "flex" }}>
//       <CssBaseline />

//       {/* Header */}
//       <AppBar
//         position="fixed"
//         sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, bgcolor: "#1976d2" }}
//       >
//         <Toolbar>
//           <IconButton color="inherit" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2 }}>
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" noWrap>
//             My Dashboard
//           </Typography>
//         </Toolbar>
//       </AppBar>

//       {/* Sidebar */}
//       <Drawer
//         variant="persistent"
//         open={open}
//         sx={{
//           width: drawerWidth,
//           flexShrink: 0,
//           "& .MuiDrawer-paper": { width: drawerWidth, boxSizing: "border-box", bgcolor: "#f0f0f0" },
//         }}
//       >
//         <Toolbar />
//         <Divider />
//         <List>
//           {menuItems.map(({ text, icon }) => (
//             <ListItem key={text} disablePadding>
//               <Tooltip title={text} placement="right">
//                 <ListItemButton
//                   selected={selected === text}
//                   onClick={() => setSelected(text)}
//                   sx={{
//                     "&.Mui-selected": {
//                       bgcolor: "#1976d2",
//                       color: "white",
//                       "& .MuiListItemIcon-root": { color: "white" },
//                     },
//                   }}
//                 >
//                   <ListItemIcon>{icon}</ListItemIcon>
//                   <ListItemText primary={text} />
//                 </ListItemButton>
//               </Tooltip>
//             </ListItem>
//           ))}

//           {/* Sidebar table buttons (show only if Manage Page selected) */}
//           {selected === "Manage Page" &&
//             tables.map((table) => (
//               <ListItem key={table.object_id} disablePadding>
//                 <ListItemButton
//                   selected={selectedTableId === table.object_id}
//                   onClick={() => setSelectedTableId(table.object_id)}
//                   sx={{
//                     pl: 4,
//                     "&.Mui-selected": { bgcolor: "#1976d2", color: "white" },
//                   }}
//                 >
//                   <ListItemText primary={table.object_name} />
//                 </ListItemButton>
//               </ListItem>
//             ))}
//         </List>
//       </Drawer>

//       {/* Main Content */}
//       <Box
//         component="main"
//         sx={{ flexGrow: 1, p: 3, transition: "margin 0.3s", marginLeft: open ? `${drawerWidth}px` : 0 }}
//       >
//         <Toolbar />

//         {selected === "Home" && (
//           <>
//             <Typography variant="h4" gutterBottom>
//               Home
//             </Typography>
//             <Typography paragraph>Welcome to the Home section.</Typography>
//           </>
//         )}

//         {selected === "Create Database" && <CreateDatabasePage selectedTableId={selectedTableId} />}

//         {selected === "Manage Page" && <ManagePage />}
        
//         {/* Footer */}
//         <Box
//           sx={{
//             position: "fixed",
//             bottom: 0,
//             left: open ? `${drawerWidth}px` : 0,
//             right: 0,
//             bgcolor: "#1976d2",
//             color: "white",
//             p: 2,
//             textAlign: "center",
//           }}
//         >
//           &copy; 2026 My Company
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Dashboard;



// Dashboard.js














// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   AppBar,
//   Toolbar,
//   Typography,
//   Drawer,
//   List,
//   ListItem,
//   ListItemButton,
//   ListItemText,
//   CssBaseline,
//   Divider,
//   IconButton,
//   ListItemIcon,
//   Tooltip,
// } from "@mui/material";
// import { 
//   Menu as MenuIcon, 
//   Home as HomeIcon, 
//   Storage as StorageIcon, 
//   Settings as SettingsIcon, 
//   TouchApp as ButtonIcon // ✅ for ButtonPage
// } from "@mui/icons-material";

// import ManagePage from "./ManagePage";
// import CreateDatabasePage from "./CreateDatabasePage";
// import axios from "axios";
// import ButtonPage from "./ButtonPage";


// const drawerWidth = 240;

// const Dashboard = () => {
//   const [selected, setSelected] = useState("Home");
//   const [open, setOpen] = useState(true);
//   const [tables, setTables] = useState([]); 
//   const [selectedTable, setSelectedTable] = useState(null);

//   const handleDrawerToggle = () => setOpen(!open);

//   // Menu items
// //  const menuItems = [
// //   { text: "Home", icon: <HomeIcon /> },
// //   { text: "Create Database", icon: <StorageIcon /> },
// //   { text: "ButtonPage", icon: <ButtonIcon /> },
// //   { text: "Manage Page", icon: <SettingsIcon /> },
// // ];
// const menuItems = [
//   { text: "Home", icon: <HomeIcon sx={{ color: "#1976d2" }} /> }, // Blue
//   { text: "Create Database", icon: <StorageIcon sx={{ color: "#388e3c" }} /> }, // Green
//   { text: "ButtonPage", icon: <ButtonIcon sx={{ color: "#f57c00" }} /> }, // Orange
//   { text: "Manage Page", icon: <SettingsIcon sx={{ color: "#d32f2f" }} /> }, // Red
// ];


//   // Fetch tables **only when Manage Page is selected**
//   useEffect(() => {
//     if (selected === "Manage Page") {
//       axios
//         .get("http://localhost:5000/api/auth/getUsedObjects") // Your API for getting all tables
//         .then((res) => setTables(res.data || []))
//         .catch((err) => console.log(err));
//     } else {
//       setTables([]);
//       setSelectedTable(null);
//     }
//   }, [selected]);

//   return (
//     <Box sx={{ display: "flex" }}>
//       <CssBaseline />

//       {/* Header */}
//       <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, bgcolor: "#1976d2" }}>
//         <Toolbar>
//           <IconButton color="inherit" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2 }}>
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" noWrap>
//             My Dashboard
//           </Typography>
//         </Toolbar>
//       </AppBar>

//       {/* Sidebar */}
//       <Drawer
//         variant="persistent"
//         open={open}
//         sx={{
//           width: drawerWidth,
//           flexShrink: 0,
//           "& .MuiDrawer-paper": { width: drawerWidth, boxSizing: "border-box", bgcolor: "#f0f0f0" },
//         }}
//       >
//         <Toolbar />
//         <Divider />
//         <List>
//           {menuItems.map(({ text, icon }) => (
//             <ListItem key={text} disablePadding>
//               <Tooltip title={text} placement="right">
//                 <ListItemButton
//                   selected={selected === text}
//                   onClick={() => setSelected(text)}
//                   sx={{
//                     "&.Mui-selected": {
//                       bgcolor: "#1976d2",
//                       color: "white",
//                       "& .MuiListItemIcon-root": { color: "white" },
//                     },
//                   }}
//                 >
//                   <ListItemIcon>{icon}</ListItemIcon>
//                   <ListItemText primary={text} />
//                 </ListItemButton>
//               </Tooltip>
//             </ListItem>
//           ))}

//           {/* Tables (only if Manage Page selected) */}
//           {selected === "Manage Page" &&
//             tables.map((table) => (
//               <ListItem key={table.object_id} disablePadding>
//                 <ListItemButton
//                   selected={selectedTable?.object_id === table.object_id}
//                   onClick={() => setSelectedTable(table)}
//                   sx={{
//                     pl: 4,
//                     "&.Mui-selected": { bgcolor: "#1976d2", color: "white" },
//                   }}
//                 >
//                   <ListItemText primary={table.object_name} />
//                 </ListItemButton>
//               </ListItem>
//             ))}
//         </List>
//       </Drawer>

//       {/* Main Content */}
//     {/* Main Content */}
// <Box
//   component="main"
//   sx={{
//     flexGrow: 1,
//     p: 3,
//     transition: "margin 0.3s",
//     marginLeft: open ? `${drawerWidth}px` : 0,
//   }}
// >
//   <Toolbar />

//   {selected === "Home" && (
//     <>
//       <Typography variant="h4" gutterBottom>Home</Typography>
//       <Typography paragraph>Welcome to the Home section.</Typography>
//     </>
//   )}

//   {selected === "Create Database" && <CreateDatabasePage selectedTableId={selectedTable?.object_id} />}
//   {selected === "ButtonPage" && <ButtonPage />}

//   {selected === "Manage Page" && <ManagePage selectedTable={selectedTable} />}

// </Box>

//     </Box>
//   );
// };

// export default Dashboard;





import React, { useState, useEffect } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  CssBaseline,
  Divider,
  IconButton,
  ListItemIcon,
  Tooltip,
} from "@mui/material";
import { 
  Menu as MenuIcon, 
  Home as HomeIcon, 
  Storage as StorageIcon, 
  Settings as SettingsIcon, 
  TouchApp as ButtonIcon 
} from "@mui/icons-material";

import ManagePage from "./ManagePage";
import CreateDatabasePage from "./CreateDatabasePage";
import ButtonPage from "./ButtonPage";
import axios from "axios";

const drawerWidth = 240;

const Dashboard = () => {
  const savedSelected = localStorage.getItem("dashboard-selected") || "Home";
  const savedSelectedTable = JSON.parse(localStorage.getItem("dashboard-selectedTable")) || null;

  const [selected, setSelected] = useState(savedSelected);
  const [open, setOpen] = useState(true);
  const [tables, setTables] = useState([]); 
  const [selectedTable, setSelectedTable] = useState(savedSelectedTable);

  const handleDrawerToggle = () => setOpen(!open);

  const menuItems = [
    { text: "Home", icon: <HomeIcon sx={{ color: "#1976d2" }} /> },
    { text: "Create Database", icon: <StorageIcon sx={{ color: "#388e3c" }} /> },
    { text: "ButtonPage", icon: <ButtonIcon sx={{ color: "#f57c00" }} /> },
    { text: "Manage Page", icon: <SettingsIcon sx={{ color: "#d32f2f" }} /> },
  ];

  useEffect(() => {
    localStorage.setItem("dashboard-selected", selected);
  }, [selected]);

  useEffect(() => {
    localStorage.setItem("dashboard-selectedTable", JSON.stringify(selectedTable));
  }, [selectedTable]);

  useEffect(() => {
    if (selected === "Manage Page") {
      axios
        .get("http://localhost:5000/api/auth/getUsedObjects")
        .then((res) => setTables(res.data || []))
        .catch((err) => console.log(err));
    } else {
      setTables([]);
      setSelectedTable(null);
    }
  }, [selected]);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {/* Header */}
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, bgcolor: "#1976d2" }}>
        <Toolbar>
          <IconButton color="inherit" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            My Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Sidebar */}
      <Drawer
        variant="persistent"
        open={open}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": { width: drawerWidth, boxSizing: "border-box", bgcolor: "#f0f0f0" },
        }}
      >
        <Toolbar />
        <Divider />
        <List>
          {menuItems.map(({ text, icon }) => (
            <ListItem key={text} disablePadding>
              <Tooltip title={text} placement="right">
                <ListItemButton
                  selected={selected === text}
                  onClick={() => setSelected(text)}
                  sx={{
                    "&.Mui-selected": {
                      bgcolor: "#1976d2",
                      color: "white",
                      "& .MuiListItemIcon-root": { color: "white" },
                    },
                  }}
                >
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </Tooltip>
            </ListItem>
          ))}

          {selected === "Manage Page" &&
            tables.map((table) => (
              <ListItem key={table.object_id} disablePadding>
                <ListItemButton
                  selected={selectedTable?.object_id === table.object_id}
                  onClick={() => setSelectedTable(table)}
                  sx={{
                    pl: 4,
                    "&.Mui-selected": { bgcolor: "#1976d2", color: "white" },
                  }}
                >
                  <ListItemText primary={table.object_name} />
                </ListItemButton>
              </ListItem>
            ))}
        </List>
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          transition: "margin 0.3s",
          marginLeft: open ? `${drawerWidth}px` : 0,
        }}
      >
        <Toolbar />

        {selected === "Home" && (
          <>
            <Typography variant="h4" gutterBottom>Home</Typography>
            <Typography paragraph>Welcome to the Home section.</Typography>
          </>
        )}

        {selected === "Create Database" && <CreateDatabasePage selectedTableId={selectedTable?.object_id} />}
        {selected === "ButtonPage" && <ButtonPage />}
        {selected === "Manage Page" && <ManagePage selectedTable={selectedTable} />}
      </Box>
    </Box>
  );
};

export default Dashboard;




