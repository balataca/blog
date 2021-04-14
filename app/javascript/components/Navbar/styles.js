import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 2rem;
  background-color: #673ab7;
  color: #fff;
`;

export const Logo = styled.div`
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.2em;
`;

export const Links = styled.div`
  display: flex;

  a {
    margin: 0 1em;
    color: #fff;
    text-decoration: none;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.2em;
  }
`;

export const Link = styled(NavLink)`
  &.active {
    border-bottom: .15em solid #fff;
  }
`;
