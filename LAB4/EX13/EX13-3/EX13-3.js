import React, { useEffect, useState } from 'react';

const WindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    // Function to update windowSize with the current window size
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Add the event listener when the component mounts
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures the effect runs only on mount and unmount

  return (
    <div>
      <p>Window size: {windowSize.width} x {windowSize.height}</p>
    </div>
  );
};

export default WindowSize;
