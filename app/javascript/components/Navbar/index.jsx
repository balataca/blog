import React from 'react';
import { Link } from 'react-router-dom';

import {
  Nav,
  Logo,
  Links,
} from './styles';

const Navbar = () => (
  <Nav>
    <Logo>
      Blog
    </Logo>
    <Links>
      <Link to="/">Articles</Link>
    </Links>
  </Nav>
);

export default Navbar;
