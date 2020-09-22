function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["projects-projects-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProjectsProjectsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Projects</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"projects.length > 0\">\n  <ion-card *ngFor='let project of projects'>\n    <ion-card-header>\n      <img src=\"{{project.imageUrl}}\" style=\"height:150px\" />\n      <!-- <ion-card-subtitle></ion-card-subtitle> -->\n      <ion-card-title>{{project.title}}</ion-card-title>\n    </ion-card-header>\n  \n    <!-- <ion-card-content>\n      Keep close to Nature's heart... and break clear away, once in awhile,\n      and climb a mountain or spend a week in the woods. Wash your spirit clean.\n    </ion-card-content> -->\n  </ion-card>\n  \n  \n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/projects/projects-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/projects/projects-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: ProjectsPageRoutingModule */

  /***/
  function srcAppProjectsProjectsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectsPageRoutingModule", function () {
      return ProjectsPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _projects_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./projects.page */
    "./src/app/projects/projects.page.ts");

    var routes = [{
      path: '',
      component: _projects_page__WEBPACK_IMPORTED_MODULE_3__["ProjectsPage"]
    }];

    var ProjectsPageRoutingModule = function ProjectsPageRoutingModule() {
      _classCallCheck(this, ProjectsPageRoutingModule);
    };

    ProjectsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProjectsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/projects/projects.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/projects/projects.module.ts ***!
    \*********************************************/

  /*! exports provided: ProjectsPageModule */

  /***/
  function srcAppProjectsProjectsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectsPageModule", function () {
      return ProjectsPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _projects_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./projects-routing.module */
    "./src/app/projects/projects-routing.module.ts");
    /* harmony import */


    var _projects_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./projects.page */
    "./src/app/projects/projects.page.ts");

    var ProjectsPageModule = function ProjectsPageModule() {
      _classCallCheck(this, ProjectsPageModule);
    };

    ProjectsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _projects_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProjectsPageRoutingModule"]],
      declarations: [_projects_page__WEBPACK_IMPORTED_MODULE_6__["ProjectsPage"]]
    })], ProjectsPageModule);
    /***/
  },

  /***/
  "./src/app/projects/projects.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/projects/projects.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppProjectsProjectsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL3Byb2plY3RzLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/projects/projects.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/projects/projects.page.ts ***!
    \*******************************************/

  /*! exports provided: ProjectsPage */

  /***/
  function srcAppProjectsProjectsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectsPage", function () {
      return ProjectsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../_services/common.service */
    "./src/app/_services/common.service.ts");

    var ProjectsPage = /*#__PURE__*/function () {
      function ProjectsPage(commonService) {
        _classCallCheck(this, ProjectsPage);

        this.commonService = commonService;
        this.projects = [];
      }

      _createClass(ProjectsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          var _this = this;

          this.commonService.getProjects().subscribe(function (data) {
            _this.projects = data;
          }, function (error) {
            debugger;
          });
        }
      }]);

      return ProjectsPage;
    }();

    ProjectsPage.ctorParameters = function () {
      return [{
        type: _services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]
      }];
    };

    ProjectsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-projects',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./projects.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./projects.page.scss */
      "./src/app/projects/projects.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]])], ProjectsPage);
    /***/
  }
}]);
//# sourceMappingURL=projects-projects-module-es5.js.map