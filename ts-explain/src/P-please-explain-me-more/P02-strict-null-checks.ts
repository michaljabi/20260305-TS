const myThing = document.querySelector('#hello')
// const myThing = document.querySelector<HTMLDivElement>('#hello')

// to zdziała jeśli "strictNullChecks": false -> w tsconfig.json
// myThing.innerHTML = 'HELLO';

// TS rozumie truthy / falsy
if(myThing) {

    myThing.innerHTML = 'HELLO';
}