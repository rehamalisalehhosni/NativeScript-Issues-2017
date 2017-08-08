import { EventData } from 'data/observable';
import { Page } from 'ui/page';
import { Image } from "ui/image";
import { ImageSource } from "image-source";

// Event handler for Page "navigatingTo" event attached in main-page.xml
export function navigatingTo(args: EventData) {
    let page = <Page>args.object;
}

export function onLoaded(args: EventData) {
    let img = <Image>args.object;
    let imgSource = <ImageSource>img.imageSource;

    console.log(imgSource.ios); // UIImage

    // convert theUIImage to data buffer again uisng the marshalling techniques
    // e.g., here is an Objective-C examples 
    // https://stackoverflow.com/questions/448125/how-to-get-pixel-data-from-a-uiimage-cocoa-touch-or-cgimage-core-graphics

    let jpeg = AVCaptureStillImageOutput.jpegStillImageNSDataRepresentation(imgSource.ios);
}