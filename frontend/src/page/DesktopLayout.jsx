import { Outlet } from 'react-router-dom';
import { DesktopGrid } from '../components/Grid';
import { Sidebar } from '../components/Sidebar';
import { Header } from '../components/Header';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const DesktopLayout = () => {
  const { modal, showModal, alert } = useContext(GlobalContext);

  return (
    <>
      {showModal && modal}
      <DesktopGrid>
        <Sidebar />
        <div>
          <Header />
          <Outlet />
        </div>
      </DesktopGrid>
    </>
  );
};

export { DesktopLayout };
