// Modal.js
import React from 'react';
import modalME from '../img/me.jpg';
import './ModalAboutme.scss';

const Modal = ({ onClose, content }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Karolina Kaczorowska</h2>
          <h4>Fullstack Developer</h4>
        </div>
        <div className="modal-body">
          <img src={modalME} alt="Zdjęcie" />
          <div>
            <p>Hello,
I am an ambitious person aspiring to become a Fullstack Developer.
Privately, I am the mother of a wonderful 4-year-old daughter.
One day I decided that I wanted to show her the world and be able to spend as much time with her as possible. Sitting at work 14 hours a day, I wasn't able to do it. I decided to turn my life upside down and do everything to make my dream come true.
While studying at the Wrocław University of Science and Technology, I learned about C++. I really like creating new functional things and I focus on details. In every job I came across websites that I didn't really like, so I started improving them together with the IT departments. I've been told I have a knack for it and pay attention to things they wouldn't think of.
Following the inspiration, I signed up for a course at goIT Fullstack Developer.
I am currently waiting for the desired certificate. I spent many sleepless nights studying and coding. I sacrificed a lot to be able to complete this course and make it to the end.
 I am reliable, reliable and punctual
performing the tasks entrusted to me,
responsible and ambitious person.
I have the ability to learn quickly
I like challenges. I can do it effectively
work both independently and
in team. Easily establishes contacts.
I am characterized by diligence,
conscientiousness, organizational skills,
ability to work under stress.</p>
                  </div>
                  <button onClick={onClose}>Back</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
