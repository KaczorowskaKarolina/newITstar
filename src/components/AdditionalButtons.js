// AdditionalButtons.js
import React, { useState, useEffect } from 'react';

import './AdditionalButtons.scss';

function AdditionalButtons({ onButtonClick }) {
  const buttons = [
    { id: 1, label: 'About ME' },
    { id: 2, label: 'Education' },
    { id: 3, label: 'Experience' },
    { id: 4, label: 'Projects' },
    { id: 5, label: 'RESUME' },
    { id: 6, label: 'Recommends' },
    { id: 7, label: 'Contact' },
    { id: 8, label: 'Passion' },
    { id: 9, label: 'CV.pdf' },
  ];

  const [backToMain, setBackToMain] = useState(false);

  useEffect(() => {
    if (backToMain) {
      onButtonClick();
      setBackToMain(false);
    }
  }, [backToMain, onButtonClick]);

  const handleButtonClick = (buttonId) => {
    if (buttonId === 5) {
      // Jeśli id to 5, ustaw stan backToMain na true
      setBackToMain(true);
    }
    // Dodatkowa logika obsługi innych przycisków
  };

  const renderButtons = () => {
  return buttons.map(button => (
    <div key={button.id} className={`additional-button-container position-${button.id}`}>
      {button.id === 5 ? (
        <div
          className={`additional-button additional-buttons-resume`}
          onClick={() => handleButtonClick(button.id)}
        >
          {button.label}
        </div>
      ) : (
        <button
          className={`additional-button additional-buttons-${button.label.toLowerCase()}`}
          onClick={() => handleButtonClick(button.id)}
        >
          {button.label}
        </button>
      )}
    </div>
  ));
};

  return (
    <div className="additional-buttons">
      <div className="additional-buttons-container">
        {renderButtons()}
      </div>
    </div>
  );
}

export default AdditionalButtons;