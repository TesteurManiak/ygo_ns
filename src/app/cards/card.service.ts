import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from "rxjs";

import { Card } from "./card";

@Injectable({ providedIn: 'root' })
export class CardService {
    private _allCards = new BehaviorSubject<Array<Card>>(null);

    constructor(private http: HttpClient) { }

    get allCards(): Observable<Card[]> {
        return this._allCards.asObservable();
    }

    getCard(id: number): Observable<any> {
        return this.http.get("https://db.ygoprodeck.com/api/v7/cardinfo.php?id=" + id);
    }

    getAllCards(): Observable<any> {
        return this.http.get("https://db.ygoprodeck.com/api/v7/cardinfo.php");
    }
}