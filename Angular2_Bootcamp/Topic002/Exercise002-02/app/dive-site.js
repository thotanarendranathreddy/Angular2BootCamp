System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var DiveSite;
    return {
        setters: [],
        execute: function () {
            DiveSite = (function () {
                function DiveSite() {
                }
                return DiveSite;
            }());
            DiveSite.FavoriteSites = [
                { id: 1, name: 'First Site' },
                { id: 2, name: 'Second Site' },
                { id: 3, name: 'Third Site' },
                { id: 4, name: 'Fourth Site' }
            ];
            exports_1("DiveSite", DiveSite);
        }
    };
});
//# sourceMappingURL=dive-site.js.map