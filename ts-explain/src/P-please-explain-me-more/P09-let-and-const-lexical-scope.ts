var x = 10;

console.log(x);

{
    var y = 5;
    console.log(x);
}

// 😭... - wniosek var nie ma zasięgu LEKSYKALNEGo !
console.log(y);

for(var z = 1; z <= 20; z++) {

}

console.log(z);

// var dopiero ma właściwy zasięg w środku funkcji
function hello() {
    var skonczylyMiSieLIterki = 'z'
}

// console.log(skonczylyMiSieLIterki)


// Sprawdźmy let:

let r = 10


{
    let rx = 200;
    console.log(r);
}

for(let g = 1; g <= 20; g++) {

}

// To nie działa - i tak powinno być, potwierdza to zasięg leksykalny.
// console.log(g);

// console.log(rx);




