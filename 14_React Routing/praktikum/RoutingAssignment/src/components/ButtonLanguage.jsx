import React, { useState } from 'react';

function ButtonLanguage({language, setLanguage}) {

  const toggleLanguage = () => {
    language === 'ID' ? setLanguage('EN') : setLanguage('ID');
  };

  return (
    
    <div className="position-fixed bottom-0 start-0 m-4">
        <div className="input-group">
            <span className="input-group-text">
                Language
            </span>
            <button
                type="button"
                className='btn btn-outline-secondary bg-white'
                aria-label="Username"
                aria-describedby="basic-addon1"
                onClick={toggleLanguage}
            >
                {language}
            </button>
        </div>
    </div>
  );
}

export default ButtonLanguage;
