exports.ids = [12];
exports.modules = {

/***/ 1136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__testimonials_service__ = __webpack_require__(1138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_services_meta_tags_service__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__main_config__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestimonialsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





__webpack_require__(198);
var TestimonialsComponent = TestimonialsComponent_1 = (function () {
    function TestimonialsComponent(testimonialsService, route, metaService, router) {
        this.testimonialsService = testimonialsService;
        this.route = route;
        this.metaService = metaService;
        this.router = router;
        this.currentPage = 1;
        this.defaultLimit = 8;
        this.page = 1;
        var params = route.snapshot.queryParams;
        this.currentPage = TestimonialsComponent_1.checkPage(params);
        var pageData = route.snapshot.data['pageData'];
        if (pageData) {
            this.content = pageData.content;
            this.metaService.setMetaTags(pageData);
            this.metaService.setImages(__WEBPACK_IMPORTED_MODULE_4__main_config__["d" /* DOMAIN_URL */] + "/src/assets/images/logo-company.png");
            this.setTestimonials(pageData.testimonials);
        }
    }
    TestimonialsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams
            .subscribe(function (params) {
            var page = TestimonialsComponent_1.checkPage(params);
            if (_this.page !== page) {
                _this.testimonialsService.getTestimonials({ page: page })
                    .subscribe(function (response) {
                    if (response) {
                        _this.page = page;
                        _this.setTestimonials(response.testimonials);
                    }
                });
            }
        });
    };
    TestimonialsComponent.prototype.pageSelected = function () {
        this.router.navigate(['/testimonials'], { queryParams: { page: this.currentPage } });
    };
    TestimonialsComponent.prototype.setTestimonials = function (testimonials) {
        if (testimonials) {
            this.items = testimonials.testimonials;
            this.collectionSize = testimonials.count * this.defaultLimit;
        }
    };
    TestimonialsComponent.checkPage = function (params) {
        if (params && Number.isInteger(+params.page)) {
            return +params.page;
        }
        return 1;
    };
    return TestimonialsComponent;
}());
TestimonialsComponent = TestimonialsComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'testimonials-component',
        template: __webpack_require__(1320),
        styles: [__webpack_require__(1258).toString()],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__testimonials_service__["a" /* TestimonialsService */],
        __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"],
        __WEBPACK_IMPORTED_MODULE_3__core_services_meta_tags_service__["a" /* MetaTags */],
        __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]])
], TestimonialsComponent);

var TestimonialsComponent_1;


/***/ }),

/***/ 1137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_transfer_http_transfer_http__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_models_api_urls_model__ = __webpack_require__(91);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestimonialsPageDataResolver; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TestimonialsPageDataResolver = (function () {
    function TestimonialsPageDataResolver(http) {
        this.http = http;
    }
    /**
     * Method to get page data
     * @returns {Observable<any>}
     */
    TestimonialsPageDataResolver.prototype.resolve = function (snapshot) {
        var params = snapshot.queryParams;
        var page = 1;
        if (params && Number.isInteger(+params.page)) {
            page = params.page;
        }
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__modules_transfer_http_transfer_http__["a" /* TransferHttp */].getUrl(__WEBPACK_IMPORTED_MODULE_2__core_models_api_urls_model__["w" /* TESTIMONIALS_PAGE */], true), { params: { page: page } });
    };
    return TestimonialsPageDataResolver;
}());
TestimonialsPageDataResolver = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__modules_transfer_http_transfer_http__["a" /* TransferHttp */]])
], TestimonialsPageDataResolver);



/***/ }),

/***/ 1138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_http_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_models_api_urls_model__ = __webpack_require__(91);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestimonialsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TestimonialsService = (function () {
    function TestimonialsService(httpService) {
        this.httpService = httpService;
    }
    TestimonialsService.prototype.getTestimonials = function (options) {
        var request = {
            url: __WEBPACK_IMPORTED_MODULE_2__core_models_api_urls_model__["v" /* TESTIMONIALS */],
            searchParams: options
        };
        return this.httpService.sendRequest(request);
    };
    return TestimonialsService;
}());
TestimonialsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_services_http_service__["a" /* HttpService */]])
], TestimonialsService);



/***/ }),

/***/ 1226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__testimonials_component__ = __webpack_require__(1136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__testimonials_resolver__ = __webpack_require__(1137);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestimonialsRoutingModule; });



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__testimonials_component__["a" /* TestimonialsComponent */],
        resolve: {
            pageData: __WEBPACK_IMPORTED_MODULE_2__testimonials_resolver__["a" /* TestimonialsPageDataResolver */]
        }
    }
];
var TestimonialsRoutingModule = __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forChild(routes);


/***/ }),

/***/ 1258:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(undefined);
// imports


// module
exports.push([module.i, ".testimonials-page{padding:43px 10px 0;width:100%;max-width:1100px;margin:0 auto}@media (min-width:1025px){.testimonials-page{padding:157px 10px 0}}@media (min-width:1120px){.testimonials-page{padding:157px 0 0}}.testimonials-page .title-description{margin-bottom:35px}@media (min-width:1025px){.testimonials-page .title-description{margin-bottom:67px}}.testimonials-page .chat li{margin-bottom:30px}@media (min-width:1025px){.testimonials-page .chat li{margin-bottom:50px;display:flex}}.testimonials-page .chat li:nth-child(2n) .photo-name{order:1}@media (min-width:1025px){.testimonials-page .chat li:nth-child(2n) .photo-name{margin:0 25px 0 39px}}.testimonials-page .chat .photo-name{text-align:center;height:auto;width:30%;max-width:160px;margin-bottom:9px}@media (min-width:1025px){.testimonials-page .chat .photo-name{width:100%;margin:0 39px 0 25px}}.testimonials-page .chat .photo-name p{font-size:.889rem;font-weight:500}@media (min-width:1025px){.testimonials-page .chat .photo-name p{font-size:1.222rem}}.testimonials-page .chat .feedback{background:#fff;padding:25px 15px;font-size:.889rem;position:relative;flex:1}@media (min-width:1025px){.testimonials-page .chat .feedback{font-size:1rem;padding:35px 30px}}.testimonials-page .chat .feedback:before{content:\"\";position:absolute;width:0;height:0;bottom:100%;left:50%;transform:translateX(-50%);border-style:solid;border-width:13px;border-color:transparent transparent #fff}@media (min-width:1025px){.testimonials-page .chat .feedback:before{border-width:0}}.testimonials-page .chat .feedback p{font-size:.889rem;font-weight:500}@media (min-width:1025px){.testimonials-page .chat .feedback p{font-size:1.222rem}}.testimonials-page .chat .feedback .help-with{font-weight:500;margin-bottom:8px}@media (min-width:1025px){.testimonials-page .chat .feedback .help-with{margin-bottom:27px}}.testimonials-page .chat .feedback .help-with span{color:#1dbff0}.testimonials-page .chat .feedback .text-content{margin-bottom:7px;padding:0}@media (min-width:1025px){.testimonials-page .chat .feedback .text-content{margin-bottom:35px}}", ""]);

// exports


/***/ }),

/***/ 1320:
/***/ (function(module, exports) {

module.exports = "<div class=\"testimonials-page\">\r\n  <div class=\"title-description\">\r\n    <h2 *ngIf=\"content?.title\" [innerHTML]=\"content?.title\"></h2>\r\n    <p *ngIf=\"content?.sub_title\" [innerHTML]=\"content?.sub_title\"></p>\r\n  </div>\r\n  <ul class=\"chat\">\r\n    <li *ngFor=\"let item of items\">\r\n\r\n      <div class=\"photo-name\"></div>\r\n\r\n      <div class=\"feedback\">\r\n        <p *ngIf=\"item.name\" [innerHTML]=\"item.name | truncate: '20'\"></p>\r\n        <p class=\"help-with\" *ngIf=\"item?.service\">\r\n          Help with:\r\n          <fmp-custom-link\r\n            [title]=\"item.service.name | truncate: '20'\"\r\n            [linkArray]=\"[item.service.link]\">\r\n          </fmp-custom-link>\r\n        </p>\r\n        <div class=\"text-content\" *ngIf=\"item.detail\" [innerHTML]=\"item.detail\"></div>\r\n        <div class=\"date-rating\">\r\n          <p class=\"date\">\r\n            <span>Date:</span>\r\n            {{item.date | date: 'mediumDate'}}\r\n          </p>\r\n          <p class=\"rating-holder\">\r\n            <span>Rated:</span>\r\n\r\n            <fmp-rating-stars-component\r\n              [stars]=\"item.rating\">\r\n            </fmp-rating-stars-component>\r\n\r\n          </p>\r\n        </div>\r\n      </div>\r\n\r\n    </li>\r\n  </ul>\r\n\r\n  <ngb-pagination\r\n    *ngIf=\"collectionSize > defaultLimit\"\r\n    class=\"pagination-custom\"\r\n    [collectionSize]=\"collectionSize\"\r\n    [(page)]=\"currentPage\"\r\n    [pageSize]=\"defaultLimit\"\r\n    (pageChange)=\"pageSelected()\">\r\n  </ngb-pagination>\r\n\r\n</div>";

/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__testimonials_routing_module__ = __webpack_require__(1226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__testimonials_component__ = __webpack_require__(1136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__testimonials_service__ = __webpack_require__(1138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__testimonials_resolver__ = __webpack_require__(1137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_rating_stars_rating_stars_module__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_truncate__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__modules_custom_link_custom_link_module__ = __webpack_require__(94);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialsModule", function() { return TestimonialsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var TestimonialsModule = (function () {
    function TestimonialsModule() {
    }
    return TestimonialsModule;
}());
TestimonialsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__testimonials_routing_module__["a" /* TestimonialsRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["h" /* NgbPaginationModule */],
            __WEBPACK_IMPORTED_MODULE_7__modules_rating_stars_rating_stars_module__["a" /* RatingStarsModule */],
            __WEBPACK_IMPORTED_MODULE_8_ng2_truncate__["a" /* TruncateModule */],
            __WEBPACK_IMPORTED_MODULE_9__modules_custom_link_custom_link_module__["a" /* CustomLinkModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__testimonials_resolver__["a" /* TestimonialsPageDataResolver */],
            __WEBPACK_IMPORTED_MODULE_4__testimonials_service__["a" /* TestimonialsService */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__testimonials_component__["a" /* TestimonialsComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__testimonials_component__["a" /* TestimonialsComponent */]
        ]
    })
], TestimonialsModule);



/***/ })

};;