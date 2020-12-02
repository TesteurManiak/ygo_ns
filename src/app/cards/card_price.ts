import { Serializable } from "../serializable/serializable";

export class CardPrice implements Serializable<CardPrice> {
    cardmarket_price: string;
    tcgplayer_price: string;
    ebay_price: string;
    amazon_price: string;
    coolstuffinc_price: string;

    deserialize(input): CardPrice {
        return this;
    }

}