import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Information from './components/Information';

function App() {

  const [result, setResult] = useState({});

  return (
    <div className="app">
      <Navbar setResult={setResult} />
      <Information result={result} />
    </div>
  );
}

export default App;
