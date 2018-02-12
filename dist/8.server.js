exports.ids = [8];
exports.modules = {

/***/ 1121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_us_service__ = __webpack_require__(1124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_validators_validation_patterns_model__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_validators_show_validation_errors_model__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__contact_us_model__ = __webpack_require__(1122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_services_meta_tags_service__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_models_app_config__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_services_platform_check_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ng_bootstrap_ng_bootstrap__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__modules_success_modal_success_modal_component__ = __webpack_require__(203);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactUsComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












__webpack_require__(1261);
var ContactUsComponent = ContactUsComponent_1 = (function (_super) {
    __extends(ContactUsComponent, _super);
    function ContactUsComponent(route, fb, contactUsService, errorFormModel, metaService, domRenderer, platformService, modalService) {
        var _this = _super.call(this) || this;
        _this.route = route;
        _this.fb = fb;
        _this.contactUsService = contactUsService;
        _this.errorFormModel = errorFormModel;
        _this.metaService = metaService;
        _this.domRenderer = domRenderer;
        _this.platformService = platformService;
        _this.modalService = modalService;
        _this.lang = 'en';
        _this.isRequestSending = false;
        _this.facebook = __WEBPACK_IMPORTED_MODULE_8__core_models_app_config__["a" /* APP_CONFIG */].facebookLink;
        _this.likedIn = __WEBPACK_IMPORTED_MODULE_8__core_models_app_config__["a" /* APP_CONFIG */].linkedInkLink;
        _this.twitter = __WEBPACK_IMPORTED_MODULE_8__core_models_app_config__["a" /* APP_CONFIG */].twitterLink;
        _this.key = __WEBPACK_IMPORTED_MODULE_8__core_models_app_config__["a" /* APP_CONFIG */].recaptcha_key;
        var pageData = route.snapshot.data['pageData'];
        if (pageData) {
            _this.metaService.setMetaTags(pageData);
            _this.content = pageData;
        }
        _this.modelForm = _this.fb.group({
            name: ['', [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(3)
                ]],
            email: ['', [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern(__WEBPACK_IMPORTED_MODULE_4__core_validators_validation_patterns_model__["c" /* REGEX_EMAIL_PATTERN */])
                ]],
            message: ['', [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required
                ]],
            captcha: [false, [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].requiredTrue
                ]],
            isGlobalValidate: [false]
        });
        _super.prototype.setData.call(_this, _this.modelForm, _this.errorFormModel);
        _this.modelForm.valueChanges
            .subscribe(function () { return _super.prototype.onValueChanged.call(_this); });
        _this.fm = _this.errorFormModel.formErrors;
        return _this;
    }
    ContactUsComponent.prototype.ngAfterViewInit = function () {
        if (this.platformService.isBrowser) {
            this.registerReCaptchaCallback();
            this.addScript();
        }
    };
    ContactUsComponent.prototype.ngOnDestroy = function () {
        _super.prototype.clearErrors.call(this);
    };
    ContactUsComponent.prototype.closeError = function (field) {
        this.fm[field] = '';
    };
    ContactUsComponent.prototype.handleCorrectCaptcha = function () {
        this.modelForm.controls['captcha'].setValue(true);
    };
    /**
     * Send form to backend
     */
    ContactUsComponent.prototype.sendForm = function () {
        var _this = this;
        if (!this.modelForm) {
            return;
        }
        this.errorMessage = '';
        this.modelForm.controls['isGlobalValidate'].setValue(true);
        _super.prototype.onValueChanged.call(this);
        if (this.modelForm.invalid) {
            this.errorMessage = 'Form not valid.';
            return;
        }
        this.isRequestSending = true;
        this.contactUsService.sendForm(ContactUsComponent_1.parseObject(this.modelForm.value))
            .finally(function () { return _this.isRequestSending = false; })
            .subscribe(function () {
            _this.modelForm.reset();
            _this.refreshReCaptch();
            _this.openModal();
        }, function (error) { return _this.errorMessage = error.message; });
    };
    ContactUsComponent.prototype.openModal = function () {
        var modal = this.modalService.open(__WEBPACK_IMPORTED_MODULE_11__modules_success_modal_success_modal_component__["a" /* SuccessModalComponent */]);
        modal.componentInstance.message = 'Your message was successfully sent.';
        modal.componentInstance.icon = 'subscribe';
    };
    /**
     * Parse model to request
     * @param model
     * @returns {{name, email, message}}
     */
    ContactUsComponent.parseObject = function (model) {
        return {
            name: model.name,
            email: model.email,
            message: model.message
        };
    };
    ContactUsComponent.prototype.registerReCaptchaCallback = function () {
        var _this = this;
        window['reCaptchaLoad'] = function () {
            var config = {
                'sitekey': _this.key,
                'callback': _this.handleCorrectCaptcha.bind(_this),
                'expired-callback': _this.onExpired.bind(_this)
            };
            _this.widgetId = _this.render(_this.recaptcha.nativeElement, config);
        };
    };
    ContactUsComponent.prototype.onExpired = function () {
        this.errorFormModel.formErrors.captcha = 'Captcha expired.';
    };
    ContactUsComponent.prototype.render = function (element, config) {
        return window['grecaptcha'].render(element, config);
    };
    ContactUsComponent.prototype.addScript = function () {
        var script = this.domRenderer.createElement('script');
        var lang = this.lang ? '&hl=' + this.lang : '';
        script.src = __WEBPACK_IMPORTED_MODULE_8__core_models_app_config__["a" /* APP_CONFIG */].recaptcha_link + "?onload=reCaptchaLoad&render=explicit" + lang;
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
    };
    ContactUsComponent.prototype.refreshReCaptch = function () {
        window['grecaptcha'].reset(this.widgetId);
    };
    return ContactUsComponent;
}(__WEBPACK_IMPORTED_MODULE_5__core_validators_show_validation_errors_model__["a" /* ShowValidationErrors */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('recaptcha'),
    __metadata("design:type", Object)
], ContactUsComponent.prototype, "recaptcha", void 0);
ContactUsComponent = ContactUsComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'contact-us-component',
        template: __webpack_require__(1314),
        styles: [__webpack_require__(1253).toString()],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
        __WEBPACK_IMPORTED_MODULE_3__contact_us_service__["a" /* ContactUsService */],
        __WEBPACK_IMPORTED_MODULE_6__contact_us_model__["a" /* ContactUsErrors */],
        __WEBPACK_IMPORTED_MODULE_7__core_services_meta_tags_service__["a" /* MetaTags */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"],
        __WEBPACK_IMPORTED_MODULE_9__core_services_platform_check_service__["a" /* PlatformCheckService */],
        __WEBPACK_IMPORTED_MODULE_10__ng_bootstrap_ng_bootstrap__["f" /* NgbModal */]])
], ContactUsComponent);

var ContactUsComponent_1;


/***/ }),

/***/ 1122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_validators_validators_model__ = __webpack_require__(413);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactUsErrors; });

var ContactUsErrors = (function () {
    function ContactUsErrors() {
        this.formErrors = {
            email: '',
            name: '',
            message: '',
            captcha: ''
        };
        this.validationMessages = {
            email: {
                required: __WEBPACK_IMPORTED_MODULE_0__core_validators_validators_model__["a" /* ValidationErrors */].email.required,
                pattern: __WEBPACK_IMPORTED_MODULE_0__core_validators_validators_model__["a" /* ValidationErrors */].email.pattern
            },
            name: {
                required: 'This field is required.',
                minlength: 'Min length is 3'
            },
            message: {
                required: 'This field is required.'
            },
            captcha: {
                required: 'You must confirm that you are not a robot.'
            }
        };
    }
    return ContactUsErrors;
}());



/***/ }),

/***/ 1123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_transfer_http_transfer_http__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_models_api_urls_model__ = __webpack_require__(91);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactUsPageDataResolver; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactUsPageDataResolver = (function () {
    function ContactUsPageDataResolver(http) {
        this.http = http;
    }
    /**
     * Method to get page data
     * @returns {Observable<any>}
     */
    ContactUsPageDataResolver.prototype.resolve = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__modules_transfer_http_transfer_http__["a" /* TransferHttp */].getUrl(__WEBPACK_IMPORTED_MODULE_2__core_models_api_urls_model__["u" /* CONTACT_US_PAGE */], true));
    };
    return ContactUsPageDataResolver;
}());
ContactUsPageDataResolver = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__modules_transfer_http_transfer_http__["a" /* TransferHttp */]])
], ContactUsPageDataResolver);



/***/ }),

/***/ 1124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_http_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_models_api_urls_model__ = __webpack_require__(91);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactUsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactUsService = (function () {
    function ContactUsService(httpService) {
        this.httpService = httpService;
    }
    ContactUsService.prototype.sendForm = function (data) {
        var request = {
            method: 'Post',
            url: __WEBPACK_IMPORTED_MODULE_2__core_models_api_urls_model__["t" /* CONTACT_US */],
            body: data
        };
        return this.httpService.sendRequest(request);
    };
    return ContactUsService;
}());
ContactUsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_services_http_service__["a" /* HttpService */]])
], ContactUsService);



/***/ }),

/***/ 1220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contact_us_component__ = __webpack_require__(1121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_us_resolver__ = __webpack_require__(1123);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactUsRoutingModule; });



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__contact_us_component__["a" /* ContactUsComponent */],
        resolve: {
            pageData: __WEBPACK_IMPORTED_MODULE_2__contact_us_resolver__["a" /* ContactUsPageDataResolver */]
        }
    }
];
var ContactUsRoutingModule = __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forChild(routes);


/***/ }),

/***/ 1253:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(undefined);
// imports


// module
exports.push([module.i, ".contact-title h2{color:#fff}.contact-social-links{display:inline-block;justify-content:center;margin-top:22px}.contact-social-links li{margin:0 4px}.contact-social-links a{display:flex;align-items:center;justify-content:center;width:100px;height:100px;background:#fff;border-radius:50%;color:#00334c;transition:.3s;margin-bottom:25px}.contact-social-links a:active,.contact-social-links a:hover{background:#00334c;color:#fff}@media (min-width:600px){.contact-social-links{justify-content:flex-start}.contact-social-links li{margin:0 7px 0 0}.contact-social-links a{display:flex;align-items:center;justify-content:center;width:100px;height:100px;background:#fff;border-radius:50%;color:#00334c;transition:.3s;margin-bottom:25px}.contact-social-links a:active,.contact-social-links a:hover{background:#00334c;color:#fff}}.close-modal{top:12px!important;right:12px!important}.contact-content .title-description{margin-bottom:45px}@media (min-width:1025px){.contact-content .title-description{margin-bottom:39px}}.contact-content .title-description h2{text-transform:capitalize}.contact-content .title-description .text-content{margin-bottom:0}.contact-content .title-description .text-content p{font-size:.889rem}@media (min-width:1025px){.contact-content .title-description .text-content p{font-size:1rem;line-height:1.7}}.contact-content.box-light-holder{padding:0}@media (min-width:1025px){.contact-content.box-light-holder{display:flex}}.contact-content .block{padding:50px 10px}@media (min-width:1025px){.contact-content .block{padding:50px 4%}}@media (min-width:1340px){.contact-content .block{padding:50px 6% 72px}}@media (min-width:1640px){.contact-content .block{padding:50px 9% 72px}}.contact-content .block-left{padding-top:42px}@media (min-width:1025px){.contact-content .block-left{flex:1}}@media (min-width:1640px){.contact-content .block-left{padding-top:70px}}.contact-content .block-right{font-family:Helvetica,Arial,sans-serif;text-align:center;background:#1dbff0}@media (min-width:1025px){.contact-content .block-right{padding-left:10px;padding-right:10px;min-width:36%}}.contact-content form{width:100%;margin:0 auto;text-align:center}@media (min-width:500px){.contact-content form{max-width:80%}}@media (min-width:1025px){.contact-content form{max-width:100%}}.contact-content form .input-group>p,.contact-content form>p{margin-bottom:20px;position:relative}.contact-content form .captcha{margin-bottom:15px;position:relative;display:inline-block}.contact-content .circle-icon{margin:0 auto 21px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#fff;width:100px;height:100px}@media (min-width:1025px){.contact-content .circle-icon{width:140px;height:140px}}.contact-content .circle-icon svg{width:60px;height:60px}@media (min-width:1025px){.contact-content .circle-icon svg{width:80px;height:80px}}@media (min-width:1025px){.contact-content .circle-icon{margin-bottom:47px}}.contact-content .text-dark{font-size:1.556rem;font-weight:400;color:#05415e}@media (min-width:1025px){.contact-content .text-dark{font-size:2rem;margin-bottom:9px}}.contact-content .link-tel{color:#fff;font-size:2.333rem;margin-bottom:25px;display:block;text-decoration:none}@media (min-width:1025px){.contact-content .link-tel{font-size:2.556rem;font-weight:400;margin-bottom:35px}}.contact-content .box-dark-round{background:#05415e;border-radius:20px;padding:0 20px;color:#fff;font-weight:700;height:45px;line-height:45px;display:inline-block;margin-bottom:8px}@media (min-width:1025px){.contact-content .box-dark-round{margin-bottom:67px}}.contact-content .social-links{justify-content:center}", ""]);

// exports


/***/ }),

/***/ 1261:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/assets/images/blue-bg/contact-us.jpg";

/***/ }),

/***/ 1314:
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<div class=\"container bg-box-holder\">\r\n  <div class=\"bg-box\" [ngStyle]=\"{'background-image': 'url(src/assets/images/blue-bg/contact-us.jpg)'}\"></div>\r\n  <article class=\"box-light-holder contact-content\">\r\n    <div class=\"block block-left\">\r\n      <div class=\"title-description\">\r\n        <h2 *ngIf=\"content?.form_title\" [innerHTML]=\"content?.form_title\"></h2>\r\n        <div class=\"text-content\" *ngIf=\"content?.form_content\" [innerHTML]=\"content?.form_content\"></div>\r\n      </div>\r\n      <form [formGroup]=\"modelForm\" (submit)=\"sendForm()\">\r\n        <div class=\"input-group\">\r\n          <p [ngClass]=\"{'error-show': fm.name}\">\r\n\r\n            <fmp-error *ngIf=\"fm.name\" class=\"error-field\" [text]=\"fm.name\" (onErrorClick)=\"closeError('name')\"></fmp-error>\r\n\r\n            <input type=\"text\"\r\n                   class=\"form-control-border-light\"\r\n                   formControlName=\"name\"\r\n                   placeholder=\"Name\">\r\n          </p>\r\n          <p [ngClass]=\"{'error-show': fm.email}\">\r\n\r\n            <fmp-error *ngIf=\"fm.email\" class=\"error-field\" [text]=\"fm.email\" (onErrorClick)=\"closeError('email')\"></fmp-error>\r\n\r\n            <input type=\"text\"\r\n                   class=\"form-control-border-light\"\r\n                   formControlName=\"email\"\r\n                   placeholder=\"Email\">\r\n          </p>\r\n        </div>\r\n        <p [ngClass]=\"{'error-show': fm.message}\">\r\n\r\n          <fmp-error *ngIf=\"fm.message\" class=\"error-field\" [text]=\"fm.message\" (onErrorClick)=\"closeError('message')\"></fmp-error>\r\n\r\n          <textarea rows=\"4\"\r\n                    formControlName=\"message\"\r\n                    class=\"form-control-border-light\"\r\n                    placeholder=\"Message\">\r\n          </textarea>\r\n        </p>\r\n\r\n        <p class=\"captcha\" [ngClass]=\"{'error-show': fm.captcha}\" (onErrorClick)=\"closeError('captcha')\">\r\n\r\n          <fmp-error *ngIf=\"fm.captcha\" class=\"error-field\" [text]=\"fm.captcha\"></fmp-error>\r\n\r\n          <span #recaptcha></span>\r\n\r\n        </p>\r\n\r\n        <button type=\"submit\"\r\n                class=\"btn btn-full btn-primary btn-border-anim\"\r\n                [disabled]=\"isRequestSending\">\r\n          <span *ngIf=\"!isRequestSending\">Submit</span>\r\n          <span *ngIf=\"isRequestSending\">Sending</span>\r\n        </button>\r\n      </form>\r\n    </div>\r\n    <div class=\"block block-right\">\r\n      <div class=\"contact-title\">\r\n        <h2>LET’S GET SOCIAL</h2>\r\n      </div>\r\n    \r\n      <ul class=\"contact-social-links\">\r\n        <li>\r\n          <a [href]=\"facebook\" target=\"_blank\">\r\n            <svg width=\"30\" height=\"40\">\r\n              <use xlink:href=\"" + __webpack_require__(26) + "#facebook\"></use>\r\n            </svg>\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a [href]=\"twitter\" target=\"_blank\">\r\n            <svg width=\"30\" height=\"30\">\r\n              <use xlink:href=\"" + __webpack_require__(26) + "#twitter\"></use>\r\n            </svg>\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a [href]=\"likedIn\" target=\"_blank\">\r\n            <svg width=\"30\" height=\"30\">\r\n              <use xlink:href=\"" + __webpack_require__(26) + "#linkedin\"></use>\r\n            </svg>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n\r\n  </article>\r\n</div>";

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contact_us_routing_module__ = __webpack_require__(1220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_us_component__ = __webpack_require__(1121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_us_resolver__ = __webpack_require__(1123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_social_links_social_links_module__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__contact_us_service__ = __webpack_require__(1124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__contact_us_model__ = __webpack_require__(1122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__modules_error_error_module__ = __webpack_require__(193);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsModule", function() { return ContactUsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var ContactUsModule = (function () {
    function ContactUsModule() {
    }
    return ContactUsModule;
}());
ContactUsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__contact_us_routing_module__["a" /* ContactUsRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_6__modules_social_links_social_links_module__["a" /* SocialLinksModule */],
            __WEBPACK_IMPORTED_MODULE_9__modules_error_error_module__["a" /* ErrorModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__contact_us_resolver__["a" /* ContactUsPageDataResolver */],
            __WEBPACK_IMPORTED_MODULE_7__contact_us_service__["a" /* ContactUsService */],
            __WEBPACK_IMPORTED_MODULE_8__contact_us_model__["a" /* ContactUsErrors */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__contact_us_component__["a" /* ContactUsComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__contact_us_component__["a" /* ContactUsComponent */]
        ]
    })
], ContactUsModule);



/***/ })

};;