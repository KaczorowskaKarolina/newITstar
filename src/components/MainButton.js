// MainButton.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleButtons } from '../redux/actions.js';
import AdditionalButtons from './AdditionalButtons.js';

import './MainButton.scss';

function MainButton() {
  const dispatch = useDispatch();

  const [resumeClicked, setResumeClicked] = useState(false);

  const handleButtonClick = () => {
    console.log('Button clicked');
    setResumeClicked(!resumeClicked);
    dispatch(toggleButtons());
  };

  console.log('Rendering MainButton');

  return (
    <div className="main-button">
      {resumeClicked ? (
        <AdditionalButtons onButtonClick={() => setResumeClicked(false)} />
      ) : (
        <button className="button" onClick={handleButtonClick}>
          RESUME
        </button>
      )}
    </div>
  );
}

export default MainButton;