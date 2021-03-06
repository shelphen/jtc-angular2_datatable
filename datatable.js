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
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var DataTable_1 = require('./src/DataTable');
var DefaultSorter_1 = require('./src/DefaultSorter');
var Paginator_1 = require('./src/Paginator');
var BootstrapPaginator_1 = require('./src/BootstrapPaginator');
var jtcDataTableModule = (function () {
    function jtcDataTableModule() {
    }
    jtcDataTableModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            declarations: [DataTable_1.DataTable, DefaultSorter_1.DefaultSorter, Paginator_1.Paginator, BootstrapPaginator_1.BootstrapPaginator],
            exports: [DataTable_1.DataTable, DefaultSorter_1.DefaultSorter, BootstrapPaginator_1.BootstrapPaginator]
        }), 
        __metadata('design:paramtypes', [])
    ], jtcDataTableModule);
    return jtcDataTableModule;
}());
exports.jtcDataTableModule = jtcDataTableModule;
//# sourceMappingURL=datatable.js.map