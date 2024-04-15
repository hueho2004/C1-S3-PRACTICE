let numbers = [1, 2, 3, 4, 5];

// Write the function to filter out even numbers from an array
// You need to use the array.filter() function
function filterEvenNumbers(arr) {
  return arr.filter(num => num % 2 === 0);
}

// Function to map array elements to their squared values
// You need to use the array.map() function
function squareNumbers(arr) {
  return arr.map(num => num ** 2);
}

// Function to compute the sum of array elements
// You need to use the array.reduce() function
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

console.log("Even numbers:", filterEvenNumbers(numbers)); 
console.log("Squared numbers:", squareNumbers(numbers)); 
console.log("Sum of numbers:", sumArray(numbers)); 