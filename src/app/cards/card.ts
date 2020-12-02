import { CardImage } from "./card_image";
import { CardSet } from "./card_set";
import { CardPrice } from "./card_price";
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
        for (let card_set of input.card_sets) {
            this.card_sets.push(new CardSet().deserialize(card_set));
        }

        this.card_prices = [];
        for (let price of input.card_prices) {
            this.card_prices.push(new CardPrice().deserialize(price));
        }

        return this;
    }
}