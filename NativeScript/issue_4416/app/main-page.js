"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Frame.defaultTransition = { name: "slide", duration: 5000 };
var frame_1 = require("ui/frame");
function onTap(args) {
    frame_1.topmost().navigate({
        moduleName: "sub-page",
        transition: {
            name: "fade"
        }
    });
}
exports.onTap = onTap;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsK0RBQStEO0FBRS9ELGtDQUFtQztBQUVuQyxlQUFzQixJQUFJO0lBQ3RCLGVBQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQztRQUNmLFVBQVUsRUFBRSxVQUFVO1FBQ3RCLFVBQVUsRUFBRTtZQUNSLElBQUksRUFBRSxNQUFNO1NBQ2Y7S0FDSixDQUFDLENBQUE7QUFDTixDQUFDO0FBUEQsc0JBT0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGcmFtZSB9IGZyb20gXCJ1aS9mcmFtZVwiO1xuLy8gRnJhbWUuZGVmYXVsdFRyYW5zaXRpb24gPSB7IG5hbWU6IFwic2xpZGVcIiwgZHVyYXRpb246IDUwMDAgfTtcblxuaW1wb3J0IHsgdG9wbW9zdCB9IGZyb20gXCJ1aS9mcmFtZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gb25UYXAoYXJncykge1xuICAgIHRvcG1vc3QoKS5uYXZpZ2F0ZSh7XG4gICAgICAgIG1vZHVsZU5hbWU6IFwic3ViLXBhZ2VcIixcbiAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgbmFtZTogXCJmYWRlXCJcbiAgICAgICAgfVxuICAgIH0pXG59Il19