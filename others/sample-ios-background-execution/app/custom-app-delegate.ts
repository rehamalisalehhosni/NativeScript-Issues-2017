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
        this.timer = NSTimer.scheduledTimerWithTimeIntervalTargetSelectorUserInfoRepeats(1.00, this, "runOnBackground", null, true); // NSTimer interval of 1 second
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
        console.log("End of background task. current timerCount:");
    }

    public runOnBackground(): void {
        
        if (this.timerCounter <= 0) {
            console.log("FIVE MINUTES PASSED - Execute the code here!");
            // Apple is not allowing any applicaiton to be bringed back to foreground without user interaction.
            // The code taht can be executed here is described by APple guidelines
            // You can also send notification from which the user can tap and bring the app to foreground manually.

            // IMPORTANT: in the newer iOS versions beginBackgroundTaskWithNameExpirationHandler will give you only 3 minutes to run your task (compared to 10 minutes in older iOS versions)
            // This is the longest amount of time that App;e are allowing for background task to execute. Using the timer you will notice taht you actually have about 174-175 seconds/

            this.endBackgroundTask(); // in this case the background task will be stopped and the timer will be reset via our timerCounter variable
            return;
        }
        console.log(`${this.timerCounter} (the app is on background)`);
        this.timerCounter--;
    }
}