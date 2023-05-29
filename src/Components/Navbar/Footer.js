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

const Footer = () => {
  return (
    <>
      {/* <Divider sx={{ backgroundColor: "black" }} /> */}
      <Box
        sx={{
          width: "100%",
          height: "auto",
          backgroundColor: "#141414",
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
                <IconButton
                  sx={{
                    mr: 2,
                    color: "#1877F2",
                    backgroundColor: "white",
                    "&:hover": {
                      backgroundColor: "#f7cbd1",
                    },
                  }}
                >
                  <FacebookIcon />
                </IconButton>
                <IconButton
                  sx={{
                    mr: 2,
                    color: "#1DA1F2",
                    backgroundColor: "white",
                    "&:hover": {
                      backgroundColor: "#f7dc97",
                    },
                  }}
                >
                  <TwitterIcon />
                </IconButton>
                <IconButton
                  sx={{
                    mr: 2,
                    color: "rgba(216, 32, 117)",
                    backgroundColor: "white",
                    "&:hover": {
                      backgroundColor: "#c0faec",
                    },
                  }}
                >
                  <InstagramIcon />
                </IconButton>
                <a
                  href="https://in.linkedin.com/in/sarthak-vaishnav-38a22117a"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton
                    sx={{
                      color: "#0A66C2",
                      backgroundColor: "white",
                      "&:hover": {
                        backgroundColor: "#d4ffb3",
                      },
                    }}
                  >
                    <LinkedInIcon />
                  </IconButton>
                </a>
              </Grid>
            </Grid>

            <Grid container sx={{ marginTop: 4 }}>
              <Grid item xs={12} md={4}>
                <Typography
                  variant="body1"
                  align="center"
                  color="white"
                  sx={{ fontFamily: "PT Sans, sans-serif" }}
                >
                  <p style={{ fontWeight: "bold", color: "#3a92fc" }}>
                    Hull Cleaning
                  </p>
                  <a
                    href="/hullcleaning"
                    style={{ textDecoration: "none", color: "white" }}
                    onMouseEnter={(e) => (e.target.style.color = "#aacefa")}
                    onMouseLeave={(e) => (e.target.style.color = "white")}
                  >
                    <p>Commercial Advantage</p>
                  </a>
                  <a
                    href="/hullcleaning"
                    style={{ textDecoration: "none", color: "white" }}
                    onMouseEnter={(e) => (e.target.style.color = "#aacefa")}
                    onMouseLeave={(e) => (e.target.style.color = "white")}
                  >
                    <p>Environmental Advantage</p>
                  </a>
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography
                  variant="body1"
                  align="center"
                  color="white"
                  sx={{ fontFamily: "PT Sans, sans-serif" }}
                >
                  <p style={{ fontWeight: 700, color: "#3a92fc" }}>
                    Quick Links
                  </p>
                  <a
                    href="/aboutus"
                    style={{ textDecoration: "none", color: "white" }}
                    onMouseEnter={(e) => (e.target.style.color = "#aacefa")}
                    onMouseLeave={(e) => (e.target.style.color = "white")}
                  >
                    <p>About Us</p>
                  </a>
                  <a
                    href="/aboutus"
                    style={{ textDecoration: "none", color: "white" }}
                    onMouseEnter={(e) => (e.target.style.color = "#aacefa")}
                    onMouseLeave={(e) => (e.target.style.color = "white")}
                  >
                    <p>Our Team</p>
                  </a>
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography
                  variant="body1"
                  align="center"
                  color="white"
                  sx={{
                    fontFamily: "PT Sans, sans-serif",
                  }}
                >
                  <p style={{ fontWeight: 700, color: "#3a92fc" }}>
                    Contact Info
                  </p>
                  <p
                    onMouseEnter={(e) => (e.target.style.color = "#aacefa")}
                    onMouseLeave={(e) => (e.target.style.color = "white")}
                  >
                    <IconButton
                      style={{ pointerEvents: "none", color: "#fff" }}
                    >
                      <BusinessIcon sx={{ mr: 1 }} />
                    </IconButton>
                    Hyderabad, Jubilee Hills
                  </p>
                  <p
                    onMouseEnter={(e) => (e.target.style.color = "#aacefa")}
                    onMouseLeave={(e) => (e.target.style.color = "white")}
                  >
                    <IconButton
                      style={{ pointerEvents: "none", color: "#fff" }}
                    >
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
                sx={{
                  fontSize: "15px",
                  color: "white",
                  fontFamily: "PT Sans, sans-serif",
                }}
              >
                {`${new Date().getFullYear()} LOGO. All rights reserved.`}
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
