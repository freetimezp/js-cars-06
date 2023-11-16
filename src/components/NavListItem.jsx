/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import './NavListItem.css';

function NavListItem({ nav, navOnClick }) {
    return (
        <li>
            <Link to={nav.link} className={nav.active ? 'active' : null} onClick={() => navOnClick(nav._id)}>
                {nav.name === 'home' ? <i className='bi bi-house-door'></i> : nav.name}
            </Link>
        </li>
    );
};

export default NavListItem;
