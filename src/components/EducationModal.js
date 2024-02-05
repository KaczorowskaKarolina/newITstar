// EducationModal.js
import React from 'react';
import './EducationModal.scss';

const EducationModal = ({ onClose }) => {
  return (
    <div className="education-modal">
      <h2>Education</h2>
  <p>Politechnika Wrocłwska
2003-2009 | Fizyka Techniczna
Inżynieria Biomedyczna
Aparatura Elektromedyczna
tytuł: Mgr inż.
2022 | Praktyczny Python -Certyfikowany
kurs z języka programowania Python
- w trakcie
2003-2009 | kurs z języka programowania
C++ - w trakcie studiów
2003-2009 | kurs z projektowania
systemów ERP - w trakcie studiów
2022 | Certyfikat Introduction to Python
2022 | Certyfikat Python Core
2022 | Certyfikat Introduction to HTML
2023 | Certyfikat Introduction to CSS
</p>
      <button className="back-button" onClick={onClose}>
        BACK
      </button>
    </div>
  );
};

export default EducationModal;
