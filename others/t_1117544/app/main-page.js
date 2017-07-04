var observable_1 = require("data/observable");
var fs = require("file-system");
var listView_1 = require("nativescript-telerik-ui/listview");

var ObservableArray = require("data/observable-array").ObservableArray;

var myImagePaths = new ObservableArray();

var viewModel = new observable_1.Observable();


viewModel.set("myItems", myImagePaths);

exports.pageLoaded = function(args) {
    readFiles();
    var page = args.object;
    page.bindingContext = viewModel;
}

function lvloaded(args) {
    var listview = args.object;
    listview.on(listView_1.RadListView.itemTapEvent, function (args) {
        console.log("selected item index " + args.itemIndex);
    });
}
exports.lvloaded = lvloaded;

function readFiles() {

    myImagePaths.push({path: "~/images/cosmos.jpg"});
    myImagePaths.push({path: "~/images/nan.png"});
    myImagePaths.push({path: "~/images/ninja.png"});
    myImagePaths.push({path: "~/images/logo.png"});

    myImagePaths.push({path: "~/images/cosmos.jpg"});
    myImagePaths.push({path: "~/images/nan.png"});
    myImagePaths.push({path: "~/images/ninja.png"});
    myImagePaths.push({path: "~/images/logo.png"});

    myImagePaths.push({path: "~/images/cosmos.jpg"});
    myImagePaths.push({path: "~/images/nan.png"});
    myImagePaths.push({path: "~/images/ninja.png"});
    myImagePaths.push({path: "~/images/logo.png"});

    myImagePaths.push({path: "~/images/cosmos.jpg"});
    myImagePaths.push({path: "~/images/nan.png"});
    myImagePaths.push({path: "~/images/ninja.png"});
    myImagePaths.push({path: "~/images/logo.png"});

    myImagePaths.push({path: "~/images/cosmos.jpg"});
    myImagePaths.push({path: "~/images/nan.png"});
    myImagePaths.push({path: "~/images/ninja.png"});
    myImagePaths.push({path: "~/images/logo.png"});

}