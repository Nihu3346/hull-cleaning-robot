// import React, { useState } from 'react';
// import { useSpring, animated } from 'react-spring';
// import 'bootstrap/dist/css/bootstrap.min.css';

// import './../CSS/ContactUsPage.css'; // Import the CSS file for additional styling

// const ContactUsPage = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });
//   const [showForm, setShowForm] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log(formData);
//   };

//   return (
//     <div className="contact-us-container">
//       <div className="container">
//         <h1 className="mb-4">Contact Us</h1>
//         <div>
//           <animated.form onSubmit={handleSubmit}>
//             <div className="form-group">
//               <label htmlFor="name">Your Name</label>
//               <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="form-control" required />
//             </div>
//             <div className="form-group">
//               <label htmlFor="email">Your Email</label>
//               <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="form-control" required />
//             </div>
//             <div className="form-group">
//               <label htmlFor="message">Message</label>
//               <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} className="form-control" required></textarea>
//             </div>
//             <button type="submit" className="btn btn-primary">
//               Send Message
//             </button>
//           </animated.form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactUsPage;
import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./../CSS/ContactUsPage.css";

const ContactUs = () => {
  return (
    <div className="contact-us">
      <Container>
        <Row>
          <Col md={6}>
            <div className="contact-form">
              <div className="contact-us-header">
                <h2>Let's talk about everything!</h2>
              </div>
              <Form>
                <Form.Group controlId="formName">
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>
                <Form.Group controlId="formEmail">
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>
                <Form.Group controlId="formMessage">
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Enter your message"
                  />
                </Form.Group>
                <div className="sub-button">
                <a href="#" class="cta">
                  <span>request</span>
                  <svg width="13px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                  </svg>
                </a>
                </div>
                
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactUs;
