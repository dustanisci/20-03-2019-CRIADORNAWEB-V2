(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/component/banner/banner.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/component/banner/banner.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a class=\"d-block\" *ngIf=\"linkPage\" [routerLink]=\"linkPage\">\r\n  <div [ngStyle]=\"{ 'background-image': 'url('+urlImage+')'}\"></div>\r\n</a>\r\n\r\n<div *ngIf=\"!linkPage\" [ngStyle]=\"{ 'background-image': 'url('+urlImage+')'}\"></div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/component/triangles/triangles.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/component/triangles/triangles.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"triangle\">\r\n    <div></div>\r\n    <div></div>\r\n    <div></div>\r\n    <div></div>\r\n    <div></div>\r\n    <div></div>               \r\n</div>");

/***/ }),

/***/ "./src/app/shared/component/banner/banner.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/shared/component/banner/banner.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a {\n  cursor: pointer; }\n\ndiv {\n  background-repeat: no-repeat;\n  background-size: 100%;\n  background-position: center center;\n  height: 300px; }\n\n@media only screen and (max-width: 1278px) {\n    div {\n      background-size: cover;\n      background-position: right center;\n      height: 200px; } }\n\n@media only screen and (max-width: 599px) {\n    div {\n      height: 100px; } }\n\n@media only screen and (min-width: 2200px) {\n    div {\n      background-size: cover;\n      background-position: right center;\n      height: 500px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudC9iYW5uZXIvQzpcXHJlcG9zaXRvcmlvc1xcY3JpYWRvcm5hd2ViLWNvbXBhbnktYW5ndWxhcjkvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50XFxiYW5uZXJcXGJhbm5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWUsRUFBQTs7QUFHakI7RUFDRSw0QkFBNEI7RUFDNUIscUJBQXFCO0VBQ3JCLGtDQUFrQztFQUNsQyxhQUFhLEVBQUE7O0FBRWI7SUFORjtNQU9JLHNCQUFzQjtNQUN0QixpQ0FBaUM7TUFDakMsYUFBYSxFQUFBLEVBWWhCOztBQVRDO0lBWkY7TUFhSSxhQUFhLEVBQUEsRUFRaEI7O0FBTEM7SUFoQkY7TUFpQkksc0JBQXNCO01BQ3RCLGlDQUFpQztNQUNqQyxhQUFhLEVBQUEsRUFFaEIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50L2Jhbm5lci9iYW5uZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmRpdiB7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyNzhweCkge1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IGNlbnRlcjtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSB7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAyMjAwcHgpIHtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gIH1cclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/shared/component/banner/banner.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/component/banner/banner.component.ts ***!
  \*************************************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var BannerComponent = /** @class */ (function () {
    function BannerComponent() {
    }
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], BannerComponent.prototype, "urlImage", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], BannerComponent.prototype, "linkPage", void 0);
    BannerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-banner',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./banner.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/component/banner/banner.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./banner.component.scss */ "./src/app/shared/component/banner/banner.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], BannerComponent);
    return BannerComponent;
}());



/***/ }),

/***/ "./src/app/shared/component/banner/banner.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/component/banner/banner.module.ts ***!
  \**********************************************************/
/*! exports provided: routeBanner, BannerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routeBanner", function() { return routeBanner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerModule", function() { return BannerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _banner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./banner.component */ "./src/app/shared/component/banner/banner.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");





var routeBanner = [
    {
        path: 'contact',
        loadChildren: function () { return __webpack_require__.e(/*! import() | page-contact-contact-module */ "page-contact-contact-module").then(__webpack_require__.bind(null, /*! ./../../../page/contact/contact.module */ "./src/app/page/contact/contact.module.ts")).then(function (m) { return m.ContactModule; }); }
    },
];
var BannerModule = /** @class */ (function () {
    function BannerModule() {
    }
    BannerModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _banner_component__WEBPACK_IMPORTED_MODULE_3__["BannerComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routeBanner),
            ],
            exports: [
                _banner_component__WEBPACK_IMPORTED_MODULE_3__["BannerComponent"]
            ]
        })
    ], BannerModule);
    return BannerModule;
}());



/***/ }),

/***/ "./src/app/shared/component/triangles/triangles.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/shared/component/triangles/triangles.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".triangle div {\n  display: inline;\n  position: relative; }\n\n.triangle div:nth-of-type(1) {\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 13px 0 13px 25px;\n  border-color: transparent transparent transparent rgba(0, 66, 139, 0.3); }\n\n.triangle div:nth-of-type(2) {\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 15px 30px 15px 0;\n  border-color: transparent rgba(255, 216, 236, 0.4) transparent transparent;\n  top: 20px;\n  left: 15px; }\n\n.triangle div:nth-of-type(3) {\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 13px 0 13px 25px;\n  border-color: transparent transparent transparent rgba(0, 232, 240, 0.3);\n  left: 53px;\n  top: 20px; }\n\n.triangle div:nth-of-type(4) {\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 13px 0 13px 25px;\n  border-color: transparent transparent transparent rgba(0, 134, 180, 0.3);\n  top: 43px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudC90cmlhbmdsZXMvQzpcXHJlcG9zaXRvcmlvc1xcY3JpYWRvcm5hd2ViLWNvbXBhbnktYW5ndWxhcjkvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50XFx0cmlhbmdsZXNcXHRyaWFuZ2xlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdRLGVBQWM7RUFDZCxrQkFBaUIsRUFBQTs7QUFKekI7RUFRUSxRQUFRO0VBQ1IsU0FBUztFQUNULG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsdUVBQXVFLEVBQUE7O0FBWi9FO0VBZ0JRLFFBQVE7RUFDUixTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QiwwRUFBMEU7RUFDMUUsU0FBUTtFQUNSLFVBQVMsRUFBQTs7QUF0QmpCO0VBMkJRLFFBQVE7RUFDUixTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5Qix3RUFBd0U7RUFDeEUsVUFBUztFQUNULFNBQVEsRUFBQTs7QUFqQ2hCO0VBcUNRLFFBQVE7RUFDUixTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5Qix3RUFBd0U7RUFDeEUsU0FBUSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudC90cmlhbmdsZXMvdHJpYW5nbGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRyaWFuZ2xle1xyXG5cclxuICAgIGRpdntcclxuICAgICAgICBkaXNwbGF5OmlubGluZTtcclxuICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIH1cclxuXHJcbiAgICBkaXY6bnRoLW9mLXR5cGUoMSl7XHJcbiAgICAgICAgd2lkdGg6IDA7XHJcbiAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAxM3B4IDAgMTNweCAyNXB4O1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgcmdiYSgwLCA2NiwgMTM5LCAwLjMpO1xyXG4gICAgfVxyXG5cclxuICAgIGRpdjpudGgtb2YtdHlwZSgyKXtcclxuICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICBib3JkZXItd2lkdGg6IDE1cHggMzBweCAxNXB4IDA7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCByZ2JhKDI1NSwgMjE2LCAyMzYsIDAuNCkgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgdG9wOjIwcHg7XHJcbiAgICAgICAgbGVmdDoxNXB4O1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGRpdjpudGgtb2YtdHlwZSgzKXtcclxuICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICBib3JkZXItd2lkdGg6IDEzcHggMCAxM3B4IDI1cHg7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCByZ2JhKDAsIDIzMiwgMjQwLCAwLjMpO1xyXG4gICAgICAgIGxlZnQ6NTNweDtcclxuICAgICAgICB0b3A6MjBweDtcclxuICAgIH1cclxuXHJcbiAgICBkaXY6bnRoLW9mLXR5cGUoNCl7XHJcbiAgICAgICAgd2lkdGg6IDA7XHJcbiAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAxM3B4IDAgMTNweCAyNXB4O1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgcmdiYSgwLCAxMzQsIDE4MCwgMC4zKTtcclxuICAgICAgICB0b3A6NDNweDtcclxuXHJcbiAgICB9XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/shared/component/triangles/triangles.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/component/triangles/triangles.component.ts ***!
  \*******************************************************************/
/*! exports provided: TrianglesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrianglesComponent", function() { return TrianglesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var TrianglesComponent = /** @class */ (function () {
    function TrianglesComponent() {
    }
    TrianglesComponent.prototype.ngOnInit = function () {
    };
    TrianglesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-triangles',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./triangles.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/component/triangles/triangles.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./triangles.component.scss */ "./src/app/shared/component/triangles/triangles.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], TrianglesComponent);
    return TrianglesComponent;
}());



/***/ }),

/***/ "./src/app/shared/component/triangles/triangles.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/component/triangles/triangles.module.ts ***!
  \****************************************************************/
/*! exports provided: TrianglesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrianglesModule", function() { return TrianglesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _triangles_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./triangles.component */ "./src/app/shared/component/triangles/triangles.component.ts");




var TrianglesModule = /** @class */ (function () {
    function TrianglesModule() {
    }
    TrianglesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _triangles_component__WEBPACK_IMPORTED_MODULE_3__["TrianglesComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            exports: [
                _triangles_component__WEBPACK_IMPORTED_MODULE_3__["TrianglesComponent"]
            ]
        })
    ], TrianglesModule);
    return TrianglesModule;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map