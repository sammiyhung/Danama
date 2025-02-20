import React, { useEffect, useState } from "react";
import { Navbar, Nav, Dropdown } from "react-bootstrap";
import { FaMoon, FaSun, FaGlobe } from "react-icons/fa";
import i18n from "i18next"; // Import i18n instance
import "../styles/Header.css";

const Header = ({ toggleDarkMode, isDarkMode }) => {
  const [activeTab, setActiveTab] = useState("/");

  useEffect(() => {
    setActiveTab(window.location.pathname);
  }, []);

  const changeLanguage = (lang) => {
    if (i18n && typeof i18n.changeLanguage === "function") {
      i18n.changeLanguage(lang);
    } else {
      console.error("i18n is not initialized properly.");
    }
  };

  return (
    <Navbar expand="lg" className="navbar-custom sticky-top">
      <Navbar.Brand href="/">Danama</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <a
            href="/"
            className={activeTab === "/" ? "nav-link active" : "nav-link"}
            onClick={() => setActiveTab("/")}
          >
            Home
          </a>
          <a
            href="/about"
            className={activeTab === "/about" ? "nav-link active" : "nav-link"}
            onClick={() => setActiveTab("/about")}
          >
            About
          </a>
          <a
            href="/academics"
            className={activeTab === "/academics" ? "nav-link active" : "nav-link"}
            onClick={() => setActiveTab("/academics")}
          >
            Academics
          </a>
          <a
            href="/admissions"
            className={activeTab === "/admissions" ? "nav-link active" : "nav-link"}
            onClick={() => setActiveTab("/admissions")}
          >
            Admissions
          </a>
          <a
            href="/login"
            className={activeTab === "/login" ? "nav-link active" : "nav-link"}
            onClick={() => setActiveTab("/login")}
          >
            Admin Portal
          </a>
          <a
            href="/events"
            className={activeTab === "/events" ? "nav-link active" : "nav-link"}
            onClick={() => setActiveTab("/events")}
          >
            Events
          </a>
          <a
            href="/contact-us"
            className={activeTab === "/contact-us" ? "nav-link active" : "nav-link"}
            onClick={() => setActiveTab("/contact-us")}
          >
            Contact Us
          </a>

          {/* Dark Mode Toggle */}
          <div
            className="toggle-icon"
            onClick={toggleDarkMode}
            title="Toggle Dark Mode"
          >
            {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </div>

          {/* Language Selector */}
          <Dropdown className="language-selector">
            <Dropdown.Toggle variant="link" id="language-selector">
              <FaGlobe size={20} />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => changeLanguage("en")}>
                <img
                  src="https://flagcdn.com/w40/us.png"
                  alt="English"
                  className="flag-icon"
                />
                English
              </Dropdown.Item>
              <Dropdown.Item onClick={() => changeLanguage("fr")}>
                <img
                  src="https://flagcdn.com/w40/fr.png"
                  alt="French"
                  className="flag-icon"
                />
                French
              </Dropdown.Item>
              <Dropdown.Item onClick={() => changeLanguage("es")}>
                <img
                  src="https://flagcdn.com/w40/es.png"
                  alt="Spanish"
                  className="flag-icon"
                />
                Spanish
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;