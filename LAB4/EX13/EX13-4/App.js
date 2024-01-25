import React from 'react';
import ValidatedInput from './EX13-4'; // Adjust the import path based on your directory structure

const App = () => {
  const validateInput = (value) => value.length >= 5; // Example validation function

  return (
    <div>
      <h1>Form Input Validation App</h1>
      <ValidatedInput
        validationFunction={validateInput}
        errorMessage="Input must be at least 5 characters long."
      />
    </div>
  );
};

export default App;
