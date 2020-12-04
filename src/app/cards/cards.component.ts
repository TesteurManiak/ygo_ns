import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Card } from "./card";

@Component({
    moduleId: module.id,
    selector: "ns-cards",
    templateUrl: "./cards.component.html"
})
export class CardsComponent implements OnInit {
    public items: Card[];
    private fullList: Card[];

    constructor(private http: HttpClient) { }

    ngOnInit(): void {
        this.getCards();
    }

    getCards() {
        this.http.get("https://db.ygoprodeck.com/api/v7/cardinfo.php").pipe(map(result => (<any>result).data)).subscribe(result => {
            var generatedItems: Card[] = [];
            for (let card of result) {
                generatedItems.push(new Card().deserialize(card));
            }
            this.items = generatedItems;
            this.fullList = generatedItems;
        }, error => {
            console.error(error);
        });
    }

    filterChangedHandler(name: string) {
        console.log('Filter on: ' + name);
        var filteredList: Card[] = [];
        for (let card of this.fullList) {
            if (card.name.toLowerCase().includes(name.toLowerCase())) {
                filteredList.push(card);
            }
        }
        this.items = filteredList;
    }
}