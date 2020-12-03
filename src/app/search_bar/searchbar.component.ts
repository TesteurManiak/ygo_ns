import { Component } from "@angular/core";
import { TextField } from "@nativescript/core/ui/text-field";
// import { setTimeout } from "@nativescript/core/timer";

@Component({
    selector: "ns-searchbar",
    moduleId: module.id,
    templateUrl: "./searchbar.component.html"
})
export class SearchBarComponent {
    onReturnPress(args) {
        let textField = <TextField>args.object;

        console.log('onReturnPress: ' + textField.text);
     }

     onFocus(args) {
         console.log('onFocus: ' + args);
     }

     onBlur(args) {
         console.log('onBlur: ' + args);
     }
}