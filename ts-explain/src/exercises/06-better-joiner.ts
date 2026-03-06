/**
 * Zadanie 6:
 *
 * Cała implementacja tego kodu i jego działanie - są poprawne.
 * Jednak nie mam podpowiadania typów - znów poprzez zastosowanie :any
 *
 * Napisz odpowiednie typy:
 * - dla parametrów funkcji
 * - dla zwracanej funkcji i określ oddzielnie jej typ i nazwij
 *
 * */

type JoinerFn = (...strings: string[]) => string;

// interface IJoinerFn {
interface JoinFn {
    (...strings: string[]): string;
}

function joiner(joinString: string): JoinerFn  {
    return (...strings: string[]): string => {
        return strings.join(joinString);
    };
}

const hyphenJoiner = joiner('-');
const spaceJoiner = joiner(' ');
const snakeJoiner = joiner('_');

console.log(hyphenJoiner('this', 'is', 'sample'))
console.log(spaceJoiner('this', 'is', 'other', 'sample'))
console.log(snakeJoiner('how', 'does', 'snake', 'case', 'looks', 'like'))


console.log(hyphenJoiner(...['hello', 'world']))
console.log(spaceJoiner('hello', 'world'))

// Funkcja zwraca funkcję
console.log(joiner('@_@')('hello', 'world', 'of', 'wonders'))

export {};

