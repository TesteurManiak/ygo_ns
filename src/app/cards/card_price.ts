import { Serializable } from "../serializable/serializable";

export class CardPrice implements Serializable<CardPrice> {
    cardmarket_price: string;
    tcgplayer_price: string;
    ebay_price: string;
    amazon_price: string;
    coolstuffinc_price: string;

    deserialize(input): CardPrice {
        this.cardmarket_price = input.cardmarket_price;
        this.tcgplayer_price = input.tcgplayer_price;
        this.ebay_price = input.ebay_price;
        this.amazon_price = input.amazon_price;
        this.coolstuffinc_price = input.coolstuffinc_price;

        return this;
    }

}