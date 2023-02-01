import { useContext, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalContext, GlobalProvider } from './context/GlobalContext';
import AppRoutes from './routes/routes';

import { DesktopGrid } from './components/Grids';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
  }
`;

function App() {
  const { time } = useContext(GlobalContext);

  return (
    <BrowserRouter>
      <GlobalProvider>
        <GlobalStyles />
        <DesktopGrid>
          <Sidebar />
          <div>
            <Header />
            <AppRoutes />
          </div>
        </DesktopGrid>
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default App;
