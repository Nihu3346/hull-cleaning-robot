import drone from "./../Images/drone.png";
import {
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
  Typography,
  Grid,
} from "@mui/material";

const Advantage1 = () => {
  return (
    <>
      <Typography
        align="center"
        sx={{
          fontSize: 34,
          fontWeight: 600,
          backgroundImage: "linear-gradient(to right, #D4A6B0, #4682B4)",
          color: "transparent",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          mb: 2,
          marginTop: "10px",
        }}
      >
        How Our Robots Save You Time and Money Compared to Manual Diving Teams
      </Typography>
      <Card
        style={{
          borderRadius: "10px",
          border: "2px solid #e0e0e0",
          boxShadow: "none",
          maxWidth: "90%",
          margin: "auto",
          background: "linear-gradient(to right, #D4A6B0, #4682B4)",
          color: "#fff",
          fontFamily: "Roboto",
        }}
      >
        <CardContent>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={6} order={1}>
              <img
                src={drone}
                alt="Hull-Cleaner"
                style={{ width: "100%", borderRadius: "10px" }}
              />
            </Grid>
            <Grid item xs={12} md={6} order={2}>
              <Typography variant="body1" sx={{ textAlign: "justify" }}>
                In India, the process of cleaning hulls of ships is done
                manually which is a tedious and expensive process. It requires a
                team of 4 divers to work for 3 days to complete a task that can
                be easily accomplished by our hull cleaner robots within a day.
                The manual process has its limitations as divers can only work
                during daylight hours and need to frequently replenish their
                oxygen resources, while our robots can work 24x7 without any
                breaks. With our robots, the process of cleaning hulls will not
                only be efficient but also cost-effective, saving time and
                resources for the shipping industry.
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default Advantage1;
