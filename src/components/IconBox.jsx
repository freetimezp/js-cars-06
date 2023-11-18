/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './IconBox.css';

function IconBox({ icon, title, description }) {
    return (
        <div className="icon-box">
            <div className="icon">
                <i className={icon}></i>
            </div>
            <h4 className="title">
                <a href="#">{title}</a>
            </h4>
            <p className="description">
                {description}
            </p>
        </div>
    );
};

export default IconBox;
