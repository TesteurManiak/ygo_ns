import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from "@angular/router";
import { map } from 'rxjs/operators';

import { Card } from "./card";

@Component({
    selector: "ns-card-details",
    templateUrl: "./card-detail.component.html",
    moduleId: module.id
})
export class CardDetailComponent implements OnInit {
    public card: Card;

    constructor(private route: ActivatedRoute, private http: HttpClient) { }

    ngOnInit(): void {
        const id = +this.route.snapshot.params.id;
        this.getCard(id);
    }

    getCard(id: number) {
        this.http.get("https://db.ygoprodeck.com/api/v7/cardinfo.php?id=" + id).pipe(map(result => (<any>result).data)).subscribe(result => {
            let cardList = Array(result);
            if (cardList.length > 0) {
                this.card = new Card().deserialize(result[0]);
            }
        }, error => {
            console.error(error);
        });
    }
}