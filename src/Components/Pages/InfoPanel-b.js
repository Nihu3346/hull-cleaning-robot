import drone from "./../Images/drone.png";
import {
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
  Typography,
  Grid,
} from "@mui/material";

const InfoPanelB = () => {
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
        }}
      >
        Underwater Hull Cleaning Solutions
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
            <Grid item xs={12} md={6} order={2}>
              <img
                src={drone}
                alt="Hull-Cleaner"
                style={{ width: "100%", borderRadius: "10px" }}
              />
            </Grid>
            <Grid item xs={12} md={6} order={2}>
              <Typography variant="h5" sx={{ textAlign: "center", my: 1 }}>
                Why choose hull cleaner robot?
              </Typography>
              <Typography variant="body1" sx={{ textAlign: "justify" }}>
                Bio-fouling is a persistent problem that plagues the maritime
                industry, causing colonies of algae, barnacles, and tapeworm to
                attach to the hull of ships. This accumulation increases drag
                force on the vessel, leading to a reduction in fuel efficiency
                by as much as 20%. For container carriers and cargo ships, this
                can result in massive financial losses per trip, amounting to
                millions of dollars. As a result, regular and efficient hull
                cleaning is essential for maintaining optimal performance and
                profitability in the industry.
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default InfoPanelB;
