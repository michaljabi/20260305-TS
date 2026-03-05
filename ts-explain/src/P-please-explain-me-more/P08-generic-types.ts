// GENERIC type:
export type TwoElementsArray<T> = [T, T];
const myTwoNumbers: TwoElementsArray<string> = ['s', ''];

// Generic type is on your side:
export type ThreeElementsArray<X = number, Z = string> = [X, Z, X];

const myPoint3d: ThreeElementsArray<number, string> = [1, '2', 55]
const myPoint3d2: ThreeElementsArray = [1, '2', 456]




function makePoint<N, P>(x: N, y: P, z: N) {

    return { x, y, z}
}

makePoint(1, '?', 9)


makePoint({}, () => 234, {})


// Naprostszy typ generyczny:

const arr = [];

const arr2 = [1,2,3];
const arr3 = ['a','b'];


const myArray: Array<number> = [];

myArray.push(3,4,5);

console.log(myArray);


const myArray2: number[] = [];

myArray2.push(2);
// myArray2.push('a');

console.log(myArray2);