import { useState } from 'react';
import './Navigation.css';

const Navigation = ({ onPageChange }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleNavClick = (page) => {
    onPageChange(page);
    closeMobileMenu();
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <h2>TechFlow</h2>
        </div>
        
        {/* desktop navigation links */}
        <div className="nav-menu">
          <a href="#" className="nav-link" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>
            Home
          </a>
          <a href="#" className="nav-link" onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}>
            About
          </a>
          <a href="#" className="nav-link" onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}>
            Contact
          </a>
        </div>

        {/* mobile menu toggle button */}
        <div className="nav-toggle" onClick={toggleMobileMenu}>
          <span className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}></span>
        </div>
      </div>

      {/* mobile navigation menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
        <a href="#" className="mobile-nav-link" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>
          Home
        </a>
        <a href="#" className="mobile-nav-link" onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}>
          About
        </a>
        <a href="#" className="mobile-nav-link" onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}>
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navigation; 