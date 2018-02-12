webpackJsonp([5],{

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_jobs_component__ = __webpack_require__(734);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_jobs_routing_module__ = __webpack_require__(806);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_jobs_service__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__job_list_job_list_module__ = __webpack_require__(805);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_jobs_resolver__ = __webpack_require__(735);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserJobsModule", function() { return UserJobsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var UserJobsModule = (function () {
    function UserJobsModule() {
    }
    return UserJobsModule;
}());
UserJobsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__user_jobs_routing_module__["a" /* UserJobsRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["i" /* NgbTabsetModule */],
            __WEBPACK_IMPORTED_MODULE_6__job_list_job_list_module__["a" /* JobListModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__user_jobs_service__["a" /* UserJobsService */],
            __WEBPACK_IMPORTED_MODULE_7__user_jobs_resolver__["a" /* UserJobsResolver */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__user_jobs_component__["a" /* UserJobsComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__user_jobs_component__["a" /* UserJobsComponent */]
        ]
    })
], UserJobsModule);



/***/ }),

/***/ 702:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/assets/images/sprite-anim.svg";

/***/ }),

/***/ 706:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__custom_dropdown_component__ = __webpack_require__(720);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomDropdownModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CustomDropdownModule = (function () {
    function CustomDropdownModule() {
    }
    return CustomDropdownModule;
}());
CustomDropdownModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["d" /* NgbDropdownModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__custom_dropdown_component__["a" /* CustomDropdownComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__custom_dropdown_component__["a" /* CustomDropdownComponent */]
        ]
    })
], CustomDropdownModule);



/***/ }),

/***/ 720:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomDropdownComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomDropdownComponent = (function () {
    function CustomDropdownComponent() {
        this.type = 'common';
        this.isDisabled = false;
        this.valueSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    CustomDropdownComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        /**
         * Detect if need to open dropwdown
         */
        var openChanges = changes['openTime'];
        if (openChanges && openChanges.currentValue) {
            /**
             * manually creating async action
             */
            setTimeout(function () {
                _this.dropdown.open();
            });
        }
    };
    CustomDropdownComponent.prototype.selectValue = function (value) {
        var _this = this;
        if (this.type === 'jobs') {
            var oldValue_1 = this.selectedValue ? this.selectedValue.toString() : '';
            var change = {
                currentValue: value,
                previousValue: oldValue_1,
                callback: function () {
                    setTimeout(function () {
                        _this.selectedValue = oldValue_1;
                    });
                }
            };
            this.valueSelected.emit(change);
        }
        else {
            this.valueSelected.emit(value);
        }
        this.selectedValue = value;
    };
    return CustomDropdownComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('dropdown'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["e" /* NgbDropdown */])
], CustomDropdownComponent.prototype, "dropdown", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CustomDropdownComponent.prototype, "openTime", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], CustomDropdownComponent.prototype, "type", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], CustomDropdownComponent.prototype, "values", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CustomDropdownComponent.prototype, "selectedValue", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], CustomDropdownComponent.prototype, "placeholder", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], CustomDropdownComponent.prototype, "isDisabled", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], CustomDropdownComponent.prototype, "valueSelected", void 0);
CustomDropdownComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'fmp-custom-dropdown-component',
        template: __webpack_require__(724),
        styles: [__webpack_require__(722).toString()],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [])
], CustomDropdownComponent);



/***/ }),

/***/ 722:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(undefined);
// imports


// module
exports.push([module.i, "fmp-custom-dropdown-component{display:block;width:100%}.custom-dropdown{width:100%;margin-bottom:50px}.custom-dropdown button{cursor:pointer}.custom-dropdown .dropdown-toggle{text-align:left;border-color:#edf6f9;padding:0 50px 0 20px;font-size:1.111rem;font-weight:300;font-family:Arial,Helvetica,sans-serif}.custom-dropdown .dropdown-toggle:focus{border-color:#edf6f9}.custom-dropdown .dropdown-toggle:after{transition:.5s;position:absolute;right:40px;top:50%;transform:translateY(-20%);margin-left:0;border:9px solid transparent;border-top-color:#08618d}.custom-dropdown .dropdown-toggle[disabled]{cursor:not-allowed}.custom-dropdown .dropdown-toggle[disabled]:after{border-top-color:#e1e1e1}.custom-dropdown .dropdown-toggle[disabled]>*{opacity:.5}.custom-dropdown .dropdown-menu{transition:.3s;width:100%;min-width:0;border:1px solid #08618d;border-radius:0;float:none;display:block;opacity:0;visibility:hidden;position:absolute;top:100%;left:0;z-index:500;margin:0;padding:0;transform:scaleY(0);transform-origin:top center;max-height:280px;overflow-y:auto}.custom-dropdown .dropdown-item{cursor:pointer;padding:0 20px 0 40px;line-height:39px;font-family:Arial,Helvetica,sans-serif;font-weight:inherit}.custom-dropdown .dropdown-item:active,.custom-dropdown .dropdown-item:hover{background:#edf6f9;color:#2d2d2d}.custom-dropdown .dropdown-item span{display:block;width:100%;overflow:hidden;text-overflow:ellipsis;font-weight:400}.custom-dropdown .value-selected .dropdown-item,.custom-dropdown .value-selected .dropdown-item-package{background:#edf6f9}.custom-dropdown .default-selected{opacity:.3}.custom-dropdown.show .dropdown-toggle{border:1px solid #08618d}.custom-dropdown.show .dropdown-toggle:after{transform:translateY(-75%);border-top-color:transparent;border-bottom-color:#08618d}.custom-dropdown.show .dropdown-menu{opacity:1;visibility:visible;transform:scale(1)}.dropdown-package .custom-dropdown{max-width:225px;margin:0 auto}.dropdown-package .custom-dropdown .dropdown-toggle{padding:0 50px 0 13px}.dropdown-package .custom-dropdown .dropdown-toggle.disabled .dropdown-item-package{cursor:not-allowed}.dropdown-package .custom-dropdown .dropdown-item-package{display:block;cursor:pointer;font-size:1rem;line-height:1.2}.dropdown-package .custom-dropdown .dropdown-item-package span{display:block}.dropdown-package .custom-dropdown .dropdown-item-package span.plan-price{font-weight:700}.dropdown-package .custom-dropdown .dropdown-menu .dropdown-item-package{padding:0 13px;height:55px;display:flex;flex-direction:column;justify-content:center}.dropdown-package .custom-dropdown .dropdown-menu .dropdown-item-package:active,.dropdown-package .custom-dropdown .dropdown-menu .dropdown-item-package:hover{background:#edf6f9}", ""]);

// exports


/***/ }),

/***/ 724:
/***/ (function(module, exports) {

module.exports = "<div ngbDropdown class=\"custom-dropdown\" [autoClose]=\"true\">\r\n\r\n  <button type=\"button\" class=\"form-control-border-light\" ngbDropdownToggle [disabled]=\"isDisabled\">\r\n    <span class=\"text-overflow\" *ngIf=\"type === 'common' || type === 'jobs'\"\r\n          [ngClass]=\"!selectedValue ? 'default-selected' : ''\"\r\n          [innerHTML]=\"selectedValue || placeholder\">\r\n    </span>\r\n    <span class=\"dropdown-item-package\" *ngIf=\"type === 'congratulation'\">\r\n      <span class=\"plan-name\">{{selectedValue.title}}</span>\r\n      <span class=\"plan-price\">{{selectedValue.price | currency:'USD':true:'1.2-2'}}</span>\r\n    </span>\r\n  </button>\r\n\r\n  <ul class=\"dropdown-menu\">\r\n    <li *ngFor=\"let value of values\" [ngClass]=\"selectedValue === value || !selectedValue && placeholder === value ? 'value-selected': ''\">\r\n      <button\r\n        type=\"button\"\r\n        *ngIf=\"type === 'common' || type === 'jobs'\"\r\n        class=\"dropdown-item\"\r\n        (click)=\"selectValue(value)\">\r\n        <span class=\"text-overflow\" [innerHTML]=\"value\"></span>\r\n      </button>\r\n      <div class=\"dropdown-item-package\" *ngIf=\"type === 'congratulation'\" (click)=\"selectValue(value)\">\r\n        <span class=\"plan-name\">{{value.title}}</span>\r\n        <span class=\"plan-price\">{{value.price | currency:'USD':true:'1.2-2'}}</span>\r\n      </div>\r\n    </li>\r\n  </ul>\r\n\r\n</div>";

/***/ }),

/***/ 734:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_jobs_service__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_jobs_model__ = __webpack_require__(807);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__job_add_modal_job_add_modal_component__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_alert_modal_alert_modal_component__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_services_core_utilities_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_services_user_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__modules_career_finder_steps_modal_career_finder_steps_modal_component__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_Subject__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserJobsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var UserJobsComponent = (function () {
    function UserJobsComponent(jobsService, route, router, changeDetector, modalService, userService, titleService) {
        this.jobsService = jobsService;
        this.route = route;
        this.router = router;
        this.changeDetector = changeDetector;
        this.modalService = modalService;
        this.userService = userService;
        this.titleService = titleService;
        this.jobs = {
            liked: [],
            applied: []
        };
        this.jobsCount = {
            liked: 0,
            applied: 0
        };
        this.jobsCurrentPage = {
            liked: 0,
            applied: 0
        };
        this.filterOption = {
            liked: null,
            applied: null
        };
        this.statuses = {
            liked: [],
            applied: []
        };
        this.likedSortList = [];
        this.appliedSortList = [];
        this.likedStatus = 'liked';
        this.appliedStatus = 'applied';
        this.defaultCategory = this.likedStatus;
        this.defaultPage = 1;
        this.destroyed$ = new __WEBPACK_IMPORTED_MODULE_12_rxjs_Subject__["Subject"]();
        /**
         * Represent if current user bought Career Finder package
         * @type {boolean}
         */
        this.isCareerFinderBought = false;
        this.titleService.setTitle('My Jobs - Find My Profession');
        var price = this.route.snapshot.data['price'];
        if (price) {
            this.careerFinderPrice = price.price_senior;
        }
        this.statuses = __WEBPACK_IMPORTED_MODULE_3__user_jobs_model__["a" /* STATUSES */];
        this.sortList = __WEBPACK_IMPORTED_MODULE_3__user_jobs_model__["b" /* SORT_OPTIONS */];
        this.likedSortList = this.sortList.liked.map(function (element) { return element.title; });
        this.appliedSortList = this.sortList.applied.map(function (element) { return element.title; });
        this.subscribeToUser();
    }
    UserJobsComponent.prototype.ngOnInit = function () {
        this.watchForQueryParams();
    };
    UserJobsComponent.prototype.ngOnDestroy = function () {
        this.destroyed$.next();
        this.destroyed$.complete();
        this.changeDetector.detach();
    };
    /**
     * Method to change status of the job
     * @param entity
     * @param category
     */
    UserJobsComponent.prototype.jobStatusChanged = function (entity, category) {
        var _this = this;
        if (entity.status.currentValue === 'Ready' && !this.isCareerFinderBought) {
            this.openCareerFinderModal();
            /**
             * Reverting changes to previjob-ous
             * @type {string}
             */
            this.jobs[category][entity.index].status = entity.status.previousValue;
            entity.status.callback();
        }
        else if (entity.status.currentValue === 'Not Interested' && this.jobs[category][entity.index].added_by === 'user') {
            /**
             * Reverting changes to previjob-ous
             * @type {string}
             */
            this.jobs[category][entity.index].status = entity.status.previousValue;
            entity.status.callback();
        }
        else {
            var currentPage_1 = this.getCurrentPage(this.getQueryParams());
            this.jobsService.setJobStatus(entity.id, entity.status.currentValue, currentPage_1)
                .subscribe(function (response) { return _this.setLoadedJobs(response, category, currentPage_1); }, this.handleError.bind(this));
        }
    };
    /**
     * Open modal to add new job
     */
    UserJobsComponent.prototype.createNewJob = function () {
        var _this = this;
        var modal = this.modalService.open(__WEBPACK_IMPORTED_MODULE_5__job_add_modal_job_add_modal_component__["a" /* FmpAddJobComponent */]);
        __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"].fromPromise(modal.result)
            .flatMap(function (job) { return _this.jobsService.addJob(job); })
            .subscribe(function (response) { return _this.setLoadedJobs(response, _this.likedStatus); }, this.handleError.bind(this));
    };
    /**
     * Remove job from list with confirmation
     * @param job
     */
    UserJobsComponent.prototype.removeJobEntity = function (job) {
        var _this = this;
        var modal = this.modalService.open(__WEBPACK_IMPORTED_MODULE_6__modules_alert_modal_alert_modal_component__["a" /* AlertModalComponent */]);
        modal.componentInstance.message = "Are you sure you want to remove the job (" + job.position + ")?";
        __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"].fromPromise(modal.result)
            .flatMap(function () { return _this.jobsService.removeJob(job.id); })
            .subscribe(function (response) { return _this.setLoadedJobs(response, _this.getQueryParams().category); }, this.handleError.bind(this));
    };
    /**
     * Method that triggers when user change tab
     * @param event
     */
    UserJobsComponent.prototype.onTabChanged = function (event) {
        if (this.getCategory(this.route.snapshot.queryParams) !== event.nextId) {
            this.setQueryParams(event.nextId, 1);
        }
    };
    UserJobsComponent.prototype.onFilterOptionChanged = function (list, option) {
        this.setQueryParams(list, 1, this.getSortPipeOption(list, option, 'value'));
    };
    /**
     * Method to download file from job
     * @param event
     */
    UserJobsComponent.prototype.downloadFile = function (event) {
        this.jobsService.downloadFile(event.link)
            .subscribe(function (data) { return __WEBPACK_IMPORTED_MODULE_7__core_services_core_utilities_service__["a" /* CoreUtilitiesService */].saveFile(data, event.fileName); }, this.handleError.bind(this));
    };
    /**
     * Method that triggers when user change page
     * @param page
     */
    UserJobsComponent.prototype.currentPageChanged = function (page) {
        var queryParams = this.getQueryParams();
        this.setQueryParams(queryParams.category, page, queryParams.filter);
    };
    /**
     * Method to apply job (checkbox)
     * @param eventObject
     */
    UserJobsComponent.prototype.applyStatusChanged = function (eventObject) {
        var _this = this;
        if (this.isCareerFinderBought) {
            var params = this.getQueryParams();
            var page_1 = this.getCurrentPage(params);
            var category_1 = this.getCategory(params);
            this.jobsService.changeApplyStatus(eventObject.id, eventObject.state, page_1)
                .subscribe(function (response) { return _this.setLoadedJobs(response, category_1, page_1); }, function (error) { return _this.applyStatusCatch(eventObject); });
        }
        else {
            this.applyStatusCatch(eventObject);
        }
    };
    /**
     * Method to revert changes in checkbox
     * @param eventObject
     */
    UserJobsComponent.prototype.applyStatusCatch = function (eventObject) {
        eventObject.event.preventDefault();
        var inputElement = eventObject.event.target;
        if (inputElement) {
            inputElement.checked = !eventObject.state;
        }
        eventObject.item.checked = !eventObject.state;
        this.openCareerFinderModal();
    };
    UserJobsComponent.prototype.uploadCoverLetter = function (event, type) {
        var _this = this;
        this.jobsService.uploadCoverLetter(event.file, event.id)
            .subscribe(function (responseEntity) { return _this.jobs[type][event.index] = responseEntity; });
    };
    UserJobsComponent.prototype.removeCoverLetter = function (event, type) {
        var _this = this;
        var modal = this.modalService.open(__WEBPACK_IMPORTED_MODULE_6__modules_alert_modal_alert_modal_component__["a" /* AlertModalComponent */]);
        modal.componentInstance.message = "Are you sure remove cover letter for selected job?";
        __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"].fromPromise(modal.result)
            .filter(function () { return !!_this.jobs[type][event.index]; })
            .flatMap(function () { return _this.jobsService.removeCoverLetter(event.id); })
            .subscribe(function () { return _this.removeCoverLetterHandler(event, type); });
    };
    UserJobsComponent.prototype.openCareerFinderModal = function (isFull) {
        if (isFull === void 0) { isFull = true; }
        var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_10__modules_career_finder_steps_modal_career_finder_steps_modal_component__["a" /* CareerFinderStepsModalComponent */], {
            size: 'lg'
        });
        modalRef.componentInstance.price = this.careerFinderPrice;
        if (!isFull) {
            modalRef.componentInstance.step = 1;
        }
    };
    UserJobsComponent.prototype.removeCoverLetterHandler = function (event, type) {
        var entity = this.jobs[type][event.index];
        entity.attachment_name = null;
        entity.attachment = null;
    };
    /**
     * Method to load new jobs
     * @param type
     * @param page
     * @param option
     */
    UserJobsComponent.prototype.loadJobs = function (type, page, option) {
        var _this = this;
        if (type === void 0) { type = this.defaultCategory; }
        if (page === void 0) { page = this.defaultPage; }
        if (option) {
            option = this.getSortPipeOption(type, option, 'title');
        }
        this.jobsService.getJobs(type, page, option)
            .subscribe(function (response) { return _this.setLoadedJobs(response, type, page, option); }, this.handleError.bind(this));
    };
    /**
     * Method to set list of jobs
     * @param response
     * @param type
     * @param currentPage
     */
    UserJobsComponent.prototype.setLoadedJobs = function (response, type, currentPage, option) {
        if (currentPage === void 0) { currentPage = this.defaultPage; }
        this.jobs[type || this.defaultCategory] = response.jobs;
        this.jobsCount[type || this.defaultCategory] = response.count || 0;
        this.jobsCurrentPage[type || this.defaultCategory] = currentPage;
        this.filterOption[type || this.defaultCategory] = option;
        this.changeDetector.detectChanges();
    };
    /**
     * Method to get current page from params
     * @param params
     * @returns {number}
     */
    UserJobsComponent.prototype.getCurrentPage = function (params) {
        var page = params.page;
        if (!Number.isNaN(+page)) {
            return +page;
        }
        return 1;
    };
    /**
     * Method to get current category from params
     * @param params
     * @returns {string}
     */
    UserJobsComponent.prototype.getCategory = function (params) {
        var category = params.category;
        if (!category) {
            return this.defaultCategory;
        }
        if (category !== this.defaultCategory && category !== this.appliedStatus) {
            return this.defaultCategory;
        }
        return category;
    };
    /**
     * Method to navigate with query params
     * @param category
     * @param page
     * @param filter
     */
    UserJobsComponent.prototype.setQueryParams = function (category, page, filter) {
        this.router.navigate(['/my-jobs'], {
            queryParams: {
                category: category,
                page: page || 1,
                filter: filter
            }
        });
    };
    /**
     * Method watch for query params
     */
    UserJobsComponent.prototype.watchForQueryParams = function () {
        var _this = this;
        this.route.queryParams
            .do(function (params) {
            if (!params.category || !params.page) {
                _this.setQueryParams(_this.getCategory(params), _this.getCurrentPage(params));
            }
        })
            .filter(function (params) { return !!params.category && !!params.page; })
            .subscribe(function (params) { return _this.queryParamsChanged(params); });
    };
    /**
     * method that triggers when query params changed
     * @param params
     */
    UserJobsComponent.prototype.queryParamsChanged = function (params) {
        this.changeDetector.detectChanges();
        this.jobsTabSet.select(params.category);
        this.loadJobs(params.category, this.getCurrentPage(params), params.filter);
    };
    /**
     * method to parse sort option with pipe
     * @param type
     * @param option
     * @param field
     * @returns {any}
     */
    UserJobsComponent.prototype.getSortPipeOption = function (type, option, field) {
        var searchField = 'value';
        if (field === searchField) {
            searchField = 'title';
        }
        var pipe = this.sortList[type].filter(function (element) { return element[searchField] === option; })[0];
        if (pipe) {
            return pipe[field];
        }
        return null;
    };
    /**
     * Method to get page query params object
     * @returns {IJobQueryParams}
     */
    UserJobsComponent.prototype.getQueryParams = function () {
        return this.route.snapshot.queryParams;
    };
    /**
     * Method to subscribe to user stream
     */
    UserJobsComponent.prototype.subscribeToUser = function () {
        var _this = this;
        this.userService.user$
            .takeUntil(this.destroyed$)
            .filter(function (user) { return !!user; })
            .subscribe(function (user) {
            _this.user = user;
            _this.isCareerFinderBought = _this.userService.checkIfCareerFinderBought();
        });
    };
    /**
     * Method to handle server error
     * @param error
     */
    UserJobsComponent.prototype.handleError = function (error) {
        this.errorMessage = error.message;
    };
    return UserJobsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('jobsTabSet'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["j" /* NgbTabset */])
], UserJobsComponent.prototype, "jobsTabSet", void 0);
UserJobsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'fmp-user-jobs-layout',
        template: __webpack_require__(918)
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__user_jobs_service__["a" /* UserJobsService */],
        __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"],
        __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"],
        __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["f" /* NgbModal */],
        __WEBPACK_IMPORTED_MODULE_9__core_services_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser__["Title"]])
], UserJobsComponent);



/***/ }),

/***/ 735:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_jobs_service__ = __webpack_require__(112);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserJobsResolver; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserJobsResolver = (function () {
    function UserJobsResolver(jobsService) {
        this.jobsService = jobsService;
    }
    UserJobsResolver.prototype.resolve = function () {
        return this.jobsService.getCareerFinderPrice();
    };
    return UserJobsResolver;
}());
UserJobsResolver = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_jobs_service__["a" /* UserJobsService */]])
], UserJobsResolver);



/***/ }),

/***/ 802:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_core_utilities_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_alert_modal_alert_modal_component__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_services_platform_check_service__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





__webpack_require__(114);
var JobItemComponent = (function () {
    function JobItemComponent(modalService, platformCheck) {
        this.modalService = modalService;
        this.platformCheck = platformCheck;
        this.onFileUpload = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onStatusChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onJobRemove = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onApplyStateChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onFileSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onCoverLetterRemove = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.defaultIcon = 'src/assets/images/logo-company.png';
        this.acceptFormats = __WEBPACK_IMPORTED_MODULE_1__core_services_core_utilities_service__["a" /* CoreUtilitiesService */].fileAcceptFormats;
    }
    JobItemComponent.prototype.ngOnChanges = function (changes) {
        var item = changes['item'];
        if (item && item.currentValue) {
            this.item.linkForAvatar = __WEBPACK_IMPORTED_MODULE_1__core_services_core_utilities_service__["a" /* CoreUtilitiesService */].parseJobLink(this.item.link);
        }
    };
    /**
     * Method to log error if img not loaded
     * @param event
     */
    JobItemComponent.prototype.logoError = function (event) {
        if (event.target) {
            event.target.src = this.defaultIcon;
        }
    };
    JobItemComponent.prototype.applyStatusChanged = function (event) {
        this.onApplyStateChanged.emit({
            id: this.item.id,
            state: event.target['checked'],
            event: event,
            item: this.item
        });
    };
    JobItemComponent.prototype.statusChanged = function (status) {
        this.onStatusChanged.emit(status);
    };
    JobItemComponent.prototype.downloadAttachment = function (jobItem, $event) {
        $event.preventDefault();
        this.onFileUpload.emit({
            link: jobItem.attachment,
            fileName: jobItem.attachment_name
        });
    };
    JobItemComponent.prototype.removeJob = function (job) {
        this.onJobRemove.emit(job);
    };
    JobItemComponent.prototype.uploadCoverLetterClick = function () {
        this.uploadCoverSelector.nativeElement.click();
    };
    JobItemComponent.prototype.uploadCoverLetter = function ($event) {
        var fileList = $event.target.files;
        if (fileList[0]) {
            var file = fileList[0];
            var isFormatValid = __WEBPACK_IMPORTED_MODULE_1__core_services_core_utilities_service__["a" /* CoreUtilitiesService */].checkFileExtension(file);
            if (!isFormatValid) {
                var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_3__modules_alert_modal_alert_modal_component__["a" /* AlertModalComponent */]);
                modalRef.componentInstance.showButtons = false;
                modalRef.componentInstance.message = "File you want upload has unsupported format. Please select another. Accept formats: " + this.acceptFormats.join(' ; ');
            }
            else {
                this.onFileSelected.emit(file);
            }
        }
    };
    JobItemComponent.prototype.removeCoverLetter = function (item) {
        this.onCoverLetterRemove.emit(item);
    };
    JobItemComponent.prototype.openCompanyLink = function (link) {
        if (this.platformCheck.isBrowser) {
            window.open(link, '_blank');
        }
    };
    return JobItemComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('uploadCover'),
    __metadata("design:type", Object)
], JobItemComponent.prototype, "uploadCoverSelector", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], JobItemComponent.prototype, "item", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], JobItemComponent.prototype, "statuses", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], JobItemComponent.prototype, "onFileUpload", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], JobItemComponent.prototype, "onStatusChanged", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], JobItemComponent.prototype, "onJobRemove", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], JobItemComponent.prototype, "onApplyStateChanged", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], JobItemComponent.prototype, "onFileSelected", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], JobItemComponent.prototype, "onCoverLetterRemove", void 0);
JobItemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'fmp-job-item-component',
        template: __webpack_require__(916),
        styles: [__webpack_require__(869).toString()],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["f" /* NgbModal */],
        __WEBPACK_IMPORTED_MODULE_4__core_services_platform_check_service__["a" /* PlatformCheckService */]])
], JobItemComponent);



/***/ }),

/***/ 803:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__job_item_component__ = __webpack_require__(802);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_custom_dropdown_custom_dropdown_module__ = __webpack_require__(706);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobItemModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var JobItemModule = (function () {
    function JobItemModule() {
    }
    return JobItemModule;
}());
JobItemModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_4__modules_custom_dropdown_custom_dropdown_module__["a" /* CustomDropdownModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__job_item_component__["a" /* JobItemComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__job_item_component__["a" /* JobItemComponent */]
        ]
    })
], JobItemModule);



/***/ }),

/***/ 804:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JobListComponent = (function () {
    function JobListComponent() {
        this.isCareerFinderBought = false;
        this.onFilterOptionSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onFileDownload = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onJobChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onJobAdd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onJobRemove = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onPageChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onApplyStateChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onCoverLetterUpload = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onCoverLetterRemove = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onCareerFinderClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.defaultLimit = 7;
    }
    JobListComponent.prototype.filterBy = function (option) {
        this.onFilterOptionSelected.emit(option);
    };
    JobListComponent.prototype.downloadFile = function (file) {
        this.onFileDownload.emit(file);
    };
    JobListComponent.prototype.itemStatusChanged = function (status, job, index) {
        this.onJobChanged.emit({
            status: status,
            id: job.id,
            index: index
        });
    };
    JobListComponent.prototype.addNewJob = function () {
        this.onJobAdd.emit();
    };
    JobListComponent.prototype.removeJob = function (job) {
        this.onJobRemove.emit(job);
    };
    JobListComponent.prototype.pageChanged = function (page) {
        this.onPageChange.emit(page);
    };
    JobListComponent.prototype.applyStateChanged = function (eventObject) {
        this.onApplyStateChanged.emit(eventObject);
    };
    JobListComponent.prototype.uploadCoverLetter = function (file, job, index) {
        this.onCoverLetterUpload.emit({
            file: file,
            id: job.id,
            index: index
        });
    };
    JobListComponent.prototype.removeCoverLetter = function (job, index) {
        this.onCoverLetterRemove.emit({ id: job.id, index: index });
    };
    JobListComponent.prototype.selectCareerFinder = function () {
        this.onCareerFinderClicked.emit();
    };
    return JobListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], JobListComponent.prototype, "jobs", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], JobListComponent.prototype, "type", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], JobListComponent.prototype, "statuses", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], JobListComponent.prototype, "jobsCount", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], JobListComponent.prototype, "sortList", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], JobListComponent.prototype, "filterByOption", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], JobListComponent.prototype, "currentPage", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], JobListComponent.prototype, "isCareerFinderBought", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], JobListComponent.prototype, "onFilterOptionSelected", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], JobListComponent.prototype, "onFileDownload", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], JobListComponent.prototype, "onJobChanged", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], JobListComponent.prototype, "onJobAdd", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], JobListComponent.prototype, "onJobRemove", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], JobListComponent.prototype, "onPageChange", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], JobListComponent.prototype, "onApplyStateChanged", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], JobListComponent.prototype, "onCoverLetterUpload", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], JobListComponent.prototype, "onCoverLetterRemove", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], JobListComponent.prototype, "onCareerFinderClicked", void 0);
JobListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'fmp-jobs-list-component',
        template: __webpack_require__(917),
        styles: [__webpack_require__(870).toString()],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    })
], JobListComponent);



/***/ }),

/***/ 805:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__job_list_component__ = __webpack_require__(804);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__job_item_job_item_module__ = __webpack_require__(803);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_custom_dropdown_custom_dropdown_module__ = __webpack_require__(706);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_career_finder_steps_career_finder_steps_module__ = __webpack_require__(264);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobListModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var JobListModule = (function () {
    function JobListModule() {
    }
    return JobListModule;
}());
JobListModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__job_item_job_item_module__["a" /* JobItemModule */],
            __WEBPACK_IMPORTED_MODULE_5__modules_custom_dropdown_custom_dropdown_module__["a" /* CustomDropdownModule */],
            __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["h" /* NgbPaginationModule */],
            __WEBPACK_IMPORTED_MODULE_6__modules_career_finder_steps_career_finder_steps_module__["a" /* CareerFinderStepsModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__job_list_component__["a" /* JobListComponent */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__job_list_component__["a" /* JobListComponent */]
        ]
    })
], JobListModule);



/***/ }),

/***/ 806:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_jobs_component__ = __webpack_require__(734);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_jobs_resolver__ = __webpack_require__(735);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserJobsRoutingModule; });



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__user_jobs_component__["a" /* UserJobsComponent */],
        resolve: {
            price: __WEBPACK_IMPORTED_MODULE_2__user_jobs_resolver__["a" /* UserJobsResolver */]
        }
    }
];
var UserJobsRoutingModule = __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forChild(routes);


/***/ }),

/***/ 807:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SORT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return STATUSES; });
var notInterested = {
    title: 'Not Interested',
    value: 'nointerest'
};
var SORT_OPTIONS = {
    liked: [
        {
            title: 'All'
        },
        {
            title: 'Pending',
            value: 'pending'
        },
        {
            title: 'Ready',
            value: 'ready'
        },
        {
            title: 'Need Info',
            value: 'need-info'
        },
        notInterested
    ],
    applied: [
        {
            title: 'All'
        },
        {
            title: 'Applied',
            value: 'applied'
        },
        {
            title: 'Interview',
            value: 'interview'
        },
        {
            title: 'Rejected',
            value: 'rejected'
        },
        {
            title: 'Offer',
            value: 'offer'
        },
        notInterested
    ]
};
var STATUSES = {
    liked: [
        'Pending',
        'Ready',
        'Need Info',
        'Applied',
        'Not Interested'
    ],
    applied: [
        'Pending',
        'Applied',
        'Interview',
        'Offer',
        'Rejected',
        'Not Interested'
    ]
};


/***/ }),

/***/ 869:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(undefined);
// imports


// module
exports.push([module.i, ".job-item{border:1px solid #08618d;padding:20px 10px;margin-bottom:26px;position:relative;transition:.3s;text-align:center;font-size:1.111rem;display:flex;align-items:center;flex-direction:column}.job-item svg{pointer-events:none}@media (min-width:700px){.job-item{flex-direction:row;justify-content:center}}@media (min-width:1025px){.job-item{padding:20px 5% 10px 20px;text-align:right;align-items:stretch;flex-direction:row;justify-content:space-between}.job-item:hover{background-color:#edf6f9}.job-item:hover .custom-dropdown .dropdown-toggle{background:#fff}.job-item:hover .custom-dropdown.show .dropdown-toggle{background:#edf6f9}}@media (max-width:600px){.job-item{padding-top:5px;padding-bottom:5px;margin-bottom:10px;font-size:1rem}.job-item .form-control-border-light:not(textarea){height:40px}}@media (max-width:320px) and (max-height:568px){.job-item{padding-top:10px;padding-bottom:10px}}.job-item .box-right{width:100%}@media (min-width:700px){.job-item .box-right{width:40%;margin-left:10px}}@media (min-width:1025px){.job-item .box-right{display:flex;align-items:center;justify-content:flex-end;flex-basis:55%}}@media (min-width:1200px){.job-item .box-right{flex-basis:45%}}.job-item .logo-position-company{width:100%}.job-item .logo-position-company img{cursor:pointer}@media (min-width:700px){.job-item .logo-position-company{width:42%;margin-right:10px}}@media (min-width:1025px){.job-item .logo-position-company{margin-right:10px;align-self:center;display:flex;align-items:center;flex-basis:45%}}@media (min-width:1340px){.job-item .logo-position-company{align-self:center;display:flex;align-items:center}}@media (min-width:1200px){.job-item .logo-position-company{flex-basis:55%}}.job-item .job-item-logo{width:180px;height:180px;margin-bottom:20px}@media (min-width:700px){.job-item .job-item-logo{flex-shrink:0;width:144px;height:144px}}@media (min-width:1025px){.job-item .job-item-logo{margin:0 4% 0 0}}@media (min-width:1340px){.job-item .job-item-logo{margin:0 5% 0 0}}@media (max-width:600px){.job-item .job-item-logo{height:50px;width:50px;margin-bottom:5px}}@media (max-width:320px) and (max-height:568px){.job-item .job-item-logo{display:none}}.job-item .position-company{margin-bottom:50px}.job-item .position-company a{text-decoration:none}.job-item .position-company a:hover{text-decoration:underline}@media (min-width:700px){.job-item .position-company{margin-bottom:0}}@media (min-width:1025px){.job-item .position-company{text-align:left;width:65%}}@media (min-width:1530px){.job-item .position-company{width:58%}}@media (max-width:600px){.job-item .position-company{width:85%;margin:0 auto 7px}}.job-item .position-company span{display:block}.job-item .position-company span.position{font-size:1.556rem;font-weight:500}@media (min-width:1340px){.job-item .position-company span.position{font-size:1.667rem}}@media (max-width:600px){.job-item .position-company span.position{font-size:1.2rem}}@media (max-width:600px){.job-item .position-company span{line-height:1.3}}.job-item .position-company span.company{font-size:1.222rem;font-weight:400}@media (max-width:479px){.job-item .position-company span.company{font-size:1rem}}.job-item .download-dropdown{text-align:center;display:flex;flex-direction:column;align-items:center;flex-basis:200px;flex-shrink:0}@media (min-width:1025px){.job-item .download-dropdown{width:200px;justify-content:flex-end}}@media (min-width:1530px){.job-item .download-dropdown{flex-direction:row;flex:1;width:auto}}.job-item .dropdown-holder{width:200px;margin:0 auto}@media (min-width:1025px){.job-item .dropdown-holder{margin:0 0 0 5%}}@media (min-width:1340px){.job-item .dropdown-holder{margin:0 0 0 10%}}@media (min-width:1530px){.job-item .dropdown-holder{flex-basis:200px;flex-shrink:0}}.job-item .dropdown-holder .custom-dropdown{margin-bottom:32px}@media (min-width:1025px){.job-item .dropdown-holder .custom-dropdown{margin:0}}@media (max-width:600px){.job-item .dropdown-holder .custom-dropdown{margin-bottom:10px}}.job-item .download-file{margin-bottom:20px;color:#08618d;white-space:nowrap;padding:0 20px 0 30px;max-width:100%}@media (min-width:1025px){.job-item .download-file{max-width:125%;margin-bottom:25px;text-align:center}}@media (min-width:1140px){.job-item .download-file{max-width:250px}}@media (min-width:1530px){.job-item .download-file{margin:0}}@media (max-width:479px){.job-item .download-file{margin-bottom:10px}}.job-item .download-file .link-line-remove-center{font-weight:700}.job-item .download-file .file{position:relative}.job-item .download-file .file span{position:absolute;top:50%;transform:translateY(-50%)}.job-item .download-file .file span.clip{right:calc(100% + 5px)}.job-item .download-file .file span.close{left:calc(100% + 5px);width:15px;height:15px}@media (min-width:1025px){.job-item .choice-liked{display:flex;align-self:stretch;align-items:center;justify-content:center;position:relative;margin-left:15%}}@media (min-width:1200px){.job-item .choice-liked{margin-left:18%}}@media (min-width:1340px){.job-item .choice-liked{margin-left:25%}}@media (min-width:1530px){.job-item .choice-liked{margin-left:5%}}.job-item .custom-choice{margin-right:0;margin-bottom:40px}@media (min-width:1025px){.job-item .custom-choice{margin:0}}@media (max-width:600px){.job-item .custom-choice{margin-bottom:10px}}.job-item .text-liked{opacity:.5}@media (min-width:1025px){.job-item .text-liked{white-space:nowrap;position:absolute;right:0;bottom:calc(100% - 6px);transform:translateY(50%)}}.job-item .close{position:absolute;top:13px;right:13px}@media (min-width:1025px){.job-item .close{top:19px;right:15px}}", ""]);

// exports


/***/ }),

/***/ 870:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(undefined);
// imports


// module
exports.push([module.i, ".job-list-holder{padding-top:15px}@media (min-width:1025px){.job-list-holder{padding-top:24px}}.job-list-holder .sort-container{position:relative;z-index:1;text-align:center;font-size:1.111rem;margin-bottom:25px}.job-list-holder .sort-container .custom-dropdown{width:100%;max-width:320px;margin:0 auto 29px}@media (min-width:1025px){.job-list-holder .sort-container{min-height:67px;margin-bottom:40px;display:flex;align-items:center;justify-content:space-between}.job-list-holder .sort-container .text-holder{text-align:left;min-width:320px}.job-list-holder .sort-container .dropdown{width:40%;height:50px;margin:0 auto}.job-list-holder .sort-container .btn-holder{text-align:right;min-width:320px}}.job-list-holder .sort-container p{position:relative;display:inline-block;margin-bottom:20px;transform:translateX(-60px)}@media (min-width:1025px){.job-list-holder .sort-container p{transform:translateX(0)}}.job-list-holder .sort-container p span{position:absolute;left:calc(100% + 5px);top:50%;transform:translateY(-50%);white-space:nowrap}@media (min-width:1025px){.job-list-holder .sort-container p{margin-bottom:0}}.job-list-holder .job-liked-empty{opacity:.5;text-align:center;padding:22px 0 75px}@media (min-width:1025px){.job-list-holder .job-liked-empty{padding:49px 0 125px}}.job-list-holder .job-liked-empty p{font-size:1.6rem;margin-bottom:22px}@media (min-width:1025px){.job-list-holder .job-liked-empty p{font-size:2.667rem}}.job-list-holder .job-list-filled>li{margin-bottom:26px}@media (max-width:600px){.job-list-holder .job-list-filled>li{margin-bottom:10px}}", ""]);

// exports


/***/ }),

/***/ 916:
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<div class=\"job-item\">\r\n  <div class=\"logo-position-company\">\r\n    <img class=\"job-item-logo\" [src]=\"'//logo.clearbit.com/'+item.linkForAvatar\" (error)=\"logoError($event)\" (click)=\"openCompanyLink(item.link)\">\r\n    <div class=\"position-company\">\r\n      <span class=\"position text-overflow\">\r\n        <a [href]=\"item.link\" target=\"_blank\">{{item.position}}</a>\r\n      </span>\r\n      <span class=\"company text-overflow\">{{item.company}}</span>\r\n    </div>\r\n  </div>\r\n  <div class=\"box-right\">\r\n    <div class=\"download-dropdown\">\r\n      <div class=\"download-file\">\r\n        <label\r\n          *ngIf=\"!item.attachment\"\r\n          class=\"link link-line-remove-center\"\r\n          (click)=\"uploadCoverLetterClick()\">\r\n          Upload Cover Letter\r\n        </label>\r\n        <input #uploadCover type=\"file\" (change)=\"uploadCoverLetter($event)\">\r\n        <div class=\"file\" *ngIf=\"item.attachment\">\r\n          <span class=\"clip\">\r\n            <svg width=\"23\" height=\"23\">\r\n              <use xlink:href=\"" + __webpack_require__(15) + "#attachment\"></use>\r\n            </svg>\r\n          </span>\r\n          <a class=\"link link-line-remove-center text-overflow\"\r\n             [href]=\"item.attachment\"\r\n             download=\"\"\r\n             (click)=\"downloadAttachment(item, $event)\">{{item.attachment_name}}</a>\r\n          <span class=\"close\"  (click)=\"removeCoverLetter(item)\">\r\n            <svg width=\"15\" height=\"15\">\r\n              <use xlink:href=\"" + __webpack_require__(15) + "#close\"></use>\r\n            </svg>\r\n          </span>\r\n        </div>\r\n      </div>\r\n      <fmp-custom-dropdown-component\r\n        class=\"dropdown-holder\"\r\n        [type]=\"'jobs'\"\r\n        [values]=\"statuses\"\r\n        [selectedValue]=\"item.status\"\r\n        (valueSelected)=\"statusChanged($event)\">\r\n      </fmp-custom-dropdown-component>\r\n    </div>\r\n    <div class=\"choice-liked\">\r\n      <label class=\"custom-choice custom-choice-blue\">\r\n        <input type=\"checkbox\" [ngModel]=\"item.checked\" (change)=\"applyStatusChanged($event)\">\r\n        <span class=\"indicator\">\r\n        <svg>\r\n          <use xlink:href=\"" + __webpack_require__(702) + "#checkbox\"></use>\r\n        </svg>\r\n      </span>\r\n        <span class=\"text-overflow\">FMP Apply</span>\r\n      </label>\r\n      <p class=\"text-liked bottom\">\r\n        <span *ngIf=\"item?.section === 'applied'; else likedSection\">\r\n          Applied: {{item.applied_date | date: 'MMMM d, y'}}\r\n        </span>\r\n        <ng-template #likedSection>\r\n          <span *ngIf=\"item.added_by !== 'user'\">FMP</span>\r\n          <span *ngIf=\"item.added_by === 'user'\">You</span>\r\n          Added: {{item.date | date: 'MMMM d, y'}}\r\n        </ng-template>\r\n      </p>\r\n    </div>\r\n  </div>\r\n  <span class=\"close\" (click)=\"removeJob(item)\">\r\n    <svg width=\"15\" height=\"15\">\r\n      <use xlink:href=\"" + __webpack_require__(15) + "#close\"></use>\r\n    </svg>\r\n  </span>\r\n</div>";

/***/ }),

/***/ 917:
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<div class=\"job-list-holder\">\r\n\r\n  <div class=\"sort-container\">\r\n    <div class=\"text-holder\">\r\n      <p *ngIf=\"type === 'liked' && jobs?.length\">You have <span>{{jobsCount}} liked jobs</span></p>\r\n      <p *ngIf=\"type === 'applied' && jobs?.length\">You have <span>{{jobsCount}} applied jobs</span></p>\r\n    </div>\r\n\r\n    <fmp-custom-dropdown-component\r\n      *ngIf=\"type === 'liked' || (jobs?.length || filterByOption)\"\r\n      class=\"dropdown\"\r\n      [values]=\"sortList\"\r\n      [isDisabled]=\"!jobs?.length && !filterByOption\"\r\n      [selectedValue]=\"filterByOption\"\r\n      [placeholder]=\"'Sort by'\"\r\n      (valueSelected)=\"filterBy($event)\">\r\n    </fmp-custom-dropdown-component>\r\n\r\n    <div class=\"btn-holder\">\r\n      <button type=\"button\"\r\n              *ngIf=\"type === 'liked'\"\r\n              class=\"btn btn-md btn-primary btn-border-anim\"\r\n              (click)=\"addNewJob()\">\r\n        + Add Job\r\n      </button>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"job-list\">\r\n    <ul class=\"job-list-filled\" *ngIf=\"jobs?.length\">\r\n      <li *ngFor=\"let job of jobs; let i=index\">\r\n        <fmp-job-item-component\r\n          [item]=\"job\"\r\n          [statuses]=\"statuses\"\r\n          (onFileUpload)=\"downloadFile($event)\"\r\n          (onStatusChanged)=\"itemStatusChanged($event, job, i)\"\r\n          (onJobRemove)=\"removeJob($event)\"\r\n          (onApplyStateChanged)=\"applyStateChanged($event)\"\r\n          (onFileSelected)=\"uploadCoverLetter($event, job, i)\"\r\n          (onCoverLetterRemove)=\"removeCoverLetter($event, i)\">\r\n        </fmp-job-item-component>\r\n      </li>\r\n    </ul>\r\n\r\n    <div class=\"job-liked-empty\" *ngIf=\"!jobs?.length && type === 'liked'\">\r\n      <p>First you need to add a job</p>\r\n      <svg width=\"86\" height=\"84\">\r\n        <use xlink:href=\"" + __webpack_require__(15) + "#empty\"></use>\r\n      </svg>\r\n    </div>\r\n\r\n    <div class=\"job-liked-empty\" *ngIf=\"!jobs?.length && type === 'applied' && isCareerFinderBought\">\r\n      <p>First you need to apply a job</p>\r\n      <svg width=\"86\" height=\"84\">\r\n        <use xlink:href=\"" + __webpack_require__(15) + "#empty\"></use>\r\n      </svg>\r\n    </div>\r\n\r\n    <fmp-career-finder-steps-component\r\n      *ngIf=\"type === 'applied' && !jobs?.length && !isCareerFinderBought\"\r\n      (onButtonClicked)=\"selectCareerFinder()\">\r\n    </fmp-career-finder-steps-component>\r\n\r\n  </div>\r\n\r\n  <ngb-pagination\r\n    class=\"pagination-custom\"\r\n    *ngIf=\"jobsCount > defaultLimit\"\r\n    [pageSize]=\"defaultLimit\"\r\n    [page]=\"currentPage\"\r\n    [collectionSize]=\"jobsCount\"\r\n    (pageChange)=\"pageChanged($event)\">\r\n  </ngb-pagination>\r\n\r\n</div>";

/***/ }),

/***/ 918:
/***/ (function(module, exports) {

module.exports = "<div class=\"container box-light-reg\">\r\n  <div class=\"box-light-content\">\r\n\r\n    <div class=\"title-description\">\r\n      <h1 class=\"text-center\">My Jobs</h1>\r\n      <p>Your jobs section allows you to add jobs to your profile from any website.</p>\r\n      <p>Simply check the \"FMP Apply\" box and your account manager will get to work.</p>\r\n    </div>\r\n\r\n    <ngb-tabset #jobsTabSet=\"ngbTabset\" class=\"tabs-holder\" [destroyOnHide]=\"false\" (tabChange)=\"onTabChanged($event)\">\r\n\r\n      <ngb-tab id=\"liked\">\r\n        <ng-template ngbTabTitle>Liked</ng-template>\r\n        <ng-template ngbTabContent>\r\n\r\n          <fmp-jobs-list-component\r\n            [type]=\"'liked'\"\r\n            [statuses]=\"statuses?.liked\"\r\n            [jobs]=\"jobs?.liked\"\r\n            [jobsCount]=\"jobsCount?.liked\"\r\n            [sortList]=\"likedSortList\"\r\n            [currentPage]=\"jobsCurrentPage.liked\"\r\n            [filterByOption]=\"filterOption.liked\"\r\n            (onFilterOptionSelected)=\"onFilterOptionChanged('liked', $event)\"\r\n            (onFileDownload)=\"downloadFile($event)\"\r\n            (onJobChanged)=\"jobStatusChanged($event, 'liked')\"\r\n            (onJobAdd)=\"createNewJob()\"\r\n            (onJobRemove)=\"removeJobEntity($event)\"\r\n            (onPageChange)=\"currentPageChanged($event)\"\r\n            (onApplyStateChanged)=\"applyStatusChanged($event)\"\r\n            (onCoverLetterUpload)=\"uploadCoverLetter($event, 'liked')\"\r\n            (onCoverLetterRemove)=\"removeCoverLetter($event, 'liked')\">\r\n          </fmp-jobs-list-component>\r\n\r\n        </ng-template>\r\n      </ngb-tab>\r\n\r\n      <ngb-tab id=\"applied\">\r\n        <ng-template ngbTabTitle>Applied</ng-template>\r\n        <ng-template ngbTabContent>\r\n\r\n          <fmp-jobs-list-component\r\n            [type]=\"'applied'\"\r\n            [statuses]=\"statuses?.applied\"\r\n            [jobs]=\"jobs?.applied\"\r\n            [jobsCount]=\"jobsCount?.applied\"\r\n            [sortList]=\"appliedSortList\"\r\n            [currentPage]=\"jobsCurrentPage.applied\"\r\n            [filterByOption]=\"filterOption.applied\"\r\n            [isCareerFinderBought]=\"isCareerFinderBought\"\r\n            (onFilterOptionSelected)=\"onFilterOptionChanged('applied', $event)\"\r\n            (onFileDownload)=\"downloadFile($event)\"\r\n            (onJobRemove)=\"removeJobEntity($event)\"\r\n            (onJobChanged)=\"jobStatusChanged($event, 'applied')\"\r\n            (onPageChange)=\"currentPageChanged($event)\"\r\n            (onApplyStateChanged)=\"applyStatusChanged($event)\"\r\n            (onCoverLetterUpload)=\"uploadCoverLetter($event, 'applied')\"\r\n            (onCoverLetterRemove)=\"removeCoverLetter($event, 'applied')\"\r\n            (onCareerFinderClicked)=\"openCareerFinderModal(false)\">\r\n          </fmp-jobs-list-component>\r\n\r\n        </ng-template>\r\n      </ngb-tab>\r\n\r\n    </ngb-tabset>\r\n\r\n  </div>\r\n</div>";

/***/ })

});