import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import Admin from './pages/Admin';
import Login from './pages/Login';
import Admissions from './pages/Admissions';
import Events from './pages/Events';
import EventDetails from './pages/EventDetails';
import ContactUs from './pages/ContactUs';
import "./i18n";
import './App.css';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedMode = localStorage.getItem('darkMode');
    return storedMode ? JSON.parse(storedMode) : false;
  });

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => {
      localStorage.setItem('darkMode', JSON.stringify(!prevMode));
      return !prevMode;
    });
  };

  return (
    <div className={isDarkMode ? 'dark-mode' : ''}>
      <Router>
        <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
        <Container fluid>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/:eventId" element={<EventDetails />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </div>
  );
};

const PreloaderComponent = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, [location]);

  return <Preloader loading={loading} />;
};

export default App;
