import React from 'react';
import './PageTitle.css';

function PageTitle({ title, subtitle }) {
    return (
        <div className='page-title mt-5'>
            <h2>{title}</h2>
            <p>{subtitle}</p>
        </div>
    );
};

export default PageTitle;
