import { Component, ElementRef, OnInit, AfterViewInit, OnDestroy, ViewChild } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from "@angular/router";
import { map } from 'rxjs/operators';
import { RouterExtensions } from "@nativescript/angular";
import { PieChart } from "@nativescript-community/ui-chart/charts/PieChart";
import { PieDataSet } from "@nativescript-community/ui-chart/data/PieDataSet";
import { PieData } from "@nativescript-community/ui-chart/data/PieData";
import { Subscription } from "rxjs";

import { Card } from "./card";
import { CardService } from "./card.service";
import { GridLayout } from "@nativescript/core";

@Component({
    selector: "ns-card-details",
    templateUrl: "./card-detail.component.html",
    styleUrls: ["./card-detail.component.css"],
    moduleId: module.id
})
export class CardDetailComponent implements OnInit, AfterViewInit, OnDestroy {
    card: Card;
    @ViewChild('foo') gridLayout: ElementRef;

    private currentCardSub: Subscription;

    constructor(
        private route: ActivatedRoute,
        private routerExtensions: RouterExtensions,
        private service: CardService,
        private http: HttpClient
    ) { }

    ngOnDestroy(): void {
        if (this.currentCardSub) {
            this.currentCardSub.unsubscribe();
        }
    }

    ngOnInit(): void {
        const id = +this.route.snapshot.params.id;
        this.getCard(id);
    }

    getCard(id: number) {
        this.currentCardSub = this.http.get("https://db.ygoprodeck.com/api/v7/cardinfo.php?id=" + id).pipe(map(result => (<any>result).data)).subscribe(result => {
            let cardList = Array(result);
            if (cardList.length > 0) {
                this.card = new Card().deserialize(result[0]);
            }
        }, error => {
            console.error(error);
        });
    }

    ngAfterViewInit() {
        let myGridLayout = <GridLayout>this.gridLayout.nativeElement;
        console.log(myGridLayout);
        let chart = new PieChart();
        chart.height = 400;
        chart.onLoaded = () => this.onChartLoaded({ object: chart });
        myGridLayout.addChild(chart);
    }

    onNavBtnTap() {
        this.routerExtensions.back();
    }

    onChartLoaded(args) {
        console.log(this.card.card_prices);
        const chart = args.object as PieChart;

        // enable touch gestures
        chart.setTouchEnabled(true);

        // Set colors
        chart.setHoleColor('transparent');

        var myData = [];
        for (let price of this.card.card_prices) {
            myData.push({
                color: "#e47911",
                value: +price.amazon_price
            });
            myData.push({
                color: "#012169",
                value: +price.cardmarket_price
            });
            myData.push({
                color: "#137796",
                value: +price.coolstuffinc_price
            });
            myData.push({
                color: "red",
                value: +price.ebay_price
            });
            myData.push({
                color: "yellow",
                value: +price.tcgplayer_price
            });
        }

        const sets = [];
        const set = new PieDataSet(myData, 'Prices', 'value');
        var colors = [];
        for (let data of myData) {
            colors.push(data.color);
        }
        // set.setColors(['orange', 'blue']);
        set.setColors(colors);

        sets.push(set);

        // Create a data object with the data sets
        const ld = new PieData(sets);

        // Set data
        chart.setData(ld);
    }
}