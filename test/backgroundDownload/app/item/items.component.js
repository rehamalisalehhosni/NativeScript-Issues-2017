"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var item_service_1 = require("./item.service");
var platform_1 = require("platform");
var ItemsComponent = (function () {
    function ItemsComponent(itemService) {
        this.itemService = itemService;
    }
    ItemsComponent.prototype.ngOnInit = function () {
        this.items = this.itemService.getItems();
    };
    ItemsComponent.prototype.onTap = function () {
        if (platform_1.isIOS) {
            var BackgroundUploadDelegate = (function (_super) {
                __extends(BackgroundUploadDelegate, _super);
                function BackgroundUploadDelegate() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                // NSURLSessionDelegate
                BackgroundUploadDelegate.prototype.URLSessionDidBecomeInvalidWithError = function (session, error) {
                    console.log("URLSessionDidBecomeInvalidWithError:");
                    //console.log(" - session: " + session);
                    //console.log(" - error:   " + error);
                };
                BackgroundUploadDelegate.prototype.URLSessionDidReceiveChallengeCompletionHandler = function (session, challenge, comlpetionHandler) {
                    //console.log("URLSessionDidFinishEventsForBackgroundURLSession: " + session + " " + challenge);
                    var disposition = null;
                    var credential = null;
                    comlpetionHandler(disposition, credential);
                };
                BackgroundUploadDelegate.prototype.URLSessionDidFinishEventsForBackgroundURLSession = function (session) {
                    console.log("URLSessionDidFinishEventsForBackgroundURLSession: " + session);
                };
                // NSURLSessionTaskDelegate
                BackgroundUploadDelegate.prototype.URLSessionTaskDidCompleteWithError = function (session, nsTask, error) {
                    console.log("URLSessionTaskDidCompleteWithError");
                    console.log(error);
                };
                BackgroundUploadDelegate.prototype.URLSessionTaskDidReceiveChallengeCompletionHandler = function (session, task, challenge, completionHandler) {
                    console.log("URLSessionTaskDidReceiveChallengeCompletionHandler: " + session + " " + task + " " + challenge);
                    var disposition = null;
                    var credential = null;
                    completionHandler(disposition, credential);
                };
                BackgroundUploadDelegate.prototype.URLSessionTaskDidSendBodyDataTotalBytesSentTotalBytesExpectedToSend = function (nsSession, nsTask, data, sent, expectedTotal) {
                    console.log("URLSessionTaskDidSendBodyDataTotalBytesSentTotalBytesExpectedToSend");
                };
                BackgroundUploadDelegate.prototype.URLSessionTaskNeedNewBodyStream = function (session, task, need) {
                    console.log("URLSessionTaskNeedNewBodyStream");
                };
                BackgroundUploadDelegate.prototype.URLSessionTaskWillPerformHTTPRedirectionNewRequestCompletionHandler = function (session, task, redirect, request, completionHandler) {
                    console.log("URLSessionTaskWillPerformHTTPRedirectionNewRequestCompletionHandler");
                    completionHandler(request);
                };
                // NSURLSessionDataDelegate
                BackgroundUploadDelegate.prototype.URLSessionDataTaskDidReceiveResponseCompletionHandler = function (session, dataTask, response, completionHandler) {
                    console.log("URLSessionDataTaskDidReceiveResponseCompletionHandler");
                    var disposition = null;
                    completionHandler(disposition);
                };
                BackgroundUploadDelegate.prototype.URLSessionDataTaskDidBecomeDownloadTask = function (session, dataTask, downloadTask) {
                    console.log("URLSessionDataTaskDidBecomeDownloadTask");
                };
                BackgroundUploadDelegate.prototype.URLSessionDataTaskDidReceiveData = function (session, dataTask, data) {
                    console.log("URLSessionDataTaskDidReceiveData");
                };
                BackgroundUploadDelegate.prototype.URLSessionDataTaskWillCacheResponseCompletionHandler = function () {
                    console.log("URLSessionDataTaskWillCacheResponseCompletionHandler");
                };
                // NSURLSessionDownloadDelegate
                BackgroundUploadDelegate.prototype.URLSessionDownloadTaskDidResumeAtOffsetExpectedTotalBytes = function (session, task, offset, expects) {
                    console.log("URLSessionDownloadTaskDidResumeAtOffsetExpectedTotalBytes");
                };
                BackgroundUploadDelegate.prototype.URLSessionDownloadTaskDidWriteDataTotalBytesWrittenTotalBytesExpectedToWrite = function (session, task, data, written, expected) {
                    console.log("URLSessionDownloadTaskDidWriteDataTotalBytesWrittenTotalBytesExpectedToWrite");
                };
                BackgroundUploadDelegate.prototype.URLSessionDownloadTaskDidFinishDownloadingToURL = function (session, task, url) {
                    console.log("URLSessionDownloadTaskDidFinishDownloadingToURL");
                    console.log(session);
                    console.log(task);
                    console.log(url);
                };
                return BackgroundUploadDelegate;
            }(NSObject));
            BackgroundUploadDelegate.ObjCProtocols = [NSURLSessionDelegate, NSURLSessionTaskDelegate, NSURLSessionDataDelegate, NSURLSessionDownloadDelegate];
            var config = NSURLSessionConfiguration.backgroundSessionConfigurationWithIdentifier("org.nativescript.sample");
            var delegate = BackgroundUploadDelegate.alloc().init();
            var session = NSURLSession.sessionWithConfigurationDelegateDelegateQueue(config, delegate, null);
            console.log(session);
            var url = NSURL.URLWithString("https://httpbin.org/image");
            var task = session.downloadTaskWithURL(url);
            task.resume();
        }
        else {
            console.log("Android");
        }
    };
    return ItemsComponent;
}());
ItemsComponent = __decorate([
    core_1.Component({
        selector: "ns-items",
        moduleId: module.id,
        templateUrl: "./items.component.html",
    }),
    __metadata("design:paramtypes", [item_service_1.ItemService])
], ItemsComponent);
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBR2xELCtDQUE2QztBQUU3QyxxQ0FBNEM7QUFPNUMsSUFBYSxjQUFjO0lBRzFCLHdCQUFvQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUFJLENBQUM7SUFFakQsaUNBQVEsR0FBUjtRQUNDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMxQyxDQUFDO0lBRUQsOEJBQUssR0FBTDtRQUNDLEVBQUUsQ0FBQSxDQUFDLGdCQUFLLENBQUMsQ0FBQyxDQUFDO1lBRVY7Z0JBQXVDLDRDQUFRO2dCQUEvQzs7Z0JBbUZBLENBQUM7Z0JBL0VBLHVCQUF1QjtnQkFDdkIsc0VBQW1DLEdBQW5DLFVBQW9DLE9BQU8sRUFBRSxLQUFLO29CQUNqRCxPQUFPLENBQUMsR0FBRyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7b0JBQ3BELHdDQUF3QztvQkFDeEMsc0NBQXNDO2dCQUN2QyxDQUFDO2dCQUVELGlGQUE4QyxHQUE5QyxVQUErQyxPQUFPLEVBQUUsU0FBUyxFQUFFLGlCQUFpQjtvQkFDbkYsZ0dBQWdHO29CQUNoRyxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUM7b0JBQ3ZCLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQztvQkFDdEIsaUJBQWlCLENBQUMsV0FBVyxFQUFFLFVBQVUsQ0FBQyxDQUFDO2dCQUM1QyxDQUFDO2dCQUVELG1GQUFnRCxHQUFoRCxVQUFpRCxPQUFPO29CQUN2RCxPQUFPLENBQUMsR0FBRyxDQUFDLG9EQUFvRCxHQUFHLE9BQU8sQ0FBQyxDQUFDO2dCQUM3RSxDQUFDO2dCQUVELDJCQUEyQjtnQkFDM0IscUVBQWtDLEdBQWxDLFVBQW1DLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSztvQkFDeEQs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QW9CLEVBQUUsd0JBQXdCLEVBQUUsd0JBQXdCLEVBQUUsNEJBQTRCLENBQUMsQ0FBQztZQW9GakksSUFBSSxNQUFNLEdBQUcseUJBQXlCLENBQUMsNENBQTRDLENBQUMseUJBQXlCLENBQUMsQ0FBQztZQUMvRyxJQUFJLFFBQVEsR0FBRyx3QkFBd0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUN2RCxJQUFJLE9BQU8sR0FBRyxZQUFZLENBQUMsNkNBQTZDLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNqRyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3JCLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsMkJBQTJCLENBQUMsQ0FBQztZQUMzRCxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDNUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2YsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN4QixDQUFDO0lBQ0YsQ0FBQztJQUNGLHFCQUFDO0FBQUQsQ0FBQyxBQTdHRCxJQTZHQztBQTdHWSxjQUFjO0lBTDFCLGdCQUFTLENBQUM7UUFDVixRQUFRLEVBQUUsVUFBVTtRQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtLQUNyQyxDQUFDO3FDQUlnQywwQkFBVztHQUhoQyxjQUFjLENBNkcxQjtBQTdHWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgSXRlbSB9IGZyb20gXCIuL2l0ZW1cIjtcbmltcG9ydCB7IEl0ZW1TZXJ2aWNlIH0gZnJvbSBcIi4vaXRlbS5zZXJ2aWNlXCI7XG5cbmltcG9ydCB7IGlzQW5kcm9pZCwgaXNJT1MgfSBmcm9tIFwicGxhdGZvcm1cIjtcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiBcIm5zLWl0ZW1zXCIsXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXG5cdHRlbXBsYXRlVXJsOiBcIi4vaXRlbXMuY29tcG9uZW50Lmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgSXRlbXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXHRpdGVtczogSXRlbVtdO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgaXRlbVNlcnZpY2U6IEl0ZW1TZXJ2aWNlKSB7IH1cblxuXHRuZ09uSW5pdCgpOiB2b2lkIHtcblx0XHR0aGlzLml0ZW1zID0gdGhpcy5pdGVtU2VydmljZS5nZXRJdGVtcygpO1xuXHR9XG5cblx0b25UYXAoKSB7XG5cdFx0aWYoaXNJT1MpIHtcblxuXHRcdFx0Y2xhc3MgQmFja2dyb3VuZFVwbG9hZERlbGVnYXRlIGV4dGVuZHMgTlNPYmplY3QgaW1wbGVtZW50cyBOU1VSTFNlc3Npb25EZWxlZ2F0ZSwgTlNVUkxTZXNzaW9uVGFza0RlbGVnYXRlLCBOU1VSTFNlc3Npb25EYXRhRGVsZWdhdGUsIE5TVVJMU2Vzc2lvbkRvd25sb2FkRGVsZWdhdGUge1xuXG5cdFx0XHRcdHN0YXRpYyBPYmpDUHJvdG9jb2xzID0gW05TVVJMU2Vzc2lvbkRlbGVnYXRlLCBOU1VSTFNlc3Npb25UYXNrRGVsZWdhdGUsIE5TVVJMU2Vzc2lvbkRhdGFEZWxlZ2F0ZSwgTlNVUkxTZXNzaW9uRG93bmxvYWREZWxlZ2F0ZV07XG5cblx0XHRcdFx0Ly8gTlNVUkxTZXNzaW9uRGVsZWdhdGVcblx0XHRcdFx0VVJMU2Vzc2lvbkRpZEJlY29tZUludmFsaWRXaXRoRXJyb3Ioc2Vzc2lvbiwgZXJyb3IpIHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIlVSTFNlc3Npb25EaWRCZWNvbWVJbnZhbGlkV2l0aEVycm9yOlwiKTtcblx0XHRcdFx0XHQvL2NvbnNvbGUubG9nKFwiIC0gc2Vzc2lvbjogXCIgKyBzZXNzaW9uKTtcblx0XHRcdFx0XHQvL2NvbnNvbGUubG9nKFwiIC0gZXJyb3I6ICAgXCIgKyBlcnJvcik7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRVUkxTZXNzaW9uRGlkUmVjZWl2ZUNoYWxsZW5nZUNvbXBsZXRpb25IYW5kbGVyKHNlc3Npb24sIGNoYWxsZW5nZSwgY29tbHBldGlvbkhhbmRsZXIpIHtcblx0XHRcdFx0XHQvL2NvbnNvbGUubG9nKFwiVVJMU2Vzc2lvbkRpZEZpbmlzaEV2ZW50c0ZvckJhY2tncm91bmRVUkxTZXNzaW9uOiBcIiArIHNlc3Npb24gKyBcIiBcIiArIGNoYWxsZW5nZSk7XG5cdFx0XHRcdFx0dmFyIGRpc3Bvc2l0aW9uID0gbnVsbDtcblx0XHRcdFx0XHR2YXIgY3JlZGVudGlhbCA9IG51bGw7XG5cdFx0XHRcdFx0Y29tbHBldGlvbkhhbmRsZXIoZGlzcG9zaXRpb24sIGNyZWRlbnRpYWwpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0VVJMU2Vzc2lvbkRpZEZpbmlzaEV2ZW50c0ZvckJhY2tncm91bmRVUkxTZXNzaW9uKHNlc3Npb24pIHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIlVSTFNlc3Npb25EaWRGaW5pc2hFdmVudHNGb3JCYWNrZ3JvdW5kVVJMU2Vzc2lvbjogXCIgKyBzZXNzaW9uKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIE5TVVJMU2Vzc2lvblRhc2tEZWxlZ2F0ZVxuXHRcdFx0XHRVUkxTZXNzaW9uVGFza0RpZENvbXBsZXRlV2l0aEVycm9yKHNlc3Npb24sIG5zVGFzaywgZXJyb3IpIHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIlVSTFNlc3Npb25UYXNrRGlkQ29tcGxldGVXaXRoRXJyb3JcIik7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0VVJMU2Vzc2lvblRhc2tEaWRSZWNlaXZlQ2hhbGxlbmdlQ29tcGxldGlvbkhhbmRsZXIoc2Vzc2lvbiwgdGFzaywgY2hhbGxlbmdlLCBjb21wbGV0aW9uSGFuZGxlcikge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiVVJMU2Vzc2lvblRhc2tEaWRSZWNlaXZlQ2hhbGxlbmdlQ29tcGxldGlvbkhhbmRsZXI6IFwiICsgc2Vzc2lvbiArIFwiIFwiICsgdGFzayArIFwiIFwiICsgY2hhbGxlbmdlKTtcblx0XHRcdFx0XHR2YXIgZGlzcG9zaXRpb24gPSBudWxsO1xuXHRcdFx0XHRcdHZhciBjcmVkZW50aWFsID0gbnVsbDtcblx0XHRcdFx0XHRjb21wbGV0aW9uSGFuZGxlcihkaXNwb3NpdGlvbiwgY3JlZGVudGlhbCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRVUkxTZXNzaW9uVGFza0RpZFNlbmRCb2R5RGF0YVRvdGFsQnl0ZXNTZW50VG90YWxCeXRlc0V4cGVjdGVkVG9TZW5kKG5zU2Vzc2lvbjogTlNVUkxTZXNzaW9uLCBuc1Rhc2s6IE5TVVJMU2Vzc2lvblRhc2ssIGRhdGEsIHNlbnQ6IG51bWJlciwgZXhwZWN0ZWRUb3RhbDogbnVtYmVyKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCJVUkxTZXNzaW9uVGFza0RpZFNlbmRCb2R5RGF0YVRvdGFsQnl0ZXNTZW50VG90YWxCeXRlc0V4cGVjdGVkVG9TZW5kXCIpXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRVUkxTZXNzaW9uVGFza05lZWROZXdCb2R5U3RyZWFtKHNlc3Npb24sIHRhc2ssIG5lZWQpIHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIlVSTFNlc3Npb25UYXNrTmVlZE5ld0JvZHlTdHJlYW1cIik7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRVUkxTZXNzaW9uVGFza1dpbGxQZXJmb3JtSFRUUFJlZGlyZWN0aW9uTmV3UmVxdWVzdENvbXBsZXRpb25IYW5kbGVyKHNlc3Npb24sIHRhc2ssIHJlZGlyZWN0LCByZXF1ZXN0LCBjb21wbGV0aW9uSGFuZGxlcikge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiVVJMU2Vzc2lvblRhc2tXaWxsUGVyZm9ybUhUVFBSZWRpcmVjdGlvbk5ld1JlcXVlc3RDb21wbGV0aW9uSGFuZGxlclwiKTtcblx0XHRcdFx0XHRjb21wbGV0aW9uSGFuZGxlcihyZXF1ZXN0KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIE5TVVJMU2Vzc2lvbkRhdGFEZWxlZ2F0ZVxuXHRcdFx0XHRVUkxTZXNzaW9uRGF0YVRhc2tEaWRSZWNlaXZlUmVzcG9uc2VDb21wbGV0aW9uSGFuZGxlcihzZXNzaW9uLCBkYXRhVGFzaywgcmVzcG9uc2UsIGNvbXBsZXRpb25IYW5kbGVyKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCJVUkxTZXNzaW9uRGF0YVRhc2tEaWRSZWNlaXZlUmVzcG9uc2VDb21wbGV0aW9uSGFuZGxlclwiKTtcblx0XHRcdFx0XHR2YXIgZGlzcG9zaXRpb24gPSBudWxsO1xuXHRcdFx0XHRcdGNvbXBsZXRpb25IYW5kbGVyKGRpc3Bvc2l0aW9uKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdFVSTFNlc3Npb25EYXRhVGFza0RpZEJlY29tZURvd25sb2FkVGFzayhzZXNzaW9uLCBkYXRhVGFzaywgZG93bmxvYWRUYXNrKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCJVUkxTZXNzaW9uRGF0YVRhc2tEaWRCZWNvbWVEb3dubG9hZFRhc2tcIik7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRVUkxTZXNzaW9uRGF0YVRhc2tEaWRSZWNlaXZlRGF0YShzZXNzaW9uLCBkYXRhVGFzaywgZGF0YSkge1xuXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCJVUkxTZXNzaW9uRGF0YVRhc2tEaWRSZWNlaXZlRGF0YVwiKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdFVSTFNlc3Npb25EYXRhVGFza1dpbGxDYWNoZVJlc3BvbnNlQ29tcGxldGlvbkhhbmRsZXIoKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCJVUkxTZXNzaW9uRGF0YVRhc2tXaWxsQ2FjaGVSZXNwb25zZUNvbXBsZXRpb25IYW5kbGVyXCIpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gTlNVUkxTZXNzaW9uRG93bmxvYWREZWxlZ2F0ZVxuXHRcdFx0XHRVUkxTZXNzaW9uRG93bmxvYWRUYXNrRGlkUmVzdW1lQXRPZmZzZXRFeHBlY3RlZFRvdGFsQnl0ZXMoc2Vzc2lvbiwgdGFzaywgb2Zmc2V0LCBleHBlY3RzKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCJVUkxTZXNzaW9uRG93bmxvYWRUYXNrRGlkUmVzdW1lQXRPZmZzZXRFeHBlY3RlZFRvdGFsQnl0ZXNcIik7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRVUkxTZXNzaW9uRG93bmxvYWRUYXNrRGlkV3JpdGVEYXRhVG90YWxCeXRlc1dyaXR0ZW5Ub3RhbEJ5dGVzRXhwZWN0ZWRUb1dyaXRlKHNlc3Npb24sIHRhc2ssIGRhdGEsIHdyaXR0ZW4sIGV4cGVjdGVkKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCJVUkxTZXNzaW9uRG93bmxvYWRUYXNrRGlkV3JpdGVEYXRhVG90YWxCeXRlc1dyaXR0ZW5Ub3RhbEJ5dGVzRXhwZWN0ZWRUb1dyaXRlXCIpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0VVJMU2Vzc2lvbkRvd25sb2FkVGFza0RpZEZpbmlzaERvd25sb2FkaW5nVG9VUkwoc2Vzc2lvbiwgdGFzaywgdXJsKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCJVUkxTZXNzaW9uRG93bmxvYWRUYXNrRGlkRmluaXNoRG93bmxvYWRpbmdUb1VSTFwiKTtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhzZXNzaW9uKTtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyh0YXNrKTtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyh1cmwpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblxuXHRcdFx0bGV0IGNvbmZpZyA9IE5TVVJMU2Vzc2lvbkNvbmZpZ3VyYXRpb24uYmFja2dyb3VuZFNlc3Npb25Db25maWd1cmF0aW9uV2l0aElkZW50aWZpZXIoXCJvcmcubmF0aXZlc2NyaXB0LnNhbXBsZVwiKTtcblx0XHRcdHZhciBkZWxlZ2F0ZSA9IEJhY2tncm91bmRVcGxvYWREZWxlZ2F0ZS5hbGxvYygpLmluaXQoKTtcblx0XHRcdGxldCBzZXNzaW9uID0gTlNVUkxTZXNzaW9uLnNlc3Npb25XaXRoQ29uZmlndXJhdGlvbkRlbGVnYXRlRGVsZWdhdGVRdWV1ZShjb25maWcsIGRlbGVnYXRlLCBudWxsKTtcblx0XHRcdGNvbnNvbGUubG9nKHNlc3Npb24pO1xuXHRcdFx0bGV0IHVybCA9IE5TVVJMLlVSTFdpdGhTdHJpbmcoXCJodHRwczovL2h0dHBiaW4ub3JnL2ltYWdlXCIpO1xuXHRcdFx0bGV0IHRhc2sgPSBzZXNzaW9uLmRvd25sb2FkVGFza1dpdGhVUkwodXJsKTtcblx0XHRcdHRhc2sucmVzdW1lKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnNvbGUubG9nKFwiQW5kcm9pZFwiKTtcblx0XHR9XG5cdH1cbn1cbiJdfQ==