// Rest params: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
function addNumbers(...nums: (string | number)[]) {
  return nums.reduce(
    // (a: string | number, b: string | number) => Number(a) + Number(b),
    (a, b) => Number(a) + Number(b),
    0,
  );
}

console.log(addNumbers(1, 2, 3, 4));
console.log(addNumbers(1, 4));
console.log(addNumbers(1));
console.log(addNumbers());

// Numbers:
const args = [1, 2, 3, 4];
// Spread: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
console.log(addNumbers(...args));

// Common pitfall

// Bad:
type StringOrNumberArrayBad = string | number[];
const x: StringOrNumberArrayBad = "22";
const z: StringOrNumberArrayBad = [33, 22];

// Good:
// 1st syntax (sexy) syntactic sugar
type StringOrNumberArray = (string | number)[];
// 2nd syntax (obious)
type StringOrNumberArray2 = Array<string | number>; // generic type


// native types:

const myNumbers = [90,2,1,3]


const bookChapters = myNumbers.map((x) => `Chapter #${x}`);

console.log(bookChapters);