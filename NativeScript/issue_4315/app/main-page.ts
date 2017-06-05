import { EventData } from 'data/observable';
import { Page } from 'ui/page';
import { TextView } from "ui/text-view";

import { isAndroid, isIOS } from "platform";

declare var NSLineBreakByTruncatingTail: any;

export function onLoaded(args: EventData) {
    let page = <Page>args.object;

    let tv = <TextView>page.getViewById("tv");
    console.log("tv: " + tv);
    // tv.text = "Some really really really really really really really  long text.. I mean really really really really really really really really long (longer then 3 lines";

    if (isAndroid) {
        console.log("if android");

        let tvAndriod = tv.android;
        console.log("tvAndroid: " + tvAndriod);
        tvAndriod.inputType = "text";
        tvAndriod.maxLines = "1";
    } else if (isIOS) {
        console.log("if ios");

        tv.ios.textContainer.maximumNumberOfLines = 3;
        tv.ios.textContainer.lineBreakMode = NSLineBreakByTruncatingTail;
    }

    tv.text = "Some really really really really really really really reallyreally really really reallyreally really really reallyreally really really reallyreally really really  long text.. I mean really really really really really really really really  long text (LONGER THEN 3 Lines)";

    tv.on("textChange", () => {
        if (isAndroid) {
            if (tv.android.getLayout().getLineCount() > 2) {
                tv.android.getText().delete(tv.android.getText().length() - 1, tv.android.getText().length());
            }
        }
    })
}


