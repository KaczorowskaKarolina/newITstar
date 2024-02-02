import React from 'react';
// import { useSelector } from 'react-redux';

import './AdditionalButtons.scss';

function AdditionalButtons() {
  return (
    <div className="additional-buttons visible">
      <div className="additional-buttons-container">
        {Array.from({ length: 9 }, (_, index) => (
          <div key={index + 1} className={`additional-button-container position-${index + 1}`}>
            <button className="additional-button">
              Przycisk {index + 1}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdditionalButtons;
