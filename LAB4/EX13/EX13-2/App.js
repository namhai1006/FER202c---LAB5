import React from 'react';
import CountdownTimer from './EX13-2'; // Assuming CountdownTimer.js is in the same directory as App.js

const App = () => {
  return (
    <div>
      <h1>Countdown Timer App</h1>
      <CountdownTimer initialValue={10} />
    </div>
  );
};

export default App;
