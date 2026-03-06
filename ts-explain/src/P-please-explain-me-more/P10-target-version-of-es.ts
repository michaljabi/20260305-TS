// Jeśli zmienimy target biblioteki to wtedy pewne metody albo całe natywne typy mogą przestać działać

// spróbuj tsconfig.json:
// "target": "es5"
console.log(Array.from('abcdef'));
 

// spróbuj tsconfig.json:
// "target": "ES2019"
 600n.toLocaleString();


// Rozwiązanie, jeśli tsc nie może sobie poradzić:
// https://www.npmjs.com/package/core-js