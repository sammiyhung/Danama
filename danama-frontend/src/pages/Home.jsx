import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import '../styles/Home.css';import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section text-center">
        <Container fluid>
          <h1>Welcome to Danama</h1>
          <p>Empowering minds, shaping the future.</p>
          <Button className="flat-button" href="/admissions">
            Get Started
          </Button>
        </Container>
      </section>

      {/* Countdown Section */}
      <section className="countdown-section">
        <Container fluid>
          <Row className="countdown-timer">
            <Col className="countdown-block">
              <span>10</span>
              <p>Days</p>
            </Col>
            <Col className="countdown-block">
              <span>15</span>
              <p>Hours</p>
            </Col>
            <Col className="countdown-block">
              <span>45</span>
              <p>Minutes</p>
            </Col>
            <Col className="countdown-block">
              <span>30</span>
              <p>Seconds</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section text-center">
        <Container fluid>
          <h2>Ready to Join Us?</h2>
          <Button className="flat-button" href="/admissions">
            Apply Now
          </Button>
        </Container>
      </section>
    </div>
  );
};

export default Home;
