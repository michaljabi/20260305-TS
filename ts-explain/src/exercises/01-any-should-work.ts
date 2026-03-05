/**
 * Zadanie 1:
 *
 * Migrując zapisy z JavaScript na TypeScript typ :any okazał nam się bardzo pomocny, jednak teraz
 * - czas zapisać poniższe typy poprawnie - zgodnie z zastosowaniem tych zmiennych i funkcji.
 *
 * Popraw zapisy programisty - tak by były używane właściwe typy danych i abyśmy mieli poprawne podpowiadanie składni
 * nie ingeruj w detale implementacji (kod powinien działać tak samo)
 * */

export type StringOrNumber = string | number;



// function addTwoNumbers(a: number, b: number ): void {
export function addTwoNumbers(a: number, b: number ): number {
    // return undefined;
    return a + b;
}

const result = addTwoNumbers(10, 20);

console.log('Wynik to', result);

// Zahardkodowany typ zwracany przez info
type TypeOfReturn = "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function";
// Zapisany wnioskowany (dynamicznie) typ zwrazany przez info.
type DynamicTypeOfReturn = ReturnType<typeof info>;

// info will accept only a string or number!
function info(something: StringOrNumber) {
    console.log('Wartość', something, 'to', typeof something);
    return typeof something;
}


let myFigure: StringOrNumber = 1000;
info(myFigure);

myFigure = '100.8';
info(myFigure);

console.log(typeof myFigure === 'string')


export {};
