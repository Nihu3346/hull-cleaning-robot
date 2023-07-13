import React from "react";
import sarthak from "../Images/sarthak.jpg";
import mayank from "../Images/Mayank.jpg";
import aylmer from "../Images/aylmerbritto.jpg";
import adiraj from "../Images/adityraj.jpg";
import sumukh from "../Images/sumukh.jpg";
import shreya from "../Images/shreya.jpg";
import prassanth from "../Images/prasshanth.jpg";
import savan from "../Images/savan.jpg";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import Typography from "@mui/joy/Typography";
import Link from "@mui/joy/Link";

const teamMembers = [
  {
    name: "Sarthak Vaishnav",
    title: "Founder & CEO",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum, tellus eget dictum consequat, elit mauris vestibulum risus, vel congue libero lectus in magna. Phasellus imperdiet sem vel libero varius, in eleifend risus efficitur. Sed non orci eu libero dictum sodales.",
    imgSrc: sarthak,
    LinkedIn: "https://www.linkedin.com/in/sarthak-vaishnav-38a22117a/",
  },
  {
    name: "Mayank B Karn",
    title: "Electrical Engineer",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum, tellus eget dictum consequat, elit mauris vestibulum risus, vel congue libero lectus in magna. Phasellus imperdiet sem vel libero varius, in eleifend risus efficitur. Sed non orci eu libero dictum sodales.",
    imgSrc: mayank,
    LinkedIn: "https://www.linkedin.com/in/sarthak-vaishnav-38a22117a/"
  },
  {
    name: "Savanth Gattu",
    title: "AI/ML Engineer",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum, tellus eget dictum consequat, elit mauris vestibulum risus, vel congue libero lectus in magna. Phasellus imperdiet sem vel libero varius, in eleifend risus efficitur. Sed non orci eu libero dictum sodales.",
    imgSrc: savan,
    LinkedIn: "https://www.linkedin.com/in/sarthak-vaishnav-38a22117a/"
  },
  {
    name: "Aylmer Britto Rex Harison",
    title: "AI/ML Designer",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum, tellus eget dictum consequat, elit mauris vestibulum risus, vel congue libero lectus in magna. Phasellus imperdiet sem vel libero varius, in eleifend risus efficitur. Sed non orci eu libero dictum sodales.",
    imgSrc: aylmer,
    LinkedIn: "https://www.linkedin.com/in/sarthak-vaishnav-38a22117a/"
  },
  {
    name: "Adityaraj Bhatt",
    title: "Operational and sourcing",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum, tellus eget dictum consequat, elit mauris vestibulum risus, vel congue libero lectus in magna. Phasellus imperdiet sem vel libero varius, in eleifend risus efficitur. Sed non orci eu libero dictum sodales.",
    imgSrc: adiraj,
    LinkedIn: "https://www.linkedin.com/in/sarthak-vaishnav-38a22117a/"
  },
  {
    name: "Sumukh Shrote",
    title: "Intern",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum, tellus eget dictum consequat, elit mauris vestibulum risus, vel congue libero lectus in magna. Phasellus imperdiet sem vel libero varius, in eleifend risus efficitur. Sed non orci eu libero dictum sodales.",
    imgSrc: sumukh,
    LinkedIn: "https://www.linkedin.com/in/sarthak-vaishnav-38a22117a/"
  },
  {
    name: "Shreya Ragi ",
    title: "Intern",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum, tellus eget dictum consequat, elit mauris vestibulum risus, vel congue libero lectus in magna. Phasellus imperdiet sem vel libero varius, in eleifend risus efficitur. Sed non orci eu libero dictum sodales.",
    imgSrc: shreya,
    LinkedIn: "https://www.linkedin.com/in/sarthak-vaishnav-38a22117a/"
  },
  {
    name: "Prasshanth C.V",
    title: "Intern",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum, tellus eget dictum consequat, elit mauris vestibulum risus, vel congue libero lectus in magna. Phasellus imperdiet sem vel libero varius, in eleifend risus efficitur. Sed non orci eu libero dictum sodales.",
    imgSrc: prassanth,
    LinkedIn: "https://www.linkedin.com/in/sarthak-vaishnav-38a22117a/"
  },
];

const TeamInfo = () => {


  return (
    <div className="team-container">
      <div className="team-inner">
        <div className="our-values-title">
          <span>Our</span>
          <span> Leadership</span>
          <span> Team</span>
        </div>
        <div className="row">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-md-3">
              <Card
                className="mb-4"
                sx={{
                  width: 300,
                  bgcolor: "initial",
                  boxShadow: "none",
                  "--Card-padding": "0px",
                }}
              >
                <Box sx={{ position: "relative" }}>
                  <AspectRatio ratio="0.8">
                    <figure>
                      <img
                        src={member.imgSrc}
                        srcSet="https://images.unsplash.com/photo-1515825838458-f2a94b20105a?auto=format&fit=crop&w=300&dpr=2 2x"
                        loading="lazy"
                        alt="Yosemite by Casey Horner"
                      />
                    </figure>
                  </AspectRatio>
                  <CardCover
                    className="gradient-cover"
                    sx={{
                      "&:hover, &:focus-within": {
                        opacity: 1,
                      },
                      opacity: 0,
                      transition: "0.1s ease-in",
                      background:
                        "linear-gradient(180deg,transparent 62%,rgba(0,0,0,0.05) 63.94%,rgba(0,0,0,0.1) 65.89%,rgba(0,0,0,0.15) 67.83%,rgba(0,0,0,0.2) 69.78%,rgba(0,0,0,0.25) 71.72%,rgba(0,0,0,0.3) 73.67%,rgba(0,0,0,0.35) 75.61%,rgba(0,0,0,0.4) 77.56%,rgba(0,0,0,0.45) 79.5%,rgba(0,0,0,0.5) 81.44%,rgba(0,0,0,0.55) 83.39%,rgba(0,0,0,0.6) 85.33%,rgba(0,0,0,0.65) 87.28%,rgba(0,0,0,0.7) 89.22%,rgba(0,0,0,0.75) 91.17%)",
                    }}
                  >
                    {/* The first box acts as a container that inherits style from the CardCover */}
                    <Box>
                      <Box
                        sx={{
                          p: 2,
                          display: "flex",
                          alignItems: "center",
                          gap: 1.5,
                          flexGrow: 1,
                          alignSelf: "flex-end",
                        }}
                      >
                        <Typography level="h2" noWrap sx={{ fontSize: "lg" }}>
                          <Link
                            href={member.LinkedIn}
                            overlay
                            underline="none"
                            style={{
                              color: "#fff",
                              textOverflow: "ellipsis",
                              overflow: "hidden",
                              display: "block",
                            }}
                            target="_blank"
                          >
                            {member.name}
                          </Link>
                        </Typography>
                      </Box>
                    </Box>
                  </CardCover>
                </Box>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamInfo;
