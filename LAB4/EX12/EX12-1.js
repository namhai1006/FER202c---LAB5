import React, { useState } from "react";

function Counter() {
    // State to hold the current count
    const [count, setCount] = useState(0);

    // Function to handle button click and increment count
    const handleIncrement = () => {
        setCount(count + 1);
    };

    return (
        <div>
             <button onClick={handleIncrement}>Increment</button>
            <p>Current Count: {count}</p>
           
        </div>
    );
}

export default Counter;
