(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _page_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page/home/home.component */ "./src/app/page/home/home.component.ts");
/* harmony import */ var _page_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page/contact/contact.component */ "./src/app/page/contact/contact.component.ts");
/* harmony import */ var _page_about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page/about/about.component */ "./src/app/page/about/about.component.ts");
/* harmony import */ var _page_technology_technology_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page/technology/technology.component */ "./src/app/page/technology/technology.component.ts");
/* harmony import */ var _page_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page/portfolio/portfolio.component */ "./src/app/page/portfolio/portfolio.component.ts");








var routes = [
    { path: 'home', component: _page_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'contact', component: _page_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"] },
    { path: 'about', component: _page_about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"] },
    { path: 'portfolio', component: _page_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_7__["PortfolioComponent"] },
    { path: 'technology', component: _page_technology_technology_component__WEBPACK_IMPORTED_MODULE_6__["TechnologyComponent"] },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<router-outlet></router-outlet>\r\n<app-black-lines></app-black-lines>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_3__);




var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
        aos__WEBPACK_IMPORTED_MODULE_3__["init"]();
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _page_page_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page/page.module */ "./src/app/page/page.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var mousetrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mousetrap */ "./node_modules/mousetrap/mousetrap.js");
/* harmony import */ var mousetrap__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(mousetrap__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ks89/angular-modal-gallery */ "./node_modules/@ks89/angular-modal-gallery/fesm5/ks89-angular-modal-gallery.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _page_page_module__WEBPACK_IMPORTED_MODULE_4__["PageModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_8__["GalleryModule"].forRoot(),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/page/about/about.component.html":
/*!*************************************************!*\
  !*** ./src/app/page/about/about.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"min-height-100\" fxLayoutAlign=\"start center\">\r\n  <main class=\"container padding-t-150 padding-xl-tp-10\">\r\n\r\n    <div fxLayout=\"row\" class=\"margin-b-75\">\r\n      <app-banner data-aos=\"fade-right\" data-aos-once=\"true\" linkPage=\"\" urlImage=\"./assets/img/banner-sobre.jpg\"\r\n        fxFlex=\"100\"></app-banner>\r\n    </div>\r\n\r\n    <content fxLayoutAlign=\"start center\" data-aos=\"fade-left\" data-aos-once=\"true\" class=\"margin-b-120 margin-t-50\" fxLayout=\"row wrap\" fxLayout.lt-md=\"column\" fxLayoutGap=\"50px\" fxLayoutGap.lt-md=\"120px\">\r\n      <div class=\"txt-center content-center\" fxFlex.lt-md=\"100\">\r\n        <img class=\"content-center\" src=\"assets/img/img-sobre.jpg\" class=\"img-responsive\" />\r\n      </div>\r\n\r\n      <div class=\"txt-left content-center\" fxFlex.lt-md=\"100\">\r\n        <p>Criador na web surgiu com o propósito de ajudá-lo em seus negócios, fornecendo serviços de sites de\r\n          excelente qualidade e consultoria em seu ambiente de trabalho.</p>\r\n\r\n        <p>É composto por profissionais graduados e com grandes experiências no mercado tecnológico.</p>\r\n\r\n        <p>Os nossos valores envolvem o comprometimento com o cliente, a integridade no que fazemos, proatividade,\r\n          moral e a ética.</p>\r\n      </div>\r\n\r\n    </content>\r\n  </main>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/page/about/about.component.scss":
/*!*************************************************!*\
  !*** ./src/app/page/about/about.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media only screen and (max-width: 1279px) {\n  content > div:first-child {\n    margin-bottom: 50px !important; } }\n\n@media only screen and (max-width: 1279px) {\n  content p {\n    text-align: center; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9hYm91dC9DOlxcYW5ndWxhclxcMjAtMDMtMjAxOS1zaXRlLWNyaWFkb3JuYXdlYi12Mi1hbmd1bGFyNy1naXQtaW8vc3JjXFxhcHBcXHBhZ2VcXGFib3V0XFxhYm91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUZKO0lBR00sK0JBQThCLEVBRWpDLEVBQUE7O0FBR0M7RUFSSjtJQVNNLG1CQUFrQixFQUVyQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZS9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnRlbnQge1xyXG4gID5kaXY6Zmlyc3QtY2hpbGQge1xyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjc5cHgpIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNTBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcCB7XHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyNzlweCkge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/page/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/page/about/about.component.scss")]
        })
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/page/contact/contact.component.html":
/*!*****************************************************!*\
  !*** ./src/app/page/contact/contact.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"min-height-100\">\r\n  <main class=\"container padding-t-150 padding-xl-tp-10\">\r\n\r\n    <content class=\"margin-t-50\" fxLayoutAlign=\"center center\" fxLayout=\"row wrap\" fxLayout.lt-md=\"column\" fxLayoutGap=\"auto\" fxLayoutGap.lt-md=\"120px\">\r\n      <div data-aos=\"flip-left\" fxLayoutAlign=\"center center\" data-aos-once=\"true\" class=\"margin-b-135 txt-center content-center\" fxFlex.lt-md=\"100\">\r\n        <div class=\"content-center\" id=\"phone\">\r\n          <div id=\"whats-header\" fxLayoutAlign=\"center center\"></div>\r\n          <div id=\"whats-body\" fxLayout=\"row\">\r\n            <form [formGroup]=\"formWhats\" id=\"whats-send\" fxLayoutAlign=\"end end\">\r\n              <textarea formControlName=\"textWhats\" class=\"d-inline\" placeholder=\"Digite sua mensagem\"></textarea>\r\n              <div class=\"d-inline-block margin-l-10\">\r\n                <a href=\"{{ environment + formWhats.value.textWhats }}\" target=\"_blank\" class=\"send\" fxLayoutAlign=\"center center\">\r\n                  <i class=\"material-icons\">send</i>\r\n                </a>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div data-aos=\"flip-left\" data-aos-once=\"true\" class=\"margin-b-135 txt-center content-center\" fxFlex.lt-md=\"100\">\r\n        <label>Digite sua mensagem ou aperte no ícone abaixo</label>\r\n        <a class=\"txt-decoration-none content-center\" fxLayout=\"column\" href=\"tel:+5511998758662\" fxLayoutAlign=\"center center\">\r\n          <img src=\"assets/img/img-whats.png\" />\r\n          <label class=\"cursor-pointer\" fxFlex=\"100\">(11) 95966-2923</label>\r\n        </a>\r\n\r\n      </div>\r\n    </content>\r\n  </main>\r\n</div>"

/***/ }),

/***/ "./src/app/page/contact/contact.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/page/contact/contact.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  color: #003e88;\n  width: 200px;\n  font-size: 15pt; }\n\nimg {\n  width: 70px; }\n\n#img-contact {\n  width: 80%; }\n\n#phone {\n  background: #000;\n  border-radius: 30px;\n  height: 500px;\n  width: 300px; }\n\n@media only screen and (max-width: 360px) {\n    #phone {\n      height: 500px;\n      width: 265px; } }\n\n#phone #whats-header {\n    margin-top: 30px;\n    background: #075e55;\n    height: 40px; }\n\n#phone #whats-body {\n    height: 400px;\n    background: url('img-background-whats.png'); }\n\n#phone #whats-send > div {\n    top: -7px;\n    position: relative; }\n\n#phone #whats-send textarea {\n    border: 0;\n    margin-bottom: 10px;\n    margin-left: 10px;\n    width: 220px;\n    height: 55px; }\n\n@media only screen and (max-width: 360px) {\n      #phone #whats-send textarea {\n        width: 190px; } }\n\n#phone #whats-send a.send {\n    border-radius: 50px;\n    width: 40px;\n    height: 40px;\n    text-decoration: none;\n    background: #075e55; }\n\n#phone #whats-send a.send i {\n      color: #FFF; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9jb250YWN0L0M6XFxhbmd1bGFyXFwyMC0wMy0yMDE5LXNpdGUtY3JpYWRvcm5hd2ViLXYyLWFuZ3VsYXI3LWdpdC1pby9zcmNcXGFwcFxccGFnZVxcY29udGFjdFxcY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZS9jb250YWN0L0M6XFxhbmd1bGFyXFwyMC0wMy0yMDE5LXNpdGUtY3JpYWRvcm5hd2ViLXYyLWFuZ3VsYXI3LWdpdC1pby9zcmNcXGFzc2V0c1xcc2Nzc1xccGFsZXR0ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsZUNEbUI7RURFbkIsYUFBWTtFQUNaLGdCQUFlLEVBQ2hCOztBQUVEO0VBQ0UsWUFBVyxFQUNaOztBQUVEO0VBQ0UsV0FBVSxFQUNYOztBQUVEO0VBQ0UsaUJDR2dCO0VERmhCLG9CQUFtQjtFQUNuQixjQUFhO0VBQ2IsYUFBWSxFQWdEYjs7QUE5Q0M7SUFORjtNQU9JLGNBQWE7TUFDYixhQUFZLEVBNENmLEVBQUE7O0FBcEREO0lBWUksaUJBQWdCO0lBQ2hCLG9CQ0xpQjtJRE1qQixhQUFZLEVBQ2I7O0FBZkg7SUFrQkksY0FBYTtJQUNiLDRDQUErRCxFQUNoRTs7QUFwQkg7SUF3Qk0sVUFBUztJQUNULG1CQUFrQixFQUNuQjs7QUExQkw7SUE2Qk0sVUFBUztJQUNULG9CQUFtQjtJQUNuQixrQkFBaUI7SUFDakIsYUFBWTtJQUNaLGFBQVksRUFLYjs7QUFIQztNQW5DTjtRQW9DUSxhQUFZLEVBRWYsRUFBQTs7QUF0Q0w7SUF5Q00sb0JBQW1CO0lBQ25CLFlBQVc7SUFDWCxhQUFZO0lBQ1osc0JBQXFCO0lBQ3JCLG9CQ3JDZSxFRDBDaEI7O0FBbERMO01BZ0RRLFlDN0NVLEVEOENYIiwiZmlsZSI6InNyYy9hcHAvcGFnZS9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL3BhbGV0dGUuc2Nzcyc7XHJcblxyXG5hIHtcclxuICBjb2xvcjogcGFsZXR0ZS1jb2xvcigncHJpbWFyeScsICcxJyk7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTVwdDtcclxufVxyXG5cclxuaW1nIHtcclxuICB3aWR0aDogNzBweDtcclxufVxyXG5cclxuI2ltZy1jb250YWN0IHtcclxuICB3aWR0aDogODAlO1xyXG59XHJcblxyXG4jcGhvbmUge1xyXG4gIGJhY2tncm91bmQ6IHBhbGV0dGUtY29sb3IoJ3RlcnRpYXJ5JywgJzInKTtcclxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gIGhlaWdodDogNTAwcHg7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM2MHB4KSB7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgd2lkdGg6IDI2NXB4O1xyXG4gIH1cclxuXHJcbiAgI3doYXRzLWhlYWRlciB7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZDogcGFsZXR0ZS1jb2xvcignZm91cnRoJywgJzInKTtcclxuICAgIGhlaWdodDogNDBweDtcclxuICB9XHJcblxyXG4gICN3aGF0cy1ib2R5IHtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvaW1nLWJhY2tncm91bmQtd2hhdHMucG5nJyk7XHJcbiAgfVxyXG5cclxuICAjd2hhdHMtc2VuZCB7XHJcbiAgICA+ZGl2IHtcclxuICAgICAgdG9wOiAtN3B4O1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcblxyXG4gICAgdGV4dGFyZWEge1xyXG4gICAgICBib3JkZXI6IDA7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICB3aWR0aDogMjIwcHg7XHJcbiAgICAgIGhlaWdodDogNTVweDtcclxuXHJcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzYwcHgpIHtcclxuICAgICAgICB3aWR0aDogMTkwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhLnNlbmQge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICB3aWR0aDogNDBweDtcclxuICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIGJhY2tncm91bmQ6IHBhbGV0dGUtY29sb3IoJ2ZvdXJ0aCcsICcyJyk7XHJcblxyXG4gICAgICBpIHtcclxuICAgICAgICBjb2xvcjogcGFsZXR0ZS1jb2xvcigndGVydGlhcnknLCAnMScpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiJHBhbGV0dGUtY29sb3JzOiAoXHJcbiAgICAncHJpbWFyeScgOiAoXHJcbiAgICAgICAgJzEnIDogIzAwM2U4OCxcclxuICAgICAgICAnMicgOiAjMDBhY2NjLFxyXG4gICAgICAgICczJyA6ICMwMDgwYjFcclxuICAgICksXHJcbiAgICAncHJpbWFyeS1vcGFjaXR5JzogKFxyXG4gICAgICAgICcxJzogIzAwMjc3YThmLFxyXG4gICAgICAgICcxLjEnOiAjMDAyNzdhM2QsXHJcbiAgICAgICAgJzInIDogIzAwNmNhNTY5LFxyXG4gICAgICAgICczJyA6ICMwMGQ4ZTc1NCxcclxuICAgICAgICAnNCcgOiAjNWFjNGQ2LFxyXG4gICAgICAgICc1JyA6ICMwMDNkODg1NFxyXG4gICAgKSxcclxuICAgICdzZWNvbmRhcnknIDogKFxyXG4gICAgICAgICcxJyA6ICMwMDAwMDAyNCxcclxuICAgICAgICAnMicgOiAjMDAwMDAwNjcsXHJcbiAgICApLFxyXG4gICAgJ3RlcnRpYXJ5JyA6IChcclxuICAgICAgICAnMScgOiAjRkZGLFxyXG4gICAgICAgICcyJyA6ICMwMDBcclxuICAgICksXHJcbiAgICAnZm91cnRoJyA6IChcclxuICAgICAgICAnMScgOiAjNGFjOTU5LFxyXG4gICAgICAgICcyJyA6ICMwNzVlNTVcclxuICAgIClcclxuKTtcclxuXHJcbkBmdW5jdGlvbiBwYWxldHRlLWNvbG9yKCR0eXBlLCAkY29sb3IpIHtcclxuICBAcmV0dXJuIG1hcC1nZXQobWFwLWdldCgkcGFsZXR0ZS1jb2xvcnMsICR0eXBlKSwgJGNvbG9yKTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/page/contact/contact.component.ts":
/*!***************************************************!*\
  !*** ./src/app/page/contact/contact.component.ts ***!
  \***************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");





var ContactComponent = /** @class */ (function () {
    function ContactComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.environment = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiWhatsapp;
    }
    ContactComponent.prototype.ngOnInit = function () {
        this.formWhats = this.formBuilder.group({
            textWhats: this.formBuilder.control('', [])
        });
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/page/contact/contact.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('scrollAnimation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                        opacity: 1
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                        opacity: 0
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('show => hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('700ms ease-out')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('hide => show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('700ms ease-in'))
                ])
            ],
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/page/contact/contact.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/page/home/home.component.html":
/*!***********************************************!*\
  !*** ./src/app/page/home/home.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"min-height-100\">\r\n  <div class=\"container padding-t-150 padding-xl-tp-10\">\r\n\r\n    <div fxLayout=\"row\" class=\"margin-b-120\">\r\n      <app-banner data-aos=\"zoom-in\" data-aos-once=\"true\" linkPage=\"{{ navbar.items['5-contact'][0].url }}\" urlImage=\"./assets/img/banner-home.jpg\"\r\n        fxFlex=\"100\"></app-banner>\r\n    </div>\r\n\r\n    <div class=\"txt-center\">\r\n      <main fxLayout.lt-md=\"column\" fxLayoutGap.lt-md=\"70px\" fxLayout=\"row\" fxLayoutGap.gt-sm=\"15%\">\r\n        <div data-aos=\"zoom-in\" data-aos-once=\"true\" fxFlex.gt-sm=\"50\">\r\n          <h2 class=\"position-re margin-b-30 margin-t-100 f-size-title\">\r\n            <app-triangles></app-triangles>\r\n            Sites\r\n          </h2>\r\n          <content>\r\n            <p>Podemos criar um do zero para você.</p>\r\n            <p>Nossos sites e sistemas são leves,</p>\r\n            <p>com boa usabilidade e tecnologias atuais do mercado.</p>\r\n          </content>\r\n        </div>\r\n        <div data-aos=\"zoom-in\" data-aos-once=\"true\" fxFlex.gt-sm=\"50\">\r\n          <img class=\"img-responsive\" src=\"assets/img/img-sites-sistemas.jpg\" />\r\n        </div>\r\n      </main>\r\n    </div>\r\n\r\n    <div class=\"txt-center margin-t-150\">\r\n      <main fxLayout.lt-md=\"column-reverse\" fxLayoutGap.lt-md=\"70px\" fxLayout=\"row\" fxLayoutGap.gt-sm=\"15%\">\r\n        <div data-aos=\"zoom-in\" data-aos-once=\"true\" fxFlex.gt-sm=\"50\">\r\n          <img class=\"img-responsive\" src=\"assets/img/img-prototipo.jpg\" />\r\n        </div>\r\n        <div data-aos=\"zoom-in\" data-aos-once=\"true\" fxFlex.gt-sm=\"50\">\r\n          <h2 class=\"position-re margin-b-30 margin-t-100 f-size-title\">\r\n            <app-triangles></app-triangles>\r\n            Protótipo\r\n          </h2>\r\n          <content>\r\n            <p>Deixe as complicações e limitações de lado,</p>\r\n            <p>a construção é elaborada do jeitinho que você deseja.</p>\r\n          </content>\r\n        </div>\r\n      </main>\r\n    </div>\r\n\r\n    <div class=\"txt-center margin-t-150\">\r\n      <main fxLayout.lt-md=\"column\" fxLayoutGap.lt-md=\"70px\" fxLayout=\"row\" fxLayoutGap.gt-sm=\"15%\">\r\n        <div data-aos=\"zoom-in\" data-aos-once=\"true\" fxFlex.gt-sm=\"50\">\r\n          <h2 class=\"position-re margin-b-30 margin-t-100 f-size-title\">\r\n            <app-triangles></app-triangles>\r\n            Responsivo\r\n          </h2>\r\n          <content>\r\n            <p>O site e o sistema é compatível com o computador,</p>\r\n            <p>celular, tablet e até mesmo televisores.</p>\r\n            <p>Não tendo que se preocupar com a usabilidade</p>\r\n            <p>de pequenas e grandes telas.</p>\r\n          </content>\r\n        </div>\r\n        <div data-aos=\"zoom-in\" data-aos-once=\"true\" fxFlex.gt-sm=\"50\">\r\n          <img class=\"img-responsive\" src=\"assets/img/img-responsivo.jpg\" />\r\n        </div>\r\n      </main>\r\n    </div>\r\n\r\n    <div class=\"txt-center margin-t-150\">\r\n      <main fxLayout.lt-md=\"column-reverse\" fxLayoutGap.lt-md=\"70px\" fxLayout=\"row\" fxLayoutGap.gt-sm=\"15%\">\r\n        <div data-aos=\"zoom-in\" data-aos-once=\"true\" fxFlex.gt-sm=\"50\">\r\n          <img class=\"img-responsive\" src=\"assets/img/img-suporte.jpg\" />\r\n        </div>\r\n        <div data-aos=\"zoom-in\" data-aos-once=\"true\" fxFlex.gt-sm=\"50\">\r\n          <h2 class=\"position-re margin-b-30 margin-t-100 f-size-title\">\r\n            <app-triangles></app-triangles>\r\n            Manutenção\r\n          </h2>\r\n          <content>\r\n            <p>Também podemos fornecer os nossos serviços</p>\r\n            <p>em sites e sistemas já existentes.</p>\r\n            <p>Consulte as tecnologias que utilizamos e solicite o orçamento!</p>\r\n          </content>\r\n        </div>\r\n      </main>\r\n    </div>\r\n\r\n    <div class=\"txt-center margin-t-150\" fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap.lt-md=\"40px\"\r\n      fxLayoutGap.gt-sm=\"15%\">\r\n      <div data-aos=\"zoom-in\" data-aos-once=\"true\" fxFlex.gt-sm=\"50\">\r\n        <h2 class=\"position-re margin-b-30 margin-t-100 f-size-title\">\r\n          <app-triangles></app-triangles>\r\n          Consultoria\r\n        </h2>\r\n        <content>\r\n          <p>Fornecemos soluções completas com ideias,</p>\r\n          <p>inovação, assuntos que enriqueçam</p>\r\n          <p>ainda mais o seu negócio.</p>\r\n        </content>\r\n      </div>\r\n      <div data-aos=\"zoom-in\" data-aos-once=\"true\" fxFlex.gt-sm=\"50\">\r\n        <img class=\"img-responsive\" src=\"assets/img/img-consultoria.jpg\" />\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"txt-center margin-t-150 margin-b-150\">\r\n      <main fxLayout.lt-md=\"column-reverse\" fxLayoutGap.lt-md=\"70px\" fxLayout=\"row\" fxLayoutGap.gt-sm=\"15%\">\r\n        <div data-aos=\"zoom-in\" data-aos-once=\"true\" fxFlex.gt-sm=\"50\">\r\n          <img class=\"img-responsive\" src=\"assets/img/img-servicos-extras.jpg\" />\r\n        </div>\r\n        <div data-aos=\"zoom-in\" data-aos-once=\"true\" fxFlex.gt-sm=\"50\">\r\n          <h2 class=\"position-re margin-b-30 margin-t-100 f-size-title\">\r\n            <app-triangles></app-triangles>\r\n            Serviços Extras\r\n          </h2>\r\n          <content>\r\n            <p>Se você é um programador e tem dificuldades ou</p>\r\n            <p>falta de tempo de criar um componente</p>\r\n            <p>do layout, podemos criar</p>\r\n            <p>um personalizado para você e rápido.</p>\r\n          </content>\r\n        </div>\r\n      </main>\r\n    </div>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/page/home/home.component.scss":
/*!***********************************************!*\
  !*** ./src/app/page/home/home.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "content p {\n  margin: 0;\n  margin-top: 4px;\n  font-size: 11pt; }\n\nh2 {\n  color: #003e88; }\n\n@media only screen and (max-width: 959px) {\n    h2 {\n      margin-top: 50px; } }\n\napp-triangles {\n  position: absolute;\n  left: 80px;\n  top: -100px; }\n\n@media only screen and (max-width: 959px) {\n    app-triangles {\n      position: relative;\n      left: -50px;\n      margin-bottom: 90px;\n      top: -80px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9ob21lL0M6XFxhbmd1bGFyXFwyMC0wMy0yMDE5LXNpdGUtY3JpYWRvcm5hd2ViLXYyLWFuZ3VsYXI3LWdpdC1pby9zcmNcXGFwcFxccGFnZVxcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZS9ob21lL0M6XFxhbmd1bGFyXFwyMC0wMy0yMDE5LXNpdGUtY3JpYWRvcm5hd2ViLXYyLWFuZ3VsYXI3LWdpdC1pby9zcmNcXGFzc2V0c1xcc2Nzc1xccGFsZXR0ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsVUFBUztFQUNULGdCQUFlO0VBQ2YsZ0JBQWUsRUFDaEI7O0FBRUQ7RUFDRSxlQ1BtQixFRFlwQjs7QUFIQztJQUhGO01BSUksaUJBQWdCLEVBRW5CLEVBQUE7O0FBRUQ7RUFDRSxtQkFBa0I7RUFDbEIsV0FBVTtFQUNWLFlBQVcsRUFRWjs7QUFOQztJQUxGO01BTUksbUJBQWtCO01BQ2xCLFlBQVc7TUFDWCxvQkFBbUI7TUFDbkIsV0FBVSxFQUViLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4vLi4vLi4vLi4vYXNzZXRzL3Njc3MvcGFsZXR0ZS5zY3NzJztcclxuXHJcbmNvbnRlbnQgcCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIG1hcmdpbi10b3A6IDRweDtcclxuICBmb250LXNpemU6IDExcHQ7XHJcbn1cclxuXHJcbmgyIHtcclxuICBjb2xvcjogcGFsZXR0ZS1jb2xvcigncHJpbWFyeScsICcxJyk7XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTU5cHgpIHtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5hcHAtdHJpYW5nbGVzIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogODBweDtcclxuICB0b3A6IC0xMDBweDtcclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NTlweCkge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogLTUwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA5MHB4O1xyXG4gICAgdG9wOiAtODBweDtcclxuICB9XHJcbn1cclxuIiwiJHBhbGV0dGUtY29sb3JzOiAoXHJcbiAgICAncHJpbWFyeScgOiAoXHJcbiAgICAgICAgJzEnIDogIzAwM2U4OCxcclxuICAgICAgICAnMicgOiAjMDBhY2NjLFxyXG4gICAgICAgICczJyA6ICMwMDgwYjFcclxuICAgICksXHJcbiAgICAncHJpbWFyeS1vcGFjaXR5JzogKFxyXG4gICAgICAgICcxJzogIzAwMjc3YThmLFxyXG4gICAgICAgICcxLjEnOiAjMDAyNzdhM2QsXHJcbiAgICAgICAgJzInIDogIzAwNmNhNTY5LFxyXG4gICAgICAgICczJyA6ICMwMGQ4ZTc1NCxcclxuICAgICAgICAnNCcgOiAjNWFjNGQ2LFxyXG4gICAgICAgICc1JyA6ICMwMDNkODg1NFxyXG4gICAgKSxcclxuICAgICdzZWNvbmRhcnknIDogKFxyXG4gICAgICAgICcxJyA6ICMwMDAwMDAyNCxcclxuICAgICAgICAnMicgOiAjMDAwMDAwNjcsXHJcbiAgICApLFxyXG4gICAgJ3RlcnRpYXJ5JyA6IChcclxuICAgICAgICAnMScgOiAjRkZGLFxyXG4gICAgICAgICcyJyA6ICMwMDBcclxuICAgICksXHJcbiAgICAnZm91cnRoJyA6IChcclxuICAgICAgICAnMScgOiAjNGFjOTU5LFxyXG4gICAgICAgICcyJyA6ICMwNzVlNTVcclxuICAgIClcclxuKTtcclxuXHJcbkBmdW5jdGlvbiBwYWxldHRlLWNvbG9yKCR0eXBlLCAkY29sb3IpIHtcclxuICBAcmV0dXJuIG1hcC1nZXQobWFwLWdldCgkcGFsZXR0ZS1jb2xvcnMsICR0eXBlKSwgJGNvbG9yKTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/page/home/home.component.ts":
/*!*********************************************!*\
  !*** ./src/app/page/home/home.component.ts ***!
  \*********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_component_header_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/component/header/navbar/navbar.component */ "./src/app/shared/component/header/navbar/navbar.component.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(navbar) {
        this.navbar = navbar;
    }
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/page/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/page/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_component_header_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/page/page.module.ts":
/*!*************************************!*\
  !*** ./src/app/page/page.module.ts ***!
  \*************************************/
/*! exports provided: PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageModule", function() { return PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/page/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about/about.component */ "./src/app/page/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/page/contact/contact.component.ts");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/page/portfolio/portfolio.component.ts");
/* harmony import */ var _technology_technology_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./technology/technology.component */ "./src/app/page/technology/technology.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _portfolio_portfolio_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./portfolio/portfolio.service */ "./src/app/page/portfolio/portfolio.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");










var PageModule = /** @class */ (function () {
    function PageModule() {
    }
    PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"],
                _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_5__["PortfolioComponent"],
                _technology_technology_component__WEBPACK_IMPORTED_MODULE_6__["TechnologyComponent"],
            ],
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            ],
            providers: [
                _portfolio_portfolio_service__WEBPACK_IMPORTED_MODULE_8__["PortfolioService"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"]
            ]
        })
    ], PageModule);
    return PageModule;
}());



/***/ }),

/***/ "./src/app/page/portfolio/portfolio.component.html":
/*!*********************************************************!*\
  !*** ./src/app/page/portfolio/portfolio.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"min-height-100\">\r\n  <div class=\"container padding-t-150 padding-xl-tp-10\">\r\n\r\n    <div fxLayout=\"row\" class=\"margin-b-75\">\r\n      <app-banner data-aos=\"fade-right\" data-aos-once=\"true\" linkPage=\"\" urlImage=\"./assets/img/banner-portfolio.jpg\" fxFlex=\"100\"></app-banner>\r\n    </div>\r\n\r\n    <content class=\"margin-t-50\" fxLayout=\"row wrap\" fxLayout.lt-md=\"column\" fxLayoutGap=\"auto\" fxLayoutGap.lt-md=\"120px\">\r\n      <div data-aos=\"fade-up\" data-aos-once=\"true\" class=\"margin-b-135 txt-center content-center\" *ngFor=\"let projeto of projetos | reverse; let i = index;\"\r\n        fxFlex.lt-md=\"100\" fxFlex.gt-sm=\"40\">\r\n        <img (click)=\"setValuesModal(projeto.galerias);\" src=\"{{ projeto.galerias[0].url_galeria }}\" class=\"cursor-pointer img-responsive\" />\r\n        <label class=\"d-block margin-t-20\">Imagem (1 de {{projeto.galerias\r\n          | length}})</label>\r\n        <a class=\"txt-decoration-none margin-t-5 d-block\" href=\"{{ projeto.url_site_projeto }}\" target=\"_blank\">{{projeto[\"url_site_projeto\"]\r\n          | www}}</a>\r\n      </div>\r\n      \r\n      <div class=\"margin-b-135 txt-center content-center\" fxFlex.lt-md=\"100\" fxFlex.gt-sm=\"40\" *ngIf=\"getLengthProject(projetos) / 2 != 0\"></div>\r\n    </content>\r\n\r\n    <app-modal class=\"position-ab\"></app-modal>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/page/portfolio/portfolio.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/page/portfolio/portfolio.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "content > div label {\n  color: #003e88; }\n\ncontent > div a {\n  color: #00accc; }\n\n@media only screen and (max-width: 500px) {\n    content > div a {\n      word-wrap: break-word;\n      width: 200px;\n      display: block;\n      margin-left: auto;\n      margin-right: auto; } }\n\n@media only screen and (max-width: 959px) {\n  content > div {\n    margin-bottom: 90px !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9wb3J0Zm9saW8vQzpcXGFuZ3VsYXJcXDIwLTAzLTIwMTktc2l0ZS1jcmlhZG9ybmF3ZWItdjItYW5ndWxhcjctZ2l0LWlvL3NyY1xcYXBwXFxwYWdlXFxwb3J0Zm9saW9cXHBvcnRmb2xpby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZS9wb3J0Zm9saW8vQzpcXGFuZ3VsYXJcXDIwLTAzLTIwMTktc2l0ZS1jcmlhZG9ybmF3ZWItdjItYW5ndWxhcjctZ2l0LWlvL3NyY1xcYXNzZXRzXFxzY3NzXFxwYWxldHRlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFJTSxlQ0plLEVES2hCOztBQUxMO0VBU00sZUNSZSxFRGlCaEI7O0FBUEM7SUFYTjtNQVlRLHNCQUFxQjtNQUNyQixhQUFZO01BQ1osZUFBYztNQUNkLGtCQUFpQjtNQUNqQixtQkFBa0IsRUFFckIsRUFBQTs7QUFFRDtFQXBCSjtJQXFCTSwrQkFBOEIsRUFFakMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2UvcG9ydGZvbGlvL3BvcnRmb2xpby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4vLi4vLi4vLi4vYXNzZXRzL3Njc3MvcGFsZXR0ZS5zY3NzJztcclxuXHJcbmNvbnRlbnQge1xyXG4gID5kaXYge1xyXG5cclxuICAgIGxhYmVsIHtcclxuICAgICAgY29sb3I6IHBhbGV0dGUtY29sb3IoJ3ByaW1hcnknLCAnMScpO1xyXG4gICAgfVxyXG5cclxuICAgIGEge1xyXG5cclxuICAgICAgY29sb3I6IHBhbGV0dGUtY29sb3IoJ3ByaW1hcnknLCAnMicpO1xyXG5cclxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NTlweCkge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA5MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiJHBhbGV0dGUtY29sb3JzOiAoXHJcbiAgICAncHJpbWFyeScgOiAoXHJcbiAgICAgICAgJzEnIDogIzAwM2U4OCxcclxuICAgICAgICAnMicgOiAjMDBhY2NjLFxyXG4gICAgICAgICczJyA6ICMwMDgwYjFcclxuICAgICksXHJcbiAgICAncHJpbWFyeS1vcGFjaXR5JzogKFxyXG4gICAgICAgICcxJzogIzAwMjc3YThmLFxyXG4gICAgICAgICcxLjEnOiAjMDAyNzdhM2QsXHJcbiAgICAgICAgJzInIDogIzAwNmNhNTY5LFxyXG4gICAgICAgICczJyA6ICMwMGQ4ZTc1NCxcclxuICAgICAgICAnNCcgOiAjNWFjNGQ2LFxyXG4gICAgICAgICc1JyA6ICMwMDNkODg1NFxyXG4gICAgKSxcclxuICAgICdzZWNvbmRhcnknIDogKFxyXG4gICAgICAgICcxJyA6ICMwMDAwMDAyNCxcclxuICAgICAgICAnMicgOiAjMDAwMDAwNjcsXHJcbiAgICApLFxyXG4gICAgJ3RlcnRpYXJ5JyA6IChcclxuICAgICAgICAnMScgOiAjRkZGLFxyXG4gICAgICAgICcyJyA6ICMwMDBcclxuICAgICksXHJcbiAgICAnZm91cnRoJyA6IChcclxuICAgICAgICAnMScgOiAjNGFjOTU5LFxyXG4gICAgICAgICcyJyA6ICMwNzVlNTVcclxuICAgIClcclxuKTtcclxuXHJcbkBmdW5jdGlvbiBwYWxldHRlLWNvbG9yKCR0eXBlLCAkY29sb3IpIHtcclxuICBAcmV0dXJuIG1hcC1nZXQobWFwLWdldCgkcGFsZXR0ZS1jb2xvcnMsICR0eXBlKSwgJGNvbG9yKTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/page/portfolio/portfolio.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/page/portfolio/portfolio.component.ts ***!
  \*******************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _portfolio_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./portfolio.service */ "./src/app/page/portfolio/portfolio.service.ts");
/* harmony import */ var src_app_shared_component_modal_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/component/modal/modal.component */ "./src/app/shared/component/modal/modal.component.ts");
/* harmony import */ var _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ks89/angular-modal-gallery */ "./node_modules/@ks89/angular-modal-gallery/fesm5/ks89-angular-modal-gallery.js");
/* harmony import */ var src_app_shared_component_header_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/component/header/navbar/navbar.component */ "./src/app/shared/component/header/navbar/navbar.component.ts");







var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent(portfolioService, navbar) {
        this.portfolioService = portfolioService;
        this.navbar = navbar;
        this.getProject();
    }
    PortfolioComponent.prototype.setValuesModal = function (gallery) {
        var _this = this;
        this.gallery = gallery;
        this.modal.images = [];
        setTimeout(function () {
            for (var i in Object.entries(_this.gallery)) {
                _this.modal.images[i] =
                    new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_5__["Image"](parseInt(i), {
                        img: _this.gallery[i].url_galeria
                    });
            }
            _this.modal.imagesHtmlDescriptions = _this.modal.images;
            _this.modal.imagesRect = _this.modal.images;
            _this.modal.imagesMixedSizes = _this.modal.images;
            _this.modal.openModalViaService(1, 0);
        }, 500);
    };
    PortfolioComponent.prototype.getProject = function () {
        var _this = this;
        this.portfolioService.getService(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiPortfolio)
            .subscribe(function (result) {
            _this.projetos = result;
        }, function (error) {
            console.log(error);
        });
    };
    PortfolioComponent.prototype.getLengthProject = function (portfolio) {
        return portfolio.length;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_modal_modal_component__WEBPACK_IMPORTED_MODULE_4__["ModalComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_shared_component_modal_modal_component__WEBPACK_IMPORTED_MODULE_4__["ModalComponent"])
    ], PortfolioComponent.prototype, "modal", void 0);
    PortfolioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-portfolio',
            template: __webpack_require__(/*! ./portfolio.component.html */ "./src/app/page/portfolio/portfolio.component.html"),
            styles: [__webpack_require__(/*! ./portfolio.component.scss */ "./src/app/page/portfolio/portfolio.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_portfolio_service__WEBPACK_IMPORTED_MODULE_3__["PortfolioService"],
            src_app_shared_component_header_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"]])
    ], PortfolioComponent);
    return PortfolioComponent;
}());



/***/ }),

/***/ "./src/app/page/portfolio/portfolio.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/page/portfolio/portfolio.service.ts ***!
  \*****************************************************/
/*! exports provided: PortfolioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioService", function() { return PortfolioService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var PortfolioService = /** @class */ (function () {
    function PortfolioService(http) {
        this.http = http;
    }
    PortfolioService.prototype.getService = function (url) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-Type', 'application/json');
        return this.http.get(url, { headers: headers });
    };
    PortfolioService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PortfolioService);
    return PortfolioService;
}());



/***/ }),

/***/ "./src/app/page/technology/technology.component.html":
/*!***********************************************************!*\
  !*** ./src/app/page/technology/technology.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"min-height-100\">\r\n  <main class=\"container padding-t-150 padding-xl-tp-10\">\r\n\r\n    <div fxLayout=\"row\" class=\"margin-b-75\">\r\n      <app-banner data-aos=\"fade-right\" data-aos-once=\"true\" linkPage=\"{{ navbar.items['5-contact'][0].url }}\" urlImage=\"./assets/img/banner-tecnologias.jpg\"\r\n        fxFlex=\"100\"></app-banner>\r\n    </div>\r\n\r\n    <content class=\"margin-t-50\" fxLayout=\"row wrap\" fxLayout.lt-md=\"column\" fxLayoutGap=\"auto\" fxLayoutGap.lt-md=\"120px\">\r\n      <div data-aos=\"zoom-out-left\" data-aos-once=\"true\" class=\"margin-b-135 txt-center content-center\" fxFlex.lt-md=\"100\">\r\n        <h2 class=\"f-size-title margin-0\">Back-end</h2>\r\n        <h3 class=\"f-size-subtitle margin-0\">(Parte funcional)</h3>\r\n        <ul class=\"list padding-b-50\" fxLayoutGap=\"10px\" fxLayout=\"column\">\r\n          <li>NodeJS</li>\r\n          <li>Java</li>\r\n          <li>Hibernate</li>\r\n          <li>JPA</li>\r\n          <li>Spring MVC</li>\r\n          <li>Spring Boot</li>\r\n        </ul>\r\n        <app-triangles></app-triangles>\r\n      </div>\r\n\r\n      <div data-aos=\"zoom-out-left\" data-aos-once=\"true\" class=\"margin-b-135 txt-center content-center\" fxFlex.lt-md=\"100\">\r\n        <h2 class=\"f-size-title margin-0\">Front-end</h2>\r\n        <h3 class=\"f-size-subtitle margin-0\">(Parte funcional e visual)</h3>\r\n        <ul class=\"list padding-b-50\" fxLayoutGap=\"10px\" fxLayout=\"column\">\r\n          <li>Angular 2+</li>\r\n          <li>HTML 5</li>\r\n          <li>CSS 3</li>\r\n          <li>Javascript</li>\r\n          <li>TypeScript</li>\r\n          <li>ECMAScript</li>\r\n          <li>Material Design</li>\r\n          <li>jQuery</li>\r\n          <li>SASS</li>\r\n          <li>Compass</li>\r\n          <li>Bootstrap</li>\r\n          <li>Materialize</li>\r\n          <li>Jasmine</li>\r\n          <li>Jersey</li>\r\n        </ul>\r\n        <app-triangles></app-triangles>\r\n      </div>\r\n\r\n      <div data-aos=\"zoom-out-left\" data-aos-once=\"true\" class=\"margin-b-135 txt-center content-center\" fxFlex.lt-md=\"100\">\r\n        <h2 class=\"f-size-title margin-0\">Banco de dados</h2>\r\n        <h3 class=\"f-size-subtitle margin-0\">(Armazenamento de informações)</h3>\r\n        <ul class=\"list padding-b-50\" fxLayoutGap=\"10px\" fxLayout=\"column\">\r\n          <li>MySQL</li>\r\n          <li>SQL</li>\r\n          <li>Oracle</li>\r\n          <li>MongoDB</li>\r\n          <li>MariaDB</li>\r\n        </ul>\r\n        <app-triangles></app-triangles>\r\n      </div>\r\n    </content>\r\n  </main>\r\n</div>"

/***/ }),

/***/ "./src/app/page/technology/technology.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/page/technology/technology.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media only screen and (max-width: 959px) {\n  main content {\n    margin-top: 0px; } }\n\nmain content h2 {\n  color: #003e88; }\n\nmain content h3 {\n  color: #0080b1; }\n\n@media only screen and (max-width: 959px) {\n  main app-triangles {\n    left: -20px;\n    position: relative; } }\n\n@media only screen and (max-width: 959px) {\n  main > div {\n    margin-bottom: 50px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS90ZWNobm9sb2d5L0M6XFxhbmd1bGFyXFwyMC0wMy0yMDE5LXNpdGUtY3JpYWRvcm5hd2ViLXYyLWFuZ3VsYXI3LWdpdC1pby9zcmNcXGFwcFxccGFnZVxcdGVjaG5vbG9neVxcdGVjaG5vbG9neS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZS90ZWNobm9sb2d5L0M6XFxhbmd1bGFyXFwyMC0wMy0yMDE5LXNpdGUtY3JpYWRvcm5hd2ViLXYyLWFuZ3VsYXI3LWdpdC1pby9zcmNcXGFzc2V0c1xcc2Nzc1xccGFsZXR0ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlJO0VBRko7SUFHTSxnQkFBZSxFQVVsQixFQUFBOztBQWJIO0VBT00sZUNQZSxFRFFoQjs7QUFSTDtFQVdNLGVDVGUsRURVaEI7O0FBSUQ7RUFoQko7SUFpQk0sWUFBVztJQUNYLG1CQUFpQixFQUVwQixFQUFBOztBQUdDO0VBdkJKO0lBd0JNLG9CQUFtQixFQUV0QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZS90ZWNobm9sb2d5L3RlY2hub2xvZ3kuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL3BhbGV0dGUuc2Nzcyc7XHJcblxyXG5tYWluIHtcclxuICBjb250ZW50IHtcclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTU5cHgpIHtcclxuICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGgyIHtcclxuICAgICAgY29sb3I6IHBhbGV0dGUtY29sb3IoJ3ByaW1hcnknLCAnMScpO1xyXG4gICAgfVxyXG5cclxuICAgIGgzIHtcclxuICAgICAgY29sb3I6IHBhbGV0dGUtY29sb3IoJ3ByaW1hcnknLCAnMycpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXBwLXRyaWFuZ2xlcyB7XHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk1OXB4KSB7XHJcbiAgICAgIGxlZnQ6IC0yMHB4O1xyXG4gICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gID4gZGl2IHtcclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTU5cHgpIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiJHBhbGV0dGUtY29sb3JzOiAoXHJcbiAgICAncHJpbWFyeScgOiAoXHJcbiAgICAgICAgJzEnIDogIzAwM2U4OCxcclxuICAgICAgICAnMicgOiAjMDBhY2NjLFxyXG4gICAgICAgICczJyA6ICMwMDgwYjFcclxuICAgICksXHJcbiAgICAncHJpbWFyeS1vcGFjaXR5JzogKFxyXG4gICAgICAgICcxJzogIzAwMjc3YThmLFxyXG4gICAgICAgICcxLjEnOiAjMDAyNzdhM2QsXHJcbiAgICAgICAgJzInIDogIzAwNmNhNTY5LFxyXG4gICAgICAgICczJyA6ICMwMGQ4ZTc1NCxcclxuICAgICAgICAnNCcgOiAjNWFjNGQ2LFxyXG4gICAgICAgICc1JyA6ICMwMDNkODg1NFxyXG4gICAgKSxcclxuICAgICdzZWNvbmRhcnknIDogKFxyXG4gICAgICAgICcxJyA6ICMwMDAwMDAyNCxcclxuICAgICAgICAnMicgOiAjMDAwMDAwNjcsXHJcbiAgICApLFxyXG4gICAgJ3RlcnRpYXJ5JyA6IChcclxuICAgICAgICAnMScgOiAjRkZGLFxyXG4gICAgICAgICcyJyA6ICMwMDBcclxuICAgICksXHJcbiAgICAnZm91cnRoJyA6IChcclxuICAgICAgICAnMScgOiAjNGFjOTU5LFxyXG4gICAgICAgICcyJyA6ICMwNzVlNTVcclxuICAgIClcclxuKTtcclxuXHJcbkBmdW5jdGlvbiBwYWxldHRlLWNvbG9yKCR0eXBlLCAkY29sb3IpIHtcclxuICBAcmV0dXJuIG1hcC1nZXQobWFwLWdldCgkcGFsZXR0ZS1jb2xvcnMsICR0eXBlKSwgJGNvbG9yKTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/page/technology/technology.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/page/technology/technology.component.ts ***!
  \*********************************************************/
/*! exports provided: TechnologyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechnologyComponent", function() { return TechnologyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_component_header_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/component/header/navbar/navbar.component */ "./src/app/shared/component/header/navbar/navbar.component.ts");



var TechnologyComponent = /** @class */ (function () {
    function TechnologyComponent(navbar) {
        this.navbar = navbar;
    }
    TechnologyComponent.prototype.ngOnInit = function () {
    };
    TechnologyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-technology',
            template: __webpack_require__(/*! ./technology.component.html */ "./src/app/page/technology/technology.component.html"),
            styles: [__webpack_require__(/*! ./technology.component.scss */ "./src/app/page/technology/technology.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_component_header_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"]])
    ], TechnologyComponent);
    return TechnologyComponent;
}());



/***/ }),

/***/ "./src/app/shared/component/banner/banner.component.html":
/*!***************************************************************!*\
  !*** ./src/app/shared/component/banner/banner.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a *ngIf=\"linkPage\" routerLink=\"{{ linkPage }}\">\r\n  <div [ngStyle]=\"{ 'background-image': 'url('+urlImage+')'}\"></div>\r\n</a>\r\n\r\n<div *ngIf=\"!linkPage\" [ngStyle]=\"{ 'background-image': 'url('+urlImage+')'}\"></div>"

/***/ }),

/***/ "./src/app/shared/component/banner/banner.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/shared/component/banner/banner.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n  background-repeat: no-repeat;\n  background-size: 100%;\n  background-position: center center;\n  height: 300px; }\n  @media only screen and (max-width: 1278px) {\n    div {\n      background-size: cover;\n      background-position: right center;\n      height: 200px; } }\n  @media only screen and (max-width: 599px) {\n    div {\n      height: 100px; } }\n  @media only screen and (min-width: 2200px) {\n    div {\n      background-size: cover;\n      background-position: right center;\n      height: 500px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudC9iYW5uZXIvQzpcXGFuZ3VsYXJcXDIwLTAzLTIwMTktc2l0ZS1jcmlhZG9ybmF3ZWItdjItYW5ndWxhcjctZ2l0LWlvL3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudFxcYmFubmVyXFxiYW5uZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2QkFBNEI7RUFDNUIsc0JBQXFCO0VBQ3JCLG1DQUFrQztFQUNsQyxjQUFZLEVBaUJiO0VBZkM7SUFORjtNQU9JLHVCQUFzQjtNQUN0QixrQ0FBaUM7TUFDakMsY0FBYSxFQVloQixFQUFBO0VBVEM7SUFaRjtNQWFJLGNBQWEsRUFRaEIsRUFBQTtFQUxDO0lBaEJGO01BaUJJLHVCQUFzQjtNQUN0QixrQ0FBaUM7TUFDakMsY0FBWSxFQUVmLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50L2Jhbm5lci9iYW5uZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYge1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgaGVpZ2h0OjMwMHB4O1xyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyNzhweCkge1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IGNlbnRlcjtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSB7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAyMjAwcHgpIHtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6NTAwcHg7XHJcbiAgfVxyXG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BannerComponent = /** @class */ (function () {
    function BannerComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BannerComponent.prototype, "urlImage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BannerComponent.prototype, "linkPage", void 0);
    BannerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-banner',
            template: __webpack_require__(/*! ./banner.component.html */ "./src/app/shared/component/banner/banner.component.html"),
            styles: [__webpack_require__(/*! ./banner.component.scss */ "./src/app/shared/component/banner/banner.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BannerComponent);
    return BannerComponent;
}());



/***/ }),

/***/ "./src/app/shared/component/black-lines/black-lines.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/shared/component/black-lines/black-lines.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"position-fx\"></div>\r\n<div class=\"position-fx\"></div>"

/***/ }),

/***/ "./src/app/shared/component/black-lines/black-lines.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/shared/component/black-lines/black-lines.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n  width: 4px;\n  margin: 0px auto;\n  border-radius: 0 0 0 10px;\n  z-index: 1; }\n\ndiv:nth-of-type(1) {\n  background: #00000024;\n  left: 20px;\n  height: 100%;\n  top: 0; }\n\n@media only screen and (max-width: 1279px) {\n    div:nth-of-type(1) {\n      left: 5px; } }\n\ndiv:nth-of-type(2) {\n  background: #00000067;\n  left: 30px;\n  height: 40%;\n  bottom: 0; }\n\n@media only screen and (max-width: 1279px) {\n    div:nth-of-type(2) {\n      left: 15px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudC9ibGFjay1saW5lcy9DOlxcYW5ndWxhclxcMjAtMDMtMjAxOS1zaXRlLWNyaWFkb3JuYXdlYi12Mi1hbmd1bGFyNy1naXQtaW8vc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50XFxibGFjay1saW5lc1xcYmxhY2stbGluZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnQvYmxhY2stbGluZXMvQzpcXGFuZ3VsYXJcXDIwLTAzLTIwMTktc2l0ZS1jcmlhZG9ybmF3ZWItdjItYW5ndWxhcjctZ2l0LWlvL3NyY1xcYXNzZXRzXFxzY3NzXFxwYWxldHRlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxXQUFVO0VBQ1YsaUJBQWdCO0VBQ2hCLDBCQUF5QjtFQUN6QixXQUFVLEVBQ1g7O0FBRUQ7RUFDRSxzQkNLcUI7RURKckIsV0FBVTtFQUNWLGFBQVk7RUFDWixPQUFNLEVBS1A7O0FBSEM7SUFORjtNQU9JLFVBQVEsRUFFWCxFQUFBOztBQUVEO0VBQ0Usc0JDTHFCO0VETXJCLFdBQVU7RUFDVixZQUFXO0VBQ1gsVUFBUyxFQUtWOztBQUhDO0lBTkY7TUFPSSxXQUFTLEVBRVosRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnQvYmxhY2stbGluZXMvYmxhY2stbGluZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL3BhbGV0dGUuc2Nzcyc7XHJcblxyXG5kaXYge1xyXG4gIHdpZHRoOiA0cHg7XHJcbiAgbWFyZ2luOiAwcHggYXV0bztcclxuICBib3JkZXItcmFkaXVzOiAwIDAgMCAxMHB4O1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbmRpdjpudGgtb2YtdHlwZSgxKSB7XHJcbiAgYmFja2dyb3VuZDogcGFsZXR0ZS1jb2xvcignc2Vjb25kYXJ5JywgJzEnKTtcclxuICBsZWZ0OiAyMHB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB0b3A6IDA7XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI3OXB4KSB7XHJcbiAgICBsZWZ0OjVweDtcclxuICB9XHJcbn1cclxuXHJcbmRpdjpudGgtb2YtdHlwZSgyKSB7XHJcbiAgYmFja2dyb3VuZDogcGFsZXR0ZS1jb2xvcignc2Vjb25kYXJ5JywgJzInKTtcclxuICBsZWZ0OiAzMHB4O1xyXG4gIGhlaWdodDogNDAlO1xyXG4gIGJvdHRvbTogMDtcclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjc5cHgpIHtcclxuICAgIGxlZnQ6MTVweDtcclxuICB9XHJcbn0iLCIkcGFsZXR0ZS1jb2xvcnM6IChcclxuICAgICdwcmltYXJ5JyA6IChcclxuICAgICAgICAnMScgOiAjMDAzZTg4LFxyXG4gICAgICAgICcyJyA6ICMwMGFjY2MsXHJcbiAgICAgICAgJzMnIDogIzAwODBiMVxyXG4gICAgKSxcclxuICAgICdwcmltYXJ5LW9wYWNpdHknOiAoXHJcbiAgICAgICAgJzEnOiAjMDAyNzdhOGYsXHJcbiAgICAgICAgJzEuMSc6ICMwMDI3N2EzZCxcclxuICAgICAgICAnMicgOiAjMDA2Y2E1NjksXHJcbiAgICAgICAgJzMnIDogIzAwZDhlNzU0LFxyXG4gICAgICAgICc0JyA6ICM1YWM0ZDYsXHJcbiAgICAgICAgJzUnIDogIzAwM2Q4ODU0XHJcbiAgICApLFxyXG4gICAgJ3NlY29uZGFyeScgOiAoXHJcbiAgICAgICAgJzEnIDogIzAwMDAwMDI0LFxyXG4gICAgICAgICcyJyA6ICMwMDAwMDA2NyxcclxuICAgICksXHJcbiAgICAndGVydGlhcnknIDogKFxyXG4gICAgICAgICcxJyA6ICNGRkYsXHJcbiAgICAgICAgJzInIDogIzAwMFxyXG4gICAgKSxcclxuICAgICdmb3VydGgnIDogKFxyXG4gICAgICAgICcxJyA6ICM0YWM5NTksXHJcbiAgICAgICAgJzInIDogIzA3NWU1NVxyXG4gICAgKVxyXG4pO1xyXG5cclxuQGZ1bmN0aW9uIHBhbGV0dGUtY29sb3IoJHR5cGUsICRjb2xvcikge1xyXG4gIEByZXR1cm4gbWFwLWdldChtYXAtZ2V0KCRwYWxldHRlLWNvbG9ycywgJHR5cGUpLCAkY29sb3IpO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/component/black-lines/black-lines.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/shared/component/black-lines/black-lines.component.ts ***!
  \***********************************************************************/
/*! exports provided: BlackLinesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlackLinesComponent", function() { return BlackLinesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BlackLinesComponent = /** @class */ (function () {
    function BlackLinesComponent() {
    }
    BlackLinesComponent.prototype.ngOnInit = function () {
    };
    BlackLinesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-black-lines',
            template: __webpack_require__(/*! ./black-lines.component.html */ "./src/app/shared/component/black-lines/black-lines.component.html"),
            styles: [__webpack_require__(/*! ./black-lines.component.scss */ "./src/app/shared/component/black-lines/black-lines.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BlackLinesComponent);
    return BlackLinesComponent;
}());



/***/ }),

/***/ "./src/app/shared/component/black-lines/black-lines.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/component/black-lines/black-lines.module.ts ***!
  \********************************************************************/
/*! exports provided: BlackLinesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlackLinesModule", function() { return BlackLinesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _black_lines_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./black-lines.component */ "./src/app/shared/component/black-lines/black-lines.component.ts");




var BlackLinesModule = /** @class */ (function () {
    function BlackLinesModule() {
    }
    BlackLinesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_black_lines_component__WEBPACK_IMPORTED_MODULE_3__["BlackLinesComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            exports: [_black_lines_component__WEBPACK_IMPORTED_MODULE_3__["BlackLinesComponent"]]
        })
    ], BlackLinesModule);
    return BlackLinesModule;
}());



/***/ }),

/***/ "./src/app/shared/component/colored-lines/colored-lines.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/shared/component/colored-lines/colored-lines.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"position-ab\"></div>\r\n<div class=\"position-ab\"></div>\r\n<div class=\"position-ab\"></div>"

/***/ }),

/***/ "./src/app/shared/component/colored-lines/colored-lines.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/shared/component/colored-lines/colored-lines.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n  height: 2px;\n  margin: 0px auto;\n  right: 0;\n  border-radius: 0 0 0 10px; }\n\ndiv:nth-of-type(1) {\n  width: 100%;\n  background: #00277a8f;\n  top: 2px; }\n\ndiv:nth-of-type(2) {\n  width: 70%;\n  background: #006ca569;\n  top: 12px; }\n\ndiv:nth-of-type(3) {\n  width: 30%;\n  background: #00d8e754;\n  top: 22px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudC9jb2xvcmVkLWxpbmVzL0M6XFxhbmd1bGFyXFwyMC0wMy0yMDE5LXNpdGUtY3JpYWRvcm5hd2ViLXYyLWFuZ3VsYXI3LWdpdC1pby9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRcXGNvbG9yZWQtbGluZXNcXGNvbG9yZWQtbGluZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnQvY29sb3JlZC1saW5lcy9DOlxcYW5ndWxhclxcMjAtMDMtMjAxOS1zaXRlLWNyaWFkb3JuYXdlYi12Mi1hbmd1bGFyNy1naXQtaW8vc3JjXFxhc3NldHNcXHNjc3NcXHBhbGV0dGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLFlBQVc7RUFDWCxpQkFBZ0I7RUFDaEIsU0FBUTtFQUNSLDBCQUF5QixFQUMxQjs7QUFFRDtFQUNFLFlBQVc7RUFDWCxzQkNKb0I7RURLcEIsU0FBUSxFQUNUOztBQUVEO0VBQ0UsV0FBVTtFQUNWLHNCQ1JxQjtFRFNyQixVQUFTLEVBQ1Y7O0FBRUQ7RUFDRSxXQUFVO0VBQ1Ysc0JDYnFCO0VEY3JCLFVBQVMsRUFDViIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnQvY29sb3JlZC1saW5lcy9jb2xvcmVkLWxpbmVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi8uLi8uLi8uLi8uLi9hc3NldHMvc2Nzcy9wYWxldHRlLnNjc3MnO1xyXG5cclxuZGl2IHtcclxuICBoZWlnaHQ6IDJweDtcclxuICBtYXJnaW46IDBweCBhdXRvO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAwIDEwcHg7XHJcbn1cclxuXHJcbmRpdjpudGgtb2YtdHlwZSgxKSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogcGFsZXR0ZS1jb2xvcigncHJpbWFyeS1vcGFjaXR5JywgJzEnKTtcclxuICB0b3A6IDJweDtcclxufVxyXG5cclxuZGl2Om50aC1vZi10eXBlKDIpIHtcclxuICB3aWR0aDogNzAlO1xyXG4gIGJhY2tncm91bmQ6IHBhbGV0dGUtY29sb3IoJ3ByaW1hcnktb3BhY2l0eScsICcyJyk7XHJcbiAgdG9wOiAxMnB4O1xyXG59XHJcblxyXG5kaXY6bnRoLW9mLXR5cGUoMykge1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgYmFja2dyb3VuZDogcGFsZXR0ZS1jb2xvcigncHJpbWFyeS1vcGFjaXR5JywgJzMnKTtcclxuICB0b3A6IDIycHg7XHJcbn0iLCIkcGFsZXR0ZS1jb2xvcnM6IChcclxuICAgICdwcmltYXJ5JyA6IChcclxuICAgICAgICAnMScgOiAjMDAzZTg4LFxyXG4gICAgICAgICcyJyA6ICMwMGFjY2MsXHJcbiAgICAgICAgJzMnIDogIzAwODBiMVxyXG4gICAgKSxcclxuICAgICdwcmltYXJ5LW9wYWNpdHknOiAoXHJcbiAgICAgICAgJzEnOiAjMDAyNzdhOGYsXHJcbiAgICAgICAgJzEuMSc6ICMwMDI3N2EzZCxcclxuICAgICAgICAnMicgOiAjMDA2Y2E1NjksXHJcbiAgICAgICAgJzMnIDogIzAwZDhlNzU0LFxyXG4gICAgICAgICc0JyA6ICM1YWM0ZDYsXHJcbiAgICAgICAgJzUnIDogIzAwM2Q4ODU0XHJcbiAgICApLFxyXG4gICAgJ3NlY29uZGFyeScgOiAoXHJcbiAgICAgICAgJzEnIDogIzAwMDAwMDI0LFxyXG4gICAgICAgICcyJyA6ICMwMDAwMDA2NyxcclxuICAgICksXHJcbiAgICAndGVydGlhcnknIDogKFxyXG4gICAgICAgICcxJyA6ICNGRkYsXHJcbiAgICAgICAgJzInIDogIzAwMFxyXG4gICAgKSxcclxuICAgICdmb3VydGgnIDogKFxyXG4gICAgICAgICcxJyA6ICM0YWM5NTksXHJcbiAgICAgICAgJzInIDogIzA3NWU1NVxyXG4gICAgKVxyXG4pO1xyXG5cclxuQGZ1bmN0aW9uIHBhbGV0dGUtY29sb3IoJHR5cGUsICRjb2xvcikge1xyXG4gIEByZXR1cm4gbWFwLWdldChtYXAtZ2V0KCRwYWxldHRlLWNvbG9ycywgJHR5cGUpLCAkY29sb3IpO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/component/colored-lines/colored-lines.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/shared/component/colored-lines/colored-lines.component.ts ***!
  \***************************************************************************/
/*! exports provided: ColoredLinesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColoredLinesComponent", function() { return ColoredLinesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ColoredLinesComponent = /** @class */ (function () {
    function ColoredLinesComponent() {
    }
    ColoredLinesComponent.prototype.ngOnInit = function () {
    };
    ColoredLinesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-colored-lines',
            template: __webpack_require__(/*! ./colored-lines.component.html */ "./src/app/shared/component/colored-lines/colored-lines.component.html"),
            styles: [__webpack_require__(/*! ./colored-lines.component.scss */ "./src/app/shared/component/colored-lines/colored-lines.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ColoredLinesComponent);
    return ColoredLinesComponent;
}());



/***/ }),

/***/ "./src/app/shared/component/colored-lines/colored-lines.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/component/colored-lines/colored-lines.module.ts ***!
  \************************************************************************/
/*! exports provided: ColoredLinesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColoredLinesModule", function() { return ColoredLinesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _colored_lines_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./colored-lines.component */ "./src/app/shared/component/colored-lines/colored-lines.component.ts");




var ColoredLinesModule = /** @class */ (function () {
    function ColoredLinesModule() {
    }
    ColoredLinesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _colored_lines_component__WEBPACK_IMPORTED_MODULE_3__["ColoredLinesComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            exports: [_colored_lines_component__WEBPACK_IMPORTED_MODULE_3__["ColoredLinesComponent"]]
        })
    ], ColoredLinesModule);
    return ColoredLinesModule;
}());



/***/ }),

/***/ "./src/app/shared/component/footer/footer.component.html":
/*!***************************************************************!*\
  !*** ./src/app/shared/component/footer/footer.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"txt-right\">\r\n  <div class=\"d-inline-block\">\r\n      <label class=\"padding-20\" fxLayoutAlign=\"center center\">Criador na Web © Copyright 2019 - Todos os direitos reservados</label>\r\n  </div>\r\n</footer>"

/***/ }),

/***/ "./src/app/shared/component/footer/footer.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/shared/component/footer/footer.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer > div {\n  width: 95%;\n  height: 100px;\n  border-width: 3px 0px 3px 3px;\n  border-style: solid;\n  border-color: #003d8854; }\n  @media only screen and (max-width: 800px) {\n    footer > div {\n      width: 90%; } }\n  footer > div label {\n    height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudC9mb290ZXIvQzpcXGFuZ3VsYXJcXDIwLTAzLTIwMTktc2l0ZS1jcmlhZG9ybmF3ZWItdjItYW5ndWxhcjctZ2l0LWlvL3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudFxcZm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnQvZm9vdGVyL0M6XFxhbmd1bGFyXFwyMC0wMy0yMDE5LXNpdGUtY3JpYWRvcm5hd2ViLXYyLWFuZ3VsYXI3LWdpdC1pby9zcmNcXGFzc2V0c1xcc2Nzc1xccGFsZXR0ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBRUksV0FBVTtFQUNWLGNBQWE7RUFDYiw4QkFBNkI7RUFDN0Isb0JBQW1CO0VBQ25CLHdCQ0ltQixFREtwQjtFQVBDO0lBUko7TUFTUSxXQUFVLEVBTWYsRUFBQTtFQWZIO0lBYVEsYUFBVyxFQUNkIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi8uLi8uLi8uLi8uLi9hc3NldHMvc2Nzcy9wYWxldHRlLnNjc3MnO1xyXG5cclxuZm9vdGVyIHtcclxuICA+IGRpdiB7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIGJvcmRlci13aWR0aDogM3B4IDBweCAzcHggM3B4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogcGFsZXR0ZS1jb2xvcigncHJpbWFyeS1vcGFjaXR5JywgJzUnKTtcclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgIH1cclxuXHJcbiAgICBsYWJlbHtcclxuICAgICAgICBoZWlnaHQ6MTAwJTtcclxuICAgIH1cclxuICB9XHJcbn0iLCIkcGFsZXR0ZS1jb2xvcnM6IChcclxuICAgICdwcmltYXJ5JyA6IChcclxuICAgICAgICAnMScgOiAjMDAzZTg4LFxyXG4gICAgICAgICcyJyA6ICMwMGFjY2MsXHJcbiAgICAgICAgJzMnIDogIzAwODBiMVxyXG4gICAgKSxcclxuICAgICdwcmltYXJ5LW9wYWNpdHknOiAoXHJcbiAgICAgICAgJzEnOiAjMDAyNzdhOGYsXHJcbiAgICAgICAgJzEuMSc6ICMwMDI3N2EzZCxcclxuICAgICAgICAnMicgOiAjMDA2Y2E1NjksXHJcbiAgICAgICAgJzMnIDogIzAwZDhlNzU0LFxyXG4gICAgICAgICc0JyA6ICM1YWM0ZDYsXHJcbiAgICAgICAgJzUnIDogIzAwM2Q4ODU0XHJcbiAgICApLFxyXG4gICAgJ3NlY29uZGFyeScgOiAoXHJcbiAgICAgICAgJzEnIDogIzAwMDAwMDI0LFxyXG4gICAgICAgICcyJyA6ICMwMDAwMDA2NyxcclxuICAgICksXHJcbiAgICAndGVydGlhcnknIDogKFxyXG4gICAgICAgICcxJyA6ICNGRkYsXHJcbiAgICAgICAgJzInIDogIzAwMFxyXG4gICAgKSxcclxuICAgICdmb3VydGgnIDogKFxyXG4gICAgICAgICcxJyA6ICM0YWM5NTksXHJcbiAgICAgICAgJzInIDogIzA3NWU1NVxyXG4gICAgKVxyXG4pO1xyXG5cclxuQGZ1bmN0aW9uIHBhbGV0dGUtY29sb3IoJHR5cGUsICRjb2xvcikge1xyXG4gIEByZXR1cm4gbWFwLWdldChtYXAtZ2V0KCRwYWxldHRlLWNvbG9ycywgJHR5cGUpLCAkY29sb3IpO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/component/footer/footer.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/component/footer/footer.component.ts ***!
  \*************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/component/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/shared/component/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/component/header/header.component.html":
/*!***************************************************************!*\
  !*** ./src/app/shared/component/header/header.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"container padding-t-30 padding-b-25 position-ab z-index-10\" fxLayout=\"100\" fxLayoutAlign=\"start center\">\r\n  <app-colored-lines></app-colored-lines>\r\n  <app-logo fxFlex.gt-md=\"15\" fxFlex.lt-md=\"30\" fxFlex.lt-lg=\"20\" fxFlex.lt-sm=\"50\"></app-logo>\r\n  <app-navbar class=\"txt-right\" fxFlex.gt-md=\"85\" fxFlex.lt-md=\"70\" fxFlex.lt-lg=\"80\" fxFlex.lt-sm=\"50\" ></app-navbar>\r\n  <div class=\"border-center position-ab\"></div>\r\n</header>"

/***/ }),

/***/ "./src/app/shared/component/header/header.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/shared/component/header/header.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n  border-bottom: 1px solid #00000024;\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudC9oZWFkZXIvQzpcXGFuZ3VsYXJcXDIwLTAzLTIwMTktc2l0ZS1jcmlhZG9ybmF3ZWItdjItYW5ndWxhcjctZ2l0LWlvL3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudFxcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnQvaGVhZGVyL0M6XFxhbmd1bGFyXFwyMC0wMy0yMDE5LXNpdGUtY3JpYWRvcm5hd2ViLXYyLWFuZ3VsYXI3LWdpdC1pby9zcmNcXGFzc2V0c1xcc2Nzc1xccGFsZXR0ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksbUNDWW1CO0VEWG5CLFlBQVUsRUFDYiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL3BhbGV0dGUuc2Nzcyc7XHJcblxyXG5oZWFkZXIge1xyXG4gICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgcGFsZXR0ZS1jb2xvcignc2Vjb25kYXJ5JywgJzEnKTtcclxuICAgIHdpZHRoOjEwMCU7XHJcbn0iLCIkcGFsZXR0ZS1jb2xvcnM6IChcclxuICAgICdwcmltYXJ5JyA6IChcclxuICAgICAgICAnMScgOiAjMDAzZTg4LFxyXG4gICAgICAgICcyJyA6ICMwMGFjY2MsXHJcbiAgICAgICAgJzMnIDogIzAwODBiMVxyXG4gICAgKSxcclxuICAgICdwcmltYXJ5LW9wYWNpdHknOiAoXHJcbiAgICAgICAgJzEnOiAjMDAyNzdhOGYsXHJcbiAgICAgICAgJzEuMSc6ICMwMDI3N2EzZCxcclxuICAgICAgICAnMicgOiAjMDA2Y2E1NjksXHJcbiAgICAgICAgJzMnIDogIzAwZDhlNzU0LFxyXG4gICAgICAgICc0JyA6ICM1YWM0ZDYsXHJcbiAgICAgICAgJzUnIDogIzAwM2Q4ODU0XHJcbiAgICApLFxyXG4gICAgJ3NlY29uZGFyeScgOiAoXHJcbiAgICAgICAgJzEnIDogIzAwMDAwMDI0LFxyXG4gICAgICAgICcyJyA6ICMwMDAwMDA2NyxcclxuICAgICksXHJcbiAgICAndGVydGlhcnknIDogKFxyXG4gICAgICAgICcxJyA6ICNGRkYsXHJcbiAgICAgICAgJzInIDogIzAwMFxyXG4gICAgKSxcclxuICAgICdmb3VydGgnIDogKFxyXG4gICAgICAgICcxJyA6ICM0YWM5NTksXHJcbiAgICAgICAgJzInIDogIzA3NWU1NVxyXG4gICAgKVxyXG4pO1xyXG5cclxuQGZ1bmN0aW9uIHBhbGV0dGUtY29sb3IoJHR5cGUsICRjb2xvcikge1xyXG4gIEByZXR1cm4gbWFwLWdldChtYXAtZ2V0KCRwYWxldHRlLWNvbG9ycywgJHR5cGUpLCAkY29sb3IpO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/component/header/header.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/component/header/header.component.ts ***!
  \*************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/shared/component/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/shared/component/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/component/header/header.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/component/header/header.module.ts ***!
  \**********************************************************/
/*! exports provided: HeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderModule", function() { return HeaderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/shared/component/header/navbar/navbar.component.ts");
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header.component */ "./src/app/shared/component/header/header.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _logo_logo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./logo/logo.component */ "./src/app/shared/component/header/logo/logo.component.ts");
/* harmony import */ var src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _pipe_pipe_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pipe/pipe.module */ "./src/app/shared/pipe/pipe.module.ts");
/* harmony import */ var _colored_lines_colored_lines_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../colored-lines/colored-lines.module */ "./src/app/shared/component/colored-lines/colored-lines.module.ts");










var HeaderModule = /** @class */ (function () {
    function HeaderModule() {
    }
    HeaderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"],
                _header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                _logo_logo_component__WEBPACK_IMPORTED_MODULE_6__["LogoComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _pipe_pipe_module__WEBPACK_IMPORTED_MODULE_8__["PipeModule"],
                _colored_lines_colored_lines_module__WEBPACK_IMPORTED_MODULE_9__["ColoredLinesModule"],
            ],
            providers: [
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"],
            ],
            exports: [
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"],
                _header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"]
            ],
        })
    ], HeaderModule);
    return HeaderModule;
}());



/***/ }),

/***/ "./src/app/shared/component/header/logo/logo.component.html":
/*!******************************************************************!*\
  !*** ./src/app/shared/component/header/logo/logo.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a routerLink=\"navbar.items['1-home'][0].url\">\r\n  <img data-aos=\"flip-left\" data-aos-once=\"true\" class=\"img-responsive\" src=\"assets/img/logo.png\" />\r\n</a>"

/***/ }),

/***/ "./src/app/shared/component/header/logo/logo.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/shared/component/header/logo/logo.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media only screen and (min-width: 1700px) {\n  img {\n    width: 400px; } }\n\n@media only screen and (max-width: 1280px) {\n  img {\n    width: 200px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudC9oZWFkZXIvbG9nby9DOlxcYW5ndWxhclxcMjAtMDMtMjAxOS1zaXRlLWNyaWFkb3JuYXdlYi12Mi1hbmd1bGFyNy1naXQtaW8vc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50XFxoZWFkZXJcXGxvZ29cXGxvZ28uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFERjtJQUVJLGFBQVksRUFNZixFQUFBOztBQUhDO0VBTEY7SUFNSSxhQUFZLEVBRWYsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnQvaGVhZGVyL2xvZ28vbG9nby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNzAwcHgpIHtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/component/header/logo/logo.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/component/header/logo/logo.component.ts ***!
  \****************************************************************/
/*! exports provided: LogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoComponent", function() { return LogoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../navbar/navbar.component */ "./src/app/shared/component/header/navbar/navbar.component.ts");



var LogoComponent = /** @class */ (function () {
    function LogoComponent(navbar) {
        this.navbar = navbar;
    }
    LogoComponent.prototype.ngOnInit = function () {
    };
    LogoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-logo',
            template: __webpack_require__(/*! ./logo.component.html */ "./src/app/shared/component/header/logo/logo.component.html"),
            styles: [__webpack_require__(/*! ./logo.component.scss */ "./src/app/shared/component/header/logo/logo.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"]])
    ], LogoComponent);
    return LogoComponent;
}());



/***/ }),

/***/ "./src/app/shared/component/header/navbar/navbar.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/shared/component/header/navbar/navbar.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"icons\">\r\n  <i (click)=\"menuIcon = !menuIcon; scrollTop()\" fxHide.gt-md=\"true\" [ngClass]=\"menuIcon === true ? 'opacity-transition-of' : 'opacity-transition-on'\" class=\"d-none z-index-10 position-ab material-icons txt-right\">menu</i>\r\n  <i (click)=\"menuIcon = !menuIcon; scrollTop()\" fxHide.gt-md=\"true\" [ngClass]=\"menuIcon === false ? 'opacity-transition-of' : 'opacity-transition-on'\" class=\"d-none z-index-10 position-fx material-icons txt-right\">close</i>\r\n</div>\r\n\r\n<nav class=\"txt-right\" (window:resize)=\"menuMobile($event.target.innerWidth)\" [ngClass]=\"{'visible-nav': this.menuIcon === true }\">\r\n  <label *ngFor=\"let item of items | keyvalue\">\r\n    <a *ngFor=\"let subitem of item.value\" (click)=\"menuIcon = !menuIcon; scrollTop()\" fxHide.lt-lg=\"true\" class=\"padding-l-15 padding-r-15\"\r\n      routerLink=\"{{ subitem.url }}\" routerLinkActive=\"item-active\">\r\n      {{ subitem.name | textCapitalize }}\r\n    </a>\r\n  </label>\r\n</nav>"

/***/ }),

/***/ "./src/app/shared/component/header/navbar/navbar.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/shared/component/header/navbar/navbar.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media only screen and (max-width: 1279px) {\n  .icons {\n    position: relative;\n    right: 50px;\n    height: 50px; } }\n\n.icons i {\n  font-size: 50px;\n  color: #00accc; }\n\n@media only screen and (max-width: 1279px) {\n    .icons i {\n      display: inline !important; } }\n\n.icons i:last-child {\n  color: #FFF; }\n\nnav a {\n  text-decoration: none;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  color: #003e88; }\n\n@media only screen and (max-width: 1279px) {\n    nav a {\n      color: #FFF !important; } }\n\nnav a.item-active {\n    color: #003e88 !important;\n    font-weight: bolder; }\n\nnav a:visited {\n    color: #003e88; }\n\n@media only screen and (max-width: 959px) {\n      nav a:visited {\n        color: #FFF; } }\n\nnav a:hover {\n    color: #00277a8f; }\n\n@media only screen and (max-width: 959px) {\n      nav a:hover {\n        color: #FFF; } }\n\n@media only screen and (max-width: 1279px) {\n  nav {\n    transition: all 0s;\n    height: 0; } }\n\n@media only screen and (max-width: 1279px) {\n  .visible-nav {\n    position: absolute;\n    background: #5ac4d6;\n    width: 100%;\n    height: 100%;\n    position: fixed;\n    left: 0;\n    top: 0;\n    padding-top: 60px;\n    padding-left: 50px;\n    transition: all 1s;\n    height: 100%; } }\n\n@media only screen and (max-width: 1279px) {\n  .visible-nav a {\n    display: block !important;\n    margin-bottom: 15px;\n    text-align: left;\n    padding: 10px 5px 10px 5px;\n    width: 100px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudC9oZWFkZXIvbmF2YmFyL0M6XFxhbmd1bGFyXFwyMC0wMy0yMDE5LXNpdGUtY3JpYWRvcm5hd2ViLXYyLWFuZ3VsYXI3LWdpdC1pby9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRcXGhlYWRlclxcbmF2YmFyXFxuYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnQvaGVhZGVyL25hdmJhci9DOlxcYW5ndWxhclxcMjAtMDMtMjAxOS1zaXRlLWNyaWFkb3JuYXdlYi12Mi1hbmd1bGFyNy1naXQtaW8vc3JjXFxhc3NldHNcXHNjc3NcXHBhbGV0dGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHRTtFQURGO0lBRUksbUJBQWtCO0lBQ2xCLFlBQVc7SUFDWCxhQUFZLEVBZWYsRUFBQTs7QUFuQkQ7RUFRSSxnQkFBZTtFQUNmLGVDUmlCLEVEYWxCOztBQUhDO0lBWEo7TUFZTSwyQkFBMEIsRUFFN0IsRUFBQTs7QUFkSDtFQWlCSSxZQ0FjLEVEQ2Y7O0FBR0g7RUFHSSxzQkFBcUI7RUFDckIsa0JBQWlCO0VBQ2pCLHFCQUFvQjtFQUNwQixlQzNCaUIsRURzRGxCOztBQXpCQztJQVJKO01BU00sdUJBQWdELEVBd0JuRCxFQUFBOztBQWpDSDtJQWFNLDBCQUErQztJQUMvQyxvQkFBbUIsRUFJcEI7O0FBbEJMO0lBcUJNLGVDMUNlLEVEOENoQjs7QUFIQztNQXRCTjtRQXVCUSxZQzNCVSxFRDZCYixFQUFBOztBQXpCTDtJQTRCTSxpQkM1Q2dCLEVEZ0RqQjs7QUFIQztNQTdCTjtRQThCUSxZQ2xDVSxFRG9DYixFQUFBOztBQUdIO0VBbkNGO0lBb0NJLG1CQUFrQjtJQUNsQixVQUFTLEVBRVosRUFBQTs7QUFHQztFQURGO0lBRUksbUJBQWtCO0lBQ2xCLG9CQ3hEaUI7SUR5RGpCLFlBQVc7SUFDWCxhQUFZO0lBQ1osZ0JBQWU7SUFDZixRQUFPO0lBQ1AsT0FBTTtJQUNOLGtCQUFpQjtJQUNqQixtQkFBa0I7SUFDbEIsbUJBQWtCO0lBQ2xCLGFBQVksRUFZZixFQUFBOztBQVJHO0VBaEJKO0lBaUJNLDBCQUF5QjtJQUN6QixvQkFBbUI7SUFDbkIsaUJBQWdCO0lBQ2hCLDJCQUEwQjtJQUMxQixhQUFZLEVBRWYsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnQvaGVhZGVyL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi8uLi9hc3NldHMvc2Nzcy9wYWxldHRlLnNjc3MnO1xyXG5cclxuLmljb25zIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyNzlweCkge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcmlnaHQ6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgfVxyXG5cclxuICBpIHtcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIGNvbG9yOiBwYWxldHRlLWNvbG9yKCdwcmltYXJ5JywgJzInKTtcclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyNzlweCkge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGk6bGFzdC1jaGlsZCB7XHJcbiAgICBjb2xvcjogcGFsZXR0ZS1jb2xvcigndGVydGlhcnknLCAnMScpO1xyXG4gIH1cclxufVxyXG5cclxubmF2IHtcclxuICBcclxuICBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICBjb2xvcjogcGFsZXR0ZS1jb2xvcigncHJpbWFyeScsICcxJyk7XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjc5cHgpIHtcclxuICAgICAgY29sb3I6IHBhbGV0dGUtY29sb3IoJ3RlcnRpYXJ5JywgJzEnKSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgICYuaXRlbS1hY3RpdmUge1xyXG4gICAgICBjb2xvcjogcGFsZXR0ZS1jb2xvcigncHJpbWFyeScsICcxJykgIWltcG9ydGFudDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NTlweCkge1xyXG4gICAgICAgIFxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJjp2aXNpdGVke1xyXG4gICAgICBjb2xvcjogcGFsZXR0ZS1jb2xvcigncHJpbWFyeScsICcxJyk7XHJcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTU5cHgpIHtcclxuICAgICAgICBjb2xvcjogcGFsZXR0ZS1jb2xvcigndGVydGlhcnknLCAnMScpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgICY6aG92ZXJ7XHJcbiAgICAgIGNvbG9yOiBwYWxldHRlLWNvbG9yKCdwcmltYXJ5LW9wYWNpdHknLCAnMScpO1xyXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk1OXB4KSB7XHJcbiAgICAgICAgY29sb3I6IHBhbGV0dGUtY29sb3IoJ3RlcnRpYXJ5JywgJzEnKTsgICAgICAgIFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyNzlweCkge1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDBzO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gIH1cclxufVxyXG5cclxuLnZpc2libGUtbmF2IHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyNzlweCkge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZDogcGFsZXR0ZS1jb2xvcigncHJpbWFyeS1vcGFjaXR5JywgJzQnKTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHBhZGRpbmctdG9wOiA2MHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDFzO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgYSB7XHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyNzlweCkge1xyXG4gICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDVweCAxMHB4IDVweDtcclxuICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgfVxyXG4gIH1cclxufSIsIiRwYWxldHRlLWNvbG9yczogKFxyXG4gICAgJ3ByaW1hcnknIDogKFxyXG4gICAgICAgICcxJyA6ICMwMDNlODgsXHJcbiAgICAgICAgJzInIDogIzAwYWNjYyxcclxuICAgICAgICAnMycgOiAjMDA4MGIxXHJcbiAgICApLFxyXG4gICAgJ3ByaW1hcnktb3BhY2l0eSc6IChcclxuICAgICAgICAnMSc6ICMwMDI3N2E4ZixcclxuICAgICAgICAnMS4xJzogIzAwMjc3YTNkLFxyXG4gICAgICAgICcyJyA6ICMwMDZjYTU2OSxcclxuICAgICAgICAnMycgOiAjMDBkOGU3NTQsXHJcbiAgICAgICAgJzQnIDogIzVhYzRkNixcclxuICAgICAgICAnNScgOiAjMDAzZDg4NTRcclxuICAgICksXHJcbiAgICAnc2Vjb25kYXJ5JyA6IChcclxuICAgICAgICAnMScgOiAjMDAwMDAwMjQsXHJcbiAgICAgICAgJzInIDogIzAwMDAwMDY3LFxyXG4gICAgKSxcclxuICAgICd0ZXJ0aWFyeScgOiAoXHJcbiAgICAgICAgJzEnIDogI0ZGRixcclxuICAgICAgICAnMicgOiAjMDAwXHJcbiAgICApLFxyXG4gICAgJ2ZvdXJ0aCcgOiAoXHJcbiAgICAgICAgJzEnIDogIzRhYzk1OSxcclxuICAgICAgICAnMicgOiAjMDc1ZTU1XHJcbiAgICApXHJcbik7XHJcblxyXG5AZnVuY3Rpb24gcGFsZXR0ZS1jb2xvcigkdHlwZSwgJGNvbG9yKSB7XHJcbiAgQHJldHVybiBtYXAtZ2V0KG1hcC1nZXQoJHBhbGV0dGUtY29sb3JzLCAkdHlwZSksICRjb2xvcik7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/shared/component/header/navbar/navbar.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/component/header/navbar/navbar.component.ts ***!
  \********************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        this.items = {
            '1-home': [{
                    'name': 'início', 'url': '/home'
                }],
            '2-technology': [{
                    'name': 'tecnologias', 'url': '/technology'
                }],
            '3-portfolio': [{
                    'name': 'portfólio', 'url': '/portfolio'
                }],
            '4-about': [{
                    'name': 'sobre', 'url': '/about'
                }],
            '5-contact': [{
                    'name': 'contato', 'url': '/contact'
                }]
        };
        this.menuIcon = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.menuMobile(window.innerWidth);
    };
    NavbarComponent.prototype.menuMobile = function (event) {
        event <= 1279 ? this.menuIcon = false : this.menuIcon = true;
    };
    NavbarComponent.prototype.scrollTop = function () {
        window.scrollTo(0, 0);
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/shared/component/header/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/shared/component/header/navbar/navbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/shared/component/modal/modal.component.html":
/*!*************************************************************!*\
  !*** ./src/app/shared/component/modal/modal.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ks-modal-gallery [id]=\"1\" [modalImages]=\"images\"></ks-modal-gallery>"

/***/ }),

/***/ "./src/app/shared/component/modal/modal.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/shared/component/modal/modal.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnQvbW9kYWwvbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/component/modal/modal.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/component/modal/modal.component.ts ***!
  \***********************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ks89/angular-modal-gallery */ "./node_modules/@ks89/angular-modal-gallery/fesm5/ks89-angular-modal-gallery.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");





var ModalComponent = /** @class */ (function () {
    function ModalComponent(galleryService, sanitizer) {
        this.galleryService = galleryService;
        this.sanitizer = sanitizer;
        this.images = [
            new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["Image"](0, {
                img: ''
            })
        ];
        this.imagesHtmlDescriptions = this.images;
        this.imagesRect = this.images;
        this.imagesMixedSizes = this.images;
        this.customPlainGalleryRowConfig = {
            strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["PlainGalleryStrategy"].CUSTOM,
            layout: new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["AdvancedLayout"](-1, true)
        };
        this.customPlainGalleryColumnConfig = {
            strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["PlainGalleryStrategy"].CUSTOM,
            layout: new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["AdvancedLayout"](-1, true)
        };
        this.customPlainGalleryRowDescConfig = {
            strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["PlainGalleryStrategy"].CUSTOM,
            layout: new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["AdvancedLayout"](-1, true)
        };
        this.plainGalleryRow = {
            strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["PlainGalleryStrategy"].ROW,
            layout: new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["LineLayout"]({ width: '100%', height: 'auto' }, { length: 0, wrap: true }, 'flex-start')
        };
        this.plainGalleryRowSpaceAround = {
            strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["PlainGalleryStrategy"].ROW,
            layout: new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["LineLayout"]({ width: '50px', height: '50px' }, { length: 2, wrap: true }, 'space-around')
        };
        this.plainGalleryRowATags = {
            strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["PlainGalleryStrategy"].ROW,
            layout: new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["LineLayout"]({ width: '95px', height: '63px' }, { length: 4, wrap: true }, 'flex-start'),
            // when advanced is defined, additionalBackground: '50% 50%/cover' will be used by default.
            // I added this here, to be more explicit.
            advanced: { aTags: true, additionalBackground: '50% 50%/cover' }
        };
        this.plainGalleryColumn = {
            strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["PlainGalleryStrategy"].COLUMN,
            layout: new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["LineLayout"]({ width: '50px', height: '50px' }, { length: 3, wrap: true }, 'flex-start')
        };
        this.plainGalleryGrid = {
            strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["PlainGalleryStrategy"].GRID,
            layout: new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["GridLayout"]({ width: '80px', height: '80px' }, { length: 3, wrap: true })
        };
        // array with a single image inside (the first one)
        this.singleImage = [this.images[0]];
        this.dotsConfig = {
            visible: false
        };
        this.customDescription = {
            strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["DescriptionStrategy"].ALWAYS_VISIBLE,
            imageText: 'Look this image ',
            numberSeparator: ' of ',
            beforeTextDescription: ' => '
        };
        this.customDescriptionStyle = {
            strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["DescriptionStrategy"].ALWAYS_VISIBLE,
            imageText: 'Look this image ',
            numberSeparator: ' of ',
            beforeTextDescription: ' => ',
            style: {
                bgColor: 'rgba(255,0,0,.5)',
                textColor: 'blue',
                marginTop: '3px',
                marginBottom: '0px',
                marginLeft: '5px',
                marginRight: '5px',
                position: 'absolute',
                top: '0px',
                height: '25px'
                // be careful to use width, in particular with % values
            }
        };
        this.customDescriptionHideIfEmpty = {
            strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["DescriptionStrategy"].HIDE_IF_EMPTY,
            imageText: 'Look this image ',
            numberSeparator: ' of ',
            beforeTextDescription: ' => '
        };
        this.customFullDescription = {
            strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["DescriptionStrategy"].ALWAYS_VISIBLE,
            // you should build this value programmaticaly with the result of (show)="..()" event
            customFullDescription: 'Custom description of the current visible image'
            // if customFullDescription !== undefined, all other fields will be ignored
            // imageText: 'Imagem',
            // numberSeparator: '/',
            // beforeTextDescription: '',
        };
        this.customFullDescriptionHidden = {
            strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["DescriptionStrategy"].ALWAYS_HIDDEN,
            // you should build this value programmaticaly with the result of (show)="..()" event
            customFullDescription: 'Custom description of the current visible image'
            // if customFullDescription !== undefined, all other fields will be ignored
            // imageText: '',
            // numberSeparator: '',
            // beforeTextDescription: '',
        };
        // customButtonsSize: ButtonSize = {
        //   width: 10,
        //   height: 10,
        //   unit: 'px'
        // };
        this.buttonsConfigDefault = {
            visible: true,
            strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["ButtonsStrategy"].DEFAULT
        };
        this.buttonsConfigSimple = {
            visible: true,
            strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["ButtonsStrategy"].SIMPLE
        };
        this.buttonsConfigAdvanced = {
            visible: true,
            strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["ButtonsStrategy"].ADVANCED
        };
        this.buttonsConfigFull = {
            visible: true,
            strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["ButtonsStrategy"].FULL
        };
        // default buttons but extUrl will open the link in a new tab instead of the current one
        // this requires to specify all buttons manually (also if they are not really custom)
        this.customButtonsConfigExtUrlNewTab = {
            visible: true,
            strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["ButtonsStrategy"].CUSTOM,
            buttons: [
                {
                    className: 'ext-url-image',
                    type: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["ButtonType"].EXTURL,
                    extUrlInNewTab: true // <--- this is the important thing to understand this example
                },
                {
                    className: 'download-image',
                    type: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["ButtonType"].DOWNLOAD
                },
                {
                    className: 'close-image',
                    type: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["ButtonType"].CLOSE
                }
            ]
        };
        this.customButtonsFontAwesomeConfig = {
            visible: true,
            strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["ButtonsStrategy"].CUSTOM,
            buttons: [
                {
                    className: 'fas fa-plus white',
                    type: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["ButtonType"].CUSTOM,
                    ariaLabel: 'custom plus aria label',
                    title: 'custom plus title',
                    fontSize: '20px'
                },
                {
                    className: 'fas fa-times white',
                    type: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["ButtonType"].CLOSE,
                    ariaLabel: 'custom close aria label',
                    title: 'custom close title',
                    fontSize: '20px'
                },
                {
                    className: 'fas fa-download white',
                    type: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["ButtonType"].DOWNLOAD,
                    ariaLabel: 'custom download aria label',
                    title: 'custom download title',
                    fontSize: '20px'
                },
                {
                    className: 'fas fa-external-link-alt white',
                    type: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["ButtonType"].EXTURL,
                    ariaLabel: 'custom exturl aria label',
                    title: 'custom exturl title',
                    fontSize: '20px'
                }
            ]
        };
        this.previewConfigOneImage = {
            visible: true,
            number: 1
        };
        this.previewConfigNoArrows = {
            visible: true,
            arrows: false
        };
        this.previewConfigNoClickable = {
            visible: true,
            clickable: false
        };
        // TODO still not implemented
        this.previewConfigAlwaysCenter = {
            visible: true
        };
        this.previewConfigCustomSize = {
            visible: true,
            size: { width: '30px', height: '30px' }
        };
        this.accessibilityConfig = {
            backgroundAriaLabel: 'CUSTOM Modal gallery full screen background',
            backgroundTitle: 'CUSTOM background title',
            plainGalleryContentAriaLabel: 'CUSTOM Plain gallery content',
            plainGalleryContentTitle: 'CUSTOM plain gallery content title',
            modalGalleryContentAriaLabel: 'CUSTOM Modal gallery content',
            modalGalleryContentTitle: 'CUSTOM modal gallery content title',
            loadingSpinnerAriaLabel: 'CUSTOM The current image is loading. Please be patient.',
            loadingSpinnerTitle: 'CUSTOM The current image is loading. Please be patient.',
            mainContainerAriaLabel: 'CUSTOM Current image and navigation',
            mainContainerTitle: 'CUSTOM main container title',
            mainPrevImageAriaLabel: 'CUSTOM Previous image',
            mainPrevImageTitle: 'CUSTOM Previous image',
            mainNextImageAriaLabel: 'CUSTOM Next image',
            mainNextImageTitle: 'CUSTOM Next image',
            dotsContainerAriaLabel: 'CUSTOM Image navigation dots',
            dotsContainerTitle: 'CUSTOM dots container title',
            dotAriaLabel: 'CUSTOM Navigate to image number',
            previewsContainerAriaLabel: 'CUSTOM Image previews',
            previewsContainerTitle: 'CUSTOM previews title',
            previewScrollPrevAriaLabel: 'CUSTOM Scroll previous previews',
            previewScrollPrevTitle: 'CUSTOM Scroll previous previews',
            previewScrollNextAriaLabel: 'CUSTOM Scroll next previews',
            previewScrollNextTitle: 'CUSTOM Scroll next previews',
            carouselContainerAriaLabel: 'Current image and navigation',
            carouselContainerTitle: '',
            carouselPrevImageAriaLabel: 'Previous image',
            carouselPrevImageTitle: 'Previous image',
            carouselNextImageAriaLabel: 'Next image',
            carouselNextImageTitle: 'Next image',
            carouselPreviewsContainerAriaLabel: 'Image previews',
            carouselPreviewsContainerTitle: '',
            carouselPreviewScrollPrevAriaLabel: 'Scroll previous previews',
            carouselPreviewScrollPrevTitle: 'Scroll previous previews',
            carouselPreviewScrollNextAriaLabel: 'Scroll next previews',
            carouselPreviewScrollNextTitle: 'Scroll next previews'
        };
        this.name = "" + _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_4__["VERSION"].full;
    }
    ModalComponent.prototype.ngOnInit = function () {
    };
    ModalComponent.prototype.openImageModalRow = function (image) {
        console.log('Opening modal gallery from custom plain gallery row, with image: ', image);
        var index = this.getCurrentIndexCustomLayout(image, this.images);
        this.customPlainGalleryRowConfig = Object.assign({}, this.customPlainGalleryRowConfig, { layout: new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["AdvancedLayout"](index, true) });
    };
    ModalComponent.prototype.openImageModalColumn = function (image) {
        console.log('Opening modal gallery from custom plain gallery column, with image: ', image);
        var index = this.getCurrentIndexCustomLayout(image, this.images);
        this.customPlainGalleryColumnConfig = Object.assign({}, this.customPlainGalleryColumnConfig, { layout: new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["AdvancedLayout"](index, true) });
    };
    ModalComponent.prototype.openImageModalRowDescription = function (image) {
        console.log('Opening modal gallery from custom plain gallery row and description, with image: ', image);
        var index = this.getCurrentIndexCustomLayout(image, this.imagesRect);
        this.customPlainGalleryRowDescConfig = Object.assign({}, this.customPlainGalleryRowDescConfig, { layout: new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["AdvancedLayout"](index, true) });
    };
    ModalComponent.prototype.onButtonBeforeHook = function (event) {
        console.log('onButtonBeforeHook ', event);
        if (!event || !event.button) {
            return;
        }
        // Invoked after a click on a button, but before that the related
        // action is applied.
        // For instance: this method will be invoked after a click
        // of 'close' button, but before that the modal gallery
        // will be really closed.
        if (event.button.type === _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["ButtonType"].DELETE) {
            // remove the current image and reassign all other to the array of images
            console.log('delete in app with images count ' + this.images.length);
            this.images = this.images.filter(function (val) { return event.image && val.id !== event.image.id; });
        }
    };
    ModalComponent.prototype.onButtonAfterHook = function (event) {
        console.log('onButtonAfterHook ', event);
        if (!event || !event.button) {
            return;
        }
        // Invoked after both a click on a button and its related action.
        // For instance: this method will be invoked after a click
        // of 'close' button, but before that the modal gallery
        // will be really closed.
    };
    ModalComponent.prototype.onCustomButtonBeforeHook = function (event, galleryId) {
        var _this = this;
        console.log('onCustomButtonBeforeHook with galleryId=' + galleryId + ' and event: ', event);
        if (!event || !event.button) {
            return;
        }
        // Invoked after a click on a button, but before that the related
        // action is applied.
        if (event.button.type === _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["ButtonType"].CUSTOM) {
            console.log('adding a new random image at the end');
            this.addRandomImage();
            setTimeout(function () {
                _this.galleryService.openGallery(galleryId, _this.images.length - 1);
            }, 0);
        }
    };
    ModalComponent.prototype.onCustomButtonAfterHook = function (event, galleryId) {
        console.log('onCustomButtonAfterHook with galleryId=' + galleryId + ' and event: ', event);
        if (!event || !event.button) {
            return;
        }
        // Invoked after both a click on a button and its related action.
    };
    ModalComponent.prototype.onImageLoaded = function (event) {
        // angular-modal-gallery will emit this event if it will load successfully input images
        console.log('onImageLoaded action: ' + _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["Action"][event.action]);
        console.log('onImageLoaded result:' + event.result);
    };
    ModalComponent.prototype.onVisibleIndex = function (event) {
        console.log('onVisibleIndex action: ' + _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["Action"][event.action]);
        console.log('onVisibleIndex result:' + event.result);
    };
    ModalComponent.prototype.onIsFirstImage = function (event) {
        console.log('onIsFirstImage onfirst action: ' + _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["Action"][event.action]);
        console.log('onIsFirstImage onfirst result:' + event.result);
    };
    ModalComponent.prototype.onIsLastImage = function (event) {
        console.log('onIsLastImage onlast action: ' + _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["Action"][event.action]);
        console.log('onIsLastImage onlast result:' + event.result);
    };
    ModalComponent.prototype.onCloseImageModal = function (event) {
        console.log('onClose action: ' + _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["Action"][event.action]);
        console.log('onClose result:' + event.result);
        // reset custom plain gallery config
        this.customPlainGalleryRowConfig = Object.assign({}, this.customPlainGalleryRowConfig, { layout: new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["AdvancedLayout"](-1, true) });
        this.customPlainGalleryColumnConfig = Object.assign({}, this.customPlainGalleryColumnConfig, { layout: new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["AdvancedLayout"](-1, true) });
        this.customPlainGalleryRowDescConfig = Object.assign({}, this.customPlainGalleryRowDescConfig, { layout: new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["AdvancedLayout"](-1, true) });
    };
    ModalComponent.prototype.onShowAutoCloseExample = function (event, galleryId) {
        var _this = this;
        console.log("onShowAutoCloseExample with id=" + galleryId + " action: " + _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["Action"][event.action]);
        console.log('onShowAutoCloseExample result:' + event.result);
        console.log('Starting timeout of 3 second to close modal gallery automatically');
        setTimeout(function () {
            console.log('setTimeout end - closing gallery with id=' + galleryId);
            _this.galleryService.closeGallery(galleryId);
        }, 3000);
    };
    ModalComponent.prototype.addRandomImage = function () {
        var imageToCopy = this.images[Math.floor(Math.random() * this.images.length)];
        var newImage = new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["Image"](this.images.length - 1 + 1, imageToCopy.modal, imageToCopy.plain);
        this.images = this.images.concat([newImage]);
    };
    ModalComponent.prototype.openModalViaService = function (id, index) {
        this.galleryService.openGallery(id, index);
    };
    ModalComponent.prototype.trackById = function (index, item) {
        return item.id;
    };
    ModalComponent.prototype.getCurrentIndexCustomLayout = function (image, images) {
        return image ? images.indexOf(image) : -1;
    };
    ModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modal',
            template: __webpack_require__(/*! ./modal.component.html */ "./src/app/shared/component/modal/modal.component.html"),
            styles: [__webpack_require__(/*! ./modal.component.scss */ "./src/app/shared/component/modal/modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["GalleryService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/app/shared/component/triangles/triangles.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/shared/component/triangles/triangles.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"triangle\">\r\n    <div></div>\r\n    <div></div>\r\n    <div></div>\r\n    <div></div>\r\n    <div></div>\r\n    <div></div>               \r\n</div>"

/***/ }),

/***/ "./src/app/shared/component/triangles/triangles.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/shared/component/triangles/triangles.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".triangle div {\n  display: inline;\n  position: relative; }\n\n.triangle div:nth-of-type(1) {\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 13px 0 13px 25px;\n  border-color: transparent transparent transparent rgba(0, 66, 139, 0.3); }\n\n.triangle div:nth-of-type(2) {\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 15px 30px 15px 0;\n  border-color: transparent rgba(255, 216, 236, 0.4) transparent transparent;\n  top: 20px;\n  left: 15px; }\n\n.triangle div:nth-of-type(3) {\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 13px 0 13px 25px;\n  border-color: transparent transparent transparent rgba(0, 232, 240, 0.3);\n  left: 53px;\n  top: 20px; }\n\n.triangle div:nth-of-type(4) {\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 13px 0 13px 25px;\n  border-color: transparent transparent transparent rgba(0, 134, 180, 0.3);\n  top: 43px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudC90cmlhbmdsZXMvQzpcXGFuZ3VsYXJcXDIwLTAzLTIwMTktc2l0ZS1jcmlhZG9ybmF3ZWItdjItYW5ndWxhcjctZ2l0LWlvL3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudFxcdHJpYW5nbGVzXFx0cmlhbmdsZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHUSxnQkFBYztFQUNkLG1CQUFpQixFQUNwQjs7QUFMTDtFQVFRLFNBQVE7RUFDUixVQUFTO0VBQ1Qsb0JBQW1CO0VBQ25CLCtCQUE4QjtFQUM5Qix3RUFBdUUsRUFDMUU7O0FBYkw7RUFnQlEsU0FBUTtFQUNSLFVBQVM7RUFDVCxvQkFBbUI7RUFDbkIsK0JBQThCO0VBQzlCLDJFQUEwRTtFQUMxRSxVQUFRO0VBQ1IsV0FBUyxFQUVaOztBQXhCTDtFQTJCUSxTQUFRO0VBQ1IsVUFBUztFQUNULG9CQUFtQjtFQUNuQiwrQkFBOEI7RUFDOUIseUVBQXdFO0VBQ3hFLFdBQVM7RUFDVCxVQUFRLEVBQ1g7O0FBbENMO0VBcUNRLFNBQVE7RUFDUixVQUFTO0VBQ1Qsb0JBQW1CO0VBQ25CLCtCQUE4QjtFQUM5Qix5RUFBd0U7RUFDeEUsVUFBUSxFQUVYIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudC90cmlhbmdsZXMvdHJpYW5nbGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRyaWFuZ2xle1xyXG5cclxuICAgIGRpdntcclxuICAgICAgICBkaXNwbGF5OmlubGluZTtcclxuICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIH1cclxuXHJcbiAgICBkaXY6bnRoLW9mLXR5cGUoMSl7XHJcbiAgICAgICAgd2lkdGg6IDA7XHJcbiAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAxM3B4IDAgMTNweCAyNXB4O1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgcmdiYSgwLCA2NiwgMTM5LCAwLjMpO1xyXG4gICAgfVxyXG5cclxuICAgIGRpdjpudGgtb2YtdHlwZSgyKXtcclxuICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICBib3JkZXItd2lkdGg6IDE1cHggMzBweCAxNXB4IDA7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCByZ2JhKDI1NSwgMjE2LCAyMzYsIDAuNCkgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgdG9wOjIwcHg7XHJcbiAgICAgICAgbGVmdDoxNXB4O1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGRpdjpudGgtb2YtdHlwZSgzKXtcclxuICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICBib3JkZXItd2lkdGg6IDEzcHggMCAxM3B4IDI1cHg7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCByZ2JhKDAsIDIzMiwgMjQwLCAwLjMpO1xyXG4gICAgICAgIGxlZnQ6NTNweDtcclxuICAgICAgICB0b3A6MjBweDtcclxuICAgIH1cclxuXHJcbiAgICBkaXY6bnRoLW9mLXR5cGUoNCl7XHJcbiAgICAgICAgd2lkdGg6IDA7XHJcbiAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAxM3B4IDAgMTNweCAyNXB4O1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgcmdiYSgwLCAxMzQsIDE4MCwgMC4zKTtcclxuICAgICAgICB0b3A6NDNweDtcclxuXHJcbiAgICB9XHJcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TrianglesComponent = /** @class */ (function () {
    function TrianglesComponent() {
    }
    TrianglesComponent.prototype.ngOnInit = function () {
    };
    TrianglesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-triangles',
            template: __webpack_require__(/*! ./triangles.component.html */ "./src/app/shared/component/triangles/triangles.component.html"),
            styles: [__webpack_require__(/*! ./triangles.component.scss */ "./src/app/shared/component/triangles/triangles.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _triangles_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./triangles.component */ "./src/app/shared/component/triangles/triangles.component.ts");




var TrianglesModule = /** @class */ (function () {
    function TrianglesModule() {
    }
    TrianglesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
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



/***/ }),

/***/ "./src/app/shared/pipe/length/length.pipe.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/pipe/length/length.pipe.ts ***!
  \***************************************************/
/*! exports provided: LengthPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LengthPipe", function() { return LengthPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LengthPipe = /** @class */ (function () {
    function LengthPipe() {
    }
    LengthPipe.prototype.transform = function (value) {
        return value.length;
    };
    LengthPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'length'
        })
    ], LengthPipe);
    return LengthPipe;
}());



/***/ }),

/***/ "./src/app/shared/pipe/pipe.module.ts":
/*!********************************************!*\
  !*** ./src/app/shared/pipe/pipe.module.ts ***!
  \********************************************/
/*! exports provided: PipeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipeModule", function() { return PipeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _text_capitalize_text_capitalize_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./text-capitalize/text-capitalize.pipe */ "./src/app/shared/pipe/text-capitalize/text-capitalize.pipe.ts");
/* harmony import */ var _reverse_reverse_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reverse/reverse.pipe */ "./src/app/shared/pipe/reverse/reverse.pipe.ts");
/* harmony import */ var _www_www_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./www/www.pipe */ "./src/app/shared/pipe/www/www.pipe.ts");
/* harmony import */ var _length_length_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./length/length.pipe */ "./src/app/shared/pipe/length/length.pipe.ts");







var PipeModule = /** @class */ (function () {
    function PipeModule() {
    }
    PipeModule_1 = PipeModule;
    PipeModule.forRoot = function () {
        return {
            ngModule: PipeModule_1,
            providers: [],
        };
    };
    var PipeModule_1;
    PipeModule = PipeModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _text_capitalize_text_capitalize_pipe__WEBPACK_IMPORTED_MODULE_3__["TextCapitalizePipe"],
                _reverse_reverse_pipe__WEBPACK_IMPORTED_MODULE_4__["ReversePipe"],
                _www_www_pipe__WEBPACK_IMPORTED_MODULE_5__["WwwPipe"],
                _length_length_pipe__WEBPACK_IMPORTED_MODULE_6__["LengthPipe"]
            ],
            exports: [
                _text_capitalize_text_capitalize_pipe__WEBPACK_IMPORTED_MODULE_3__["TextCapitalizePipe"],
                _reverse_reverse_pipe__WEBPACK_IMPORTED_MODULE_4__["ReversePipe"],
                _www_www_pipe__WEBPACK_IMPORTED_MODULE_5__["WwwPipe"],
                _length_length_pipe__WEBPACK_IMPORTED_MODULE_6__["LengthPipe"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ]
        })
    ], PipeModule);
    return PipeModule;
}());



/***/ }),

/***/ "./src/app/shared/pipe/reverse/reverse.pipe.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/pipe/reverse/reverse.pipe.ts ***!
  \*****************************************************/
/*! exports provided: ReversePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReversePipe", function() { return ReversePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ReversePipe = /** @class */ (function () {
    function ReversePipe() {
    }
    ReversePipe.prototype.transform = function (value) {
        if (value) {
            return value.reverse();
        }
    };
    ReversePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'reverse'
        })
    ], ReversePipe);
    return ReversePipe;
}());



/***/ }),

/***/ "./src/app/shared/pipe/text-capitalize/text-capitalize.pipe.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/pipe/text-capitalize/text-capitalize.pipe.ts ***!
  \*********************************************************************/
/*! exports provided: TextCapitalizePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextCapitalizePipe", function() { return TextCapitalizePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TextCapitalizePipe = /** @class */ (function () {
    function TextCapitalizePipe() {
    }
    TextCapitalizePipe.prototype.transform = function (input) {
        return input.length === 0 ? '' : input.charAt(0).toUpperCase() + input.slice(1);
    };
    TextCapitalizePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'textCapitalize'
        })
    ], TextCapitalizePipe);
    return TextCapitalizePipe;
}());



/***/ }),

/***/ "./src/app/shared/pipe/www/www.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/pipe/www/www.pipe.ts ***!
  \*********************************************/
/*! exports provided: WwwPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WwwPipe", function() { return WwwPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WwwPipe = /** @class */ (function () {
    function WwwPipe() {
    }
    WwwPipe.prototype.transform = function (value) {
        if (value.indexOf("http://") != -1) {
            return value.replace("http://", "www.");
        }
        return value.replace("https://", "www.");
    };
    WwwPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'www'
        })
    ], WwwPipe);
    return WwwPipe;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _component_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/footer/footer.component */ "./src/app/shared/component/footer/footer.component.ts");
/* harmony import */ var _component_header_header_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/header/header.module */ "./src/app/shared/component/header/header.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _component_triangles_triangles_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/triangles/triangles.module */ "./src/app/shared/component/triangles/triangles.module.ts");
/* harmony import */ var _component_banner_banner_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/banner/banner.component */ "./src/app/shared/component/banner/banner.component.ts");
/* harmony import */ var _component_modal_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/modal/modal.component */ "./src/app/shared/component/modal/modal.component.ts");
/* harmony import */ var _pipe_pipe_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pipe/pipe.module */ "./src/app/shared/pipe/pipe.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _component_black_lines_black_lines_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./component/black-lines/black-lines.module */ "./src/app/shared/component/black-lines/black-lines.module.ts");
/* harmony import */ var _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ks89/angular-modal-gallery */ "./node_modules/@ks89/angular-modal-gallery/fesm5/ks89-angular-modal-gallery.js");















var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _component_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
                _component_banner_banner_component__WEBPACK_IMPORTED_MODULE_8__["BannerComponent"],
                _component_modal_modal_component__WEBPACK_IMPORTED_MODULE_9__["ModalComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _component_header_header_module__WEBPACK_IMPORTED_MODULE_5__["HeaderModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
                _component_triangles_triangles_module__WEBPACK_IMPORTED_MODULE_7__["TrianglesModule"],
                _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_14__["GalleryModule"],
            ],
            exports: [
                _component_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
                _component_header_header_module__WEBPACK_IMPORTED_MODULE_5__["HeaderModule"],
                _component_triangles_triangles_module__WEBPACK_IMPORTED_MODULE_7__["TrianglesModule"],
                _component_banner_banner_component__WEBPACK_IMPORTED_MODULE_8__["BannerComponent"],
                _component_modal_modal_component__WEBPACK_IMPORTED_MODULE_9__["ModalComponent"],
                _pipe_pipe_module__WEBPACK_IMPORTED_MODULE_10__["PipeModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                _component_black_lines_black_lines_module__WEBPACK_IMPORTED_MODULE_13__["BlackLinesModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiPortfolio: "https://www.mocky.io/v2/5e3434273000008245d9637d",
    apiWhatsapp: "https://api.whatsapp.com/send?phone=5511959662923&text="
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\angular\20-03-2019-site-criadornaweb-v2-angular7-git-io\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map