const numbers = [25, 3, 100, 7];
// Sort numbers without compare function
numbers.sort();
console.log(numbers); // Output: [100, 25, 3, 7] ❌ (Incorrect order)

// Compare numbers with compare function
sortedNumbers = numbers.sort((a, b) => a - b);
console.log(numbers); // Output: [3, 7, 25, 100] (Original array is modified)
console.log(sortedNumbers);

// Fix the mutation using toSorted
secondSortedNumbers = numbers.toSorted((a, b) => a - b);
console.log(numbers); // Output: [25, 3, 100, 7] (Original array is not modified)
console.log(secondSortedNumbers); // Output: [3, 7, 25, 100] (Correct order)


