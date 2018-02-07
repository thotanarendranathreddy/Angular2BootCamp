System.register(["@angular/router", "./Site-List.component", "./edit-site.component", "./add-site.component"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, Site_List_component_1, edit_site_component_1, add_site_component_1, routes, routingModule;
    return {
        setters: [
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (Site_List_component_1_1) {
                Site_List_component_1 = Site_List_component_1_1;
            },
            function (edit_site_component_1_1) {
                edit_site_component_1 = edit_site_component_1_1;
            },
            function (add_site_component_1_1) {
                add_site_component_1 = add_site_component_1_1;
            }
        ],
        execute: function () {
            routes = [
                { path: 'list', component: Site_List_component_1.SiteListComponent },
                { path: 'add', component: add_site_component_1.AddSiteComponent },
                { path: 'edit/:id', component: edit_site_component_1.EditSiteComponent },
                { path: '', redirectTo: 'list', pathMatch: 'full' }
            ];
            exports_1("routingModule", routingModule = router_1.RouterModule.forRoot(routes));
        }
    };
});
//# sourceMappingURL=app.routes.js.map