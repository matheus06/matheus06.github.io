(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<app-resume></app-resume>\r\n<app-tech></app-tech>\r\n<app-contact></app-contact>\r\n<app-footer></app-footer>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "./node_modules/ngx-bootstrap/collapse/index.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./resume/resume.component */ "./src/app/resume/resume.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _tech_tech_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tech/tech.component */ "./src/app/tech/tech.component.ts");





//bootstrap

//firebase


//my components





var firebaseConfig = {
    apiKey: "AIzaSyBEvqJcMmISacUt4FSYf5xYLyRY4sd_2Sw",
    authDomain: "portfolioproject-66d22.firebaseapp.com",
    databaseURL: "https://portfolioproject-66d22.firebaseio.com",
    projectId: "portfolioproject-66d22",
    storageBucket: "portfolioproject-66d22.appspot.com",
    messagingSenderId: "511874029345"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                _resume_resume_component__WEBPACK_IMPORTED_MODULE_9__["ResumeComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"],
                _tech_tech_component__WEBPACK_IMPORTED_MODULE_12__["TechComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_5__["CollapseModule"].forRoot(),
                _angular_fire__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"].initializeApp(firebaseConfig),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestoreModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div{\r\n    background-color: #252d54;\r\n    color: #ebc17d;\r\n    font-size: 18.77px;\r\n}\r\n\r\nform\r\n{\r\n    max-width: 500px;\r\n    margin: 0 auto;\r\n}\r\n\r\nh2\r\n{\r\n    color: #ffffff;\r\n    text-align: center;\r\n}\r\n\r\nh3\r\n{\r\n    color: #ebc17d;\r\n    margin: 0 0 25px 0;\r\n}\r\n\r\ninput\r\n{\r\n    font-size: 18.77px;\r\n    display: block;\r\n    font-family: maven Pro;\r\n    margin: 0;\r\n    width: 100%;\r\n}\r\n\r\nlabel\r\n{\r\n    display: block;\r\n    padding: 25px 0 10px 0;\r\n}\r\n\r\nlabel:first-of-type\r\n{\r\n    padding: 0 0 10px 0\r\n}\r\n\r\ntextarea\r\n{\r\n    font-size: 18.77px;\r\n    height: 150px;\r\n    display: block;\r\n    font-family: maven Pro;\r\n    width: 100%;\r\n}\r\n\r\nbutton\r\n{\r\n    background-color: #D6A967;\r\n    border: none;\r\n    color: #ffffff;\r\n    cursor: pointer;\r\n    font-family: maven pro;\r\n    font-size: 18.77px;\r\n    margin: 25px 0 0 0;\r\n    padding: 10px;\r\n    transition: background-color .2s;\r\n    width: 100%;\r\n}\r\n\r\nbutton:hover\r\n{ \r\n     background-color: #ebc17d\r\n }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLG1CQUFtQjtDQUN0Qjs7QUFFRDs7SUFFSSxpQkFBaUI7SUFDakIsZUFBZTtDQUNsQjs7QUFFRDs7SUFFSSxlQUFlO0lBQ2YsbUJBQW1CO0NBQ3RCOztBQUVEOztJQUVJLGVBQWU7SUFDZixtQkFBbUI7Q0FDdEI7O0FBRUQ7O0lBRUksbUJBQW1CO0lBQ25CLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsVUFBVTtJQUNWLFlBQVk7Q0FDZjs7QUFFRDs7SUFFSSxlQUFlO0lBQ2YsdUJBQXVCO0NBQzFCOztBQUVEOztJQUVJLG1CQUFtQjtDQUN0Qjs7QUFDRDs7SUFFSSxtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsWUFBWTtDQUNmOztBQUVEOztJQUVJLDBCQUEwQjtJQUMxQixhQUFhO0lBQ2IsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsaUNBQWlDO0lBQ2pDLFlBQVk7Q0FDZjs7QUFFRDs7S0FFSyx5QkFBeUI7RUFDNUIiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNTJkNTQ7XHJcbiAgICBjb2xvcjogI2ViYzE3ZDtcclxuICAgIGZvbnQtc2l6ZTogMTguNzdweDtcclxufVxyXG5cclxuZm9ybVxyXG57XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbmgyXHJcbntcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5oM1xyXG57XHJcbiAgICBjb2xvcjogI2ViYzE3ZDtcclxuICAgIG1hcmdpbjogMCAwIDI1cHggMDtcclxufVxyXG5cclxuaW5wdXRcclxue1xyXG4gICAgZm9udC1zaXplOiAxOC43N3B4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LWZhbWlseTogbWF2ZW4gUHJvO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmxhYmVsXHJcbntcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogMjVweCAwIDEwcHggMDtcclxufVxyXG5cclxubGFiZWw6Zmlyc3Qtb2YtdHlwZVxyXG57XHJcbiAgICBwYWRkaW5nOiAwIDAgMTBweCAwXHJcbn1cclxudGV4dGFyZWFcclxue1xyXG4gICAgZm9udC1zaXplOiAxOC43N3B4O1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1mYW1pbHk6IG1hdmVuIFBybztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5idXR0b25cclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Q2QTk2NztcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IG1hdmVuIHBybztcclxuICAgIGZvbnQtc2l6ZTogMTguNzdweDtcclxuICAgIG1hcmdpbjogMjVweCAwIDAgMDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4ycztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5idXR0b246aG92ZXJcclxueyBcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJjMTdkXHJcbiB9Il19 */"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"contact\" class=\"contact\" *ngIf=\"!sucess\">\r\n  <section>\r\n    <h2>Message Me</h2>\r\n    <form novalidate (ngSubmit)=\"sendMessage()\">\r\n       <div class=\"form-horizontal\">\r\n          <label htmlFor=\"name\">Name</label>\r\n          <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" placeholder=\"Your Name...\">\r\n          <label htmlFor=\"email\">Email Address</label>\r\n          <input type=\"email\" [(ngModel)]=\"email\" name=\"email\" placeholder=\"Your@email...\">\r\n          <label htmlFor=\"message\">Message</label>\r\n          <textarea [(ngModel)]=\"message\" name=\"message\" placeholder=\"Your Message...\"></textarea>\r\n          <span><button class=\"btn btn-send\" id=\"Send\" type=\"submit\">Send Message</button></span>\r\n        </div>\r\n      </form>\r\n  </section>\r\n</div>\r\n<div *ngIf=\"sucess\">\r\n    <section>\r\n    <h3>Message sent!</h3>\r\n    <p>Thank you! I will be in touch.</p>\r\n  </section>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");



var ContactComponent = /** @class */ (function () {
    function ContactComponent(afs) {
        this.afs = afs;
    }
    ContactComponent.prototype.ngOnInit = function () {
        this.sucess = false;
    };
    ContactComponent.prototype.sendMessage = function () {
        this.afs.collection('message').add({ 'name': this.name, 'email': this.email, 'message': this.message });
        this.sucess = true;
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div\r\n{\r\n    background-color: #212025;\r\n    color: #fefcfd;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n}\r\n\r\nsection\r\n{\r\n    height: 81px;\r\n    line-height: 81px;\r\n    padding: 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLDBCQUEwQjtJQUMxQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLDBCQUEwQjtDQUM3Qjs7QUFFRDs7SUFFSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFdBQVc7Q0FDZCIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdlxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMDI1O1xyXG4gICAgY29sb3I6ICNmZWZjZmQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG5zZWN0aW9uXHJcbntcclxuICAgIGhlaWdodDogODFweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA4MXB4O1xyXG4gICAgcGFkZGluZzogMDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <section>\r\n    &copy; 2019 | Matheus Sexto\r\n  </section>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-nav {\r\n    float:none;\r\n    margin:0 auto;\r\n    display: block;\r\n    text-align: center;\r\n}\r\n\r\n.navbar-nav > li {\r\n    display: inline-block;\r\n    float:none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCxlQUFlO0lBQ2YsbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksc0JBQXNCO0lBQ3RCLFdBQVc7Q0FDZCIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXItbmF2IHtcclxuICAgIGZsb2F0Om5vbmU7XHJcbiAgICBtYXJnaW46MCBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5uYXZiYXItbmF2ID4gbGkge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZmxvYXQ6bm9uZTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-static-top\">\r\n  <div class=\"container\">\r\n    <div class=\"navbar-header\">\r\n        <button type=\"button\" class=\"navbar-toggle collapsed\" (click)=\"isCollapsed = !isCollapsed\" >\r\n            <span class=\"sr-only\">Toggle navigation</span>\r\n            <span class=\"icon-bar\"></span>\r\n            <span class=\"icon-bar\"></span>\r\n            <span class=\"icon-bar\"></span>\r\n        </button>\r\n        <a href=\"#resume\" target=\"_self\" class=\"nav navbar-brand fa fa-code fa-2x\"></a>\r\n    </div>\r\n      <div id=\"navbar\" class=\"navbar-collapse collapse\" [collapse]=\"isCollapsed\">\r\n        <ul class=\"nav navbar-nav navbar-left\">\r\n            <li><a href=\"#contact\" target=\"_self\" >Contact</a></li>\r\n        </ul>\r\n        <ul class=\"nav navbar-nav navbar-right\">\r\n            <li><a class=\"nav-link fa fa-github fa-2x\" href=\"https://github.com/matheus06\"></a></li>\r\n            <li><a class=\"nav-link fa fa-twitter fa-2x\" href=\"https://twitter.com/matheussexto\"></a></li>\r\n            <li><a class=\"nav-link fa fa-linkedin fa-2x\" href=\"https://www.linkedin.com/in/matheus-sexto\"></a></li>\r\n        </ul>\r\n        \r\n      </div>\r\n  </div>  \r\n</nav> "

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.isCollapsed = true;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/resume/resume.component.css":
/*!*********************************************!*\
  !*** ./src/app/resume/resume.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Exo+2:100);\r\n\r\nsection\r\n{\r\n    padding: 150px 20px\r\n}\r\n\r\ndiv\r\n{   \r\n    background-image: url('bg.svg');\r\n    background-attachment: fixed;\r\n    color: #000;\r\n    text-align: center;\r\n}\r\n\r\nh1\r\n{\r\n    font-size: 60px;\r\n    margin: 0 0 30px 0\r\n}\r\n\r\nh2\r\n{\r\n    margin: 0 0 30px 0;\r\n    font-style: italic;\r\n    font-family: 'Exo 2';\r\n    text-transform: uppercase;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdW1lL3Jlc3VtZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtEQUErRDs7QUFFL0Q7O0lBRUksbUJBQW1CO0NBQ3RCOztBQUVEOztJQUVJLGdDQUEyQztJQUMzQyw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLG1CQUFtQjtDQUN0Qjs7QUFFRDs7SUFFSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0NBQ3JCOztBQUVEOztJQUVJLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLDBCQUEwQjtDQUM3QiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VtZS9yZXN1bWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1FeG8rMjoxMDApO1xyXG5cclxuc2VjdGlvblxyXG57XHJcbiAgICBwYWRkaW5nOiAxNTBweCAyMHB4XHJcbn1cclxuXHJcbmRpdlxyXG57ICAgXHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2JnLnN2Zyk7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmgxXHJcbntcclxuICAgIGZvbnQtc2l6ZTogNjBweDtcclxuICAgIG1hcmdpbjogMCAwIDMwcHggMFxyXG59XHJcblxyXG5oMlxyXG57XHJcbiAgICBtYXJnaW46IDAgMCAzMHB4IDA7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBmb250LWZhbWlseTogJ0V4byAyJztcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/resume/resume.component.html":
/*!**********************************************!*\
  !*** ./src/app/resume/resume.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"resume\">\r\n  <section>\r\n    <h1>Matheus Sexto</h1>\r\n    <h2>.NET Full-Stack Developer</h2>\r\n    <h3><a href=\"https://firebasestorage.googleapis.com/v0/b/portfolioproject-66d22.appspot.com/o/Resume%20-%20Matheus%20Sexto.pdf?alt=media&token=536176d7-50b5-4a9d-a97d-c97154171a11\" target=\"_blank\" rel=\"noopener noreferrer\">View My English Resume</a></h3>\r\n  </section>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/resume/resume.component.ts":
/*!********************************************!*\
  !*** ./src/app/resume/resume.component.ts ***!
  \********************************************/
/*! exports provided: ResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeComponent", function() { return ResumeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ResumeComponent = /** @class */ (function () {
    function ResumeComponent() {
    }
    ResumeComponent.prototype.ngOnInit = function () {
    };
    ResumeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-resume',
            template: __webpack_require__(/*! ./resume.component.html */ "./src/app/resume/resume.component.html"),
            styles: [__webpack_require__(/*! ./resume.component.css */ "./src/app/resume/resume.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ResumeComponent);
    return ResumeComponent;
}());



/***/ }),

/***/ "./src/app/tech/tech.component.css":
/*!*****************************************!*\
  !*** ./src/app/tech/tech.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image\r\n{\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    height: 125px;\r\n    margin: 0 auto 25px auto;\r\n    width: 125px;\r\n}\r\n\r\n.angular\r\n{\r\n    background-image: url('angular.png');\r\n    background-size: contain;\r\n}\r\n\r\n.csharp\r\n{\r\n    background-image: url('csharp.png');\r\n    background-size: contain;\r\n}\r\n\r\n.netcore\r\n{\r\n    background-image: url('netcore.svg');\r\n    background-size: contain;\r\n}\r\n\r\n.docker\r\n{\r\n    background-image: url('docker.png');\r\n    background-size: contain;\r\n}\r\n\r\n.mongodb\r\n{\r\n    background-image: url('mongodb.png');\r\n    background-size: contain;\r\n}\r\n\r\n.jenkins\r\n{\r\n    background-image: url('jenkins.png');\r\n    background-size: contain;\r\n}\r\n\r\n.sqlserver\r\n{\r\n    background-image: url('sqlserver.png');\r\n    background-size: contain;\r\n}\r\n\r\n.oracle\r\n{\r\n    background-image: url('oracle.png');\r\n    background-size: contain;\r\n}\r\n\r\n.tech\r\n{\r\n    color: #000;\r\n    text-align: center\r\n}\r\n\r\n.tile\r\n{\r\n    height: 220px;\r\n    padding: 0 0 50px 0;\r\n}\r\n\r\nh3\r\n{\r\n    color: crimson;\r\n    margin: 20px 20px 0 20px\r\n}\r\n\r\n.tiles\r\n{\r\n    list-style: none;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nli\r\n{\r\n    float: left;\r\n    margin: 0;\r\n    padding: 0 10px;\r\n    width: 25%;\r\n    \r\n    \r\n}\r\n\r\n@media screen and (max-width: 800px)\r\n{\r\n    li{\r\n        height: 244px;\r\n        width: 50%;\r\n    }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVjaC90ZWNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUM3QixjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLGFBQWE7Q0FDaEI7O0FBRUQ7O0lBRUkscUNBQWdEO0lBQ2hELHlCQUF5QjtDQUM1Qjs7QUFFRDs7SUFFSSxvQ0FBK0M7SUFDL0MseUJBQXlCO0NBQzVCOztBQUVEOztJQUVJLHFDQUFnRDtJQUNoRCx5QkFBeUI7Q0FDNUI7O0FBRUQ7O0lBRUksb0NBQStDO0lBQy9DLHlCQUF5QjtDQUM1Qjs7QUFFRDs7SUFFSSxxQ0FBZ0Q7SUFDaEQseUJBQXlCO0NBQzVCOztBQUVEOztJQUVJLHFDQUFnRDtJQUNoRCx5QkFBeUI7Q0FDNUI7O0FBRUQ7O0lBRUksdUNBQWtEO0lBQ2xELHlCQUF5QjtDQUM1Qjs7QUFFRDs7SUFFSSxvQ0FBK0M7SUFDL0MseUJBQXlCO0NBQzVCOztBQUVEOztJQUVJLFlBQVk7SUFDWixrQkFBa0I7Q0FDckI7O0FBRUQ7O0lBRUksY0FBYztJQUNkLG9CQUFvQjtDQUN2Qjs7QUFFRDs7SUFFSSxlQUFlO0lBQ2Ysd0JBQXdCO0NBQzNCOztBQUVEOztJQUVJLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsV0FBVztDQUNkOztBQUVEOztJQUVJLFlBQVk7SUFDWixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLFdBQVc7OztDQUdkOztBQUVEOztJQUVJO1FBQ0ksY0FBYztRQUNkLFdBQVc7S0FDZDtDQUNKIiwiZmlsZSI6InNyYy9hcHAvdGVjaC90ZWNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1hZ2Vcclxue1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGhlaWdodDogMTI1cHg7XHJcbiAgICBtYXJnaW46IDAgYXV0byAyNXB4IGF1dG87XHJcbiAgICB3aWR0aDogMTI1cHg7XHJcbn1cclxuXHJcbi5hbmd1bGFyXHJcbntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvYW5ndWxhci5wbmcpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG59XHJcblxyXG4uY3NoYXJwXHJcbntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvY3NoYXJwLnBuZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbn1cclxuXHJcbi5uZXRjb3JlXHJcbntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvbmV0Y29yZS5zdmcpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG59XHJcblxyXG4uZG9ja2VyXHJcbntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvZG9ja2VyLnBuZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbn1cclxuXHJcbi5tb25nb2RiXHJcbntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvbW9uZ29kYi5wbmcpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG59XHJcblxyXG4uamVua2luc1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2plbmtpbnMucG5nKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxufVxyXG5cclxuLnNxbHNlcnZlclxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL3NxbHNlcnZlci5wbmcpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG59XHJcblxyXG4ub3JhY2xlXHJcbntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvb3JhY2xlLnBuZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbn1cclxuXHJcbi50ZWNoXHJcbntcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyXHJcbn1cclxuXHJcbi50aWxlXHJcbntcclxuICAgIGhlaWdodDogMjIwcHg7XHJcbiAgICBwYWRkaW5nOiAwIDAgNTBweCAwO1xyXG59XHJcblxyXG5oM1xyXG57XHJcbiAgICBjb2xvcjogY3JpbXNvbjtcclxuICAgIG1hcmdpbjogMjBweCAyMHB4IDAgMjBweFxyXG59XHJcblxyXG4udGlsZXNcclxue1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbmxpXHJcbntcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIFxyXG4gICAgXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KVxyXG57XHJcbiAgICBsaXtcclxuICAgICAgICBoZWlnaHQ6IDI0NHB4O1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/tech/tech.component.html":
/*!******************************************!*\
  !*** ./src/app/tech/tech.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <section class=\"tech\">\r\n    <h2>Tech</h2>\r\n    <ul class=\"tiles\">\r\n      <li>\r\n        <div class=\"tile\">\r\n          <div class=\"image csharp\"></div>\r\n          <h3>C#</h3>\r\n        </div>\r\n      </li>\r\n      <li>\r\n        <div class=\"tile\">\r\n          <div class=\"image netcore\"></div>\r\n          <h3>.NET Core</h3>\r\n        </div>\r\n      </li>\r\n      <li>\r\n        <div class=\"tile\">\r\n          <div class=\"image docker\"></div>\r\n          <h3>Docker</h3>\r\n        </div>\r\n      </li>\r\n      <li>\r\n        <div class=\"tile\">\r\n          <div class=\"image angular\"></div>\r\n          <h3>Angular</h3>\r\n        </div>\r\n      </li>\r\n      <li>\r\n          <div class=\"tile\">\r\n            <div class=\"image jenkins\"></div>\r\n            <h3>Jenkins</h3>\r\n          </div>\r\n        </li>\r\n      <li>\r\n        <div class=\"tile\">\r\n          <div class=\"image mongodb\"></div>\r\n          <h3>mongoDB</h3>\r\n        </div>\r\n      </li>\r\n      <li>\r\n          <div class=\"tile\">\r\n            <div class=\"image sqlserver\"></div>\r\n            <h3>SQL Server</h3>\r\n          </div>\r\n      </li>\r\n      <li>\r\n          <div class=\"tile\">\r\n            <div class=\"image oracle\"></div>\r\n            <h3>Oracle</h3>\r\n          </div>\r\n      </li>\r\n    </ul>\r\n  </section>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/tech/tech.component.ts":
/*!****************************************!*\
  !*** ./src/app/tech/tech.component.ts ***!
  \****************************************/
/*! exports provided: TechComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechComponent", function() { return TechComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TechComponent = /** @class */ (function () {
    function TechComponent() {
    }
    TechComponent.prototype.ngOnInit = function () {
    };
    TechComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tech',
            template: __webpack_require__(/*! ./tech.component.html */ "./src/app/tech/tech.component.html"),
            styles: [__webpack_require__(/*! ./tech.component.css */ "./src/app/tech/tech.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TechComponent);
    return TechComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\138604\Documents\src\portfolio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map