import './App.css';
import ListFilm from './ListFilm';
import Input from './Input';
import { useState } from 'react';

function App() {

  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <ListFilm count={count}/>
      <Input func={setCount}/>
    </div>
  );
}

export default App;
