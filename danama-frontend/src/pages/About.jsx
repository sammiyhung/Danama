import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaSchool, FaBullseye, FaHandshake, FaAward, FaUsers, FaCheckCircle, FaGlobe, FaLightbulb } from 'react-icons/fa';
import '../styles/About.css';

const About = () => {

  return (
    <Container className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <h1>About Danama School</h1>
        <p>Determination is key to success</p>
      </section>

      {/* Mission, Vision, Values */}
      <Row className="mission-vision-values">
        <Col md={4} className="mission-box">
          <FaBullseye className="icon" />
          <h3>Our Mission</h3>
          <p>
            To nurture well-rounded individuals through innovative education, empowering them to shape a better future.
          </p>
        </Col>
        <Col md={4} className="vision-box">
          <FaAward className="icon" />
          <h3>Our Vision</h3>
          <p>
            To be a leading institution recognized for excellence in education, creativity, and inclusivity.
          </p>
        </Col>
        <Col md={4} className="values-box">
          <FaHandshake className="icon" />
          <h3>Our Core Values</h3>
          <ul className="custom-list">
            <li>
              <FaCheckCircle className="custom-list-icon" />
              Integrity
            </li>
            <li>
              <FaGlobe className="custom-list-icon" />
              Inclusivity
            </li>
            <li>
              <FaLightbulb className="custom-list-icon" />
              Innovation
            </li>
          </ul>
        </Col>
      </Row>

      {/* School History Section */}
      <Row className="history-section">
        <Col md={6} className="text-container">
          <h2>Our History</h2>
          <p>
            Established in 2012, Danama School has grown from a modest institution to one of the most esteemed educational centers. With a steadfast commitment to academic excellence, we have continually evolved to meet the challenges of the modern educational landscape.
          </p>
        </Col>
        <Col md={6}>
          <img
            src="https://cloud.appwrite.io/v1/storage/buckets/6781bd0e001b4881d908/files/6781c3fb00035d01ae47/view?project=6781bb7b00100ec5b3a0&project=6781bb7b00100ec5b3a0&mode=admin"
            alt="History of Danama School"
            className="img-fluid"
          />
        </Col>
      </Row>
      <section className="timeline">
        <h2>Our Journey</h2>
        <div className="timeline-items">
          <div className="timeline-item">
            <h3>2012</h3>
            <p>School founded with 10 students.</p>
          </div>
          <div className="timeline-item">
            <h3>2016</h3>
            <p>Moved to new site.</p>
          </div>
          <div className="timeline-item">
            <h3>2020</h3>
            <p>Recognized as a top educational institution.</p>
          </div>
          <div className="timeline-item">
            <h3>2022</h3>
            <p>First graduating alumni students.</p>
          </div>          
        </div>
      </section>
      
      <section className="gallery">
        <h2>Gallery</h2>
        <div className="gallery-container">
          <img src="https://cloud.appwrite.io/v1/storage/buckets/6781bd0e001b4881d908/files/67b6a695001a0a50ff5f/view?project=6781bb7b00100ec5b3a0&mode=admin" alt="Event 1" />
          <img src="https://cloud.appwrite.io/v1/storage/buckets/6781bd0e001b4881d908/files/67b6a6e300369b00debc/view?project=6781bb7b00100ec5b3a0&mode=admin" alt="Event 2" />
          <img src="https://cloud.appwrite.io/v1/storage/buckets/6781bd0e001b4881d908/files/67b6a6d0000ae2f8b619/view?project=6781bb7b00100ec5b3a0&mode=admin" alt="Event 3" />
          <img src="https://cloud.appwrite.io/v1/storage/buckets/6781bd0e001b4881d908/files/67b6a6bb003767809b8e/view?project=6781bb7b00100ec5b3a0&mode=admin" alt="Event 4" />
          <img src="https://cloud.appwrite.io/v1/storage/buckets/6781bd0e001b4881d908/files/67b6a6860021d134a74e/view?project=6781bb7b00100ec5b3a0&mode=admin" alt="Event 5" />
        </div>
      </section>
      
      <section className="virtual-tour">
        <h2>Virtual Tour</h2>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/samplevideo"
          title="Virtual Tour"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </section>
      
      <section className="faq">
        <h2>Frequently Asked Questions</h2>
        <details>
          <summary>What are the admission requirements?</summary>
          <p>Students must pass an entrance exam and interview.</p>
        </details>
        <details>
          <summary>Are scholarships available?</summary>
          <p>Yes, we offer merit-based and financial aid scholarships.</p>
        </details>
      </section>
      
      {/* Meet Our Team Section */}
      <section className="team-section">
        <h2>Meet Our Pioneers</h2>
        <Row>
          <Col md={4} className="team-member">
            <img
              src="https://cloud.appwrite.io/v1/storage/buckets/6781bd0e001b4881d908/files/67820242001a771a17a4/view?project=6781bb7b00100ec5b3a0&project=6781bb7b00100ec5b3a0&mode=admin"
              alt="Director"
              className="team-img"
            />
            <h3>Pastor Okechukwu Okpere</h3>
            <p>Director</p>
          </Col>
          <Col md={4} className="team-member">
            <img
              src="https://cloud.appwrite.io/v1/storage/buckets/6781bd0e001b4881d908/files/678203df001b2c031a1a/view?project=6781bb7b00100ec5b3a0&project=6781bb7b00100ec5b3a0&mode=admin"
              alt="Proprietress"
              className="team-img"
            />
            <h3>Mrs. Udoka Okpere</h3>
            <p>Proprietress</p>
          </Col>
          <Col md={4} className="team-member">
            <img
              src="https://cloud.appwrite.io/v1/storage/buckets/6781bd0e001b4881d908/files/6782010b003bbe43cc7c/view?project=6781bb7b00100ec5b3a0&project=6781bb7b00100ec5b3a0&mode=admin"
              alt="Deputy Director"
              className="team-img"
            />
            <h3>Mr. Daniel Okpere</h3>
            <p>Deputy Director</p>
          </Col>
        </Row>
      </section>

      {/* Call-to-Action */}
      <section className="about-cta">
        <h2>Join Our Community</h2>
        <p>Explore opportunities at Danama School and become part of a vibrant and innovative community.</p>
        <Button className="button-gradient" href="/admissions">Apply Now</Button>
      </section>
    </Container>
  );
};

export default About;