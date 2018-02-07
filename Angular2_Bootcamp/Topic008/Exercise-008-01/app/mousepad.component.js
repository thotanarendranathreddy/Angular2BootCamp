System.register(["@angular/core", "rxjs/Subject"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, Subject_1, MousePadComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
            }
        ],
        execute: function () {
            MousePadComponent = (function () {
                function MousePadComponent() {
                    //MoueseEvent is the observer and eventSource is subject so if any change in subject it trigger oin observer
                    this.counter = 0;
                    this.eventSource = new Subject_1.Subject();
                    this.mouseEvents = this.eventSource.asObservable();
                }
                MousePadComponent.prototype.onMouseMove = function (e) {
                    this.counter++;
                    if (this.counter % 10 == 0) {
                        this.eventSource.next(e);
                    }
                    if (this.counter % 200 == 0) {
                        this.eventSource.error("error");
                    }
                };
                MousePadComponent.prototype.onClick = function () {
                    this.eventSource.complete();
                };
                return MousePadComponent;
            }());
            MousePadComponent = __decorate([
                core_1.Component({
                    selector: 'mousepad',
                    template: "\n\t<div class=\"col-sm-12\"\n\t\t\t\t(mousemove) = \"onMouseMove($event)\"\n\t\t\t\t(click) = \"onClick()\">\n\t </div>\n\n\t",
                    styles: ["\n\tdiv {\n\tmargin : 24px 0;\n\tbackground-color: #e0e0e0;\n\tborder: 1px dotted #808080;\n\theight: 300px;\n\n\t}\n\t"]
                })
            ], MousePadComponent);
            exports_1("MousePadComponent", MousePadComponent);
        }
    };
});
//# sourceMappingURL=mousepad.component.js.map