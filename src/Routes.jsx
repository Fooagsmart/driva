import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
const DashboardHome = React.lazy(() => import("./Pages/DashBoardHome"));
const DashboardHomeTwo = React.lazy(() => import("./pages/DashboardHomeTwo"));
const DashboardHomeFour = React.lazy(() => import("./pages/DashboardHomeFour"));
const DashboardHomeThree = React.lazy(() => import("./pages/DashboardHomeThree"));
const DashboardProfile = React.lazy(() => import("./pages/DashboardProfile"));
const DashboardProfileOne = React.lazy(
  () => import("./pages/DashboardProfileOne"),
);
const DashboardPaymentsOne1 = React.lazy(
  () => import("./pages/DashboardPaymentsOne1"),
);
const DashboardPaymentsOne = React.lazy(
  () => import("./pages/DashboardPaymentsOne"),
);
const DashboardPayments = React.lazy(() => import("./pages/DashboardPayments"));
const DashboardHomeOne = React.lazy(() => import("./pages/DashboardHomeOne"));
const Desktop1ChangePassword = React.lazy(
  () => import("./pages/Desktop1ChangePassword"),
);
const Desktop5Success = React.lazy(() => import("./pages/Desktop5Success"));
const Desktop5Loading = React.lazy(() => import("./pages/Desktop5Loading"));
const Desktop5Confirmation = React.lazy(
  () => import("./pages/Desktop5Confirmation"),
);
const Desktop4DocumentUpload = React.lazy(
  () => import("./pages/Desktop4DocumentUpload"),
);
const Desktop3GuarantorInformation = React.lazy(
  () => import("./pages/Desktop3GuarantorInformation"),
);
const Desktop2VehicleInformation = React.lazy(
  () => import("./pages/Desktop2VehicleInformation"),
);
const Desktop1PersonalInformation = React.lazy(
  () => import("./Pages/Desktop1PersonalInformation"),
);
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
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
          <Route path="/dashboardhomeone" element={<DashboardHomeOne />} />
          <Route path="/dashboardpayments" element={<DashboardPayments />} />
          <Route
            path="/dashboardpaymentsone"
            element={<DashboardPaymentsOne />}
          />
          <Route
            path="/dashboardpaymentsone1"
            element={<DashboardPaymentsOne1 />}
          />
          <Route
            path="/dashboardprofileone"
            element={<DashboardProfileOne />}
          />
          <Route path="/dashboardprofile" element={<DashboardProfile />} />
          <Route path="/dashboardhomethree" element={<DashboardHomeThree />} />
          <Route path="/dashboardhomefour" element={<DashboardHomeFour />} />
          <Route path="/dashboardhometwo" element={<DashboardHomeTwo />} />
          <Route path="/dashboardhome" element={<DashboardHome />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
