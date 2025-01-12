import React from 'react';
import { Navbar, Nav, Dropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaMoon, FaSun, FaGlobe } from 'react-icons/fa'; // Importing icons
import '../styles/Header.css';

const Header = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <Navbar expand="lg" className="navbar-custom sticky-top">
      <Navbar.Brand href="/">Danama</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={NavLink} to="/" activeClassName="active">Home</Nav.Link>
          <Nav.Link as={NavLink} to="/about" activeClassName="active">About</Nav.Link>
          <Nav.Link as={NavLink} to="/academics" activeClassName="active">Academics</Nav.Link>
          <Nav.Link as={NavLink} to="/admissions" activeClassName="active">Admissions</Nav.Link>
          <Nav.Link as={NavLink} to="/news" activeClassName="active">News</Nav.Link>
          <Nav.Link as={NavLink} to="/events" activeClassName="active">Events</Nav.Link>
          <Nav.Link as={NavLink} to="/contact-us" activeClassName="active">Contact Us</Nav.Link>

          {/* Dark Mode Toggle Icon */}
          <div
            className="toggle-icon"
            onClick={toggleDarkMode}
            title="Toggle Dark Mode"
          >
            {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </div>

          {/* Language Selector with Icon */}
          <Dropdown className="language-selector">
            <Dropdown.Toggle variant="link" id="language-selector">
              <FaGlobe size={20} />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">English</Dropdown.Item>
              <Dropdown.Item href="#/action-2">French</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Spanish</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
