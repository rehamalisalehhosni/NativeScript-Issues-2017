import { Component, OnInit } from "@angular/core";

import { SelectedIndexChangedEventData } from "ui/tab-view";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})

export class ItemsComponent {
    public myTabItem: any;
    public myTabItemSelected: any;

    constructor() { 
        this.myTabItem  = { title: "NativeScript", iconSource: "~/images/icon.png" };
        this.myTabItemSelected  = { title: "Selected", iconSource: "~/images/logo.png" };
    }

    onIndexChange(args: SelectedIndexChangedEventData) {
        console.log(args.newIndex);
        console.log(args.oldIndex);
        
    }
}