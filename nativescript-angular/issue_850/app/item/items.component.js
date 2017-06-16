"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var item_service_1 = require("./item.service");
var label_1 = require("ui/label");
var tab_view_1 = require("ui/tab-view");
var ItemsComponent = (function () {
    function ItemsComponent(itemService) {
        this.itemService = itemService;
        this.isLoggedIn = false;
    }
    ItemsComponent.prototype.ngOnInit = function () {
        this.items = this.itemService.getItems();
    };
    ItemsComponent.prototype.onChange = function () {
        this.isLoggedIn = !this.isLoggedIn;
    };
    ItemsComponent.prototype.onTabLoaded = function (args) {
        var tabView = args.object;
        console.log("onTabLoaded " + tabView);
        var tabViewItem = new tab_view_1.TabViewItem();
        tabViewItem.title = "some";
        var lbl = new label_1.Label();
        lbl.text = "test";
        tabViewItem.view = lbl;
        tabView.items.push(tabViewItem);
    };
    return ItemsComponent;
}());
ItemsComponent = __decorate([
    core_1.Component({
        selector: "ns-items",
        moduleId: module.id,
        templateUrl: "./items.component.html",
    }),
    __metadata("design:paramtypes", [item_service_1.ItemService])
], ItemsComponent);
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBR2xELCtDQUE2QztBQUU3QyxrQ0FBaUM7QUFDakMsd0NBQW1EO0FBT25ELElBQWEsY0FBYztJQUl2Qix3QkFBb0IsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFGNUMsZUFBVSxHQUFZLEtBQUssQ0FBQztJQUVvQixDQUFDO0lBRWpELGlDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDN0MsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN2QyxDQUFDO0lBRUQsb0NBQVcsR0FBWCxVQUFZLElBQUk7UUFDWixJQUFJLE9BQU8sR0FBWSxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxHQUFHLE9BQU8sQ0FBQyxDQUFDO1FBRXRDLElBQUksV0FBVyxHQUFHLElBQUksc0JBQVcsRUFBRSxDQUFDO1FBQ3BDLFdBQVcsQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO1FBQzNCLElBQUksR0FBRyxHQUFHLElBQUksYUFBSyxFQUFFLENBQUM7UUFDdEIsR0FBRyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7UUFDbEIsV0FBVyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7UUFFdkIsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FBQyxBQTFCRCxJQTBCQztBQTFCWSxjQUFjO0lBTDFCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsVUFBVTtRQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtLQUN4QyxDQUFDO3FDQUttQywwQkFBVztHQUpuQyxjQUFjLENBMEIxQjtBQTFCWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgSXRlbSB9IGZyb20gXCIuL2l0ZW1cIjtcbmltcG9ydCB7IEl0ZW1TZXJ2aWNlIH0gZnJvbSBcIi4vaXRlbS5zZXJ2aWNlXCI7XG5cbmltcG9ydCB7IExhYmVsIH0gZnJvbSBcInVpL2xhYmVsXCI7XG5pbXBvcnQgeyBUYWJWaWV3LCBUYWJWaWV3SXRlbSB9IGZyb20gXCJ1aS90YWItdmlld1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1pdGVtc1wiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9pdGVtcy5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBJdGVtc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgaXRlbXM6IEl0ZW1bXTtcbiAgICBpc0xvZ2dlZEluOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGl0ZW1TZXJ2aWNlOiBJdGVtU2VydmljZSkgeyB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pdGVtcyA9IHRoaXMuaXRlbVNlcnZpY2UuZ2V0SXRlbXMoKTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZSgpIHtcbiAgICAgICAgdGhpcy5pc0xvZ2dlZEluID0gIXRoaXMuaXNMb2dnZWRJbjtcbiAgICB9XG5cbiAgICBvblRhYkxvYWRlZChhcmdzKSB7XG4gICAgICAgIGxldCB0YWJWaWV3ID0gPFRhYlZpZXc+YXJncy5vYmplY3Q7XG4gICAgICAgIGNvbnNvbGUubG9nKFwib25UYWJMb2FkZWQgXCIgKyB0YWJWaWV3KTtcblxuICAgICAgICB2YXIgdGFiVmlld0l0ZW0gPSBuZXcgVGFiVmlld0l0ZW0oKTtcbiAgICAgICAgdGFiVmlld0l0ZW0udGl0bGUgPSBcInNvbWVcIjtcbiAgICAgICAgdmFyIGxibCA9IG5ldyBMYWJlbCgpO1xuICAgICAgICBsYmwudGV4dCA9IFwidGVzdFwiO1xuICAgICAgICB0YWJWaWV3SXRlbS52aWV3ID0gbGJsO1xuXG4gICAgICAgIHRhYlZpZXcuaXRlbXMucHVzaCh0YWJWaWV3SXRlbSk7XG4gICAgfVxufVxuIl19