// W JS:
const myCar = { name: 'Volvo' }

console.log(myCar.name);
// dynamiczny access do pola:
console.log(myCar['name']);


// W typescript w typach Indexed Access Types:
interface Car {
    id: number;
    uid: string;
}

const myId: Car['id'] = 231;

