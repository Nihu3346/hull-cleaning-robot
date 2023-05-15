import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import AdbIcon from "@mui/icons-material/Adb";
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
} from "@mui/material";
import { useState } from "react";

const drawerWidth = 240;

const navItems = [
  { name: "Home", link: "/" },
  { name: "About Us", link: "/aboutus" },
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
                  // cursor: "pointer",
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

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" style={{ backgroundColor: "#ffffff" }}>
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <AdbIcon
            sx={{
              display: { xs: "none", md: "flex", color: "black" },
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
              color: "black",
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button
                key="Home"
                sx={{
                  color: "black",
                  ":hover": {
                    color: "primary.main",
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
                  color: "black",
                  ":hover": {
                    color: "primary.main",
                  },
                }}
              >
                About Us
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
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
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
