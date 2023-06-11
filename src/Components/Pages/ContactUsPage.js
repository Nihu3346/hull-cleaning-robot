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
                  <a href="#" className="cta">
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
