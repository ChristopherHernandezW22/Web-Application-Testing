import React, { useState } from 'react';
import './App.css';
import Display from './components/Display.js';
import Controls from'./components/Controls.js';

function App() {
  const [strikes, setStrikes] = useState(0);
  const [balls, setBalls] = useState(0);
  const scoreStrikes = () => {
    setStrikes(strikes+1)
  };
  const scoreBalls = () => {
    setBalls(balls+1)
  };
  const scoreFoul = () => {
    setStrikes(strikes+1)
  };
  const scoreHit = () => {
    setStrikes(0);
    setBalls(0);
  };
  return (
    <div className="App">
      <Display strikes={strikes} balls={balls} />
      <Controls strike={scoreStrikes}
                ball={scoreBalls}
                foul={scoreFoul}
                hit={scoreHit}
                />
    </div>
  );
}

export default App;
