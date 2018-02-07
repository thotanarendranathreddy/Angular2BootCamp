System.register(["@angular/core", "./dive-log-entry"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, dive_log_entry_1, DiveLogApi, DiveLogApi_1;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (dive_log_entry_1_1) {
                dive_log_entry_1 = dive_log_entry_1_1;
            }
        ],
        execute: function () {
            DiveLogApi = DiveLogApi_1 = (function () {
                function DiveLogApi() {
                }
                DiveLogApi.prototype.getDives = function () {
                    return new Promise(function (resolve, reject) {
                        DiveLogApi_1.counter++;
                        setTimeout(function () {
                            if (DiveLogApi_1.counter % 3 == 0) {
                                reject("Error: call counter is " + DiveLogApi_1.counter);
                            }
                            else {
                                resolve(dive_log_entry_1.DiveLogEntry.stockDives);
                            }
                        });
                    });
                };
                return DiveLogApi;
            }());
            DiveLogApi.counter = 0;
            DiveLogApi = DiveLogApi_1 = __decorate([
                core_1.Injectable()
            ], DiveLogApi);
            exports_1("DiveLogApi", DiveLogApi);
        }
    };
});
//# sourceMappingURL=dive-log-api.service.js.map