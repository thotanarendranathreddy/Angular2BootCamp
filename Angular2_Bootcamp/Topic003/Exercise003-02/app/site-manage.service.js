System.register(["@angular/core", "./dive-site"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, dive_site_1, SiteManageService;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (dive_site_1_1) {
                dive_site_1 = dive_site_1_1;
            }
        ],
        execute: function () {
            SiteManageService = (function () {
                function SiteManageService() {
                    this._sites = dive_site_1.DiveSite.FavoriteSites.slice(0);
                }
                SiteManageService.prototype.getAllSites = function () {
                    return this._sites.slice(0);
                };
                SiteManageService.prototype.getSiteById = function (id) {
                    var site = this._sites.filter(function (s) { return s.id == id; })[0];
                    return site ? { id: site.id, name: site.name } : null;
                };
                SiteManageService.prototype.addSite = function (newSite) {
                    newSite.id = this._sites.map(function (s) { return s.id; })
                        .reduce(function (p, c) { return p < c ? c : p; }) + 1;
                    this._sites.push(newSite);
                };
                SiteManageService.prototype.saveSite = function (site) {
                    var oldSite = this._sites.filter(function (s) { return s.id == site.id; })[0];
                    if (oldSite) {
                        oldSite.name = site.name;
                    }
                };
                SiteManageService.prototype.deleteSite = function (site) {
                    var siteIndex = this._sites.indexOf(site);
                    this._sites.splice(siteIndex, 1);
                };
                return SiteManageService;
            }());
            SiteManageService = __decorate([
                core_1.Injectable()
            ], SiteManageService);
            exports_1("SiteManageService", SiteManageService);
        }
    };
});
//# sourceMappingURL=site-manage.service.js.map