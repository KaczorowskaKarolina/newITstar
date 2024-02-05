// Modal.js
import React from 'react';
import './ModalAboutme.scss';

const Modal = ({ onClose, content }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Najważniejsze Informacje</h2>
          <button onClick={onClose}>Back</button>
        </div>
        <div className="modal-body">
          <img src="./img/me.jpg" alt="Zdjęcie" />
          <div>
            <p>{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
