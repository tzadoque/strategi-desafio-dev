import { redirect, Route, Routes } from 'react-router-dom';
import AvengersPage from '../page/AvengersPage';
import CandidatePage from '../page/Candidate';
import CandidatesPage from '../page/CandidatesPage';
import ComponentsPage from '../page/ComponentsPage';
import { DesktopLayout } from '../page/DesktopLayout';

// pages
import HomePage from '../page/HomePage';
import NotFoundPage from '../page/NotFoundPage';
import TeamPage from '../page/Team';
import TeamsPage from '../page/TeamsPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='' element={<DesktopLayout />}>
        <Route exact path='*' element={<NotFoundPage />} />
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/candidates' element={<CandidatesPage />} />
        <Route exact path='/candidates/:id' element={<CandidatePage />} />
        <Route exact path='/teams' element={<TeamsPage />} />
        <Route exact path='/teams/:id' element={<TeamPage />} />
        <Route exact path='/avengers' element={<AvengersPage />} />
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
