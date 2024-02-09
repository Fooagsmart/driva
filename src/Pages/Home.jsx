import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='navigation'>
      <h1>Homepage</h1>
      <p className='headline'>
        Quickly use the links below to navigate through all pages.
      </p>
      <ul>
        <li>
          <Link to="/dashboardhome">DashboardHome</Link>
          <Link to="/Desktop1PersonalInformation">Desktop1PersonalInformation</Link>
          <Link to="/D"
        </li>
      </ul>
    </div>
  )
}

export default Home
