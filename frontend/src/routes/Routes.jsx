import { redirect, Route, Routes } from 'react-router-dom';
import ComponentsPage from '../page/ComponentsPage';
import { DesktopLayout } from '../page/DesktopLayout';

// pages
import HomePage from '../page/HomePage';
import NotFoundPage from '../page/NotFoundPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='' element={<DesktopLayout />}>
        <Route exact path='*' element={<NotFoundPage />} />
        <Route exact path='/' element={<HomePage />} />
      </Route>

      <Route path='/components'>
        <Route exact path='' element={<ComponentsPage />} />
        <Route exact path='home' element={<ComponentsPage />} />
        <Route exact path='test' element={<ComponentsPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
