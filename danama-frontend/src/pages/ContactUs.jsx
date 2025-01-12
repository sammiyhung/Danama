import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../styles/Pages.css';

const ContactUs = () => {
  return (
    <Container className="contact-container">
      <h1>Contact Us</h1>
      <Row>
        <Col md={6}>
          <Form>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Your Name" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Your Email" />
            </Form.Group>

            <Form.Group controlId="formBasicMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Your Message" />
            </Form.Group>

            <Button variant="primary" type="submit">Send Message</Button>
          </Form>
        </Col>
        <Col md={6}>
          <h4>Our Address</h4>
          <p>1234 School St, City, Country</p>
          <p>Phone: +123 456 7890</p>
          <p>Email: contact@danama.edu</p>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;