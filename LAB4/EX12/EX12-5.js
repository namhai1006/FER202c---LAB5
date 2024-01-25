import React, { useState } from "react";

function ColorSwitcher() {
    // State to hold the selected color
    const [selectedColor, setSelectedColor] = useState("");

    // Array of color options for the dropdown
    const colorOptions = ["red", "blue", "green", "yellow"];

    // Function to handle color selection
    const handleColorChange = (e) => {
        setSelectedColor(e.target.value);
    };

    return (
        <div>
             {selectedColor && (
                    <p style={{ color: "white" }}>Selected Color: {selectedColor}</p>
                )}
                  <label>Select a color: </label>
            <select value={selectedColor} onChange={handleColorChange}>
                <option value="">Select</option>
                {colorOptions.map((color, index) => (
                    <option key={index} value={color}>
                        {color}
                    </option>
                ))}
            </select>
            <h2>Color Switcher</h2>
            <div
                style={{
                    width: "200px",
                    height: "200px",
                    backgroundColor: selectedColor,
                    margin: "20px",
                }}
            >
                {/* Display the selected color */}
               
            </div>
            {/* Dropdown for color selection */}
          
        </div>
    );
}

export default ColorSwitcher;
