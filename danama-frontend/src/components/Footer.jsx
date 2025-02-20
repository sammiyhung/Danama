import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTiktok, FaInstagram, FaLinkedin } from 'react-icons/fa';
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
              <p>Phone: +234 810 136 4274</p>
              <p>Email: info@danama.com.ng</p>
              <p>Address: 95.1 Today FM drive off Intelligent Hotel, Okporo road, Rumuekini, Port Harcourt, Rivers State.</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="social-icons">
              <a href="https://www.facebook.com/danamainternationalschools10/" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={20} />
              </a>
              <a href="https://tiktok.com/danamaschool" target="_blank" rel="noopener noreferrer">
                <FaTiktok size={20} />
              </a>
              <a href="https://www.instagram.com/danamainternationalschool/" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={20} />
              </a>
              <a href="https://www.linkedin.com/company/danama-international-school/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={20} />
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
