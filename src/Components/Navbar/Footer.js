import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Divider,
  IconButton,
} from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import BusinessIcon from "@mui/icons-material/Business";
import CallIcon from "@mui/icons-material/Call";
import HullClean from "../Pages/HullClean";

const Footer = () => {
  return (
    <>
      <Divider sx={{ backgroundColor: "black" }} />
      <Box
        sx={{
          width: "100%",
          height: "auto",
          backgroundColor: "#242d33",
          paddingTop: "1rem",
          paddingBottom: "1rem",
        }}
      >
        <Container maxWidth="xl">
          <Grid container direction="column" alignItems="center" spacing={1}>
            <Grid
              container
              alignItems="center"
              justifyContent="center"
              sx={{ py: 2 }}
            >
              <Grid
                item
                xs={6}
                sx={{
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <AdbIcon sx={{ color: "white" }} />
                <Typography
                  variant="h6"
                  noWrap
                  sx={{
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: "white",
                    textDecoration: "none",
                    ml: 1,
                  }}
                >
                  LOGO
                </Typography>
              </Grid>

              <Grid
                item
                xs={6}
                sx={{
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <IconButton sx={{ mr: 2, color: "white" }}>
                  <FacebookIcon />
                </IconButton>
                <IconButton sx={{ mr: 2, color: "white" }}>
                  <TwitterIcon />
                </IconButton>
                <IconButton sx={{ mr: 2, color: "white" }}>
                  <InstagramIcon />
                </IconButton>
                <IconButton sx={{ color: "white" }}>
                  <LinkedInIcon />
                </IconButton>
              </Grid>
            </Grid>

            <Grid container sx={{ marginTop: 4 }}>
              <Grid item xs={12} md={4}>
                <Typography variant="body1" align="center" color="white">
                  <p style={{ fontWeight: 700 }}>Hull Cleaning</p>
                  <a href="/hullcleaning" style={{ textDecoration: "none", color: "white" }}>
                    <p>Commercial Advantage</p>
                  </a>
                  <a href="/hullcleaning" style={{ textDecoration: "none", color: "white" }}>
                    <p>Environmental Advantage</p>
                  </a>
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="body1" align="center" color="white">
                  <p style={{ fontWeight: 700 }}>Quick Links</p>
                  <a href="/aboutus" style={{ textDecoration: "none", color: "white" }}>
                    <p>About Us</p>
                  </a>
                  <a href="/aboutus" style={{ textDecoration: "none", color: "white" }}>
                    <p>Our Team</p>
                  </a>
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="body1" align="center" color="white">
                  <p style={{ fontWeight: 700 }}>Contact Info</p>
                  <p>
                    <IconButton style={{ pointerEvents: "none" }}>
                      <BusinessIcon sx={{ mr: 1 }} />
                    </IconButton>
                    Hyderabad, Jubilee Hills
                  </p>
                  <p>
                    <IconButton style={{ pointerEvents: "none" }}>
                      <CallIcon sx={{ mr: 1 }} />
                    </IconButton>
                    99999 99999
                  </p>
                </Typography>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Typography
                color="textSecondary"
                variant="subtitle1"
                sx={{ fontSize: "15px" }}
              >
                {`${new Date().getFullYear()} Company Name. All rights reserved.`}
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
