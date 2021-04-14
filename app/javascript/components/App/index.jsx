import React from 'react';
import Routes from '../../routes';
import Navbar from '../Navbar';
import { Main } from './styles';

const App = () => (
  <>
    <Navbar />
    <Main>
      <Routes />
    </Main>
  </>
);

export default App;
