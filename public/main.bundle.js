webpackJsonp([1,4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__phones_service__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhonesListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PhonesListComponent = (function () {
    function PhonesListComponent(phoneAPI) {
        this.phoneAPI = phoneAPI;
    }
    PhonesListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.phoneAPI.getList()
            .subscribe(function (phones) {
            _this.phones = phones;
        });
    };
    PhonesListComponent.prototype.getPhones = function () {
    };
    return PhonesListComponent;
}());
PhonesListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-phones-list',
        template: __webpack_require__(168),
        styles: [__webpack_require__(161)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__phones_service__["a" /* PhonesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__phones_service__["a" /* PhonesService */]) === "function" && _a || Object])
], PhonesListComponent);

var _a;
//# sourceMappingURL=phones-list.component.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, ".labels{\n\tmargin-bottom: 10px;\n}\n\n.labels > span {\n\tmargin-right: 5px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 162:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\n\t<div class=\"panel panel-default\">\n\t  <div class=\"panel-body\">\n\t    <div class=\"row\">\n\t    \t<div class=\"col-md-3\">\n\t    \t\t<div class=\"thumbnail\">\n\t    \t\t\t<img [src]=\"phone.image\">\n\t    \t\t</div>\n\t    \t</div>\n\t\t\t\t<div class=\"col-md-9\">\n\t\t\t\t\t<form (ngSubmit)=\"submitForm()\" #myForm=\"ngForm\">\n\t\t\t\t\t  <div class=\"form-group\">\n\t\t\t\t\t    <label for=\"name\">Brand</label>\n\t\t\t\t\t    <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Brand\" [(ngModel)]=\"phone.brand\" name=\"phone.brand\">\n\t\t\t\t\t  </div>\n\t\t\t\t\t  <div class=\"form-group\">\n\t\t\t\t\t    <label for=\"model\">Model</label>\n\t\t\t\t\t    <input type=\"text\" class=\"form-control\" id=\"model\" placeholder=\"Model\" [(ngModel)]=\"phone.name\" name=\"phone.name\">\n\t\t\t\t\t  </div>\n\t\t\t\t\t  <div class=\"form-group\">\n\t\t\t\t\t    <label for=\"image\">Image</label>\n\t\t\t\t\t    <input type=\"text\" class=\"form-control\" id=\"image\" placeholder=\"Image URL\" [(ngModel)]=\"phone.image\" name=\"phone.image\">\n\t\t\t\t\t  </div>\n\t\t\t\t\t  <div class=\"form-group\">\n\t\t\t\t\t    <label for=\"image\">Spec</label>\n\t\t\t\t\t    <input type=\"text\" class=\"form-control\" id=\"image\" placeholder=\"Spec\" [(ngModel)]=\"spec\" name=\"spec\">\n\t\t\t\t\t  </div>\n\t\t\t\t\t  <button type=\"submit\" class=\"btn btn-default\">Add</button>\n\t\t\t\t\t</form>\n\t\t\t\t\t<button class=\"btn btn-default\" (click)=\"addSpec()\">Add Spec</button>\n\t\t\t\t\t<span class=\"label label-default\" *ngFor=\"let spec of phone.specs\">{{ spec }}</span>\n\t\t\t\t</div>\n\t    </div>\n\t  </div>\n\t</div>\n</div>"

/***/ }),

/***/ 163:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n\t<div class=\"row\">\n\t\t<router-outlet></router-outlet>\n\t</div>\n</div>\n"

/***/ }),

/***/ 164:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <h1>Hello, phoneApp!</h1>\n  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, non veritatis, provident placeat quia impedit sunt eum ea nobis inventore cumque qui dolorum, ullam saepe nulla natus, modi libero quos.</p>\n  <p class=\"text-center\"><a class=\"btn btn-success btn-sm\" [routerLink]=\"['/phones']\" role=\"button\">List All Phones</a></p>\n  <p class=\"text-center\"><a class=\"btn btn-primary btn-sm\" [routerLink]=\"['/phones/new']\" role=\"button\">Add Phone</a></p>\n</div>"

/***/ }),

/***/ 165:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-3 col-md-offset-4\">\n\t<div class=\"panel panel-default\">\n\t  <div class=\"panel-body\">\n\t    <form (ngSubmit)=\"submitLogin()\" #myForm=\"ngForm\">\n\t      <div class=\"form-group\">\n\t        <label for=\"InputUsername\">username</label>\n\t        <input type=\"email\" class=\"form-control\" id=\"InputUsername\" placeholder=\"username\" [(ngModel)]=\"user.username\" name=\"username\">\n\t      </div>\n\t      <div class=\"form-group\">\n\t        <label for=\"InputPassword\">Password</label>\n\t        <input type=\"password\" class=\"form-control\" id=\"InputPassword\" placeholder=\"Password\" [(ngModel)]=\"user.password\" name=\"password\">\n\t      </div>\n\t      <div *ngIf=\"error\" class=\"alert alert-danger\" role=\"alert\">{{ error.statusText }}</div>\n\t      <button type=\"submit\" class=\"btn btn-default btn-primary\">Login</button>\n\t    </form>\n\t  </div>\n\t</div>\n</div>"

/***/ }),

/***/ 166:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\">Brand</a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav navbar-right\">\n      \t<li *ngIf=\"this.session.isAuth\"><a>signed as: {{ this.session.user.username }}</a></li>\n        <li *ngIf=\"!this.session.isAuth\"><a [routerLink]=\"['/login']\">Login</a></li>\n        <li *ngIf=\"this.session.isAuth\"><a (click)=\"logout()\">Logout</a></li>\n        <li *ngIf=\"!this.session.isAuth\"><a>Signup</a></li>\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </div><!-- /.container -->\n</nav>"

/***/ }),

/***/ 167:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\n\t<div class=\"panel panel-default\">\n\t  <div class=\"panel-body\">\n\t    <div class=\"row\">\n\t    \t<div class=\"col-md-3\">\n\t    \t\t<div class=\"thumbnail\">\n\t    \t\t\t<img [src]=\"phone.image\">\n\t    \t\t</div>\n\t    \t</div>\n\t\t\t\t<div class=\"col-md-9\">\n\t\t\t\t\t<form (ngSubmit)=\"submitForm()\" #myForm=\"ngForm\">\n\t\t\t\t\t  <div class=\"form-group\">\n\t\t\t\t\t    <label for=\"name\">Brand</label>\n\t\t\t\t\t    <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Brand\" [(ngModel)]=\"phone.brand\" name=\"phone.brand\">\n\t\t\t\t\t  </div>\n\t\t\t\t\t  <div class=\"form-group\">\n\t\t\t\t\t    <label for=\"model\">Model</label>\n\t\t\t\t\t    <input type=\"text\" class=\"form-control\" id=\"model\" placeholder=\"Model\" [(ngModel)]=\"phone.name\" name=\"phone.name\">\n\t\t\t\t\t  </div>\n\t\t\t\t\t  <div class=\"form-group\">\n\t\t\t\t\t    <label for=\"image\">Image</label>\n\t\t\t\t\t    <input type=\"text\" class=\"form-control\" id=\"image\" placeholder=\"Image URL\" [(ngModel)]=\"phone.image\" name=\"phone.image\">\n\t\t\t\t\t  </div>\n\t\t\t\t\t  <div class=\"form-group\">\n\t\t\t\t\t    <label for=\"image\">Spec</label>\n\t\t\t\t\t    <input type=\"text\" class=\"form-control\" id=\"image\" placeholder=\"Spec\" [(ngModel)]=\"spec\" name=\"spec\">\n\t\t\t\t\t  </div>\n\t\t\t\t\t  <button type=\"submit\" class=\"btn btn-default\">Edit</button>\n\t\t\t\t\t  <button class=\"btn btn-default\" (click)=\"addSpec()\">Add Spec</button>\n\t\t\t\t\t</form>\n\t\t\t\t\t\n\t\t\t\t\t<button class=\"btn btn-default\" (click)=\"delete()\">Delete</button>\n\t\t\t\t\t<span class=\"label label-default\" *ngFor=\"let spec of phone.specs\">{{ spec }}</span>\n\t\t\t\t</div>\n\t    </div>\n\t  </div>\n\t</div>\n</div>"

/***/ }),

/***/ 168:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-3\" *ngFor=\"let phone of phones\">\n\t\t<div class=\"thumbnail\" >\n\t\t\t<img [src]=\"phone.image\">\t\n      <div class=\"caption\">\n        <h4>{{ phone.name }}</h4>\n        <div class=\"labels\">\n\t\t\t\t\t<span class=\"label label-primary\" *ngFor=\"let spec of phone.specs\">{{ spec }}</span>\n\t\t\t\t</div>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, soluta, eligendi doloribus sunt minus amet sit debitis repellat. Consectetur, culpa itaque odio similique suscipit</p>\n        \n        <a [routerLink]=\"['/phones', phone._id]\" class=\"btn btn-default btn-md btn-block\" role=\"button\"><i class=\"glyphicon glyphicon-zoom-in\"></i> Details</a> \n\t    </div>\n\t  </div>\n</div>"

/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SessionService = (function () {
    function SessionService(http, router) {
        this.http = http;
        this.router = router;
        this.token = '';
        this.isAuth = false;
        this.user = {};
        this.BASE_URL = 'https://phoneapi.herokuapp.com';
    }
    SessionService.prototype.canActivate = function () {
        var _this = this;
        if (localStorage.getItem('token')) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': 'JWT ' + localStorage.getItem('token') });
            var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
            return this.http.get(this.BASE_URL + "/token", options)
                .toPromise()
                .then(function (res) { return res.json(); })
                .then(function (data) {
                _this.isAuth = true;
                _this.user = JSON.parse(localStorage.getItem('user'));
                _this.token = localStorage.getItem('token');
                return true;
            })
                .catch(function (err) {
                _this.logout();
                _this.router.navigate(['/login']);
                return false;
            });
        }
        else {
            this.logout();
            this.router.navigate(['/login']);
            return false;
        }
    };
    SessionService.prototype.login = function (user) {
        var _this = this;
        return this.http.post(this.BASE_URL + "/login", user)
            .map(function (res) { return res.json(); })
            .map(function (res) {
            var token = res.token;
            var user = res.user;
            if (token) {
                // set token property
                _this.token = token;
                _this.user = {
                    _id: user._id,
                    username: user.username
                };
                _this.isAuth = true;
                // store username and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('token', token);
                localStorage.setItem('user', JSON.stringify(_this.user));
                // return true to indicate successful login
                return true;
            }
            else {
                // return false to indicate failed login
                return false;
            }
        });
    };
    SessionService.prototype.isTokenValid = function (token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': 'JWT ' + token });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.BASE_URL + "/token", options)
            .map(function (res) { return res.json(); });
    };
    SessionService.prototype.logout = function () {
        this.token = null;
        this.user = null;
        this.isAuth = false;
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        this.router.navigate(['/login']);
    };
    return SessionService;
}());
SessionService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], SessionService);

var _a, _b;
//# sourceMappingURL=session.service.js.map

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(87);


/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__session_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhonesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PhonesService = (function () {
    function PhonesService(http, session) {
        this.http = http;
        this.session = session;
    }
    PhonesService.prototype.getList = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': 'JWT ' + this.session.token });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.get('https://phoneapi.herokuapp.com/api/phones', options)
            .map(function (res) { return res.json(); });
    };
    PhonesService.prototype.get = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': 'JWT ' + this.session.token });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.get("https://phoneapi.herokuapp.com/api/phones/" + id, options)
            .map(function (res) { return res.json(); });
    };
    PhonesService.prototype.add = function (phone) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': 'JWT ' + this.session.token });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post('https://phoneapi.herokuapp.com/api/phones', phone, options)
            .map(function (res) { return res.json(); });
    };
    PhonesService.prototype.edit = function (phone) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': 'JWT ' + this.session.token });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.put("https://phoneapi.herokuapp.com/api/phones/" + phone._id, phone, options)
            .map(function (res) { return res.json(); });
    };
    PhonesService.prototype.remove = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': 'JWT ' + this.session.token });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.delete("https://phoneapi.herokuapp.com/api/phones/" + id, options)
            .map(function (res) { return res.json(); });
    };
    return PhonesService;
}());
PhonesService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__session_service__["a" /* SessionService */]) === "function" && _b || Object])
], PhonesService);

var _a, _b;
//# sourceMappingURL=phones.service.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CounterService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CounterService = (function () {
    function CounterService() {
        this.count = 0;
    }
    CounterService.prototype.increment = function () {
        this.count++;
        console.log("Count is now " + this.count);
    };
    return CounterService;
}());
CounterService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], CounterService);

//# sourceMappingURL=counter.service.js.map

/***/ }),

/***/ 86:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 86;


/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(101);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__phones_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPhoneComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddPhoneComponent = (function () {
    function AddPhoneComponent(phoneAPI, router) {
        this.phoneAPI = phoneAPI;
        this.router = router;
        this.phone = {
            brand: '',
            image: 'http://placehold.it/350x150',
            name: '',
            specs: []
        };
        this.spec = '';
    }
    AddPhoneComponent.prototype.ngOnInit = function () {
    };
    AddPhoneComponent.prototype.submitForm = function () {
        var _this = this;
        this.phoneAPI.add(this.phone)
            .subscribe(function (res) {
            console.log(res);
            _this.router.navigate(['/phones']);
        });
        console.log(this.phone);
    };
    AddPhoneComponent.prototype.addSpec = function () {
        this.phone.specs.push(this.spec);
        this.spec = '';
    };
    return AddPhoneComponent;
}());
AddPhoneComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-add-phone',
        template: __webpack_require__(162),
        styles: [__webpack_require__(155)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__phones_service__["a" /* PhonesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__phones_service__["a" /* PhonesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AddPhoneComponent);

var _a, _b;
//# sourceMappingURL=add-phone.component.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__session_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(session, router) {
        this.session = session;
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(163),
        styles: [__webpack_require__(156)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__session_service__["a" /* SessionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__navbar_navbar_component__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__phones_list_phones_list_component__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__phones_details_phones_details_component__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home_component__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__add_phone_add_phone_component__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__login_login_component__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__counter_service__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__phones_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__session_service__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_9__home_home_component__["a" /* HomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_11__login_login_component__["a" /* LoginComponent */] },
    { path: 'phones', component: __WEBPACK_IMPORTED_MODULE_7__phones_list_phones_list_component__["a" /* PhonesListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_14__session_service__["a" /* SessionService */]] },
    { path: 'phones/new', component: __WEBPACK_IMPORTED_MODULE_10__add_phone_add_phone_component__["a" /* AddPhoneComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_14__session_service__["a" /* SessionService */]] },
    { path: 'phones/:id', component: __WEBPACK_IMPORTED_MODULE_8__phones_details_phones_details_component__["a" /* PhonesDetailsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_14__session_service__["a" /* SessionService */]] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_7__phones_list_phones_list_component__["a" /* PhonesListComponent */],
            __WEBPACK_IMPORTED_MODULE_8__phones_details_phones_details_component__["a" /* PhonesDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_9__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_10__add_phone_add_phone_component__["a" /* AddPhoneComponent */],
            __WEBPACK_IMPORTED_MODULE_11__login_login_component__["a" /* LoginComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(routes)
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_12__counter_service__["a" /* CounterService */], __WEBPACK_IMPORTED_MODULE_13__phones_service__["a" /* PhonesService */], __WEBPACK_IMPORTED_MODULE_14__session_service__["a" /* SessionService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__counter_service__ = __webpack_require__(62);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(counter) {
        this.counter = counter;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.incrementCounter = function () {
        this.counter.increment();
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__(164),
        styles: [__webpack_require__(157)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__counter_service__["a" /* CounterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__counter_service__["a" /* CounterService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__session_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(session, router) {
        this.session = session;
        this.router = router;
        this.user = {
            username: '',
            password: '',
        };
        this.error = null;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.submitLogin = function () {
        var _this = this;
        this.session.login(this.user)
            .subscribe(function (data) {
            _this.router.navigate(['/phones']);
        }, function (err) {
            _this.error = err;
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__(165),
        styles: [__webpack_require__(158)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__session_service__["a" /* SessionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__session_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = (function () {
    function NavbarComponent(session, router) {
        this.session = session;
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.logout = function () {
        this.session.logout();
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__(166),
        styles: [__webpack_require__(159)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__session_service__["a" /* SessionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], NavbarComponent);

var _a, _b;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__phones_service__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhonesDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PhonesDetailsComponent = (function () {
    function PhonesDetailsComponent(router, route, phoneAPI) {
        this.router = router;
        this.route = route;
        this.phoneAPI = phoneAPI;
        this.phone = {
            _id: '',
            specs: [],
            image: ''
        };
        this.spec = '';
    }
    PhonesDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.getPhoneDetails(params.id);
        });
    };
    PhonesDetailsComponent.prototype.getPhoneDetails = function (id) {
        var _this = this;
        this.phoneAPI.get(id)
            .subscribe(function (phone) {
            _this.phone = phone;
        });
    };
    PhonesDetailsComponent.prototype.addSpec = function () {
        this.phone.specs.push(this.spec);
    };
    PhonesDetailsComponent.prototype.delete = function () {
        var _this = this;
        this.phoneAPI.remove(this.phone._id)
            .subscribe(function () {
            _this.router.navigate(['/phones']);
        });
    };
    PhonesDetailsComponent.prototype.submitForm = function () {
        this.phoneAPI.edit(this.phone)
            .subscribe(function () {
            console.log('update');
        });
    };
    return PhonesDetailsComponent;
}());
PhonesDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-phones-details',
        template: __webpack_require__(167),
        styles: [__webpack_require__(160)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__phones_service__["a" /* PhonesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__phones_service__["a" /* PhonesService */]) === "function" && _c || Object])
], PhonesDetailsComponent);

var _a, _b, _c;
//# sourceMappingURL=phones-details.component.js.map

/***/ })

},[202]);
//# sourceMappingURL=main.bundle.js.map