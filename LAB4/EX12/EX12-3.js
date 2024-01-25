import React, { useState } from "react";

function ToggleTextVisibility() {
    // State to track the visibility of the text
    const [isVisible, setIsVisible] = useState(false);

    // Function to handle button click and toggle visibility
    const handleToggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div>
            <button onClick={handleToggleVisibility}>
                {isVisible ? "Hide" : "Show"} 
            </button>
            {isVisible && <p>Toglle me.</p>}
        </div>
    );
}

export default ToggleTextVisibility;
