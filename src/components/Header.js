// Header.js
import React from 'react';
import '../styles/Header.scss'; // Zaimportuj plik ze stylami

const Header = () => {
  return (
    <header className="header-container">
      <div className="background-image">
        <h1>NEW IT STAR</h1>
        <h3>Karolina Kaczorowska</h3>
      </div>
    </header>
  );
};

export default Header;
