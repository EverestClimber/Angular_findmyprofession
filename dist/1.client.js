webpackJsonp([1],{

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__career_advice_component__ = __webpack_require__(742);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__career_advice_routing_module__ = __webpack_require__(840);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__career_advice_service__ = __webpack_require__(744);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__career_advice_resolver__ = __webpack_require__(743);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modules_template_carousel_template_carousel_module__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__modules_articles_cards_articles_cards_module__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__modules_career_advice_tabs_career_advice_tabs_module__ = __webpack_require__(719);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CareerAdviceModule", function() { return CareerAdviceModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var CareerAdviceModule = (function () {
    function CareerAdviceModule() {
    }
    return CareerAdviceModule;
}());
CareerAdviceModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_4__career_advice_routing_module__["a" /* CareerAdviceRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"],
            __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["h" /* NgbPaginationModule */],
            __WEBPACK_IMPORTED_MODULE_8__modules_template_carousel_template_carousel_module__["a" /* TemplateCarouselModule */],
            __WEBPACK_IMPORTED_MODULE_9__modules_articles_cards_articles_cards_module__["a" /* ArticleCardsModule */],
            __WEBPACK_IMPORTED_MODULE_10__modules_career_advice_tabs_career_advice_tabs_module__["a" /* CareerAdviceTabsModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__career_advice_service__["a" /* CareerAdviceService */],
            __WEBPACK_IMPORTED_MODULE_7__career_advice_resolver__["a" /* CareerAdviceDataResolver */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__career_advice_component__["a" /* CareerAdviceComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__career_advice_component__["a" /* CareerAdviceComponent */]
        ]
    })
], CareerAdviceModule);



/***/ }),

/***/ 718:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CareerAdviceTabsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CareerAdviceTabsComponent = (function () {
    function CareerAdviceTabsComponent() {
        this.isTop = false;
        this.articleCategories = [
            {
                title: 'All Articles',
                link: 'career-advice'
            },
            {
                title: 'LinkedIn',
                link: 'linkedin'
            },
            {
                title: 'Resume + Cover Letter',
                link: 'resume-cover-letter'
            },
            {
                title: 'Interviewing',
                link: 'interviewing'
            },
            {
                title: 'Job Search',
                link: 'job-search'
            }
        ];
        this.onLinkClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onMenuOpen = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.subNavState = false;
    }
    CareerAdviceTabsComponent.prototype.ngAfterViewInit = function () {
        /**
         * Setting selected package if not exist
         */
        if (this.articleCategories && !this.selectedPackage && this.articleCategories[2]) {
            this.selectedPackage = this.articleCategories[2].link;
        }
    };
    CareerAdviceTabsComponent.prototype.toggleSubNav = function () {
        this.subNavState = !this.subNavState;
        this.moveContent();
    };
    CareerAdviceTabsComponent.prototype.openLink = function ($event, link) {
        $event.preventDefault();
        this.selectedPackage = link.title;
        this.onLinkClick.emit(link.link);
    };
    CareerAdviceTabsComponent.prototype.packageSelected = function (link) {
        this.selectedPackage = link;
        this.subNavState = false;
        if (this.selectedPackage === link) {
            this.subNavState = false;
            this.onMenuOpen.emit(this.subNavState);
        }
        else {
            this.subNavState = true;
        }
    };
    CareerAdviceTabsComponent.prototype.moveContent = function () {
        this.onMenuOpen.emit(this.subNavState);
    };
    return CareerAdviceTabsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], CareerAdviceTabsComponent.prototype, "isTop", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], CareerAdviceTabsComponent.prototype, "articleCategories", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], CareerAdviceTabsComponent.prototype, "selectedPackage", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], CareerAdviceTabsComponent.prototype, "onLinkClick", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], CareerAdviceTabsComponent.prototype, "onMenuOpen", void 0);
CareerAdviceTabsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'fmp-career-advice-tabs',
        template: __webpack_require__(723)
    }),
    __metadata("design:paramtypes", [])
], CareerAdviceTabsComponent);



/***/ }),

/***/ 719:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__career_advice_tabs_component__ = __webpack_require__(718);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CareerAdviceTabsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CareerAdviceTabsModule = (function () {
    function CareerAdviceTabsModule() {
    }
    return CareerAdviceTabsModule;
}());
CareerAdviceTabsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["RouterModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__career_advice_tabs_component__["a" /* CareerAdviceTabsComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__career_advice_tabs_component__["a" /* CareerAdviceTabsComponent */]
        ]
    })
], CareerAdviceTabsModule);



/***/ }),

/***/ 723:
/***/ (function(module, exports) {

module.exports = "<nav class=\"sub-nav-mobile\" [ngClass]=\"{'show-nav': subNavState, 'sub-nav-fixed': !isTop}\">\r\n  <ul>\r\n    <li *ngFor=\"let link of articleCategories\" (click)=\"packageSelected(link.title)\">\r\n      <a [ngClass]=\"{ 'active': selectedPackage === link.link || selectedPackage === link.title }\" (click)=\"openLink($event, link)\">{{link.title}}</a>\r\n    </li>\r\n  </ul>\r\n  <p class=\"selected-item\"\r\n    *ngIf=\"!subNavState\"\r\n    (click)=\"toggleSubNav()\">\r\n    {{selectedPackage}}\r\n  </p>\r\n</nav>\r\n<nav class=\"sub-nav-desktop\" [ngClass]=\"{'text-dark': isTop}\">\r\n  <ul>\r\n    <li *ngFor=\"let link of articleCategories\">\r\n      <a [ngClass]=\"{ 'active': selectedPackage === link.link || selectedPackage === link.title }\" (click)=\"openLink($event, link)\">{{link.title}}</a>\r\n    </li>\r\n  </ul>\r\n</nav>";

/***/ }),

/***/ 742:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__career_advice_service__ = __webpack_require__(744);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_services_platform_check_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_services_modals_creator_service__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_user_favorite_articles_user_favourite_articles_service__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_services_user_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_services_resize_mode_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_models_core_model__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_services_meta_tags_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__core_services_core_utilities_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_Subject__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CareerAdviceComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var CareerAdviceComponent = (function () {
    function CareerAdviceComponent(careerAdviceService, route, router, platformService, modalService, articleLikeService, userService, resizeModeService, metaTags, coreUtilities) {
        this.careerAdviceService = careerAdviceService;
        this.route = route;
        this.router = router;
        this.platformService = platformService;
        this.modalService = modalService;
        this.articleLikeService = articleLikeService;
        this.userService = userService;
        this.resizeModeService = resizeModeService;
        this.metaTags = metaTags;
        this.coreUtilities = coreUtilities;
        this.articleCategories = [
            {
                title: 'All Articles',
                link: 'career-advice'
            },
            {
                title: 'LinkedIn',
                link: 'linkedin'
            },
            {
                title: 'Resume + Cover Letter',
                link: 'resume-cover-letter'
            },
            {
                title: 'Interviewing',
                link: 'interviewing'
            },
            {
                title: 'Job Search',
                link: 'job-search'
            }
        ];
        this.articles = [];
        this.topArticles = [];
        this.subNavState = false;
        this.collectionSize = 0;
        this.currentPage = 1;
        this.defaultLimit = 9;
        this.page = 1;
        this.isUserAuth = false;
        this.isMobileMode = false;
        this.isLikesReady = false;
        this.destroyed$ = new __WEBPACK_IMPORTED_MODULE_11_rxjs_Subject__["Subject"]();
        this.articlesMap = new Map();
        this.checkForAuth();
        var content = route.snapshot.data['pageContent'];
        this.setContent(content);
        if (this.platformService.isBrowser) {
            this.selectedPackage = this.articleCategories
                .filter(function (item) { return item.link === location.pathname.replace('/', ''); })
                .map(function (item) { return item.title; })[0];
        }
    }
    CareerAdviceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams
            .filter(function () { return _this.platformService.isBrowser; })
            .subscribe(function (params) {
            _this.searchTxt = params.searchStr;
            if (_this.searchTxt == undefined) {
                if (_this.page !== _this.currentPage) {
                    _this.loadArticles(location.pathname.replace('/', ''), +params.paged);
                }
                else if (params.paged) {
                    _this.page = +params.paged;
                    _this.currentPage = +params.paged;
                }
            }
            else {
                _this.searchArticles(_this.searchTxt);
            }
        });
        this.checkForResizeMode();
        if (this.isUserAuth) {
            this.getLikedArticles();
        }
    };
    CareerAdviceComponent.prototype.ngOnDestroy = function () {
        this.destroyed$.next();
        this.destroyed$.complete();
    };
    CareerAdviceComponent.prototype.getLikedArticles = function () {
        var _this = this;
        var ids = Array.from(this.articlesMap.keys());
        this.articleLikeService.checkIfArticlesLiked(ids)
            .finally(function () { return _this.isLikesReady = true; })
            .subscribe(function (response) {
            Object.keys(response[0]).forEach(function (key) {
                var articles = _this.articlesMap.get(+key);
                if (Array.isArray(articles)) {
                    articles.forEach(function (article) { return article.liked = true; });
                }
            });
        });
    };
    /**
     * Navigate to link
     * @param link
     */
    CareerAdviceComponent.prototype.openLink = function (link) {
        this.selectedPackage = link;
        this.router.navigate([link]);
    };
    CareerAdviceComponent.prototype.openArticle = function ($event) {
        if ($event.newTab && this.platformService.isBrowser) {
            this.coreUtilities.openArticleInNewTab($event.url);
        }
        else {
            this.router.navigate(['/career-advice', $event.url]);
        }
    };
    CareerAdviceComponent.prototype.pageSelected = function () {
        if (this.page !== this.currentPage) {
            if (this.platformService.isBrowser) {
                this.router.navigate([location.pathname], { queryParams: { paged: this.currentPage } });
            }
        }
    };
    ;
    CareerAdviceComponent.prototype.onMenuOpen = function (state) {
        this.subNavState = state;
    };
    CareerAdviceComponent.prototype.likeSelectedArticle = function ($event, isCarousel) {
        if (isCarousel === void 0) { isCarousel = false; }
        if (this.isUserAuth && this.isLikesReady) {
            this.likeArticle($event, isCarousel);
        }
        else {
            this.modalService.openLikeWarning();
        }
    };
    /**
     * Method to like article
     * @param {ArticleLikeEvent} $event
     * @param {boolean} isCarousel
     */
    CareerAdviceComponent.prototype.likeArticle = function ($event, isCarousel) {
        var _this = this;
        if (isCarousel === void 0) { isCarousel = false; }
        if ($event.state) {
            this.toggleLikeHandler($event, isCarousel);
            this.articleLikeService.likeArticle($event.id)
                .filter(function () { return _this.toggleLikeFilter($event, isCarousel); })
                .subscribe(function (res) { return _this.toggleLikeHandler($event, isCarousel); }, function () { return _this.revertArticleHandler($event, isCarousel); });
        }
        else {
            this.toggleLikeHandler($event, isCarousel);
            this.articleLikeService.unLikeArticle($event.id)
                .filter(function () { return _this.toggleLikeFilter($event, isCarousel); })
                .subscribe(function (res) { return _this.toggleLikeHandler($event, isCarousel); }, function () { return _this.revertArticleHandler($event, isCarousel); });
        }
    };
    CareerAdviceComponent.prototype.toggleLikeFilter = function ($event, isCarousel) {
        if (isCarousel) {
            return !!$event.callback;
        }
        else {
            return !!$event.id && !Number.isNaN($event.index) && $event.index >= 0;
        }
    };
    /**
     * Method to revert like handle event
     * @param {ArticleLikeEvent} $event
     * @param {boolean} isCarousel
     */
    CareerAdviceComponent.prototype.toggleLikeHandler = function ($event, isCarousel) {
        if (isCarousel) {
            $event.callback && $event.callback();
        }
        else {
            this.articles[$event.index].liked = $event.state;
        }
    };
    /**
     * Method to toggle article like event
     * @param {ArticleLikeEvent} $event
     * @param {boolean} isCarousel
     */
    CareerAdviceComponent.prototype.revertArticleHandler = function ($event, isCarousel) {
        if (isCarousel) {
            $event.revertCallback && $event.revertCallback();
        }
        else if (this.articles[$event.index].liked === $event.state) {
            this.articles[$event.index].liked = !$event.state;
        }
    };
    CareerAdviceComponent.prototype.setContent = function (content) {
        var _this = this;
        if (content) {
            var description = "The FMP Contributor is the publication of Find My Profession, offering the best career advice to find your dream job.";
            this.content = content.content;
            this.articles = content.blogs;
            this.topArticles = content.top;
            this.metaTags.setTitle(this.content.title);
            this.metaTags.setTitles(this.content.title);
            this.metaTags.setDescription(description);
            this.metaTags.removeImageTags();
            this.collectionSize = content.count * this.defaultLimit;
            if (this.isUserAuth) {
                content.blogs.forEach(function (blog) {
                    var blogList = _this.articlesMap.get(blog.id);
                    if (!blogList) {
                        blogList = [];
                    }
                    blogList.push(blog);
                    _this.articlesMap.set(blog.id, blogList);
                });
                content.top.forEach(function (blog) {
                    var blogList = _this.articlesMap.get(blog.id);
                    if (!blogList) {
                        blogList = [];
                    }
                    blogList.push(blog);
                    _this.articlesMap.set(blog.id, blogList);
                });
            }
            else {
                this.articles.forEach(function (article) { return article.liked = false; });
                this.topArticles.forEach(function (article) { return article.liked = false; });
            }
        }
    };
    CareerAdviceComponent.prototype.loadArticles = function (url, page) {
        var _this = this;
        if (page === void 0) { page = 1; }
        this.careerAdviceService.getArticles({ url: url, page: page })
            .subscribe(function (response) {
            _this.setContent(response);
            _this.page = page;
        }, function (error) { return _this.error = error; });
    };
    CareerAdviceComponent.prototype.searchArticles = function (searchTxt) {
    };
    CareerAdviceComponent.prototype.checkForAuth = function () {
        var _this = this;
        this.userService.isAuth$
            .takeUntil(this.destroyed$)
            .subscribe(function (state) { return _this.isUserAuth = state; });
    };
    CareerAdviceComponent.prototype.checkForResizeMode = function () {
        var _this = this;
        this.resizeModeService.mode$
            .takeUntil(this.destroyed$)
            .subscribe(function (state) { return _this.isMobileMode = state === __WEBPACK_IMPORTED_MODULE_8__core_models_core_model__["a" /* MODE_MOB */]; });
    };
    return CareerAdviceComponent;
}());
CareerAdviceComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'career-advice-component',
        template: __webpack_require__(937),
        styles: [__webpack_require__(880).toString()],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__career_advice_service__["a" /* CareerAdviceService */],
        __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"],
        __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
        __WEBPACK_IMPORTED_MODULE_3__core_services_platform_check_service__["a" /* PlatformCheckService */],
        __WEBPACK_IMPORTED_MODULE_4__core_services_modals_creator_service__["a" /* ModalCreatorService */],
        __WEBPACK_IMPORTED_MODULE_5__app_user_favorite_articles_user_favourite_articles_service__["a" /* UserFavoriteArticlesService */],
        __WEBPACK_IMPORTED_MODULE_6__core_services_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_7__core_services_resize_mode_service__["a" /* ResizeModeService */],
        __WEBPACK_IMPORTED_MODULE_9__core_services_meta_tags_service__["a" /* MetaTags */],
        __WEBPACK_IMPORTED_MODULE_10__core_services_core_utilities_service__["a" /* CoreUtilitiesService */]])
], CareerAdviceComponent);



/***/ }),

/***/ 743:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_transfer_http_transfer_http__ = __webpack_require__(70);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CareerAdviceDataResolver; });
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
var CareerAdviceDataResolver = (function () {
    function CareerAdviceDataResolver(http) {
        this.http = http;
    }
    /**
     * Method to get page data
     * @param snapshot
     * @param state
     * @returns {Observable<any>}
     */
    CareerAdviceDataResolver.prototype.resolve = function (snapshot, state) {
        var page = 1;
        if (snapshot.queryParams && Number.isInteger(+snapshot.queryParams.paged)) {
            page = +snapshot.queryParams.paged;
        }
        var url = state.url;
        if (/\/resume-cover-letter/.test(url)) {
            url = '/resume';
        }
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__modules_transfer_http_transfer_http__["a" /* TransferHttp */].getUrl("/blog" + url, true), { params: { page: page } });
    };
    return CareerAdviceDataResolver;
}());
CareerAdviceDataResolver = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__modules_transfer_http_transfer_http__["a" /* TransferHttp */]])
], CareerAdviceDataResolver);



/***/ }),

/***/ 744:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_http_service__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CareerAdviceService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CareerAdviceService = (function () {
    function CareerAdviceService(httpService) {
        this.httpService = httpService;
    }
    CareerAdviceService.prototype.getArticles = function (params) {
        var url = params.url;
        if (/resume-cover-letter/.test(params.url)) {
            url = 'resume';
        }
        var request = {
            url: "/blog/" + url,
            searchParams: { page: params.page }
        };
        return this.httpService.sendRequest(request);
    };
    return CareerAdviceService;
}());
CareerAdviceService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_services_http_service__["a" /* HttpService */]])
], CareerAdviceService);



/***/ }),

/***/ 840:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__career_advice_component__ = __webpack_require__(742);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__career_advice_resolver__ = __webpack_require__(743);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CareerAdviceRoutingModule; });



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__career_advice_component__["a" /* CareerAdviceComponent */],
        resolve: {
            pageContent: __WEBPACK_IMPORTED_MODULE_2__career_advice_resolver__["a" /* CareerAdviceDataResolver */]
        }
    }
];
var CareerAdviceRoutingModule = __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forChild(routes);


/***/ }),

/***/ 880:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(undefined);
// imports


// module
exports.push([module.i, "@media (min-width:1025px){.career-advice-page{padding-top:70px}}.career-advice-page .sub-nav-desktop{background-color:#08618d;height:65px;padding-top:15px}.career-advice-page .sub-nav-desktop ul li:nth-child(3){width:104px;margin-left:22px}.career-advice-page .sub-nav-desktop ul a,.career-advice-page .sub-nav-desktop ul a:not([href]):not([tabindex]){white-space:nowrap}.career-advice-page .sub-nav-desktop ul a:after,.career-advice-page .sub-nav-desktop ul a:not([href]):not([tabindex]):after{border-color:transparent transparent #edf6f9}@media (min-width:1025px){.career-advice-page .sub-nav-desktop ul{justify-content:space-around}}.career-advice-page .carousel-component{margin-bottom:110px}.career-advice-page .carousel-component .carousel-holder .carousel-list li{padding:0}@media (min-width:1640px){.career-advice-page .carousel-component{margin-bottom:75px;justify-content:space-around}}.career-advice-holder{transition:.3s;padding-top:100px}@media (min-width:1025px){.career-advice-holder{padding-top:70px}}.career-advice-holder .title-description{padding:0 10px}.career-advice-holder.move-down{padding-top:324px}", ""]);

// exports


/***/ }),

/***/ 937:
/***/ (function(module, exports) {

module.exports = "<div class=\"career-advice-page tabs-carousel\">\r\n\r\n  <fmp-career-advice-tabs\r\n    [articleCategories]=\"articleCategories\"\r\n    [selectedPackage]=\"selectedPackage\"\r\n    (onMenuOpen)=\"onMenuOpen($event)\"\r\n    (onLinkClick)=\"openLink($event)\">\r\n  </fmp-career-advice-tabs>\r\n\r\n  <article class=\"career-advice-holder\" [ngClass]=\"{'move-down': subNavState}\">\r\n\r\n    <header class=\"title-description\">\r\n      <h2 *ngIf=\"content?.title\" [innerHTML]=\"content?.title\"></h2>\r\n      <p *ngIf=\"content?.description\" [innerHTML]=\"content?.description\"></p>\r\n    </header>\r\n\r\n    <fmp-template-carousel-component\r\n      class=\"carousel-component\"\r\n      [type]=\"'career-advice'\"\r\n      [slidesNumber]=\"topArticles?.length / 2\"\r\n      [title]=\"pageContent?.title\"\r\n      [subTitle]=\"pageContent?.subTitle\"\r\n      [sliderItems]=\"topArticles\"\r\n      (onLikeToggle)=\"likeSelectedArticle($event, true)\"\r\n      (openArticle)=\"openArticle($event)\">\r\n    </fmp-template-carousel-component>\r\n\r\n    <div class=\"container-md\">\r\n      <articles-cards-component\r\n        [isAuth]=\"false\"\r\n        [articles]=\"articles\"\r\n        (onArticleLike)=\"likeSelectedArticle($event)\"\r\n        (onArticleOpen)=\"openArticle($event)\">\r\n      </articles-cards-component>\r\n    </div>\r\n\r\n    <ngb-pagination\r\n      *ngIf=\"collectionSize > defaultLimit\"\r\n      class=\"pagination-custom\"\r\n      [collectionSize]=\"collectionSize\"\r\n      [(page)]=\"currentPage\"\r\n      [pageSize]=\"defaultLimit\"\r\n      [maxSize]=\"isMobileMode ? 1 : 5\"\r\n      [rotate]=\"true\"\r\n      (pageChange)=\"pageSelected()\">\r\n    </ngb-pagination>\r\n\r\n  </article>\r\n\r\n</div>";

/***/ })

});