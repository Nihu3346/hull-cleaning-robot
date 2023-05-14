import { React } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import drone from "./../Images/drone.png";
const InfoPanelB = () => {
  return (
    <>
        <h1 style={{ textAlign: "center" }}>
          Underwater Hull Cleaning Solutions
        </h1>
        
        <div className="panel-b-part-b">
        <img src={drone}  style={{width: "100%", height: "100%"}}/>
        </div>
        <div className="panel-b-part-a">
        <h2 style={{ textAlign: "center"}}>
          Why choose hull cleaner robot ?
        </h2>
        <p style={{marginTop: "6%"}}>
            Bio-fouling is a persistent problem that plagues the maritime
            industry, causing colonies of algae, barnacles, and tapeworm to
            attach to the hull of ships. This accumulation increases drag force
            on the vessel, leading to a reduction in fuel efficiency by as much
            as 20%. For container carriers and cargo ships, this can result in
            massive financial losses per trip, amounting to millions of dollars.
            As a result, regular and efficient hull cleaning is essential for
            maintaining optimal performance and profitability in the industry.
          </p>
        </div>
       
        {/* <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card> */}
    </>
  );
};

export default InfoPanelB;
