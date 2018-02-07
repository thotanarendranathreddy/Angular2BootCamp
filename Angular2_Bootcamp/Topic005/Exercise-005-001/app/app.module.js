System.register(["@angular/core", "@angular/platform-browser", "./dive-gear.component", "./gear-item.component", "./selectable.directive"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, platform_browser_1, dive_gear_component_1, gear_item_component_1, selectable_directive_1, AppModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (dive_gear_component_1_1) {
                dive_gear_component_1 = dive_gear_component_1_1;
            },
            function (gear_item_component_1_1) {
                gear_item_component_1 = gear_item_component_1_1;
            },
            function (selectable_directive_1_1) {
                selectable_directive_1 = selectable_directive_1_1;
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
                    imports: [platform_browser_1.BrowserModule],
                    declarations: [dive_gear_component_1.DiveGearComponent, gear_item_component_1.GearItemComponent, selectable_directive_1.SelectableDirective],
                    bootstrap: [dive_gear_component_1.DiveGearComponent]
                })
            ], AppModule);
            exports_1("AppModule", AppModule);
        }
    };
});
//# sourceMappingURL=app.module.js.map