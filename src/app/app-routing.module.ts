import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";

import { CardsComponent } from "./cards/cards.component";

const routes: Routes = [
    { path: "", redirectTo: "/cards", pathMatch: "full" },
    { path: "cards", component: CardsComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
