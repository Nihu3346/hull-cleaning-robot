import React, { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import sarthak from "../Images/sarthak.jpg";
import mayank from "../Images/Mayank.jpg";
import aylmer from "../Images/aylmerbritto.jpg";
import adiraj from "../Images/adityraj.jpg";
import sumukh from "../Images/sumukh.jpg";
import shreya from "../Images/shreya.jpg";
import prassanth from "../Images/prasshanth.jpg";
import savan from "../Images/savan.jpg";
import { Link } from "react-router-dom";


const teamMembers = [
  {
    name: "Sarthak Vaishnav",
    title: "Founder & CEO",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum, tellus eget dictum consequat, elit mauris vestibulum risus, vel congue libero lectus in magna. Phasellus imperdiet sem vel libero varius, in eleifend risus efficitur. Sed non orci eu libero dictum sodales.",
    imgSrc: sarthak,
  },
  {
    name: "Mayank B Karn",
    title: "Electrical Engineer",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum, tellus eget dictum consequat, elit mauris vestibulum risus, vel congue libero lectus in magna. Phasellus imperdiet sem vel libero varius, in eleifend risus efficitur. Sed non orci eu libero dictum sodales.",
    imgSrc: mayank,
  },
  {
    name: "Savanth Gattu",
    title: "AI/ML Engineer",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum, tellus eget dictum consequat, elit mauris vestibulum risus, vel congue libero lectus in magna. Phasellus imperdiet sem vel libero varius, in eleifend risus efficitur. Sed non orci eu libero dictum sodales.",
    imgSrc: savan,
  },
  {
    name: "Aylmer Britto Rex Harison",
    title: "AI/ML Designer",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum, tellus eget dictum consequat, elit mauris vestibulum risus, vel congue libero lectus in magna. Phasellus imperdiet sem vel libero varius, in eleifend risus efficitur. Sed non orci eu libero dictum sodales.",
    imgSrc: aylmer,
  },
  {
    name: "Adityaraj Bhatt",
    title: "Operational and sourcing",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum, tellus eget dictum consequat, elit mauris vestibulum risus, vel congue libero lectus in magna. Phasellus imperdiet sem vel libero varius, in eleifend risus efficitur. Sed non orci eu libero dictum sodales.",
    imgSrc: adiraj,
  },
  {
    name: "Sumukh Shrote",
    title: "Intern",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum, tellus eget dictum consequat, elit mauris vestibulum risus, vel congue libero lectus in magna. Phasellus imperdiet sem vel libero varius, in eleifend risus efficitur. Sed non orci eu libero dictum sodales.",
    imgSrc: sumukh,
  },
  {
    name: "Shreya Ragi ",
    title: "Intern",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum, tellus eget dictum consequat, elit mauris vestibulum risus, vel congue libero lectus in magna. Phasellus imperdiet sem vel libero varius, in eleifend risus efficitur. Sed non orci eu libero dictum sodales.",
    imgSrc: shreya,
  },
  {
    name: "Prasshanth C.V",
    title: "Intern",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum, tellus eget dictum consequat, elit mauris vestibulum risus, vel congue libero lectus in magna. Phasellus imperdiet sem vel libero varius, in eleifend risus efficitur. Sed non orci eu libero dictum sodales.",
    imgSrc: prassanth,
  },
];

const TeamInfo = () => {
  const [showBio, setShowBio] = useState(false);
  const [selectedMember, setSelectedMember] = useState({});

  const handleClose = () => setShowBio(false);
  const handleShow = (member) => {
    setSelectedMember(member);
    setShowBio(true);
  };

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
              <Card className="mb-4">
                <Card.Img variant="top" src={member.imgSrc} />
                <Card.Body>
                  <Card.Title>{member.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {member.title}
                  </Card.Subtitle>
                  <Button variant="primary" onClick={() => handleShow(member)}>
                    Read more
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
        <Modal show={showBio} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedMember.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{selectedMember.bio}</Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default TeamInfo;
