import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStorage } from './utils/GlobalContext';
import Routes from './routes';
import './styles/global.scss';

import Head from './components/Head';
const App = () => {
  return (
    <>
      <Head />
      <GlobalStorage>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </GlobalStorage>
      <footer>
        <p>2021 MARVEL && JOÃO L. P. ALVES</p>
      </footer>
    </>
  );
};

export default App;
