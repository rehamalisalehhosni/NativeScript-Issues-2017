/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var main_view_model_1 = require("./main-view-model");
var img;
// Event handler for Page "navigatingTo" event attached in main-page.xml
function navigatingTo(args) {
    /*
    This gets a reference this page’s <Page> UI component. You can
    view the API reference of the Page to see what’s available at
    https://docs.nativescript.org/api-reference/classes/_ui_page_.page.html
    */
    var page = args.object;
    /*
    A page’s bindingContext is an object that should be used to perform
    data binding between XML markup and TypeScript code. Properties
    on the bindingContext can be accessed using the {{ }} syntax in XML.
    In this example, the {{ message }} and {{ onTap }} bindings are resolved
    against the object returned by createViewModel().

    You can learn more about data binding in NativeScript at
    https://docs.nativescript.org/core-concepts/data-binding.
    */
    page.bindingContext = new main_view_model_1.HelloWorldModel();
}
exports.navigatingTo = navigatingTo;
function onImageLoaded(args) {
    img = args.object;
    img.scaleX = 0.2;
    img.scaleY = 0.2;
}
exports.onImageLoaded = onImageLoaded;
function animateImage() {
    img.animate({
        scale: { x: 2, y: 2 },
        duration: 1000
    });
}
exports.animateImage = animateImage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0VBSUU7OztBQUtGLHFEQUFvRDtBQUVwRCxJQUFJLEdBQVUsQ0FBQztBQUVmLHdFQUF3RTtBQUN4RSxzQkFBNkIsSUFBZTtJQUN4Qzs7OztNQUlFO0lBQ0YsSUFBSSxJQUFJLEdBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUU3Qjs7Ozs7Ozs7O01BU0U7SUFDRixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksaUNBQWUsRUFBRSxDQUFDO0FBQ2hELENBQUM7QUFuQkQsb0NBbUJDO0FBRUQsdUJBQThCLElBQUk7SUFDOUIsR0FBRyxHQUFVLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDekIsR0FBRyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7SUFDakIsR0FBRyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7QUFDckIsQ0FBQztBQUpELHNDQUlDO0FBRUQ7SUFDSSxHQUFHLENBQUMsT0FBTyxDQUFDO1FBQ1IsS0FBSyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFDO1FBQ3BCLFFBQVEsRUFBRSxJQUFJO0tBQ2pCLENBQUMsQ0FBQztBQUNQLENBQUM7QUFMRCxvQ0FLQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5JbiBOYXRpdmVTY3JpcHQsIGEgZmlsZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgYW4gWE1MIGZpbGUgaXMga25vd24gYXNcbmEgY29kZS1iZWhpbmQgZmlsZS4gVGhlIGNvZGUtYmVoaW5kIGlzIGEgZ3JlYXQgcGxhY2UgdG8gcGxhY2UgeW91ciB2aWV3XG5sb2dpYywgYW5kIHRvIHNldCB1cCB5b3VyIHBhZ2XigJlzIGRhdGEgYmluZGluZy5cbiovXG5cbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gJ3VpL2ltYWdlJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd1aS9wYWdlJztcbmltcG9ydCB7IEhlbGxvV29ybGRNb2RlbCB9IGZyb20gJy4vbWFpbi12aWV3LW1vZGVsJztcbmltcG9ydCB7IEFuaW1hdGlvbkN1cnZlIH0gZnJvbSBcInVpL2VudW1zXCI7XG5sZXQgaW1nOiBJbWFnZTtcblxuLy8gRXZlbnQgaGFuZGxlciBmb3IgUGFnZSBcIm5hdmlnYXRpbmdUb1wiIGV2ZW50IGF0dGFjaGVkIGluIG1haW4tcGFnZS54bWxcbmV4cG9ydCBmdW5jdGlvbiBuYXZpZ2F0aW5nVG8oYXJnczogRXZlbnREYXRhKSB7XG4gICAgLypcbiAgICBUaGlzIGdldHMgYSByZWZlcmVuY2UgdGhpcyBwYWdl4oCZcyA8UGFnZT4gVUkgY29tcG9uZW50LiBZb3UgY2FuXG4gICAgdmlldyB0aGUgQVBJIHJlZmVyZW5jZSBvZiB0aGUgUGFnZSB0byBzZWUgd2hhdOKAmXMgYXZhaWxhYmxlIGF0XG4gICAgaHR0cHM6Ly9kb2NzLm5hdGl2ZXNjcmlwdC5vcmcvYXBpLXJlZmVyZW5jZS9jbGFzc2VzL191aV9wYWdlXy5wYWdlLmh0bWxcbiAgICAqL1xuICAgIGxldCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG4gICAgXG4gICAgLypcbiAgICBBIHBhZ2XigJlzIGJpbmRpbmdDb250ZXh0IGlzIGFuIG9iamVjdCB0aGF0IHNob3VsZCBiZSB1c2VkIHRvIHBlcmZvcm1cbiAgICBkYXRhIGJpbmRpbmcgYmV0d2VlbiBYTUwgbWFya3VwIGFuZCBUeXBlU2NyaXB0IGNvZGUuIFByb3BlcnRpZXNcbiAgICBvbiB0aGUgYmluZGluZ0NvbnRleHQgY2FuIGJlIGFjY2Vzc2VkIHVzaW5nIHRoZSB7eyB9fSBzeW50YXggaW4gWE1MLlxuICAgIEluIHRoaXMgZXhhbXBsZSwgdGhlIHt7IG1lc3NhZ2UgfX0gYW5kIHt7IG9uVGFwIH19IGJpbmRpbmdzIGFyZSByZXNvbHZlZFxuICAgIGFnYWluc3QgdGhlIG9iamVjdCByZXR1cm5lZCBieSBjcmVhdGVWaWV3TW9kZWwoKS5cblxuICAgIFlvdSBjYW4gbGVhcm4gbW9yZSBhYm91dCBkYXRhIGJpbmRpbmcgaW4gTmF0aXZlU2NyaXB0IGF0XG4gICAgaHR0cHM6Ly9kb2NzLm5hdGl2ZXNjcmlwdC5vcmcvY29yZS1jb25jZXB0cy9kYXRhLWJpbmRpbmcuXG4gICAgKi9cbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gbmV3IEhlbGxvV29ybGRNb2RlbCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb25JbWFnZUxvYWRlZChhcmdzKSB7XG4gICAgaW1nID0gPEltYWdlPmFyZ3Mub2JqZWN0O1xuICAgIGltZy5zY2FsZVggPSAwLjI7XG4gICAgaW1nLnNjYWxlWSA9IDAuMjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFuaW1hdGVJbWFnZSgpIHtcbiAgICBpbWcuYW5pbWF0ZSh7XG4gICAgICAgIHNjYWxlOiB7IHg6IDIsIHk6IDJ9LCAgICBcbiAgICAgICAgZHVyYXRpb246IDEwMDBcbiAgICB9KTtcbn0iXX0=