const array = [1, 2, 3, 4];


// Using reduce to sum up the array with an initial value of 0
const sum = array.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);


// Using reduce to calculate the product of the array with an initial value of 1
const product = array.reduce(
  (accumulator, currentValue) => accumulator * currentValue,
  1
);


console.log(sum); // Output: 10