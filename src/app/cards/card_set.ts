import { Serializable } from "../serializable/serializable";

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