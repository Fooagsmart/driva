import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';

const DashBoardHome = React.lazy(() => import("./Pages/DashBoardHome"));

const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/dashboardhome' element={<DashBoardHome/>} />
        </Routes>
      </Router>
    </React.Suspense>
  )
}

export default ProjectRoutes
