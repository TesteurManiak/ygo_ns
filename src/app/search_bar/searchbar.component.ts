import { Component, Input, Output, EventEmitter } from "@angular/core";
import { TextField } from "@nativescript/core/ui/text-field";

@Component({
    selector: "ns-searchbar",
    moduleId: module.id,
    templateUrl: "./searchbar.component.html",
    styleUrls: ["./searchbar.component.css"],
})
export class SearchBarComponent {
    @Output() onFilterChanged: EventEmitter<string> = new EventEmitter();

    onReturnPress(args) {
        let textField = <TextField>args.object;

        console.log('onReturnPress: ' + textField.text);
        this.onFilterChanged.emit(textField.text);
    }

    onFocus(args) {
        console.log('onFocus: ' + args);
    }

    onBlur(args) {
        console.log('onBlur: ' + args);
    }
}