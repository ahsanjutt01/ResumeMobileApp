(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["education-education-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/education/education.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/education/education.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Education</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <span *ngIf=\"education.length > 0\">\n    <ion-card *ngFor=\"let edu of education\">\n      <ion-card-header>\n        <!-- <img src=\"https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2017/03/difference-between-html-and-html5-768x478.png\" /> -->\n        <ion-card-subtitle>{{edu.degreeType}}</ion-card-subtitle>\n        <ion-card-title>{{edu.degreeTitle}}</ion-card-title>\n      </ion-card-header>\n    \n      <ion-card-content>\n        {{edu.uniName}} {{edu.to | date: 'yyyy' }}-{{edu.from | date: 'yyyy'}}\n        \n      </ion-card-content>\n    </ion-card>\n  </span>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/education/education-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/education/education-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: EducationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationPageRoutingModule", function() { return EducationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _education_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./education.page */ "./src/app/education/education.page.ts");




const routes = [
    {
        path: '',
        component: _education_page__WEBPACK_IMPORTED_MODULE_3__["EducationPage"]
    }
];
let EducationPageRoutingModule = class EducationPageRoutingModule {
};
EducationPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EducationPageRoutingModule);



/***/ }),

/***/ "./src/app/education/education.module.ts":
/*!***********************************************!*\
  !*** ./src/app/education/education.module.ts ***!
  \***********************************************/
/*! exports provided: EducationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationPageModule", function() { return EducationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _education_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./education-routing.module */ "./src/app/education/education-routing.module.ts");
/* harmony import */ var _education_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./education.page */ "./src/app/education/education.page.ts");







let EducationPageModule = class EducationPageModule {
};
EducationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _education_routing_module__WEBPACK_IMPORTED_MODULE_5__["EducationPageRoutingModule"]
        ],
        declarations: [_education_page__WEBPACK_IMPORTED_MODULE_6__["EducationPage"]]
    })
], EducationPageModule);



/***/ }),

/***/ "./src/app/education/education.page.scss":
/*!***********************************************!*\
  !*** ./src/app/education/education.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkdWNhdGlvbi9lZHVjYXRpb24ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/education/education.page.ts":
/*!*********************************************!*\
  !*** ./src/app/education/education.page.ts ***!
  \*********************************************/
/*! exports provided: EducationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationPage", function() { return EducationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/common.service */ "./src/app/_services/common.service.ts");



let EducationPage = class EducationPage {
    constructor(commonService) {
        this.commonService = commonService;
        this.education = [];
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.commonService.getEducation().subscribe((data) => {
            this.education = data;
        }, error => {
            debugger;
        });
    }
};
EducationPage.ctorParameters = () => [
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] }
];
EducationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-education',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./education.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/education/education.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./education.page.scss */ "./src/app/education/education.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]])
], EducationPage);



/***/ })

}]);
//# sourceMappingURL=education-education-module-es2015.js.map