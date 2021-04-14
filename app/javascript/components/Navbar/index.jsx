import React from 'react';
import { NavLink } from 'react-router-dom';

import {
  Nav,
  Logo,
  Links,
} from './styles';

const Navbar = () => (
  <Nav>
    <Logo>
      Watches
    </Logo>
    <Links>
      <NavLink to="/">Articles</NavLink>
      <NavLink to="/manage">Manage</NavLink>
    </Links>
  </Nav>
);

export default Navbar;
