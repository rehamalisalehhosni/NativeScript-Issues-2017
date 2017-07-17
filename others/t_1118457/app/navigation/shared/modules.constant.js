"use strict";
/// modules imports
var aboutView_module_1 = require("../../modules/aboutView/aboutView.module");
var notificationView_module_1 = require("../../modules/notificationView/notificationView.module");
var scanQrcodeView_module_1 = require("../../modules/scanQrcodeView/scanQrcodeView.module");
var requestView_module_1 = require("../../modules/requestView/requestView.module");
//import { HomeViewModule } from "../../modules/homeView/homeView.module";
var authenticationView_module_1 = require("../../modules/authenticationView/authenticationView.module");
exports.MODULES = [
    /// start modules declaration
    aboutView_module_1.AboutViewModule,
    notificationView_module_1.NotificationViewModule,
    scanQrcodeView_module_1.ScanQrcodeViewModule,
    requestView_module_1.RequestViewModule,
    //HomeViewModule,
    authenticationView_module_1.AuthenticationViewModule
];
