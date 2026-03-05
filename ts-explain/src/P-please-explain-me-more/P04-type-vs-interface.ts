type User = { name: string; age: number };

// TYLKO OBIEKTOWY!
interface User2 {
  name: string;
  age: number;
}

const myUser: User = { age: 0, name: "" };

type Money = string | number;



interface Money2 {
  value: string | number;
}

const money: Money2 = { value: "20" };
const money2: Money2 = { value: 2 };

type MyFunction = (a: number, b: number) => number;

// Funkcja jest Obiektem w JS - co zonacza że musi istnieć zapis w TS interface który oznacza fuknkcję
interface MyFun {
  (a: number, b: number): number;
}

// TODO: wyjaśnij czemu nie było błędu tutaj bez parametrów
const myFunctionExpression: MyFun = (a: number, b: number) => 0;
const myFunctionExpression2: MyFunction = (a: number, b: number) => 0;
