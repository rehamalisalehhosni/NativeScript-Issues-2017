import { EventData } from 'data/observable';
import { Page } from 'ui/page';
var NACamera = require("nativescript-na-camera");

// Event handler for Page "navigatingTo" event attached in main-page.xml
export function navigatingTo(args: EventData) {
    let page = <Page>args.object;
    NACamera.start();
}
export function capturePhoto(args: EventData) {
    NACamera.capturePhoto({
        saveToLibrary: true
    }).then(function (image, savedToLibrary) {
        NACamera.stop();
        if (savedToLibrary) {
            console.log("Photo was saved to library!");
        }
        // Do something more... 
    }, function (error) {
        console.error(error);
    });
}

export function newPhoto(args: EventData) {
    NACamera.start();
}