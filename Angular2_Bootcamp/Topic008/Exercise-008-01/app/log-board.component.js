System.register(["@angular/core"], function (exports_1, context_1) {
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
    var core_1, LogBoardComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            LogBoardComponent = (function () {
                function LogBoardComponent() {
                }
                return LogBoardComponent;
            }());
            __decorate([
                core_1.Input(),
                __metadata("design:type", Array)
            ], LogBoardComponent.prototype, "messages", void 0);
            LogBoardComponent = __decorate([
                core_1.Component({
                    selector: 'log-board',
                    template: "\n\t<div>\n\t<span *ngFor=\"let message of messages\"\n\tclass=\"message\">\n\t{{message}}\n\t</span>\n\t</div>\n\n\t",
                    styles: ["\n\t.message{\n\tdisplay: inline-block;\n\tbackground-color: #e0e0e0;\n\tborder: 1px solid #808080;\n\tpadding: 2px 4px;\n\tmargin: 4px 4px 0 0;\n\tborder-radius:2px;\n\n\t}\n\n\t"]
                })
            ], LogBoardComponent);
            exports_1("LogBoardComponent", LogBoardComponent);
        }
    };
});
//# sourceMappingURL=log-board.component.js.map