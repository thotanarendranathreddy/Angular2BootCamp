System.register(["@angular/core", "./dive-log-api.service"], function (exports_1, context_1) {
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
    var core_1, dive_log_api_service_1, DiveLogComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (dive_log_api_service_1_1) {
                dive_log_api_service_1 = dive_log_api_service_1_1;
            }
        ],
        execute: function () {
            DiveLogComponent = (function () {
                function DiveLogComponent(api) {
                    this.api = api;
                    this.loading = false;
                    this.errorMessage = null;
                }
                DiveLogComponent.prototype.refreshDives = function () {
                    var _this = this;
                    this.loading = true;
                    this.dives = [];
                    this.errorMessage = null;
                    this.api.getDives()
                        .then(function (data) {
                        _this.dives = data;
                        _this.loading = false;
                    }, function (errMsg) {
                        alert(errMsg + 'Error Message');
                        _this.errorMessage = errMsg;
                        _this.loading = false;
                    });
                };
                return DiveLogComponent;
            }());
            DiveLogComponent = __decorate([
                core_1.Component({
                    selector: 'divelog',
                    templateUrl: 'app/divelog.template.html',
                }),
                __metadata("design:paramtypes", [dive_log_api_service_1.DiveLogApi])
            ], DiveLogComponent);
            exports_1("DiveLogComponent", DiveLogComponent);
        }
    };
});
//# sourceMappingURL=dive-log.component.js.map