import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import App from './App';
import { GlobalCss } from './theme/GlobalStyles';
import { mainTheme } from './theme/index';

import { BrowserRouter, Route, Link } from 'react-router-dom';

import { GlobalProvider } from './context/GlobalContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={mainTheme()}>
      <GlobalCss />
      <GlobalProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </GlobalProvider>
    </ThemeProvider>
  </React.StrictMode>
);
