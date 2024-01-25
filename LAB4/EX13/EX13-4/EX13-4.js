import React, { useEffect, useState } from 'react';

const ValidatedInput = ({ validationFunction, errorMessage }) => {
  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    // Perform validation whenever the input value changes
    setIsValid(validationFunction(value));
  }, [value, validationFunction]);

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={isValid ? '' : 'error'}
      />
      {!isValid && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default ValidatedInput;
