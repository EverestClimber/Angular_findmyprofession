exports.ids = [6];
exports.modules = {

/***/ 1065:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_fmp_plans_fmp_plans_module__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__coaching_package_component__ = __webpack_require__(1117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__coaching_package_routing_module__ = __webpack_require__(1215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__coaching_package_resolver__ = __webpack_require__(1118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_career_finder_slider_career_finder_slider_module__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__price_box_price_box_module__ = __webpack_require__(1218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modules_template_carousel_template_carousel_module__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_truncate__ = __webpack_require__(199);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoachingPackageModule", function() { return CoachingPackageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var CoachingPackageModule = (function () {
    function CoachingPackageModule() {
    }
    return CoachingPackageModule;
}());
CoachingPackageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_4__coaching_package_routing_module__["a" /* CoachingPackageRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__modules_fmp_plans_fmp_plans_module__["a" /* FmpPlansModule */],
            __WEBPACK_IMPORTED_MODULE_6__modules_career_finder_slider_career_finder_slider_module__["a" /* CareerFinderSliderModule */],
            __WEBPACK_IMPORTED_MODULE_7__price_box_price_box_module__["a" /* PriceBoxModule */],
            __WEBPACK_IMPORTED_MODULE_8__modules_template_carousel_template_carousel_module__["a" /* TemplateCarouselModule */],
            __WEBPACK_IMPORTED_MODULE_9_ng2_truncate__["a" /* TruncateModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__coaching_package_resolver__["a" /* CoachingPackageResolver */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__coaching_package_component__["a" /* CoachingPackageComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__coaching_package_component__["a" /* CoachingPackageComponent */]
        ]
    })
], CoachingPackageModule);



/***/ }),

/***/ 1117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_services_meta_tags_service__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_services_basket_service__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_calendly_calendly_component__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_services_payment_service__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_services_resize_mode_service__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_models_core_model__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__modules_testimonial_modal_testimonial_modal_component__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_Subject__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoachingPackageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











__webpack_require__(26);
__webpack_require__(66);
var CoachingPackageComponent = (function () {
    function CoachingPackageComponent(route, metaTagsService, basketService, router, modalService, paymentService, resizeModeService) {
        this.route = route;
        this.metaTagsService = metaTagsService;
        this.basketService = basketService;
        this.router = router;
        this.modalService = modalService;
        this.paymentService = paymentService;
        this.resizeModeService = resizeModeService;
        this.packageId = 0;
        /**
         * Truncate pipe settings
         * @type {number}
         */
        this.defaultTuncateValue = 500;
        this.isTruncateOpen = false;
        this.isMobileMode = false;
        this.basket = {
            senior: false,
            executive: false
        };
        this.destroyed$ = new __WEBPACK_IMPORTED_MODULE_10_rxjs_Subject__["Subject"]();
        this.setContent(route);
        this.subscribeToBasket();
        this.createResizeSub();
    }
    CoachingPackageComponent.prototype.ngOnDestroy = function () {
        this.destroyed$.next();
        this.destroyed$.complete();
    };
    CoachingPackageComponent.prototype.toggleTruncate = function () {
        this.isTruncateOpen = !this.isTruncateOpen;
        if (this.isTruncateOpen) {
            this.currentTruncateLimit = this.bodyLength;
        }
        else {
            this.currentTruncateLimit = this.defaultTuncateValue;
            this.articleElement.nativeElement.scrollIntoView(true);
        }
    };
    CoachingPackageComponent.prototype.packageBuy = function (item) {
        item.title = this.page.title;
        item.icon = this.page.link;
        this.basketService.addNewItem(item);
        this.paymentService.updatePayment();
        this.router.navigate(['/checkout']);
    };
    CoachingPackageComponent.prototype.subscribeToBasket = function () {
        var _this = this;
        this.basketService.basket$
            .takeUntil(this.destroyed$)
            .subscribe(function (basket) {
            return basket
                .filter(function (item) { return item.id === _this.packageId; })
                .forEach(function (item) { return _this.basket[item.plan.toLowerCase()] = true; });
        });
    };
    CoachingPackageComponent.prototype.openCalendly = function () {
        var modal = this.modalService.open(__WEBPACK_IMPORTED_MODULE_5__modules_calendly_calendly_component__["a" /* CalendlyComponent */], {
            size: 'lg'
        });
        modal.componentInstance.type = 'career-finder-intro';
    };
    CoachingPackageComponent.prototype.openTestimonialModal = function ($testimonial) {
        var modal = this.modalService.open(__WEBPACK_IMPORTED_MODULE_9__modules_testimonial_modal_testimonial_modal_component__["a" /* TestimonialModalComponent */]);
        modal.componentInstance.testimonial = $testimonial;
    };
    CoachingPackageComponent.prototype.createResizeSub = function () {
        var _this = this;
        this.resizeModeService.mode$
            .takeUntil(this.destroyed$)
            .subscribe(function (mode) { return _this.handleResizeEvent(mode); });
    };
    CoachingPackageComponent.prototype.handleResizeEvent = function (mode) {
        this.isMobileMode = (mode === __WEBPACK_IMPORTED_MODULE_8__core_models_core_model__["a" /* MODE_MOB */]);
        if (this.isMobileMode) {
            this.isTruncateOpen = false;
            this.currentTruncateLimit = this.defaultTuncateValue;
        }
        else {
            this.isTruncateOpen = true;
            this.currentTruncateLimit = this.bodyLength;
        }
    };
    CoachingPackageComponent.prototype.setContent = function (route) {
        if (route.snapshot.data) {
            var data = route.snapshot.data.pageData;
            this.page = data;
            if (data) {
                this.content = data.content;
                if (data.content.packages) {
                    this.packageId = data.content.packages.id;
                }
                else {
                    this.packageId = 1;
                }
                this.metaTagsService.setTitle(data.title);
                this.metaTagsService.setTitles(data.seo_title);
                this.metaTagsService.setDescription(data.description);
                this.metaTagsService.removeImageTags();
                if (data.content.body) {
                    this.bodyLength = data.content.body.toString().length;
                }
            }
        }
    };
    return CoachingPackageComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('article'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
], CoachingPackageComponent.prototype, "articleElement", void 0);
CoachingPackageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'coaching-package-component',
        template: __webpack_require__(1310),
        styles: [__webpack_require__(1251).toString()],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"],
        __WEBPACK_IMPORTED_MODULE_2__core_services_meta_tags_service__["a" /* MetaTags */],
        __WEBPACK_IMPORTED_MODULE_4__core_services_basket_service__["a" /* BasketService */],
        __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
        __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["f" /* NgbModal */],
        __WEBPACK_IMPORTED_MODULE_6__core_services_payment_service__["a" /* PaymentService */],
        __WEBPACK_IMPORTED_MODULE_7__core_services_resize_mode_service__["a" /* ResizeModeService */]])
], CoachingPackageComponent);



/***/ }),

/***/ 1118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_transfer_http_transfer_http__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_models_api_urls_model__ = __webpack_require__(91);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoachingPackageResolver; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CoachingPackageResolver = (function () {
    function CoachingPackageResolver(httpService) {
        this.httpService = httpService;
    }
    CoachingPackageResolver.prototype.resolve = function (route, state) {
        var url = __WEBPACK_IMPORTED_MODULE_1__modules_transfer_http_transfer_http__["a" /* TransferHttp */].getUrl("" + __WEBPACK_IMPORTED_MODULE_2__core_models_api_urls_model__["x" /* COACHING_PACKAGES */] + state.url, true);
        return this.httpService.get(url);
    };
    return CoachingPackageResolver;
}());
CoachingPackageResolver = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__modules_transfer_http_transfer_http__["a" /* TransferHttp */]])
], CoachingPackageResolver);



/***/ }),

/***/ 1215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__coaching_package_component__ = __webpack_require__(1117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__coaching_package_resolver__ = __webpack_require__(1118);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoachingPackageRoutingModule; });



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__coaching_package_component__["a" /* CoachingPackageComponent */],
        resolve: {
            pageData: __WEBPACK_IMPORTED_MODULE_2__coaching_package_resolver__["a" /* CoachingPackageResolver */]
        }
    }
];
var CoachingPackageRoutingModule = __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forChild(routes);


/***/ }),

/***/ 1216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PriceBoxTabComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PriceBoxTabComponent = (function () {
    function PriceBoxTabComponent() {
        this.isInBasket = false;
        this.onBuy = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    PriceBoxTabComponent.prototype.buttonClicked = function () {
        this.onBuy.emit();
    };
    return PriceBoxTabComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], PriceBoxTabComponent.prototype, "tabData", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], PriceBoxTabComponent.prototype, "isInBasket", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], PriceBoxTabComponent.prototype, "onBuy", void 0);
PriceBoxTabComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'price-box-tab-component',
        template: __webpack_require__(1311)
    })
], PriceBoxTabComponent);



/***/ }),

/***/ 1217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PriceBoxComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PriceBoxComponent = (function () {
    function PriceBoxComponent() {
        this.onBuy = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    PriceBoxComponent.prototype.packageBuy = function (event) {
        var item = {
            plan: event.title,
            price: event.price,
            id: this.prices.id
        };
        this.onBuy.emit(item);
    };
    return PriceBoxComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], PriceBoxComponent.prototype, "prices", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], PriceBoxComponent.prototype, "inBasket", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], PriceBoxComponent.prototype, "onBuy", void 0);
PriceBoxComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'fmp-price-box-component',
        template: __webpack_require__(1312),
        styles: [__webpack_require__(1252).toString()],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    })
], PriceBoxComponent);



/***/ }),

/***/ 1218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_fmp_plans_fmp_plans_module__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__price_box_component__ = __webpack_require__(1217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__price_box_tab_price_box_tab_component__ = __webpack_require__(1216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PriceBoxModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var PriceBoxModule = (function () {
    function PriceBoxModule() {
    }
    return PriceBoxModule;
}());
PriceBoxModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_5__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__modules_fmp_plans_fmp_plans_module__["a" /* FmpPlansModule */],
            __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["i" /* NgbTabsetModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__price_box_component__["a" /* PriceBoxComponent */],
            __WEBPACK_IMPORTED_MODULE_4__price_box_tab_price_box_tab_component__["a" /* PriceBoxTabComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__price_box_component__["a" /* PriceBoxComponent */]
        ]
    })
], PriceBoxModule);



/***/ }),

/***/ 1251:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(undefined);
// imports


// module
exports.push([module.i, ".service-content+*{display:block;transition:.3s}.service-content.move-down+*{padding-top:224px}.coaching-service{margin-bottom:100px}.coaching-service .icon-title-description{text-align:center;margin-bottom:70px;overflow:hidden}@media (min-width:1025px){.coaching-service .icon-title-description{display:flex;justify-content:center;margin-bottom:90px}}@media (min-width:1340px){.coaching-service .icon-title-description{margin-bottom:112px}}.coaching-service .icon-title-description svg{height:26vw;max-height:150px;margin-bottom:21px}@media (min-width:1025px){.coaching-service .icon-title-description svg{width:221px;min-width:221px;height:225px;max-height:225px;margin:0 5% 0 0}}.coaching-service .icon-title-description .title-description{font-weight:400;text-align:center}@media (min-width:1025px){.coaching-service .icon-title-description .title-description{text-align:left;margin-bottom:0}}@media (min-width:1340px){.coaching-service .icon-title-description .title-description{width:56%}}.coaching-service .icon-title-description .title-description h1{font-size:1.778rem;font-weight:400;margin-bottom:19px}@media (min-width:1025px){.coaching-service .icon-title-description .title-description h1{text-align:left;font-size:3rem;padding-top:10px;margin-bottom:40px;animation:moving-down .6s forwards}}@media (min-width:1340px){.coaching-service .icon-title-description .title-description h1{font-size:3.5rem;margin-bottom:50px}}@media (min-width:1640px){.coaching-service .icon-title-description .title-description h1{font-size:4rem;padding-top:10px;margin-bottom:63px}}.coaching-service .icon-title-description .title-description p{line-height:1.27}.coaching-service .icon-title-description .title-description p.description-short{width:475px;margin:0 auto}@media (min-width:1025px){.coaching-service .icon-title-description .title-description p{padding-left:10px;font-size:1.333rem;animation:moving-down .6s .2s forwards}}@media (min-width:1025px){.coaching-service .icon-title-description .title-description h1,.coaching-service .icon-title-description .title-description p{will-change:transform,opacity;opacity:0;transform:translateX(100%)}@keyframes moving-down{40%{opacity:0}to{opacity:1;transform:translateX(0)}}}@media (min-width:1025px){.coaching-service .steps{display:flex;justify-content:space-between;font-size:1.333rem;margin-bottom:50px}}@media (min-width:1640px){.coaching-service .steps{margin-bottom:100px}}.coaching-service .steps li{background-color:#edf6f9;text-align:center;padding:70px 8% 35px;position:relative;width:100%;max-width:600px;margin:0 auto 60px}@media (min-width:530px){.coaching-service .steps li{padding:70px 4% 35px}}@media (min-width:1025px){.coaching-service .steps li{padding:70px 3% 35px;max-width:32%;margin:0}}.coaching-service .steps li:before{content:\"\";position:absolute;left:50%;top:0;will-change:transform;transform:translateX(-50%) scaleX(0);height:3px;background:#08618d;width:100%;animation-name:border-top-width;animation-duration:.5s;animation-fill-mode:forwards}@keyframes border-top-width{to{transform:translateX(-50%) scaleX(1)}}@media only screen and (orientation:landscape){.coaching-service .steps li:before{will-change:auto;animation-name:none;animation-duration:0s;animation-fill-mode:none;transform:translateX(-50%) scaleX(1)}}.coaching-service .steps li span{position:absolute;top:0;left:50%;transform:translate(-50%,-50%) scale(0);background:#08618d;border-radius:50px;font-weight:400;font-family:Enriqueta;color:#fff;animation-name:circle-scale;animation-duration:.5s;animation-fill-mode:forwards}@keyframes circle-scale{to{transform:translate(-50%,-50%) scale(1)}}.coaching-service .steps li span{width:80px;height:80px;font-size:2.222rem;line-height:70px}.coaching-service .steps li:last-of-type span{line-height:65px;font-size:2.1rem}@media (min-width:1025px){.coaching-service .steps li:last-of-type span{line-height:60px;font-size:1.789rem}}@media (min-width:1025px){.coaching-service .steps li span{width:100px;height:100px;font-size:3.333rem;line-height:90px}.coaching-service .steps li:last-of-type span{line-height:85px;font-size:3.211rem}}@media (min-width:1025px) and (min-width:1025px){.coaching-service .steps li:last-of-type span{line-height:80px;font-size:2.9rem}}.coaching-service .steps li:first-child::before{animation-delay:.2s}.coaching-service .steps li span{animation-delay:.1s}.coaching-service .steps li:nth-child(2):before{animation-delay:.4s}.coaching-service .steps li span{animation-delay:.2s}.coaching-service .steps li:nth-child(3):before{animation-delay:.6s}.coaching-service .steps li span{animation-delay:.3s}.coaching-service .career-finder-slider-holder{margin-bottom:50px}@media (min-width:1025px){.coaching-service .career-finder-slider-holder{margin-bottom:100px}}.coaching-service .text-content,.coaching-service .text-content p:last-child{margin-bottom:0}.coaching-service .article-more{position:relative;padding-bottom:25px;margin-bottom:25px}.coaching-service .article-more .btn-link{position:absolute;right:0;bottom:0}", ""]);

// exports


/***/ }),

/***/ 1252:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(undefined);
// imports


// module
exports.push([module.i, ".price-box-component{background-color:#edf6f9;margin-bottom:50px}@media (min-width:800px){.price-box-component{padding:38px 3% 0;border-top:3px solid #08618d}}.price-box-component .price-box-content{padding:30px 10px}@media (min-width:800px){.price-box-component .price-box-content{display:flex;padding:30px 0 58px}.price-box-component .price-box-content>*{flex:1}}.price-box-component .price-box-content .price-value{text-align:center;margin-bottom:38px}.price-box-component .price-box-content .price-value img{margin-bottom:10px}.price-box-component .price-box-content .price-value .price{font-size:1.778rem;font-family:Enriqueta;color:#08618d;margin-bottom:19px}@media (min-width:800px){.price-box-component .price-box-content .price-value{margin-bottom:0}.price-box-component .price-box-content .price-value img{margin-bottom:15px}.price-box-component .price-box-content .price-value .price{font-size:2rem;margin-bottom:25px}}.price-box-component .price-box-content .price-text{line-height:1.2}@media (min-width:800px){.price-box-component .price-box-content .price-text{padding:20px 5% 0}}.price-box-component .price-box-content .price-text .prices{font-weight:500;margin-bottom:21px}@media (min-width:800px){.price-box-component .price-box-content .price-text .prices{font-size:1.2rem}}@media (min-width:1025px){.price-box-component .price-box-content .price-text .prices{margin-bottom:40px;font-size:1.333rem}}", ""]);

// exports


/***/ }),

/***/ 1269:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/assets/images/logo-icon-comp.png";

/***/ }),

/***/ 1310:
/***/ (function(module, exports) {

module.exports = "<section class=\"coaching-service box-light-holder\">\r\n\r\n  <div class=\"content\">\r\n    <div class=\"icon-title-description\">\r\n      <svg>\r\n        <use [attr.xlink:href]=\"'src/assets/images/sprite2.svg#' + page?.link\"></use>\r\n      </svg>\r\n      <div class=\"title-description\">\r\n        <h1 *ngIf=\"page?.title\" [innerHTML]=\"page?.title\"></h1>\r\n        <p *ngIf=\"content?.sub_title\" [innerHTML]=\"content?.sub_title\"></p>\r\n      </div>\r\n    </div>\r\n\r\n    <ul class=\"steps\">\r\n      <li *ngFor=\"let step of content?.steps\" class=\"item\">\r\n        <span>{{step.step}}</span>\r\n        <p *ngIf=\"step.description\" [innerHTML]=\"step.description\"></p>\r\n      </li>\r\n    </ul>\r\n\r\n    <div class=\"article-more\">\r\n      <article #article *ngIf=\"content?.body\" class=\"text-content container-sm\" [innerHTML]=\"content?.body | truncate: currentTruncateLimit\"></article>\r\n      <button *ngIf=\"isMobileMode\" type=\"button\" class=\"btn-link link link-line-remove-center\" (click)=\"toggleTruncate()\">\r\n        <span *ngIf=\"isTruncateOpen\">hide</span>\r\n        <span *ngIf=\"!isTruncateOpen\">...more</span>\r\n      </button>\r\n    </div>\r\n\r\n    <div class=\"career-finder-slider-holder container-md\">\r\n      <career-finder-slider-component\r\n        [title]=\"content?.slider?.slider_header_title\"\r\n        [description]=\"'Schedule a call and learn how we find your next job'\"\r\n        class=\"career-finder-slider-component\"\r\n        *ngIf=\"content?.slider\"\r\n        [packagesTitle]=\"content?.slider?.packages_title\"\r\n        [packages]=\"content?.slider?.packages_list\"\r\n        [serviceData]=\"content?.slider\"\r\n        [percent]=\"content.slider.slider_cost\"\r\n        (onGetStarted)=\"openCalendly()\">\r\n        [percent]=\"bought.price || content.slider.slider_cost\">\r\n      </career-finder-slider-component>\r\n    </div>\r\n\r\n    <fmp-price-box-component\r\n      class=\"price-box-component container-sm\"\r\n      *ngIf=\"content?.packages\"\r\n      [prices]=\"content?.packages\"\r\n      [inBasket]=\"basket\"\r\n      (onBuy)=\"packageBuy($event)\">\r\n    </fmp-price-box-component>\r\n  </div>\r\n\r\n  <div class=\"container-md\">\r\n    <fmp-template-carousel-component\r\n      class=\"carousel-component carousel-arrows-gray\"\r\n      *ngIf=\"content?.testimonials\"\r\n      [type]=\"'service'\"\r\n      [title]=\"content?.testimonials_title\"\r\n      [sliderItems]=\"content?.testimonials\"\r\n      [slidesNumber]=\"content?.testimonials?.length / 2\"\r\n      (onTestimonialOpen)=\"openTestimonialModal($event)\">\r\n    </fmp-template-carousel-component>\r\n  </div>\r\n\r\n</section>\r\n\r\n<fmp-plans-component\r\n  class=\"plans-component container-md\"\r\n  [title]=\"content?.other_services_title\"\r\n  [currentPlanTitle]=\"page?.title\"\r\n  [plans]=\"content?.services\"\r\n  [isOpen]=\"true\">\r\n</fmp-plans-component>";

/***/ }),

/***/ 1311:
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<div class=\"price-box-content\">\r\n  <div class=\"price-value\">\r\n    <img width=\"55\" height=\"70\" src=\"" + __webpack_require__(1269) + "\" alt=\"logo\">\r\n    <p class=\"price\">\r\n      <span *ngIf=\"!isInBasket\">$ {{tabData?.price || 0}}</span>\r\n      <span *ngIf=\"isInBasket\">Already in basket</span>\r\n    </p>\r\n    <button type=\"button\" class=\"btn btn-md btn-border-anim\" (click)=\"buttonClicked()\">\r\n      <span *ngIf=\"!isInBasket\">Buy</span>\r\n      <span *ngIf=\"isInBasket\">Checkout</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"price-text\">\r\n    <p class=\"prices\" *ngIf=\"tabData?.description\" [innerHTML]=\"tabData?.description\"></p>\r\n    <ul class=\"list-disc\">\r\n      <li *ngFor=\"let item of tabData?.list\">\r\n        <span *ngIf=\"item\" [innerHTML]=\"item\"></span>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>";

/***/ }),

/***/ 1312:
/***/ (function(module, exports) {

module.exports = "<ngb-tabset type=\"pills\" class=\"tabs-holder\" [destroyOnHide]=\"false\">\r\n  <ngb-tab>\r\n    <ng-template ngbTabTitle>{{prices?.senior?.title}}</ng-template>\r\n    <ng-template ngbTabContent>\r\n\r\n      <price-box-tab-component\r\n        [tabData]=\"prices?.senior\"\r\n        [isInBasket]=\"inBasket?.senior\"\r\n        (onBuy)=\"packageBuy(prices?.senior)\">\r\n      </price-box-tab-component>\r\n\r\n    </ng-template>\r\n  </ngb-tab>\r\n  <ngb-tab>\r\n    <ng-template ngbTabTitle>{{prices?.executive?.title}}</ng-template>\r\n    <ng-template ngbTabContent>\r\n\r\n      <price-box-tab-component\r\n        [tabData]=\"prices?.executive\"\r\n        [isInBasket]=\"inBasket?.executive\"\r\n        (onBuy)=\"packageBuy(prices?.executive)\">\r\n      </price-box-tab-component>\r\n\r\n    </ng-template>\r\n  </ngb-tab>\r\n</ngb-tabset>";

/***/ })

};;