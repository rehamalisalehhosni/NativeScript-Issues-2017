import { Component } from "@angular/core";

@Component({
    selector: "my-app",
    template: `
    <ActionBar title="My App"></ActionBar>
    <StackLayout>
        <Label text="Stacklayout"></Label>
        <FrescoDrawee #drawee verticalAlignment="center" aspectRatio="2" imageUri="~/images/apple.png"></FrescoDrawee>
        <Label text="GridLayout"></Label>
        <GridLayout rows="100">
            <FrescoDrawee row="0" #drawee verticalAlignment="center" aspectRatio="2" imageUri="~/images/apple.png"></FrescoDrawee>
        </GridLayout>
        <Label text="width:'50"></Label>
        <FrescoDrawee #drawee verticalAlignment="center" width="50" aspectRatio="2" imageUri="~/images/apple.png"></FrescoDrawee>
        <Label text="height: 50"></Label>
        <FrescoDrawee #drawee verticalAlignment="center" height="50" aspectRatio="2" imageUri="~/images/apple.png"></FrescoDrawee>
        <Label text="width: 50 height: 25"></Label>
        <FrescoDrawee #drawee verticalAlignment="center" width="50" height="25" aspectRatio="2" imageUri="~/images/apple.png"></FrescoDrawee>
    </StackLayout>
  `
})
export class ItemsComponent  {
}
