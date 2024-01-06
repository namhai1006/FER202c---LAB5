import React from "react";
import PeopleInfo from "./PeopleInfo"; // Make sure the path to your PeopleInfo component is correct


const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the People Info App</h1>
      </header>
      <main>
        <PeopleInfo />
      </main>
    </div>
  );
};


export default App;