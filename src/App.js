import { useState } from 'react';
import './App.css';
import Condition from './Condition';
import Taskbar from './Taskbar';

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
      <button className='' onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
      <button onClick={reset}>default</button>

      {count}
      < Condition />
      <Taskbar />
    </div>
  );
}

export default App;
