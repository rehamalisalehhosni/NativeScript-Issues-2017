"use strict";
var main_view_model_1 = require('./main-view-model');
var color_1 = require("color");
var listview_1 = require("nativescript-telerik-ui-pro/listview");
var listView;
var lblSelection;
var isRad;
var page;
function pageStoriesPagesLoaded(args) {
    page = args.object;
    page.bindingContext = new main_view_model_1.ViewModel();
}
exports.pageStoriesPagesLoaded = pageStoriesPagesLoaded;
function onRadListLoaded(args) {
    var radList = args.object;
    if (args.object instanceof listview_1.RadListView) {
        //console.log("RadListView");
        isRad = true;
    }
}
exports.onRadListLoaded = onRadListLoaded;
function onItemLoading(args) {
    if (args.ios) {
        console.log("setIosListItemTransparentBackground triggered");
        setIosListItemTransparentBackground(args);
    }
}
exports.onItemLoading = onItemLoading;
;
function setIosListItemTransparentBackground(args) {
    if (isRad) {
        console.log("isRad RadListView");
        var iosColor = new color_1.Color(20, 255, 0, 0).ios;
        args.ios.backgroundView.backgroundColor = iosColor;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtcGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1vZGFsLXBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLGdDQUEwQixtQkFBbUIsQ0FBQyxDQUFBO0FBQzlDLHNCQUFzQixPQUFPLENBQUMsQ0FBQTtBQUc5Qix5QkFBNEIsc0NBQXNDLENBQUMsQ0FBQTtBQUluRSxJQUFJLFFBQVEsQ0FBQztBQUNiLElBQUksWUFBWSxDQUFDO0FBQ2pCLElBQUksS0FBYyxDQUFDO0FBQ25CLElBQUksSUFBVSxDQUFDO0FBRWYsZ0NBQXVDLElBQUk7SUFDdkMsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDbkIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLDJCQUFTLEVBQUUsQ0FBQztBQUMxQyxDQUFDO0FBSGUsOEJBQXNCLHlCQUdyQyxDQUFBO0FBR0QseUJBQWdDLElBQUk7SUFDaEMsSUFBSSxPQUFPLEdBQWdCLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDdkMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sWUFBWSxzQkFBVyxDQUFDLENBQUMsQ0FBQztRQUNyQyw2QkFBNkI7UUFDN0IsS0FBSyxHQUFHLElBQUksQ0FBQztJQUNqQixDQUFDO0FBQ0wsQ0FBQztBQU5lLHVCQUFlLGtCQU05QixDQUFBO0FBRUQsdUJBQThCLElBQUk7SUFDOUIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLCtDQUErQyxDQUFDLENBQUM7UUFDN0QsbUNBQW1DLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUMsQ0FBQztBQUNMLENBQUM7QUFMZSxxQkFBYSxnQkFLNUIsQ0FBQTtBQUFBLENBQUM7QUFFRiw2Q0FBNkMsSUFBSTtJQUM3QyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ2pDLElBQUksUUFBUSxHQUFHLElBQUksYUFBSyxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUM1QyxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxlQUFlLEdBQUcsUUFBUSxDQUFDO0lBQ3ZELENBQUM7QUFDTCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd1aS9wYWdlJztcbmltcG9ydCB7IFZpZXdNb2RlbCB9IGZyb20gJy4vbWFpbi12aWV3LW1vZGVsJztcbmltcG9ydCB7IENvbG9yIH0gZnJvbSBcImNvbG9yXCI7XG5cbmltcG9ydCB7IExpc3RWaWV3IH0gZnJvbSBcInVpL2xpc3Qtdmlld1wiO1xuaW1wb3J0IHsgUmFkTGlzdFZpZXcgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXRlbGVyaWstdWktcHJvL2xpc3R2aWV3XCI7XG5cbmltcG9ydCAqIGFzIHV0aWxzTW9kdWxlIGZyb20gXCJ1dGlscy91dGlsc1wiO1xuXG52YXIgbGlzdFZpZXc7XG52YXIgbGJsU2VsZWN0aW9uO1xubGV0IGlzUmFkOiBib29sZWFuO1xubGV0IHBhZ2U6IFBhZ2U7XG5cbmV4cG9ydCBmdW5jdGlvbiBwYWdlU3Rvcmllc1BhZ2VzTG9hZGVkKGFyZ3MpIHtcbiAgICBwYWdlID0gYXJncy5vYmplY3Q7XG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IG5ldyBWaWV3TW9kZWwoKTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gb25SYWRMaXN0TG9hZGVkKGFyZ3MpIHtcbiAgICBsZXQgcmFkTGlzdCA9IDxSYWRMaXN0Vmlldz5hcmdzLm9iamVjdDtcbiAgICBpZiAoYXJncy5vYmplY3QgaW5zdGFuY2VvZiBSYWRMaXN0Vmlldykge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiUmFkTGlzdFZpZXdcIik7XG4gICAgICAgIGlzUmFkID0gdHJ1ZTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbkl0ZW1Mb2FkaW5nKGFyZ3MpIHtcbiAgICBpZiAoYXJncy5pb3MpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJzZXRJb3NMaXN0SXRlbVRyYW5zcGFyZW50QmFja2dyb3VuZCB0cmlnZ2VyZWRcIik7XG4gICAgICAgIHNldElvc0xpc3RJdGVtVHJhbnNwYXJlbnRCYWNrZ3JvdW5kKGFyZ3MpO1xuICAgIH1cbn07XG5cbmZ1bmN0aW9uIHNldElvc0xpc3RJdGVtVHJhbnNwYXJlbnRCYWNrZ3JvdW5kKGFyZ3MpIHtcbiAgICBpZiAoaXNSYWQpIHsgLy9SYWRMaXN0Vmlldz9cbiAgICAgICAgY29uc29sZS5sb2coXCJpc1JhZCBSYWRMaXN0Vmlld1wiKTtcbiAgICAgICAgdmFyIGlvc0NvbG9yID0gbmV3IENvbG9yKDIwLCAyNTUsIDAsIDApLmlvcztcbiAgICAgICAgYXJncy5pb3MuYmFja2dyb3VuZFZpZXcuYmFja2dyb3VuZENvbG9yID0gaW9zQ29sb3I7XG4gICAgfVxufVxuIl19