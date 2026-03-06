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

    private sign = '';

    constructor(sign: string) {
        this.sign = sign;
        // this.sign = sign;
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

const myJoiner = new Joiner('-');

// myJoiner.sign = 'TROLL';
console.log(myJoiner.joinWords('this', 'is'));
myJoiner.changeSign(' ');
console.log(myJoiner.joinWords('what', 'is', 'it'));


console.log(myJoiner);
// console.log(myJoiner.showSign());


export {};
