import React from 'react';
import { NavLink } from 'react-router-dom';

const activeStyle = {
    color: 'green',
}

const Nav = () => (
    <ul>
                <li>
                    <NavLink to="/" exact activeStyle={activeStyle}>Home</NavLink>
                </li>

                <li>
                    <NavLink to="/about" activeStyle={activeStyle}>About</NavLink>
                </li>

                <li>
                    <NavLink to="/articles" activeStyle={activeStyle}>Articles</NavLink>
                </li>
            </ul>
);

export default Nav;