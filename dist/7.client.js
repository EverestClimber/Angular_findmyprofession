webpackJsonp([7],{

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_schedule_routing_module__ = __webpack_require__(838);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_schedule_component__ = __webpack_require__(739);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_schedule_resolver__ = __webpack_require__(740);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_schedule_service__ = __webpack_require__(741);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__event_item_event_item_component__ = __webpack_require__(837);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserScheduleModule", function() { return UserScheduleModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var UserScheduleModule = (function () {
    function UserScheduleModule() {
    }
    return UserScheduleModule;
}());
UserScheduleModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__user_schedule_routing_module__["a" /* UserScheduleRoutingModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__user_schedule_resolver__["a" /* UserScheduleResolver */],
            __WEBPACK_IMPORTED_MODULE_5__user_schedule_service__["a" /* UserScheduleService */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__user_schedule_component__["a" /* UserScheduleComponent */],
            __WEBPACK_IMPORTED_MODULE_6__event_item_event_item_component__["a" /* ScheduleEventItemComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__user_schedule_component__["a" /* UserScheduleComponent */]
        ]
    })
], UserScheduleModule);



/***/ }),

/***/ 739:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_schedule_model__ = __webpack_require__(839);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_schedule_service__ = __webpack_require__(741);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_calendly_calendly_component__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_alert_modal_alert_modal_component__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_services_user_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_services_meta_tags_service__ = __webpack_require__(51);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserScheduleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var UserScheduleComponent = (function () {
    function UserScheduleComponent(route, scheduleService, modalService, metaService, userService) {
        this.route = route;
        this.scheduleService = scheduleService;
        this.modalService = modalService;
        this.metaService = metaService;
        this.userService = userService;
        this.linksMap = {
            'resume-makeover': {
                'executive': 'resume-makeover-executive',
                'senior': 'resume-makeover-senior'
            },
            'cover-letter-service': {
                'executive': 'cover-letter-writing-executive',
                'senior': 'cover-letter-writing-senior'
            },
            'linkedin-profile-makeover': {
                'executive': 'linkedin-profile-makeover-executive',
                'senior': 'linkedin-profile-makeover-senior'
            },
            'job-interview-prep': {
                'executive': 'interview-training-executive',
                'senior': 'interview-training-senior'
            },
            'career-finder': {
                'plan': 'career-finder-intro-1'
            }
        };
        this.metaService.setTitle('My Schedule - Find My Profession');
        this.metaService.removeAllMetaTags();
        var calls = route.snapshot.data['content'];
        this.setCalls(calls);
    }
    /**
     * Method to Cancel call
     * @param event
     * @param type
     * @param index
     */
    UserScheduleComponent.prototype.cancelEvent = function (event, type, index) {
        if (event && event.id) {
            this.openModal("Are you sure you want to cancel " + event.link + " event?", this.cancelEventRequest.bind(this, {
                id: event.id,
                index: index,
                type: type
            }));
        }
    };
    /**
     * Method to Complete call
     * @param event
     * @param type
     * @param index
     */
    UserScheduleComponent.prototype.completeEvent = function (event, type, index) {
        if (event && event.id) {
            this.openModal("Are you sure you want to mark " + event.link + " complete?", this.completeEventRequest.bind(this, {
                id: event.id,
                index: index,
                type: type
            }));
        }
    };
    /**
     * Method to open modal with selected service
     * @param event
     */
    UserScheduleComponent.prototype.scheduleEventCall = function (event) {
        var _this = this;
        var modal = this.modalService.open(__WEBPACK_IMPORTED_MODULE_5__modules_calendly_calendly_component__["a" /* CalendlyComponent */]);
        modal.componentInstance.type = event.calendlyLink;
        modal.result.then(function () { return _this.reloadCalls(); }, function () { return _this.reloadCalls(); });
    };
    /**
     * Method to refresh calls
     */
    UserScheduleComponent.prototype.reloadCalls = function () {
        var _this = this;
        this.scheduleService.getCalls()
            .subscribe((function (calls) { return _this.setCalls(calls); }));
    };
    /**
     * Method to send Http request with complete event
     * @param args
     */
    UserScheduleComponent.prototype.completeEventRequest = function (args) {
        var _this = this;
        this.scheduleService.changeEventStatus(args.id, __WEBPACK_IMPORTED_MODULE_2__user_schedule_model__["a" /* COMPLETED_STATUS */])
            .subscribe(function () { return _this.reloadCalls(); }, function (error) { return _this._handleError(error); });
    };
    /**
     * Method to send Http request with cancel event
     * @param args
     */
    UserScheduleComponent.prototype.cancelEventRequest = function (args) {
        var _this = this;
        this.scheduleService.changeEventStatus(args.id, __WEBPACK_IMPORTED_MODULE_2__user_schedule_model__["b" /* CANCEL_STATUS */])
            .subscribe(function () { return _this.reloadCalls(); }, function (error) { return _this._handleError(error); });
    };
    /**
     * Method to open modal and trigger callback
     * @param message
     * @param callback
     */
    UserScheduleComponent.prototype.openModal = function (message, callback) {
        var modal = this.modalService.open(__WEBPACK_IMPORTED_MODULE_6__modules_alert_modal_alert_modal_component__["a" /* AlertModalComponent */], {
            backdrop: false
        });
        modal.result.then(function () {
            callback();
        }, function () {
            /*Canceled*/
        });
        modal.componentInstance.message = message;
    };
    UserScheduleComponent.prototype.setCalls = function (calls) {
        var _this = this;
        if (calls && Array.isArray(calls.available)) {
            var user = this.userService.user$.getValue();
            if (!this.userPackagesMap) {
                this.userPackagesMap = new Map();
                user.packages.forEach(function (element) {
                    _this.userPackagesMap.set(element.service.id, element);
                });
            }
            calls.available.forEach(function (element) {
                var packageItem = _this.userPackagesMap.get(element.id);
                if (_this.linksMap[element.link]) {
                    if (element.link === 'career-finder') {
                        element.calendlyLink = _this.linksMap[element.link].plan;
                    }
                    else {
                        element.calendlyLink = _this.linksMap[element.link][packageItem.plan.toLowerCase()];
                        console.log('link: ', element.calendlyLink);
                    }
                }
            });
        }
        this.calls = calls;
    };
    /**
     * Method to handle http error
     * @param e
     * @private
     */
    UserScheduleComponent.prototype._handleError = function (e) {
        this.errorMessage = e.message;
    };
    return UserScheduleComponent;
}());
UserScheduleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'fmp-my-schedule-component',
        template: __webpack_require__(936),
        styles: [__webpack_require__(879).toString()],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"],
        __WEBPACK_IMPORTED_MODULE_3__user_schedule_service__["a" /* UserScheduleService */],
        __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["f" /* NgbModal */],
        __WEBPACK_IMPORTED_MODULE_8__core_services_meta_tags_service__["a" /* MetaTags */],
        __WEBPACK_IMPORTED_MODULE_7__core_services_user_service__["a" /* UserService */]])
], UserScheduleComponent);



/***/ }),

/***/ 740:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_http_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_models_api_urls_model__ = __webpack_require__(50);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserScheduleResolver; });
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
var UserScheduleResolver = (function () {
    function UserScheduleResolver(httpService) {
        this.httpService = httpService;
    }
    /**
     * Method to fetching data from server
     * @returns {Observable<Array<IScheduleEvent> | IErrorResponse>}
     */
    UserScheduleResolver.prototype.resolve = function () {
        var request = {
            url: __WEBPACK_IMPORTED_MODULE_2__core_models_api_urls_model__["i" /* USER_SCHEDULE */],
            userToken: true
        };
        return this.httpService.sendRequest(request);
    };
    return UserScheduleResolver;
}());
UserScheduleResolver = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_services_http_service__["a" /* HttpService */]])
], UserScheduleResolver);



/***/ }),

/***/ 741:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_http_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_models_api_urls_model__ = __webpack_require__(50);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserScheduleService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserScheduleService = (function () {
    function UserScheduleService(http) {
        this.http = http;
    }
    /**
     * Change Call status
     * @param eventId
     * @param status
     * @returns {Observable<any>}
     */
    UserScheduleService.prototype.changeEventStatus = function (eventId, status) {
        var request = {
            method: 'POST',
            body: {
                id: eventId,
                status: status
            },
            url: __WEBPACK_IMPORTED_MODULE_2__core_models_api_urls_model__["i" /* USER_SCHEDULE */],
            userToken: true
        };
        return this.http.sendRequest(request);
    };
    /**
     * Get list of Calls
     * @returns {Observable<IScheduleCallsResponse>}
     */
    UserScheduleService.prototype.getCalls = function () {
        var request = {
            url: __WEBPACK_IMPORTED_MODULE_2__core_models_api_urls_model__["i" /* USER_SCHEDULE */],
            userToken: true
        };
        return this.http.sendRequest(request);
    };
    return UserScheduleService;
}());
UserScheduleService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_services_http_service__["a" /* HttpService */]])
], UserScheduleService);



/***/ }),

/***/ 837:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleEventItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ScheduleEventItemComponent = ScheduleEventItemComponent_1 = (function () {
    function ScheduleEventItemComponent() {
        this.type = 'pending';
        this.onEventSchedule = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onEventCancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onEventComplete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ScheduleEventItemComponent.prototype.ngOnChanges = function (changes) {
        var event = changes['event'];
        if (event && event.currentValue) {
            this.event.start_time = ScheduleEventItemComponent_1.parseTime(new Date(this.event.start_time));
            this.event.end_time = ScheduleEventItemComponent_1.parseTime(new Date(this.event.end_time));
        }
    };
    ScheduleEventItemComponent.prototype.cancelEvent = function () {
        this.onEventCancel.emit(this.event);
    };
    ScheduleEventItemComponent.prototype.completeEvent = function () {
        this.onEventComplete.emit(this.event);
    };
    ScheduleEventItemComponent.prototype.scheduleCall = function () {
        this.onEventSchedule.emit(this.event);
    };
    ScheduleEventItemComponent.parseTime = function (date) {
        var localDate = new Date(date);
        var endHours = localDate.getUTCHours();
        localDate.setHours(endHours);
        return localDate.toString();
    };
    return ScheduleEventItemComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ScheduleEventItemComponent.prototype, "type", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ScheduleEventItemComponent.prototype, "event", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], ScheduleEventItemComponent.prototype, "onEventSchedule", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], ScheduleEventItemComponent.prototype, "onEventCancel", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], ScheduleEventItemComponent.prototype, "onEventComplete", void 0);
ScheduleEventItemComponent = ScheduleEventItemComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'fmp-schedule-event-item',
        template: __webpack_require__(935)
    }),
    __metadata("design:paramtypes", [])
], ScheduleEventItemComponent);

var ScheduleEventItemComponent_1;


/***/ }),

/***/ 838:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_schedule_resolver__ = __webpack_require__(740);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_schedule_component__ = __webpack_require__(739);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserScheduleRoutingModule; });



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__user_schedule_component__["a" /* UserScheduleComponent */],
        resolve: {
            content: __WEBPACK_IMPORTED_MODULE_1__user_schedule_resolver__["a" /* UserScheduleResolver */]
        }
    }
];
var UserScheduleRoutingModule = __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forChild(routes);


/***/ }),

/***/ 839:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PENDING_STATUS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return COMPLETED_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CANCEL_STATUS; });
var PENDING_STATUS = 'Pending';
var COMPLETED_STATUS = 'Completed';
var CANCEL_STATUS = 'Canceled';


/***/ }),

/***/ 879:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(undefined);
// imports


// module
exports.push([module.i, ".schedule-holder section:not(:last-of-type){margin-bottom:38px}@media (min-width:1025px){.schedule-holder section:not(:last-of-type){margin-bottom:76px}}.schedule-holder section>h2{font-size:1.1rem;font-weight:700;margin-bottom:20px}@media (min-width:1025px){.schedule-holder section>h2{font-size:1.333rem;margin-bottom:40px}}.schedule-holder .calls-list{margin:0 -8px;display:flex;justify-content:center;flex-wrap:wrap}@media (min-width:500px){.schedule-holder .calls-list{justify-content:flex-start}}.schedule-holder .calls-list li{width:100%;padding:0 8px;margin-bottom:15px}@media (min-width:360px){.schedule-holder .calls-list li{width:85%}}@media (min-width:500px){.schedule-holder .calls-list li{width:50%}}@media (min-width:800px){.schedule-holder .calls-list li{width:33.33%}}@media (min-width:1500px){.schedule-holder .calls-list li{width:25%;margin-bottom:31px}}.schedule-holder .calls-list .call-item{display:flex;flex-direction:column;align-items:flex-start;justify-content:space-around;background-color:#edf6f9;border-left:5px solid #08618d;padding:20px 5%;min-height:190px}@media (min-width:500px){.schedule-holder .calls-list .call-item{padding:20px 5%}}@media (min-width:1340px){.schedule-holder .calls-list .call-item{padding:26px 27px 38px}}.schedule-holder .calls-list .call-item .title{font-size:1.1rem;line-height:1.3;font-weight:500}@media (min-width:1025px){.schedule-holder .calls-list .call-item .title{font-size:1.21rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}}@media (max-width:1140px) and (min-width:1025px){.schedule-holder .calls-list .call-item .title{font-size:1.15rem}}.schedule-holder .calls-list .call-item .info{font-size:1.111rem;font-weight:300;margin-bottom:20px}.schedule-holder .calls-list .call-item .calls-time{font-size:1.3rem;font-weight:500;text-transform:uppercase;margin-bottom:8px}@media (min-width:1025px){.schedule-holder .calls-list .call-item .calls-time{font-size:1.55rem}}.schedule-holder .calls-list .call-item .discuss-requirements{line-height:1.3;margin-bottom:20px}@media (min-width:1025px){.schedule-holder .calls-list .call-item .discuss-requirements{margin-bottom:43px;font-size:1.111rem}}.schedule-holder .calls-list .call-item .discuss-requirements span{font-weight:500}.schedule-holder .calls-list .call-item .link{white-space:nowrap;color:#08618d;font:700 1rem/1.5 Helvetica,Arial,sans-serif}.schedule-holder .calls-list .call-item .btn-group{display:flex;justify-content:space-between;align-items:center}@media (min-width:500px){.schedule-holder .calls-list .call-item .btn-group{flex-direction:column;align-items:flex-start}}@media (min-width:1025px){.schedule-holder .calls-list .call-item .btn-group{flex-direction:row;justify-content:space-between;align-items:center}}@media (min-width:500px){.schedule-holder .calls-list .call-item .btn-group .link{margin-bottom:15px}}@media (min-width:1025px){.schedule-holder .calls-list .call-item .btn-group .link{margin-bottom:0}}.schedule-holder .call-item-content{width:100%}", ""]);

// exports


/***/ }),

/***/ 935:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"type !== 'available'; else availableCalls\" class=\"call-item-content\">\r\n  <p class=\"title\">{{event?.start_time | date: 'd MMMM y, EEEE'}}</p>\r\n  <p class=\"calls-time\">{{event?.start_time | date: 'h:mm a'}} - {{event?.end_time | date: 'h:mm a'}}</p>\r\n  <p class=\"discuss-requirements\"><span>FMP</span> {{event?.location}} to discuss {{event?.name}} requirements.</p>\r\n  <p class=\"link\" *ngIf=\"type === 'completed'\">{{event?.status}}</p>\r\n  <div class=\"btn-group\" *ngIf=\"type === 'pending'\">\r\n    <a class=\"link\" (click)=\"cancelEvent()\" (touchstart)=\"cancelEvent()\">Cancel Call</a>\r\n    <button type=\"button\" class=\"btn btn-auto btn-primary\" (click)=\"completeEvent()\">Complete</button>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #availableCalls>\r\n  <p class=\"title\">{{event?.name}}</p>\r\n  <button type=\"button\" class=\"btn btn-auto btn-primary\" (click)=\"scheduleCall()\">Schedule a Call</button>\r\n</ng-template>";

/***/ }),

/***/ 936:
/***/ (function(module, exports) {

module.exports = "<div class=\"schedule-holder box-light-reg\">\r\n  <div class=\"container box-light-content\">\r\n\r\n    <h1>My Schedule</h1>\r\n\r\n    <section>\r\n      <h2 *ngIf=\"calls?.available?.length !== 0\">Available Calls</h2>\r\n\r\n      <ul class=\"calls-list\">\r\n        <li *ngFor=\"let event of calls?.available;trackBy: event?.id;let i = index\">\r\n\r\n          <fmp-schedule-event-item\r\n            class=\"call-item\"\r\n            [type]=\"'available'\"\r\n            [event]=\"event\"\r\n            (onEventSchedule)=\"scheduleEventCall($event, i)\"\r\n            (onEventCancel)=\"cancelEvent(event, 'pending', i)\"\r\n            (onEventComplete)=\"completeEvent($event, 'pending', i)\">\r\n          </fmp-schedule-event-item>\r\n\r\n        </li>\r\n      </ul>\r\n    </section>\r\n\r\n\r\n    <section>\r\n      <h2 *ngIf=\"calls?.pending?.length !== 0\">Scheduled Calls</h2>\r\n\r\n      <ul class=\"calls-list\">\r\n        <li *ngFor=\"let event of calls?.pending;trackBy: event?.id;let i = index\">\r\n\r\n          <fmp-schedule-event-item\r\n            class=\"call-item\"\r\n            [event]=\"event\"\r\n            (onEventCancel)=\"cancelEvent($event, 'pending', i)\"\r\n            (onEventComplete)=\"completeEvent($event, 'pending', i)\">\r\n          </fmp-schedule-event-item>\r\n\r\n        </li>\r\n      </ul>\r\n    </section>\r\n\r\n    <section>\r\n      <h2 *ngIf=\"calls?.completed?.length !== 0\">Completed Calls</h2>\r\n\r\n      <ul class=\"calls-list\">\r\n        <li *ngFor=\"let event of calls?.completed;trackBy: event?.id;let i = index\">\r\n\r\n          <fmp-schedule-event-item\r\n            class=\"call-item\"\r\n            [type]=\"'completed'\"\r\n            [event]=\"event\">\r\n          </fmp-schedule-event-item>\r\n\r\n        </li>\r\n      </ul>\r\n    </section>\r\n\r\n  </div>\r\n</div>";

/***/ })

});