// 4.1.2 Reflect.defineMetadata ( metadataKey, metadataValue, target, propertyKey )
// https://rbuckton.github.io/reflect-metadata/#reflect.definemetadata
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("../Reflect");
var chai_1 = require("chai");
describe("Reflect.defineMetadata", function () {
    it("InvalidTarget", function () {
        chai_1.assert.throws(function () { return Reflect.defineMetadata("key", "value", undefined, undefined); }, TypeError);
    });
    it("ValidTargetWithoutTargetKey", function () {
        chai_1.assert.doesNotThrow(function () { return Reflect.defineMetadata("key", "value", {}, undefined); });
    });
    it("ValidTargetWithTargetKey", function () {
        chai_1.assert.doesNotThrow(function () { return Reflect.defineMetadata("key", "value", {}, "name"); });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVmbGVjdC1kZWZpbmVtZXRhZGF0YS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlZmxlY3QtZGVmaW5lbWV0YWRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbUZBQW1GO0FBQ25GLHNFQUFzRTs7O0FBRXRFLHNCQUFvQjtBQUNwQiw2QkFBOEI7QUFFOUIsUUFBUSxDQUFDLHdCQUF3QixFQUFFO0lBQy9CLEVBQUUsQ0FBQyxlQUFlLEVBQUU7UUFDaEIsYUFBTSxDQUFDLE1BQU0sQ0FBQyxjQUFNLE9BQUEsT0FBTyxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUMsRUFBNUQsQ0FBNEQsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNqRyxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyw2QkFBNkIsRUFBRTtRQUM5QixhQUFNLENBQUMsWUFBWSxDQUFDLGNBQU0sT0FBQSxPQUFPLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsRUFBRyxFQUFFLFNBQVMsQ0FBQyxFQUF0RCxDQUFzRCxDQUFDLENBQUM7SUFDdEYsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsMEJBQTBCLEVBQUU7UUFDM0IsYUFBTSxDQUFDLFlBQVksQ0FBQyxjQUFNLE9BQUEsT0FBTyxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLEVBQUcsRUFBRSxNQUFNLENBQUMsRUFBbkQsQ0FBbUQsQ0FBQyxDQUFDO0lBQ25GLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA0LjEuMiBSZWZsZWN0LmRlZmluZU1ldGFkYXRhICggbWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUsIHRhcmdldCwgcHJvcGVydHlLZXkgKVxyXG4vLyBodHRwczovL3JidWNrdG9uLmdpdGh1Yi5pby9yZWZsZWN0LW1ldGFkYXRhLyNyZWZsZWN0LmRlZmluZW1ldGFkYXRhXHJcblxyXG5pbXBvcnQgXCIuLi9SZWZsZWN0XCI7XHJcbmltcG9ydCB7IGFzc2VydCB9IGZyb20gXCJjaGFpXCI7XHJcblxyXG5kZXNjcmliZShcIlJlZmxlY3QuZGVmaW5lTWV0YWRhdGFcIiwgKCkgPT4ge1xyXG4gICAgaXQoXCJJbnZhbGlkVGFyZ2V0XCIsICgpID0+IHtcclxuICAgICAgICBhc3NlcnQudGhyb3dzKCgpID0+IFJlZmxlY3QuZGVmaW5lTWV0YWRhdGEoXCJrZXlcIiwgXCJ2YWx1ZVwiLCB1bmRlZmluZWQsIHVuZGVmaW5lZCksIFR5cGVFcnJvcik7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdChcIlZhbGlkVGFyZ2V0V2l0aG91dFRhcmdldEtleVwiLCAoKSA9PiB7XHJcbiAgICAgICAgYXNzZXJ0LmRvZXNOb3RUaHJvdygoKSA9PiBSZWZsZWN0LmRlZmluZU1ldGFkYXRhKFwia2V5XCIsIFwidmFsdWVcIiwgeyB9LCB1bmRlZmluZWQpKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KFwiVmFsaWRUYXJnZXRXaXRoVGFyZ2V0S2V5XCIsICgpID0+IHtcclxuICAgICAgICBhc3NlcnQuZG9lc05vdFRocm93KCgpID0+IFJlZmxlY3QuZGVmaW5lTWV0YWRhdGEoXCJrZXlcIiwgXCJ2YWx1ZVwiLCB7IH0sIFwibmFtZVwiKSk7XHJcbiAgICB9KTtcclxufSk7Il19