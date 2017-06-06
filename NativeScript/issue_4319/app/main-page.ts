import { EventData } from 'data/observable';
import { Page } from 'ui/page';
import { SearchBar } from 'ui/search-bar';
import { Color } from "color";

let page, sb;

declare var UISearchBarStyle: any;

export function navigatingTo(args: EventData) { 
    page = <Page>args.object;
}

export function onSearchLoaded(args) {
    sb = <SearchBar>args.object;
    console.log("sb: " + sb);

    console.log(sb.ios);

    // sb.ios.barTintColor = UIColor.clearColor;

    // sb.ios.barTintColor = new Color("#0e88a0").ios;
    sb.ios.searchBarStyle = UISearchBarStyle.UISearchBarStyleMinimal;
    // sb.backgroundColor= new Color("#0e88a0");
    // sb.borderColor = new Color("#0e88a0");
}