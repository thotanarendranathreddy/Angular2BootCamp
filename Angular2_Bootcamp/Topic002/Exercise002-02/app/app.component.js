System.register(["@angular/core", "./dive-site"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, dive_site_1, AppComponent;
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
            AppComponent = (function () {
                function AppComponent() {
                    this.sites = dive_site_1.DiveSite.FavoriteSites.slice(0);
                    this.currentView = 'list';
                }
                AppComponent.prototype.navigateTo = function (view) {
                    this.currentView = view;
                };
                AppComponent.prototype.startAdd = function () {
                    this.newSiteId = this.sites.map(function (s) { return s.id; })
                        .reduce(function (p, c) { return p < c ? c : p; }) + 1;
                    this.navigateTo('add');
                };
                AppComponent.prototype.siteAdded = function (newSiteName) {
                    this.sites.push({ id: this.newSiteId, name: newSiteName });
                    this.navigateTo('list');
                };
                AppComponent.prototype.startEdit = function (site) {
                    this.currentSite = { id: site.id, name: site.name };
                    this.navigateTo('edit');
                };
                AppComponent.prototype.siteSaved = function (site) {
                    var oldSite = this.sites.filter(function (s) { return s.id == site.id; })[0];
                    if (oldSite) {
                        oldSite.name = site.name;
                    }
                    this.navigateTo('list');
                };
                AppComponent.prototype.startDelete = function (site) {
                    var index = this.sites.indexOf(site);
                    this.sites.splice(index, 1);
                };
                return AppComponent;
            }());
            AppComponent = __decorate([
                core_1.Component({
                    selector: 'my-app',
                    template: "\n  <div class=\"jumbotron\">\n  <div class=\"container\">\n  <div class=\"container-fluid\">\n  <h1> Dive Site Maintainance </h1>\n  <site-list-view *ngIf=\"currentView=='list'\" \n\t\t\t\t  [sites]=\"sites\" \n\t\t\t\t  (onAdd)=\"startAdd()\"\n\t\t\t\t  (onEdit)=\"startEdit($event)\"\n\t\t\t\t  (onDelete)=\"startDelete($event)\">\n  </site-list-view>\n  <add-site *ngIf=\"currentView=='add'\"\n                   [siteId]=\"newSiteId\"\n\t\t\t\t   (onAdded)=\"siteAdded($event)\"\n\t\t\t\t   (onCancel)=\"navigateTo('list')\">\n  </add-site>\n  <edit-site *ngIf=\"currentView=='edit'\"\n                   [site]=\"currentSite\"\n\t\t\t\t   (onSaved)=\"siteSaved($event)\"\n\t\t\t\t   (onCancel)=\"navigateTo('list')\">\n  </edit-site>\n  </div></div></div>\n  "
                })
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
        }
    };
});
//# sourceMappingURL=app.component.js.map