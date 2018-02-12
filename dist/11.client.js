webpackJsonp([11],{

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__password_reset_routing_module__ = __webpack_require__(857);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__password_reset_component__ = __webpack_require__(762);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__password_reset_model__ = __webpack_require__(763);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__password_reset_service__ = __webpack_require__(764);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modules_error_error_module__ = __webpack_require__(109);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordResetModule", function() { return PasswordResetModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var PasswordResetModule = (function () {
    function PasswordResetModule() {
    }
    return PasswordResetModule;
}());
PasswordResetModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__password_reset_routing_module__["a" /* PasswordResetRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_7__angular_router__["RouterModule"],
            __WEBPACK_IMPORTED_MODULE_8__modules_error_error_module__["a" /* ErrorModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__password_reset_model__["a" /* ResetPasswordErrors */],
            __WEBPACK_IMPORTED_MODULE_6__password_reset_service__["a" /* PasswordResetService */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__password_reset_component__["a" /* PasswordResetComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_4__password_reset_component__["a" /* PasswordResetComponent */]
        ]
    })
], PasswordResetModule);



/***/ }),

/***/ 714:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomValidators; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CustomValidators = CustomValidators_1 = (function () {
    function CustomValidators() {
    }
    CustomValidators.passwordValidator = function (control) {
        if (control.value) {
            if (!CustomValidators_1.regex.test(control.value.toString())) {
                return {
                    passwordShouldContainSymbol: true
                };
            }
        }
        return null;
    };
    CustomValidators.confirmationPasswordValidator = function (controlA, controlB) {
        if (controlA.value && controlB.value) {
            if (controlA.value.toString() !== controlB.value.toString()) {
                return {
                    passwordsNotMatch: true
                };
            }
        }
        return null;
    };
    return CustomValidators;
}());
// private static regex: RegExp = /^(?=.*[0-9])(?=.*[!@#$%^&*,.])[a-zA-Z0-9!@#$%^&*,.]/;
CustomValidators.regex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
CustomValidators = CustomValidators_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], CustomValidators);

var CustomValidators_1;


/***/ }),

/***/ 762:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_validators_show_validation_errors_model__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__password_reset_model__ = __webpack_require__(763);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_validators_validation_patterns_model__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__password_reset_service__ = __webpack_require__(764);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_validators_validators_service__ = __webpack_require__(714);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_services_meta_tags_service__ = __webpack_require__(51);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordResetComponent; });
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










var PasswordResetComponent = (function (_super) {
    __extends(PasswordResetComponent, _super);
    function PasswordResetComponent(fb, errorFormModel, route, passwordResetService, router, titleService, metaTags) {
        var _this = _super.call(this) || this;
        _this.fb = fb;
        _this.errorFormModel = errorFormModel;
        _this.route = route;
        _this.passwordResetService = passwordResetService;
        _this.router = router;
        _this.titleService = titleService;
        _this.metaTags = metaTags;
        /**
         * Detect if current mode is RESET
         * @type {boolean}
         */
        _this.isResetMode = false;
        _this.isSent = false;
        /**
         * Default server error message
         * @type {string}
         */
        _this.defaultError = 'Server error.';
        _this.titleService.setTitle('Password Reset - Find My Profession');
        _this.metaTags.removeAllMetaTags();
        _this.fm = _this.errorFormModel.formErrors;
        /**
         * Detect if there is any token
         */
        _this.route.queryParams
            .subscribe(function (params) {
            _this.isResetMode = !!(params && params.t);
            if (_this.isResetMode) {
                _this.resetToken = params.t;
                _this.resetModelForm = _this.fb.group({
                    'password': [null, [
                            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,
                            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(8),
                            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(128),
                            __WEBPACK_IMPORTED_MODULE_7__core_validators_validators_service__["a" /* CustomValidators */].passwordValidator
                        ]],
                    'confirm_password': [null, [
                            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required
                        ]],
                    'isGlobalValidate': [false]
                });
                _super.prototype.setData.call(_this, _this.resetModelForm, _this.errorFormModel);
                _this.resetModelForm.valueChanges
                    .subscribe(function () { return _super.prototype.onValueChanged.call(_this); });
            }
            else {
                _this.modelForm = _this.fb.group({
                    'email': [null, [
                            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,
                            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern(__WEBPACK_IMPORTED_MODULE_5__core_validators_validation_patterns_model__["c" /* REGEX_EMAIL_PATTERN */])
                        ]],
                    'isGlobalValidate': [false]
                });
                _super.prototype.setData.call(_this, _this.modelForm, _this.errorFormModel);
                _this.modelForm.valueChanges
                    .subscribe(function () { return _super.prototype.onValueChanged.call(_this); });
            }
        });
        return _this;
    }
    PasswordResetComponent.prototype.sendEmail = function () {
        var _this = this;
        if (!this.modelForm) {
            return;
        }
        this.modelForm.controls['isGlobalValidate'].setValue(true);
        this.errorMessage = '';
        if (this.modelForm.invalid) {
            return;
        }
        this.isRequestSending = true;
        this.passwordResetService.sendEmail(this.modelForm.value.email)
            .finally(function () { return _this.isRequestSending = false; })
            .subscribe(function () {
            _this.sentEmail = _this.modelForm.value.email;
            _this.modelForm.reset();
            _this.isSent = true;
        }, this.handleError.bind(this));
    };
    /**
     * Method to reset password
     */
    PasswordResetComponent.prototype.resetPassword = function () {
        var _this = this;
        if (!this.resetModelForm) {
            return;
        }
        this.resetModelForm.controls['isGlobalValidate'].setValue(true);
        this.errorMessage = '';
        var errors = __WEBPACK_IMPORTED_MODULE_7__core_validators_validators_service__["a" /* CustomValidators */].confirmationPasswordValidator(this.resetModelForm.controls['password'], this.resetModelForm.controls['confirm_password']);
        if (errors) {
            this.resetModelForm.controls['confirm_password'].setErrors(errors);
        }
        _super.prototype.onValueChanged.call(this);
        if (this.resetModelForm.invalid) {
            return;
        }
        var value = this.resetModelForm.value;
        var request = {
            password: value.password,
            confirm_password: value.confirm_password,
            token: this.resetToken
        };
        this.isRequestSending = true;
        this.passwordResetService.resetPassword(request)
            .finally(function () { return _this.isRequestSending = false; })
            .subscribe(function () {
            _this.resetModelForm.reset();
            _this.router.navigate(['/login']);
        }, this.handleError.bind(this));
    };
    PasswordResetComponent.prototype.closeError = function (field) {
        if (field === 'main') {
            this.errorMessage = '';
        }
        else {
            this.fm[field] = '';
        }
    };
    PasswordResetComponent.prototype.handleError = function (error) {
        this.errorMessage = error.message || this.defaultError;
    };
    return PasswordResetComponent;
}(__WEBPACK_IMPORTED_MODULE_2__core_validators_show_validation_errors_model__["a" /* ShowValidationErrors */]));
PasswordResetComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'fmp-password-reset-component',
        template: __webpack_require__(951),
        styles: [__webpack_require__(889).toString()],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"],
        __WEBPACK_IMPORTED_MODULE_3__password_reset_model__["a" /* ResetPasswordErrors */],
        __WEBPACK_IMPORTED_MODULE_4__angular_router__["ActivatedRoute"],
        __WEBPACK_IMPORTED_MODULE_6__password_reset_service__["a" /* PasswordResetService */],
        __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"],
        __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__["Title"],
        __WEBPACK_IMPORTED_MODULE_9__core_services_meta_tags_service__["a" /* MetaTags */]])
], PasswordResetComponent);



/***/ }),

/***/ 763:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_validators_validators_model__ = __webpack_require__(242);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordErrors; });

var ResetPasswordErrors = (function () {
    function ResetPasswordErrors() {
        this.formErrors = {
            email: '',
            password: '',
            confirm_password: ''
        };
        this.validationMessages = {
            email: {
                required: __WEBPACK_IMPORTED_MODULE_0__core_validators_validators_model__["a" /* ValidationErrors */].email.required,
                pattern: __WEBPACK_IMPORTED_MODULE_0__core_validators_validators_model__["a" /* ValidationErrors */].email.pattern
            },
            password: {
                required: __WEBPACK_IMPORTED_MODULE_0__core_validators_validators_model__["a" /* ValidationErrors */].password.required,
                minLength: __WEBPACK_IMPORTED_MODULE_0__core_validators_validators_model__["a" /* ValidationErrors */].password.minLength,
                passwordShouldContainSymbol: __WEBPACK_IMPORTED_MODULE_0__core_validators_validators_model__["a" /* ValidationErrors */].password.format
            },
            confirm_password: {
                required: __WEBPACK_IMPORTED_MODULE_0__core_validators_validators_model__["a" /* ValidationErrors */].confPassword.required,
                passwordsNotMatch: __WEBPACK_IMPORTED_MODULE_0__core_validators_validators_model__["a" /* ValidationErrors */].confPassword.passwordsNotMatch
            }
        };
    }
    return ResetPasswordErrors;
}());



/***/ }),

/***/ 764:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_http_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_models_api_urls_model__ = __webpack_require__(50);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordResetService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PasswordResetService = (function () {
    function PasswordResetService(httpService) {
        this.httpService = httpService;
    }
    /**
     * Method to send email to reset password
     * @param email
     * @returns {Observable<any>|null}
     */
    PasswordResetService.prototype.sendEmail = function (email) {
        var request = {
            method: 'Post',
            url: __WEBPACK_IMPORTED_MODULE_2__core_models_api_urls_model__["q" /* RESET_PASS_EMAIL */],
            body: { email: email }
        };
        return this.httpService.sendRequest(request);
    };
    /**
     * Method to set new password
     * @param body
     * @returns {Observable<any>|null}
     */
    PasswordResetService.prototype.resetPassword = function (body) {
        var request = {
            method: 'Post',
            url: __WEBPACK_IMPORTED_MODULE_2__core_models_api_urls_model__["r" /* RESET_PASS */],
            body: body
        };
        return this.httpService.sendRequest(request);
    };
    return PasswordResetService;
}());
PasswordResetService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_services_http_service__["a" /* HttpService */]])
], PasswordResetService);



/***/ }),

/***/ 857:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__password_reset_component__ = __webpack_require__(762);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordResetRoutingModule; });


var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__password_reset_component__["a" /* PasswordResetComponent */]
    }
];
var PasswordResetRoutingModule = __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forChild(routes);


/***/ }),

/***/ 889:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(undefined);
// imports


// module
exports.push([module.i, ".password-page{padding:50px 10px;text-align:center}@media (min-width:450px){.password-page{padding:50px 0}}@media (min-width:1025px){.password-page{padding:242px 0 100px}}.password-page h1{margin-bottom:73px}.password-page .text-content{margin-bottom:35px;padding:0 10px}@media (min-width:730px){.password-page .text-content{margin-bottom:56px;font-size:1.111rem}}.password-page .text-content p{margin-bottom:10px}@media (min-width:1025px){.password-page .text-content p{margin-bottom:0}}.password-page form button[type=submit]{margin-top:40px}@media (min-width:1025px){.password-page form button[type=submit]{margin-top:63px}}.password-page form.form-reset button[type=submit]{margin-top:27px;padding:0 15px;font-size:1.222rem;height:55px;width:auto;border-radius:26px}@media (min-width:440px){.password-page form.form-reset button[type=submit]{font-size:1.667rem;padding:0 35px;height:67px;border-radius:31px}}.password-page .btn-md{width:auto;min-width:265px}@media (max-width:400px){.password-page .btn-md{font-size:22px}}", ""]);

// exports


/***/ }),

/***/ 951:
/***/ (function(module, exports) {

module.exports = "<div class=\"password-page\">\r\n  <div *ngIf=\"!isResetMode;else resetPassMode\">\r\n    <div class=\"head-error-center\" [ngClass]=\"{'error-show': errorMessage}\">\r\n      <h1 class=\"head-main head-bold\">\r\n        <span *ngIf=\"!isSent\">Forgot Password?</span>\r\n        <span *ngIf=\"isSent\">Email sent!</span>\r\n      </h1>\r\n\r\n      <fmp-error\r\n        *ngIf=\"errorMessage\"\r\n        class=\"error-center\"\r\n        [text]=\"errorMessage\">\r\n      </fmp-error>\r\n\r\n    </div>\r\n    <div *ngIf=\"!isSent\" class=\"text-content\">\r\n      <p>Enter your email address and we will send you instructions to reset your password.</p>\r\n    </div>\r\n    <div *ngIf=\"isSent\" class=\"text-content\">\r\n      <p>Check your {{sentEmail}} inbox for instructions from us on how to reset your password.</p>\r\n    </div>\r\n    <form class=\"form-xs\" *ngIf=\"modelForm && !isSent\" [formGroup]=\"modelForm\" (submit)=\"sendEmail()\">\r\n      <p [ngClass]=\"{'error-show': fm.email}\">\r\n\r\n        <fmp-error\r\n          *ngIf=\"fm?.email\"\r\n          class=\"error-field\"\r\n          [text]=\"fm.email\"\r\n          (onErrorClick)=\"closeError('email')\">\r\n        </fmp-error>\r\n\r\n        <input type=\"text\"\r\n               class=\"form-control-border-blue\"\r\n               formControlName=\"email\"\r\n               placeholder=\"Email\">\r\n      </p>\r\n      <button type=\"submit\"\r\n              [disabled]=\"isRequestSending\"\r\n              class=\"btn btn-md btn-primary btn-border-anim\">\r\n        <span>Send</span>\r\n      </button>\r\n    </form>\r\n  </div>\r\n  <ng-template #resetPassMode>\r\n    <div class=\"head-error-center\" [ngClass]=\"{'error-show': errorMessage}\">\r\n      <h1 class=\"head-main head-bold\">Reset Password</h1>\r\n\r\n      <fmp-error\r\n        *ngIf=\"errorMessage\"\r\n        class=\"error-center\"\r\n        [text]=\"errorMessage\"\r\n        (onErrorClick)=\"closeError('main')\">\r\n      </fmp-error>\r\n\r\n    </div>\r\n    <form class=\"form-xs form-reset\" *ngIf=\"resetModelForm\" [formGroup]=\"resetModelForm\" (submit)=\"resetPassword()\">\r\n      <p [ngClass]=\"{'error-show': fm.password}\">\r\n\r\n        <fmp-error\r\n          *ngIf=\"fm?.password\"\r\n          class=\"error-field\"\r\n          [text]=\"fm.password\"\r\n          (onErrorClick)=\"closeError('password')\">\r\n        </fmp-error>\r\n\r\n        <input type=\"password\"\r\n               class=\"form-control-border-blue\"\r\n               formControlName=\"password\"\r\n               placeholder=\"New Password\">\r\n      </p>\r\n      <p [ngClass]=\"{'error-show': fm.confirm_password}\">\r\n\r\n        <fmp-error\r\n          *ngIf=\"fm?.confirm_password\"\r\n          class=\"error-field\"\r\n          [text]=\"fm.confirm_password\"\r\n          (onErrorClick)=\"closeError('confirm_password')\">\r\n        </fmp-error>\r\n\r\n        <input type=\"password\"\r\n               class=\"form-control-border-blue\"\r\n               formControlName=\"confirm_password\"\r\n               placeholder=\"Confirm Password\">\r\n      </p>\r\n      <button type=\"submit\" [disabled]=\"isRequestSending\"\r\n              class=\"btn btn-primary btn-border-anim\">\r\n        <span>Change My Password</span>\r\n      </button>\r\n    </form>\r\n  </ng-template>\r\n</div>";

/***/ })

});