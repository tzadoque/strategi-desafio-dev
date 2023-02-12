import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import AppRoutes from './routes/Routes';

function App() {
  return (
    <>
      <AppRoutes />
      <Outlet />
    </>
  );
}

export default App;
