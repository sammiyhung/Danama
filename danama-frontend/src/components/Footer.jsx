import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col md={4}>
            <div className="quick-links">
              <h5>Quick Links</h5>
              <ul>
                <li><a href="/about">About Us</a></li>
                <li><a href="/academics">Academics</a></li>
                <li><a href="/admissions">Admissions</a></li>
                <li><a href="/contact">Contact Us</a></li>
              </ul>
            </div>
          </Col>
          <Col md={4}>
            <div className="contact-info">
              <h5>Contact Information</h5>
              <p>Phone: +1 123 456 7890</p>
              <p>Email: info@danama.com</p>
              <p>Address: 123 School Lane, City, Country</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="social-icons">
              <h5>Follow Us</h5>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={30} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={30} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={30} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={30} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="footer-bottom">
        <p>&copy; 2025 Danama School. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
