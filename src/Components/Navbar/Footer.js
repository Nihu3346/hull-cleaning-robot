import React from "react";
import { Box, Container, Grid, Typography, Divider, IconButton } from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

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
            <Grid item xs={12}>
              <Typography color="black" variant="subtitle1">
                {`React | Material UI | React Router`}
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
            <Grid item xs={12}>
              <Typography
                color="textSecondary"
                variant="subtitle1"
                sx={{ fontSize: "12px" }}
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
