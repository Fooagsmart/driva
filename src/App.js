import './App.css';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Condition from './Condition';
import Menu from './Menu';
import Home from './Home';
import Navbar from './Navbar';
import Profile from './Profile';
import { useState, createContext } from 'react';

export const AppContext = createContext();

function App() {
  const [username, setUsername] = useState("Developer Ayo");
  return (
    <div className="App">
      <AppContext.Provider value={{username, setUsername}}>
      <Router >
        <Navbar />
        <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Menu' element={<Menu />}></Route>
        <Route path='/Condition' element={<Condition />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='*' element={<h1>Page not Found</h1>}></Route>
        </Routes>
      </Router>
      </AppContext.Provider>
 
    </div>
  );
}

export default App;
