/**
 * Zadanie 5:
 *
 * Podobnie bez ingerencji w szczegóły implementacji,
 * przepraw zapisy z :any w odpowiednie typy - zgodne z założeniami programu.
 * ... tym razem mamy do czynienia z bardziej złożonymi typami
 *
 * po poprawieniu typów, zmień implementację, zastosuj funkcję `joiner`
 * - tam gdzie to możliwe (np - połączenie imie + nazwisko)
 * następnie:
 * - utwórz odpowiednie obiekty i przekaż do `giveFullName` tak aby potwierdzić poprawność działania kodu
 * */

import type { TwoStringElementsArray } from "./helper.types";

function joiner(strTuple: TwoStringElementsArray): string {
  return strTuple[0] + " " + strTuple[1];
}

// niewłaściwe wywolania
/*
joiner(['2','2', 2])
joiner(['2','2', '3'])
joiner(['2'])
joiner([])
joiner()
*/
// Właściwe wywołanie
joiner(["name", "lastName"]);

interface User { // może być type User = {...};
  name: string;
  lastName: string;
  sex: 'female' | 'male';
  vipStatus?: boolean;
}

function giveFullName(myUser: User): string {
  const fullName = myUser.name + " " + myUser.lastName;
  let prefix = ''; // tak (wnioskowanie 100%)
  let suffix: string = ''; // albo tak explicite :string;
  if (myUser.sex === "female") {
    prefix = "Pani";
  } else if (myUser.sex === "male") {
    prefix = "Pan";
  }
  if (myUser.vipStatus) {
    suffix = " - the VIP";
  }
  return prefix + " " + fullName + suffix;
}

export {};
