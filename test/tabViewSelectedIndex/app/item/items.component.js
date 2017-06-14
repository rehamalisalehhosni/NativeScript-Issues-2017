"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ItemsComponent = (function () {
    function ItemsComponent() {
        this.myTabItem = { title: "NativeScript", iconSource: "~/images/icon.png" };
        this.myTabItemSelected = { title: "Selected", iconSource: "~/images/logo.png" };
    }
    ItemsComponent.prototype.onIndexChange = function (args) {
        console.log(args.newIndex);
        console.log(args.oldIndex);
    };
    return ItemsComponent;
}());
ItemsComponent = __decorate([
    core_1.Component({
        selector: "ns-items",
        moduleId: module.id,
        templateUrl: "./items.component.html",
    }),
    __metadata("design:paramtypes", [])
], ItemsComponent);
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBVWxELElBQWEsY0FBYztJQUl2QjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUksRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFFLFVBQVUsRUFBRSxtQkFBbUIsRUFBRSxDQUFDO1FBQzdFLElBQUksQ0FBQyxpQkFBaUIsR0FBSSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLG1CQUFtQixFQUFFLENBQUM7SUFDckYsQ0FBQztJQUVELHNDQUFhLEdBQWIsVUFBYyxJQUFtQztRQUM3QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUUvQixDQUFDO0lBQ0wscUJBQUM7QUFBRCxDQUFDLEFBZEQsSUFjQztBQWRZLGNBQWM7SUFOMUIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsd0JBQXdCO0tBQ3hDLENBQUM7O0dBRVcsY0FBYyxDQWMxQjtBQWRZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSB9IGZyb20gXCJ1aS90YWItdmlld1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1pdGVtc1wiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9pdGVtcy5jb21wb25lbnQuaHRtbFwiLFxufSlcblxuZXhwb3J0IGNsYXNzIEl0ZW1zQ29tcG9uZW50IHtcbiAgICBwdWJsaWMgbXlUYWJJdGVtOiBhbnk7XG4gICAgcHVibGljIG15VGFiSXRlbVNlbGVjdGVkOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHsgXG4gICAgICAgIHRoaXMubXlUYWJJdGVtICA9IHsgdGl0bGU6IFwiTmF0aXZlU2NyaXB0XCIsIGljb25Tb3VyY2U6IFwifi9pbWFnZXMvaWNvbi5wbmdcIiB9O1xuICAgICAgICB0aGlzLm15VGFiSXRlbVNlbGVjdGVkICA9IHsgdGl0bGU6IFwiU2VsZWN0ZWRcIiwgaWNvblNvdXJjZTogXCJ+L2ltYWdlcy9sb2dvLnBuZ1wiIH07XG4gICAgfVxuXG4gICAgb25JbmRleENoYW5nZShhcmdzOiBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSkge1xuICAgICAgICBjb25zb2xlLmxvZyhhcmdzLm5ld0luZGV4KTtcbiAgICAgICAgY29uc29sZS5sb2coYXJncy5vbGRJbmRleCk7XG4gICAgICAgIFxuICAgIH1cbn0iXX0=