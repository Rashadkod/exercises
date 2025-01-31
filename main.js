function squareArray(numbers) {
  return numbers.map(function(number) {
      return number * number;
  });
}

// Example usage:
let numbers = [1, 2, 3, 4, 5];
let squares = squareArray(numbers);
console.log("Squares:", squares);