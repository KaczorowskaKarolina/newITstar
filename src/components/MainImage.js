// MainImage.js

import React from 'react';
import mainImage from '../img/wallpaper.jpg';

import './MainImage.scss';

function MainImage() {
  return (
    <div className="main-image">
      <img src={mainImage} alt="wallpaper" />
    </div>
  );
}

export default MainImage;
