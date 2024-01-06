const generateRandomNumber = () => {
    return new Promise((resolve, reject) => {
      const randomNumber = Math.floor(Math.random() * 10) + 1; // Generates a random number between 1 and 10
  
      if (randomNumber > 5) {
        resolve(randomNumber);
      } else {
        reject(new Error("Random number is less than or equal to 5."));
      }
    });
  };
  
  // Example of using the promise
  generateRandomNumber()
    .then(result => {
      console.log("Random number:", result);
    })
    .catch(error => {
      console.error(error.message);
    });
  