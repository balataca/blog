import React from 'react';

import {
  Nav,
  Logo,
  Links,
  Link,
} from './styles';

const Navbar = () => (
  <Nav>
    <Logo>
      Watches
    </Logo>
    <Links>
      <Link to="/">Articles</Link>
    </Links>
  </Nav>
);

export default Navbar;
