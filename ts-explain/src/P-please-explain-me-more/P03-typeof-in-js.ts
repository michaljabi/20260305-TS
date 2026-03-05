console.log(typeof 12);
console.log(typeof "");
console.log(typeof true);
console.log(typeof 13n);



console.log(typeof {});
console.log(typeof []);
console.log(typeof new Date());
console.log(typeof new RegExp(''));


// Specjalny obiekt w JS:
console.log(typeof (() => {}));


// Jaki operator pozwala nam sprawdzić obiekty ?
// instanceof
// ALE..... musimy wiedzieć czego szukamy + dostaniemy `true` w CAŁYM łańcuchu dziedziczenia
console.log([] instanceof Array)
console.log([] instanceof Object)

console.log({} instanceof Array)

// Udownij że funkcja w JS to obiekt
console.log((() => {}) instanceof Function)
console.log((() => {}) instanceof Object)

// zwykły obiekt nie dziedziczy po Function
console.log({} instanceof Function)
console.log(new Object() instanceof Function)


// BUG w JS... niestety
console.log(typeof null);