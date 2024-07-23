import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import { AppContext } from "../../App";

import Menu from "@mui/material/Menu";
import {
  AppBar,
  Divider,
  List,
  ListItem,
  ListItemButton,
  Paper,
} from "@mui/material";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";

import ContentCut from "@mui/icons-material/ContentCut";
import ContentCopy from "@mui/icons-material/ContentCopy";
import ContentPaste from "@mui/icons-material/ContentPaste";
import Cloud from "@mui/icons-material/Cloud";
import { PageType } from "../../types";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openMenu, setOpenMenu] = useState(true);
  const { activePage, setAvtivePage } = useContext(AppContext);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setOpenMenu((v) => !v)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Photos
          </Typography>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
      <Box sx={{ display: "flex", flex: 1 }}>
        {openMenu && (
          <Paper
            elevation={3}
            sx={{ minWidth: 240, padding: 2, borderRadius: 0 }}
          >
            <List>
              <ListItem disablePadding>
                <ListItemButton
                  sx={{ borderRadius: 2, color: "white", bgcolor: "blue" }}
                  onClick={() => setAvtivePage("classes")}
                >
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary="Clasess" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding sx={{ mt: 2 }}>
                <ListItemButton
                  sx={{ borderRadius: 2, bgcolor: "blue", color: "white" }}
                  onClick={() => setAvtivePage("students")}
                >
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary="Students" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding sx={{ mt: 2 }}>
                <ListItemButton
                  sx={{ borderRadius: 2, bgcolor: "blue", color: "white" }}
                  onClick={() => setAvtivePage("subjects")}
                >
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary="Subjects" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding sx={{ mt: 2 }}>
                <ListItemButton
                  sx={{ borderRadius: 2, bgcolor: "blue", color: "white" }}
                  onClick={() => setAvtivePage("teachers")}
                >
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary="Teachers" />
                </ListItemButton>
              </ListItem>
            </List>
          </Paper>
        )}
        <Box sx={{ padding: 2 }} component={"main"}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
