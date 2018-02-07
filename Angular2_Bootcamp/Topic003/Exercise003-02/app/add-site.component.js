System.register(["@angular/core", "@angular/router", "./site-manage.service"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, router_1, site_manage_service_1, AddSiteComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (site_manage_service_1_1) {
                site_manage_service_1 = site_manage_service_1_1;
            }
        ],
        execute: function () {
            AddSiteComponent = (function () {
                function AddSiteComponent(siteService, router) {
                    this.siteService = siteService;
                    this.router = router;
                    this.onClosed = new core_1.EventEmitter();
                }
                AddSiteComponent.prototype.add = function () {
                    this.siteService.addSite({ id: 0, name: this.siteName });
                    this.router.navigate(['/list']);
                };
                return AddSiteComponent;
            }());
            __decorate([
                core_1.Output(),
                __metadata("design:type", Object)
            ], AddSiteComponent.prototype, "onClosed", void 0);
            AddSiteComponent = __decorate([
                core_1.Component({
                    selector: 'add-site',
                    templateUrl: 'app/add-site.template.html'
                }),
                __metadata("design:paramtypes", [site_manage_service_1.SiteManageService, router_1.Router])
            ], AddSiteComponent);
            exports_1("AddSiteComponent", AddSiteComponent);
        }
    };
});
//# sourceMappingURL=add-site.component.js.map