System.register(["@angular/core", "./mousepad.component"], function (exports_1, context_1) {
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
    var core_1, core_2, mousepad_component_1, AppComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (mousepad_component_1_1) {
                mousepad_component_1 = mousepad_component_1_1;
            }
        ],
        execute: function () {
            AppComponent = (function () {
                function AppComponent() {
                    this.messages = [];
                    this.counter = 0;
                }
                AppComponent.prototype.ngAfterViewInit = function () {
                    var _this = this;
                    this.mousepad.mouseEvents.subscribe(function (m) {
                        _this.log("(" + m.clientX + ", " + m.clientY);
                    }, function () { _this.log("Error"); }, function () { _this.log("completed"); });
                };
                AppComponent.prototype.log = function (message) {
                    this.messages.push(message);
                };
                return AppComponent;
            }());
            __decorate([
                core_2.ViewChild(mousepad_component_1.MousePadComponent),
                __metadata("design:type", mousepad_component_1.MousePadComponent)
            ], AppComponent.prototype, "mousepad", void 0);
            AppComponent = __decorate([
                core_1.Component({
                    selector: 'my-app',
                    template: "\n\t<div class=\"container\">\n\t\t<mousepad></mousepad>\n\t\t<log-board [messages]=\"messages\"></log-board>\n\t</div>\n\t"
                })
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
        }
    };
});
//# sourceMappingURL=app.component.js.map