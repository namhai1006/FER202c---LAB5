import React, { useEffect, useState } from 'react';

const CountdownTimer = ({ initialValue }) => {
  const [timeRemaining, setTimeRemaining] = useState(initialValue);

  useEffect(() => {
    // Stop the timer if timeRemaining is less than or equal to 0
    if (timeRemaining <= 0) {
      return;
    }

    // Update the timer every second
    const timerId = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);

    // Cleanup function to clear the interval when the component unmounts or when timeRemaining changes
    return () => {
      clearInterval(timerId);
    };
  }, [timeRemaining]);

  return (
    <div>
      {timeRemaining > 0 ? (
        <p>Time Remaining: {timeRemaining}</p>
      ) : (
        <p>Time's up!</p>
      )}
    </div>
  );
};

export default CountdownTimer;
