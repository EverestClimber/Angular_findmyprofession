webpackJsonp([3],{

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_home_component__ = __webpack_require__(715);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_home_resolver__ = __webpack_require__(733);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_home_routing_module__ = __webpack_require__(800);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__chat_chat_module__ = __webpack_require__(790);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_career_advice_home_career_advice_module__ = __webpack_require__(797);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_home_service__ = __webpack_require__(801);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__updates_updates_module__ = __webpack_require__(799);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserHomeModule", function() { return UserHomeModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var UserHomeModule = (function () {
    function UserHomeModule() {
    }
    return UserHomeModule;
}());
UserHomeModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__user_home_routing_module__["a" /* UserHomeRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_5__chat_chat_module__["a" /* FmpChatModule */],
            __WEBPACK_IMPORTED_MODULE_6__home_career_advice_home_career_advice_module__["a" /* HomeCareerAdviceModule */],
            __WEBPACK_IMPORTED_MODULE_8__updates_updates_module__["a" /* HomeUpdatesModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__user_home_resolver__["a" /* UserHomeDataResolver */],
            __WEBPACK_IMPORTED_MODULE_7__user_home_service__["a" /* UserHomeService */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__user_home_component__["a" /* UserHomeComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__user_home_component__["a" /* UserHomeComponent */]
        ]
    })
], UserHomeModule);



/***/ }),

/***/ 715:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__favorite_articles_user_favourite_articles_service__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_services_core_utilities_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_services_meta_tags_service__ = __webpack_require__(51);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserHomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserHomeComponent = UserHomeComponent_1 = (function () {
    function UserHomeComponent(route, articleLikesService, metaService) {
        this.route = route;
        this.articleLikesService = articleLikesService;
        this.metaService = metaService;
        this.chatMessages = [];
        this.metaService.setTitle('My Home - Find My Profession');
        var homeData = route.snapshot.data['data'];
        if (homeData) {
            this.chatMessages = UserHomeComponent_1.parseMessages(homeData.chat);
            this.updates = homeData.updates;
            this.articles = homeData.slider || [];
        }
        else {
            this.chatMessages = [];
        }
    }
    /**
     * Method to toggle article like
     * @param $event
     */
    UserHomeComponent.prototype.articleLikeToggle = function ($event) {
        if ($event.state) {
            this.articleLikesService.likeArticle($event.id)
                .subscribe(function (res) { return $event.callback(); }, this.handleError.bind(this));
        }
        else {
            this.articleLikesService.unLikeArticle($event.id)
                .subscribe(function (res) { return $event.callback(); }, this.handleError.bind(this));
        }
    };
    UserHomeComponent.parseMessages = function (list) {
        var _this = this;
        return list.map(function (item, index) {
            item.showDay = index > 1 ? !_this.compareDates(list[index - 1].date, item.date) : true;
            item.message = __WEBPACK_IMPORTED_MODULE_3__core_services_core_utilities_service__["a" /* CoreUtilitiesService */].parseMessage(item.message);
            return item;
        });
    };
    /**
     * Method to handle error
     * @param error
     */
    UserHomeComponent.prototype.handleError = function (error) {
        this.errorMessage = error.message;
    };
    UserHomeComponent.compareDates = function (dateA, dateB) {
        return new Date(dateA).toDateString() === new Date(dateB).toDateString();
    };
    return UserHomeComponent;
}());
UserHomeComponent = UserHomeComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'fmp-user-home-component',
        template: __webpack_require__(915),
        styles: [__webpack_require__(868).toString()],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"],
        __WEBPACK_IMPORTED_MODULE_2__favorite_articles_user_favourite_articles_service__["a" /* UserFavoriteArticlesService */],
        __WEBPACK_IMPORTED_MODULE_4__core_services_meta_tags_service__["a" /* MetaTags */]])
], UserHomeComponent);

var UserHomeComponent_1;


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

/***/ 732:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_http_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_models_api_urls_model__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_config__ = __webpack_require__(27);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChatService = (function () {
    function ChatService(httpService) {
        this.httpService = httpService;
    }
    /**
     * Method to send message
     * @param message
     * @returns {Observable<IChatMessage | IErrorResponse>}
     */
    ChatService.prototype.sendMessage = function (message) {
        var request = {
            method: 'POST',
            url: __WEBPACK_IMPORTED_MODULE_2__core_models_api_urls_model__["k" /* SEND_MESSAGE */],
            body: message,
            encoding: 'fd',
            userToken: true
        };
        return this.httpService.sendRequest(request);
    };
    /**
     * Method to get new messages
     * @returns {Observable<any>}
     */
    ChatService.prototype.getNewMessages = function () {
        var request = {
            url: __WEBPACK_IMPORTED_MODULE_2__core_models_api_urls_model__["l" /* MESSAGES_UPDATE */],
            userToken: true
        };
        return this.httpService.sendRequest(request);
    };
    /**
     * Method to
     * @param fileSrc
     * @returns {Observable<string | IErrorResponse>}
     */
    ChatService.prototype.downloadFile = function (fileSrc) {
        var request = {
            url: "" + __WEBPACK_IMPORTED_MODULE_3__main_config__["a" /* DOMAIN_URL */] + fileSrc,
            userToken: true,
            absolutePath: true,
            isBlob: true
        };
        return this.httpService.sendRequest(request);
    };
    return ChatService;
}());
ChatService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_services_http_service__["a" /* HttpService */]])
], ChatService);



/***/ }),

/***/ 733:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_http_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_models_api_urls_model__ = __webpack_require__(50);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserHomeDataResolver; });
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
var UserHomeDataResolver = (function () {
    function UserHomeDataResolver(httpService) {
        this.httpService = httpService;
    }
    UserHomeDataResolver.prototype.resolve = function () {
        return this.httpService.sendRequest({
            url: __WEBPACK_IMPORTED_MODULE_2__core_models_api_urls_model__["j" /* USER_HOME_PAGE */],
            userToken: true
        });
    };
    return UserHomeDataResolver;
}());
UserHomeDataResolver = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_services_http_service__["a" /* HttpService */]])
], UserHomeDataResolver);



/***/ }),

/***/ 789:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_service__ = __webpack_require__(732);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_services_user_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_services_core_utilities_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_home_component__ = __webpack_require__(715);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FmpChatComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FmpChatComponent = (function () {
    function FmpChatComponent(userService, chatService, changeDetector) {
        this.userService = userService;
        this.chatService = chatService;
        this.changeDetector = changeDetector;
        this.chatRefreshTime = 5000;
        this.messageIds = {};
        this.isPageActive = true;
        this.isSending = false;
        this.isUrl = false;
        this.destroyed$ = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__["Subject"]();
        this.subscribeToUser();
    }
    FmpChatComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        var messages = changes['messages'];
        if (messages && messages.currentValue) {
            this.messages.forEach(function (message) { return _this.messageIds[message['id']] = true; });
        }
    };
    FmpChatComponent.prototype.ngAfterViewInit = function () {
        this.scrollToBottom();
        this.startMessageAutoUpdate();
        this.checkForPageTab();
    };
    FmpChatComponent.prototype.ngOnDestroy = function () {
        this.destroyed$.next();
        this.destroyed$.complete();
        this.changeDetector.detach();
    };
    FmpChatComponent.prototype.sendMessage = function (message) {
        var url_exp = /(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*))/g;
        if (message && message.message) {
            message.message = message.message.replace(/\n/g, '\r\n');
        }
        this.isUrl = url_exp.test(message.message);
        if (this.isUrl)
            message.message = this.makeToHyperlink(message.message);
        if (message.attachment) {
            var temp = message.message;
            message.message = '';
            this.sendToServer(message);
            message.message = temp;
        }
        if (message.message != '') {
            this.sendToServer(message);
        }
    };
    FmpChatComponent.prototype.sendToServer = function (message) {
        var _this = this;
        this.chatService.sendMessage(message)
            .do(function () { return _this.isSending = true; })
            .finally(function () { return _this.isSending = false; })
            .debounceTime(500)
            .subscribe(function (response) {
            _this.addMessage(response, _this.messages);
            _this.changeDetector.detectChanges();
            _this.scrollToBottom();
        });
    };
    FmpChatComponent.prototype.makeToHyperlink = function (str) {
        var hyperLink = '<a href="' + str + '" target="_blank">' + str + '</a>';
        return hyperLink;
    };
    /**
     * Method to auto updating chat
     */
    FmpChatComponent.prototype.startMessageAutoUpdate = function () {
        var _this = this;
        this.refreshingSub = __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].interval(this.chatRefreshTime)
            .takeUntil(this.destroyed$)
            .subscribe(function () { return _this.loadNewMessages(); });
    };
    FmpChatComponent.prototype.downloadFile = function (message, $event) {
        $event.preventDefault();
        this.chatService.downloadFile(message.attachment.toString())
            .subscribe(function (data) { return __WEBPACK_IMPORTED_MODULE_4__core_services_core_utilities_service__["a" /* CoreUtilitiesService */].saveFile(data, message.message.toString()); });
    };
    FmpChatComponent.prototype.addMessage = function (message, list) {
        if (list === void 0) { list = []; }
        if (message && message.id && !this.messageIds[message.id]) {
            this.messageIds[message.id] = true;
            var lastMessage = list[list.length - 1];
            if (lastMessage && __WEBPACK_IMPORTED_MODULE_6__user_home_component__["a" /* UserHomeComponent */].compareDates(lastMessage.date, message.date)) {
                message.showDay = false;
            }
            message.message = __WEBPACK_IMPORTED_MODULE_4__core_services_core_utilities_service__["a" /* CoreUtilitiesService */].parseMessage(message.message);
            list.push(message);
        }
    };
    FmpChatComponent.prototype.checkForPageTab = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].fromEvent(document, 'visibilitychange')
            .takeUntil(this.destroyed$)
            .map(function (e) { return !e.target.hidden; })
            .do(function (state) {
            if (state && _this.refreshingSub.closed) {
                _this.startMessageAutoUpdate();
            }
        })
            .subscribe(function (isPageActive) {
            _this.isPageActive = isPageActive;
        });
    };
    FmpChatComponent.prototype.loadNewMessages = function () {
        var _this = this;
        this.chatService.getNewMessages()
            .filter(function (messages) { return Array.isArray(messages) && messages.length > 0; })
            .subscribe(function (messages) {
            messages.forEach(function (message) { return _this.addMessage(message, _this.messages); });
            _this.changeDetector.detectChanges();
            _this.scrollToBottom();
        }, function (error) { return _this._handleError(error); });
    };
    /**
     * Scrolling to bottom of the div
     */
    FmpChatComponent.prototype.scrollToBottom = function () {
        if (this.chatHolder) {
            this.chatHolder.nativeElement.scrollTop = this.chatHolder.nativeElement.scrollHeight || 0;
        }
    };
    FmpChatComponent.prototype.subscribeToUser = function () {
        var _this = this;
        this.userService.user$
            .takeUntil(this.destroyed$)
            .filter(function (user) { return Boolean(user); })
            .subscribe(function (user) { return _this.userId = user.id; });
    };
    /**
     * Method to handle error
     * @param e
     * @private
     */
    FmpChatComponent.prototype._handleError = function (e) {
        this.errorMessage = e.message;
    };
    return FmpChatComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('chatHolder'),
    __metadata("design:type", Object)
], FmpChatComponent.prototype, "chatHolder", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], FmpChatComponent.prototype, "messages", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], FmpChatComponent.prototype, "chatRefreshTime", void 0);
FmpChatComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'fmp-chat-component',
        template: __webpack_require__(909),
        styles: [__webpack_require__(864).toString()],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__core_services_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_2__chat_service__["a" /* ChatService */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]])
], FmpChatComponent);



/***/ }),

/***/ 790:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_component__ = __webpack_require__(789);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat_service__ = __webpack_require__(732);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__send_box_send_box_module__ = __webpack_require__(794);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__day_pipe_message_day_pipe__ = __webpack_require__(791);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FmpChatModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var FmpChatModule = (function () {
    function FmpChatModule() {
    }
    return FmpChatModule;
}());
FmpChatModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_5__send_box_send_box_module__["a" /* FmpSendBoxModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__chat_service__["a" /* ChatService */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__chat_component__["a" /* FmpChatComponent */],
            __WEBPACK_IMPORTED_MODULE_6__day_pipe_message_day_pipe__["a" /* MessageDayPipe */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__chat_component__["a" /* FmpChatComponent */]
        ]
    })
], FmpChatModule);



/***/ }),

/***/ 791:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageDayPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessageDayPipe = (function () {
    function MessageDayPipe() {
        this.datePipe = new __WEBPACK_IMPORTED_MODULE_1__angular_common__["DatePipe"]('en-US');
        this.currentDateString = new Date().toDateString();
    }
    MessageDayPipe.prototype.transform = function (date) {
        return new Date(date).toDateString() === this.currentDateString ? 'Today' : this.datePipe.transform(date, 'EEE');
    };
    return MessageDayPipe;
}());
MessageDayPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'isToday' }),
    __metadata("design:paramtypes", [])
], MessageDayPipe);



/***/ }),

/***/ 792:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_services_core_utilities_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_alert_modal_alert_modal_component__ = __webpack_require__(111);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FmpFileSelectorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FmpFileSelectorComponent = (function () {
    function FmpFileSelectorComponent(modalService) {
        this.modalService = modalService;
        this.isSelected = false;
        this.isDisabled = false;
        this.onFileSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onFileRemoved = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.acceptFormats = __WEBPACK_IMPORTED_MODULE_2__core_services_core_utilities_service__["a" /* CoreUtilitiesService */].fileAcceptFormats;
    }
    FmpFileSelectorComponent.prototype.attachFile = function () {
        if (this.isSelected) {
            this.onFileRemoved.emit();
        }
        else {
            this.fileSelector.nativeElement.click();
        }
    };
    FmpFileSelectorComponent.prototype.fileSelected = function ($event) {
        var fileList = $event.target.files;
        if (fileList[0]) {
            var file = fileList[0];
            $event.target.value = null;
            var isFormatValid = __WEBPACK_IMPORTED_MODULE_2__core_services_core_utilities_service__["a" /* CoreUtilitiesService */].checkFileExtension(file);
            if (!isFormatValid) {
                var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_3__modules_alert_modal_alert_modal_component__["a" /* AlertModalComponent */]);
                modalRef.result
                    .then(function () { }, function () { });
                modalRef.componentInstance.showButtons = false;
                modalRef.componentInstance.message = "File you want upload has unsupported format. Please select another. Accept formats: " + this.acceptFormats.join(' ; ');
            }
            else {
                this.onFileSelected.emit(file);
            }
        }
    };
    return FmpFileSelectorComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileSelector'),
    __metadata("design:type", Object)
], FmpFileSelectorComponent.prototype, "fileSelector", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], FmpFileSelectorComponent.prototype, "fileName", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], FmpFileSelectorComponent.prototype, "isSelected", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], FmpFileSelectorComponent.prototype, "isDisabled", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], FmpFileSelectorComponent.prototype, "onFileSelected", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], FmpFileSelectorComponent.prototype, "onFileRemoved", void 0);
FmpFileSelectorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'fmp-file-selector-component',
        template: __webpack_require__(910)
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["f" /* NgbModal */]])
], FmpFileSelectorComponent);



/***/ }),

/***/ 793:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_services_resize_mode_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_models_core_model__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FmpSendBoxComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FmpSendBoxComponent = (function () {
    function FmpSendBoxComponent(fb, resizeModeService) {
        this.fb = fb;
        this.resizeModeService = resizeModeService;
        this.maxSymbols = 500;
        this.isMessageSending = false;
        this.onMessageSend = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.isFileSelected = false;
        this.isMobileMode = false;
        this.destroyed$ = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
        /**
         * Form errors messages
         * @type {{required: string; minlength: string; maxlength: string}}
         */
        this.errorMessages = {
            required: "You must write something first",
            maxlength: "Message max length is " + this.maxSymbols
        };
        this.subscribeToResize();
        this.createForm();
    }
    FmpSendBoxComponent.prototype.ngOnChanges = function (changes) {
        var sending = changes['isMessageSending'];
        if (sending && this.modelForm) {
            if (sending.currentValue) {
                this.getModel().disable();
            }
            else {
                this.getModel().enable();
                if (this.sendField) {
                    this.sendField.nativeElement.focus();
                }
            }
        }
    };
    FmpSendBoxComponent.prototype.ngOnDestroy = function () {
        this.destroyed$.next();
        this.destroyed$.complete();
    };
    FmpSendBoxComponent.prototype.keyPressed = function (keyEvent) {
        if (keyEvent.keyCode === 13 && !keyEvent.shiftKey) {
            if (!this.isMobileMode) {
                keyEvent.preventDefault();
                keyEvent.stopPropagation();
                this.sendMessage();
            }
        }
    };
    FmpSendBoxComponent.prototype.sendMessage = function () {
        var model = Object.assign(this.modelForm.value);
        var messageBody = model.message ? model.message.toString() : '';
        this.getModel().setValue(messageBody.trim());
        if (this.modelForm.valid) {
            this.onMessageSend.emit(Object.assign(this.modelForm.value));
            this.resetForm();
            this.sendField.nativeElement.focus();
        }
        else {
            this.showErrors();
        }
    };
    FmpSendBoxComponent.prototype.fileSelected = function (file) {
        if (file) {
            this.getModel('attachment_name').setValue(file.name);
            this.getModel('attachment').setValue(file);
            this.getModel('attachment_name').disable();
            this.isFileSelected = true;
            this.focusSubmitButton();
        }
    };
    FmpSendBoxComponent.prototype.fileRemoved = function () {
        this.resetForm();
    };
    FmpSendBoxComponent.prototype.showErrors = function () {
        var _this = this;
        Object.keys(this.getModel().errors)
            .forEach(function (key) { return _this.formError = _this.errorMessages[key]; });
    };
    FmpSendBoxComponent.prototype.resetForm = function () {
        this.fileName = null;
        this.isFileSelected = false;
        if (this.getModel('attachment_name').disabled) {
            this.getModel('attachment_name').enable();
        }
        this.modelForm.reset();
    };
    FmpSendBoxComponent.prototype.focusSubmitButton = function () {
        if (this.submitButton && this.submitButton.nativeElement) {
            this.submitButton.nativeElement.focus();
        }
    };
    FmpSendBoxComponent.prototype.subscribeToResize = function () {
        var _this = this;
        this.resizeModeService.mode$
            .takeUntil(this.destroyed$)
            .subscribe(function (mode) { return _this.isMobileMode = mode === __WEBPACK_IMPORTED_MODULE_3__core_models_core_model__["a" /* MODE_MOB */]; });
    };
    FmpSendBoxComponent.prototype.createForm = function () {
        var _this = this;
        this.modelForm = this.buildModelForm();
        this.modelForm.valueChanges
            .subscribe(function () { return _this.formError = null; });
    };
    FmpSendBoxComponent.prototype.buildModelForm = function () {
        return this.fb.group({
            message: ['', [
                    //Validators.required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(this.maxSymbols)
                ]],
            attachment: [],
            attachment_name: []
        });
    };
    FmpSendBoxComponent.prototype.getModel = function (name) {
        if (name === void 0) { name = 'message'; }
        return this.modelForm.get(name);
    };
    return FmpSendBoxComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('submitButton'),
    __metadata("design:type", Object)
], FmpSendBoxComponent.prototype, "submitButton", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('sendField'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
], FmpSendBoxComponent.prototype, "sendField", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], FmpSendBoxComponent.prototype, "maxSymbols", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], FmpSendBoxComponent.prototype, "isMessageSending", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], FmpSendBoxComponent.prototype, "onMessageSend", void 0);
FmpSendBoxComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'fmp-send-box-component',
        template: __webpack_require__(911),
        styles: [__webpack_require__(865).toString()],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"],
        __WEBPACK_IMPORTED_MODULE_2__core_services_resize_mode_service__["a" /* ResizeModeService */]])
], FmpSendBoxComponent);



/***/ }),

/***/ 794:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__send_box_component__ = __webpack_require__(793);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__symbols_counter_symbols_counter_component__ = __webpack_require__(795);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__file_selector_file_selector_component__ = __webpack_require__(792);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FmpSendBoxModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var FmpSendBoxModule = (function () {
    function FmpSendBoxModule() {
    }
    return FmpSendBoxModule;
}());
FmpSendBoxModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__send_box_component__["a" /* FmpSendBoxComponent */],
            __WEBPACK_IMPORTED_MODULE_4__symbols_counter_symbols_counter_component__["a" /* FmpSymbolsCounterComponent */],
            __WEBPACK_IMPORTED_MODULE_5__file_selector_file_selector_component__["a" /* FmpFileSelectorComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__send_box_component__["a" /* FmpSendBoxComponent */]
        ]
    })
], FmpSendBoxModule);



/***/ }),

/***/ 795:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FmpSymbolsCounterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FmpSymbolsCounterComponent = (function () {
    function FmpSymbolsCounterComponent() {
        this.maxSymbols = 0;
    }
    return FmpSymbolsCounterComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], FmpSymbolsCounterComponent.prototype, "maxSymbols", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], FmpSymbolsCounterComponent.prototype, "value", void 0);
FmpSymbolsCounterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'fmp-symbols-counter-component',
        template: __webpack_require__(912)
    })
], FmpSymbolsCounterComponent);



/***/ }),

/***/ 796:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_services_core_utilities_service__ = __webpack_require__(68);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeCareerAdviceComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeCareerAdviceComponent = (function () {
    function HomeCareerAdviceComponent(router, coreUtilities) {
        this.router = router;
        this.coreUtilities = coreUtilities;
        this.onArticleLikeToggle = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.selectedPackage = 'All Articles';
    }
    HomeCareerAdviceComponent.prototype.categoryChange = function (category) {
        this.router.navigate(["/" + category]);
    };
    HomeCareerAdviceComponent.prototype.toggleArticleLike = function ($event) {
        this.onArticleLikeToggle.emit($event);
    };
    HomeCareerAdviceComponent.prototype.openSelectedArticle = function ($event) {
        if ($event.newTab) {
            this.coreUtilities.openArticleInNewTab($event.url);
        }
        else {
            this.router.navigate(['/career-advice', $event.url]);
        }
    };
    return HomeCareerAdviceComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], HomeCareerAdviceComponent.prototype, "topArticles", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], HomeCareerAdviceComponent.prototype, "onArticleLikeToggle", void 0);
HomeCareerAdviceComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'fmp-home-career-advice-component',
        template: __webpack_require__(913),
        styles: [__webpack_require__(866).toString()],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
        __WEBPACK_IMPORTED_MODULE_2__core_services_core_utilities_service__["a" /* CoreUtilitiesService */]])
], HomeCareerAdviceComponent);



/***/ }),

/***/ 797:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_career_advice_component__ = __webpack_require__(796);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_template_carousel_template_carousel_module__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_career_advice_tabs_career_advice_tabs_module__ = __webpack_require__(719);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeCareerAdviceModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var HomeCareerAdviceModule = (function () {
    function HomeCareerAdviceModule() {
    }
    return HomeCareerAdviceModule;
}());
HomeCareerAdviceModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_4__modules_career_advice_tabs_career_advice_tabs_module__["a" /* CareerAdviceTabsModule */],
            __WEBPACK_IMPORTED_MODULE_3__modules_template_carousel_template_carousel_module__["a" /* TemplateCarouselModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__home_career_advice_component__["a" /* HomeCareerAdviceComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__home_career_advice_component__["a" /* HomeCareerAdviceComponent */]
        ]
    })
], HomeCareerAdviceModule);



/***/ }),

/***/ 798:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jobs_user_jobs_service__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_services_user_service__ = __webpack_require__(26);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeUpdatesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeUpdatesComponent = (function () {
    function HomeUpdatesComponent(jobsService, userService) {
        var _this = this;
        this.jobsService = jobsService;
        this.userService = userService;
        this.added_days = 0;
        /**
         * Represent if current user bought Career Finder package
         * @type {boolean}
         */
        this.isCareerFinderBought = false;
        this.userService.user$
            .filter(function (user) { return !!user; })
            .subscribe(function (user) {
            _this.isCareerFinderBought = _this.userService.checkIfCareerFinderBought();
            if (_this.isCareerFinderBought) {
                _this.jobsService.getJobs('liked', 0)
                    .subscribe(function (response) {
                    _this.added_days = _this.Cal_added_day(response);
                });
            }
        });
    }
    HomeUpdatesComponent.prototype.Cal_added_day = function (obj) {
        var oneDay = 24 * 60 * 60 * 1000;
        var now = new Date();
        var latest;
        latest = new Date(Math.max.apply(null, obj.jobs.map(function (e) {
            return new Date(e.date);
        })));
        var diffDays = Math.round(Math.abs((now.getTime() - latest.getTime()) / (oneDay)));
        return diffDays;
    };
    return HomeUpdatesComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], HomeUpdatesComponent.prototype, "updates", void 0);
HomeUpdatesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'fmp-home-updates-component',
        template: __webpack_require__(914),
        styles: [__webpack_require__(867).toString()],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__jobs_user_jobs_service__["a" /* UserJobsService */],
        __WEBPACK_IMPORTED_MODULE_2__core_services_user_service__["a" /* UserService */]])
], HomeUpdatesComponent);



/***/ }),

/***/ 799:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__updates_component__ = __webpack_require__(798);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__jobs_user_jobs_service__ = __webpack_require__(112);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeUpdatesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var HomeUpdatesModule = (function () {
    function HomeUpdatesModule() {
    }
    return HomeUpdatesModule;
}());
HomeUpdatesModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["RouterModule"]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__jobs_user_jobs_service__["a" /* UserJobsService */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__updates_component__["a" /* HomeUpdatesComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__updates_component__["a" /* HomeUpdatesComponent */]
        ]
    })
], HomeUpdatesModule);



/***/ }),

/***/ 800:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_home_component__ = __webpack_require__(715);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_home_resolver__ = __webpack_require__(733);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserHomeRoutingModule; });



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__user_home_component__["a" /* UserHomeComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_2__user_home_resolver__["a" /* UserHomeDataResolver */]
        }
    }
];
var UserHomeRoutingModule = __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forChild(routes);


/***/ }),

/***/ 801:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_http_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_models_api_urls_model__ = __webpack_require__(50);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserHomeService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserHomeService = (function () {
    function UserHomeService(httpService) {
        this.httpService = httpService;
    }
    /**
     * Method to load articles by category
     * @param category
     * @returns {Observable<any>}
     */
    UserHomeService.prototype.getSlides = function (category) {
        var request = {
            url: __WEBPACK_IMPORTED_MODULE_2__core_models_api_urls_model__["j" /* USER_HOME_PAGE */] + "/" + category,
            userToken: true
        };
        return this.httpService.sendRequest(request);
    };
    return UserHomeService;
}());
UserHomeService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_services_http_service__["a" /* HttpService */]])
], UserHomeService);



/***/ }),

/***/ 864:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(undefined);
// imports


// module
exports.push([module.i, ".chat{padding:10px 10px 20px}@media (min-width:1025px){.chat{padding:30px 20px}}.chat-list{height:320px;overflow-y:scroll;padding:0 20px 13px 0;margin-right:-15px;margin-bottom:8px;font-size:.889rem}@media (min-width:1025px){.chat-list{height:380px;font-size:1.111rem}}.chat-list .day-time{color:#ababae;font-size:.7em;font-weight:400}.chat-list .day{text-align:center;align-self:center;margin-bottom:5px}.chat-list .time{text-align:right}.chat-list .text-overflow{white-space:normal;word-break:break-word}.chat-list .icon-doc{display:inline-flex;align-items:center;color:#08618d}.chat-list .icon-doc a,.chat-list .icon-doc svg{color:inherit}.chat-list .icon-doc svg{margin-right:5px}.chat-list .icon-doc .text-overflow{white-space:nowrap;width:auto;max-width:195px}@media (min-width:1025px){.chat-list .icon-doc .text-overflow{max-width:400px}}.chat-list li{flex-direction:column}.chat-list li:not(:last-of-type){margin-bottom:20px}@media (min-width:1025px){.chat-list li:not(:last-of-type){margin-bottom:18px}}.chat-list li .message{padding:10px 15px;max-width:250px;border-radius:25px 25px 25px 0;border:1px solid #08618d}@media (min-width:1025px){.chat-list li .message{padding:9px 21px;max-width:560px;line-height:26px}}.chat-list li.outgoing{display:flex;justify-content:flex-end;align-items:flex-end}.chat-list li.outgoing .message{border-radius:22px 25px 0 22px;background-color:#08618d;color:#fff}.chat-list li.outgoing .icon-doc{color:#fff}.chat-list li.incoming{display:flex;align-items:flex-start}", ""]);

// exports


/***/ }),

/***/ 865:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(undefined);
// imports


// module
exports.push([module.i, ".send-box{display:flex}.send-box .message-holder{flex:1;position:relative}.send-box .message-holder textarea{height:65px;font-size:.889rem}@media (min-width:1025px){.send-box .message-holder textarea{font-size:1.111rem}}.send-box .message-holder .hints{position:absolute;right:0;top:calc(100% + 1px);font-size:.72rem}@media (min-width:1025px){.send-box .message-holder .hints{top:calc(100% + 5px)}}.send-box .btn-group-attach-send{width:55px;display:flex;flex-direction:column;justify-content:space-between;margin-left:15px}@media (min-width:1340px){.send-box .btn-group-attach-send{width:83px}}", ""]);

// exports


/***/ }),

/***/ 866:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(undefined);
// imports


// module
exports.push([module.i, "@media (min-width:1025px){.home-career-advice{padding-top:0}}@media (min-width:1025px){.home-career-advice h2.head-main{margin-bottom:61px}}.home-career-advice .tabs-carousel{padding-top:85px}.home-career-advice .tabs-carousel.move-down{padding-top:324px}@media (min-width:1025px){.home-career-advice .tabs-carousel{padding-top:5px}}.home-career-advice .carousel-component{margin-bottom:110px}.home-career-advice .carousel-component .carousel-holder .carousel-list li{padding:0}@media (min-width:1640px){.home-career-advice .carousel-component{margin-bottom:75px;justify-content:space-around}}", ""]);

// exports


/***/ }),

/***/ 867:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(undefined);
// imports


// module
exports.push([module.i, ".tally-added-day{text-align:center;height:30px;margin-top:10px}.tally-added-day span{font-size:20px}.tally-added-day .green-title{color:#0f0}.tally-added-day .yg-title{color:#ffae42}.tally-added-day .red-title{color:red}.updates{padding:32px 8px 32px 18px;font-size:.889rem}@media (min-width:700px){.updates{padding:20px 3%;font-size:1rem}}@media (min-width:1025px){.updates{font-size:1.111rem}}@media (min-width:1640px){.updates{padding:40px 71px}}.updates li{position:relative;padding-left:40px;display:flex;align-items:center}.updates li:not(:last-of-type){margin-bottom:19px}@media (min-width:700px){.updates li:not(:last-of-type){margin-bottom:25px}}@media (min-width:1640px){.updates li:not(:last-of-type){margin-bottom:32px}}.updates .updates-icon{color:#08618d;position:absolute;left:10px;top:50%;transform:translate(-50%,-50%)}", ""]);

// exports


/***/ }),

/***/ 868:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(undefined);
// imports


// module
exports.push([module.i, ".user-home-holder{padding:50px 10px 0}@media (min-width:1025px){.user-home-holder{padding:136px 10px 0}}@media (min-width:1430px){.user-home-holder{padding:136px 0 0}}.user-home-holder h1{margin-top:-7px;margin-bottom:32px}@media (min-width:1025px){.user-home-holder h1{margin-top:0;margin-bottom:71px}}.user-home-holder h1 span{display:block}@media (min-width:1025px){.user-home-holder h1 span{display:inline}}@media (min-width:800px){.user-home-holder .updates-chat{display:flex;justify-content:space-between}}.user-home-holder .updates-chat h2{background:#08618d;color:#fff;text-align:center;font-size:1.333rem;line-height:60px}@media (min-width:1025px){.user-home-holder .updates-chat h2{font-size:2rem;line-height:80px}}@media (min-width:1640px){.user-home-holder .updates-chat h2{font-size:2.667rem;line-height:100px}}.user-home-holder .updates-chat>li{background:#fff;margin-bottom:30px}@media (min-width:800px){.user-home-holder .updates-chat>li{width:49.4%;margin-bottom:53px}}", ""]);

// exports


/***/ }),

/***/ 909:
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<h2>Messages</h2>\r\n\r\n<div class=\"chat\">\r\n  <ul #chatHolder class=\"chat-list\">\r\n    <li *ngFor=\"let message of messages; trackBy: message?.id\"\r\n      [ngClass]=\"{ 'incoming': message.author !== userId, 'outgoing': message.author === userId}\">\r\n\r\n      <span class=\"day-time day\" *ngIf=\"message?.showDay\">{{message?.date | date: 'fullDate'}}</span>\r\n\r\n      <div class=\"message\">\r\n        <p class=\"text-overflow\" *ngIf=\"!message.attachment; else attachmentA\" [innerHTML]=\"message.message || 'No message text.'\"></p>\r\n\r\n        <ng-template #attachmentA>\r\n          <div class=\"icon-doc\">\r\n            <svg width=\"23\" height=\"23\">\r\n              <use xlink:href=\"" + __webpack_require__(15) + "#attachment\"></use>\r\n            </svg>\r\n            <a class=\"text-overflow\" [href]=\"message.attachment\" (click)=\"downloadFile(message, $event)\">{{message.message}}</a>\r\n          </div>\r\n        </ng-template>\r\n      </div>\r\n      <span class=\"day-time time\">{{message?.date | date: 'shortTime'}}</span>\r\n    </li>\r\n  </ul>\r\n\r\n  <fmp-send-box-component\r\n    [isMessageSending]=\"isSending\"\r\n    (onMessageSend)=\"sendMessage($event)\">\r\n  </fmp-send-box-component>\r\n\r\n</div>";

/***/ }),

/***/ 910:
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<button type=\"button\"\r\n        class=\"btn btn-secondary btn-icon-square\"\r\n        (click)=\"attachFile()\"\r\n        [disabled]=\"isDisabled\">\r\n  <span>\r\n    <svg width=\"26\" height=\"26\" *ngIf=\"!isSelected\">\r\n      <use xlink:href=\"" + __webpack_require__(15) + "#attachment\"></use>\r\n    </svg>\r\n    <svg width=\"26\" height=\"26\" *ngIf=\"isSelected\">\r\n      <use xlink:href=\"" + __webpack_require__(15) + "#trash\"></use>\r\n    </svg>\r\n  </span>\r\n</button>\r\n<input #fileSelector type=\"file\"\r\n       [attr.accept]=\"acceptFormats\"\r\n       (change)=\"fileSelected($event)\"\r\n       style=\"visibility: hidden\">";

/***/ }),

/***/ 911:
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<form class=\"send-box\" [formGroup]=\"modelForm\" (submit)=\"sendMessage()\" *ngIf=\"modelForm\">\r\n  <div class=\"message-holder\">\r\n   \r\n    <textarea\r\n      #sendField\r\n      class=\"form-control-border-light\"\r\n      formControlName=\"attachment_name\"\r\n      placeholder=\"\">\r\n    </textarea>\r\n   \r\n    <textarea\r\n      #sendField\r\n      class=\"form-control-border-light\"\r\n      formControlName=\"message\"\r\n      placeholder=\"Type your message here\"\r\n      (keypress)=\"keyPressed($event)\">\r\n    </textarea>\r\n    <div class=\"hints\">\r\n      <span *ngIf=\"formError; else text\" class=\"error-text\">{{formError}}</span>\r\n\r\n      <ng-template #text>\r\n\r\n        <span *ngIf=\"modelForm.controls['attachment'].value; else symbolsCount\">File selected</span>\r\n\r\n        <ng-template #symbolsCount>\r\n          <fmp-symbols-counter-component\r\n            [maxSymbols]=\"maxSymbols\"\r\n            [value]=\"modelForm.controls['message'].value\">\r\n          </fmp-symbols-counter-component>\r\n        </ng-template>\r\n\r\n      </ng-template>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"btn-group-attach-send\">\r\n    <fmp-file-selector-component\r\n      [isDisabled]=\"isMessageSending\"\r\n      [fileName]=\"fileName\"\r\n      [isSelected]=\"isFileSelected\"\r\n      (onFileSelected)=\"fileSelected($event)\"\r\n      (onFileRemoved)=\"fileRemoved()\">\r\n    </fmp-file-selector-component>\r\n    <button #submitButton class=\"btn btn-primary btn-icon-square\" type=\"submit\" [disabled]=\"isMessageSending\">\r\n      <span>\r\n        <svg width=\"31\" height=\"31\">\r\n          <use xlink:href=\"" + __webpack_require__(15) + "#send\"></use>\r\n        </svg>\r\n      </span>\r\n    </button>\r\n  </div>\r\n\r\n</form>";

/***/ }),

/***/ 912:
/***/ (function(module, exports) {

module.exports = "<span *ngIf=\"value\">\r\n  <span [ngClass]=\"{ 'error-text': value?.length > maxSymbols }\">{{value?.length}}</span>\r\n  <span> / {{maxSymbols}}</span>\r\n</span>";

/***/ }),

/***/ 913:
/***/ (function(module, exports) {

module.exports = "<div class=\"home-career-advice\">\r\n  <h2 class=\"head-main\">Career Advice</h2>\r\n  <div class=\"tabs-carousel\" [ngClass]=\"{'move-down': false}\">\r\n\r\n    <div class=\"container-md\">\r\n      <fmp-career-advice-tabs\r\n        [isTop]=\"true\"\r\n        [selectedPackage]=\"selectedPackage\"\r\n        (onLinkClick)=\"categoryChange($event)\">\r\n      </fmp-career-advice-tabs>\r\n    </div>\r\n\r\n    <fmp-template-carousel-component\r\n      class=\"carousel-component\"\r\n      [type]=\"'career-advice'\"\r\n      [slidesNumber]=\"topArticles?.length / 2\"\r\n      [sliderItems]=\"topArticles\"\r\n      (onLikeToggle)=\"toggleArticleLike($event)\"\r\n      (openArticle)=\"openSelectedArticle($event)\">\r\n    </fmp-template-carousel-component>\r\n\r\n  </div>\r\n</div>";

/***/ }),

/***/ 914:
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<h2>Updates</h2>\r\n<div class=\"tally-added-day\">\r\n  <span *ngIf=\"added_days != 0\" [ngClass]=\"{'green-title': added_days >=1 && added_days <= 3,'yg-title': added_days >=4 && added_days <= 6, 'red-title': added_days >= 7}\">{{added_days}} days since you added jobs</span>\r\n</div>\r\n<ul class=\"updates\" *ngIf=\"updates\">\r\n  <li *ngIf=\"!updates.profile_complete\">\r\n    <svg  width=\"22\" height=\"22\" class=\"updates-icon\">\r\n      <use xlink:href=\"" + __webpack_require__(15) + "#account\"></use>\r\n    </svg>\r\n    <span>\r\n      <a class=\"link link-line-remove\"\r\n        [routerLink]=\"['/my-profile']\"\r\n        [queryParams]=\"{tab: 'profile-accordion-1'}\">\r\n        Update Your Profile\r\n      </a>\r\n    </span>\r\n  </li>\r\n\r\n  <li *ngIf=\"!updates.resume_uploaded\">\r\n    <svg  width=\"17\" height=\"25\" class=\"updates-icon\">\r\n      <use xlink:href=\"" + __webpack_require__(15) + "#updates-profile\"></use>\r\n    </svg>\r\n    <span>\r\n      <a class=\"link link-line-remove\"\r\n        [routerLink]=\"['/my-profile']\"\r\n        [queryParams]=\"{tab: 'profile-accordion-5'}\">\r\n        Upload Your Resume\r\n      </a>\r\n    </span>\r\n  </li>\r\n\r\n  <li *ngIf=\"!updates.schedule_call\">\r\n    <svg  width=\"21\" height=\"21\" class=\"updates-icon\">\r\n      <use xlink:href=\"" + __webpack_require__(15) + "#updates-call\"></use>\r\n    </svg>\r\n    <a class=\"link link-line-remove\" [routerLink]=\"['/my-schedule']\">Schedule a Call</a>\r\n  </li>\r\n\r\n  <li *ngIf=\"updates.jobs\">\r\n    <svg  width=\"27\" height=\"21\" class=\"updates-icon\">\r\n      <use xlink:href=\"" + __webpack_require__(15) + "#updates-jobs\"></use>\r\n    </svg>\r\n    <a class=\"link link-line-remove\" [routerLink]=\"['/my-jobs']\" [queryParams]=\"{category: 'liked',  page: 1, filter: 'pending'}\">\r\n      {{updates.jobs.pending}} Job<span *ngIf=\"updates.jobs.pending !== 1\">s</span> Pending Approval\r\n    </a>\r\n  </li>\r\n\r\n  <li *ngIf=\"updates.jobs\">\r\n    <svg  width=\"27\" height=\"21\" class=\"updates-icon\">\r\n      <use xlink:href=\"" + __webpack_require__(15) + "#updates-submit\"></use>\r\n    </svg>\r\n    <a class=\"link link-line-remove\" [routerLink]=\"['/my-jobs']\" [queryParams]=\"{category: 'applied',  page: 1, filter: 'applied'}\">\r\n      {{updates.jobs.applied}} Job Application<span *ngIf=\"updates.jobs.applied !== 1\">s</span> Submitted\r\n    </a>\r\n  </li>\r\n\r\n  <li *ngIf=\"updates.jobs\">\r\n    <svg  width=\"25\" height=\"25\" class=\"updates-icon\">\r\n      <use xlink:href=\"" + __webpack_require__(15) + "#clock\"></use>\r\n    </svg>\r\n    <a class=\"link link-line-remove\" [routerLink]=\"['/my-jobs']\" [queryParams]=\"{category: 'liked',  page: 1, filter: 'need-info'}\">\r\n      {{updates.jobs.info}} Job<span *ngIf=\"updates.jobs.info !== 1\">s</span> Need<span *ngIf=\"updates.jobs.info === 1\">s</span> Info\r\n    </a>\r\n  </li>\r\n</ul>";

/***/ }),

/***/ 915:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-mlg user-home-holder\">\r\n\r\n  <h1 class=\"head-main\">Welcome to <span>Find My Profession</span></h1>\r\n\r\n  <ul class=\"updates-chat\">\r\n    <li>\r\n      <fmp-home-updates-component\r\n        [updates]=\"updates\">\r\n      </fmp-home-updates-component>\r\n    </li>\r\n    <li>\r\n      <fmp-chat-component\r\n        [messages]=\"chatMessages\">\r\n      </fmp-chat-component>\r\n    </li>\r\n  </ul>\r\n</div>\r\n\r\n<fmp-home-career-advice-component\r\n  [topArticles]=\"articles\"\r\n  (onArticleLikeToggle)=\"articleLikeToggle($event)\">\r\n</fmp-home-career-advice-component>\r\n";

/***/ })

});