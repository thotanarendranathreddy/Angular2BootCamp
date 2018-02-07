System.register(["@angular/core"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, LogComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            LogComponent = (function () {
                function LogComponent() {
                    this.submited = false;
                    this.specialDives = [
                        "Night dive",
                        "Deep dive",
                        "Cave dive"
                    ];
                    this.entry = {
                        site: 'Kovalam',
                        location: 'Kerala, India',
                        depth: 125,
                        time: 56,
                        isFavorite: true,
                        special: 'Deep dive'
                    };
                }
                LogComponent.prototype.submitForm = function () {
                    this.submited = true;
                };
                return LogComponent;
            }());
            LogComponent = __decorate([
                core_1.Component({
                    selector: 'dive-log-form',
                    templateUrl: 'app/dive-log-form.template.html'
                })
            ], LogComponent);
            exports_1("LogComponent", LogComponent);
        }
    };
});
//# sourceMappingURL=dive-log-form.component.js.map