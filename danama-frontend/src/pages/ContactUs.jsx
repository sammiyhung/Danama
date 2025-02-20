import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { FaFacebook, FaTiktok, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Client, Databases, ID } from "appwrite";
import "../styles/ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  // Initialize Appwrite Client
  const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1") // Replace with your Appwrite endpoint
    .setProject("6781bb7b00100ec5b3a0"); // Replace with your Appwrite project ID

  const databases = new Databases(client);

  // Handle Input Changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await databases.createDocument(
        "6799f629001083c7f54b", // Replace with your database ID
        "67a9eb8c0021751cccbf", // Replace with your collection ID
        ID.unique(),
        formData
      );

      setShowSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      setTimeout(() => {
        setShowSuccess(false);
        window.location.reload(); // Refresh the page
      }, 2000);
    } catch (error) {
      console.error("Error submitting form:", error);
    }

    setLoading(false);
  };

  return (
    <Container className="contact-container">
      <header className="contact-header">
        <h1 data-aos="fade-down">Get in Touch</h1>
        <p data-aos="fade-up">
          We’d love to hear from you! Whether you have a question, suggestion, or just want to say hi.
        </p>
      </header>

      {/* Success Notification */}
      {showSuccess && (
        <Alert variant="success" className="contact-success-overlay">
          🎉 Message Sent Successfully!
        </Alert>
      )}

      <Row className="contact-row">
        <Col md={6} className="contact-form-section" data-aos="fade-right">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter your phone number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Write your message here"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button className="submit-button" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </Form>
        </Col>

        <Col md={6} className="contact-details-section" data-aos="fade-left">
          <h4>Contact Details</h4>
          <p>95.1 Today FM off Intelligent Hotel, Okporo Road, Rumuekini, Port Harcourt, Rivers State.</p>
          <p>Phone: +234 810 136 4270</p>
          <p>Email: info@danama.com.ng</p>

          <div className="map-container">
            <iframe
              title="Danama International School Location"
              src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d127211.67501046754!2d6.863884141633119!3d4.878411379145893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x1069d15347d12d9f%3A0x4cf66780bb45a24b!2sKM16%20E%20-%20W%20Rd%2C%20Rumuosi%2C%20Port%20Harcourt%20500102%2C%20Rivers!3m2!1d4.8784164!2d6.9462861!5e0!3m2!1sen!2sng!4v1737627542535!5m2!1sen!2sng"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

          <div className="social-media">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="https://www.facebook.com/danamainternationalschools10/" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href="https://tiktok.com/danamaschool" target="_blank" rel="noopener noreferrer">
                <FaTiktok />
              </a>
              <a href="https://www.instagram.com/danamainternationalschool/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/company/danama-international-school/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;