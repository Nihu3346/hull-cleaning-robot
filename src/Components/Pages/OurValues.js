import { React } from "react";
import "./../CSS/About.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const OurValues = () => {
  return (
    <>
      <div className="our-values-container">
        <div className="our-values-inner">
          <div className="our-values-title">
            <span>Our</span>
            <span> Values</span>
          </div>
          <div className="rows">
            <Row xs={1} md={3} className="g-4">
              <Col key={1}>
                <Card border="light">
                  {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                  <Card.Body>
                    <div className="card-title">
                      <Card.Title>Sustainability</Card.Title>
                      <hr className="hor-line" />
                    </div>
                    <div className="card-content">
                      <Card.Text>
                        Using biodegradable materials and minimize waste in our
                        manufacturing processes
                      </Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col key={2}>
                <Card border="light">
                  {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                  <Card.Body>
                    <div className="card-title">
                      <Card.Title>Safety</Card.Title>
                      <hr className="hor-line" />
                    </div>
                    <div className="card-content">
                      <Card.Text>
                        Our product designed to be non-toxic and safe for use in
                        marine environments
                      </Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col key={3}>
                <Card border="light">
                  {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                  <Card.Body>
                    <div className="card-title">
                      <Card.Title>Innovation</Card.Title>
                      <hr className="hor-line" />
                    </div>
                    <div className="card-content">
                      <Card.Text>
                        Our dedicated research and development team is always
                        working to create cutting-edge solutions that are
                        efficient and effective.
                      </Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col key={4}>
                <Card border="light">
                  {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                  <Card.Body>
                    <div className="card-title">
                      <Card.Title>Customer satisfaction</Card.Title>
                      <hr className="hor-line" />
                    </div>
                    <div className="card-content">
                      <Card.Text>
                        Committed to providing exceptional customer service and
                        support to ensure complete satisfaction with our
                        products and services
                      </Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col key={5}>
                <Card border="light">
                  {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                  <Card.Body>
                    <div className="card-title">
                      <Card.Title>Teamwork</Card.Title>
                      <hr className="hor-line" />
                    </div>
                    <div className="card-content">
                      <Card.Text>
                        Team is made up of highly skilled and passionate
                        individuals who work together to achieve our goals.
                      </Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col key={6}>
                <Card border="light">
                  {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                  <Card.Body>
                    <div className="card-title">
                      <Card.Title>Customer First</Card.Title>
                      <hr className="hor-line" />
                    </div>
                    <div className="card-content">
                      <Card.Text>
                        We prioritize and measure every outcome based on how
                        well we serve our customers.
                      </Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurValues;
