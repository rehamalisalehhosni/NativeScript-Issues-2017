import viewModel = require("./main-view-model");
import listViewModule = require("nativescript-telerik-ui-pro/listview");
import viewModule = require('tns-core-modules/ui/core/view');
import frameModule = require("tns-core-modules/ui/frame");
import utilsModule = require("tns-core-modules/utils/utils");

export function onPageLoaded(args) {
    var page = args.object;

    page.bindingContext = new viewModel.ViewModel();
}

export function onItemSwiping(args: listViewModule.SwipeActionsEventData) {
}

export function onSwipeCellProgressChanged(args: listViewModule.SwipeActionsEventData) {
    var swipeLimits = <listViewModule.SwipeLimits>args.data.swipeLimits;

    console.log("swipeLimits.left: " + swipeLimits.left);
    console.log("swipeLimits.right: " + swipeLimits.right);

    console.log("args.data.x: " + args.data.x);

    var swipeView = args.object;
    var leftItem = swipeView.getViewById<viewModule.View>('mark-view');
    var rightItem = swipeView.getViewById<viewModule.View>('delete-view');
    if (args.data.x > leftItem.getMeasuredWidth()/1.2) {
        console.log("Notify perform left action");
    } else if (args.data.x < -rightItem.getMeasuredWidth()/1.2) {
        console.log("Notify perform right action");
    }
}

export function onSwipeCellStarted(args: listViewModule.SwipeActionsEventData) {
    var swipeLimits = args.data.swipeLimits;
    var swipeView = args.object;
    var leftItem = swipeView.getViewById<viewModule.View>('mark-view');
    var rightItem = swipeView.getViewById<viewModule.View>('delete-view');
    swipeLimits.left = leftItem.getMeasuredWidth();
    swipeLimits.right = rightItem.getMeasuredWidth();
    swipeLimits.threshold = leftItem.getMeasuredWidth() / 2;
}

export function onSwipeCellFinished(args: listViewModule.SwipeActionsEventData) {
    console.log("onSwipeCellFinished");
    var listView = <listViewModule.RadListView>frameModule.topmost().currentPage.getViewById("listView");
    listView.notifySwipeToExecuteFinished();
}

export function onLeftSwipeClick(args: listViewModule.ListViewEventData) {
    var listView = <listViewModule.RadListView>frameModule.topmost().currentPage.getViewById("listView");
    console.log("Left swipe click");
    listView.notifySwipeToExecuteFinished();
}

export function onRightSwipeClick(args) {
    var listView = <listViewModule.RadListView>frameModule.topmost().currentPage.getViewById("listView");
    console.log("Right swipe click");
    var viewModel: viewModel.ViewModel = <viewModel.ViewModel>listView.bindingContext;
    viewModel.dataItems.splice(viewModel.dataItems.indexOf(args.object.bindingContext), 1);
}
