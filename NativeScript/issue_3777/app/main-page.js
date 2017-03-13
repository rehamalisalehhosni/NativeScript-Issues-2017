"use strict";
var main_view_model_1 = require("./main-view-model");
var text_field_1 = require("ui/text-field");
function navigatingTo(args) {
    var page = args.object;
    var textField = page.getViewById("textField");
    page.bindingContext = new main_view_model_1.HelloWorldModel();
    textField.on(text_field_1.TextField.returnPressEvent, function (eventData) {
        console.log("event happened");
    });
}
exports.navigatingTo = navigatingTo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFHQSxxREFBb0Q7QUFFcEQsNENBQTBDO0FBRTFDLHNCQUE2QixJQUFlO0lBQ3hDLElBQUksSUFBSSxHQUFTLElBQUksQ0FBQyxNQUFNLENBQUM7SUFFN0IsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUU5QyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksaUNBQWUsRUFBRSxDQUFDO0lBRTVDLFNBQVMsQ0FBQyxFQUFFLENBQUMsc0JBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxVQUFTLFNBQWM7UUFDNUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ2xDLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQVZELG9DQVVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd1aS9wYWdlJztcbmltcG9ydCB7IExpc3RWaWV3IH0gZnJvbSAndWkvbGlzdC12aWV3JztcbmltcG9ydCB7IEhlbGxvV29ybGRNb2RlbCB9IGZyb20gJy4vbWFpbi12aWV3LW1vZGVsJztcblxuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSBcInVpL3RleHQtZmllbGRcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG5hdmlnYXRpbmdUbyhhcmdzOiBFdmVudERhdGEpIHtcbiAgICBsZXQgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xuXG4gICAgdmFyIHRleHRGaWVsZCA9IHBhZ2UuZ2V0Vmlld0J5SWQoXCJ0ZXh0RmllbGRcIik7XG5cbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gbmV3IEhlbGxvV29ybGRNb2RlbCgpO1xuXG4gICAgdGV4dEZpZWxkLm9uKFRleHRGaWVsZC5yZXR1cm5QcmVzc0V2ZW50LCBmdW5jdGlvbihldmVudERhdGE6IGFueSl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXZlbnQgaGFwcGVuZWRcIik7XG4gICAgfSk7XG59XG5cbiJdfQ==