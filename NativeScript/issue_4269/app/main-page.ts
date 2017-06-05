import { EventData } from 'data/observable';
import { Page } from 'ui/page';
import { topmost } from "ui/frame";

export function navigatingTo(args: EventData) {
    let page = <Page>args.object;
}

export function navWithClearHistory() {
    topmost().navigate({
        moduleName: "sub-page",
        clearHistory: true
    })
}

export function navWithClearHistoryAndTransition() {
    topmost().navigate({
        moduleName: "sub-page",
        clearHistory: true,
        animated: true,
        transition: {
            name: "slide",
            duration: 3000
        }
    })
}

export function navWithoutClearHistory() {
    topmost().navigate({
        moduleName: "sub-page",
        clearHistory: false
    })
}