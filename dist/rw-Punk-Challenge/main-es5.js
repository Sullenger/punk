(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+Zhm":
    /*!**********************************************************!*\
      !*** ./src/app/pages/age-dialog/age-dialog.component.ts ***!
      \**********************************************************/

    /*! exports provided: AgeDialogComponent */

    /***/
    function Zhm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AgeDialogComponent", function () {
        return AgeDialogComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_age_dialog_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./age-dialog.component.html */
      "46j3");
      /* harmony import */


      var _age_dialog_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./age-dialog.component.css */
      "956i");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-cookie-service */
      "b6Qw"); // import { MatDialog } from "@angular/material/dialog";


      var AgeDialogComponent = /*#__PURE__*/function () {
        function AgeDialogComponent(cookie) {
          _classCallCheck(this, AgeDialogComponent);

          this.cookie = cookie;
        }

        _createClass(AgeDialogComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ageVerified",
          value: function ageVerified() {
            this.cookie.set("ageVerified", "true");
          }
        }, {
          key: "not21",
          value: function not21() {
            this.underAge = true;
          }
        }]);

        return AgeDialogComponent;
      }();

      AgeDialogComponent.ctorParameters = function () {
        return [{
          type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]
        }];
      };

      AgeDialogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-age-dialog",
        template: _raw_loader_age_dialog_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_age_dialog_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AgeDialogComponent);
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\21182062\webdev-projects\rw-punk-challenge\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "1LmZ":
    /*!**********************************************!*\
      !*** ./src/app/pages/home/home.component.ts ***!
      \**********************************************/

    /*! exports provided: HomeComponent */

    /***/
    function LmZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./home.component.html */
      "aSPh");
      /* harmony import */


      var _home_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./home.component.css */
      "s9Fo");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _age_dialog_age_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../age-dialog/age-dialog.component */
      "+Zhm");
      /* harmony import */


      var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-cookie-service */
      "b6Qw"); // ============================================
      // ; Title: RW Punk API Technical Challenge
      // ; Author: Jason Sullenger
      // ; Date: 11/01/2020
      // ; Description: General Website. Calls Punk API.
      // ; Users can filter and search.
      // ;===========================================


      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent(dialog, router, cookie) {
          _classCallCheck(this, HomeComponent);

          this.dialog = dialog;
          this.router = router;
          this.cookie = cookie;
        }

        _createClass(HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var authenticated = this.cookie.get("ageVerified");

            if (!authenticated) {
              this.openDialog();
            }
          }
        }, {
          key: "openDialog",
          value: function openDialog() {
            var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogConfig"]();
            var beerDialog = this.dialog.open(_age_dialog_age_dialog_component__WEBPACK_IMPORTED_MODULE_6__["AgeDialogComponent"], {
              width: "30%",
              height: "60%",
              disableClose: true,
              panelClass: "custom-Age-Dialog",
              backdropClass: "backdropBackground"
            });
          }
        }, {
          key: "navigateAbout",
          value: function navigateAbout() {
            this.router.navigate(["./about-us"]);
          }
        }]);

        return HomeComponent;
      }();

      HomeComponent.ctorParameters = function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]
        }];
      };

      HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-home",
        template: _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], HomeComponent);
      /***/
    },

    /***/
    "1XXE":
    /*!*********************************************!*\
      !*** ./src/app/footer/footer.component.css ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function XXE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".footer{\r\n  height: 40px;\r\n  margin-top: 50px;\r\n  width: 100%;\r\n  text-align: center;\r\n  display: grid;\r\n  top: 100;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixRQUFRO0FBQ1YiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVye1xyXG4gIGhlaWdodDogNDBweDtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIHRvcDogMTAwO1xyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "2qY0":
    /*!*******************************************************!*\
      !*** ./src/app/pages/about-us/about-us.component.css ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function qY0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".aboutUs {\r\n  margin: 150px auto 13% auto;\r\n  width: 80%;\r\n  height: 80%;\r\n}\r\n\r\n.aboutCard {\r\n  background-color: lightgray;\r\n}\r\n\r\nimg {\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LXVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQkFBMkI7RUFDM0IsVUFBVTtFQUNWLFdBQVc7QUFDYjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJhYm91dC11cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFib3V0VXMge1xyXG4gIG1hcmdpbjogMTUwcHggYXV0byAxMyUgYXV0bztcclxuICB3aWR0aDogODAlO1xyXG4gIGhlaWdodDogODAlO1xyXG59XHJcblxyXG4uYWJvdXRDYXJkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "46j3":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/age-dialog/age-dialog.component.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function j3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!--\n============================================\n; Title: RW Punk API Technical Challenge\n; Author: Jason Sullenger\n; Date: 11/01/2020\n; Description: General Website. Calls Punk API.\n; Users can filter and search.\n;===========================================\n-->\n\n<div class=\"ageDialog\" id=\"alignCenter\">\n  <img\n    class=\"animatedLogo\"\n    src=\"../../../assets/images/sully-Logo-Animated.gif\"\n    alt=\"Animated logo for Sully Selections\"\n  />\n  <div>\n    <mat-dialog-content>\n      <div *ngIf=\"!underAge\">\n        <p>Are you <strong>21 or older</strong>?</p>\n      </div>\n      <div *ngIf=\"underAge == true\">\n        <h6>Sorry, you must be 21 years or older to enter this site.</h6>\n      </div>\n      <div *ngIf=\"!underAge\" class=\"ageActions\">\n        <button\n          mat-raised-button\n          mat-dialog-close\n          (click)=\"ageVerified()\"\n          color=\"secondary\"\n          class=\"buttonYes buttonMargin\"\n        >\n          Yes\n        </button>\n        <button\n          mat-raised-button\n          color=\"warn\"\n          (click)=\"not21()\"\n          class=\"buttonMargin\"\n        >\n          No\n        </button>\n      </div>\n    </mat-dialog-content>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "956i":
    /*!***********************************************************!*\
      !*** ./src/app/pages/age-dialog/age-dialog.component.css ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function i(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".ageDialog {\r\n  background-color: #f6f2f2;\r\n}\r\n\r\n.animatedLogo {\r\n  margin: 5px 15% 10px 15%;\r\n  width: 70%;\r\n}\r\n\r\n.ageActions {\r\n  margin: 0px 30% 0px 30%;\r\n  width: 40%;\r\n}\r\n\r\n#alignCenter {\r\n  text-align: center;\r\n}\r\n\r\n.buttonMargin {\r\n  margin-left: 10px;\r\n  margin-right: 10px;\r\n}\r\n\r\n.buttonYes {\r\n  background-color: #45a29e;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFnZS1kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixVQUFVO0FBQ1o7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJhZ2UtZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWdlRGlhbG9nIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmMmYyO1xyXG59XHJcblxyXG4uYW5pbWF0ZWRMb2dvIHtcclxuICBtYXJnaW46IDVweCAxNSUgMTBweCAxNSU7XHJcbiAgd2lkdGg6IDcwJTtcclxufVxyXG5cclxuLmFnZUFjdGlvbnMge1xyXG4gIG1hcmdpbjogMHB4IDMwJSAwcHggMzAlO1xyXG4gIHdpZHRoOiA0MCU7XHJcbn1cclxuXHJcbiNhbGlnbkNlbnRlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5idXR0b25NYXJnaW4ge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLmJ1dHRvblllcyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ1YTI5ZTtcclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "A3xY":
    /*!***********************************!*\
      !*** ./src/app/app.component.css ***!
      \***********************************/

    /*! exports provided: default */

    /***/
    function A3xY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "DN7M":
    /*!*********************************************!*\
      !*** ./src/app/header/header.component.css ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function DN7M(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".menu {\r\n  height: 100px;\r\n  position: fixed;\r\n  top: 0;\r\n  z-index: 1000;\r\n  color: white;\r\n}\r\n\r\n.logoWide {\r\n  width: 225px;\r\n  margin-top: 25px;\r\n  border-radius: 10px;\r\n}\r\n\r\n.logoWide:hover {\r\n  transform: scale(1.05);\r\n  -webkit-transform: scale(1.05);\r\n  -ms-transform: scale(1.05);\r\n  box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.5);\r\n  -webkit-box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.5);\r\n  -moz-box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.navigation {\r\n  margin-top: 75px;\r\n  margin-left: 30%;\r\n}\r\n\r\n#iconMargin {\r\n  margin-right: 7px;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixNQUFNO0VBQ04sYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLDhCQUE4QjtFQUM5QiwwQkFBMEI7RUFDMUIsOENBQThDO0VBQzlDLHNEQUFzRDtFQUN0RCxtREFBbUQ7QUFDckQ7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lbnUge1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiAxMDAwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmxvZ29XaWRlIHtcclxuICB3aWR0aDogMjI1cHg7XHJcbiAgbWFyZ2luLXRvcDogMjVweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4ubG9nb1dpZGU6aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG4gIGJveC1zaGFkb3c6IDJweCAycHggMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAycHggMnB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gIC1tb3otYm94LXNoYWRvdzogMnB4IDJweCAycHggMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxufVxyXG5cclxuLm5hdmlnYXRpb24ge1xyXG4gIG1hcmdpbi10b3A6IDc1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwJTtcclxufVxyXG5cclxuI2ljb25NYXJnaW4ge1xyXG4gIG1hcmdpbi1yaWdodDogN3B4O1xyXG59XHJcblxyXG5cclxuIl19 */";
      /***/
    },

    /***/
    "HhuZ":
    /*!************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
      \************************************************************************************/

    /*! exports provided: default */

    /***/
    function HhuZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!--\n============================================\n; Title: RW Punk API Technical Challenge\n; Author: Jason Sullenger\n; Date: 11/01/2020\n; Description: General Website. Calls Punk API.\n; Users can filter and search.\n;===========================================\n-->\n\n<div class=\"footer\">\n  <p>Copyright &#169; 2021. Jason Sullenger. All Rights Reserved</p>\n</div>\n";
      /***/
    },

    /***/
    "L9a7":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contact-us/contact-us.component.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function L9a7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!--\n============================================\n; Title: RW Punk API Technical Challenge\n; Author: Jason Sullenger\n; Date: 11/01/2020\n; Description: General Website. Calls Punk API.\n; Users can filter and search.\n;===========================================\n-->\n\n<div class=\"contactUs\">\n  <mat-card class=\"contactCard\">\n    <mat-card-header id=\"justify\">\n      <mat-card-title>Contact Us</mat-card-title>\n    </mat-card-header>\n    <hr />\n    <mat-card-content class=\"cardContent\">\n      <div class=\"phone\">\n        <i class=\"fas fa-phone-alt fa-2x\"></i>\n        <a href=\"#\"><h6>555-555-5555</h6></a>\n      </div>\n\n      <div class=\"email\">\n        <i class=\"far fa-envelope fa-2x\"></i>\n        <a href=\"#\"><h6>fakeEmail@fakeDomain.com</h6></a>\n      </div>\n\n      <div class=\"email\">\n        <i class=\"far fa-address-card fa-2x\"></i>\n        <h6>\n          <strong>Sully Selections</strong>\n          <br />\n          123 Fake Address St\n          <br />\n          Anytown, ID 12345\n          <br />\n        </h6>\n      </div>\n    </mat-card-content>\n  </mat-card>\n</div>\n";
      /***/
    },

    /***/
    "MiXo":
    /*!**********************************************************!*\
      !*** ./src/app/pages/contact-us/contact-us.component.ts ***!
      \**********************************************************/

    /*! exports provided: ContactUsComponent */

    /***/
    function MiXo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function () {
        return ContactUsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_contact_us_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./contact-us.component.html */
      "L9a7");
      /* harmony import */


      var _contact_us_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./contact-us.component.css */
      "OAAu");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL"); // ============================================
      // ; Title: RW Punk API Technical Challenge
      // ; Author: Jason Sullenger
      // ; Date: 11/01/2020
      // ; Description: General Website. Calls Punk API.
      // ; Users can filter and search.
      // ;===========================================


      var ContactUsComponent = /*#__PURE__*/function () {
        function ContactUsComponent() {
          _classCallCheck(this, ContactUsComponent);
        }

        _createClass(ContactUsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ContactUsComponent;
      }();

      ContactUsComponent.ctorParameters = function () {
        return [];
      };

      ContactUsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-contact-us',
        template: _raw_loader_contact_us_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_contact_us_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ContactUsComponent);
      /***/
    },

    /***/
    "OAAu":
    /*!***********************************************************!*\
      !*** ./src/app/pages/contact-us/contact-us.component.css ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function OAAu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".contactUs {\r\n  margin: 150px auto 24% auto;\r\n  width: 40%;\r\n  height: 300px;\r\n}\r\n\r\n.contactCard {\r\n  background-color: lightgray;\r\n}\r\n\r\n.cardContent {\r\n  margin: 25px 25px;\r\n}\r\n\r\n.cardContent > div {\r\n  margin: 25px 50px;\r\n}\r\n\r\na {\r\n  color: black;\r\n}\r\n\r\ni {\r\n  color: #45a29e;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QtdXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUEyQjtFQUMzQixVQUFVO0VBQ1YsYUFBYTtBQUNmOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJjb250YWN0LXVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFjdFVzIHtcclxuICBtYXJnaW46IDE1MHB4IGF1dG8gMjQlIGF1dG87XHJcbiAgd2lkdGg6IDQwJTtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG59XHJcblxyXG4uY29udGFjdENhcmQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcclxufVxyXG5cclxuLmNhcmRDb250ZW50IHtcclxuICBtYXJnaW46IDI1cHggMjVweDtcclxufVxyXG5cclxuLmNhcmRDb250ZW50ID4gZGl2IHtcclxuICBtYXJnaW46IDI1cHggNTBweDtcclxufVxyXG5cclxuYSB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG5pIHtcclxuICBjb2xvcjogIzQ1YTI5ZTtcclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "Pkfo":
    /*!***************************************************************!*\
      !*** ./src/app/pages/beer-results/beer-results.component.css ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function Pkfo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".beerPage {\r\n  margin: 100px auto 0px auto;\r\n  max-width: 100%;\r\n}\r\n\r\n.textCenter {\r\n  text-align: center;\r\n}\r\n\r\n/* Filter Section */\r\n\r\n.filter-Section{\r\n  height: 100%;\r\n  font-size: 15px;\r\n}\r\n\r\n.filter-Sidenav-Button{\r\n  margin: 10px\r\n}\r\n\r\n.filter-Sidenav{\r\n  text-align: left;\r\n  padding: 10px;\r\n  position: fixed;\r\n  margin-top: 115px;\r\n}\r\n\r\nmat-slider{\r\n  width: 90%;\r\n}\r\n\r\n.search-form-field{\r\n  margin-right: 15px;\r\n}\r\n\r\n/* Beer Card */\r\n\r\n.beer-card > div > img {\r\n  height: 300px;\r\n}\r\n\r\n.beer-card:hover {\r\n  transform: scale(1.01);\r\n  -webkit-transform: scale(1.01);\r\n  -ms-transform: scale(1.01);\r\n}\r\n\r\n/* Pagination */\r\n\r\n.pagDiv {\r\n  height: 100px;\r\n  background-color: #0097a7;\r\n  justify-content: center;\r\n  margin: auto auto;\r\n}\r\n\r\n.pagination {\r\n  padding-top: 30px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJlZXItcmVzdWx0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkJBQTJCO0VBQzNCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUEsbUJBQW1COztBQUNuQjtFQUNFLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQSxjQUFjOztBQUNkO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLDhCQUE4QjtFQUM5QiwwQkFBMEI7QUFDNUI7O0FBRUEsZUFBZTs7QUFDZjtFQUNFLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJiZWVyLXJlc3VsdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZWVyUGFnZSB7XHJcbiAgbWFyZ2luOiAxMDBweCBhdXRvIDBweCBhdXRvO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnRleHRDZW50ZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLyogRmlsdGVyIFNlY3Rpb24gKi9cclxuLmZpbHRlci1TZWN0aW9ue1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcbi5maWx0ZXItU2lkZW5hdi1CdXR0b257XHJcbiAgbWFyZ2luOiAxMHB4XHJcbn1cclxuXHJcbi5maWx0ZXItU2lkZW5hdntcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIG1hcmdpbi10b3A6IDExNXB4O1xyXG59XHJcblxyXG5tYXQtc2xpZGVye1xyXG4gIHdpZHRoOiA5MCU7XHJcbn1cclxuXHJcbi5zZWFyY2gtZm9ybS1maWVsZHtcclxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcbi8qIEJlZXIgQ2FyZCAqL1xyXG4uYmVlci1jYXJkID4gZGl2ID4gaW1nIHtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG59XHJcblxyXG4uYmVlci1jYXJkOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcclxufVxyXG5cclxuLyogUGFnaW5hdGlvbiAqL1xyXG4ucGFnRGl2IHtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDk3YTc7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luOiBhdXRvIGF1dG87XHJcbn1cclxuXHJcbi5wYWdpbmF0aW9uIHtcclxuICBwYWRkaW5nLXRvcDogMzBweDtcclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.css */
      "A3xY");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _apicall_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./apicall.service */
      "vxol"); // ============================================
      // ; Title: RW Punk API Technical Challenge
      // ; Author: Jason Sullenger
      // ; Date: 11/01/2020
      // ; Description: General Website. Calls Punk API.
      // ; Users can filter and search.
      // ;===========================================


      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(api) {
          _classCallCheck(this, AppComponent);

          this.api = api;
          this.title = "rw-Punk-Challenge";
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _apicall_service__WEBPACK_IMPORTED_MODULE_4__["APICallService"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-root",
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "UzI+":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about-us/about-us.component.html ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function UzI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!--\n============================================\n; Title: RW Punk API Technical Challenge\n; Author: Jason Sullenger\n; Date: 11/01/2020\n; Description: General Website. Calls Punk API.\n; Users can filter and search.\n;===========================================\n-->\n\n<div class=\"aboutUs\">\n  <mat-card class=\"aboutCard\">\n    <mat-card-content class=\"aboutContent\">\n      <div\n        class=\"contentContainer\"\n        fxLayout=\"row\"\n        fxLayoutAlign=\"space-between center\"\n      >\n        <div class=\"images\" fxFlex=\"30\">\n          <figure>\n            <img\n              src=\"../../../assets/images/Brewery-Common-Area.jpg\"\n              alt=\"Brewery Common Area\"\n            />\n            <figcaption>\n              <span\n                >Photo by\n                <a\n                  href=\"https://unsplash.com/@m_barrifilms?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText\"\n                  >Matt Barringer</a\n                >\n                on\n                <a\n                  href=\"https://unsplash.com/s/photos/brewery-buidling?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText\"\n                  >Unsplash</a\n                ></span\n              >\n            </figcaption>\n          </figure>\n        </div>\n        <div class=\"about\" fxFlex=\"65\">\n          <h4 id=\"aboutHeader\">About Sully Selections</h4>\n          <br />\n          <p>\n            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste et\n            incidunt quasi fugit, quos veniam, nemo deserunt sed animi ullam ea\n            architecto vitae suscipit unde natus nesciunt minima nihil explicabo\n            soluta aliquam? Repellendus, doloremque? Natus laudantium dolores\n            magni repudiandae eveniet reprehenderit amet, sapiente distinctio\n            repellat ipsam molestias facere, odit explicabo.\n          </p>\n          <p>\n            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque\n            nisi odit quasi, sed dignissimos omnis sit mollitia saepe\n            voluptatibus iste sequi laudantium aliquam hic, error molestias\n            veniam similique quaerat quae.\n          </p>\n          <p>\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea quis\n            impedit fugit beatae, eaque animi harum, enim, earum cum delectus\n            totam numquam! Molestiae minima numquam odio commodi cumque officia,\n            deleniti ab. Temporibus suscipit necessitatibus odio quam. Rerum\n            dolorem quos amet perspiciatis placeat, nam saepe quod iste, magni\n            ipsam debitis. Accusantium quasi quibusdam quod ad nobis, molestiae\n            sit deserunt libero incidunt.\n          </p>\n          <p>\n            Lorem ipsum dolor sit amet consectetur adipisicing elit.\n            Perspiciatis aliquam, optio rerum nam officia distinctio ducimus, at\n            quibusdam ex asperiores error cupiditate id hic debitis\n            reprehenderit. Enim sequi cupiditate aperiam omnis! Voluptates\n            dolorum distinctio praesentium nemo laborum maxime quis aperiam\n            provident nisi amet cum perferendis inventore dolore vel, atque\n            libero.\n          </p>\n          <p>\n            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur,\n            enim atque unde dolores excepturi explicabo amet quibusdam\n            dignissimos perferendis necessitatibus, distinctio repellat harum\n            ullam! Eligendi adipisci ex quam a aperiam cum accusamus tempora,\n            ut, et asperiores praesentium veritatis atque eveniet expedita\n            molestias possimus itaque laboriosam qui animi repellat! Dignissimos\n            saepe dolorum cum distinctio, quos quidem soluta modi vero tempore\n            ea, ad, repudiandae inventore! Facere asperiores libero iure,\n            nostrum quis culpa ut consequatur voluptas ullam! Omnis.\n          </p>\n        </div>\n      </div>\n    </mat-card-content>\n  </mat-card>\n</div>\n";
      /***/
    },

    /***/
    "Vlqf":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/beer-dialog/beer-dialog.component.html ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Vlqf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!--\n============================================\n; Title: RW Punk API Technical Challenge\n; Author: Jason Sullenger\n; Date: 11/01/2020\n; Description: General Website. Calls Punk API.\n; Users can filter and search.\n;===========================================\n-->\n\n<div *ngIf=\"brew\">\n  <h2 mat-dialog-title>{{ brew.name }}</h2>\n  <mat-dialog-content>\n    <img\n      src=\"{{ brew.image_url }}\"\n      alt=\"Image of {{ brew.name }} bottle\"\n      id=\"dialogImage\"\n    />\n    <ul>\n      <li>Originated: {{ brew.first_brewed }}</li>\n      <li>Alcohol by volume: {{ brew.abv }}</li>\n      <li>Bitterness Levels: {{ brew.ibu }}</li>\n      <li>Contributed by: {{ brew.contributed_by }}</li>\n      <li>Pairs well with:</li>\n      <ul>\n        <li *ngFor=\"let food of brew.food_pairing\">{{ food }}</li>\n      </ul>\n      <li>Volume: {{ brew.volume.value }} {{ brew.volume.unit }}</li>\n    </ul>\n\n    <mat-expansion-panel\n      (opened)=\"panelOpenState = true\"\n      (closed)=\"panelOpenState = false\"\n    >\n      <mat-expansion-panel-header>\n        <mat-panel-title> Description </mat-panel-title>\n      </mat-expansion-panel-header>\n      <p>{{ brew.description }}</p>\n    </mat-expansion-panel>\n  </mat-dialog-content>\n  <mat-dialog-actions>\n    <button mat-raised-button mat-dialog-close color=\"accent\">Close</button>\n  </mat-dialog-actions>\n</div>\n";
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!--\n============================================\n; Title: RW Punk API Technical Challenge\n; Author: Jason Sullenger\n; Date: 11/01/2020\n; Description: General Website. Calls Punk API.\n; Users can filter and search.\n;===========================================\n-->\n\n<div>\n  <!-- Header -->\n  <div>\n    <app-header></app-header>\n  </div>\n\n  <!-- Main Content -->\n  <div>\n    <router-outlet></router-outlet>\n  </div>\n\n  <!-- Footer -->\n  <div>\n    <app-footer></app-footer>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/flex-layout */
      "YUcS");
      /* harmony import */


      var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-cookie-service */
      "b6Qw");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./pages/home/home.component */
      "1LmZ");
      /* harmony import */


      var _pages_beer_results_beer_results_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./pages/beer-results/beer-results.component */
      "oTB6");
      /* harmony import */


      var _pages_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./pages/contact-us/contact-us.component */
      "MiXo");
      /* harmony import */


      var _pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./pages/about-us/about-us.component */
      "kzCK");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./header/header.component */
      "fECr");
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./footer/footer.component */
      "fp1T");
      /* harmony import */


      var _pages_beer_dialog_beer_dialog_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./pages/beer-dialog/beer-dialog.component */
      "pJ5m");
      /* harmony import */


      var _pages_age_dialog_age_dialog_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./pages/age-dialog/age-dialog.component */
      "+Zhm");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @angular/material/grid-list */
      "zkoq");
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @angular/material/expansion */
      "7EHt");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_slider__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! @angular/material/slider */
      "5RNC");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "XhcP"); // ============================================
      // ; Title: RW Punk API Technical Challenge
      // ; Author: Jason Sullenger
      // ; Date: 11/01/2020
      // ; Description: General Website. Calls Punk API.
      // ; Users can filter and search.
      // ;===========================================
      // Components
      // End Components
      // Angular Material Start
      // import { MatTabsModule } from '@angular/material/tabs';
      // import { MatTableModule } from "@angular/material/table";
      // Angular Material Finish


      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"], _pages_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"], _pages_beer_results_beer_results_component__WEBPACK_IMPORTED_MODULE_12__["BeerResultsComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_15__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"], _pages_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_13__["ContactUsComponent"], _pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_14__["AboutUsComponent"], _pages_beer_dialog_beer_dialog_component__WEBPACK_IMPORTED_MODULE_17__["BeerDialogComponent"], _pages_age_dialog_age_dialog_component__WEBPACK_IMPORTED_MODULE_18__["AgeDialogComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"], // Start Angular Materials
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_20__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__["MatIconModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__["MatMenuModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_23__["MatToolbarModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_24__["MatCardModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_25__["MatInputModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_26__["MatSelectModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_27__["MatGridListModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_28__["MatExpansionModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_29__["MatFormFieldModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_30__["MatSliderModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_31__["MatSidenavModule"] // MatTabsModule,
        // MatTableModule,
        // End Angular Materials
        ],
        providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__["CookieService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]],
        entryComponents: [// BeerDialogComponent
        ]
      })], AppModule);
      /***/
    },

    /***/
    "aSPh":
    /*!**************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function aSPh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!--\n============================================\n; Title: RW Punk API Technical Challenge\n; Author: Jason Sullenger\n; Date: 11/01/2020\n; Description: General Website. Calls Punk API.\n; Users can filter and search.\n;===========================================\n-->\n<div class=\"homePage\">\n  <!-- First Row -->\n  <div class=\"main\">\n    <div class=\"aboutUs\">\n      <div class=\"bigText\">\n        <h2>Welcome to Sully Selections</h2>\n        <br />\n      </div>\n      <div class=\"mainText\">\n        <h4>A little about us...</h4>\n        <br />\n        <p>\n          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias nemo\n          laboriosam minus voluptates obcaecati maiores error? Facilis quae\n          obcaecati sed pariatur expedita voluptatum porro sunt incidunt, nihil\n          non, optio enim, quasi totam. Porro tempora nulla iste consequuntur\n          consequatur incidunt, itaque veritatis ex necessitatibus, nisi, fuga\n          ipsa dignissimos sit earum temporibus.\n        </p>\n        <p>\n          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem\n          harum, dolore quae tempora quaerat quam consequuntur possimus\n          distinctio numquam, recusandae facilis veniam? Quisquam, minus\n          corrupti?\n        </p>\n        <button\n          id=\"storyButton\"\n          mat-raised-button\n          (click)=\"navigateAbout()\"\n          color=\"warn\"\n        >\n          <span>The rest of the story</span>\n        </button>\n      </div>\n    </div>\n    <div class=\"carousel\">\n      <div\n        id=\"carouselExampleCaptions\"\n        class=\"carousel slide\"\n        data-ride=\"carousel\"\n        data-interval=\"4000\"\n      >\n        <ol class=\"carousel-indicators\">\n          <li\n            data-target=\"#carouselExampleCaptions\"\n            data-slide-to=\"0\"\n            class=\"active\"\n          ></li>\n          <li data-target=\"#carouselExampleCaptions\" data-slide-to=\"1\"></li>\n          <li data-target=\"#carouselExampleCaptions\" data-slide-to=\"2\"></li>\n        </ol>\n        <div class=\"carousel-inner\">\n          <div class=\"carousel-item active\">\n            <img\n              src=\"../../../assets/images/brewery-One.jpg\"\n              class=\"d-block w-100\"\n              alt=\"Image of brewery stills\"\n            />\n            <div class=\"carousel-caption d-none d-md-block\">\n              <span\n                >Photo by\n                <a\n                  href=\"https://unsplash.com/@vogel11?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText\"\n                  >Daniel Vogel</a\n                >\n                on\n                <a\n                  href=\"https://unsplash.com/s/photos/brewery?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText\"\n                  >Unsplash</a\n                ></span\n              >\n            </div>\n          </div>\n          <div class=\"carousel-item\">\n            <img\n              src=\"../../../assets/images/brewery-Two.jpg\"\n              class=\"d-block w-100\"\n              alt=\"Image of beer being poured via tap\"\n            />\n            <div class=\"carousel-caption d-none d-md-block\">\n              <span\n                >Photo by\n                <a\n                  href=\"https://unsplash.com/@louishansel?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText\"\n                  >Louis Hansel @shotsoflouis</a\n                >\n                on\n                <a\n                  href=\"https://unsplash.com/s/photos/brewery?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText\"\n                  >Unsplash</a\n                ></span\n              >\n            </div>\n          </div>\n          <div class=\"carousel-item\">\n            <img\n              src=\"../../../assets/images/brewery-Three.jpg\"\n              class=\"d-block w-100\"\n              alt=\"Image of brewers inspecting their finished product\"\n            />\n            <div class=\"carousel-caption d-none d-md-block\">\n              <span\n                >Photo by\n                <a\n                  href=\"https://unsplash.com/@elevatebeer?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText\"\n                  >Elevate</a\n                >\n                on\n                <a\n                  href=\"https://unsplash.com/s/photos/brewery?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText\"\n                  >Unsplash</a\n                ></span\n              >\n            </div>\n          </div>\n        </div>\n        <a\n          class=\"carousel-control-prev\"\n          href=\"#carouselExampleCaptions\"\n          role=\"button\"\n          data-slide=\"prev\"\n        >\n          <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n          <span class=\"sr-only\">Previous</span>\n        </a>\n        <a\n          class=\"carousel-control-next\"\n          href=\"#carouselExampleCaptions\"\n          role=\"button\"\n          data-slide=\"next\"\n        >\n          <span class=\"sr-only\">Next</span>\n          <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n        </a>\n      </div>\n    </div>\n    <br />\n  </div>\n  <div class=\"secondRow\">\n    <div class=\"image\">\n      <img\n        id=\"imageWidth\"\n        src=\"../../../assets/images/beer-Three.png\"\n        alt=\"Beer Stein\"\n      />\n    </div>\n    <div class=\"textBox\">\n      <h4>What sets us apart</h4>\n      Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis error\n      porro voluptates provident. Laudantium nobis ducimus, et ab iste at non\n      nemo obcaecati tempora vitae dicta voluptates, tempore qui eveniet sint\n      cum fugiat vel cumque maxime? Omnis laudantium tenetur, eaque architecto\n      nobis, dolores, repudiandae officia doloremque eveniet aut magnam\n      consectetur.\n    </div>\n  </div>\n  <br />\n  <div class=\"moreInfo\">\n    <div class=\"location\">\n      <h3><u>Location & Hours</u></h3>\n      <br />\n      <address>\n        <strong>\n          123 Fake Address St\n          <br />\n          Anytown, ID 12345\n          <br />\n        </strong>\n      </address>\n      <hr />\n      <p><strong>Mon-Thu</strong> 10:00-8:00pm</p>\n      <p><strong>Fri & Sat</strong> 10:00-11:00pm</p>\n      <p><strong>Closed Sunday</strong></p>\n    </div>\n    <div class=\"social\">\n      <h3 class=\"marginBottom\"><u>Social Media</u></h3>\n      <a href=\"\"><i class=\"far fa-envelope fa-2x\"></i></a>\n      <br />\n      <a href=\"\"><i class=\"fab fa-facebook-f fa-2x\"></i></a>\n      <br />\n      <a href=\"\"><i class=\"fab fa-instagram fa-2x\"></i></a>\n      <br />\n      <a href=\"\"><i class=\"fab fa-twitter fa-2x\"></i></a>\n      <br />\n      <a href=\"\"><i class=\"fab fa-youtube fa-2x\"></i></a>\n      <br />\n    </div>\n    <div class=\"links\">\n      <h3 class=\"marginBottom\"><u>Additional Info</u></h3>\n      <a href=\"\" id=\"fontLarge\">News</a>\n      <br />\n      <a href=\"\" id=\"fontLarge\">Careers</a>\n      <br />\n      <a href=\"\" id=\"fontLarge\"> Support</a>\n      <br />\n      <a href=\"\" id=\"fontLarge\">FAQ</a>\n      <br />\n      <a href=\"\" id=\"fontLarge\">Privacy Policy</a>\n    </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "fECr":
    /*!********************************************!*\
      !*** ./src/app/header/header.component.ts ***!
      \********************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function fECr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./header.component.html */
      "kjkU");
      /* harmony import */


      var _header_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./header.component.css */
      "DN7M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb"); // ============================================
      // ; Title: RW Punk API Technical Challenge
      // ; Author: Jason Sullenger
      // ; Date: 11/01/2020
      // ; Description: General Website. Calls Punk API.
      // ; Users can filter and search.
      // ;===========================================


      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent(router) {
          _classCallCheck(this, HeaderComponent);

          this.router = router;
        }

        _createClass(HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "navigateHome",
          value: function navigateHome() {
            this.router.navigate([""]);
          }
        }, {
          key: "navigateBeerList",
          value: function navigateBeerList() {
            this.router.navigate(["./beerList"]);
          }
        }, {
          key: "navigateContact",
          value: function navigateContact() {
            this.router.navigate(["./contact-us"]);
          }
        }, {
          key: "navigateAbout",
          value: function navigateAbout() {
            this.router.navigate(["./about-us"]);
          }
        }]);

        return HeaderComponent;
      }();

      HeaderComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-header',
        template: _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_header_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], HeaderComponent);
      /***/
    },

    /***/
    "fp1T":
    /*!********************************************!*\
      !*** ./src/app/footer/footer.component.ts ***!
      \********************************************/

    /*! exports provided: FooterComponent */

    /***/
    function fp1T(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./footer.component.html */
      "HhuZ");
      /* harmony import */


      var _footer_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./footer.component.css */
      "1XXE");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL"); // ============================================
      // ; Title: RW Punk API Technical Challenge
      // ; Author: Jason Sullenger
      // ; Date: 11/01/2020
      // ; Description: General Website. Calls Punk API.
      // ; Users can filter and search.
      // ;===========================================


      var FooterComponent = /*#__PURE__*/function () {
        function FooterComponent() {
          _classCallCheck(this, FooterComponent);
        }

        _createClass(FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FooterComponent;
      }();

      FooterComponent.ctorParameters = function () {
        return [];
      };

      FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-footer',
        template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_footer_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], FooterComponent);
      /***/
    },

    /***/
    "jlbq":
    /*!*************************************************************!*\
      !*** ./src/app/pages/beer-dialog/beer-dialog.component.css ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function jlbq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "img{\r\n  height: 15em;\r\n  display: inline-block;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJlZXItZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1oscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6ImJlZXItZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWd7XHJcbiAgaGVpZ2h0OiAxNWVtO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "kjkU":
    /*!************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
      \************************************************************************************/

    /*! exports provided: default */

    /***/
    function kjkU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!--\n============================================\n; Title: RW Punk API Technical Challenge\n; Author: Jason Sullenger\n; Date: 11/01/2020\n; Description: General Website. Calls Punk API.\n; Users can filter and search.\n;===========================================\n-->\n\n\n<!-- fxLayoutAlign=\"end center\" ???  -->\n<div class=\"navMenu\">\n\n  <div class=\"topnav\" id=\"myTopnav\">\n    <a href=\"#home\" class=\"active\">Home</a>\n    <a href=\"#news\">News</a>\n    <a href=\"#contact\">Contact</a>\n    <a href=\"#about\">About</a>\n    <a href=\"javascript:void(0);\" class=\"icon\" onclick=\"myFunction()\">\n      <i class=\"fa fa-bars\"></i>\n    </a>\n  </div>\n\n  <header>\n    <mat-toolbar class=\"menu\" role=\"header\" color=\"warn\">\n      <mat-toolbar-row>\n        <img\n          src=\"../../assets/images/sully-Logo-Wide-Inverted.png\"\n          alt=\"Alternate logo for Sully Selections\"\n          class=\"logoWide\"\n          (click)=\"navigateHome()\"\n        />\n        <div class=\"navigation\">\n          <button mat-button (click)=\"navigateHome()\">\n            <mat-icon id=\"iconMargin\">home</mat-icon>\n            <span>Home</span>\n          </button>\n\n          <button mat-button (click)=\"navigateBeerList()\">\n            <mat-icon id=\"iconMargin\">local_drink</mat-icon>\n            <span>Available Beer</span>\n          </button>\n\n          <button mat-button (click)=\"navigateAbout()\">\n            <mat-icon id=\"iconMargin\">business</mat-icon>\n            <span>About Us</span>\n          </button>\n\n          <button mat-button (click)=\"navigateContact()\">\n            <mat-icon id=\"iconMargin\">email</mat-icon>\n            <span>Contact Us</span>\n          </button>\n        </div>\n      </mat-toolbar-row>\n    </mat-toolbar>\n  </header>\n</div>\n";
      /***/
    },

    /***/
    "kzCK":
    /*!******************************************************!*\
      !*** ./src/app/pages/about-us/about-us.component.ts ***!
      \******************************************************/

    /*! exports provided: AboutUsComponent */

    /***/
    function kzCK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function () {
        return AboutUsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_about_us_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./about-us.component.html */
      "UzI+");
      /* harmony import */


      var _about_us_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./about-us.component.css */
      "2qY0");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _apicall_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../apicall.service */
      "vxol"); // ============================================
      // ; Title: RW Punk API Technical Challenge
      // ; Author: Jason Sullenger
      // ; Date: 11/01/2020
      // ; Description: General Website. Calls Punk API.
      // ; Users can filter and search.
      // ;===========================================


      var AboutUsComponent = /*#__PURE__*/function () {
        function AboutUsComponent(api) {
          _classCallCheck(this, AboutUsComponent);

          this.api = api;
        }

        _createClass(AboutUsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AboutUsComponent;
      }();

      AboutUsComponent.ctorParameters = function () {
        return [{
          type: _apicall_service__WEBPACK_IMPORTED_MODULE_4__["APICallService"]
        }];
      };

      AboutUsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-about-us",
        template: _raw_loader_about_us_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_about_us_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AboutUsComponent);
      /***/
    },

    /***/
    "n5XL":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/beer-results/beer-results.component.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function n5XL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!--\n============================================\n; Title: RW Punk API Technical Challenge\n; Author: Jason Sullenger\n; Date: 11/01/2020\n; Description: General Website. Calls Punk API.\n; Users can filter and search.\n;===========================================\n-->\n\n<div class=\"beerPage\">\n  <!-- Filter -->\n  <mat-drawer-container class=\"filter-Section\">\n    <mat-drawer #drawer class=\"filter-Sidenav\" mode=\"side\">\n      <!-- Search by name -->\n      <mat-form-field class=\"search-form-field\">\n        <mat-label>Search by name</mat-label>\n        <input\n          matInput\n          type=\"text\"\n          [(ngModel)]=\"selectedFilter.name\"\n          (keydown)=\"applyFilter('search', selectedFilter)\"\n        />\n        <button\n          mat-button\n          *ngIf=\"selectedFilter.name\"\n          matSuffix\n          mat-icon-button\n          aria-label=\"Clear\"\n          (click)=\"clearedSearch()\"\n        >\n          <mat-icon>close</mat-icon>\n        </button>\n      </mat-form-field>\n\n      <!-- Bitterness Slider -->\n      <div class=\"bitterness-Slider\">\n        <label class=\"form-label\" for=\"customRange1\">Bitterness Level</label>\n        <br>\n        <mat-slider\n          thumbLabel\n          [displayWith]=\"formatLabel\"\n          min=\"1\"\n          max=\"300\"\n          step=\"5\"\n          values=\"1,300\"\n          [(ngModel)]=\"selectedFilter.bitterness\"\n          (click)=\"applyFilter('slider', selectedFilter)\"\n        ></mat-slider>\n      </div>\n\n      <!-- Alcohol Content -->\n      <mat-form-field appearance=\"fill\" class=\"Alcohol-form-field\">\n        <mat-label>Alcohol Content</mat-label>\n        <select\n          color=\"primary\"\n          matNativeControl\n          [(ngModel)]=\"selectedFilter.alcoholContent\"\n          (click)=\"applyFilter('select', selectedFilter)\"\n        >\n          <option value=\"\" selected></option>\n          <option value=\"Greater\">Greater than 5%</option>\n          <option value=\"Lesser\">Less than 5%</option>\n        </select>\n      </mat-form-field>\n    </mat-drawer>\n\n    <div class=\"filter-Sidenav-Button\">\n      <button type=\"button\" mat-raised-button color=\"primary\" (click)=\"drawer.toggle()\">\n        Filters\n      </button>\n    </div>\n\n    <!-- Beer List -->\n    <mat-grid-list cols=\"4\" gutterSize=\"1px\" rowHeight=\"1:1.25\">\n      <div *ngFor=\"let beer of beerList\">\n        <a class=\"\" (click)=\"openDialog(beer)\">\n          <mat-grid-tile>\n            <div class=\"beer-card\">\n              <div class=\"textCenter justify\">\n                <img\n                  mat-card-image\n                  src=\"{{ beer.image_url }}\"\n                  alt=\"Image of {{ beer.name }} bottle\"\n                  class=\"beerImage\"\n                />\n              </div>\n              <div class=\"beerContent textCenter\">\n                <h5>{{ beer.name }}</h5>\n                <p>\n                  {{ beer.tagline }}\n                </p>\n                <hr />\n              </div>\n            </div>\n          </mat-grid-tile>\n        </a>\n      </div>\n    </mat-grid-list>\n    <!-- End beer list -->\n\n    <!-- Pagination -->\n    <div class=\"pagDiv\">\n      <nav aria-label=\"Page navigation\">\n        <ul class=\"pagination justify-content-center\">\n          <li class=\"page-item\" [class.disabled]=\"prevDisable\">\n            <a class=\"page-link\" (click)=\"previousPage()\">Previous</a>\n          </li>\n          <li class=\"page-item\">\n            <a class=\"page-link\">Page {{ pageNumber }}</a>\n          </li>\n          <li class=\"page-item\" [class.disabled]=\"nextDisable\">\n            <a class=\"page-link\" (click)=\"nextPage()\">Next</a>\n          </li>\n        </ul>\n      </nav>\n    </div>\n    <!-- End Pagination -->\n  </mat-drawer-container>\n</div>\n";
      /***/
    },

    /***/
    "oTB6":
    /*!**************************************************************!*\
      !*** ./src/app/pages/beer-results/beer-results.component.ts ***!
      \**************************************************************/

    /*! exports provided: BeerResultsComponent */

    /***/
    function oTB6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BeerResultsComponent", function () {
        return BeerResultsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_beer_results_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./beer-results.component.html */
      "n5XL");
      /* harmony import */


      var _beer_results_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./beer-results.component.css */
      "Pkfo");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _apicall_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../apicall.service */
      "vxol");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _beer_dialog_beer_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../beer-dialog/beer-dialog.component */
      "pJ5m"); // ============================================
      // ; Title: RW Punk API Technical Challenge
      // ; Author: Jason Sullenger
      // ; Date: 11/01/2020
      // ; Description: General Website. Calls Punk API.
      // ; Users can filter and search.
      // ;===========================================


      var BeerResultsComponent = /*#__PURE__*/function () {
        function BeerResultsComponent(api, dialog // private router: Router
        ) {
          _classCallCheck(this, BeerResultsComponent);

          this.api = api;
          this.dialog = dialog;
          this.panelOpenState = false;
          this.prevDisable = true;
          this.nextDisable = false;
          this.selectedFilter = {
            alcoholContent: "",
            name: "",
            bitterness: 300
          };
        }

        _createClass(BeerResultsComponent, [{
          key: "applyFilter",
          value: function applyFilter(event, selection) {
            var _this = this;

            console.log(event);
            console.log(selection);

            if (event == "slider") {
              this.selectedFilter.name = "";
              this.selectedFilter.alcoholContent = "";
              this.api.filterBitterness(selection.bitterness).subscribe(function (data) {
                // Response from API Call
                console.log("API Lesser Call", data), _this.beerList = data;

                _this.disableNext(data);
              });
            } else if (event == "select") {
              this.selectedFilter.name = "";
              this.selectedFilter.bitterness = 300;

              if (selection.alcoholContent == "Greater") {
                this.api.filterAlcGreater().subscribe(function (data) {
                  // Response from API Call
                  console.log("API Greater Call", data), _this.beerList = data;

                  _this.disableNext(data);
                });
              } else if (selection.alcoholContent == "Lesser") {
                this.api.filterAlcLess().subscribe(function (data) {
                  // Response from API Call
                  console.log("API Lesser Call", data), _this.beerList = data;

                  _this.disableNext(data);
                });
              }

              this.pageNumber = 1;
            } else if (event == "search") {
              this.selectedFilter.alcoholContent = "";
              this.selectedFilter.bitterness = 300;
              this.selectedFilter.alcoholContent = "";
              this.api.searchByName(this.selectedFilter.name).subscribe(function (data) {
                // Response from API Call
                console.log("API Search Call", data), _this.beerList = data;

                _this.disableNext(data);
              });
              this.pageNumber = 1;
            } else {
              this.api.callAPI().subscribe(function (data) {
                // Response from API Call
                console.log("API Call", data), _this.beerList = data;

                _this.disableNext(data);
              });
              this.pageNumber = 1;
            }
          }
        }, {
          key: "disableNext",
          value: function disableNext(data) {
            var instance = Object.keys(data);
            var length = instance.length;

            if (length < 12) {
              this.nextDisable = true;
            } else {
              this.nextDisable = false;
            }
          }
        }, {
          key: "clearedSearch",
          value: function clearedSearch() {
            var _this2 = this;

            this.selectedFilter.name = "";
            this.api.callAPI().subscribe(function (data) {
              // Response from API Call
              // console.log('API Call', data),
              _this2.beerList = data;

              _this2.disableNext(data);
            });
          }
        }, {
          key: "openDialog",
          value: function openDialog(beer) {
            var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogConfig"]();
            var beerDialog = this.dialog.open(_beer_dialog_beer_dialog_component__WEBPACK_IMPORTED_MODULE_6__["BeerDialogComponent"], {
              width: "40%",
              height: "90%"
            });
            beerDialog.componentInstance.brew = beer;
          }
        }, {
          key: "pagination",
          value: function pagination(pgNum) {
            var _this3 = this;

            this.pageNumber = pgNum;
            console.log(this.selectedFilter);

            if (this.selectedFilter) {
              this.api.callNextPage(pgNum, this.selectedFilter, this.selectedFilter.bitterness).subscribe(function (data) {
                _this3.beerList = data;

                _this3.disableNext(data);
              });
            } else {
              this.api.callNextPage(pgNum, null, null).subscribe(function (data) {
                _this3.beerList = data;

                _this3.disableNext(data);
              });
            }

            if (this.pageNumber !== 1) {
              this.prevDisable = false;
            } else {
              this.prevDisable = true;
            }
          }
        }, {
          key: "nextPage",
          value: function nextPage() {
            var newPgNum = this.pageNumber + 1;
            this.pagination(newPgNum);
          }
        }, {
          key: "previousPage",
          value: function previousPage() {
            var newPgNum = this.pageNumber - 1;
            this.pagination(newPgNum);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            this.pageNumber = 1;
            this.api.callAPI().subscribe(function (data) {
              _this4.beerList = data;
              console.log(data);
            });
          }
        }]);

        return BeerResultsComponent;
      }();

      BeerResultsComponent.ctorParameters = function () {
        return [{
          type: _apicall_service__WEBPACK_IMPORTED_MODULE_4__["APICallService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
        }];
      };

      BeerResultsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-beer-results",
        template: _raw_loader_beer_results_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_beer_results_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], BeerResultsComponent);
      /***/
    },

    /***/
    "pJ5m":
    /*!************************************************************!*\
      !*** ./src/app/pages/beer-dialog/beer-dialog.component.ts ***!
      \************************************************************/

    /*! exports provided: BeerDialogComponent */

    /***/
    function pJ5m(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BeerDialogComponent", function () {
        return BeerDialogComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_beer_dialog_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./beer-dialog.component.html */
      "Vlqf");
      /* harmony import */


      var _beer_dialog_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./beer-dialog.component.css */
      "jlbq");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb"); // ============================================
      // ; Title: RW Punk API Technical Challenge
      // ; Author: Jason Sullenger
      // ; Date: 11/01/2020
      // ; Description: General Website. Calls Punk API.
      // ; Users can filter and search.
      // ;===========================================


      var BeerDialogComponent = /*#__PURE__*/function () {
        // brew: any = {
        //   name: "",
        //   image_url: "",
        //   first_brewed: "",
        //   abv: "",
        //   ibu: "",
        //   contributed_by: "",
        //   food_pairing: "",
        //   volume: "",
        //   description: "",
        // }
        function BeerDialogComponent(dialogRef, router) {
          _classCallCheck(this, BeerDialogComponent);

          this.dialogRef = dialogRef;
          this.router = router;
          this.panelOpenState = false;
        }

        _createClass(BeerDialogComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log(this.brew);
          }
        }]);

        return BeerDialogComponent;
      }();

      BeerDialogComponent.ctorParameters = function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      };

      BeerDialogComponent.propDecorators = {
        brew: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      BeerDialogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-beer-dialog',
        template: _raw_loader_beer_dialog_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_beer_dialog_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], BeerDialogComponent);
      /***/
    },

    /***/
    "s9Fo":
    /*!***********************************************!*\
      !*** ./src/app/pages/home/home.component.css ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function s9Fo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@media screen and (min-width: 1000px) {\r\n  /* First Row */\r\n  .main {\r\n    padding-left: 75px;\r\n  }\r\n  .aboutUs {\r\n    width: 35%;\r\n  }\r\n  .carousel {\r\n    width: 65%;\r\n    padding: 5px;\r\n  }\r\n  /* Second Row */\r\n  .secondRow {\r\n    margin-top: 150px;\r\n  }\r\n  .secondRow > .image {\r\n    width: 15%;\r\n  }\r\n  .textBox {\r\n    width: 60%;\r\n    padding: 30px;\r\n    margin: 0px 50px 25px 25px;\r\n    border-radius: 40px;\r\n  }\r\n  /* Third Row */\r\n  .moreInfo {\r\n    margin: 50px auto 50px auto;\r\n  }\r\n  .location,\r\n  .social,\r\n  .links {\r\n    padding-top: 20px;\r\n  }\r\n}\r\n\r\n/* Phone */\r\n\r\n@media screen and (max-width: 600px) {\r\n  .main {\r\n    padding-left: 5px;\r\n  }\r\n  .aboutUs {\r\n    width: 100%;\r\n  }\r\n  .carousel {\r\n    width: 100%;\r\n  }\r\n  /* Second Row */\r\n  .secondRow > .image {\r\n    display: none;\r\n  }\r\n  .textBox {\r\n    width: 100%;\r\n    padding: 15px;\r\n  }\r\n  /* Third Row */\r\n  .moreInfo {\r\n    margin: 0px auto;\r\n  }\r\n  .location,\r\n  .social,\r\n  .links {\r\n    padding-top: 20px;\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 999px) {\r\n  /* Tablet First Row */\r\n  .aboutUs {\r\n    width: 100%;\r\n    padding-left: 15px;\r\n  }\r\n  .carousel {\r\n    width: 100%;\r\n  }\r\n  /* Tablet Second Row */\r\n  .secondRow > .image {\r\n    width: 50%;\r\n  }\r\n  .textBox {\r\n    width: 100%;\r\n    padding: 30px;\r\n    margin-bottom: 50px;\r\n  }\r\n\r\n  /* Tablet Third Row */\r\n  .moreInfo {\r\n    margin: 0px auto;\r\n  }\r\n  .location,\r\n  .social,\r\n  .links {\r\n    padding-top: 20px;\r\n  }\r\n}\r\n\r\n/* First Row Main Styling*/\r\n\r\n.main {\r\n  margin-top: 150px;\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  justify-content: space-around;\r\n}\r\n\r\n.aboutUs {\r\n  padding: 5px;\r\n  margin-top: 10px;\r\n}\r\n\r\n#storyButton {\r\n  color: white;\r\n  margin-left: 50px;\r\n  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.75);\r\n  -webkit-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.75);\r\n  -moz-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.75);\r\n}\r\n\r\n#storyButton:hover {\r\n  box-shadow: 10px 10px 15px 0px rgba(0, 0, 0, 0.75);\r\n  -webkit-box-shadow: 10px 10px 15px 0px rgba(0, 0, 0, 0.75);\r\n  -moz-box-shadow: 10px 10px 15px 0px rgba(0, 0, 0, 0.75);\r\n  transform: scale(1.05);\r\n  -webkit-transform: scale(1.05);\r\n  -ms-transform: scale(1.05);\r\n}\r\n\r\n.carousel {\r\n  margin: 10px auto 0px auto;\r\n}\r\n\r\n.carousel-caption {\r\n  background-color: rgba(192, 192, 192, 0.5);\r\n  border-radius: 5px;\r\n  width: 50%;\r\n  margin: 0px auto;\r\n}\r\n\r\n.carousel-caption span {\r\n  color: black;\r\n}\r\n\r\n.carousel-control-prev-icon {\r\n  background-color: rgba(192, 192, 192, 0.9);\r\n  box-shadow: 0 0 15px 15px rgba(192, 192, 192, 0.3);\r\n  border-radius: 20px;\r\n}\r\n\r\n.carousel-control-next-icon {\r\n  background-color: rgba(192, 192, 192, 0.9);\r\n  border-radius: 20px;\r\n}\r\n\r\n/* Second Row Main Styling*/\r\n\r\n.secondRow {\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  justify-content: space-around;\r\n  margin-bottom: 50px;\r\n  color: white;\r\n}\r\n\r\n.textBox {\r\n  background-color: #45a29e;\r\n  box-shadow: 10px 10px 15px 0px rgba(0, 0, 0, 0.75);\r\n  -webkit-box-shadow: 10px 10px 15px 0px rgba(0, 0, 0, 0.75);\r\n  -moz-box-shadow: 10px 10px 15px 0px rgba(0, 0, 0, 0.75);\r\n}\r\n\r\n/* Third Row Main Styling */\r\n\r\n.moreInfo {\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  justify-content: space-around;\r\n  text-align: center;\r\n  background-color: #45a29e;\r\n  color: white;\r\n}\r\n\r\n.fa-2x {\r\n  color: white;\r\n  padding: 5px;\r\n}\r\n\r\n.marginBottom {\r\n  margin-bottom: 30px;\r\n}\r\n\r\n#fontLarge {\r\n  font-size: 20px;\r\n}\r\n\r\na {\r\n  color: white;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZDtJQUNFLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsVUFBVTtFQUNaO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsWUFBWTtFQUNkO0VBQ0EsZUFBZTtFQUNmO0lBQ0UsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLFVBQVU7SUFDVixhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLG1CQUFtQjtFQUNyQjtFQUNBLGNBQWM7RUFDZDtJQUNFLDJCQUEyQjtFQUM3QjtFQUNBOzs7SUFHRSxpQkFBaUI7RUFDbkI7QUFDRjs7QUFFQSxVQUFVOztBQUNWO0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLFdBQVc7RUFDYjtFQUNBO0lBQ0UsV0FBVztFQUNiO0VBQ0EsZUFBZTtFQUNmO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsYUFBYTtFQUNmO0VBQ0EsY0FBYztFQUNkO0lBQ0UsZ0JBQWdCO0VBQ2xCO0VBQ0E7OztJQUdFLGlCQUFpQjtJQUNqQixXQUFXO0VBQ2I7QUFDRjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQjtJQUNFLFdBQVc7SUFDWCxrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLFdBQVc7RUFDYjtFQUNBLHNCQUFzQjtFQUN0QjtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7RUFDckI7O0VBRUEscUJBQXFCO0VBQ3JCO0lBQ0UsZ0JBQWdCO0VBQ2xCO0VBQ0E7OztJQUdFLGlCQUFpQjtFQUNuQjtBQUNGOztBQUNBLDBCQUEwQjs7QUFDMUI7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2QkFBNkI7QUFDL0I7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQiwrQ0FBK0M7RUFDL0MsdURBQXVEO0VBQ3ZELG9EQUFvRDtBQUN0RDs7QUFFQTtFQUNFLGtEQUFrRDtFQUNsRCwwREFBMEQ7RUFDMUQsdURBQXVEO0VBQ3ZELHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsMEJBQTBCO0FBQzVCOztBQUNBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsMENBQTBDO0VBQzFDLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsWUFBWTtBQUNkOztBQUNBO0VBQ0UsMENBQTBDO0VBQzFDLGtEQUFrRDtFQUNsRCxtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSwwQ0FBMEM7RUFDMUMsbUJBQW1CO0FBQ3JCOztBQUNBLDJCQUEyQjs7QUFDM0I7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGtEQUFrRDtFQUNsRCwwREFBMEQ7RUFDMUQsdURBQXVEO0FBQ3pEOztBQUVBLDJCQUEyQjs7QUFDM0I7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMDBweCkge1xyXG4gIC8qIEZpcnN0IFJvdyAqL1xyXG4gIC5tYWluIHtcclxuICAgIHBhZGRpbmctbGVmdDogNzVweDtcclxuICB9XHJcbiAgLmFib3V0VXMge1xyXG4gICAgd2lkdGg6IDM1JTtcclxuICB9XHJcbiAgLmNhcm91c2VsIHtcclxuICAgIHdpZHRoOiA2NSU7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgfVxyXG4gIC8qIFNlY29uZCBSb3cgKi9cclxuICAuc2Vjb25kUm93IHtcclxuICAgIG1hcmdpbi10b3A6IDE1MHB4O1xyXG4gIH1cclxuICAuc2Vjb25kUm93ID4gLmltYWdlIHtcclxuICAgIHdpZHRoOiAxNSU7XHJcbiAgfVxyXG4gIC50ZXh0Qm94IHtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgbWFyZ2luOiAwcHggNTBweCAyNXB4IDI1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gIH1cclxuICAvKiBUaGlyZCBSb3cgKi9cclxuICAubW9yZUluZm8ge1xyXG4gICAgbWFyZ2luOiA1MHB4IGF1dG8gNTBweCBhdXRvO1xyXG4gIH1cclxuICAubG9jYXRpb24sXHJcbiAgLnNvY2lhbCxcclxuICAubGlua3Mge1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBQaG9uZSAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC5tYWluIHtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gIH1cclxuICAuYWJvdXRVcyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLmNhcm91c2VsIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAvKiBTZWNvbmQgUm93ICovXHJcbiAgLnNlY29uZFJvdyA+IC5pbWFnZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAudGV4dEJveCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgfVxyXG4gIC8qIFRoaXJkIFJvdyAqL1xyXG4gIC5tb3JlSW5mbyB7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvO1xyXG4gIH1cclxuICAubG9jYXRpb24sXHJcbiAgLnNvY2lhbCxcclxuICAubGlua3Mge1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5OXB4KSB7XHJcbiAgLyogVGFibGV0IEZpcnN0IFJvdyAqL1xyXG4gIC5hYm91dFVzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gIH1cclxuICAuY2Fyb3VzZWwge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC8qIFRhYmxldCBTZWNvbmQgUm93ICovXHJcbiAgLnNlY29uZFJvdyA+IC5pbWFnZSB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gIH1cclxuICAudGV4dEJveCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gIH1cclxuXHJcbiAgLyogVGFibGV0IFRoaXJkIFJvdyAqL1xyXG4gIC5tb3JlSW5mbyB7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvO1xyXG4gIH1cclxuICAubG9jYXRpb24sXHJcbiAgLnNvY2lhbCxcclxuICAubGlua3Mge1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgfVxyXG59XHJcbi8qIEZpcnN0IFJvdyBNYWluIFN0eWxpbmcqL1xyXG4ubWFpbiB7XHJcbiAgbWFyZ2luLXRvcDogMTUwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG59XHJcbi5hYm91dFVzIHtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG4jc3RvcnlCdXR0b24ge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tbGVmdDogNTBweDtcclxuICBib3gtc2hhZG93OiA1cHggNXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDVweCA1cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gIC1tb3otYm94LXNoYWRvdzogNXB4IDVweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbn1cclxuXHJcbiNzdG9yeUJ1dHRvbjpob3ZlciB7XHJcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDE1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAxMHB4IDEwcHggMTVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICAtbW96LWJveC1zaGFkb3c6IDEwcHggMTBweCAxNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG59XHJcbi5jYXJvdXNlbCB7XHJcbiAgbWFyZ2luOiAxMHB4IGF1dG8gMHB4IGF1dG87XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1jYXB0aW9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5MiwgMTkyLCAxOTIsIDAuNSk7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgbWFyZ2luOiAwcHggYXV0bztcclxufVxyXG4uY2Fyb3VzZWwtY2FwdGlvbiBzcGFuIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLmNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5MiwgMTkyLCAxOTIsIDAuOSk7XHJcbiAgYm94LXNoYWRvdzogMCAwIDE1cHggMTVweCByZ2JhKDE5MiwgMTkyLCAxOTIsIDAuMyk7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG4uY2Fyb3VzZWwtY29udHJvbC1uZXh0LWljb24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTkyLCAxOTIsIDE5MiwgMC45KTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcbi8qIFNlY29uZCBSb3cgTWFpbiBTdHlsaW5nKi9cclxuLnNlY29uZFJvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi50ZXh0Qm94IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDVhMjllO1xyXG4gIGJveC1zaGFkb3c6IDEwcHggMTBweCAxNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMTBweCAxMHB4IDE1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAxMHB4IDEwcHggMTVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxufVxyXG5cclxuLyogVGhpcmQgUm93IE1haW4gU3R5bGluZyAqL1xyXG4ubW9yZUluZm8ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ1YTI5ZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5mYS0yeCB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLm1hcmdpbkJvdHRvbSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuI2ZvbnRMYXJnZSB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG5hIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./pages/home/home.component */
      "1LmZ");
      /* harmony import */


      var _pages_beer_results_beer_results_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./pages/beer-results/beer-results.component */
      "oTB6");
      /* harmony import */


      var _pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./pages/about-us/about-us.component */
      "kzCK");
      /* harmony import */


      var _pages_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./pages/contact-us/contact-us.component */
      "MiXo"); // ============================================
      // ; Title: RW Punk API Technical Challenge
      // ; Author: Jason Sullenger
      // ; Date: 11/01/2020
      // ; Description: General Website. Calls Punk API.
      // ; Users can filter and search.
      // ;===========================================


      var routes = [{
        path: "",
        component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
      }, {
        path: "beerList",
        component: _pages_beer_results_beer_results_component__WEBPACK_IMPORTED_MODULE_4__["BeerResultsComponent"]
      }, {
        path: "about-us",
        component: _pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_5__["AboutUsComponent"]
      }, {
        path: "contact-us",
        component: _pages_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_6__["ContactUsComponent"]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          relativeLinkResolution: "legacy",
          scrollPositionRestoration: "enabled"
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "vxol":
    /*!************************************!*\
      !*** ./src/app/apicall.service.ts ***!
      \************************************/

    /*! exports provided: APICallService */

    /***/
    function vxol(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "APICallService", function () {
        return APICallService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      0; // ============================================
      // ; Title: RW Punk API Technical Challenge
      // ; Author: Jason Sullenger
      // ; Date: 11/01/2020
      // ; Description: General Website. Calls Punk API.
      // ; Users can filter and search.
      // ;===========================================

      var APICallService = /*#__PURE__*/function () {
        function APICallService(http) {
          _classCallCheck(this, APICallService);

          this.http = http;
        }

        _createClass(APICallService, [{
          key: "callAPI",
          value: function callAPI() {
            return this.http.get("https://api.punkapi.com/v2/beers?per_page=12");
          }
        }, {
          key: "filterAlcGreater",
          value: function filterAlcGreater() {
            return this.http.get("https://api.punkapi.com/v2/beers?abv_gt=5&per_page=12");
          }
        }, {
          key: "filterAlcLess",
          value: function filterAlcLess() {
            return this.http.get("https://api.punkapi.com/v2/beers?abv_lt=5&per_page=12");
          }
        }, {
          key: "searchByName",
          value: function searchByName(searchString) {
            return this.http.get("https://api.punkapi.com/v2/beers?beer_name=" + searchString + "&per_page=12");
          }
        }, {
          key: "filterBitterness",
          value: function filterBitterness(bittNum) {
            return this.http.get("https://api.punkapi.com/v2/beers?ibu_lt=" + bittNum + "&per_page=12");
          }
        }, {
          key: "callNextPage",
          value: function callNextPage(pgNum, filter, bittNum) {
            if (filter.name) {
              return this.http.get("https://api.punkapi.com/v2/beers?beer_name=" + filter.name + "&per_page=12&page=" + pgNum);
            } else if (filter.alcoholContent) {
              if (filter.alcoholContent == "Greater") {
                return this.http.get("https://api.punkapi.com/v2/beers?abv_gt=5&per_page=12&page=" + pgNum);
              } else {
                return this.http.get("https://api.punkapi.com/v2/beers?abv_lt=5&per_page=12&page=" + pgNum);
              }
            } else if (filter.bitterness) {
              return this.http.get("https://api.punkapi.com/v2/beers?ibu_lt=" + bittNum + "&per_page=12&page=" + pgNum);
            } else {
              return this.http.get("https://api.punkapi.com/v2/beers?page=" + pgNum + "&per_page=12");
            }
          }
        }]);

        return APICallService;
      }();

      APICallService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      APICallService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
      })], APICallService);
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map