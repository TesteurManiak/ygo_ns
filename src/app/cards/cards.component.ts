import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Card } from "./card";
import { CardImage } from "./card_image";

@Component({
    moduleId: module.id,
    selector: "ns-items",
    templateUrl: "./cards.component.html"
})
export class CardsComponent implements OnInit {
    public items: any;

    public constructor(private http: HttpClient) { }

    public ngOnInit(): void {
        this.getCards();
    }

    public getCards() {
        this.http.get("https://db.ygoprodeck.com/api/v7/cardinfo.php").pipe(map(result => (<any>result).data)).subscribe(result => {
            var generatedItems: Card[] = [];
            for (let card of result) {
                generatedItems.push(new Card().deserialize(card));
            }
            this.items = generatedItems;
        }, error => {
            console.error(error);
        });
    }
}