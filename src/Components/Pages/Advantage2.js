import drone from "./../Images/drone.png";
import {
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
  Typography,
  Grid,
} from "@mui/material";

const Advantage2 = () => {
  return (
    <>
      <Typography
        align="center"
        sx={{
          fontSize: 34,
          fontWeight: 600,
          backgroundImage: "linear-gradient(to right, #4682B4, #5DC9C3)",
          color: "transparent",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          mb: 2,
          marginTop: "60px",
        }}
      >
        Protecting Ships from Invasive Marine Species with Cavitation Jet-Based
        Technology
      </Typography>
      <Card
        style={{
          borderRadius: "10px",
          border: "2px solid #e0e0e0",
          boxShadow: "none",
          maxWidth: "90%",
          margin: "auto",
          background: "linear-gradient(to right,#4682B4, #5DC9C3)",
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
            <Grid item xs={12} md={6} order={1}>
              <Typography variant="body1" sx={{ textAlign: "justify" }}>
                The process of manually cleaning a ship's hull using brushes can
                have unintended consequences, such as scraping off the
                anti-fouling coating. This makes ships more vulnerable to
                invasive marine species attacks, which can have devastating
                effects on marine ecosystems and maritime commerce. Our solution
                uses cavitation jet-based technology to clean the hull without
                damaging the protective coating, thereby reducing the risk of
                invasive species colonization. By adopting this technology, we
                can help protect marine life and ensure the longevity of our
                clients' vessels.
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default Advantage2;
