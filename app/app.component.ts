import {Component, ElementRef, ViewChild} from "@angular/core";
import {SearchBar} from "ui/search-bar";
import app = require("application");

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent {

    @ViewChild("searchbar") searchbar: ElementRef;
    

    constructor(){}
    
    onSearchBarLoaded(){
        if (app.android) {
            this.searchbar.nativeElement.android.clearFocus();
        }
    }
}