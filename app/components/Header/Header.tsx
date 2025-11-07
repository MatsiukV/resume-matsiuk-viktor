'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import './styleHeader.css';

const Header: React.FC = () => {
  const [language, setLanguage] = useState('UA');
  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'UA' ? 'UK' : 'UA'));
  };

  return (
    <header className="header-container">
      <nav className="header-nav">
        <Link href="#">Про мене</Link>
        <Link href="#skills">Навички</Link>
        <Link href="#projects">Проекти</Link>
        <Link href="#contact">Контакти</Link>
      </nav>
      <div className="lang-switcher" onClick={toggleLanguage}>
        {language}
      </div>
    </header>
  );
};

export default Header;