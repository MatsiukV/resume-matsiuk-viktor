'use client'; 

import React, { useState } from 'react'; 
import Link from 'next/link';
import './styleHeader.css';

const Header: React.FC = () => {
  const [language, setLanguage] = useState('UA');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'UA' ? 'UK' : 'UA'));
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header-container">
      <nav className={`header-nav ${isMenuOpen ? 'mobile-open' : ''}`}>
        <Link href="/" onClick={handleLinkClick}>Про мене</Link>
        <Link href="/skills" onClick={handleLinkClick}>Навички</Link>
        <Link href="/projects" onClick={handleLinkClick}>Проекти</Link>
        <Link href="/contact" onClick={handleLinkClick}>Контакти</Link>
        <div 
          className="lang-switcher lang-switcher-mobile" 
          onClick={toggleLanguage}>
          {language}
        </div>
      </nav>
      <div 
        className="lang-switcher lang-switcher-desktop" 
        onClick={toggleLanguage}>
        {language}
      </div>
      <div className="burger-menu" onClick={toggleMenu}>
        <div className={`burger-line ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`burger-line ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`burger-line ${isMenuOpen ? 'open' : ''}`}></div>
      </div>

    </header>
  );
};

export default Header;