System.register(["@angular/core", "./site-manage.service", "@angular/router"], function (exports_1, context_1) {
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
    var core_1, site_manage_service_1, router_1, EditSiteComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (site_manage_service_1_1) {
                site_manage_service_1 = site_manage_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }
        ],
        execute: function () {
            EditSiteComponent = (function () {
                function EditSiteComponent(siteService, route, router) {
                    this.siteService = siteService;
                    this.route = route;
                    this.router = router;
                    this.siteId = this.route.snapshot.params['id'];
                    var site = this.siteService.getSiteById(this.siteId);
                    this.siteName = site.name;
                }
                EditSiteComponent.prototype.save = function () {
                    this.siteService.saveSite({ id: this.siteId, name: this.siteName });
                    this.router.navigate(['/list']);
                };
                return EditSiteComponent;
            }());
            EditSiteComponent = __decorate([
                core_1.Component({
                    selector: 'edit-site',
                    templateUrl: 'app/edit-site.template.html'
                }),
                __metadata("design:paramtypes", [site_manage_service_1.SiteManageService,
                    router_1.ActivatedRoute,
                    router_1.Router])
            ], EditSiteComponent);
            exports_1("EditSiteComponent", EditSiteComponent);
        }
    };
});
//# sourceMappingURL=edit-site.component.js.map