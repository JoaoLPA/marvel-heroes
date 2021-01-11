import React from 'react';
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
        <p>
          Data provided by Marvel. © 2014 Marvel && JOÃO L. P. ALVES
        </p>
      </footer>
    </>
  );
};

export default App;
