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

class BuyNowItem {
    constructor(public name: string) {}
}

class AuctionItem {
    constructor(public name: string) {}
}

class Basket<ITEM> {

    private myItems: ITEM[] = [];

    addItem(item: ITEM) {
        this.myItems.push(item);
    }

    getAllItems(): ITEM[] {
        return this.myItems;
    }
}

const myBuyNowBasket = new Basket<BuyNowItem>();
const myAuctionBasket = new Basket<AuctionItem>();

myBuyNowBasket.addItem(new BuyNowItem('Telewizor'));
myBuyNowBasket.addItem(new BuyNowItem('Wersalka'));

myAuctionBasket.addItem(new AuctionItem('Karta kolekcjonerska'));

myBuyNowBasket.getAllItems().forEach((item: BuyNowItem) => {
    console.log(item.name);
})

myAuctionBasket.getAllItems().forEach((item: AuctionItem) => {
    console.log(item.name);
})

// Dodatkowe punkty jeśli ta operacja będzie niemożliwa w TS:
// myBuyNowBasket.getAllItems().push(new BuyNowItem('Troll'))




export {};
