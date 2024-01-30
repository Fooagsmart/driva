import { useState } from 'react';
import './App.css';
import Condition from './Condition';

function App() {

  const [count , setCount] = useState(0)

  const increase = () => {
    setCount(count + 1);
  }

  const decrease = () => {
    setCount(count -1)
  }

  const reset = () => {
    setCount(0)
  }
  return (
    <div className="App">
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
      <button onClick={reset}>default</button>

      {count}
      < Condition />
    </div>
  );
}

export default App;
