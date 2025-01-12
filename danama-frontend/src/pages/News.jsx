import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import '../styles/Pages.css';

const News = () => {
  return (
    <Container className="news-container">
      <h1>School News</h1>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/1200x500/800000/ffffff?text=News+Article+1"
            alt="First news"
          />
          <Carousel.Caption>
            <h3>National Science Fair Results</h3>
            <p>Our team brought home the gold!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/1200x500/800000/ffffff?text=News+Article+2"
            alt="Second news"
          />
          <Carousel.Caption>
            <h3>Sports Day Highlights</h3>
            <p>Read about the thrilling events and winners.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default News;