"use strict";
function viewLoaded(args) {
    var view = args.object;
    var dashScrollView = view.getViewById("dashScrollView");
    if (dashScrollView && dashScrollView.android) {
        dashScrollView.android.setVerticalScrollBarEnabled(false);
    }
}
exports.viewLoaded = viewLoaded;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLG9CQUEyQixJQUFJO0lBQzNCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7SUFFdkIsSUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBRXhELEVBQUUsQ0FBQyxDQUFDLGNBQWMsSUFBSSxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUMzQyxjQUFjLENBQUMsT0FBTyxDQUFDLDJCQUEyQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlELENBQUM7QUFFTCxDQUFDO0FBVEQsZ0NBU0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYWdlIH0gZnJvbSAndWkvcGFnZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiB2aWV3TG9hZGVkKGFyZ3MpIHtcbiAgICB2YXIgdmlldyA9IGFyZ3Mub2JqZWN0O1xuXG4gICAgdmFyIGRhc2hTY3JvbGxWaWV3ID0gdmlldy5nZXRWaWV3QnlJZChcImRhc2hTY3JvbGxWaWV3XCIpO1xuXG4gICAgaWYgKGRhc2hTY3JvbGxWaWV3ICYmIGRhc2hTY3JvbGxWaWV3LmFuZHJvaWQpIHtcbiAgICAgICAgZGFzaFNjcm9sbFZpZXcuYW5kcm9pZC5zZXRWZXJ0aWNhbFNjcm9sbEJhckVuYWJsZWQoZmFsc2UpO1xuICAgIH1cblxufSJdfQ==