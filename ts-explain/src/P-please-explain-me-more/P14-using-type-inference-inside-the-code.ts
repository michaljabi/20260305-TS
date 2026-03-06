const some3rdPartyData =  { id: 2, uid: "eF5gH6", brand: "BMW", model: "i4", year: 2023, fuelType: 'electric' };

// Hej TypeScript daj mi to co wywnioskowałeś, ok....
type MyCar = typeof some3rdPartyData;

function createMore3rdPartyData(input: Partial<MyCar>): MyCar {
    return {
        id: 0,
        uid: "",
        brand: "",
        model: "",
        year: 0,
        fuelType: ""
    } 
}


// Wyciągnij typ wywionskowany z tego co zwraca funkcja:
function giveNameAndLastName() {
    return {name: '', lastName: ''}
}


type NameAndLastName = ReturnType<typeof giveNameAndLastName>
const myNameAndLastName: NameAndLastName = { name: 'Michał', lastName: 'Nowak'};


// Nie o to mi chodzi, chce mieć typ: {name: string, lastName: string}
// type NameAndLastName = typeof giveNameAndLastName
//const myNameAndLastName: NameAndLastName = () => ({ name: '', lastName: ''})


function sum(a: number, b: number) {

}

type ParamsOfSum = Parameters<typeof sum>;
const myParams: ParamsOfSum = [20, 10];


async function giveNumber() {
    return 3231 // zamień na string np 'xyz' i zobacz finalny typ Numeric - co to jest?
    // return 'xyz'
}


type Numeric = Awaited<ReturnType<typeof giveNumber>>