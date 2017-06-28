var createViewModel = require("./main-view-model").createViewModel;

var viewModel = createViewModel();
viewModel.set("isInitialized", true);

var listView;

function onPageLoaded(args) {
    var page = args.object;
    listView = page.getViewById("list");
    page.bindingContext = viewModel;
}
exports.onPageLoaded = onPageLoaded;

exports.onSwipeCellFinished = function (args) {

    console.log("onSwipeEnded");
    
    var index = args.itemIndex;

    var oldItem = viewModel.items.getItem(index);
    console.log("status before set " + viewModel.get("status"+oldItem.id));

    viewModel.set("status"+oldItem.id, true);
    console.log("status after set " + viewModel.get("status"+oldItem.id)); // although the status is now true.. the visibility is not triggered

    listView.refresh();
}