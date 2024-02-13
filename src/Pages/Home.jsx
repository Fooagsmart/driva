import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="navigation">
      <h1>Homepage</h1>
      <ul>
        <li>
          <Link to="/desktop1personalinformation">
            Desktop1PersonalInformation
          </Link>
        </li>
        <li>
          <Link to="/desktop2vehicleinformation">
            Desktop2VehicleInformation
          </Link>
        </li>
        <li>
          <Link to="/desktop3guarantorinformation">
            Desktop3GuarantorInformation
          </Link>
        </li>
        <li>
          <Link to="/desktop4documentupload">Desktop4DocumentUpload</Link>
        </li>
        <li>
          <Link to="/desktop5confirmation">Desktop5Confirmation</Link>
        </li>
        <li>
          <Link to="/desktop5loading">Desktop5Loading</Link>
        </li>
        <li>
          <Link to="/desktop5success">Desktop5Success</Link>
        </li>
        <li>
          <Link to="/desktop1changepassword">Desktop1ChangePassword</Link>
        </li>
        <li>
          <Link to="/dashboardhomeone">DashboardHomeOne</Link>
        </li>
        <li>
          <Link to="/dashboardpayments">DashboardPayments</Link>
        </li>
        <li>
          <Link to="/dashboardpaymentsone">DashboardPaymentsOne</Link>
        </li>
        <li>
          <Link to="/dashboardpaymentsone1">DashboardPaymentsOne1</Link>
        </li>
        <li>
          <Link to="/dashboardprofileone">DashboardProfileOne</Link>
        </li>
        <li>
          <Link to="/dashboardprofile">DashboardProfile</Link>
        </li>
        <li>
          <Link to="/dashboardhomethree">DashboardHomeThree</Link>
        </li>
        <li>
          <Link to="/dashboardhomefour">DashboardHomeFour</Link>
        </li>
        <li>
          <Link to="/dashboardhometwo">DashboardHomeTwo</Link>
        </li>
        <li>
          <Link to="/dashboardhome">DashboardHome</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
