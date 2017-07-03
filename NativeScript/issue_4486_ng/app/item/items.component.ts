import { Component, OnInit } from "@angular/core";

import { Item } from "./item";
import { ItemService } from "./item.service";
import * as fs from "file-system";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {
    items: Item[];

    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(private itemService: ItemService) { }

    ngOnInit(): void {
        this.items = this.itemService.getItems();
    }

    writeSync() {
        let documents = fs.knownFolders.documents();
        let path = fs.path.join(documents.path, "base.txt");
        let contents = "sample text content";
        let file = fs.File.fromPath(path);
        let error;

        file.writeSync(contents, (e) => {
            console.log("writeSync");
            console.log(contents);
        });
    }

    readSync() {
        var destinationFile = fs.knownFolders.documents().getFile("base.txt");

        var source = destinationFile.readSync();
        console.log(source);
    }

}