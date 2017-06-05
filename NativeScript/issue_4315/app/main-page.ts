import { EventData } from 'data/observable';
import { Page } from 'ui/page';
import { TextView } from "ui/text-view";

import { ios, android } from "application";

declare var NSLineBreakByTruncatingTail: any;

export function onLoaded(args: EventData) {
    let page = <Page>args.object;

    let tv = <TextView>page.getViewById("tv");
    console.log("tv: " + tv);
    // tv.text = "Some really really really really really really really  long text.. I mean really really really really really really really really long (longer then 3 lines";

    let tvAndriod = tv.android;
    console.log("tvAndroid: " + tvAndriod);
    tvAndriod.inputType = "text";
    tvAndriod.maxLines = "1";

    tv.on("textChange", () => {
        if (android) {
            if (tv.android.getLayout().getLineCount() > 3) {
                tv.android.getText().delete(tv.android.getText().length() - 1, tv.android.getText().length());
            }
        } else if (ios) {
            tv.ios.textContainer.maximumNumberOfLines = 10;
            tv.ios.textContainer.lineBreakMode = NSLineBreakByTruncatingTail;
        }
    })
}


