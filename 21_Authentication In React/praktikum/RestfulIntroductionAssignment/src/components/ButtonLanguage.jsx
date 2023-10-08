import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../redux/slices/languageSlice';

function ButtonLanguage() {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language);
  const toggleLanguage = () => {
    language === 'id' ? dispatch(setLanguage('en')) : dispatch(setLanguage('id'));
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
