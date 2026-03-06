import type { Car } from "./Car.js";

type OtherCarBasedOnCar = Pick<Car, 'id' | 'uid' | 'year'> & {
    manufacturer: Car['brand'];
}

// testujemy:
const myOtherCar: OtherCarBasedOnCar = {
    id: 12,
    manufacturer: 'volvo',
    uid: '1dwqihuyq2',
    year: 203
}

interface ExtendedCar extends Car, OtherCarBasedOnCar {
    isTruck: boolean;
    noOfWheels: 4 | 6 | 8;
}


const myTruck: ExtendedCar = {
    isTruck: true,
    noOfWheels: 4,
    id: 0,
    uid: "",
    brand: "",
    model: "",
    year: 0,
    fuelType: "diesel",
    manufacturer: ""
}
