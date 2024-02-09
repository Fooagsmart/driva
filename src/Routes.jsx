import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';

const DashBoardHome = React.lazy(() => import("./Pages/DashBoardHome"));
const Desktop1PersonalInformation = React.lazy(
  () => import("./Pages/Desktop1PersonalInformation"),
);
const Desktop2VehicleInformation = React.lazy(
  () => import("pages/Desktop2VehicleInformation"),
);

const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/dashboardhome' element={<DashBoardHome/>} />
          <Route path='/Desktop1PersonalInformation' element={<Desktop1PersonalInformation />} />
          <Route path='/Desktop2VehicleInformation' element={<Desktop2VehicleInformation />} />
        </Routes>
      </Router>
    </React.Suspense>
  )
}

export default ProjectRoutes
