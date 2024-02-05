// AdditionalButtons.js
import React, { useState, useEffect } from 'react';
import Modal from './ModalAboutme.js';

import './AdditionalButtons.scss';

const AdditionalButtons = ({ onButtonClick }) => {
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
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (backToMain) {
      onButtonClick();
      setBackToMain(false);
    }
  }, [backToMain, onButtonClick]);

  const handleButtonClick = (buttonId) => {
    if (buttonId === 5) {
      setBackToMain(true);
    } else if (buttonId === 1) {
      setShowModal(true);
    }
    // Dodatkowa logika obsługi innych przycisków
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const renderButtons = () => {
    return buttons.map((button) => (
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
      {showModal && (
        <Modal onClose={closeModal}
        />
      )}
    </div>
  );
};

export default AdditionalButtons;
