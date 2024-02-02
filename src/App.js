import './App.css';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Condition from './Condition';
import Menu from './Menu';
import Home from './Home';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Router >
        <Navbar />
        <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Menu' element={<Menu />}></Route>
        <Route path='/Condition' element={<Condition />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
