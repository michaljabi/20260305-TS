import { ServiceError } from "../shared/ServiceError.js";
import type { Car, NewCar, PatchCar } from "./Car.js";

const inMemoryCars: Car[] = [
    // Zadanie #2:
    // przygotuj i użyj interface Car, odpowiadający poniższym zapisom
    { id: 1, uid: "aB3cD4", brand: "Tesla", model: "Model S", year: 2022, fuelType: 'electric', color: "White" },
    { id: 2, uid: "eF5gH6", brand: "BMW", model: "i4", year: 2023, fuelType: 'electric' },
    { id: 3, uid: "iJ7kL8", brand: "Audi", model: "e-tron", year: 2021, fuelType: 'electric', color: "Silver" },
    { id: 4, uid: "mN9oP0", brand: "Mercedes-Benz", model: "EQS", year: 2022, fuelType: 'electric' },
    { id: 5, uid: "qR1sT2", brand: "Porsche", model: "Taycan", year: 2023, fuelType: 'electric', color: "Blue" },
    { id: 6, uid: "uV3wX4", brand: "Lucid", model: "Air", year: 2022, fuelType: 'electric' },
    { id: 7, uid: "yZ5aB6", brand: "Rivian", model: "R1T", year: 2023, fuelType: 'electric', color: "Green" },
    { id: 8, uid: "cD7eF8", brand: "Ford", model: "Mustang Mach-E", year: 2021, fuelType: 'electric' },
    { id: 9, uid: "gH9iJ0", brand: "Hyundai", model: "IONIQ 5", year: 2022, fuelType: 'electric', color: "Black" },
    { id: 10, uid: "kL1mN2", brand: "Kia", model: "EV6", year: 2023, fuelType: 'electric' },
];


export const carsService = {
    getAll(brand?: Car['brand']){
        if (brand) {
            return inMemoryCars.filter(car => car.brand.toLowerCase() === brand.toLowerCase());
        }
        return inMemoryCars;
    },
    getByUid(uid: Car['uid']){
        // Zadanie #3:
        // Dodaj tutaj obsługę błędów i specjalną klasę `ServiceError` w osobnym pliku
        // Jeśli poniższy find nie znajdzie elementu - rzuć błędem z obsługą statusu
        // odkomentuj w app.ts kod: app.onError i zaimplementuj poprawną obsługę błędu
        const car = inMemoryCars.find(car => car.uid === uid);
        if(!car) {
            throw new ServiceError(`Car ${uid} not found`, 404)
        }
        return car;
    },
    // Zadanie #2 (cd.) - zamień any na odpowiedni typ
    create(carData: NewCar) {
        const id = inMemoryCars.length > 0 ? Math.max(...inMemoryCars.map(c => c.id)) + 1 : 1;
        const uid = Math.random().toString(36).substring(2, 8);
        const newCar: Car = {
            ...carData,
            id,
            uid,
            // year: 0
        };
        inMemoryCars.push(newCar);
        return newCar;
    },
    // patchById(id: Car['id'], newData: PatchCar) {
    // https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html#handbook-content
    patchByUid(uid: Car['uid'], newData: PatchCar) {
        // szukamy Car by id....
        // udatujemy / patchujemy
        console.log(newData)
    },
    // https://www.typescriptlang.org/docs/handbook/utility-types.html#handbook-content
    updateYearAndColor(uid: Car['uid'], newData: Pick<Partial<NewCar>, 'year' | 'color'>) {
        console.log(newData.color)
        console.log(newData.year)
    }
}