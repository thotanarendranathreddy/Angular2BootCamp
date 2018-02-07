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
    var core_1, router_1, site_manage_service_1, SiteListComponent;
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
            SiteListComponent = (function () {
                function SiteListComponent(siteService, router) {
                    this.siteService = siteService;
                    this.router = router;
                    this.onAdd = new core_1.EventEmitter();
                    this.onEdit = new core_1.EventEmitter();
                }
                SiteListComponent.prototype.getAll = function () {
                    this.sites = this.siteService.getAllSites();
                };
                SiteListComponent.prototype.add = function () {
                    this.onAdd.emit(null);
                };
                SiteListComponent.prototype.edit = function (siteId) {
                    this.router.navigate(['/edit', siteId]);
                };
                SiteListComponent.prototype.delete = function (site) {
                    alert("Are You Sure You Want to Delete");
                    this.siteService.deleteSite(site);
                    this.getAll();
                };
                return SiteListComponent;
            }());
            __decorate([
                core_1.Output(),
                __metadata("design:type", Object)
            ], SiteListComponent.prototype, "onAdd", void 0);
            __decorate([
                core_1.Output(),
                __metadata("design:type", Object)
            ], SiteListComponent.prototype, "onEdit", void 0);
            SiteListComponent = __decorate([
                core_1.Component({
                    selector: 'site-list-view',
                    templateUrl: 'app/site-list.template.html'
                }),
                __metadata("design:paramtypes", [site_manage_service_1.SiteManageService, router_1.Router])
            ], SiteListComponent);
            exports_1("SiteListComponent", SiteListComponent);
        }
    };
});
//# sourceMappingURL=Site-List.component.js.map