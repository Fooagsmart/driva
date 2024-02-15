import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NotFound from "./Pages/NotFound";

const Desktop1ChangePassword = React.lazy(
  () => import("./Pages/Desktop1ChangePassword"),
);
const Desktop5Success = React.lazy(() => import("./Pages/Desktop5Success"));
const Desktop5Loading = React.lazy(() => import("./Pages/Desktop5Loading"));
const Desktop5Confirmation = React.lazy(
  () => import("./Pages/Desktop5Confirmation"),
);
const Desktop4DocumentUpload = React.lazy(
  () => import("./Pages/Desktop4DocumentUpload"),
);
const Desktop3GuarantorInformation = React.lazy(
  () => import("./Pages/Desktop3GuarantorInformation"),
);
const Desktop2VehicleInformation = React.lazy(
  () => import("./Pages/Desktop2VehicleInformation"),
);
const Desktop1PersonalInformation = React.lazy(
  () => import("./Pages/Desktop1PersonalInformation"),
);
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Desktop1PersonalInformation/>} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/desktop1personalinformation"
            element={<Desktop1PersonalInformation />}
          />
          <Route
            path="/desktop2vehicleinformation"
            element={<Desktop2VehicleInformation />}
          />
          <Route
            path="/desktop3guarantorinformation"
            element={<Desktop3GuarantorInformation />}
          />
          <Route
            path="/desktop4documentupload"
            element={<Desktop4DocumentUpload />}
          />
          <Route
            path="/desktop5confirmation"
            element={<Desktop5Confirmation />}
          />
          <Route path="/desktop5loading" element={<Desktop5Loading />} />
          <Route path="/desktop5success" element={<Desktop5Success />} />
          <Route
            path="/desktop1changepassword"
            element={<Desktop1ChangePassword />}
          />
         
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
