import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleButtons } from '../redux/actions.js';
import AdditionalButtons from './AdditionalButtons.js';

import './MainButton.scss';

function MainButton() {
  const dispatch = useDispatch();
  const showButtons = useSelector(state => state.showButtons);

  const handleButtonClick = () => {
    console.log('Button clicked');
    dispatch(toggleButtons());
  };

  console.log('Rendering MainButton');

  return (
    <div className="main-button">
      <button className="button" onClick={handleButtonClick}>
        RESUME
      </button>
      {showButtons && <AdditionalButtons />}
    </div>
  );
}

export default MainButton;
