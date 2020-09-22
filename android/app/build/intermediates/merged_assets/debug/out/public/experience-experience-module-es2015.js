(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["experience-experience-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/experience/experience.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/experience/experience.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Experience</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"works.length > 0\">\n  <ion-card *ngFor=\"let work of works\">\n    <ion-card-header>\n      <ion-card-subtitle>{{work.companyTitle}}, {{work.to | date: 'LLL:yyyy' }} to \n        {{work.isCurrentlyWorking ? 'Currently working': work.from | date: 'LLL:yyyy' }}\n      </ion-card-subtitle>\n      <ion-card-title>{{work.title}}</ion-card-title>\n    </ion-card-header>\n  \n    <ion-card-content>\n      {{work.description}}\n      \n    </ion-card-content>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/experience/experience-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/experience/experience-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ExperiencePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperiencePageRoutingModule", function() { return ExperiencePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _experience_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./experience.page */ "./src/app/experience/experience.page.ts");




const routes = [
    {
        path: '',
        component: _experience_page__WEBPACK_IMPORTED_MODULE_3__["ExperiencePage"]
    }
];
let ExperiencePageRoutingModule = class ExperiencePageRoutingModule {
};
ExperiencePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ExperiencePageRoutingModule);



/***/ }),

/***/ "./src/app/experience/experience.module.ts":
/*!*************************************************!*\
  !*** ./src/app/experience/experience.module.ts ***!
  \*************************************************/
/*! exports provided: ExperiencePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperiencePageModule", function() { return ExperiencePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _experience_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./experience-routing.module */ "./src/app/experience/experience-routing.module.ts");
/* harmony import */ var _experience_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./experience.page */ "./src/app/experience/experience.page.ts");







let ExperiencePageModule = class ExperiencePageModule {
};
ExperiencePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _experience_routing_module__WEBPACK_IMPORTED_MODULE_5__["ExperiencePageRoutingModule"]
        ],
        declarations: [_experience_page__WEBPACK_IMPORTED_MODULE_6__["ExperiencePage"]]
    })
], ExperiencePageModule);



/***/ }),

/***/ "./src/app/experience/experience.page.scss":
/*!*************************************************!*\
  !*** ./src/app/experience/experience.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4cGVyaWVuY2UvZXhwZXJpZW5jZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/experience/experience.page.ts":
/*!***********************************************!*\
  !*** ./src/app/experience/experience.page.ts ***!
  \***********************************************/
/*! exports provided: ExperiencePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperiencePage", function() { return ExperiencePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/common.service */ "./src/app/_services/common.service.ts");



let ExperiencePage = class ExperiencePage {
    constructor(commonService) {
        this.commonService = commonService;
        this.works = [];
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.commonService.getExperience().subscribe((data) => {
            this.works = data;
        }, error => {
            debugger;
        });
    }
};
ExperiencePage.ctorParameters = () => [
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] }
];
ExperiencePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-experience',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./experience.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/experience/experience.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./experience.page.scss */ "./src/app/experience/experience.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]])
], ExperiencePage);



/***/ })

}]);
//# sourceMappingURL=experience-experience-module-es2015.js.map