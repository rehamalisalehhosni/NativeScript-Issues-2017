import { ios } from "utils/utils";

export class CustomAppDelegate extends UIResponder implements UIApplicationDelegate {
    public static ObjCProtocols = [UIApplicationDelegate];
    public static ObjCExposedMethods = {
        "runOnBackground": { returns: interop.types.void }
    };

    private bgTask;
    private timer;
    private timerCounter;

    public applicationDidEnterBackground(application: UIApplication) {
        console.log("Enter background");
        this.bgTask = application.beginBackgroundTaskWithNameExpirationHandler("MyTask", () => {
            this.endBackgroundTask();
        });

        this.timerCounter = 5 * 60; // use this counter for 5 minutes X 60 seconds each
        console.log("Start logging numbers on background.");
        this.timer = NSTimer.scheduledTimerWithTimeIntervalTargetSelectorUserInfoRepeats(1.00
        , this, "runOnBackground", null, true); // NSTimer interval of 1 second
    }

    public applicationDidFinishLaunchingWithOptions(application: UIApplication, launchOptions: NSDictionary): boolean {
        return true;
    }

    private endBackgroundTask(): void {
        if (this.timer) {
            this.timer.invalidate();
            this.timer = null;
        }
        this.timerCounter = 5 * 60; // reset the counter

        var app = ios.getter(UIApplication, UIApplication.sharedApplication);
        app.endBackgroundTask(this.bgTask);

        this.bgTask = UIBackgroundTaskInvalid;
        console.log("End of background task.");
    }

    public runOnBackground(): void {
        if (this.timerCounter <= 0) {
            console.log("FIVE MINUTES PASSED - Execute the code here!");

            this.endBackgroundTask(); // in this case the background task will be stopped and the timer will be reset via our timerCounter variable
            return;
        }
        console.log(`${this.timerCounter} (the app is on background)`);
        this.timerCounter--;
    }
}