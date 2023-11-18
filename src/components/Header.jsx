/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from 'react';
import './Header.css';

import navListData from '../data/navListData';
import NavListItem from './NavListItem';
import { Link } from 'react-router-dom';

function Header() {
    const [open, setOpen] = useState(false);
    const [navList, setNavList] = useState(navListData);

    const handleToggleMenu = () => {
        setOpen(!open);
    };

    const handleNavOnClick = (id) => {
        const newNavList = navList.map(nav => {
            nav.active = false;
            if (nav._id === id) nav.active = true;
            return nav;
        });
        setNavList(newNavList);
    };

    return (
        <header>
            <a href="/" className="logo">Vehicle</a>
            <div>
                <Link to="/library" className="like">
                    <i className="bi bi-heart-fill"></i>
                    <span className='likeNumbers'>0</span>
                </Link>
                <a href="#" className="menu" onClick={handleToggleMenu}>
                    {!open ? <i className="bi bi-list"></i> : <i className="bi bi-x-lg"></i>}
                </a>
            </div>
            <ul className={`nav ${open ? 'active' : null}`}>
                {navList.map(nav => (
                    <NavListItem nav={nav} key={nav._id} navOnClick={handleNavOnClick} />
                ))}
            </ul>
        </header>
    );
};

export default Header;
