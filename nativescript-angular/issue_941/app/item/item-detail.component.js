"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var item_service_1 = require("./item.service");
var ItemDetailComponent = (function () {
    function ItemDetailComponent(itemService, route, routerExtensions) {
        this.itemService = itemService;
        this.route = route;
        this.routerExtensions = routerExtensions;
    }
    ItemDetailComponent.prototype.ngOnInit = function () {
        var id = +this.route.snapshot.params["id"];
        this.item = this.itemService.getItem(id);
    };
    ItemDetailComponent.prototype.backTYoPrevious = function () {
        this.routerExtensions.backToPreviousPage();
    };
    ItemDetailComponent = __decorate([
        core_1.Component({
            selector: "ns-details",
            moduleId: module.id,
            templateUrl: "./item-detail.component.html",
        }),
        __metadata("design:paramtypes", [item_service_1.ItemService,
            router_1.ActivatedRoute, router_2.RouterExtensions])
    ], ItemDetailComponent);
    return ItemDetailComponent;
}());
exports.ItemDetailComponent = ItemDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbS1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUFpRDtBQUVqRCxzREFBK0Q7QUFFL0QsK0NBQTZDO0FBTzdDO0lBR0ksNkJBQ1ksV0FBd0IsRUFDeEIsS0FBcUIsRUFBVSxnQkFBa0M7UUFEakUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQ3pFLENBQUM7SUFFTCxzQ0FBUSxHQUFSO1FBQ0ksSUFBTSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBR0QsNkNBQWUsR0FBZjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQy9DLENBQUM7SUFoQlEsbUJBQW1CO1FBTC9CLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsWUFBWTtZQUN0QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDhCQUE4QjtTQUM5QyxDQUFDO3lDQUsyQiwwQkFBVztZQUNqQix1QkFBYyxFQUE0Qix5QkFBZ0I7T0FMcEUsbUJBQW1CLENBaUIvQjtJQUFELDBCQUFDO0NBQUEsQUFqQkQsSUFpQkM7QUFqQlksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBJdGVtIH0gZnJvbSBcIi4vaXRlbVwiO1xuaW1wb3J0IHsgSXRlbVNlcnZpY2UgfSBmcm9tIFwiLi9pdGVtLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtZGV0YWlsc1wiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9pdGVtLWRldGFpbC5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBJdGVtRGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBpdGVtOiBJdGVtO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgaXRlbVNlcnZpY2U6IEl0ZW1TZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zXG4gICAgKSB7IH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICBjb25zdCBpZCA9ICt0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtc1tcImlkXCJdO1xuICAgICAgICB0aGlzLml0ZW0gPSB0aGlzLml0ZW1TZXJ2aWNlLmdldEl0ZW0oaWQpO1xuICAgIH1cblxuXG4gICAgYmFja1RZb1ByZXZpb3VzKCkge1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFja1RvUHJldmlvdXNQYWdlKCk7XG4gICAgfVxufVxuIl19