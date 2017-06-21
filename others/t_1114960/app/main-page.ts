import { EventData, Observable } from 'data/observable';
import { Page } from 'ui/page';
import { RadListView, SwipeActionsEventData } from "nativescript-telerik-ui-pro/listview";

let lv: RadListView;

export function navigatingTo(args: EventData) {
    let page = <Page>args.object;

    let vm = new Observable();
    let dataItems = [{ "id": 1, "name": "John" }, { "id": 2, "name": "Elizabeth" }, { "id": 3, "name": "Marry" }, { "id": 4, "name": "Chris" }, { "id": 2, "name": "Elizabeth" }, { "id": 3, "name": "Marry" }, 
    { "id": 4, "name": "Chris" }, { "id": 2, "name": "Elizabeth" }, { "id": 3, "name": "Marry" }, { "id": 4, "name": "Chris" }, { "id": 2, "name": "Elizabeth" }, { "id": 3, "name": "Marry" }, { "id": 4, "name": "Chris" }, 
    { "id": 2, "name": "Elizabeth" }, { "id": 3, "name": "Marry" }, { "id": 4, "name": "Chris" }, { "id": 2, "name": "Elizabeth" }, { "id": 3, "name": "Marry" }, { "id": 4, "name": "Chris" }, { "id": 2, "name": "Elizabeth" }, { "id": 3, "name": "Marry" }, { "id": 4, "name": "Chris" }];
    vm.set("dataItems", dataItems);

    page.bindingContext = vm;

    lv = <RadListView>page.getViewById("lv");
    lv.on("scrollChange", (args) => {
        console.dir(args)
    })
}

export function onTap() {
    console.log(lv);

    console.log(lv.android);

    console.log(lv.scrollPosition);

    lv.scrollToIndex(3);
}
