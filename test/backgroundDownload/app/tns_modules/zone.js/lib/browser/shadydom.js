/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Zone.__load_patch('shadydom', function (global, Zone, api) {
    // https://github.com/angular/zone.js/issues/782
    // in web components, shadydom will patch addEventListener/removeEventListener of
    // Node.prototype and WindowPrototype, this will have conflict with zone.js
    // so zone.js need to patch them again.
    var windowPrototype = Object.getPrototypeOf(window);
    if (windowPrototype && windowPrototype.hasOwnProperty('addEventListener')) {
        windowPrototype[Zone.__symbol__('addEventListener')] = null;
        windowPrototype[Zone.__symbol__('removeEventListener')] = null;
        api.patchEventTargetMethods(windowPrototype);
    }
    if (Node.prototype.hasOwnProperty('addEventListener')) {
        Node.prototype[Zone.__symbol__('addEventListener')] = null;
        Node.prototype[Zone.__symbol__('removeEventListener')] = null;
        api.patchEventTargetMethods(Node.prototype);
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhZHlkb20uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzaGFkeWRvbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFDSCxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxVQUFDLE1BQVcsRUFBRSxJQUFjLEVBQUUsR0FBaUI7SUFDM0UsZ0RBQWdEO0lBQ2hELGlGQUFpRjtJQUNqRiwyRUFBMkU7SUFDM0UsdUNBQXVDO0lBQ3ZDLElBQU0sZUFBZSxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEQsRUFBRSxDQUFDLENBQUMsZUFBZSxJQUFJLGVBQWUsQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekUsZUFBdUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDcEUsZUFBdUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDeEUsR0FBRyxDQUFDLHVCQUF1QixDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFDRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsU0FBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDbkUsSUFBSSxDQUFDLFNBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ3ZFLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDOUMsQ0FBQztBQUNILENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuWm9uZS5fX2xvYWRfcGF0Y2goJ3NoYWR5ZG9tJywgKGdsb2JhbDogYW55LCBab25lOiBab25lVHlwZSwgYXBpOiBfWm9uZVByaXZhdGUpID0+IHtcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvem9uZS5qcy9pc3N1ZXMvNzgyXG4gIC8vIGluIHdlYiBjb21wb25lbnRzLCBzaGFkeWRvbSB3aWxsIHBhdGNoIGFkZEV2ZW50TGlzdGVuZXIvcmVtb3ZlRXZlbnRMaXN0ZW5lciBvZlxuICAvLyBOb2RlLnByb3RvdHlwZSBhbmQgV2luZG93UHJvdG90eXBlLCB0aGlzIHdpbGwgaGF2ZSBjb25mbGljdCB3aXRoIHpvbmUuanNcbiAgLy8gc28gem9uZS5qcyBuZWVkIHRvIHBhdGNoIHRoZW0gYWdhaW4uXG4gIGNvbnN0IHdpbmRvd1Byb3RvdHlwZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih3aW5kb3cpO1xuICBpZiAod2luZG93UHJvdG90eXBlICYmIHdpbmRvd1Byb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSgnYWRkRXZlbnRMaXN0ZW5lcicpKSB7XG4gICAgKHdpbmRvd1Byb3RvdHlwZSBhcyBhbnkpW1pvbmUuX19zeW1ib2xfXygnYWRkRXZlbnRMaXN0ZW5lcicpXSA9IG51bGw7XG4gICAgKHdpbmRvd1Byb3RvdHlwZSBhcyBhbnkpW1pvbmUuX19zeW1ib2xfXygncmVtb3ZlRXZlbnRMaXN0ZW5lcicpXSA9IG51bGw7XG4gICAgYXBpLnBhdGNoRXZlbnRUYXJnZXRNZXRob2RzKHdpbmRvd1Byb3RvdHlwZSk7XG4gIH1cbiAgaWYgKE5vZGUucHJvdG90eXBlLmhhc093blByb3BlcnR5KCdhZGRFdmVudExpc3RlbmVyJykpIHtcbiAgICAoTm9kZS5wcm90b3R5cGUgYXMgYW55KVtab25lLl9fc3ltYm9sX18oJ2FkZEV2ZW50TGlzdGVuZXInKV0gPSBudWxsO1xuICAgIChOb2RlLnByb3RvdHlwZSBhcyBhbnkpW1pvbmUuX19zeW1ib2xfXygncmVtb3ZlRXZlbnRMaXN0ZW5lcicpXSA9IG51bGw7XG4gICAgYXBpLnBhdGNoRXZlbnRUYXJnZXRNZXRob2RzKE5vZGUucHJvdG90eXBlKTtcbiAgfVxufSk7Il19