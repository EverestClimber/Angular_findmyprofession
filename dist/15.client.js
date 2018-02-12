webpackJsonp([15],{

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__page_404_component__ = __webpack_require__(761);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_404_routing_module__ = __webpack_require__(856);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page404Module", function() { return Page404Module; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Page404Module = (function () {
    function Page404Module() {
    }
    return Page404Module;
}());
Page404Module = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__page_404_component__["a" /* Page404Component */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__page_404_routing_module__["a" /* Page404RoutingModule */]
        ]
    })
], Page404Module);



/***/ }),

/***/ 761:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page404Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Page404Component = (function () {
    function Page404Component() {
    }
    return Page404Component;
}());
Page404Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'fmp-404',
        template: __webpack_require__(950),
        styles: [__webpack_require__(888).toString()]
    })
], Page404Component);



/***/ }),

/***/ 856:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__page_404_component__ = __webpack_require__(761);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page404RoutingModule; });


var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__page_404_component__["a" /* Page404Component */]
    }
];
var Page404RoutingModule = __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forChild(routes);


/***/ }),

/***/ 888:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(undefined);
// imports


// module
exports.push([module.i, ".page-404-content{display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;background-color:#1575a5;color:#fff;padding:70px 0 80px}@media (min-width:1025px){.page-404-content{height:100%;max-height:930px;padding:86px 0 20px}}@media only screen and (min-device-width:1024px) and (max-device-width:1366px){.page-404-content{height:700px}}@media only screen and (min-device-width:375px) and (max-device-width:736px) and (-webkit-min-device-pixel-ratio:2) and (orientation:landscape){.page-404-content{padding:20px 0 30px}}.page-404-content h1{font-size:70px;line-height:1;font-weight:400}@media (min-width:600px){.page-404-content h1{font-size:120px}}@media (min-width:1025px){.page-404-content h1{font-size:160px}}.page-404-content .subtitle{text-align:center;padding-bottom:20px}@media (min-width:600px){.page-404-content .subtitle{padding-bottom:35px}}.page-404-content .btn-md{width:auto;font-size:22px;padding:0 20px;height:58px;line-height:56px}@media (min-width:600px){.page-404-content .btn-md{height:63px;font-size:30px;line-height:61px;padding:0 40px}}", ""]);

// exports


/***/ }),

/***/ 950:
/***/ (function(module, exports) {

module.exports = "<div class=\"page-404-content\">\r\n  <h1>404</h1>\r\n  <div class=\"subtitle\">\r\n    <p>Sorry!</p>\r\n    <p>The page You`re looking for, was not found.</p>\r\n  </div>\r\n  <a routerLink=\"/\" class=\"btn btn-md btn-border-anim\">Back to Homepage</a>\r\n</div>";

/***/ })

});