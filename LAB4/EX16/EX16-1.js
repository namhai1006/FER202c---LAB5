import React, { useState } from "react";
const EventHandingDemo = () =>{
    const [count, setCount] = useState(0);
    const handleButoonClick = () =>{
        setCount(count + 1);
    };

    return(
        <div>
            <h1>Event Handing Demo</h1>
            <p>Count :{count}</p>
            <button onClick={handleButoonClick}>Increase Count</button>
        </div>
    );

}
export default EventHandingDemo;