"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
var observable_array_1 = require("data/observable-array");
var item_service_1 = require("./item.service");
var angular_1 = require("nativescript-telerik-ui-pro/chart/angular");
var ItemsComponent = (function () {
    function ItemsComponent(itemService) {
        this.itemService = itemService;
    }
    ItemsComponent.prototype.ngOnInit = function () {
        // this.test1(); //works fine
        this.test2(); //does not work
        // this.test3(); //does not work
    };
    //works fine
    ItemsComponent.prototype.test1 = function () {
        this.categoricalSource = new observable_array_1.ObservableArray([
            { Country: "Germany", Amount: 15, SecondVal: 14, ThirdVal: 24, Impact: 0, Year: 0 },
            { Country: "France", Amount: 13, SecondVal: 23, ThirdVal: 25, Impact: 0, Year: 0 },
            { Country: "Bulgaria", Amount: 24, SecondVal: 17, ThirdVal: 23, Impact: 0, Year: 0 },
            { Country: "Spain", Amount: 11, SecondVal: 19, ThirdVal: 24, Impact: 0, Year: 0 },
            { Country: "USA", Amount: 18, SecondVal: 8, ThirdVal: 21, Impact: 0, Year: 0 }
        ]);
    };
    //does not work
    ItemsComponent.prototype.test2 = function () {
        var _this = this;
        setTimeout(function () {
            _this.categoricalSource = new observable_array_1.ObservableArray([
                { Country: "Austria", Amount: 15, SecondVal: 14, ThirdVal: 24, Impact: 0, Year: 0 },
                { Country: "Romania", Amount: 13, SecondVal: 23, ThirdVal: 25, Impact: 0, Year: 0 },
                { Country: "Pery", Amount: 24, SecondVal: 17, ThirdVal: 23, Impact: 0, Year: 0 },
                { Country: "Brazil", Amount: 11, SecondVal: 19, ThirdVal: 24, Impact: 0, Year: 0 },
                { Country: "China", Amount: 18, SecondVal: 8, ThirdVal: 21, Impact: 0, Year: 0 }
            ]);
        });
        console.log(this.chart.nativeElement);
        console.log(this.chart.cartesianChart);
        console.log(this.chart.cartesianChart.palettes); // undefiend
        console.log(this.chart.cartesianChart.series); // undefined
    };
    //does not work
    ItemsComponent.prototype.test3 = function () {
        var _this = this;
        Observable_1.Observable.create(function (observer) {
            setTimeout(function () {
                observer.next([
                    { Country: "Honduras", Amount: 15, SecondVal: 14, ThirdVal: 24, Impact: 0, Year: 0 },
                    { Country: "Sudan", Amount: 13, SecondVal: 23, ThirdVal: 25, Impact: 0, Year: 0 },
                    { Country: "Australia", Amount: 24, SecondVal: 17, ThirdVal: 23, Impact: 0, Year: 0 },
                    { Country: "Canada", Amount: 11, SecondVal: 19, ThirdVal: 24, Impact: 0, Year: 0 },
                    { Country: "Russia", Amount: 18, SecondVal: 8, ThirdVal: 21, Impact: 0, Year: 0 }
                ]);
            }, 1000);
        }).subscribe(function (res) {
            _this.categoricalSource = res;
        });
    };
    return ItemsComponent;
}());
__decorate([
    core_1.ViewChild("chart"),
    __metadata("design:type", angular_1.RadCartesianChartComponent)
], ItemsComponent.prototype, "chart", void 0);
ItemsComponent = __decorate([
    core_1.Component({
        selector: "ns-items",
        moduleId: module.id,
        templateUrl: "./items.component.html",
    }),
    __metadata("design:paramtypes", [item_service_1.ItemService])
], ItemsComponent);
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlFO0FBRXpFLDhDQUE2RDtBQUM3RCwwREFBd0Q7QUFHeEQsK0NBQTZDO0FBRTdDLHFFQUFzRjtBQU90RixJQUFhLGNBQWM7SUFNdkIsd0JBQW9CLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBQUksQ0FBQztJQUVqRCxpQ0FBUSxHQUFSO1FBQ0ksNkJBQTZCO1FBQzdCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLGVBQWU7UUFDN0IsZ0NBQWdDO0lBR3BDLENBQUM7SUFFRCxZQUFZO0lBQ1osOEJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLGtDQUFlLENBQUM7WUFDekMsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRTtZQUNuRixFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFO1lBQ2xGLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUU7WUFDcEYsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLE1B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RSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRTtvQkFDbEYsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRTtpQkFDcEYsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2IsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsR0FBRztZQUNiLEtBQUksQ0FBQyxpQkFBaUIsR0FBRyxHQUFHLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBR0wscUJBQUM7QUFBRCxDQUFDLEFBL0RELElBK0RDO0FBM0R1QjtJQUFuQixnQkFBUyxDQUFDLE9BQU8sQ0FBQzs4QkFBUSxvQ0FBMEI7NkNBQUM7QUFKN0MsY0FBYztJQUwxQixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFVBQVU7UUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSx3QkFBd0I7S0FDeEMsQ0FBQztxQ0FPbUMsMEJBQVc7R0FObkMsY0FBYyxDQStEMUI7QUEvRFksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSBhcyBSeE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tICdkYXRhL29ic2VydmFibGUtYXJyYXknO1xuXG5pbXBvcnQgeyBJdGVtIH0gZnJvbSBcIi4vaXRlbVwiO1xuaW1wb3J0IHsgSXRlbVNlcnZpY2UgfSBmcm9tIFwiLi9pdGVtLnNlcnZpY2VcIjtcbmltcG9ydCB7IEJhclNlcmllcyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdGVsZXJpay11aS1wcm8vY2hhcnRcIlxuaW1wb3J0IHsgUmFkQ2FydGVzaWFuQ2hhcnRDb21wb25lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXRlbGVyaWstdWktcHJvL2NoYXJ0L2FuZ3VsYXJcIlxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1pdGVtc1wiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9pdGVtcy5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBJdGVtc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgaXRlbXM6IEl0ZW1bXTtcbiAgICBjYXRlZ29yaWNhbFNvdXJjZTogT2JzZXJ2YWJsZUFycmF5PGFueT47XG5cbiAgICBAVmlld0NoaWxkKFwiY2hhcnRcIikgY2hhcnQ6IFJhZENhcnRlc2lhbkNoYXJ0Q29tcG9uZW50O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBpdGVtU2VydmljZTogSXRlbVNlcnZpY2UpIHsgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIC8vIHRoaXMudGVzdDEoKTsgLy93b3JrcyBmaW5lXG4gICAgICAgIHRoaXMudGVzdDIoKTsgLy9kb2VzIG5vdCB3b3JrXG4gICAgICAgIC8vIHRoaXMudGVzdDMoKTsgLy9kb2VzIG5vdCB3b3JrXG5cbiAgICAgICAgXG4gICAgfVxuXG4gICAgLy93b3JrcyBmaW5lXG4gICAgdGVzdDEoKSB7XG4gICAgICAgIHRoaXMuY2F0ZWdvcmljYWxTb3VyY2UgPSBuZXcgT2JzZXJ2YWJsZUFycmF5KFtcbiAgICAgICAgICAgIHsgQ291bnRyeTogXCJHZXJtYW55XCIsIEFtb3VudDogMTUsIFNlY29uZFZhbDogMTQsIFRoaXJkVmFsOiAyNCwgSW1wYWN0OiAwLCBZZWFyOiAwIH0sXG4gICAgICAgICAgICB7IENvdW50cnk6IFwiRnJhbmNlXCIsIEFtb3VudDogMTMsIFNlY29uZFZhbDogMjMsIFRoaXJkVmFsOiAyNSwgSW1wYWN0OiAwLCBZZWFyOiAwIH0sXG4gICAgICAgICAgICB7IENvdW50cnk6IFwiQnVsZ2FyaWFcIiwgQW1vdW50OiAyNCwgU2Vjb25kVmFsOiAxNywgVGhpcmRWYWw6IDIzLCBJbXBhY3Q6IDAsIFllYXI6IDAgfSxcbiAgICAgICAgICAgIHsgQ291bnRyeTogXCJTcGFpblwiLCBBbW91bnQ6IDExLCBTZWNvbmRWYWw6IDE5LCBUaGlyZFZhbDogMjQsIEltcGFjdDogMCwgWWVhcjogMCB9LFxuICAgICAgICAgICAgeyBDb3VudHJ5OiBcIlVTQVwiLCBBbW91bnQ6IDE4LCBTZWNvbmRWYWw6IDgsIFRoaXJkVmFsOiAyMSwgSW1wYWN0OiAwLCBZZWFyOiAwIH1cbiAgICAgICAgXSk7XG4gICAgfVxuXG4gICAgLy9kb2VzIG5vdCB3b3JrXG4gICAgdGVzdDIoKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jYXRlZ29yaWNhbFNvdXJjZSA9IG5ldyBPYnNlcnZhYmxlQXJyYXkoW1xuICAgICAgICAgICAgICAgIHsgQ291bnRyeTogXCJBdXN0cmlhXCIsIEFtb3VudDogMTUsIFNlY29uZFZhbDogMTQsIFRoaXJkVmFsOiAyNCwgSW1wYWN0OiAwLCBZZWFyOiAwIH0sXG4gICAgICAgICAgICAgICAgeyBDb3VudHJ5OiBcIlJvbWFuaWFcIiwgQW1vdW50OiAxMywgU2Vjb25kVmFsOiAyMywgVGhpcmRWYWw6IDI1LCBJbXBhY3Q6IDAsIFllYXI6IDAgfSxcbiAgICAgICAgICAgICAgICB7IENvdW50cnk6IFwiUGVyeVwiLCBBbW91bnQ6IDI0LCBTZWNvbmRWYWw6IDE3LCBUaGlyZFZhbDogMjMsIEltcGFjdDogMCwgWWVhcjogMCB9LFxuICAgICAgICAgICAgICAgIHsgQ291bnRyeTogXCJCcmF6aWxcIiwgQW1vdW50OiAxMSwgU2Vjb25kVmFsOiAxOSwgVGhpcmRWYWw6IDI0LCBJbXBhY3Q6IDAsIFllYXI6IDAgfSxcbiAgICAgICAgICAgICAgICB7IENvdW50cnk6IFwiQ2hpbmFcIiwgQW1vdW50OiAxOCwgU2Vjb25kVmFsOiA4LCBUaGlyZFZhbDogMjEsIEltcGFjdDogMCwgWWVhcjogMCB9XG4gICAgICAgICAgICBdKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc29sZS5sb2codGhpcy5jaGFydC5uYXRpdmVFbGVtZW50KTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5jaGFydC5jYXJ0ZXNpYW5DaGFydCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY2hhcnQuY2FydGVzaWFuQ2hhcnQucGFsZXR0ZXMpOyAvLyB1bmRlZmllbmRcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5jaGFydC5jYXJ0ZXNpYW5DaGFydC5zZXJpZXMpOyAvLyB1bmRlZmluZWRcbiAgICB9XG5cbiAgICAvL2RvZXMgbm90IHdvcmtcbiAgICB0ZXN0MygpIHtcbiAgICAgICAgUnhPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXIpID0+IHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQoW1xuICAgICAgICAgICAgICAgICAgICB7IENvdW50cnk6IFwiSG9uZHVyYXNcIiwgQW1vdW50OiAxNSwgU2Vjb25kVmFsOiAxNCwgVGhpcmRWYWw6IDI0LCBJbXBhY3Q6IDAsIFllYXI6IDAgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBDb3VudHJ5OiBcIlN1ZGFuXCIsIEFtb3VudDogMTMsIFNlY29uZFZhbDogMjMsIFRoaXJkVmFsOiAyNSwgSW1wYWN0OiAwLCBZZWFyOiAwIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgQ291bnRyeTogXCJBdXN0cmFsaWFcIiwgQW1vdW50OiAyNCwgU2Vjb25kVmFsOiAxNywgVGhpcmRWYWw6IDIzLCBJbXBhY3Q6IDAsIFllYXI6IDAgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBDb3VudHJ5OiBcIkNhbmFkYVwiLCBBbW91bnQ6IDExLCBTZWNvbmRWYWw6IDE5LCBUaGlyZFZhbDogMjQsIEltcGFjdDogMCwgWWVhcjogMCB9LFxuICAgICAgICAgICAgICAgICAgICB7IENvdW50cnk6IFwiUnVzc2lhXCIsIEFtb3VudDogMTgsIFNlY29uZFZhbDogOCwgVGhpcmRWYWw6IDIxLCBJbXBhY3Q6IDAsIFllYXI6IDAgfVxuICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgIH0pLnN1YnNjcmliZSgocmVzKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNhdGVnb3JpY2FsU291cmNlID0gcmVzO1xuICAgICAgICB9KTtcbiAgICB9XG5cblxufSJdfQ==