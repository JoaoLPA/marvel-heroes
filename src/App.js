import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStorage } from './utils/GlobalContext';
import Routes from './routes';
import './styles/global.scss';
const App = () => {
  return (
    <>
      <h1>Marvel Heroes</h1>
      <GlobalStorage>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </GlobalStorage>
    </>
  );
};

export default App;
