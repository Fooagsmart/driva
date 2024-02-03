import React from 'react'
import { useContext } from 'react'
import { AppContext } from './App'


const Home = () => {

    const { username } = useContext(AppContext);
  return (
    <div>
      this is the home page and user is:
      <h1>{username}</h1>
    </div>
  )
}

export default Home
