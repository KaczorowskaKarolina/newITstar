// EducationModal.js
import React from 'react';
import './EducationModal.scss';

const EducationModal = ({ onClose, content }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Education</h2>
        </div>
        <div className="modal-body">
      <div className="text-container">
  <p>
2003-2009 |  Politechnika Wrocławska - Fizyka Techniczna
Inżynieria Biomedyczna
Aparatura Elektromedyczna
tytuł: Mgr inż.</p>
<p>
2003-2009 | kurs z języka programowania
              C++ - w trakcie studiów </p>
 <p>           
2003-2009 | kurs z projektowania
              systemów ERP - w trakcie studiów </p>
            <p>
              2022 | Certyfikat Introduction to Python</p>
            <p>
              2022 | Certyfikat Python Core</p>
            <p>
              2022 | Certyfikat Introduction to HTML</p>
            <p>
2023 | Certyfikat Introduction to CSS
            </p>
          </div>
      <button className="back-button" onClick={onClose}>
        BACK
      </button>
      </div>
    </div>
    </div>
  );
};

export default EducationModal;
