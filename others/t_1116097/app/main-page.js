"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var main_view_model_1 = require("./main-view-model");
function navigatingTo(args) {
    /*
    This gets a reference this page’s <Page> UI component. You can
    view the API reference of the Page to see what’s available at
    https://docs.nativescript.org/api-reference/classes/_ui_page_.page.html
    */
    var page = args.object;
    // let lv = <RadListView>page.getViewById("lv");
    // lv.items = [1, 2, 3, 4, 5];
    // let radList = new RadListView();
    // radList.items = [1, 2, 3, 4, 5];
    // radList.selectionBehavior = "Press";
    // var templateLabel = new Label();
    // templateLabel.text = "some value";
    // radList.itemTemplate = "<label text='{{ $value }}' />";
    // container.addChild(radList);
    page.bindingContext = new main_view_model_1.HelloWorldModel();
}
exports.navigatingTo = navigatingTo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBS0EscURBQW9EO0FBSXBELHNCQUE2QixJQUFlO0lBQ3hDOzs7O01BSUU7SUFDRixJQUFJLElBQUksR0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBRTdCLGdEQUFnRDtJQUNoRCw4QkFBOEI7SUFFOUIsbUNBQW1DO0lBQ25DLG1DQUFtQztJQUNuQyx1Q0FBdUM7SUFFdkMsbUNBQW1DO0lBQ25DLHFDQUFxQztJQUNyQywwREFBMEQ7SUFFMUQsK0JBQStCO0lBRS9CLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxpQ0FBZSxFQUFFLENBQUM7QUFDaEQsQ0FBQztBQXRCRCxvQ0FzQkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndWkvcGFnZSc7XG5pbXBvcnQgeyBTdGFja0xheW91dCB9IGZyb20gJ3VpL2xheW91dHMvc3RhY2stbGF5b3V0JztcbmltcG9ydCB7IExhYmVsIH0gZnJvbSAndWkvbGFiZWwnO1xuaW1wb3J0IHsgSGVsbG9Xb3JsZE1vZGVsIH0gZnJvbSAnLi9tYWluLXZpZXctbW9kZWwnO1xuXG5pbXBvcnQgeyBSYWRMaXN0VmlldyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdGVsZXJpay11aS1wcm8vbGlzdHZpZXdcIlxuXG5leHBvcnQgZnVuY3Rpb24gbmF2aWdhdGluZ1RvKGFyZ3M6IEV2ZW50RGF0YSkge1xuICAgIC8qXG4gICAgVGhpcyBnZXRzIGEgcmVmZXJlbmNlIHRoaXMgcGFnZeKAmXMgPFBhZ2U+IFVJIGNvbXBvbmVudC4gWW91IGNhblxuICAgIHZpZXcgdGhlIEFQSSByZWZlcmVuY2Ugb2YgdGhlIFBhZ2UgdG8gc2VlIHdoYXTigJlzIGF2YWlsYWJsZSBhdFxuICAgIGh0dHBzOi8vZG9jcy5uYXRpdmVzY3JpcHQub3JnL2FwaS1yZWZlcmVuY2UvY2xhc3Nlcy9fdWlfcGFnZV8ucGFnZS5odG1sXG4gICAgKi9cbiAgICBsZXQgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xuXG4gICAgLy8gbGV0IGx2ID0gPFJhZExpc3RWaWV3PnBhZ2UuZ2V0Vmlld0J5SWQoXCJsdlwiKTtcbiAgICAvLyBsdi5pdGVtcyA9IFsxLCAyLCAzLCA0LCA1XTtcblxuICAgIC8vIGxldCByYWRMaXN0ID0gbmV3IFJhZExpc3RWaWV3KCk7XG4gICAgLy8gcmFkTGlzdC5pdGVtcyA9IFsxLCAyLCAzLCA0LCA1XTtcbiAgICAvLyByYWRMaXN0LnNlbGVjdGlvbkJlaGF2aW9yID0gXCJQcmVzc1wiO1xuXG4gICAgLy8gdmFyIHRlbXBsYXRlTGFiZWwgPSBuZXcgTGFiZWwoKTtcbiAgICAvLyB0ZW1wbGF0ZUxhYmVsLnRleHQgPSBcInNvbWUgdmFsdWVcIjtcbiAgICAvLyByYWRMaXN0Lml0ZW1UZW1wbGF0ZSA9IFwiPGxhYmVsIHRleHQ9J3t7ICR2YWx1ZSB9fScgLz5cIjtcblxuICAgIC8vIGNvbnRhaW5lci5hZGRDaGlsZChyYWRMaXN0KTtcblxuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBuZXcgSGVsbG9Xb3JsZE1vZGVsKCk7XG59Il19