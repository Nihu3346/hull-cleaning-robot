import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "react-router-dom";

const pages = [
  "Homepage",
  "Our Algorithms",
  "Get a Quote",
  "About us",
  "Contact us",
  "Careers",
  "Find us on Linkdin",
];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ m: 5 }}>
            <AdbIcon
              sx={{ display: { xs: "none", md: "flex" }, mr: 1, ml: 5 }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>

            <Box
              sx={{ ml: 15, flexGrow: 1, display: { xs: "none", md: "flex" } }}
            >
              <Link to="/" style={{ textDecoration: 'none' }}>
                <Button
                  key="Home"
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    mx: 2,
                    color: "white",
                    display: "block",
                    ":hover": {
                      color: "primary.main",
                    },
                  }}
                >
                  Home
                </Button>
                </Link>
                <Link to="/aboutus" style={{ textDecoration: 'none' }}>
                <Button
                  key="aboutus"
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    mx: 2,
                    color: "white",
                    display: "block",
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
        </Container>
      </AppBar>
    </>
  );
};

export default Navbar;
