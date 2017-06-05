"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var frame_1 = require("ui/frame");
function navigatingTo(args) {
    var page = args.object;
}
exports.navigatingTo = navigatingTo;
function navWithClearHistory() {
    frame_1.topmost().navigate({
        moduleName: "sub-page",
        clearHistory: true
    });
}
exports.navWithClearHistory = navWithClearHistory;
function navWithClearHistoryAndTransition() {
    frame_1.topmost().navigate({
        moduleName: "sub-page",
        clearHistory: true,
        animated: true,
        transition: {
            name: "slide",
            duration: 3000
        }
    });
}
exports.navWithClearHistoryAndTransition = navWithClearHistoryAndTransition;
function navWithoutClearHistory() {
    frame_1.topmost().navigate({
        moduleName: "sub-page",
        clearHistory: false
    });
}
exports.navWithoutClearHistory = navWithoutClearHistory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsa0NBQW1DO0FBRW5DLHNCQUE2QixJQUFlO0lBQ3hDLElBQUksSUFBSSxHQUFTLElBQUksQ0FBQyxNQUFNLENBQUM7QUFDakMsQ0FBQztBQUZELG9DQUVDO0FBRUQ7SUFDSSxlQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7UUFDZixVQUFVLEVBQUUsVUFBVTtRQUN0QixZQUFZLEVBQUUsSUFBSTtLQUNyQixDQUFDLENBQUE7QUFDTixDQUFDO0FBTEQsa0RBS0M7QUFFRDtJQUNJLGVBQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQztRQUNmLFVBQVUsRUFBRSxVQUFVO1FBQ3RCLFlBQVksRUFBRSxJQUFJO1FBQ2xCLFFBQVEsRUFBRSxJQUFJO1FBQ2QsVUFBVSxFQUFFO1lBQ1IsSUFBSSxFQUFFLE9BQU87WUFDYixRQUFRLEVBQUUsSUFBSTtTQUNqQjtLQUNKLENBQUMsQ0FBQTtBQUNOLENBQUM7QUFWRCw0RUFVQztBQUVEO0lBQ0ksZUFBTyxFQUFFLENBQUMsUUFBUSxDQUFDO1FBQ2YsVUFBVSxFQUFFLFVBQVU7UUFDdEIsWUFBWSxFQUFFLEtBQUs7S0FDdEIsQ0FBQyxDQUFBO0FBQ04sQ0FBQztBQUxELHdEQUtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd1aS9wYWdlJztcbmltcG9ydCB7IHRvcG1vc3QgfSBmcm9tIFwidWkvZnJhbWVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG5hdmlnYXRpbmdUbyhhcmdzOiBFdmVudERhdGEpIHtcbiAgICBsZXQgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmF2V2l0aENsZWFySGlzdG9yeSgpIHtcbiAgICB0b3Btb3N0KCkubmF2aWdhdGUoe1xuICAgICAgICBtb2R1bGVOYW1lOiBcInN1Yi1wYWdlXCIsXG4gICAgICAgIGNsZWFySGlzdG9yeTogdHJ1ZVxuICAgIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYXZXaXRoQ2xlYXJIaXN0b3J5QW5kVHJhbnNpdGlvbigpIHtcbiAgICB0b3Btb3N0KCkubmF2aWdhdGUoe1xuICAgICAgICBtb2R1bGVOYW1lOiBcInN1Yi1wYWdlXCIsXG4gICAgICAgIGNsZWFySGlzdG9yeTogdHJ1ZSxcbiAgICAgICAgYW5pbWF0ZWQ6IHRydWUsXG4gICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgIG5hbWU6IFwic2xpZGVcIixcbiAgICAgICAgICAgIGR1cmF0aW9uOiAzMDAwXG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbmF2V2l0aG91dENsZWFySGlzdG9yeSgpIHtcbiAgICB0b3Btb3N0KCkubmF2aWdhdGUoe1xuICAgICAgICBtb2R1bGVOYW1lOiBcInN1Yi1wYWdlXCIsXG4gICAgICAgIGNsZWFySGlzdG9yeTogZmFsc2VcbiAgICB9KVxufSJdfQ==