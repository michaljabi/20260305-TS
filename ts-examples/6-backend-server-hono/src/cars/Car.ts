export type NewCar = Omit<Car, 'id' | 'uid'>

export interface Car {
    id: number;
    uid: string;
    brand: string;
    model: string;
    year: number;
    fuelType: string;
    color?: string;
}

// https://www.typescriptlang.org/docs/handbook/utility-types.html#handbook-content
export type PatchCar = Partial<NewCar>;
