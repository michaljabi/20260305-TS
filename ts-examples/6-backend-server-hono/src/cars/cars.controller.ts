// // @ts-nocheck

import { type Context, Hono } from "hono";
import { carsService } from "./cars.service.js";
import type { Car, NewCar } from "./Car.js";

export const carsController = new Hono()


carsController.get("", (c: Context) => {
    const brand = c.req.query("brand")
    return c.json(carsService.getAll(brand))
})

carsController.get("/:uid", (c: Context) => {
    // TO niżej TO NIE RZUTOWANIE!!! To tzw. asercja typu! (czyli powiedzienie "Trus Me TS, I know what I'm doing 😎")
    // https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions
    // const uid = c.req.param("uid") as string;
    // // @ts-ignore
    /*
   
    const car2 = carsService.getByUid(uid)
    const car3 = carsService.getByUid(uid)
    const car4 = carsService.getByUid(uid)
    const car5 = carsService.getByUid(uid)
    const car6 = carsService.getByUid(uid)
    const car7 = carsService.getByUid(uid)
    */
    // Faktycznie rzutowanie (ale tutaj nie jest to dobry pomysł bo z undefined zrobię "undefined"):
    // const uid = String(c.req.param("uid"));
    // DOBRE rozwiązanie:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing
    // czemu? - bo jak param uid będzie undefined to przypiszemy pusty string !
    const uid = c.req.param("uid") ?? '';
    // Zadanie #1:
    // napraw poniższy problem TS2345

    const car = carsService.getByUid(uid)

    if (!car) {
        return c.json({message: `Car ${uid} not found`}, 404)
    }

    return c.json(car)
})

carsController.post('', async (c: Context) => {
    // Zadanie #2 (c.d.) - popraw <any> na odpowiedni, spodziewany typ.
    const body = await c.req.json<NewCar>();
    const newCar = carsService.create(body);

    // carsService.updateYearAndColor('312d647', { color: 'red' })
    return c.json(newCar, 201);
})

