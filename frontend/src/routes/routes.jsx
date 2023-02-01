import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage, NotFoundPage } from '../pages';
import CandidatesPage from '../pages/CandidatesPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path='*' element={<NotFoundPage />} />

      <Route path='/' element={<HomePage />} />

      <Route path='/candidates' element={<CandidatesPage />} />
      <Route path='/teams' element={<NotFoundPage />} />
      <Route path='/avengers' element={<NotFoundPage />} />
    </Routes>
  );
}
