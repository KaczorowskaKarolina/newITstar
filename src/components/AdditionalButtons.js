// AdditionalButtons.js

import React from 'react';
import { useSelector } from 'react-redux';

function AdditionalButtons() {
  const showButtons = useSelector((state) => state.showButtons);
  const additionalButtons = [];

  if (showButtons) {
    for (let i = 1; i <= 8; i++) {
      additionalButtons.push(
        <button key={i} className="additional-button">
          Przycisk {i}
        </button>
      );
    }
  }

  return <div className="additional-buttons">{additionalButtons}</div>;
}

export default AdditionalButtons;
