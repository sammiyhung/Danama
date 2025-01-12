import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../styles/Pages.css';

const Events = () => {
  return (
    <Container className="events-container">
      <h1>Upcoming Events</h1>
      <Row>
        <Col md={6}>
          <div className="event-card">
            <h4>Annual Science Exhibition</h4>
            <p>Join us for the biggest science exhibition of the year! Date: May 15, 2025.</p>
            <Button variant="primary">Learn More</Button>
          </div>
        </Col>
        <Col md={6}>
          <div className="event-card">
            <h4>Parent-Teacher Conference</h4>
            <p>Meet your child's teachers and discuss their progress. Date: April 10, 2025.</p>
            <Button variant="primary">Learn More</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Events;