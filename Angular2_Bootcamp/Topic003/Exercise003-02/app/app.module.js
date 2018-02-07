System.register(["@angular/core", "@angular/platform-browser", "./app.component", "./Site-List.component", "./add-site.component", "./edit-site.component", "./app.routes"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, platform_browser_1, app_component_1, Site_List_component_1, add_site_component_1, edit_site_component_1, app_routes_1, AppModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (Site_List_component_1_1) {
                Site_List_component_1 = Site_List_component_1_1;
            },
            function (add_site_component_1_1) {
                add_site_component_1 = add_site_component_1_1;
            },
            function (edit_site_component_1_1) {
                edit_site_component_1 = edit_site_component_1_1;
            },
            function (app_routes_1_1) {
                app_routes_1 = app_routes_1_1;
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
                    imports: [platform_browser_1.BrowserModule, app_routes_1.routingModule],
                    declarations: [app_component_1.AppComponent, Site_List_component_1.SiteListComponent, add_site_component_1.AddSiteComponent, edit_site_component_1.EditSiteComponent],
                    bootstrap: [app_component_1.AppComponent]
                })
            ], AppModule);
            exports_1("AppModule", AppModule);
        }
    };
});
//# sourceMappingURL=app.module.js.map