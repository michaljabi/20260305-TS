// alias typu (v1)
type Money = number;

// alias typu -> upgrade. (zmienuamy że jednak to będzie obiekt i wtedy widzimy gdzie musimy dokonać zmian...)
// type Money = { value: number, currency: 'USD' | 'PLN' | 'EUR' };


// type Account = { name: string, amount: Money };
interface Account {
    name: string, 
    amount: Money 
};

const account: Account = {
    name: 'Konto główne',
    amount: 200
}
const account2: Account = {
    name: 'Konto oszczędnościowe',
    amount: 3200
}

// Bez aliasu typu:
const account3: { name: string, amount: number } = {
    name: 'Konto zepsute walutowo',
    amount: 200
}