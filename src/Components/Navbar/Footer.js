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
      <Divider sx={{ backgroundColor: "black" }} />
      <Box
        sx={{
          width: "100%",
          height: "auto",
          backgroundColor: "white",
          paddingTop: "1rem",
          paddingBottom: "1rem",
        }}
      >
        <Container maxWidth="lg">
          <Grid container direction="column" alignItems="center" spacing={1}>
            <Grid
              container
              alignItems="center"
              justifyContent="center"
              item
              xs={12}
              sx={{ my: 2 }}
            >
              <AdbIcon sx={{ color: "black" }} />
              <Typography
                variant="h6"
                noWrap
                sx={{
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "black",
                  textDecoration: "none",
                  ml: 1,
                }}
              >
                LOGO
              </Typography>
            </Grid>

            <Grid item xs={12} sx={{ marginTop: 2 }}>
              <Typography color="black" variant="subtitle1" style={{ fontWeight: 700 }}>
                {`Connect`}
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <IconButton sx={{ mr: 2 }}>
                <FacebookIcon />
              </IconButton>
              <IconButton sx={{ mr: 2 }}>
                <TwitterIcon />
              </IconButton>
              <IconButton sx={{ mr: 2 }}>
                <InstagramIcon />
              </IconButton>
              <IconButton>
                <LinkedInIcon />
              </IconButton>
            </Grid>

            <Grid container sx={{ marginTop: 4 }}>
              <Grid item xs={12} md={4}>
                <Typography variant="body1" align="center">
                  <p style={{ fontWeight: 700 }}>Hull Cleaning</p>
                  <p>Economic Advantage</p>
                  <p>Environmental Advantage</p>
                  <p>Quality Policy</p>
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="body1" align="center">
                  <p style={{ fontWeight: 700 }}>Quick Links</p>
                  <p>About Us</p>
                  <p>Out Team</p>
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="body1" align="center">
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
