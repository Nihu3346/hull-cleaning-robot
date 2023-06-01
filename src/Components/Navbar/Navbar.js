import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import AdbIcon from "@mui/icons-material/Adb";
import "../CSS/Navbar.css";

import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
  useScrollTrigger,
} from "@mui/material";
import React, { useState } from "react";

const drawerWidth = 240;

const navItems = [
  { name: "Home", link: "/" },
  { name: "About Us", link: "/aboutus" },
  { name: "Contact Us", link: "/contactus" },
];

const DrawerAppBar = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <AdbIcon />
        <Typography
          variant="h6"
          sx={{
            my: 2,
            fontFamily: "monospace",
            fontWeight: 700,
            color: "black",
          }}
        >
          LOGO
        </Typography>
      </Box>

      <Divider sx={{ backgroundColor: "black" }} />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name}>
            <ListItemButton
              sx={{
                display: "flex",
                justifyContent: "center",
                "&:hover": {
                  backgroundColor: "#ADDFFF",
                },
              }}
            >
              <Link to={item.link} style={{ textDecoration: "none" }}>
                <ListItemText
                  sx={{
                    color: "black",
                  }}
                  primary={item.name}
                />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const trigger = useScrollTrigger();

  const appBarStyle = {
    borderRadius: trigger ? "20px" : "0",
    boxShadow: trigger ? "0px 2px 4px rgba(0, 0, 0, 0.1)" : "none",
    marginLeft: trigger ? "4px" : "0",
    marginRight: trigger ? "4px" : "0",
    width: trigger ? "calc(100% - 8px)" : "100%",
    transition: "padding-left 0.3s ease, padding-right 0.3s ease",
  };

  const ElevationScroll = ({ children }) => {
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    });

    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  };

  return (
    <Box sx={{ display: "flex" }} className="responsive-appbar">
      <CssBaseline />
      <ElevationScroll>
        <AppBar
          component="nav"
          style={{ backgroundColor: "#141414", ...appBarStyle }}
        >
          <Toolbar>
            <IconButton
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" }, color: "white" }}
            >
              <MenuIcon />
            </IconButton>
            <AdbIcon
              sx={{
                display: { xs: "none", md: "flex", color: "white" },
                mr: 1,
                ml: 5,
              }}
            />
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "block" },
                fontFamily: "monospace",
                fontWeight: 700,
                color: "white",
              }}
            >
              LOGO
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Link to="/" style={{ textDecoration: "none" }}>
                <Button
                  key="Home"
                  sx={{
                    color: "white",
                    fontFamily: "PT Sans, sans-serif",
                    ":hover": {
                      color: "#3a92fc",
                    },
                  }}
                >
                  Home
                </Button>
              </Link>
              <Link to="/aboutus" style={{ textDecoration: "none" }}>
                <Button
                  key="aboutus"
                  sx={{
                    color: "white",
                    fontFamily: "PT Sans, sans-serif",
                    ":hover": {
                      color: "#3a92fc",
                    },
                  }}
                >
                  About Us
                </Button>
              </Link>
              <Link to="/contactus" style={{ textDecoration: "none" }}>
                <Button
                  key="ContactUs"
                  sx={{
                    color: "white",
                    fontFamily: "PT Sans, sans-serif",
                    ":hover": {
                      color: "#3a92fc",
                    },
                  }}
                >
                  Contact Us
                </Button>
              </Link>
            </Box>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
