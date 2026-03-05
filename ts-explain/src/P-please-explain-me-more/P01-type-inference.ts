let x = 10;

console.log(x);

let y;

y = 200;

console.log(y);

// union type:
// any będzie nieprecyzyjny - to zbyt "Dużo" typów które spełniają warunek...
// let price: any = 10;
// Poprawny kodzik
let price: string | number = 10;

price =  '100 zł'


// Teraz jest super bo poniższe zapisy będą błędne:
// price = true;
// price = {}; // new Object()
// price = []; // new Array()
