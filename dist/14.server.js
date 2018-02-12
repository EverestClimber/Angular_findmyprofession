exports.ids = [14];
exports.modules = {

/***/ 1125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_services_meta_tags_service__ = __webpack_require__(93);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



__webpack_require__(1263);
var FaqComponent = (function () {
    function FaqComponent(route, metaService) {
        this.route = route;
        this.metaService = metaService;
        var data = route.snapshot.data['pageData'];
        if (data) {
            this.pageData = data.content;
            this.metaService.setMetaTags(data);
        }
    }
    return FaqComponent;
}());
FaqComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'faq-component',
        template: __webpack_require__(1315)
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"],
        __WEBPACK_IMPORTED_MODULE_2__core_services_meta_tags_service__["a" /* MetaTags */]])
], FaqComponent);



/***/ }),

/***/ 1126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_models_api_urls_model__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_services_http_service__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqPageResolver; });
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
var FaqPageResolver = (function () {
    function FaqPageResolver(http) {
        this.http = http;
    }
    /**
     * Method to get page data
     * @param route
     * @returns {Observable<any>}
     */
    FaqPageResolver.prototype.resolve = function (route) {
        var request = {
            url: __WEBPACK_IMPORTED_MODULE_1__core_models_api_urls_model__["p" /* FAQ_PAGE_DATA */]
        };
        return this.http.sendRequest(request);
    };
    return FaqPageResolver;
}());
FaqPageResolver = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__core_services_http_service__["a" /* HttpService */]])
], FaqPageResolver);



/***/ }),

/***/ 1221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__faq_component__ = __webpack_require__(1125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__faq_resolver__ = __webpack_require__(1126);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqRoutingModule; });



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__faq_component__["a" /* FaqComponent */],
        resolve: {
            pageData: __WEBPACK_IMPORTED_MODULE_2__faq_resolver__["a" /* FaqPageResolver */]
        }
    }
];
var FaqRoutingModule = __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forChild(routes);


/***/ }),

/***/ 1263:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/assets/images/blue-bg/faq.jpg";

/***/ }),

/***/ 1315:
/***/ (function(module, exports) {

module.exports = "<div class=\"container bg-box-holder\">\r\n  <div class=\"bg-box\" [ngStyle]=\"{'background-image': 'url(src/assets/images/blue-bg/faq.jpg)'}\"></div>\r\n  <article class=\"box-light-holder faq-page\">\r\n    <h1 *ngIf=\"pageData?.page_title\" [innerHTML]=\"pageData?.page_title\"></h1>\r\n    <ngb-accordion class=\"container-sm accordion\" #acc=\"ngbAccordion\" activeIds=\"ngb-panel-0\">\r\n      <ngb-panel *ngFor=\"let question of pageData?.page_content;let i=index\" [id]=\"'ngb-panel-'+i\">\r\n        <ng-template ngbPanelTitle>\r\n          <span *ngIf=\"question.question\" [innerHTML]=\"question.question\"></span>\r\n        </ng-template>\r\n        <ng-template ngbPanelContent>\r\n          <span *ngIf=\"question.answer\" [innerHTML]=\"question.answer || 'Np answer'\"></span>\r\n        </ng-template>\r\n      </ngb-panel>\r\n    </ngb-accordion>\r\n  </article>\r\n</div>\r\n";

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__faq_component__ = __webpack_require__(1125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__faq_routing_module__ = __webpack_require__(1221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__faq_resolver__ = __webpack_require__(1126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__(27);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqModule", function() { return FaqModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var FaqModule = (function () {
    function FaqModule() {
    }
    return FaqModule;
}());
FaqModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__faq_routing_module__["a" /* FaqRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* NgbAccordionModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__faq_resolver__["a" /* FaqPageResolver */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__faq_component__["a" /* FaqComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__faq_component__["a" /* FaqComponent */]
        ]
    })
], FaqModule);



/***/ })

};;