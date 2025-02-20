import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap'
import { FaChalkboardTeacher, FaGraduationCap, FaBookOpen, FaUniversity, FaFootballBall, FaMusic } from "react-icons/fa";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="homepage">

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-text">
          <h1>Welcome to Danama High School</h1>
          <p>
            Empowering students to shape the future through holistic and innovative education.
          </p>
          <div className="hero-buttons">
            <Button className="btn-primary" href="/admissions">Apply Now</Button>
            <Button className="btn-secondary" href="/about">Learn More</Button>
          </div>
        </div>
        <div className="hero-image">
          <img
            src="https://cloud.appwrite.io/v1/storage/buckets/6781bd0e001b4881d908/files/67b6a6f2003af8e05afc/view?project=6781bb7b00100ec5b3a0&mode=admin"
            alt="Hero"
          />
        </div>
      </section>

      {/* Accreditation & Affiliations */}
      <section className="trusted-companies">
        <p>Accredited &amp; Recognized By</p>
        <div className="companies-logos">
          {/* Replace with your own accreditation/affiliation logos */}
          <img src="https://cloud.appwrite.io/v1/storage/buckets/6781bd0e001b4881d908/files/67b6bfd000224db8e847/view?project=6781bb7b00100ec5b3a0&mode=admin" alt="Ministry of Education" />
          <img src="https://cloud.appwrite.io/v1/storage/buckets/6781bd0e001b4881d908/files/67b6bceb003c5b69a59f/view?project=6781bb7b00100ec5b3a0&mode=admin" alt="Exam Board" />
        </div>
      </section>

      {/* Academic Programs */}
      <section className="courses-section">
        <h2>Our Academic Programs</h2>
        <p>Fostering academic excellence and creativity.</p>
        <div className="courses-grid">
          <div className="course-card">
            <FaBookOpen size={40} color="#cc0000" />
            <h3>Sciences</h3>
            <p>Physics, Chemistry, Biology &amp; more.</p>
          </div>
          <div className="course-card">
            <FaChalkboardTeacher size={40} color="#cc0000" />
            <h3>Arts &amp; Humanities</h3>
            <p>Literature, History, Fine Arts &amp; more.</p>
          </div>
          <div className="course-card">
            <FaUniversity size={40} color="#cc0000" />
            <h3>Business &amp; Commerce</h3>
            <p>Accounting, Economics, Commerce &amp; more.</p>
          </div>
          <div className="course-card">
            <FaGraduationCap size={40} color="#cc0000" />
            <h3>Technology</h3>
            <p>ICT, Robotics, Coding &amp; more.</p>
          </div>
        </div>
      </section>
      <div className="experience-image">
        <img
          src="https://cloud.appwrite.io/v1/storage/buckets/6781bd0e001b4881d908/files/67b6a6d80028febe2ac0/view?project=6781bb7b00100ec5b3a0&mode=admin"
          alt="Experience"
        />
      </div>
      {/* Experience & Benefits */}
      <section className="experience-section">
        <div className="experience-text">
          <h2>Over 13 Years of Excellence</h2>
          <h3>We Strive to Provide the Best Learning Environment</h3>
          <p>
            Our dedicated team of educators ensures every student receives 
            individualized attention and support, nurturing both academic 
            and personal growth.
          </p>
          <ul>
            <li>State-of-the-art facilities</li>
            <li>Certified &amp; experienced teachers</li>
            <li>Wide range of extracurricular activities</li>
          </ul>
          <Button className="btn-primary" href="/about">About Us</Button>
        </div>
        <div className="experience-image">
          <img
            src="https://cloud.appwrite.io/v1/storage/buckets/6781bd0e001b4881d908/files/67b6a6e300369b00debc/view?project=6781bb7b00100ec5b3a0&mode=admin"
            alt="Experience"
          />
        </div>
      </section>

      {/* Extracurricular & Clubs */}
      <section className="extra-course-section">
        <h2>Beyond the Classroom</h2>
        <p>
          From sports to music, we nurture talents and leadership skills, 
          preparing students for life beyond school.
        </p>
        <div className="subjects-grid">
          <div className="subject-box">
            <FaFootballBall size={30} color="#008cba" />
            <h4>Sports &amp; Athletics</h4>
            <p>Basketball, Football, Track &amp; more.</p>
          </div>
          <div className="subject-box">
            <FaMusic size={30} color="#008cba" />
            <h4>Music &amp; Performing Arts</h4>
            <p>Choir, Drama Club, Dance &amp; more.</p>
          </div>
          <div className="subject-box">
            <FaBookOpen size={30} color="#008cba" />
            <h4>Clubs &amp; Societies</h4>
            <p>STEM Club, Debate Society, Literary Club &amp; more.</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
