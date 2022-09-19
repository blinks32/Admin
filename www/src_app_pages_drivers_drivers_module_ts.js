"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_drivers_drivers_module_ts"],{

/***/ 1165:
/*!*********************************************************!*\
  !*** ./src/app/pages/drivers/drivers-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DriversPageRoutingModule": () => (/* binding */ DriversPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _drivers_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drivers.page */ 4697);




const routes = [
    {
        path: '',
        component: _drivers_page__WEBPACK_IMPORTED_MODULE_0__.DriversPage
    }
];
let DriversPageRoutingModule = class DriversPageRoutingModule {
};
DriversPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DriversPageRoutingModule);



/***/ }),

/***/ 1324:
/*!*************************************************!*\
  !*** ./src/app/pages/drivers/drivers.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DriversPageModule": () => (/* binding */ DriversPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _drivers_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drivers-routing.module */ 1165);
/* harmony import */ var _drivers_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drivers.page */ 4697);







let DriversPageModule = class DriversPageModule {
};
DriversPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _drivers_routing_module__WEBPACK_IMPORTED_MODULE_0__.DriversPageRoutingModule
        ],
        declarations: [_drivers_page__WEBPACK_IMPORTED_MODULE_1__.DriversPage]
    })
], DriversPageModule);



/***/ }),

/***/ 4697:
/*!***********************************************!*\
  !*** ./src/app/pages/drivers/drivers.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DriversPage": () => (/* binding */ DriversPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _drivers_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drivers.page.html?ngResource */ 5244);
/* harmony import */ var _drivers_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drivers.page.scss?ngResource */ 7345);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let DriversPage = class DriversPage {
    constructor() { }
    ngOnInit() {
    }
};
DriversPage.ctorParameters = () => [];
DriversPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-drivers',
        template: _drivers_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_drivers_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DriversPage);



/***/ }),

/***/ 7345:
/*!************************************************************!*\
  !*** ./src/app/pages/drivers/drivers.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkcml2ZXJzLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 5244:
/*!************************************************************!*\
  !*** ./src/app/pages/drivers/drivers.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\" [translucent]=\"true\">\n  <ion-toolbar >\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"primary\">\n        <ion-back-button></ion-back-button>\n      </ion-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\"> Drivers </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-img src=\"../assets/imgs/empty.svg\"></ion-img>\n\n  <ion-list-header style=\"margin-top: 10%\">\n    <ion-label color=\"primary\" class=\"ion-text-center\">\n      <h1>No Data</h1>\n      <p>Book a ride to see History</p></ion-label>\n</ion-list-header>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_drivers_drivers_module_ts.js.map