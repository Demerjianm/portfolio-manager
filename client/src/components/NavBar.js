import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';

const links = [
  { name: 'Home', path: '/' },
  { name: 'Stocks', path: '/stocks'}
]

const NavBar = () => (
  <nav>
    { links.map( l => <NavLink key={l.name} exact activeClassName="active-link" to={l.path}>{l.name}</NavLink> ) }
  </nav>
)

export default NavBar;
