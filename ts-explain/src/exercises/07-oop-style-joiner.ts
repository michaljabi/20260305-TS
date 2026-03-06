/**
 * Zadanie 7:
 *
 * Przygotuj klasę Joiner.
 * Powinna ona:
 *  - w momencie konstruowania przyjmować znak, którym będzie łączyć wyrazy.
 *  - posiadać metodę która po przyjęciu N wyrazów typu :string zwróci łańcuch wyrazów połączony znakiem użytym w konstruktorze
 *  - użyty znak - łącznik nie może być dostępny jako pole w instancji
 *  - posiadać metodę pozwalającą zmienić znak łącznika
 *
 * przykład użycia instancji:
     const joiner = new Joiner('-');

     console.log(joiner.joinWords('this', 'is')  === 'this-is');
     joiner.changeSign(' ');
     console.log(joiner.joinWords('what', 'is', 'it')  === 'what is it');
 * */

// tylko w klasie!
// let #test = 2;

class Joiner {

    // Faktycznie private pole - NAWET w runtime JS
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_elements
    // #sign = ''

    /*
    private sign = '';

    // lukier składniowy dostępny w TS.
   
    */

    // lukier składniowy dostępny w TS.
    // używanie modyfikatorów: private/protected/public - żeby mieć pole na instacji i odrazu przypisać je w konstruktorze (bez potrzeby pisania this.pole = pole!)
    // https://www.typescriptlang.org/docs/handbook/typescript-tooling-in-5-minutes.html#classes
    constructor(private sign: string, protected hello: number, isOk: boolean, public name = 'TEST') {
        if(isOk) {
            console.log('Alll ok!')
        }
    }

    changeSign(newSign: string) {
        this.sign = newSign;
    }

    joinWords(...words: string[]) {
        return words.join(this.sign);
    }

    // showSign() {
    //     return this.#sign;
    // }

}

const myJoiner = new Joiner('-', 237, true);

// myJoiner.sign = 'TROLL';
console.log(myJoiner.joinWords('this', 'is'));
myJoiner.changeSign(' ');
console.log(myJoiner.joinWords('what', 'is', 'it'));


console.log(myJoiner);
myJoiner.name
// console.log(myJoiner.showSign());


export {};
