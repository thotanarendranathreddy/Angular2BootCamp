System.register(["@angular/core"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, DiveGearComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            DiveGearComponent = (function () {
                function DiveGearComponent() {
                    this.gearItems = [
                        { id: 1, name: 'Technisub Look mask' },
                        { id: 2, name: 'Cressy fins' },
                        { id: 3, name: 'Aqualung Tech Suit' },
                        { id: 4, name: 'Oceanic Pro BCD' },
                        { id: 5, name: 'Scubapro Regulator' },
                        { id: 6, name: 'Sunto D9 computer' },
                        { id: 7, name: 'Coltrisub cylinder' },
                    ];
                }
                DiveGearComponent.prototype.selected = function (ev) {
                    console.log(ev);
                };
                return DiveGearComponent;
            }());
            DiveGearComponent = __decorate([
                core_1.Component({
                    selector: 'dive-gear',
                    templateUrl: 'app/dive-gear.template.html',
                    styles: ["\n        .selected {\n            color: White;\n            background-color: navy;\n        }\n    "]
                })
            ], DiveGearComponent);
            exports_1("DiveGearComponent", DiveGearComponent);
        }
    };
});
//# sourceMappingURL=dive-gear.component.js.map