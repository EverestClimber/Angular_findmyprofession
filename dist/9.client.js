webpackJsonp([9],{

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_routing_module__ = __webpack_require__(787);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_component__ = __webpack_require__(729);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__about_resolver__ = __webpack_require__(730);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutModule", function() { return AboutModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AboutModule = (function () {
    function AboutModule() {
    }
    return AboutModule;
}());
AboutModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__about_routing_module__["a" /* AboutRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__about_resolver__["a" /* AboutPageResolver */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__about_component__["a" /* AboutComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__about_component__["a" /* AboutComponent */]
        ]
    })
], AboutModule);



/***/ }),

/***/ 729:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_services_meta_tags_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_config__ = __webpack_require__(27);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




__webpack_require__(893);
var AboutComponent = (function () {
    function AboutComponent(route, metaService) {
        this.route = route;
        this.metaService = metaService;
        var data = route.snapshot.data.page;
        if (data.content) {
            this.pageData = data.content;
        }
        this.metaService.setMetaTags(data);
        this.metaService.setImages(__WEBPACK_IMPORTED_MODULE_3__main_config__["a" /* DOMAIN_URL */] + "/src/assets/images/logo-og.png");
    }
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'fmp-about-component',
        template: __webpack_require__(907),
        styles: [__webpack_require__(862).toString()],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"],
        __WEBPACK_IMPORTED_MODULE_2__core_services_meta_tags_service__["a" /* MetaTags */]])
], AboutComponent);



/***/ }),

/***/ 730:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_transfer_http_transfer_http__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_models_api_urls_model__ = __webpack_require__(50);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPageResolver; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Service to get data before home page is loaded
 */
var AboutPageResolver = (function () {
    function AboutPageResolver(http) {
        this.http = http;
    }
    /**
     * Method to get page data
     * @param route
     * @returns {Observable<IAboutUsPage>}
     */
    AboutPageResolver.prototype.resolve = function (route) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__modules_transfer_http_transfer_http__["a" /* TransferHttp */].getUrl(__WEBPACK_IMPORTED_MODULE_2__core_models_api_urls_model__["o" /* ABOUT_PAGE_DATA */], true));
    };
    return AboutPageResolver;
}());
AboutPageResolver = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__modules_transfer_http_transfer_http__["a" /* TransferHttp */]])
], AboutPageResolver);



/***/ }),

/***/ 787:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_resolver__ = __webpack_require__(730);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_component__ = __webpack_require__(729);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutRoutingModule; });



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__about_component__["a" /* AboutComponent */],
        resolve: {
            page: __WEBPACK_IMPORTED_MODULE_1__about_resolver__["a" /* AboutPageResolver */]
        }
    }
];
var AboutRoutingModule = __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forChild(routes);


/***/ }),

/***/ 862:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(undefined);
// imports


// module
exports.push([module.i, ".about-content{padding-bottom:0}.about-content .text-content{margin-bottom:20px}@media (min-width:1025px){.about-content .text-content{margin-bottom:40px}}.about-content .stuff,.about-content .stuff-lg{height:auto;width:100%}@media (min-width:1025px){.about-content .stuff{display:none}}.about-content .stuff-lg{max-width:1290px;display:none}@media (min-width:1025px){.about-content .stuff-lg{display:block}}", ""]);

// exports


/***/ }),

/***/ 893:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/assets/images/blue-bg/about-us.jpg";

/***/ }),

/***/ 904:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/assets/images/stuff-lg.jpg";

/***/ }),

/***/ 905:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/assets/images/stuff.jpg";

/***/ }),

/***/ 907:
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<div class=\"container bg-box-holder\">\r\n  <div class=\"bg-box\" [ngStyle]=\"{'background-image': 'url(src/assets/images/blue-bg/about-us.jpg)'}\"></div>\r\n  <article class=\"box-light-holder about-content\">\r\n    <header *ngIf=\"pageData.header\" [innerHTML]=\"pageData.header\"></header>\r\n    <div class=\"text-content container-sm\" *ngIf=\"pageData.body\" [innerHTML]=\"pageData.body\"></div>\r\n    <img class=\"stuff\" src=\"" + __webpack_require__(905) + "\" alt=\"stuff\">\r\n    <img class=\"stuff-lg\" src=\"" + __webpack_require__(904) + "\" alt=\"stuff\">\r\n  </article>\r\n</div>\r\n";

/***/ })

});