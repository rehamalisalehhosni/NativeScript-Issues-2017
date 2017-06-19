import { Frame } from "ui/frame";
// Frame.defaultTransition = { name: "slide", duration: 5000 };

import { topmost } from "ui/frame";

export function onTap(args) {
    topmost().navigate({
        moduleName: "main-page",
        transition: {
            name: "fade"
        }
    })
}