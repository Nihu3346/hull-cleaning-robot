import drone from "./../Images/drone.png";
import {
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
  Typography,
  Grid,
} from "@mui/material";

const Advantage3 = () => {
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
          marginTop: "60px",
        }}
      >
        Eco-Friendly Cleaning with Responsible Waste Disposal
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
                Diver-based cleaning of ships' hulls is a common practice that
                poses a significant threat to the marine ecosystem.
                Unfortunately, it is often carried out without proper safety
                measures for marine life, resulting in the pollution of the
                ocean abbeys with the waste generated during the cleaning
                process. At our company, we understand the importance of
                preserving marine life and maintaining a healthy ocean
                environment. Therefore, we have adopted eco-friendly cleaning
                methods that prioritize the safety and wellbeing of marine
                species. Our cleaning process is designed to collect all the
                waste generated during the cleaning process and dispose of it
                responsibly, following international norms and regulations. By
                implementing responsible waste disposal practices, we ensure
                that the marine ecosystem is not harmed and that our cleaning
                operations have a minimal impact on the environment. With our
                commitment to eco-friendly cleaning and responsible waste
                disposal, we aim to provide our clients with a cleaning solution
                that is effective, efficient, and environmentally sustainable.
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default Advantage3;
