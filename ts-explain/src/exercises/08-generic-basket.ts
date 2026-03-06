/**
 *
 * Zadanie 8:
 *
 * Przygotuj klasę Basket - która będzie obsługiwała 2 rodzaje obiektów:
 * AuctionItem
 * oraz
 * BuyNowItem
 *
 * realizując następującą logikę implementacji:
 */

// Odkomentuj w momencie rozpoczęcia pracy nad zadaniem:

abstract class BasketItem {
  constructor(public name: string) {}
}

class BuyNowItem extends BasketItem {}

class AuctionItem extends BasketItem {}

class Basket<ITEM extends BasketItem> {
  private myItems: ITEM[] = [];

  addItem(item: ITEM) {
    this.myItems.push(item);
  }

  getAllItems(): readonly ITEM[] {
    return this.myItems;
  }
}

const myBuyNowBasket = new Basket<BuyNowItem>();
const myAuctionBasket = new Basket<AuctionItem>();

// duck-typing.
const myFakeBasket = new Basket<{ name: string }>();

// const myStringBasket = new Basket<string>();

myBuyNowBasket.addItem(new BuyNowItem("Telewizor"));
myBuyNowBasket.addItem(new BuyNowItem("Wersalka"));

myAuctionBasket.addItem(new AuctionItem("Karta kolekcjonerska"));

myBuyNowBasket.getAllItems().forEach((item: BuyNowItem) => {
  console.log(item.name);
});

myAuctionBasket.getAllItems().forEach((item: AuctionItem) => {
  console.log(item.name);
});

// Dodatkowe punkty jeśli ta operacja będzie niemożliwa w TS:
// myBuyNowBasket.getAllItems().push(new BuyNowItem('Troll'))
// myBuyNowBasket.getAllItems().pop()

export {};

class Car {
  manufacturer = "xya";
}

class Truck {
  manufacturer = "Teslatruck..";
  wheels = 4;
}

// Wiosek:
const myCar: Car = new Truck();
// TS nie jest typowany Nominalnie tylko Strukturalnie,
// nie insteresuje mnie kim jesteś... tylko coś robisz - albo jaki masz kształt.
