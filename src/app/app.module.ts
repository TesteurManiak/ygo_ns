import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule, NativeScriptRouterModule } from "@nativescript/angular";
import { HttpClientModule } from '@angular/common/http';
import { registerElement } from '@nativescript/angular';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { CardsComponent } from "./cards/cards.component";
import { CardDetailComponent } from "./cards/card-detail.component";
import { SearchBarComponent } from "./search_bar/searchbar.component";
import { CardService } from "./cards/card.service";

registerElement('LineChart', () => require('@nativescript-community/ui-chart/charts').LineChart);
registerElement('PieChart', () => require('@nativescript-community/ui-chart/charts').PieChart);

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        HttpClientModule,
        NativeScriptRouterModule
    ],
    declarations: [
        AppComponent,
        CardsComponent,
        CardDetailComponent,
        SearchBarComponent
    ],
    providers: [CardService],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
