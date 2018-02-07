System.register(["@angular/core", "@angular/platform-browser", "@angular/http", "./dive-log.component", "./dive-log-entry", "./dive-log-api.service"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, platform_browser_1, http_1, dive_log_component_1, dive_log_entry_1, dive_log_api_service_1, AppModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (dive_log_component_1_1) {
                dive_log_component_1 = dive_log_component_1_1;
            },
            function (dive_log_entry_1_1) {
                dive_log_entry_1 = dive_log_entry_1_1;
            },
            function (dive_log_api_service_1_1) {
                dive_log_api_service_1 = dive_log_api_service_1_1;
            }
        ],
        execute: function () {
            AppModule = (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = __decorate([
                core_1.NgModule({
                    imports: [platform_browser_1.BrowserModule, http_1.HttpModule],
                    declarations: [dive_log_component_1.DiveLogComponent, dive_log_entry_1.DiveLogEntry],
                    bootstrap: [dive_log_component_1.DiveLogComponent],
                    providers: [dive_log_api_service_1.DiveLogApi]
                })
            ], AppModule);
            exports_1("AppModule", AppModule);
        }
    };
});
//# sourceMappingURL=app.module.js.map