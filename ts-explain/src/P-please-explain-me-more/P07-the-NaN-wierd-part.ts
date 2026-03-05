console.log(NaN);
console.log(Number('1234'));
console.log(Number('12uifqgiguieqy34'));

console.log(typeof NaN);

// Zły kodzik (zawsze false)
// console.log(NaN === NaN);

// Dobry kodzik
console.log()

// Klasycznie możemy się spodziewać w typach prostych
console.log(0 === 0);
console.log('a' === 'a');
console.log(false === false);


// @ts-expect-error
console.log(isNaN())
// @ts-expect-error
console.log(isNaN(undefined))
console.log(isNaN(NaN))

// @ts-expect-error
console.log(Number.isNaN())
console.log(Number.isNaN(undefined))
console.log(Number.isNaN(NaN))