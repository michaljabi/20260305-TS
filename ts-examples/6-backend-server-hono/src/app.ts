import { Hono } from "hono";
import { requestId } from "hono/request-id";
import { logger } from "hono/logger";
import { carsController } from "./cars/cars.controller.js";
import { ServiceError } from "./shared/ServiceError.js";
// import type { HTTPResponseError } from "hono/types";

export const app = new Hono();

app.use(requestId());
app.use(logger());

app.get("/", (c) => {
  const id = c.get("requestId");
  console.log(`Request id: ${id}`);
  return c.text("Hello Hono!");
});

app.route("/cars", carsController);

// Odkomentuj i zaimplementuj dla zadania #3:
app.onError((err, c) => {
  console.error(`${err}`);
  // tutaj obsłuż błąd !
  if (err instanceof ServiceError) {
    console.error(err);
    return c.json(
      {
        message: err.message,
        status: err.status,
      },
      err.status,
    );
  }
//   } else if(err instanceof DBError) {
//     // ...
//   } else if(err instanceof FileSystemError) {
//     // ...
//   } else if(err instanceof ServiceError2 ) {

//   } else if(err instanceof ServiceError2 ) {
    
//   } 

  return c.text("Custom Error Message", 500);
});

// Inne przydatne rozwinięcie:
/*
app.notFound((c) => {
  return c.text('Custom 404 Message', 404)
})
*/
