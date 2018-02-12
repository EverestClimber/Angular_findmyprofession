exports.ids = [16];
exports.modules = {

/***/ 1097:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_favourite_articles_service__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_services_user_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_services_core_utilities_service__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserFavoriteArticlesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserFavoriteArticlesComponent = (function () {
    function UserFavoriteArticlesComponent(articlesService, route, router, userService, titleService, coreUtilities) {
        this.articlesService = articlesService;
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.titleService = titleService;
        this.coreUtilities = coreUtilities;
        this.currentPage = 1;
        this.defaultLimit = 9;
        this.collectionSize = 0;
        this.isAuth = false;
        this.destroyed$ = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__["Subject"]();
        this.titleService.setTitle('My Favorite Articles - Find My Profession');
        this.authSubscription();
    }
    UserFavoriteArticlesComponent.prototype.ngOnInit = function () {
        this.subscribeToParams();
    };
    UserFavoriteArticlesComponent.prototype.ngOnDestroy = function () {
        this.destroyed$.next();
        this.destroyed$.complete();
    };
    UserFavoriteArticlesComponent.prototype.pageSelected = function () {
        if (this.currentPage === 1) {
            this.router.navigate(['/my-favorite-articles']);
        }
        else {
            this.router.navigate(['/my-favorite-articles'], { queryParams: { page: this.currentPage } });
        }
    };
    UserFavoriteArticlesComponent.prototype.openArticle = function ($event) {
        if ($event.newTab) {
            this.coreUtilities.openArticleInNewTab($event.url);
        }
        else {
            this.router.navigate(['/career-advice', $event.url]);
        }
    };
    UserFavoriteArticlesComponent.prototype.likedStatusChanged = function (event) {
        var _this = this;
        this.articlesService.unLikeArticle(event.id)
            .subscribe(function () { return _this.loadArticles(); });
    };
    UserFavoriteArticlesComponent.prototype.subscribeToParams = function () {
        var _this = this;
        this.route.queryParams
            .do(function (params) { return _this.checkForDefaultPage(!params.page); })
            .filter(function (params) { return params.page; })
            .map(function (params) { return +params.page; })
            .filter(function (page) { return !Number.isNaN(page); })
            .subscribe(function (page) {
            _this.currentPage = page;
            _this.loadArticles();
        });
    };
    UserFavoriteArticlesComponent.prototype.loadArticles = function () {
        var _this = this;
        this.articlesService.getArticles(this.currentPage)
            .subscribe(function (response) {
            _this.collectionSize = _this.defaultLimit * response.pages;
            _this.articles = response.likes;
        });
    };
    UserFavoriteArticlesComponent.prototype.checkForDefaultPage = function (needLoad) {
        if (needLoad) {
            this.loadArticles();
        }
    };
    UserFavoriteArticlesComponent.prototype.authSubscription = function () {
        var _this = this;
        this.userService.isAuth$
            .takeUntil(this.destroyed$)
            .subscribe(function (state) { return _this.isAuth = state; });
    };
    return UserFavoriteArticlesComponent;
}());
UserFavoriteArticlesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'fmp-user-favorite-articles-layout',
        template: __webpack_require__(1274),
        styles: [__webpack_require__(1229).toString()],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_favourite_articles_service__["a" /* UserFavoriteArticlesService */],
        __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"],
        __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"],
        __WEBPACK_IMPORTED_MODULE_3__core_services_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["Title"],
        __WEBPACK_IMPORTED_MODULE_5__core_services_core_utilities_service__["a" /* CoreUtilitiesService */]])
], UserFavoriteArticlesComponent);



/***/ }),

/***/ 1154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_favorite_articles_component__ = __webpack_require__(1097);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserFavoriteArticlesRoutingModule; });


var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__user_favorite_articles_component__["a" /* UserFavoriteArticlesComponent */]
    }
];
var UserFavoriteArticlesRoutingModule = __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forChild(routes);


/***/ }),

/***/ 1229:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(undefined);
// imports


// module
exports.push([module.i, ".favorite-articles-holder{padding-top:44px}@media (min-width:1025px){.favorite-articles-holder{padding-top:140px}}.favorite-articles-holder .empty-text{text-align:center;font-weight:400;line-height:22px;margin-bottom:40px}", ""]);

// exports


/***/ }),

/***/ 1274:
/***/ (function(module, exports) {

module.exports = "<div class=\"favorite-articles-holder\">\r\n\r\n  <header class=\"title-description\">\r\n    <h2>Favorite Articles</h2>\r\n    <p>Here you can see your liked articles.</p>\r\n  </header>\r\n\r\n  <div class=\"container-md\">\r\n    <articles-cards-component\r\n      [articles]=\"articles\"\r\n      [isAuth]=\"isAuth\"\r\n      (onArticleLike)=\"likedStatusChanged($event)\"\r\n      (onArticleOpen)=\"openArticle($event)\">\r\n    </articles-cards-component>\r\n    <p *ngIf=\"articles?.length === 0\" class=\"empty-text\">\r\n      <span>Your favorite articles list is empty, please add something <a [routerLink]=\"['/career-advice']\">Career Advice</a></span>\r\n    </p>\r\n  </div>\r\n\r\n  <ngb-pagination\r\n    *ngIf=\"collectionSize > defaultLimit\"\r\n    class=\"pagination-custom\"\r\n    [collectionSize]=\"collectionSize\"\r\n    [(page)]=\"currentPage\"\r\n    [pageSize]=\"defaultLimit\"\r\n    (pageChange)=\"pageSelected()\">\r\n  </ngb-pagination>\r\n\r\n</div>";

/***/ }),

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_favorite_articles_routing_module__ = __webpack_require__(1154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_favorite_articles_component__ = __webpack_require__(1097);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_articles_cards_articles_cards_module__ = __webpack_require__(416);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFavoriteArticlesModule", function() { return UserFavoriteArticlesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var UserFavoriteArticlesModule = (function () {
    function UserFavoriteArticlesModule() {
    }
    return UserFavoriteArticlesModule;
}());
UserFavoriteArticlesModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__user_favorite_articles_routing_module__["a" /* UserFavoriteArticlesRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_5__modules_articles_cards_articles_cards_module__["a" /* ArticleCardsModule */],
            __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["h" /* NgbPaginationModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__user_favorite_articles_component__["a" /* UserFavoriteArticlesComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__user_favorite_articles_component__["a" /* UserFavoriteArticlesComponent */]
        ]
    })
], UserFavoriteArticlesModule);



/***/ })

};;