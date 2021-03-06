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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("@angular/core");
var DataTable_1 = require("./DataTable");
var Paginator = (function () {
    function Paginator(injectjtcTable) {
        var _this = this;
        this.injectjtcTable = injectjtcTable;
        this.dataLength = 0;
        this.onPageChangeSubscriber = function (event) {
            _this.activePage = event.activePage;
            _this.rowsOnPage = event.rowsOnPage;
            _this.dataLength = event.dataLength;
            _this.lastPage = Math.ceil(_this.dataLength / _this.rowsOnPage);
        };
    }
    Paginator.prototype.ngOnChanges = function (changes) {
        this.jtcTable = this.inputjtcTable || this.injectjtcTable;
        this.onPageChangeSubscriber(this.jtcTable.getPage());
        this.jtcTable.onPageChange.subscribe(this.onPageChangeSubscriber);
    };
    Paginator.prototype.setPage = function (pageNumber) {
        this.jtcTable.setPage(pageNumber, this.rowsOnPage);
    };
    Paginator.prototype.setRowsOnPage = function (rowsOnPage) {
        this.jtcTable.setPage(this.activePage, rowsOnPage);
    };
    __decorate([
        core_1.Input("jtcTable"), 
        __metadata('design:type', DataTable_1.DataTable)
    ], Paginator.prototype, "inputjtcTable", void 0);
    Paginator = __decorate([
        core_1.Component({
            selector: "jtcPaginator",
            template: "<ng-content></ng-content>"
        }),
        __param(0, core_1.Optional()), 
        __metadata('design:paramtypes', [DataTable_1.DataTable])
    ], Paginator);
    return Paginator;
}());
exports.Paginator = Paginator;
//# sourceMappingURL=Paginator.js.map