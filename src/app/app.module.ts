import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule, NativeScriptRouterModule } from "@nativescript/angular";
import { HttpClientModule } from '@angular/common/http';
import { NativeScriptUIChartModule } from 'nativescript-ui-chart/angular';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { CardsComponent } from "./cards/cards.component";
import { CardDetailComponent } from "./cards/card-detail.component";
import { SearchBarComponent } from "./search_bar/searchbar.component";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        HttpClientModule,
        NativeScriptUIChartModule,
        NativeScriptRouterModule
    ],
    declarations: [
        AppComponent,
        CardsComponent,
        CardDetailComponent,
        SearchBarComponent
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
