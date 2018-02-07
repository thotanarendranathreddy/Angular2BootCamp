System.register(["@angular/core", "./site-manage.service"], function (exports_1, context_1) {
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
    var core_1, site_manage_service_1, SiteListComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (site_manage_service_1_1) {
                site_manage_service_1 = site_manage_service_1_1;
            }
        ],
        execute: function () {
            SiteListComponent = (function () {
                function SiteListComponent(siteService) {
                    this.siteService = siteService;
                    this.onAdd = new core_1.EventEmitter();
                    this.onEdit = new core_1.EventEmitter();
                    this.sites = siteService.getAllSites();
                }
                SiteListComponent.prototype.add = function () {
                    this.onAdd.emit(null);
                };
                SiteListComponent.prototype.edit = function (siteId) {
                    this.onEdit.emit(siteId);
                };
                SiteListComponent.prototype.delete = function (siteId) {
                    this.siteService.deleteSite(siteId);
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
                __metadata("design:paramtypes", [site_manage_service_1.SiteManageService])
            ], SiteListComponent);
            exports_1("SiteListComponent", SiteListComponent);
        }
    };
});
//# sourceMappingURL=Site-List.component.js.map