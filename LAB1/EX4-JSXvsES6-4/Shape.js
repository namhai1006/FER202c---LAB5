import React from "react";

// Base Shape component - now includes logic for calculating the area
const Shape = ({ color, children, calculateArea }) => {
  const area = calculateArea();

  const style = {
    color,
    margin: "10px",
    padding: "5px",
  };

  return (
    <div style={style}>
      {children}
      <p>Area: {area}</p>
    </div>
  );
};

// Rectangle component
const Rectangle = ({ color, length, width }) => {
  const calculateArea = () => length * width;

  return (
    <Shape color={color} calculateArea={calculateArea}>
      <p>Rectangle</p>
      <p>
        Length: {length}, Width: {width}
      </p>
    </Shape>
  );
};

// Triangle component
const Triangle = ({ color, base, height }) => {
  const calculateArea = () => (base * height) / 2;

  return (
    <Shape color={color} calculateArea={calculateArea}>
      <p>Triangle</p>
      <p>
        Base: {base}, Height: {height}
      </p>
    </Shape>
  );
};

// App component that uses Rectangle and Triangle
const App = () => {
  return (
    <div>
      <h1>Shapes</h1>
      <Rectangle color="blue" length={50} width={20} />
      <Triangle color="red" base={30} height={15} />
    </div>
  );
};

export default App;
