System.register(["@angular/core", "./site-manage.service"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, site_manage_service_1, AppComponent;
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
            AppComponent = (function () {
                function AppComponent() {
                    this.currentView = 'list';
                    //		startAdd(){
                    //		this.newSiteId = this.sites.map(s => s.id)
                    //		.reduce((p,c) => p <c ? c : p) +1;
                    //		this.navigateTo('add');
                    //		}
                    //
                    //		siteAdded(newSiteName: string){
                    //		this.sites.push({id: this.newSiteId, name: newSiteName});
                    //		this.navigateTo('list');
                    //
                    //		}
                    //		startEdit(site: DiveSite){
                    //		this.currentSite={id: site.id, name: site.name}
                    //		this.navigateTo('edit');
                    //		}
                    //		siteSaved(site: DiveSite){
                    //		let oldSite = this.sites.filter(s=> s.id == site.id)[0];
                    //		if(oldSite){
                    //		oldSite.name=site.name;
                    //		         }
                    //		this.navigateTo('list');
                    //		}
                    //		startDelete(site: DiveSite){
                    //let index=this.sites.indexOf(site);
                    //		this.sites.splice(index,1);
                    //
                    //		}
                }
                AppComponent.prototype.navigateTo = function (view) {
                    this.currentView = view;
                };
                return AppComponent;
            }());
            AppComponent = __decorate([
                core_1.Component({
                    selector: 'my-app',
                    template: "\n  <div class=\"jumbotron\">\n  <div class=\"container\">\n  <div class=\"container-fluid\">\n  <h1> Dive Site Maintainance </h1>\n  <site-list-view *ngIf=\"currentView=='list'\"\n\t\t\t\t  (onAdd)=\"navigateTo('add')\"\n\t\t\t\t  (onEdit)=\"siteId=$event; navigateTo('edit')\"\n\t\t\t\t  >\n  </site-list-view>\n  <add-site *ngIf=\"currentView=='add'\"\n  \t\t\t\t   (onClosed)=\"navigateTo('list')\">\n                   <!--[siteId]=\"newSiteId\"-->\n\t\t\t\t   <!--(onAdded)=\"siteAdded($event)\"-->\n\t\t\t\t   <!--(onCancel)=\"navigateTo('list')\">-->\n  </add-site>\n  <edit-site *ngIf=\"currentView=='edit'\"\n  \t\t\t\t\t[siteId]=\"siteId\"\n  \t\t\t\t\t(onClosed)=\"navigateTo('list')\">\n                   <!--[site]=\"currentSite\"-->\n\t\t\t\t   <!--(onSaved)=\"siteSaved($event)\"-->\n\t\t\t\t   <!--(onCancel)=\"navigateTo('list')\">-->\n  </edit-site>\n  </div></div></div>\n  ",
                    providers: [site_manage_service_1.SiteManageService]
                })
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
        }
    };
});
//# sourceMappingURL=app.component.js.map