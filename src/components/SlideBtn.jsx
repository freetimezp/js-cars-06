/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './SlideBtn.css';

function SlideBtn({ index, slideChange }) {
    return (
        <a href="#" className='slide-btn' onClick={() => slideChange(index)}>
            <i className="bi bi-play-fill"></i>
        </a>
    );
};

export default SlideBtn;
