// App.js
import React from 'react';
import MainImage from '../src/components/MainImage.js';
import MainButton from '../src/components/MainButton.js';
import AdditionalButtons from '../src/components/AdditionalButtons.js';

import './App.scss';

function App() {
  return (
    <div className="app">
      <MainImage />
      <MainButton />
      <AdditionalButtons />
    </div>
  );
}

export default App;
