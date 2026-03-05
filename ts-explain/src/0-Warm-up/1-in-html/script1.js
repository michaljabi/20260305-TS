// // @ts-check
// tylko w plikach .js
let LUCKY_NUMBER = 100;
console.log("#1. wartość LN", LUCKY_NUMBER, 0, 0, 0, 0, 0, 0, 2, 29);

LUCKY_NUMBER = "?";

console.log(20 + 10);

const MY_QUESTION_MARK = "?";

// MY_QUESTION_MARK = "";

function hello() {
  throw "Hello!" // niestety tak się da w JS
  throw new Error("Hello!") // dobry kod!
  // console.log("!");
}

try {
  hello()
  //codkod;
} catch (e) {

    // Zapis fajowy jak migrujesz JS -> TS
    // @ts-expect-error
    console.log(e.message);

    if(e instanceof TypeError) {
        console.log('[T] error:', e.message);
    } else if(e instanceof Error) {
        console.log(e.message);
    } else {
        console.log(e)
    }
}

console.log("!");
