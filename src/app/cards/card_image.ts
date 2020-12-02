import { Serializable } from '../serializable/serializable';

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