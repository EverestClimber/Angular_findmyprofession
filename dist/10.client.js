webpackJsonp([10],{

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__signin_routing_module__ = __webpack_require__(859);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signin_component__ = __webpack_require__(767);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__signin_model__ = __webpack_require__(768);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__signin_service__ = __webpack_require__(769);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_error_error_module__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modules_custom_link_custom_link_module__ = __webpack_require__(52);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInModule", function() { return SignInModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var SignInModule = (function () {
    function SignInModule() {
    }
    return SignInModule;
}());
SignInModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__signin_routing_module__["a" /* SignInRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_7__modules_error_error_module__["a" /* ErrorModule */],
            __WEBPACK_IMPORTED_MODULE_8__modules_custom_link_custom_link_module__["a" /* CustomLinkModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__signin_model__["a" /* SignInErrors */],
            __WEBPACK_IMPORTED_MODULE_6__signin_service__["a" /* SignInService */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__signin_component__["a" /* SignInComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_4__signin_component__["a" /* SignInComponent */]
        ]
    })
], SignInModule);



/***/ }),

/***/ 702:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/assets/images/sprite-anim.svg";

/***/ }),

/***/ 767:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_validators_validation_patterns_model__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_validators_show_validation_errors_model__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__signin_model__ = __webpack_require__(768);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__signin_service__ = __webpack_require__(769);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_services_user_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_services_meta_tags_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__core_services_core_utilities_service__ = __webpack_require__(68);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInComponent; });
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











var SignInComponent = (function (_super) {
    __extends(SignInComponent, _super);
    function SignInComponent(fb, errorFormModel, signInService, userService, router, metaService) {
        var _this = _super.call(this) || this;
        _this.fb = fb;
        _this.errorFormModel = errorFormModel;
        _this.signInService = signInService;
        _this.userService = userService;
        _this.router = router;
        _this.metaService = metaService;
        /**
         * State of current request
         * @type {boolean}
         */
        _this.isRequestSending = false;
        _this.isComponentInited = false;
        _this.setMetaTags();
        _this.buildModelForm();
        return _this;
    }
    SignInComponent.prototype.ngOnDestroy = function () {
        this.resetComponent();
    };
    SignInComponent.prototype.ngOnInit = function () {
        this.isComponentInited = true;
    };
    /**
     * Method to send form
     */
    SignInComponent.prototype.sendForm = function () {
        var _this = this;
        this.errorMessage = '';
        /*Setting global form validation*/
        this.setGlobal();
        _super.prototype.onValueChanged.call(this);
        if (this.modelForm.invalid) {
            return;
        }
        this.isRequestSending = true;
        this.signInService.signInUser(this.getSignInData(this.modelForm.value))
            .finally(function () { return _this.isRequestSending = false; })
            .subscribe(function (response) { return _this.signInHandler(response); }, function (errorObject) { return _this.errorMessage = errorObject.message; });
    };
    /**
     * Method to close error
     * @param field
     */
    SignInComponent.prototype.closeError = function (field) {
        this.fm[field] ? this.fm[field] = '' : this.errorMessage = '';
    };
    /**
     * Method to handle sign in method
     * @param response
     */
    SignInComponent.prototype.signInHandler = function (response) {
        var _this = this;
        this.userService.signIn(response, this.modelForm.value.rememberUser);
        __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].fromPromise(this.router.navigate(['/home']))
            .filter(function (state) { return state; })
            .subscribe(function () { return _this.resetComponent(); });
    };
    /**
     * Method to build model form
     */
    SignInComponent.prototype.buildModelForm = function () {
        var _this = this;
        this.fm = this.errorFormModel.formErrors;
        this.modelForm = this.fb.group({
            email: [null, [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern(__WEBPACK_IMPORTED_MODULE_4__core_validators_validation_patterns_model__["c" /* REGEX_EMAIL_PATTERN */])
                ]],
            password: [null, [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required
                ]],
            rememberUser: [false],
            isGlobalValidate: [false]
        });
        _super.prototype.setData.call(this, this.modelForm, this.errorFormModel);
        __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].merge(this.modelForm.get('email').valueChanges, this.modelForm.get('password').valueChanges).subscribe(function () {
            _this.setGlobal();
            _super.prototype.clearErrors.call(_this);
        });
    };
    /**
     * Create object with data to send on server
     * @param modelForm
     * @returns {{email, password}}
     */
    SignInComponent.prototype.getSignInData = function (modelForm) {
        return {
            email: modelForm.email,
            password: modelForm.password,
            timezone: __WEBPACK_IMPORTED_MODULE_10__core_services_core_utilities_service__["a" /* CoreUtilitiesService */].getTimeZone()
        };
    };
    SignInComponent.prototype.resetComponent = function () {
        this.modelForm.reset();
        this.errorMessage = '';
        _super.prototype.clearErrors.call(this);
    };
    SignInComponent.prototype.setGlobal = function (value) {
        if (value === void 0) { value = true; }
        this.modelForm.get('isGlobalValidate').setValue(value);
    };
    SignInComponent.prototype.setMetaTags = function () {
        var title = 'Login - Find My Profession';
        this.metaService.setTitle(title);
        this.metaService.setTitles(title);
        this.metaService.setDescription('Please log in to Find My Profession. Take the next step in your career with our career finder service and get hired with the minimal amount of effort.');
        this.metaService.removeImageTags();
    };
    return SignInComponent;
}(__WEBPACK_IMPORTED_MODULE_5__core_validators_show_validation_errors_model__["a" /* ShowValidationErrors */]));
SignInComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'fmp-signin-component',
        template: __webpack_require__(953),
        styles: [__webpack_require__(891).toString()],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"],
        __WEBPACK_IMPORTED_MODULE_6__signin_model__["a" /* SignInErrors */],
        __WEBPACK_IMPORTED_MODULE_7__signin_service__["a" /* SignInService */],
        __WEBPACK_IMPORTED_MODULE_8__core_services_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"],
        __WEBPACK_IMPORTED_MODULE_9__core_services_meta_tags_service__["a" /* MetaTags */]])
], SignInComponent);



/***/ }),

/***/ 768:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_validators_validators_model__ = __webpack_require__(242);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInErrors; });

var SignInErrors = (function () {
    function SignInErrors() {
        this.formErrors = {
            email: '',
            password: '',
            rememberUser: ''
        };
        this.validationMessages = {
            email: {
                required: __WEBPACK_IMPORTED_MODULE_0__core_validators_validators_model__["a" /* ValidationErrors */].email.required,
                pattern: __WEBPACK_IMPORTED_MODULE_0__core_validators_validators_model__["a" /* ValidationErrors */].email.pattern
            },
            password: {
                required: __WEBPACK_IMPORTED_MODULE_0__core_validators_validators_model__["a" /* ValidationErrors */].password.required
            },
            rememberUser: {}
        };
    }
    return SignInErrors;
}());



/***/ }),

/***/ 769:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_models_api_urls_model__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_services_http_service__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignInService = (function () {
    function SignInService(httpService) {
        this.httpService = httpService;
    }
    /**
     * Method to Sign In existing User
     * @param body
     * @returns {Observable<IUser | IErrorResponse>}
     */
    SignInService.prototype.signInUser = function (body) {
        return this.httpService.sendRequest({
            method: 'POST',
            url: __WEBPACK_IMPORTED_MODULE_1__core_models_api_urls_model__["s" /* SIGN_IN */],
            body: body
        });
    };
    return SignInService;
}());
SignInService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__core_services_http_service__["a" /* HttpService */]])
], SignInService);



/***/ }),

/***/ 859:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__signin_component__ = __webpack_require__(767);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInRoutingModule; });


var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__signin_component__["a" /* SignInComponent */]
    }
];
var SignInRoutingModule = __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forChild(routes);


/***/ }),

/***/ 891:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(undefined);
// imports


// module
exports.push([module.i, ".login-page{padding:50px 10px;text-align:center}@media (min-width:450px){.login-page{padding:50px 0}}@media (min-width:1025px){.login-page{padding:120px 0 100px}}.login-page .form-group-choice{display:inline-block;margin-top:14px;margin-bottom:33px;transform:translateX(-10px);width:100%}.login-page .form-group-choice .custom-choice{white-space:nowrap}.login-page h1{margin-bottom:73px}.login-page form{margin-bottom:30px}", ""]);

// exports


/***/ }),

/***/ 953:
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<div class=\"login-page\">\r\n  <div class=\"head-error-center\" [ngClass]=\"{'error-show': errorMessage}\">\r\n    <h1 class=\"head-main head-bold\">Sign in</h1>\r\n\r\n    <fmp-error\r\n      *ngIf=\"errorMessage\"\r\n      class=\"error-center\"\r\n      [text]=\"errorMessage\"\r\n      (onErrorClick)=\"closeError('main')\">\r\n    </fmp-error>\r\n\r\n  </div>\r\n  <form *ngIf=\"isComponentInited\" class=\"form-xs\" [formGroup]=\"modelForm\" (submit)=\"sendForm()\">\r\n    <p [ngClass]=\"{ 'error-show' : fm.email}\">\r\n\r\n      <fmp-error *ngIf=\"fm.email\" class=\"error-field\" [text]=\"fm.email\" (onErrorClick)=\"closeError('email')\"></fmp-error>\r\n\r\n      <input type=\"text\"\r\n             class=\"form-control-border-blue\"\r\n             formControlName=\"email\"\r\n             [title]=\"'Enter your account email.'\"\r\n             placeholder=\"Email\">\r\n\r\n    </p>\r\n    <p [ngClass]=\"{ 'error-show' : fm.password}\">\r\n\r\n      <fmp-error *ngIf=\"fm.password\" class=\"error-field\" [text]=\"fm.password\" (onErrorClick)=\"closeError('password')\"></fmp-error>\r\n\r\n      <input type=\"password\"\r\n             class=\"form-control-border-blue\"\r\n             formControlName=\"password\"\r\n             [title]=\"'Enter your password.'\"\r\n             placeholder=\"Password\">\r\n    </p>\r\n    <p class=\"form-group-choice\">\r\n      <label class=\"custom-choice custom-choice-light choice-serif\">\r\n        <input type=\"checkbox\" formControlName=\"rememberUser\">\r\n        <span class=\"indicator\">\r\n          <svg>\r\n            <use xlink:href=\"" + __webpack_require__(702) + "#checkbox\"></use>\r\n          </svg>\r\n        </span>\r\n        Keep me signed in\r\n      </label>\r\n    </p>\r\n    <button type=\"submit\"\r\n            class=\"btn btn-md btn-primary btn-border-anim\"\r\n            [disabled]=\"isRequestSending\">\r\n      <span>Login</span>\r\n    </button>\r\n  </form>\r\n\r\n  <fmp-custom-link\r\n    [title]=\"'Forgot Your Password?'\"\r\n    [linkArray]=\"['/password-reset']\"\r\n    [linkClass]=\"['link', 'link-light']\">\r\n  </fmp-custom-link>\r\n\r\n</div>";

/***/ })

});