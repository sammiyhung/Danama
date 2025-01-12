import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { FaQuestionCircle, FaUserCheck, FaRegSmile } from 'react-icons/fa';
import '../styles/Admissions.css';

const Admissions = () => {
  return (
    <Container className="admissions-container">
      {/* Hero Section */}
      <section className="admissions-hero">
        <h1>Welcome to Admissions</h1>
        <p>
          Your journey to excellence starts here. Explore our admissions process, check eligibility, and apply today to join our vibrant community.
        </p>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <h2>Why Choose Danama School?</h2>
        <Row>
          <Col md={4}>
            <Card className="choose-card">
              <FaUserCheck className="choose-icon" />
              <Card.Body>
                <Card.Title>Personalized Attention</Card.Title>
                <Card.Text>
                  Small class sizes ensure every student receives individual support and guidance.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="choose-card">
              <FaRegSmile className="choose-icon" />
              <Card.Body>
                <Card.Title>Inclusive Environment</Card.Title>
                <Card.Text>
                  A diverse and welcoming community that fosters collaboration and growth.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="choose-card">
              <FaQuestionCircle className="choose-icon" />
              <Card.Body>
                <Card.Title>Proven Excellence</Card.Title>
                <Card.Text>
                  A track record of academic success and a commitment to lifelong learning.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>

      {/* Eligibility Criteria */}
      <section className="eligibility">
        <h2>Eligibility Criteria</h2>
        <p>
          Admission to Danama School is based on merit, potential, and the commitment to excellence. Here’s what you need to apply:
        </p>
        <ul>
          <li>Completed application form</li>
          <li>Previous academic records</li>
          <li>Recommendation letters</li>
          <li>Entrance exam performance</li>
        </ul>
      </section>

      {/* Application Form */}
      <section className="application-form">
        <h2>Application Form</h2>
        <Form>
          <Row>
            <Col md={6}>
              <Form.Group controlId="formName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group controlId="formPhone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="tel" placeholder="Enter phone number" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formDOB">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control type="date" />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group controlId="formAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="Enter your address" />
          </Form.Group>
          <Form.Group controlId="formMessage">
            <Form.Label>Why do you want to join Danama School?</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Tell us about yourself" />
          </Form.Group>
          <Button className="button-neon" type="submit">
            Submit Application
          </Button>
        </Form>
      </section>

      {/* FAQs Section */}
      <section className="faqs">
        <h2>Frequently Asked Questions</h2>
        <Card className="faq-card">
          <Card.Body>
            <Card.Title>What is the application deadline?</Card.Title>
            <Card.Text>
              Applications are open year-round, but early submissions are encouraged to secure your spot.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="faq-card">
          <Card.Body>
            <Card.Title>Is financial aid available?</Card.Title>
            <Card.Text>
              Yes, we offer scholarships and financial aid to deserving students.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="faq-card">
          <Card.Body>
            <Card.Title>How do I schedule a campus visit?</Card.Title>
            <Card.Text>
              Contact our admissions office to book a guided tour of our campus.
            </Card.Text>
          </Card.Body>
        </Card>
      </section>

      {/* Call-to-Action */}
      <section className="admissions-cta">
        <h2>Join Us Today!</h2>
        <p>
          Take the first step toward an enriching educational journey at Danama School. We look forward to welcoming you!
        </p>
        <Button className="button" href="/contact">
          Contact Admissions Office
        </Button>
      </section>
    </Container>
  );
};

export default Admissions;