import { EventData } from 'data/observable';
import { Page } from 'ui/page';
import { ViewModel } from './main-view-model';
import { Color } from "color";

import { ListView } from "ui/list-view";
import { RadListView } from "nativescript-telerik-ui-pro/listview";

import * as utilsModule from "utils/utils";

var listView;
var lblSelection;
let isRad: boolean;
let page: Page;

export function pageStoriesPagesLoaded(args) {
    page = args.object;
    page.bindingContext = new ViewModel();
}


export function onRadListLoaded(args) {
    let radList = <RadListView>args.object;
    if (args.object instanceof RadListView) {
        //console.log("RadListView");
        isRad = true;
    }
}

export function onItemLoading(args) {
    if (args.ios) {
        console.log("setIosListItemTransparentBackground triggered");
        setIosListItemTransparentBackground(args);
    }
};

declare var UIColor: any;

function setIosListItemTransparentBackground(args) {
    if(args.ios) {
        if(args.object instanceof ListView) {
            args.ios.backgroundColor = utilsModule.ios.getter(UIColor, UIColor.clearColor);
        } else if(args.view.parent instanceof RadListView) {
            args.ios.backgroundView.backgroundColor = new Color(0,0,0,0).ios;
        }
    }
}
