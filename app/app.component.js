"use strict";
var core_1 = require("@angular/core");
var app = require("application");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.onSearchBarLoaded = function () {
        if (app.android) {
            this.searchbar.nativeElement.android.clearFocus();
        }
    };
    __decorate([
        core_1.ViewChild("searchbar"), 
        __metadata('design:type', core_1.ElementRef)
    ], AppComponent.prototype, "searchbar", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "app.component.html",
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map