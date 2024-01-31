// MainButton.js

import React from 'react';
import { useDispatch } from 'react-redux';
import { showButtons } from '../redux/actions.js';

function MainButton() {
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    dispatch(showButtons());
  };

  return (
    <div className="main-button">
      <button class="button" onClick={handleButtonClick}>RESUME</button>
    </div>
  );
}

export default MainButton;
