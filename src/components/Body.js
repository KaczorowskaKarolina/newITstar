// Body.js
import React from 'react';
import Button from './Button.js'; // Komponent przycisku

const Body = () => {
  return (
    <section>
      <h2>Wybierz jedną z opcji:</h2>
      <div className="button-container">
        <Button label="About ME" onClick={() => handleButtonClick(1)} />
        <Button label="Education" onClick={() => handleButtonClick(2)} />
        <Button label="Soft Skills" onClick={() => handleButtonClick(3)} />
        <Button label="Tech Skills" onClick={() => handleButtonClick(4)} />
        <Button label="Experience" onClick={() => handleButtonClick(5)} />
        <Button label="Hobby" onClick={() => handleButtonClick(6)} />
        <Button label="Cetificate" onClick={() => handleButtonClick(7)} />
        <Button label="About this site" onClick={() => handleButtonClick(8)} />
        {/* Dodaj kolejne przyciski według potrzeb */}
      </div>
    </section>
  );
};

const handleButtonClick = (buttonNumber) => {
  // Obsługa kliknięcia przycisku
  console.log(`Kliknięto przycisk ${buttonNumber}`);
};

export default Body;
