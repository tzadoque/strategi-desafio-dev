import { Outlet } from 'react-router-dom';
import { DesktopGrid } from '../components/Grids';
import { Sidebar } from '../components/Sidebar';
import { Header } from '../components/Header';

const DesktopLayout = () => {
  return (
    <DesktopGrid>
      <Sidebar />
      <div>
        <Header title='Find candidates to form your teams' />
        <Outlet />
      </div>
    </DesktopGrid>
  );
};

export { DesktopLayout };
