import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Condition from './Condition';
import Menu from './Menu';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Router >
        <div>
          <Link to="/">Home</Link>
          <Link to="/Menu">Menu</Link>
          <Link to="/Condition">Condition</Link>
        </div>
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
