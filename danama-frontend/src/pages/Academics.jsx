import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaChalkboardTeacher, FaGraduationCap, FaBook, FaMicroscope, FaGlobe, FaPaintBrush } from 'react-icons/fa';
import '../styles/Academics.css';

const Academics = () => {
  return (
    <Container className="academics-container">
      {/* Hero Section */}
      <section className="academics-hero">
        <h1>Discover Excellence in Education</h1>
        <p>
          At Danama, we pride ourselves on offering a well-rounded curriculum designed to inspire curiosity, creativity, and critical thinking. Explore our diverse academic programs that prepare students for success in an ever-changing world.
        </p>
      </section>

      {/* Academic Programs */}
      <section className="academic-programs">
        <h2>Our Academic Programs</h2>
        <Row>
          <Col md={4}>
            <Card className="program-card">
              <FaBook className="program-icon" />
              <Card.Body>
                <Card.Title>Elementary Education</Card.Title>
                <Card.Text>
                  Building a strong foundation with engaging lessons in Math, Science, Language Arts, and Social Studies.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="program-card">
              <FaGraduationCap className="program-icon" />
              <Card.Body>
                <Card.Title>Secondary Education</Card.Title>
                <Card.Text>
                  Challenging students with advanced coursework in STEM, Arts, Humanities, and language development.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="program-card">
              <FaMicroscope className="program-icon" />
              <Card.Body>
                <Card.Title>Specialized Programs</Card.Title>
                <Card.Text>
                  Exciting options like programming, fine arts, vocational training, and language immersion programs.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>

      {/* Curriculum Highlights */}
      <section className="curriculum-highlights">
        <h2>Curriculum Highlights</h2>
        <Row>
          <Col md={6}>
            <ul>
              <li>
                <FaGlobe className="highlight-icon" /> Internationally-recognized teaching standards
              </li>
              <li>
                <FaPaintBrush className="highlight-icon" /> Extensive Arts and Music programs
              </li>
              <li>
                <FaMicroscope className="highlight-icon" /> Hands-on STEM labs and projects
              </li>
              <li>
                <FaBook className="highlight-icon" /> Language acquisition and cultural immersion
              </li>
            </ul>
          </Col>
          <Col md={6}>
            <img
              src="https://via.placeholder.com/500x300?text=Curriculum+Highlights"
              alt="Curriculum Highlights"
              className="img-fluid"
            />
          </Col>
        </Row>
      </section>

      {/* Extra-Curricular Activities */}
      <section className="extra-curricular">
        <h2>Extra-Curricular Activities</h2>
        <p>
          At Danama School, education extends beyond the classroom. We offer a variety of clubs, sports, and activities to foster creativity, teamwork, and leadership.
        </p>
        <Row>
          <Col md={4}>
            <Card className="activity-card">
              <Card.Body>
                <Card.Title>Sports Teams</Card.Title>
                <Card.Text>Soccer, basketball, track, and more to encourage fitness and teamwork.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="activity-card">
              <Card.Body>
                <Card.Title>Performing Arts</Card.Title>
                <Card.Text>Drama, choir, and dance programs to inspire creative expression.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="activity-card">
              <Card.Body>
                <Card.Title>Clubs and Societies</Card.Title>
                <Card.Text>Coding club, science fairs, debate team, and more to spark interests.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>

      {/* Call-to-Action */}
      <section className="academics-cta">
        <h2>Enroll Today!</h2>
        <p>
          Join Danama School and be part of a vibrant, supportive, and academically rigorous community. Let’s shape the future together.
        </p>
        <Button className="cta-button" href="/admissions">
          Apply Now
        </Button>
      </section>
    </Container>
  );
};

export default Academics;
