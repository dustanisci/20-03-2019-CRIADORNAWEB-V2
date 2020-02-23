(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-about-about-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/page/about/about.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/about/about.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"min-height-100\" fxLayoutAlign=\"start center\">\r\n  <div class=\"container padding-t-175 padding-xl-tp-10 margin-b-50\">\r\n\r\n    <div fxLayout=\"row\" class=\"margin-b-75\">\r\n      <app-banner data-aos=\"fade-right\" data-aos-once=\"true\" urlImage=\"./assets/img/banner-sobre.jpg\" fxFlex=\"100\">\r\n      </app-banner>\r\n    </div>\r\n\r\n    <main fxLayout.lt-md=\"column\" fxLayoutGap.lt-md=\"30px\" fxLayout=\"row\" fxLayoutGap.gt-sm=\"15%\"\r\n      fxLayoutAlign=\"start center\">\r\n      <div data-aos=\"fade-right\" data-aos-once=\"true\" fxFlex.gt-sm=\"50\">\r\n        <img src=\"assets/img/img-sobre.jpg\" class=\"img-responsive\" />\r\n      </div>\r\n\r\n      <content data-aos=\"fade-left\" data-aos-once=\"true\" class=\"txt-left\" fxFlex.gt-sm=\"50\">\r\n        <p>Criador na web surgiu com o propósito de ajudá-lo em seus negócios, fornecendo serviços de sites de\r\n          excelente qualidade e consultoria em seu ambiente de trabalho.</p>\r\n\r\n        <p>É composto por profissionais graduados e com grandes experiências no mercado tecnológico.</p>\r\n\r\n        <p>Os nossos valores envolvem o comprometimento com o cliente, a integridade no que fazemos, proatividade,\r\n          moral e a ética.</p>\r\n      </content>\r\n    </main>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./src/app/page/about/about.component.scss":
/*!*************************************************!*\
  !*** ./src/app/page/about/about.component.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media only screen and (max-width: 1279px) {\n  content > div:first-child {\n    margin-bottom: 50px !important; } }\n\n@media only screen and (max-width: 1279px) {\n  content p {\n    text-align: center; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9hYm91dC9DOlxccmVwb3NpdG9yaW9zXFxjcmlhZG9ybmF3ZWItY29tcGFueS1hbmd1bGFyOS9zcmNcXGFwcFxccGFnZVxcYWJvdXRcXGFib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBRko7SUFHTSw4QkFBOEIsRUFBQSxFQUVqQzs7QUFHQztFQVJKO0lBU00sa0JBQWtCLEVBQUEsRUFFckIiLCJmaWxlIjoic3JjL2FwcC9wYWdlL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiY29udGVudCB7XHJcbiAgPmRpdjpmaXJzdC1jaGlsZCB7XHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyNzlweCkge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI3OXB4KSB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/page/about/about.component.ts":
/*!***********************************************!*\
  !*** ./src/app/page/about/about.component.ts ***!
  \***********************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/page/about/about.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./about.component.scss */ "./src/app/page/about/about.component.scss")).default]
        })
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/page/about/about.module.ts":
/*!********************************************!*\
  !*** ./src/app/page/about/about.module.ts ***!
  \********************************************/
/*! exports provided: AboutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutModule", function() { return AboutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.component */ "./src/app/page/about/about.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm5/flex-layout.es5.js");
/* harmony import */ var src_app_shared_component_triangles_triangles_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/component/triangles/triangles.module */ "./src/app/shared/component/triangles/triangles.module.ts");
/* harmony import */ var src_app_shared_component_banner_banner_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/component/banner/banner.module */ "./src/app/shared/component/banner/banner.module.ts");








var aboutRoute = [
    { path: '', component: _about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"] }
];
var AboutModule = /** @class */ (function () {
    function AboutModule() {
    }
    AboutModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(aboutRoute),
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexModule"],
                src_app_shared_component_triangles_triangles_module__WEBPACK_IMPORTED_MODULE_6__["TrianglesModule"],
                src_app_shared_component_banner_banner_module__WEBPACK_IMPORTED_MODULE_7__["BannerModule"]
            ]
        })
    ], AboutModule);
    return AboutModule;
}());



/***/ })

}]);
//# sourceMappingURL=page-about-about-module.js.map