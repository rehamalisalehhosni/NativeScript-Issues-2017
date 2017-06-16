import { Component, OnInit } from "@angular/core";

import { Item } from "./item";
import { ItemService } from "./item.service";

import { Label } from "ui/label";
import { TabView, TabViewItem } from "ui/tab-view";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {
    items: Item[];
    isLoggedIn: boolean = false;

    constructor(private itemService: ItemService) { }

    ngOnInit(): void {
        this.items = this.itemService.getItems();
    }

    onChange() {
        this.isLoggedIn = !this.isLoggedIn;
    }

    onTabLoaded(args) {
        let tabView = <TabView>args.object;
        console.log("onTabLoaded " + tabView);

        var tabViewItem = new TabViewItem();
        tabViewItem.title = "some";
        var lbl = new Label();
        lbl.text = "test";
        tabViewItem.view = lbl;

        tabView.items.push(tabViewItem);
    }
}
