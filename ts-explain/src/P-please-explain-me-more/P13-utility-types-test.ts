type CatName = "miffy" | "boris" | "mordred";

interface CatInfo {
  age: number;
  breed: string;
}

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
  // mordred: {}
};

const cats2: Record<"miffy2" | "other3", CatInfo> = {
  miffy2: { age: 10, breed: "Persian" },
  other3: { age: 5, breed: "Maine Coon" },
};

const myDynamicObject = {
  name: "Hello",
};
// To jest niemożliwe bo wnioskowany typ to: `{ name: string; }`
// // @ts-expect-error
myDynamicObject.age = 20;

console.log(myDynamicObject);

// Record<> daje nam elastyczność rodem z JS.
const myObjectWithAnyFields: Record<string, string | number> = {};

myObjectWithAnyFields.name = "Michał";
myObjectWithAnyFields.lastName = "Kowalsky";
myObjectWithAnyFields.lastName2 = "Kowalsky";
myObjectWithAnyFields.lastName3 = "Kowalsky";
myObjectWithAnyFields.lastName4 = "Kowalsky";

myObjectWithAnyFields.age = 12;

let myDynamicObjectWithoutUtilityType: { [p: string]: string };

myDynamicObjectWithoutUtilityType = { random: "thing" };
myDynamicObjectWithoutUtilityType.hello = "?";
myDynamicObjectWithoutUtilityType.hello = "?";

// Bussines case:
// W JS istnieją takie konstrukcje jak tzw. ArrayLike objecty, są to objecty które jako `properties` mają indexy (0, 1,2, 3, 4) i posiadają pole length;

type ArrayLike = {
  [p: number]: string;
  length: number;
};

const myObj: ArrayLike = {
  0: "test",
  1: "my",
  2: "object",
  // To jest błąd bo property tutaj to nie :number
  // 'd': 'wdwq',
  // To jest błąd bo value to nie string:
  // 3: 401230,
  length: 3,
};

console.log(Array.from(myObj));

// Praktyczne użycie record:
type Element = { id: number; name: string };

const elements: Element[] = [
  { id: 1, name: "coś" },
  { id: 2, name: "coś2" },
  { id: 3, name: "coś3" },
  { id: 4, name: "coś4" },
  { id: 5, name: "coś5" },
];

console.log(elements.find((e) => e.id === 2));

const myRecord = {
  1: { id: 1, name: "coś" },
  2: { id: 2, name: "coś" },
};
console.log(myRecord[2]);

const myRecordTypes: Record<number, Element> = {
  1: { id: 1, name: "coś" },
  2: { id: 2, name: "coś" },
};
console.log(myRecordTypes[2]);

// Takie coś można wykorzystać do "strategii" (jako wzorzec programowania);
// próbuj: programowanie funkcyjne + stategia.
type PossibleActions = "fight" | "run" | "duck";

const chooseAction: Record<PossibleActions, Function> = {
  fight: (value: number) => "punch!",
  run: (value: number) => {},
  duck: (value: "down" | "hide") => {},
  // run: 'ewooej'
};

let action: PossibleActions = "fight";

console.log(chooseAction[action](20));
