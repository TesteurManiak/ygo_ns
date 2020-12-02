import { Serializable } from "../serializable/serializable";

export class Card implements Serializable<Card> {
    id: number;
    name: string;
    type: string;
    desc: string;
    atk: number;
    def: number;
    level: number;
    race: string;
    attribute: string;
    card_sets: CardSet[];
    card_images: CardImage[];
    card_prices: CardPrice[];

    deserialize(input): Card {
        this.id = input.id;
        this.name = input.name;
        this.type = input.type;
        this.desc = input.desc;
        this.atk = input.atk;
        this.def = input.def;
        this.level = input.level;
        this.race = input.race;
        this.attribute = input.attribute;

        this.card_images = [];
        for (let img of input.card_images) {
            this.card_images.push(new CardImage().deserialize(img));
        }

        this.card_sets = [];
        if (input.card_sets != null) {
            for (let card_set of input.card_sets) {
                this.card_sets.push(new CardSet().deserialize(card_set));
            }
        }

        this.card_prices = [];
        for (let price of input.card_prices) {
            this.card_prices.push(new CardPrice().deserialize(price));
        }

        return this;
    }
}

export class CardImage implements Serializable<CardImage> {
    id: number;
    image_url: string;
    image_url_small: string;

    deserialize(input): CardImage {
        this.id = input.id;
        this.image_url = input.image_url;
        this.image_url_small = input.image_url_small;

        return this;
    }
}

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

export class CardSet implements Serializable<CardSet> {
    set_name: string;
    set_code: string;
    set_rarity: string;
    set_rarity_code: string;
    set_price: string;

    deserialize(input): CardSet {
        this.set_name = input.set_name;
        this.set_code = input.set_code;
        this.set_rarity = input.set_rarity;
        this.set_rarity_code = input.set_rarity_code;
        this.set_price = input.set_price;

        return this;
    }
}