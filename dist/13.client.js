webpackJsonp([13],{

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__privacy_policy_terms_routing_module__ = __webpack_require__(858);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__privacy_policy_terms_component__ = __webpack_require__(765);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__privacy_policy_terms_resolver__ = __webpack_require__(766);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyPolicyTermsModule", function() { return PrivacyPolicyTermsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var PrivacyPolicyTermsModule = (function () {
    function PrivacyPolicyTermsModule() {
    }
    return PrivacyPolicyTermsModule;
}());
PrivacyPolicyTermsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__privacy_policy_terms_routing_module__["a" /* PrivacyPolicyTermsRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__privacy_policy_terms_resolver__["a" /* PrivacyTermsPageDataResolver */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__privacy_policy_terms_component__["a" /* PrivacyPolicyTermsComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__privacy_policy_terms_component__["a" /* PrivacyPolicyTermsComponent */]
        ]
    })
], PrivacyPolicyTermsModule);



/***/ }),

/***/ 765:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_services_meta_tags_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacyPolicyTermsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




__webpack_require__(900);
var PrivacyPolicyTermsComponent = (function () {
    function PrivacyPolicyTermsComponent(route, metaService, titleService) {
        this.route = route;
        this.metaService = metaService;
        this.titleService = titleService;
        this.currentTab = 'Terms of Use';
        this.subNavState = false;
        var pageContent = route.snapshot.data['pageContent'];
        if (pageContent) {
            this.titleService.setTitle(pageContent.title);
            this.metaService.setTitles(pageContent.seo_title);
            this.metaService.setDescription(pageContent.description);
            this.metaService.removeImageTags();
            this.pageContent = pageContent.content;
        }
    }
    PrivacyPolicyTermsComponent.prototype.switchTab = function (tab) {
        this.subNavState = false;
        this.currentTab = tab;
    };
    PrivacyPolicyTermsComponent.prototype.toggleSubNav = function () {
        this.subNavState = !this.subNavState;
    };
    return PrivacyPolicyTermsComponent;
}());
PrivacyPolicyTermsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'privacy-policy-terms-component',
        template: __webpack_require__(952),
        styles: [__webpack_require__(890).toString()],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"],
        __WEBPACK_IMPORTED_MODULE_2__core_services_meta_tags_service__["a" /* MetaTags */],
        __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["Title"]])
], PrivacyPolicyTermsComponent);



/***/ }),

/***/ 766:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_models_api_urls_model__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_services_http_service__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacyTermsPageDataResolver; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PrivacyTermsPageDataResolver = (function () {
    function PrivacyTermsPageDataResolver(http) {
        this.http = http;
    }
    /**
     * Method to get page data
     * @param route
     * @returns {Observable<PrivacyPolicyTerms.IPageContent>}
     */
    PrivacyTermsPageDataResolver.prototype.resolve = function (route) {
        var request = {
            url: __WEBPACK_IMPORTED_MODULE_1__core_models_api_urls_model__["n" /* PRIVACY_TERMS_PAGE */]
        };
        return this.http.sendRequest(request);
    };
    return PrivacyTermsPageDataResolver;
}());
PrivacyTermsPageDataResolver = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__core_services_http_service__["a" /* HttpService */]])
], PrivacyTermsPageDataResolver);



/***/ }),

/***/ 858:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__privacy_policy_terms_component__ = __webpack_require__(765);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__privacy_policy_terms_resolver__ = __webpack_require__(766);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacyPolicyTermsRoutingModule; });



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__privacy_policy_terms_component__["a" /* PrivacyPolicyTermsComponent */],
        resolve: {
            pageContent: __WEBPACK_IMPORTED_MODULE_2__privacy_policy_terms_resolver__["a" /* PrivacyTermsPageDataResolver */]
        }
    }
];
var PrivacyPolicyTermsRoutingModule = __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forChild(routes);


/***/ }),

/***/ 890:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(undefined);
// imports


// module
exports.push([module.i, ".terms-privacy{transition:.3s}.terms-privacy.move-down{padding-top:162px}", ""]);

// exports


/***/ }),

/***/ 900:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/assets/images/blue-bg/privacy.jpg";

/***/ }),

/***/ 952:
/***/ (function(module, exports) {

module.exports = "<div class=\"container bg-box-holder terms-privacy-holder\">\r\n  <div class=\"bg-box\" [ngStyle]=\"{'background-image': 'url(src/assets/images/blue-bg/privacy.jpg)'}\"></div>\r\n  <nav class=\"sub-nav-mobile sub-nav-fixed\" [ngClass]=\"{'show-nav': subNavState}\">\r\n    <ul>\r\n      <li>\r\n        <span [ngClass]=\"{ 'active': currentTab === 'Terms of Use' }\" (click)=\"switchTab('Terms of Use')\">Terms of Use</span>\r\n      </li>\r\n      <li>\r\n        <span [ngClass]=\"{ 'active': currentTab === 'Privacy Policy' }\" (click)=\"switchTab('Privacy Policy')\">Privacy Policy</span>\r\n      </li>\r\n    </ul>\r\n    <p class=\"selected-item\"\r\n       [ngClass]=\"{'hide-selected-item': subNavState}\"\r\n       (click)=\"toggleSubNav()\">\r\n      {{currentTab}}\r\n    </p>\r\n  </nav>\r\n  <nav class=\"sub-nav-desktop sub-nav-center\">\r\n    <ul>\r\n      <li>\r\n        <span [ngClass]=\"{ 'active': currentTab === 'Terms of Use' }\" (click)=\"switchTab('Terms of Use')\">Terms of Use</span>\r\n      </li>\r\n      <li>\r\n        <span [ngClass]=\"{ 'active': currentTab === 'Privacy Policy' }\" (click)=\"switchTab('Privacy Policy')\">Privacy Policy</span>\r\n      </li>\r\n    </ul>\r\n  </nav>\r\n  <div class=\"box-light-holder terms-privacy\" [ngClass]=\"{'move-down': subNavState}\">\r\n    <div *ngIf=\"currentTab === 'Terms of Use'; else privacyPolicy\">\r\n      <div *ngIf=\"pageContent?.terms_of_use\">\r\n        <h1 class=\"head-main\" *ngIf=\"pageContent?.terms_of_use?.title\" [innerHTML]=\"pageContent?.terms_of_use?.title\"></h1>\r\n        <div class=\"text-content\" *ngIf=\"pageContent?.terms_of_use?.content\" [innerHTML]=\"pageContent?.terms_of_use?.content\"></div>\r\n      </div>\r\n    </div>\r\n\r\n    <ng-template #privacyPolicy>\r\n      <div *ngIf=\"pageContent?.privacy_policy?.content\">\r\n        <h1 *ngIf=\"pageContent?.privacy_policy?.title\" [innerHTML]=\"pageContent?.privacy_policy?.title\"></h1>\r\n        <div class=\"text-content\" *ngIf=\"pageContent?.privacy_policy?.content\" [innerHTML]=\"pageContent?.privacy_policy?.content\"></div>\r\n      </div>\r\n    </ng-template>\r\n\r\n  </div>\r\n</div>\r\n";

/***/ })

});