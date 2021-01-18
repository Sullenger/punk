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
      // ; Date: 11/01/2021
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
              // width: "30%",
              // height: "60%",
              disableClose: true,
              panelClass: "custom-Age-Dialog",
              backdropClass: "AgeDialogStyling"
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


      __webpack_exports__["default"] = "@media screen and (min-width: 1025px) {\r\n  .aboutUs {\r\n    margin: 150px auto 0px auto;\r\n    width: 80%;\r\n  }\r\n  .aboutImg {\r\n    width: 35%;\r\n  }\r\n  .aboutText {\r\n    width: 55%;\r\n  }\r\n}\r\n/* Phone */\r\n@media screen and (max-width: 600px) {\r\n  .aboutUs {\r\n    margin: 125px auto 150px auto;\r\n    width: 100%;\r\n  }\r\n  .aboutImg {\r\n    width: 75%;\r\n  }\r\n  .aboutText {\r\n    margin-top: 25px;\r\n    width: 100%;\r\n  }\r\n}\r\n/* Tablet */\r\n@media screen and (max-width: 1025px) and (min-width: 601px) {\r\n  .aboutUs {\r\n    margin: 150px auto 150px auto;\r\n    width: 100%;\r\n  }\r\n  .aboutImg {\r\n    width: 45%;\r\n  }\r\n  .aboutText {\r\n    width: 100%;\r\n  }\r\n}\r\n/* Main Styling */\r\n.aboutRow {\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  justify-content: space-around;\r\n}\r\n.aboutCard {\r\n  background-color: lightgray;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LXVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLDJCQUEyQjtJQUMzQixVQUFVO0VBQ1o7RUFDQTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7QUFDQSxVQUFVO0FBQ1Y7RUFDRTtJQUNFLDZCQUE2QjtJQUM3QixXQUFXO0VBQ2I7RUFDQTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLFdBQVc7RUFDYjtBQUNGO0FBQ0EsV0FBVztBQUNYO0VBQ0U7SUFDRSw2QkFBNkI7SUFDN0IsV0FBVztFQUNiO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLFdBQVc7RUFDYjtBQUNGO0FBRUEsaUJBQWlCO0FBQ2pCO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2QkFBNkI7QUFDL0I7QUFFQTtFQUNFLDJCQUEyQjtBQUM3QiIsImZpbGUiOiJhYm91dC11cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNXB4KSB7XHJcbiAgLmFib3V0VXMge1xyXG4gICAgbWFyZ2luOiAxNTBweCBhdXRvIDBweCBhdXRvO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICB9XHJcbiAgLmFib3V0SW1nIHtcclxuICAgIHdpZHRoOiAzNSU7XHJcbiAgfVxyXG4gIC5hYm91dFRleHQge1xyXG4gICAgd2lkdGg6IDU1JTtcclxuICB9XHJcbn1cclxuLyogUGhvbmUgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAuYWJvdXRVcyB7XHJcbiAgICBtYXJnaW46IDEyNXB4IGF1dG8gMTUwcHggYXV0bztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAuYWJvdXRJbWcge1xyXG4gICAgd2lkdGg6IDc1JTtcclxuICB9XHJcbiAgLmFib3V0VGV4dCB7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcbi8qIFRhYmxldCAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI1cHgpIGFuZCAobWluLXdpZHRoOiA2MDFweCkge1xyXG4gIC5hYm91dFVzIHtcclxuICAgIG1hcmdpbjogMTUwcHggYXV0byAxNTBweCBhdXRvO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5hYm91dEltZyB7XHJcbiAgICB3aWR0aDogNDUlO1xyXG4gIH1cclxuICAuYWJvdXRUZXh0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuLyogTWFpbiBTdHlsaW5nICovXHJcbi5hYm91dFJvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG59XHJcblxyXG4uYWJvdXRDYXJkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XHJcbn1cclxuIl19 */";
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


      __webpack_exports__["default"] = "<!--\n============================================\n; Title: RW Punk API Technical Challenge\n; Author: Jason Sullenger\n; Date: 11/01/2021\n; Description: General Website. Calls Punk API.\n; Users can filter and search.\n;===========================================\n-->\n\n<div class=\"ageDialog\" id=\"alignCenter\">\n  <img\n    class=\"animatedLogo\"\n    src=\"../../../assets/images/sully-Logo-Animated.gif\"\n    alt=\"Animated logo for Sully Selections\"\n  />\n  <div>\n    <mat-dialog-content>\n      <div *ngIf=\"!underAge\">\n        <p>Are you <strong>21 or older</strong>?</p>\n      </div>\n      <div *ngIf=\"underAge == true\">\n        <h6>Sorry, you must be 21 years or older to enter this site.</h6>\n      </div>\n      <div *ngIf=\"!underAge\" class=\"ageActions\">\n        <button\n          mat-raised-button\n          mat-dialog-close\n          (click)=\"ageVerified()\"\n          color=\"secondary\"\n          class=\"buttonYes buttonMargin\"\n        >\n          Yes\n        </button>\n        <button\n          mat-raised-button\n          color=\"warn\"\n          (click)=\"not21()\"\n          class=\"buttonMargin\"\n        >\n          No\n        </button>\n      </div>\n    </mat-dialog-content>\n  </div>\n</div>\n";
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


      __webpack_exports__["default"] = "@media screen and (min-width: 1025px) {\r\n  .AgeDialogStyling {\r\n    width: 5% !important;\r\n    height: 5%;\r\n  }\r\n  .ageDialog {\r\n    width: 40%;\r\n    font-size: 30px;\r\n    margin: 0px auto 0px auto;\r\n  }\r\n  .ageActions {\r\n    margin: 0px auto 0px auto;\r\n    width: 50%;\r\n  }\r\n  .buttonMargin {\r\n    margin: 10px 0px;\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n/* Phone */\r\n\r\n@media screen and (max-width: 600px) {\r\n  .ageActions {\r\n    margin: 0px auto 0px auto;\r\n  }\r\n}\r\n\r\n/* Tablet */\r\n\r\n@media screen and (min-width: 601) and (max-width: 1025px) {\r\n  .ageDialog {\r\n    width: 100%;\r\n    font-size: 25px;\r\n  }\r\n  .buttonMargin {\r\n    margin: 10px 0px;\r\n    width: 100%;\r\n  }\r\n  .ageActions {\r\n    margin: 0px auto 0px auto;\r\n    width: 25%;\r\n  }\r\n}\r\n\r\n/*Main Styling*/\r\n\r\n.ageDialog {\r\n  background-color: #f6f2f2;\r\n  text-align: center;\r\n}\r\n\r\n.buttonYes {\r\n  background-color: #45a29e;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFnZS1kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0lBQ0Usb0JBQW9CO0lBQ3BCLFVBQVU7RUFDWjtFQUNBO0lBQ0UsVUFBVTtJQUNWLGVBQWU7SUFDZix5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLHlCQUF5QjtJQUN6QixVQUFVO0VBQ1o7RUFDQTtJQUNFLGdCQUFnQjtJQUNoQixXQUFXO0VBQ2I7QUFDRjs7QUFFQSxVQUFVOztBQUNWO0VBQ0U7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRjs7QUFDQSxXQUFXOztBQUNYO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLFdBQVc7RUFDYjtFQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLFVBQVU7RUFDWjtBQUNGOztBQUNBLGVBQWU7O0FBQ2Y7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UseUJBQXlCO0FBQzNCIiwiZmlsZSI6ImFnZS1kaWFsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjVweCkge1xyXG4gIC5BZ2VEaWFsb2dTdHlsaW5nIHtcclxuICAgIHdpZHRoOiA1JSAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA1JTtcclxuICB9XHJcbiAgLmFnZURpYWxvZyB7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgbWFyZ2luOiAwcHggYXV0byAwcHggYXV0bztcclxuICB9XHJcbiAgLmFnZUFjdGlvbnMge1xyXG4gICAgbWFyZ2luOiAwcHggYXV0byAwcHggYXV0bztcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgfVxyXG4gIC5idXR0b25NYXJnaW4ge1xyXG4gICAgbWFyZ2luOiAxMHB4IDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuLyogUGhvbmUgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAuYWdlQWN0aW9ucyB7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvIDBweCBhdXRvO1xyXG4gIH1cclxufVxyXG4vKiBUYWJsZXQgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAxKSBhbmQgKG1heC13aWR0aDogMTAyNXB4KSB7XHJcbiAgLmFnZURpYWxvZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICB9XHJcbiAgLmJ1dHRvbk1hcmdpbiB7XHJcbiAgICBtYXJnaW46IDEwcHggMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5hZ2VBY3Rpb25zIHtcclxuICAgIG1hcmdpbjogMHB4IGF1dG8gMHB4IGF1dG87XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gIH1cclxufVxyXG4vKk1haW4gU3R5bGluZyovXHJcbi5hZ2VEaWFsb2cge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmYyZjI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5idXR0b25ZZXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NWEyOWU7XHJcbn1cclxuIl19 */";
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


      __webpack_exports__["default"] = "@media screen and (min-width: 1025px) {\r\n  .menu {\r\n    height: 100px;\r\n    width: 100%;\r\n  }\r\n  .logoWide {\r\n    width: 225px;\r\n    margin: 5px;\r\n    border-radius: 10px;\r\n  }\r\n  .navigation {\r\n    width: 60%;\r\n    margin-left: 100%;\r\n  }\r\n\r\n  .logoWide:hover {\r\n    transform: scale(1.05);\r\n    -webkit-transform: scale(1.05);\r\n    -ms-transform: scale(1.05);\r\n    box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.5);\r\n    -webkit-box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.5);\r\n    -moz-box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.5);\r\n  }\r\n}\r\n/* Phone */\r\n@media screen and (max-width: 600px) {\r\n  .menu {\r\n    height: 12%;\r\n    width: 100%;\r\n    justify-content: space-between;\r\n  }\r\n  .logoWide {\r\n    width: 35%;\r\n    margin: auto 20px;\r\n  }\r\n  .mobileNav {\r\n    width: 5%;\r\n    margin: auto 20px;\r\n  }\r\n  .logoWide > img {\r\n    width: 100%;\r\n  }\r\n}\r\n/* Tablet */\r\n@media screen and (max-width: 1025px) and (min-width: 601px) {\r\n  .menu {\r\n    height: 100px;\r\n    width: 100%;\r\n    justify-content: space-between;\r\n  }\r\n  .logoWide {\r\n    width: 35%;\r\n    margin: auto 2%;\r\n  }\r\n  .mobileNav {\r\n    width: 5%;\r\n    margin: auto 20px;\r\n  }\r\n  .logoWide > img {\r\n    width: 65%;\r\n  }\r\n}\r\n.menu {\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n}\r\n.menu {\r\n  position: fixed;\r\n  top: 0;\r\n  z-index: 1000;\r\n  color: white;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsV0FBVztFQUNiO0VBQ0E7SUFDRSxZQUFZO0lBQ1osV0FBVztJQUNYLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsVUFBVTtJQUNWLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUIsMEJBQTBCO0lBQzFCLDhDQUE4QztJQUM5QyxzREFBc0Q7SUFDdEQsbURBQW1EO0VBQ3JEO0FBQ0Y7QUFDQSxVQUFVO0FBQ1Y7RUFDRTtJQUNFLFdBQVc7SUFDWCxXQUFXO0lBQ1gsOEJBQThCO0VBQ2hDO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxTQUFTO0lBQ1QsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7QUFDRjtBQUNBLFdBQVc7QUFDWDtFQUNFO0lBQ0UsYUFBYTtJQUNiLFdBQVc7SUFDWCw4QkFBOEI7RUFDaEM7RUFDQTtJQUNFLFVBQVU7SUFDVixlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxTQUFTO0lBQ1QsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7QUFDRjtBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixhQUFhO0VBQ2IsWUFBWTtBQUNkIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNXB4KSB7XHJcbiAgLm1lbnUge1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAubG9nb1dpZGUge1xyXG4gICAgd2lkdGg6IDIyNXB4O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIH1cclxuICAubmF2aWdhdGlvbiB7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAubG9nb1dpZGU6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAycHggMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDJweCAycHggMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMnB4IDJweCAycHggMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICB9XHJcbn1cclxuLyogUGhvbmUgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAubWVudSB7XHJcbiAgICBoZWlnaHQ6IDEyJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxuICAubG9nb1dpZGUge1xyXG4gICAgd2lkdGg6IDM1JTtcclxuICAgIG1hcmdpbjogYXV0byAyMHB4O1xyXG4gIH1cclxuICAubW9iaWxlTmF2IHtcclxuICAgIHdpZHRoOiA1JTtcclxuICAgIG1hcmdpbjogYXV0byAyMHB4O1xyXG4gIH1cclxuICAubG9nb1dpZGUgPiBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcbi8qIFRhYmxldCAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI1cHgpIGFuZCAobWluLXdpZHRoOiA2MDFweCkge1xyXG4gIC5tZW51IHtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcbiAgLmxvZ29XaWRlIHtcclxuICAgIHdpZHRoOiAzNSU7XHJcbiAgICBtYXJnaW46IGF1dG8gMiU7XHJcbiAgfVxyXG4gIC5tb2JpbGVOYXYge1xyXG4gICAgd2lkdGg6IDUlO1xyXG4gICAgbWFyZ2luOiBhdXRvIDIwcHg7XHJcbiAgfVxyXG4gIC5sb2dvV2lkZSA+IGltZyB7XHJcbiAgICB3aWR0aDogNjUlO1xyXG4gIH1cclxufVxyXG5cclxuLm1lbnUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcclxufVxyXG5cclxuLm1lbnUge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgei1pbmRleDogMTAwMDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuIl19 */";
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


      __webpack_exports__["default"] = "<!--\n============================================\n; Title: RW Punk API Technical Challenge\n; Author: Jason Sullenger\n; Date: 11/01/2021\n; Description: General Website. Calls Punk API.\n; Users can filter and search.\n;===========================================\n-->\n\n<div class=\"footer\">\n  <p>Copyright &#169; 2021. Jason Sullenger. All Rights Reserved.</p>\n</div>\n";
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


      __webpack_exports__["default"] = "<!--\n============================================\n; Title: RW Punk API Technical Challenge\n; Author: Jason Sullenger\n; Date: 11/01/2021\n; Description: General Website. Calls Punk API.\n; Users can filter and search.\n;===========================================\n-->\n\n<div class=\"contactUs\">\n  <mat-card class=\"contactCard\">\n    <mat-card-header>\n      <mat-card-title>Contact Us</mat-card-title>\n    </mat-card-header>\n    <mat-card-content class=\"contactContent\">\n      <div class=\"contactRow\">\n        <div class=\"contactPhone\">\n          <i class=\"fas fa-phone-alt fa-2x\"></i>\n\n          <a href=\"#\"><h6>555-555-5555</h6></a>\n        </div>\n        <div class=\"contactEmail\">\n          <i class=\"far fa-envelope fa-2x\"></i>\n          <a href=\"#\"><h6>fakeEmail@fakeDomain.com</h6></a>\n        </div>\n        <div class=\"contactAddress\">\n          <i class=\"far fa-address-card fa-2x\"></i>\n          <h6>\n            <strong>Sully Selections</strong>\n            <br />\n            123 Fake Address St\n            <br />\n            Anytown, ID 12345\n            <br />\n          </h6>\n        </div>\n      </div>\n    </mat-card-content>\n  </mat-card>\n</div>\n";
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
      // ; Date: 11/01/2021
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
        selector: "app-contact-us",
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


      __webpack_exports__["default"] = "@media screen and (min-width: 1025px) {\r\n  .contactUs {\r\n    margin: 150px auto 22% auto;\r\n    width: 30%;\r\n  }\r\n  .contactRow {\r\n    margin-left: 50px;\r\n  }\r\n  .contactPhone {\r\n    width: 100%;\r\n    margin: 10px;\r\n  }\r\n  .contactEmail {\r\n    width: 100%;\r\n    margin: 10px;\r\n  }\r\n  .contactAddress {\r\n    width: 100%;\r\n    margin: 10px;\r\n  }\r\n}\r\n\r\n/* Mobile */\r\n\r\n@media screen and (max-width: 600px) {\r\n  .contactUs {\r\n    margin: 150px auto 52% auto;\r\n    width: 85%;\r\n  }\r\n  .contactCard {\r\n    width: 100%;\r\n  }\r\n  .contactPhone {\r\n    width: 100%;\r\n    margin: 20px 0px;\r\n  }\r\n  .contactEmail {\r\n    width: 100%;\r\n    margin: 20px 0px;\r\n  }\r\n  .contactAddress {\r\n    width: 100%;\r\n    margin: 20px 0px;\r\n  }\r\n}\r\n\r\n/* Tablet */\r\n\r\n@media screen and (max-width: 1024px) and (min-width: 601px) {\r\n  .contactUs {\r\n    margin: 150px auto 52% auto;\r\n    width: 50%;\r\n  }\r\n  .contactCard {\r\n    width: 100%;\r\n  }\r\n  .contactPhone {\r\n    width: 100%;\r\n    margin: 20px;\r\n  }\r\n  .contactEmail {\r\n    width: 100%;\r\n    margin: 20px;\r\n  }\r\n  .contactAddress {\r\n    width: 100%;\r\n    margin: 20px;\r\n  }\r\n}\r\n\r\n/* Main Styling */\r\n\r\n.contactRow {\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  justify-content: space-around;\r\n}\r\n\r\n.contactCard {\r\n  background-color: lightgray;\r\n}\r\n\r\na {\r\n  color: black;\r\n}\r\n\r\ni {\r\n  color: #45a29e;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QtdXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0lBQ0UsMkJBQTJCO0lBQzNCLFVBQVU7RUFDWjtFQUNBO0lBQ0UsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsWUFBWTtFQUNkO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsWUFBWTtFQUNkO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsWUFBWTtFQUNkO0FBQ0Y7O0FBRUEsV0FBVzs7QUFDWDtFQUNFO0lBQ0UsMkJBQTJCO0lBQzNCLFVBQVU7RUFDWjtFQUNBO0lBQ0UsV0FBVztFQUNiO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsZ0JBQWdCO0VBQ2xCO0FBQ0Y7O0FBRUEsV0FBVzs7QUFDWDtFQUNFO0lBQ0UsMkJBQTJCO0lBQzNCLFVBQVU7RUFDWjtFQUNBO0lBQ0UsV0FBVztFQUNiO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsWUFBWTtFQUNkO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsWUFBWTtFQUNkO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsWUFBWTtFQUNkO0FBQ0Y7O0FBQ0EsaUJBQWlCOztBQUNqQjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJjb250YWN0LXVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI1cHgpIHtcclxuICAuY29udGFjdFVzIHtcclxuICAgIG1hcmdpbjogMTUwcHggYXV0byAyMiUgYXV0bztcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgfVxyXG4gIC5jb250YWN0Um93IHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gIH1cclxuICAuY29udGFjdFBob25lIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gIH1cclxuICAuY29udGFjdEVtYWlsIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gIH1cclxuICAuY29udGFjdEFkZHJlc3Mge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBNb2JpbGUgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAuY29udGFjdFVzIHtcclxuICAgIG1hcmdpbjogMTUwcHggYXV0byA1MiUgYXV0bztcclxuICAgIHdpZHRoOiA4NSU7XHJcbiAgfVxyXG4gIC5jb250YWN0Q2FyZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLmNvbnRhY3RQaG9uZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMjBweCAwcHg7XHJcbiAgfVxyXG4gIC5jb250YWN0RW1haWwge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDIwcHggMHB4O1xyXG4gIH1cclxuICAuY29udGFjdEFkZHJlc3Mge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDIwcHggMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLyogVGFibGV0ICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkgYW5kIChtaW4td2lkdGg6IDYwMXB4KSB7XHJcbiAgLmNvbnRhY3RVcyB7XHJcbiAgICBtYXJnaW46IDE1MHB4IGF1dG8gNTIlIGF1dG87XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gIH1cclxuICAuY29udGFjdENhcmQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5jb250YWN0UGhvbmUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgfVxyXG4gIC5jb250YWN0RW1haWwge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgfVxyXG4gIC5jb250YWN0QWRkcmVzcyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMjBweDtcclxuICB9XHJcbn1cclxuLyogTWFpbiBTdHlsaW5nICovXHJcbi5jb250YWN0Um93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuXHJcbi5jb250YWN0Q2FyZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG59XHJcblxyXG5hIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbmkge1xyXG4gIGNvbG9yOiAjNDVhMjllO1xyXG59XHJcbiJdfQ== */";
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


      __webpack_exports__["default"] = "@media screen and (min-width: 1025px) {\r\n  .beerPage {\r\n    margin-top: 100px;\r\n  }\r\n  .filter-Section {\r\n    margin-left: 15px;\r\n  }\r\n  .filter-Sidenav-Button {\r\n    margin-top: 15px;\r\n  }\r\n  .beerList {\r\n    margin: 0px auto 0px auto;\r\n    width: 100%;\r\n  }\r\n  .beerRow {\r\n    margin: 0px auto 0px auto;\r\n    width: 100%;\r\n  }\r\n  .beerTile {\r\n    margin: 50px auto;\r\n  }\r\n  .beerCard {\r\n    text-align: center;\r\n    margin: 50px auto;\r\n    width: 300px;\r\n  }\r\n  .beerImage {\r\n    height: 300px;\r\n  }\r\n  .bitterness-Range {\r\n    padding: 30px 0px;\r\n  }\r\n}\r\n/* Phone */\r\n@media screen and (max-width: 600px) {\r\n  .beerPage {\r\n    margin-top: 75px;\r\n  }\r\n  .filter-Section {\r\n    margin-left: 5px;\r\n  }\r\n  .filter-Sidenav-Button {\r\n    margin-top: 15px;\r\n  }\r\n  .beerTile {\r\n    margin: 10px auto;\r\n  }\r\n  .beerCard {\r\n    text-align: center;\r\n    margin: 15px auto;\r\n    width: 300px;\r\n  }\r\n  .beerImage {\r\n    height: 300px;\r\n  }\r\n  .bitterness-Range {\r\n    padding: 40px 0px;\r\n  }\r\n}\r\n/* Tablet */\r\n@media screen and (max-width: 1025px) and (min-width: 601px) {\r\n  .beerPage {\r\n    margin-top: 100px;\r\n  }\r\n  .filter-Section {\r\n    margin-left: 5px;\r\n  }\r\n  .filter-Sidenav-Button {\r\n    margin-top: 5px;\r\n  }\r\n  .beerCard {\r\n    text-align: center;\r\n    margin: 20px auto;\r\n    width: 260px;\r\n  }\r\n  .beerImage {\r\n    height: 250px;\r\n  }\r\n  .bitterness-Range {\r\n    padding: 30px 0px;\r\n  }\r\n}\r\n/* Main Styling */\r\n.beerRow {\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  justify-content: space-around;\r\n}\r\n.beerPage,\r\n.beerList,\r\n.filter-Section,\r\n.filter-Sidenav {\r\n  background-color: lightgray;\r\n}\r\n.beerCard:hover {\r\n  transform: scale(1.01);\r\n  -webkit-transform: scale(1.01);\r\n  -ms-transform: scale(1.01);\r\n}\r\n/* Pagination */\r\n.pagDiv {\r\n  height: 100px;\r\n  background-color: #0097a7;\r\n  justify-content: center;\r\n  margin: auto auto;\r\n}\r\n.pagination {\r\n  padding-top: 30px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJlZXItcmVzdWx0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSx5QkFBeUI7SUFDekIsV0FBVztFQUNiO0VBQ0E7SUFDRSx5QkFBeUI7SUFDekIsV0FBVztFQUNiO0VBQ0E7SUFDRSxpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsWUFBWTtFQUNkO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLGlCQUFpQjtFQUNuQjtBQUNGO0FBQ0EsVUFBVTtBQUNWO0VBQ0U7SUFDRSxnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsWUFBWTtFQUNkO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLGlCQUFpQjtFQUNuQjtBQUNGO0FBQ0EsV0FBVztBQUNYO0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixZQUFZO0VBQ2Q7RUFDQTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0Y7QUFFQSxpQkFBaUI7QUFDakI7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDZCQUE2QjtBQUMvQjtBQUVBOzs7O0VBSUUsMkJBQTJCO0FBQzdCO0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCLDBCQUEwQjtBQUM1QjtBQUVBLGVBQWU7QUFDZjtFQUNFLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6ImJlZXItcmVzdWx0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNXB4KSB7XHJcbiAgLmJlZXJQYWdlIHtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gIH1cclxuICAuZmlsdGVyLVNlY3Rpb24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgfVxyXG4gIC5maWx0ZXItU2lkZW5hdi1CdXR0b24ge1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICB9XHJcbiAgLmJlZXJMaXN0IHtcclxuICAgIG1hcmdpbjogMHB4IGF1dG8gMHB4IGF1dG87XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLmJlZXJSb3cge1xyXG4gICAgbWFyZ2luOiAwcHggYXV0byAwcHggYXV0bztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAuYmVlclRpbGUge1xyXG4gICAgbWFyZ2luOiA1MHB4IGF1dG87XHJcbiAgfVxyXG4gIC5iZWVyQ2FyZCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDUwcHggYXV0bztcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICB9XHJcbiAgLmJlZXJJbWFnZSB7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gIH1cclxuICAuYml0dGVybmVzcy1SYW5nZSB7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDBweDtcclxuICB9XHJcbn1cclxuLyogUGhvbmUgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAuYmVlclBhZ2Uge1xyXG4gICAgbWFyZ2luLXRvcDogNzVweDtcclxuICB9XHJcbiAgLmZpbHRlci1TZWN0aW9uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgfVxyXG4gIC5maWx0ZXItU2lkZW5hdi1CdXR0b24ge1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICB9XHJcbiAgLmJlZXJUaWxlIHtcclxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gIH1cclxuICAuYmVlckNhcmQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAxNXB4IGF1dG87XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgfVxyXG4gIC5iZWVySW1hZ2Uge1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICB9XHJcbiAgLmJpdHRlcm5lc3MtUmFuZ2Uge1xyXG4gICAgcGFkZGluZzogNDBweCAwcHg7XHJcbiAgfVxyXG59XHJcbi8qIFRhYmxldCAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI1cHgpIGFuZCAobWluLXdpZHRoOiA2MDFweCkge1xyXG4gIC5iZWVyUGFnZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICB9XHJcbiAgLmZpbHRlci1TZWN0aW9uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgfVxyXG4gIC5maWx0ZXItU2lkZW5hdi1CdXR0b24ge1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIH1cclxuICAuYmVlckNhcmQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgICB3aWR0aDogMjYwcHg7XHJcbiAgfVxyXG4gIC5iZWVySW1hZ2Uge1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICB9XHJcbiAgLmJpdHRlcm5lc3MtUmFuZ2Uge1xyXG4gICAgcGFkZGluZzogMzBweCAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBNYWluIFN0eWxpbmcgKi9cclxuLmJlZXJSb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG5cclxuLmJlZXJQYWdlLFxyXG4uYmVlckxpc3QsXHJcbi5maWx0ZXItU2VjdGlvbixcclxuLmZpbHRlci1TaWRlbmF2IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XHJcbn1cclxuXHJcbi5iZWVyQ2FyZDpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XHJcbn1cclxuXHJcbi8qIFBhZ2luYXRpb24gKi9cclxuLnBhZ0RpdiB7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5N2E3O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbjogYXV0byBhdXRvO1xyXG59XHJcblxyXG4ucGFnaW5hdGlvbiB7XHJcbiAgcGFkZGluZy10b3A6IDMwcHg7XHJcbn1cclxuIl19 */";
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
      // ; Date: 11/01/2021
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


      __webpack_exports__["default"] = "<!--\n============================================\n; Title: RW Punk API Technical Challenge\n; Author: Jason Sullenger\n; Date: 11/01/2021\n; Description: General Website. Calls Punk API.\n; Users can filter and search.\n;===========================================\n-->\n\n<div class=\"aboutUs\">\n  <mat-card class=\"aboutCard\">\n    <mat-card-content class=\"aboutContent\">\n      <div class=\"aboutRow\">\n        <div class=\"aboutImg\">\n          <figure>\n            <img\n              src=\"../../../assets/images/Brewery-Common-Area.jpg\"\n              alt=\"Brewery Common Area\"\n            />\n            <figcaption>\n              <span\n                >Photo by\n                <a\n                  href=\"https://unsplash.com/@m_barrifilms?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText\"\n                  >Matt Barringer</a\n                >\n                on\n                <a\n                  href=\"https://unsplash.com/s/photos/brewery-buidling?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText\"\n                  >Unsplash</a\n                ></span\n              >\n            </figcaption>\n          </figure>\n        </div>\n        <div class=\"aboutText\">\n          <h4 id=\"aboutHeader\">About Sully Selections</h4>\n          <br />\n          <p>\n            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste et\n            incidunt quasi fugit, quos veniam, nemo deserunt sed animi ullam ea\n            architecto vitae suscipit unde natus nesciunt minima nihil explicabo\n            soluta aliquam? Repellendus, doloremque? Natus laudantium dolores\n            magni repudiandae eveniet reprehenderit amet, sapiente distinctio\n            repellat ipsam molestias facere, odit explicabo.\n          </p>\n          <p>\n            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque\n            nisi odit quasi, sed dignissimos omnis sit mollitia saepe\n            voluptatibus iste sequi laudantium aliquam hic, error molestias\n            veniam similique quaerat quae.\n          </p>\n          <p>\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea quis\n            impedit fugit beatae, eaque animi harum, enim, earum cum delectus\n            totam numquam! Molestiae minima numquam odio commodi cumque officia,\n            deleniti ab. Temporibus suscipit necessitatibus odio quam. Rerum\n            dolorem quos amet perspiciatis placeat, nam saepe quod iste, magni\n            ipsam debitis. Accusantium quasi quibusdam quod ad nobis, molestiae\n            sit deserunt libero incidunt.\n          </p>\n          <p>\n            Lorem ipsum dolor sit amet consectetur adipisicing elit.\n            Perspiciatis aliquam, optio rerum nam officia distinctio ducimus, at\n            quibusdam ex asperiores error cupiditate id hic debitis\n            reprehenderit. Enim sequi cupiditate aperiam omnis! Voluptates\n            dolorum distinctio praesentium nemo laborum maxime quis aperiam\n            provident nisi amet cum perferendis inventore dolore vel, atque\n            libero.\n          </p>\n          <p>\n            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur,\n            enim atque unde dolores excepturi explicabo amet quibusdam\n            dignissimos perferendis necessitatibus, distinctio repellat harum\n            ullam! Eligendi adipisci ex quam a aperiam cum accusamus tempora,\n            ut, et asperiores praesentium veritatis atque eveniet expedita\n            molestias possimus itaque laboriosam qui animi repellat! Dignissimos\n            saepe dolorum cum distinctio, quos quidem soluta modi vero tempore\n            ea, ad, repudiandae inventore! Facere asperiores libero iure,\n            nostrum quis culpa ut consequatur voluptas ullam! Omnis.\n          </p>\n        </div>\n      </div>\n    </mat-card-content>\n  </mat-card>\n</div>\n";
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


      __webpack_exports__["default"] = "<!--\n============================================\n; Title: RW Punk API Technical Challenge\n; Author: Jason Sullenger\n; Date: 11/01/2021\n; Description: General Website. Calls Punk API.\n; Users can filter and search.\n;===========================================\n-->\n\n<div class=\"beerDialog\" *ngIf=\"brew\">\n  <h2 mat-dialog-title>{{ brew.name }}</h2>\n  <mat-dialog-content>\n    <div class=\"dialogRow\">\n      <div class=\"dialogImage\">\n        <img\n          class=\"beerImage\"\n          src=\"{{ brew.image_url }}\"\n          alt=\"Image of {{ brew.name }} bottle\"\n        />\n      </div>\n      <div class=\"dialogText\">\n        <ul>\n          <li><strong>Originated:</strong> {{ brew.first_brewed }}</li>\n          <li><strong>Alcohol by volume:</strong> {{ brew.abv }}</li>\n          <li><strong>Bitterness Levels:</strong> {{ brew.ibu }}</li>\n          <li><strong>Contributed by:</strong> {{ brew.contributed_by }}</li>\n          <li><strong>Pairs well with:</strong></li>\n          <ul>\n            <li *ngFor=\"let food of brew.food_pairing\">{{ food }}</li>\n          </ul>\n          <li>\n            <strong>Volume:</strong> {{ brew.volume.value }}\n            {{ brew.volume.unit }}\n          </li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"dialogDescription\">\n      <h5>Description:</h5>\n      <p>{{ brew.description }}</p>\n    </div>\n  </mat-dialog-content>\n  <mat-dialog-actions>\n    <button mat-raised-button mat-dialog-close color=\"accent\">Close</button>\n  </mat-dialog-actions>\n</div>\n";
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


      __webpack_exports__["default"] = "<!--\n============================================\n; Title: RW Punk API Technical Challenge\n; Author: Jason Sullenger\n; Date: 11/01/2021\n; Description: General Website. Calls Punk API.\n; Users can filter and search.\n;===========================================\n-->\n\n<div>\n  <!-- Header -->\n  <div>\n    <app-header></app-header>\n  </div>\n\n  <!-- Main Content -->\n  <div>\n    <router-outlet></router-outlet>\n  </div>\n\n  <!-- Footer -->\n  <div>\n    <app-footer></app-footer>\n  </div>\n</div>\n";
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
      // ; Date: 11/01/2021
      // ; Description: General Website. Calls Punk API.
      // ; Users can filter and search.
      // ;===========================================
      // Components
      // End Components
      // Angular Material Start
      // Angular Material Finish


      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"], _pages_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"], _pages_beer_results_beer_results_component__WEBPACK_IMPORTED_MODULE_12__["BeerResultsComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_15__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"], _pages_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_13__["ContactUsComponent"], _pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_14__["AboutUsComponent"], _pages_beer_dialog_beer_dialog_component__WEBPACK_IMPORTED_MODULE_17__["BeerDialogComponent"], _pages_age_dialog_age_dialog_component__WEBPACK_IMPORTED_MODULE_18__["AgeDialogComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"], // Start Angular Materials
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_20__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__["MatIconModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__["MatMenuModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_23__["MatToolbarModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_24__["MatCardModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_25__["MatInputModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_26__["MatSelectModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_27__["MatGridListModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_28__["MatExpansionModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_29__["MatFormFieldModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_30__["MatSliderModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_31__["MatSidenavModule"] // End Angular Materials
        ],
        providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__["CookieService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]],
        entryComponents: []
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


      __webpack_exports__["default"] = "<!--\n============================================\n; Title: RW Punk API Technical Challenge\n; Author: Jason Sullenger\n; Date: 11/01/2021\n; Description: General Website. Calls Punk API.\n; Users can filter and search.\n;===========================================\n-->\n<div class=\"homePage\">\n  <!-- First Row -->\n  <div class=\"main\">\n    <div class=\"aboutUs\">\n      <div class=\"bigText\">\n        <h2>Welcome to Sully Selections</h2>\n        <br />\n      </div>\n      <div class=\"mainText\">\n        <h4>A little about us...</h4>\n        <br />\n        <p>\n          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias nemo\n          laboriosam minus voluptates obcaecati maiores error? Facilis quae\n          obcaecati sed pariatur expedita voluptatum porro sunt incidunt, nihil\n          non, optio enim, quasi totam. Porro tempora nulla iste consequuntur\n          consequatur incidunt, itaque veritatis ex necessitatibus, nisi, fuga\n          ipsa dignissimos sit earum temporibus.\n        </p>\n        <p>\n          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem\n          harum, dolore quae tempora quaerat quam consequuntur possimus\n          distinctio numquam, recusandae facilis veniam? Quisquam, minus\n          corrupti?\n        </p>\n        <button\n          id=\"storyButton\"\n          mat-raised-button\n          (click)=\"navigateAbout()\"\n          color=\"warn\"\n        >\n          <span>The rest of the story</span>\n        </button>\n      </div>\n    </div>\n    <div class=\"carousel\">\n      <div\n        id=\"carouselExampleCaptions\"\n        class=\"carousel slide\"\n        data-ride=\"carousel\"\n        data-interval=\"4000\"\n      >\n        <ol class=\"carousel-indicators\">\n          <li\n            data-target=\"#carouselExampleCaptions\"\n            data-slide-to=\"0\"\n            class=\"active\"\n          ></li>\n          <li data-target=\"#carouselExampleCaptions\" data-slide-to=\"1\"></li>\n          <li data-target=\"#carouselExampleCaptions\" data-slide-to=\"2\"></li>\n        </ol>\n        <div class=\"carousel-inner\">\n          <div class=\"carousel-item active\">\n            <img\n              src=\"../../../assets/images/brewery-One.jpg\"\n              class=\"d-block w-100\"\n              alt=\"Image of brewery stills\"\n            />\n            <div class=\"carousel-caption d-none d-md-block\">\n              <span\n                >Photo by\n                <a\n                  href=\"https://unsplash.com/@vogel11?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText\"\n                  >Daniel Vogel</a\n                >\n                on\n                <a\n                  href=\"https://unsplash.com/s/photos/brewery?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText\"\n                  >Unsplash</a\n                ></span\n              >\n            </div>\n          </div>\n          <div class=\"carousel-item\">\n            <img\n              src=\"../../../assets/images/brewery-Two.jpg\"\n              class=\"d-block w-100\"\n              alt=\"Image of beer being poured via tap\"\n            />\n            <div class=\"carousel-caption d-none d-md-block\">\n              <span\n                >Photo by\n                <a\n                  href=\"https://unsplash.com/@louishansel?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText\"\n                  >Louis Hansel @shotsoflouis</a\n                >\n                on\n                <a\n                  href=\"https://unsplash.com/s/photos/brewery?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText\"\n                  >Unsplash</a\n                ></span\n              >\n            </div>\n          </div>\n          <div class=\"carousel-item\">\n            <img\n              src=\"../../../assets/images/brewery-Three.jpg\"\n              class=\"d-block w-100\"\n              alt=\"Image of brewers inspecting their finished product\"\n            />\n            <div class=\"carousel-caption d-none d-md-block\">\n              <span\n                >Photo by\n                <a\n                  href=\"https://unsplash.com/@elevatebeer?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText\"\n                  >Elevate</a\n                >\n                on\n                <a\n                  href=\"https://unsplash.com/s/photos/brewery?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText\"\n                  >Unsplash</a\n                ></span\n              >\n            </div>\n          </div>\n        </div>\n        <a\n          class=\"carousel-control-prev\"\n          href=\"#carouselExampleCaptions\"\n          role=\"button\"\n          data-slide=\"prev\"\n        >\n          <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n          <span class=\"sr-only\">Previous</span>\n        </a>\n        <a\n          class=\"carousel-control-next\"\n          href=\"#carouselExampleCaptions\"\n          role=\"button\"\n          data-slide=\"next\"\n        >\n          <span class=\"sr-only\">Next</span>\n          <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n        </a>\n      </div>\n    </div>\n    <br />\n  </div>\n  <div class=\"secondRow\">\n    <div class=\"image\">\n      <img\n        id=\"imageWidth\"\n        src=\"../../../assets/images/beer-Three.png\"\n        alt=\"Beer Stein\"\n      />\n    </div>\n    <div class=\"textBox\">\n      <h4>What sets us apart</h4>\n      Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis error\n      porro voluptates provident. Laudantium nobis ducimus, et ab iste at non\n      nemo obcaecati tempora vitae dicta voluptates, tempore qui eveniet sint\n      cum fugiat vel cumque maxime? Omnis laudantium tenetur, eaque architecto\n      nobis, dolores, repudiandae officia doloremque eveniet aut magnam\n      consectetur. Lorem ipsum, dolor sit amet consectetur adipisicing elit.\n      Laudantium id magnam totam explicabo cum neque, quam aspernatur cumque\n      omnis quidem tempore necessitatibus itaque nobis ab!\n    </div>\n  </div>\n  <br />\n  <div class=\"moreInfo\">\n    <div class=\"location\">\n      <h3>Location & Hours</h3>\n      <div class=\"textSize\">\n        <br />\n        <address>\n          <strong>\n            123 Fake Address St\n            <br />\n            Anytown, ID 12345\n            <br />\n          </strong>\n        </address>\n        <hr />\n        <p><strong>Mon-Thu</strong> 10:00-8:00pm</p>\n        <p><strong>Fri & Sat</strong> 10:00-11:00pm</p>\n        <p><strong>Closed Sunday</strong></p>\n      </div>\n    </div>\n    <div class=\"social\">\n      <h3 class=\"marginBottom\">Social Media</h3>\n      <a href=\"\"><i class=\"far fa-envelope fa-2x\"></i></a>\n      <br />\n      <a href=\"\"><i class=\"fab fa-facebook-f fa-2x\"></i></a>\n      <br />\n      <a href=\"\"><i class=\"fab fa-instagram fa-2x\"></i></a>\n      <br />\n      <a href=\"\"><i class=\"fab fa-twitter fa-2x\"></i></a>\n      <br />\n      <a href=\"\"><i class=\"fab fa-youtube fa-2x\"></i></a>\n      <br />\n    </div>\n    <div class=\"links\">\n      <h3 class=\"marginBottom\">Additional Info</h3>\n      <a href=\"\" id=\"fontLarge\">News</a>\n      <br />\n      <a href=\"\" id=\"fontLarge\">Careers</a>\n      <br />\n      <a href=\"\" id=\"fontLarge\"> Support</a>\n      <br />\n      <a href=\"\" id=\"fontLarge\">FAQ</a>\n      <br />\n      <a href=\"\" id=\"fontLarge\">Privacy Policy</a>\n    </div>\n  </div>\n</div>\n";
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
      // ; Date: 11/01/2021
      // ; Description: General Website. Calls Punk API.
      // ; Users can filter and search.
      // ;===========================================


      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent(router) {
          _classCallCheck(this, HeaderComponent);

          this.router = router;
          this.mobile = null;
        }

        _createClass(HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.mobile = null;

            if (window.screen.width < 1025) {
              this.mobile = true;
            }
          }
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
        selector: "app-header",
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
      // ; Date: 11/01/2021
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


      __webpack_exports__["default"] = "@media screen and (min-width: 1025px) {\r\n  img {\r\n    height: 250px;\r\n  }\r\n  .beerDialog {\r\n    width: 600px;\r\n  }\r\n  .dialogImage {\r\n    width: 30%;\r\n    height: 100px;\r\n  }\r\n  .dialogText {\r\n    width: 60%;\r\n  }\r\n  .dialogDescription {\r\n    margin: 25px;\r\n  }\r\n}\r\n/* Phone */\r\n@media screen and (max-width: 600px) {\r\n  .beerDialog {\r\n    width: 95%;\r\n    margin: 0px auto;\r\n  }\r\n  .beerImage {\r\n    height: 300px;\r\n    margin: 0px auto;\r\n  }\r\n  .dialogText {\r\n    width: 100%;\r\n  }\r\n}\r\n/* Tablet */\r\n@media screen and (max-width: 1025px) and (min-width: 601px) {\r\n  img {\r\n    height: 300px;\r\n  }\r\n  .beerDialog {\r\n    width: 600px;\r\n  }\r\n  .dialogImage {\r\n    width: 30%;\r\n    height: 100px;\r\n  }\r\n  .dialogText {\r\n    width: 60%;\r\n  }\r\n  .dialogDescription {\r\n    margin: 50px 5px 25px 5px;\r\n    padding-right: 25px;\r\n  }\r\n}\r\n.dialogRow {\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  justify-content: space-around;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJlZXItZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsWUFBWTtFQUNkO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsYUFBYTtFQUNmO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLFlBQVk7RUFDZDtBQUNGO0FBQ0EsVUFBVTtBQUNWO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7QUFDRjtBQUNBLFdBQVc7QUFDWDtFQUNFO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLFVBQVU7SUFDVixhQUFhO0VBQ2Y7RUFDQTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLG1CQUFtQjtFQUNyQjtBQUNGO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDZCQUE2QjtBQUMvQiIsImZpbGUiOiJiZWVyLWRpYWxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNXB4KSB7XHJcbiAgaW1nIHtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgfVxyXG4gIC5iZWVyRGlhbG9nIHtcclxuICAgIHdpZHRoOiA2MDBweDtcclxuICB9XHJcbiAgLmRpYWxvZ0ltYWdlIHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gIH1cclxuICAuZGlhbG9nVGV4dCB7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gIH1cclxuICAuZGlhbG9nRGVzY3JpcHRpb24ge1xyXG4gICAgbWFyZ2luOiAyNXB4O1xyXG4gIH1cclxufVxyXG4vKiBQaG9uZSAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC5iZWVyRGlhbG9nIHtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvO1xyXG4gIH1cclxuICAuYmVlckltYWdlIHtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvO1xyXG4gIH1cclxuICAuZGlhbG9nVGV4dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuLyogVGFibGV0ICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjVweCkgYW5kIChtaW4td2lkdGg6IDYwMXB4KSB7XHJcbiAgaW1nIHtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgfVxyXG4gIC5iZWVyRGlhbG9nIHtcclxuICAgIHdpZHRoOiA2MDBweDtcclxuICB9XHJcbiAgLmRpYWxvZ0ltYWdlIHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gIH1cclxuICAuZGlhbG9nVGV4dCB7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gIH1cclxuICAuZGlhbG9nRGVzY3JpcHRpb24ge1xyXG4gICAgbWFyZ2luOiA1MHB4IDVweCAyNXB4IDVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7XHJcbiAgfVxyXG59XHJcbi5kaWFsb2dSb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG4iXX0= */";
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


      __webpack_exports__["default"] = "<!--\n============================================\n; Title: RW Punk API Technical Challenge\n; Author: Jason Sullenger\n; Date: 11/01/2021\n; Description: General Website. Calls Punk API.\n; Users can filter and search.\n;===========================================\n-->\n\n<div>\n  <header>\n    <mat-toolbar class=\"menu\" role=\"header\" color=\"warn\">\n      <div class=\"logoWide\">\n        <img\n          src=\"../../assets/images/sully-Logo-Wide-Inverted.png\"\n          alt=\"Alternate logo for Sully Selections\"\n          (click)=\"navigateHome()\"\n        />\n      </div>\n      <div *ngIf=\"mobile\" class=\"mobileNav\">\n        <button\n          mat-icon-button\n          [matMenuTriggerFor]=\"belowMenu\"\n          aria-label=\"Example icon-button with a menu\"\n        >\n          <i class=\"fas fa-bars fa-2x\"></i>\n        </button>\n        <mat-menu #belowMenu=\"matMenu\">\n          <button mat-button (click)=\"navigateHome()\">\n            <mat-icon id=\"iconMargin\">home</mat-icon>\n            <span>Home</span>\n          </button>\n          <br />\n          <button mat-button (click)=\"navigateBeerList()\">\n            <mat-icon id=\"iconMargin\">local_drink</mat-icon>\n            <span>Available Beer</span>\n          </button>\n          <br />\n          <button mat-button (click)=\"navigateAbout()\">\n            <mat-icon id=\"iconMargin\">business</mat-icon>\n            <span>About Us</span>\n          </button>\n          <br />\n          <button mat-button (click)=\"navigateContact()\">\n            <mat-icon id=\"iconMargin\">email</mat-icon>\n            <span>Contact Us</span>\n          </button>\n        </mat-menu>\n      </div>\n      <div *ngIf=\"!mobile\">\n        <div class=\"navigation\">\n          <button mat-button (click)=\"navigateHome()\">\n            <mat-icon id=\"iconMargin\">home</mat-icon>\n            <span>Home</span>\n          </button>\n          <button mat-button (click)=\"navigateBeerList()\">\n            <mat-icon id=\"iconMargin\">local_drink</mat-icon>\n            <span>Available Beer</span>\n          </button>\n          <button mat-button (click)=\"navigateAbout()\">\n            <mat-icon id=\"iconMargin\">business</mat-icon>\n            <span>About Us</span>\n          </button>\n          <button mat-button (click)=\"navigateContact()\">\n            <mat-icon id=\"iconMargin\">email</mat-icon>\n            <span>Contact Us</span>\n          </button>\n        </div>\n      </div>\n    </mat-toolbar>\n  </header>\n</div>\n";
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
      // ; Date: 11/01/2021
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


      __webpack_exports__["default"] = "<!--\r\n============================================\r\n; Title: RW Punk API Technical Challenge\r\n; Author: Jason Sullenger\r\n; Date: 11/01/2021\r\n; Description: General Website. Calls Punk API.\r\n; Users can filter and search.\r\n;===========================================\r\n-->\r\n<div class=\"beerPage\">\r\n  <!-- Filter -->\r\n  <mat-drawer-container class=\"filter-Section\">\r\n    <mat-drawer #drawer class=\"filter-Sidenav\" mode=\"side\">\r\n      <!-- Search by name -->\r\n      <mat-form-field class=\"search-form-field\">\r\n        <mat-label>Search by name</mat-label>\r\n        <input\r\n          matInput\r\n          type=\"text\"\r\n          [(ngModel)]=\"selectedFilter.name\"\r\n          (keydown)=\"applyFilter('search', selectedFilter)\"\r\n        />\r\n        <button\r\n          mat-button\r\n          *ngIf=\"selectedFilter.name\"\r\n          matSuffix\r\n          mat-icon-button\r\n          aria-label=\"Clear\"\r\n          (click)=\"clearedSearch()\"\r\n        >\r\n          <mat-icon>close</mat-icon>\r\n        </button>\r\n      </mat-form-field>\r\n      <br />\r\n      <!-- Bitterness Range -->\r\n      <div class=\"bitterness-Range\">\r\n        <mat-form-field class=\"rangeRow\">\r\n          <input\r\n            class=\"rangeInput\"\r\n            matInput\r\n            type=\"text\"\r\n            [(ngModel)]=\"selectedFilter.bitterness.min\"\r\n            placeholder=\"Minimum\"\r\n          />\r\n          <button\r\n            mat-button\r\n            *ngIf=\"selectedFilter.bitterness.min\"\r\n            matSuffix\r\n            mat-icon-button\r\n            aria-label=\"Clear\"\r\n            (click)=\"clearedRange('min')\"\r\n          >\r\n            <mat-icon>close</mat-icon>\r\n          </button>\r\n        </mat-form-field>\r\n        <br />\r\n        <mat-form-field class=\"rangeRow\">\r\n          <input\r\n            class=\"rangeInput\"\r\n            matInput\r\n            type=\"text\"\r\n            [(ngModel)]=\"selectedFilter.bitterness.max\"\r\n            placeholder=\"Maximum\"\r\n          />\r\n          <button\r\n            mat-button\r\n            *ngIf=\"selectedFilter.bitterness.max\"\r\n            matSuffix\r\n            mat-icon-button\r\n            aria-label=\"Clear\"\r\n            (click)=\"clearedRange('max')\"\r\n          >\r\n            <mat-icon>close</mat-icon>\r\n          </button>\r\n        </mat-form-field>\r\n\r\n        <div class=\"example-button-row\">\r\n          <button\r\n            mat-raised-button\r\n            color=\"primary\"\r\n            (click)=\"applyFilter('range', selectedFilter)\"\r\n          >\r\n            Submit Range\r\n          </button>\r\n        </div>\r\n\r\n        <!-- <mat-slider\r\n          thumbLabel\r\n          [displayWith]=\"formatLabel\"\r\n          min=\"1\"\r\n          max=\"300\"\r\n          step=\"5\"\r\n          values=\"1,300\"\r\n          [(ngModel)]=\"selectedFilter.bitterness\"\r\n          (click)=\"applyFilter('slider', selectedFilter)\"\r\n        ></mat-slider> -->\r\n      </div>\r\n      <br />\r\n      <!-- Alcohol Content -->\r\n      <mat-form-field appearance=\"fill\" class=\"Alcohol-form-field\">\r\n        <mat-label>Alcohol Content</mat-label>\r\n        <select\r\n          color=\"primary\"\r\n          matNativeControl\r\n          [(ngModel)]=\"selectedFilter.alcoholContent\"\r\n          (click)=\"applyFilter('select', selectedFilter)\"\r\n        >\r\n          <option value=\"\" selected></option>\r\n          <option value=\"Greater\">Greater than 5%</option>\r\n          <option value=\"Lesser\">Less than 5%</option>\r\n        </select>\r\n      </mat-form-field>\r\n    </mat-drawer>\r\n    <div class=\"filter-Sidenav-Button\">\r\n      <button\r\n        type=\"button\"\r\n        mat-raised-button\r\n        color=\"primary\"\r\n        (click)=\"drawer.toggle()\"\r\n      >\r\n        Filters\r\n      </button>\r\n    </div>\r\n    <!-- Beer List -->\r\n    <div class=\"beerList\">\r\n      <div class=\"beerRow\">\r\n        <div *ngFor=\"let beer of beerList\">\r\n          <div class=\"beerTile\">\r\n            <a class=\"\" (click)=\"openDialog(beer)\">\r\n              <div class=\"beerCard\">\r\n                <div class=\"\">\r\n                  <img\r\n                    src=\"{{ beer.image_url }}\"\r\n                    alt=\"Image of {{ beer.name }} bottle\"\r\n                    class=\"beerImage\"\r\n                  />\r\n                </div>\r\n                <div class=\"beerContent textCenter\">\r\n                  <h6>{{ beer.name }}</h6>\r\n                  <p>\r\n                    {{ beer.tagline }}\r\n                  </p>\r\n                  <hr />\r\n                </div>\r\n              </div>\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Pagination -->\r\n    <div class=\"pagDiv\">\r\n      <nav aria-label=\"Page navigation\">\r\n        <ul class=\"pagination justify-content-center\">\r\n          <li class=\"page-item\" [class.disabled]=\"prevDisable\">\r\n            <a class=\"page-link\" (click)=\"previousPage()\">Previous</a>\r\n          </li>\r\n          <li class=\"page-item\">\r\n            <a class=\"page-link\">Page {{ pageNumber }}</a>\r\n          </li>\r\n          <li class=\"page-item\" [class.disabled]=\"nextDisable\">\r\n            <a class=\"page-link\" (click)=\"nextPage()\">Next</a>\r\n          </li>\r\n        </ul>\r\n      </nav>\r\n    </div>\r\n    <!-- End Pagination -->\r\n  </mat-drawer-container>\r\n</div>\r\n";
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
      // ; Date: 11/01/2021
      // ; Description: General Website. Calls Punk API.
      // ; Users can filter and search.
      // ;===========================================


      var BeerResultsComponent = /*#__PURE__*/function () {
        function BeerResultsComponent(api, dialog // private router: Router
        ) {
          _classCallCheck(this, BeerResultsComponent);

          this.api = api;
          this.dialog = dialog;
          this.noResult = false;
          this.panelOpenState = false;
          this.prevDisable = true;
          this.nextDisable = false;
          this.selectedFilter = {
            alcoholContent: "",
            name: "",
            bitterness: {
              min: null,
              max: null
            }
          };
        }

        _createClass(BeerResultsComponent, [{
          key: "applyFilter",
          value: function applyFilter(event, selection) {
            var _this = this;

            console.log(event);
            console.log(selection);

            if (event == "range") {
              this.selectedFilter.name = "";
              this.selectedFilter.alcoholContent = "";
              this.api.filterBitterness(selection.bitterness).subscribe(function (data) {
                // Response from API Call
                _this.disableNext(data);

                _this.noResultFound(data);

                _this.beerList = data;
                console.log(data);
                console.log("Result final" + _this.noResult);
              });
            } else if (event == "select") {
              this.selectedFilter.name = "";
              this.selectedFilter.bitterness = "";

              if (selection.alcoholContent == "Greater") {
                this.api.filterAlcGreater().subscribe(function (data) {
                  // Response from API Call
                  _this.disableNext(data);

                  _this.noResultFound(data);

                  _this.beerList = data;
                });
              } else if (selection.alcoholContent == "Lesser") {
                this.api.filterAlcLess().subscribe(function (data) {
                  // Response from API Call
                  _this.disableNext(data);

                  _this.noResultFound(data);

                  _this.beerList = data;
                });
              }

              this.pageNumber = 1;
            } else if (event == "search") {
              this.selectedFilter.alcoholContent = "";
              this.selectedFilter.bitterness = "";
              this.selectedFilter.alcoholContent = "";
              this.api.searchByName(this.selectedFilter.name).subscribe(function (data) {
                // Response from API Call
                _this.disableNext(data);

                _this.noResultFound(data);

                _this.beerList = data;
              });
              this.pageNumber = 1;
            } else {
              this.api.callAPI().subscribe(function (data) {
                // Response from API Call
                _this.disableNext(data);

                _this.noResultFound(data);

                _this.beerList = data;
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
          key: "noResultFound",
          value: function noResultFound(data) {
            var instance = Object.keys(data);
            var length = instance.length;
            console.log("Length: " + length);

            if (length == 0) {
              console.log(this.noResult);
              this.noResult = true;
              console.log(this.noResult);
            }
          }
        }, {
          key: "clearedSearch",
          value: function clearedSearch() {
            var _this2 = this;

            this.selectedFilter.name = "";
            this.api.callAPI().subscribe(function (data) {
              // Response from API Call
              _this2.beerList = data;

              _this2.disableNext(data);
            });
          }
        }, {
          key: "clearedRange",
          value: function clearedRange(field) {
            var _this3 = this;

            if (field == "min") {
              this.selectedFilter.bitterness.min = null;
            } else {
              this.selectedFilter.bitterness.max = null;
            }

            if (!this.selectedFilter.bitterness.min && !this.selectedFilter.bitterness.max) {
              this.api.callAPI().subscribe(function (data) {
                // Response from API Call
                _this3.beerList = data;

                _this3.disableNext(data);
              });
            }
          }
        }, {
          key: "openDialog",
          value: function openDialog(beer) {
            var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogConfig"]();
            var beerDialog = this.dialog.open(_beer_dialog_beer_dialog_component__WEBPACK_IMPORTED_MODULE_6__["BeerDialogComponent"], {});
            beerDialog.componentInstance.brew = beer;
          }
        }, {
          key: "pagination",
          value: function pagination(pgNum) {
            var _this4 = this;

            this.pageNumber = pgNum;

            if (this.selectedFilter) {
              this.api.callNextPage(pgNum, this.selectedFilter, this.selectedFilter.bitterness).subscribe(function (data) {
                _this4.beerList = data;

                _this4.disableNext(data);
              });
            } else {
              this.api.callNextPage(pgNum, null, null).subscribe(function (data) {
                _this4.beerList = data;

                _this4.disableNext(data);
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
            this.scrollTop();
          }
        }, {
          key: "previousPage",
          value: function previousPage() {
            var newPgNum = this.pageNumber - 1;
            this.pagination(newPgNum);
            this.scrollTop();
          }
        }, {
          key: "scrollTop",
          value: function scrollTop() {
            window.scrollTo(0, 0);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            this.pageNumber = 1;
            this.api.callAPI().subscribe(function (data) {
              _this5.beerList = data;
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
      // ; Date: 11/01/2021
      // ; Description: General Website. Calls Punk API.
      // ; Users can filter and search.
      // ;===========================================


      var BeerDialogComponent = /*#__PURE__*/function () {
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


      __webpack_exports__["default"] = "@media screen and (min-width: 1026px) {\r\n  /* First Row */\r\n  .main {\r\n    padding-left: 75px;\r\n  }\r\n  .aboutUs {\r\n    width: 35%;\r\n  }\r\n  .carousel {\r\n    width: 65%;\r\n    padding: 5px;\r\n  }\r\n  /* Second Row */\r\n  .secondRow {\r\n    margin-top: 150px;\r\n  }\r\n  .secondRow > .image {\r\n    width: 15%;\r\n  }\r\n  .textBox {\r\n    width: 60%;\r\n    padding: 30px;\r\n    margin: 0px 50px 25px 25px;\r\n    border-radius: 40px;\r\n  }\r\n  /* Third Row */\r\n  .moreInfo {\r\n    margin: 50px auto 50px auto;\r\n  }\r\n  .location,\r\n  .social,\r\n  .links {\r\n    padding-top: 20px;\r\n  }\r\n  .textSize {\r\n    font-size: 14px;\r\n  }\r\n}\r\n\r\n/* Phone */\r\n\r\n@media screen and (max-width: 600px) {\r\n  .main {\r\n    padding-left: 5px;\r\n  }\r\n  .aboutUs {\r\n    width: 100%;\r\n  }\r\n  .carousel {\r\n    width: 100%;\r\n  }\r\n  /* Second Row */\r\n  .secondRow > .image {\r\n    display: none;\r\n  }\r\n  .textBox {\r\n    width: 100%;\r\n    padding: 15px;\r\n  }\r\n  /* Third Row */\r\n  .moreInfo {\r\n    margin: 0px auto;\r\n  }\r\n  .location,\r\n  .social,\r\n  .links {\r\n    padding-top: 20px;\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 1025px) and (min-width: 601px) {\r\n  /* Tablet First Row */\r\n  .aboutUs {\r\n    width: 100%;\r\n    padding-left: 15px;\r\n  }\r\n  .carousel {\r\n    width: 100%;\r\n  }\r\n  /* Tablet Second Row */\r\n  .secondRow > .image {\r\n    width: 35%;\r\n    margin: 25px;\r\n  }\r\n  .textBox {\r\n    width: 100%;\r\n    padding: 30px;\r\n    margin-bottom: 50px;\r\n  }\r\n\r\n  /* Tablet Third Row */\r\n  .moreInfo {\r\n    margin: 0px auto;\r\n  }\r\n  .location,\r\n  .social,\r\n  .links {\r\n    padding-top: 20px;\r\n  }\r\n}\r\n\r\n/* First Row Main Styling*/\r\n\r\n.main {\r\n  margin-top: 150px;\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  justify-content: space-around;\r\n}\r\n\r\n.aboutUs {\r\n  padding: 5px;\r\n  margin-top: 10px;\r\n}\r\n\r\n#storyButton {\r\n  color: white;\r\n  margin-left: 50px;\r\n  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.75);\r\n  -webkit-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.75);\r\n  -moz-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.75);\r\n}\r\n\r\n#storyButton:hover {\r\n  box-shadow: 10px 10px 15px 0px rgba(0, 0, 0, 0.75);\r\n  -webkit-box-shadow: 10px 10px 15px 0px rgba(0, 0, 0, 0.75);\r\n  -moz-box-shadow: 10px 10px 15px 0px rgba(0, 0, 0, 0.75);\r\n  transform: scale(1.05);\r\n  -webkit-transform: scale(1.05);\r\n  -ms-transform: scale(1.05);\r\n}\r\n\r\n.carousel {\r\n  margin: 10px auto 0px auto;\r\n}\r\n\r\n.carousel-caption {\r\n  background-color: rgba(192, 192, 192, 0.5);\r\n  border-radius: 5px;\r\n  width: 50%;\r\n  margin: 0px auto;\r\n}\r\n\r\n.carousel-caption span {\r\n  color: black;\r\n}\r\n\r\n.carousel-control-prev-icon {\r\n  background-color: rgba(192, 192, 192, 0.9);\r\n  box-shadow: 0 0 15px 15px rgba(192, 192, 192, 0.3);\r\n  border-radius: 20px;\r\n}\r\n\r\n.carousel-control-next-icon {\r\n  background-color: rgba(192, 192, 192, 0.9);\r\n  border-radius: 20px;\r\n}\r\n\r\n/* Second Row Main Styling*/\r\n\r\n.secondRow {\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  justify-content: space-around;\r\n  margin-bottom: 50px;\r\n  color: white;\r\n}\r\n\r\n.textBox {\r\n  background-color: #45a29e;\r\n  box-shadow: 10px 10px 15px 0px rgba(0, 0, 0, 0.75);\r\n  -webkit-box-shadow: 10px 10px 15px 0px rgba(0, 0, 0, 0.75);\r\n  -moz-box-shadow: 10px 10px 15px 0px rgba(0, 0, 0, 0.75);\r\n}\r\n\r\n/* Third Row Main Styling */\r\n\r\n.moreInfo {\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  justify-content: space-around;\r\n  text-align: center;\r\n  background-color: #45a29e;\r\n  color: white;\r\n}\r\n\r\n.fa-2x {\r\n  color: white;\r\n  padding: 5px;\r\n}\r\n\r\n.marginBottom {\r\n  margin-bottom: 30px;\r\n}\r\n\r\n#fontLarge {\r\n  font-size: 16px;\r\n  margin-top: 15px;\r\n}\r\n\r\na {\r\n  color: white;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZDtJQUNFLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsVUFBVTtFQUNaO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsWUFBWTtFQUNkO0VBQ0EsZUFBZTtFQUNmO0lBQ0UsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLFVBQVU7SUFDVixhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLG1CQUFtQjtFQUNyQjtFQUNBLGNBQWM7RUFDZDtJQUNFLDJCQUEyQjtFQUM3QjtFQUNBOzs7SUFHRSxpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGVBQWU7RUFDakI7QUFDRjs7QUFFQSxVQUFVOztBQUNWO0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLFdBQVc7RUFDYjtFQUNBO0lBQ0UsV0FBVztFQUNiO0VBQ0EsZUFBZTtFQUNmO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsYUFBYTtFQUNmO0VBQ0EsY0FBYztFQUNkO0lBQ0UsZ0JBQWdCO0VBQ2xCO0VBQ0E7OztJQUdFLGlCQUFpQjtJQUNqQixXQUFXO0VBQ2I7QUFDRjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQjtJQUNFLFdBQVc7SUFDWCxrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLFdBQVc7RUFDYjtFQUNBLHNCQUFzQjtFQUN0QjtJQUNFLFVBQVU7SUFDVixZQUFZO0VBQ2Q7RUFDQTtJQUNFLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0VBQ3JCOztFQUVBLHFCQUFxQjtFQUNyQjtJQUNFLGdCQUFnQjtFQUNsQjtFQUNBOzs7SUFHRSxpQkFBaUI7RUFDbkI7QUFDRjs7QUFDQSwwQkFBMEI7O0FBQzFCO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0FBQy9COztBQUNBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsK0NBQStDO0VBQy9DLHVEQUF1RDtFQUN2RCxvREFBb0Q7QUFDdEQ7O0FBRUE7RUFDRSxrREFBa0Q7RUFDbEQsMERBQTBEO0VBQzFELHVEQUF1RDtFQUN2RCxzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCLDBCQUEwQjtBQUM1Qjs7QUFDQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLDBDQUEwQztFQUMxQyxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLFlBQVk7QUFDZDs7QUFDQTtFQUNFLDBDQUEwQztFQUMxQyxrREFBa0Q7RUFDbEQsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsMENBQTBDO0VBQzFDLG1CQUFtQjtBQUNyQjs7QUFDQSwyQkFBMkI7O0FBQzNCO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixrREFBa0Q7RUFDbEQsMERBQTBEO0VBQzFELHVEQUF1RDtBQUN6RDs7QUFFQSwyQkFBMkI7O0FBQzNCO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI2cHgpIHtcclxuICAvKiBGaXJzdCBSb3cgKi9cclxuICAubWFpbiB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDc1cHg7XHJcbiAgfVxyXG4gIC5hYm91dFVzIHtcclxuICAgIHdpZHRoOiAzNSU7XHJcbiAgfVxyXG4gIC5jYXJvdXNlbCB7XHJcbiAgICB3aWR0aDogNjUlO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gIH1cclxuICAvKiBTZWNvbmQgUm93ICovXHJcbiAgLnNlY29uZFJvdyB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNTBweDtcclxuICB9XHJcbiAgLnNlY29uZFJvdyA+IC5pbWFnZSB7XHJcbiAgICB3aWR0aDogMTUlO1xyXG4gIH1cclxuICAudGV4dEJveCB7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIG1hcmdpbjogMHB4IDUwcHggMjVweCAyNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICB9XHJcbiAgLyogVGhpcmQgUm93ICovXHJcbiAgLm1vcmVJbmZvIHtcclxuICAgIG1hcmdpbjogNTBweCBhdXRvIDUwcHggYXV0bztcclxuICB9XHJcbiAgLmxvY2F0aW9uLFxyXG4gIC5zb2NpYWwsXHJcbiAgLmxpbmtzIHtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIH1cclxuICAudGV4dFNpemUge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxufVxyXG5cclxuLyogUGhvbmUgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAubWFpbiB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICB9XHJcbiAgLmFib3V0VXMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5jYXJvdXNlbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLyogU2Vjb25kIFJvdyAqL1xyXG4gIC5zZWNvbmRSb3cgPiAuaW1hZ2Uge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLnRleHRCb3gge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gIH1cclxuICAvKiBUaGlyZCBSb3cgKi9cclxuICAubW9yZUluZm8ge1xyXG4gICAgbWFyZ2luOiAwcHggYXV0bztcclxuICB9XHJcbiAgLmxvY2F0aW9uLFxyXG4gIC5zb2NpYWwsXHJcbiAgLmxpbmtzIHtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI1cHgpIGFuZCAobWluLXdpZHRoOiA2MDFweCkge1xyXG4gIC8qIFRhYmxldCBGaXJzdCBSb3cgKi9cclxuICAuYWJvdXRVcyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICB9XHJcbiAgLmNhcm91c2VsIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAvKiBUYWJsZXQgU2Vjb25kIFJvdyAqL1xyXG4gIC5zZWNvbmRSb3cgPiAuaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDM1JTtcclxuICAgIG1hcmdpbjogMjVweDtcclxuICB9XHJcbiAgLnRleHRCb3gge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICB9XHJcblxyXG4gIC8qIFRhYmxldCBUaGlyZCBSb3cgKi9cclxuICAubW9yZUluZm8ge1xyXG4gICAgbWFyZ2luOiAwcHggYXV0bztcclxuICB9XHJcbiAgLmxvY2F0aW9uLFxyXG4gIC5zb2NpYWwsXHJcbiAgLmxpbmtzIHtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIH1cclxufVxyXG4vKiBGaXJzdCBSb3cgTWFpbiBTdHlsaW5nKi9cclxuLm1haW4ge1xyXG4gIG1hcmdpbi10b3A6IDE1MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG4uYWJvdXRVcyB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuI3N0b3J5QnV0dG9uIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbiAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiA1cHggNXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICAtbW96LWJveC1zaGFkb3c6IDVweCA1cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG59XHJcblxyXG4jc3RvcnlCdXR0b246aG92ZXIge1xyXG4gIGJveC1zaGFkb3c6IDEwcHggMTBweCAxNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMTBweCAxMHB4IDE1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAxMHB4IDEwcHggMTVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxufVxyXG4uY2Fyb3VzZWwge1xyXG4gIG1hcmdpbjogMTBweCBhdXRvIDBweCBhdXRvO1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtY2FwdGlvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTIsIDE5MiwgMTkyLCAwLjUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB3aWR0aDogNTAlO1xyXG4gIG1hcmdpbjogMHB4IGF1dG87XHJcbn1cclxuLmNhcm91c2VsLWNhcHRpb24gc3BhbiB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcbi5jYXJvdXNlbC1jb250cm9sLXByZXYtaWNvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTIsIDE5MiwgMTkyLCAwLjkpO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxNXB4IDE1cHggcmdiYSgxOTIsIDE5MiwgMTkyLCAwLjMpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuLmNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5MiwgMTkyLCAxOTIsIDAuOSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG4vKiBTZWNvbmQgUm93IE1haW4gU3R5bGluZyovXHJcbi5zZWNvbmRSb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4udGV4dEJveCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ1YTI5ZTtcclxuICBib3gtc2hhZG93OiAxMHB4IDEwcHggMTVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDEwcHggMTBweCAxNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gIC1tb3otYm94LXNoYWRvdzogMTBweCAxMHB4IDE1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbn1cclxuXHJcbi8qIFRoaXJkIFJvdyBNYWluIFN0eWxpbmcgKi9cclxuLm1vcmVJbmZvIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NWEyOWU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZmEtMngge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5tYXJnaW5Cb3R0b20ge1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbiNmb250TGFyZ2Uge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcblxyXG5hIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuIl19 */";
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
      // ; Date: 11/01/2021
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
      "tk/3"); // ============================================
      // ; Title: RW Punk API Technical Challenge
      // ; Author: Jason Sullenger
      // ; Date: 11/01/2021
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
          value: function filterBitterness(object) {
            console.log(object);

            if (object.max && object.min) {
              console.log("API Called");
              return this.http.get("https://api.punkapi.com/v2/beers?ibu_lt=" + object.max + "&ibu_gt=" + object.min + "&per_page=12");
            }

            if (object.max && !object.min) {
              return this.http.get("https://api.punkapi.com/v2/beers?ibu_lt=" + object.max + "&per_page=12");
            } else {
              return this.http.get("https://api.punkapi.com/v2/beers?" + "ibu_gt=" + object.min + "&per_page=12");
            }
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
              if (filter.bitterness.max && filter.bitterness.min) {
                return this.http.get("https://api.punkapi.com/v2/beers?ibu_lt=" + filter.bitterness.max + "&ibu_gt=" + filter.bitterness.min + "&per_page=12&page=" + pgNum);
              }

              if (filter.bitterness.max && !filter.bitterness.min) {
                return this.http.get("https://api.punkapi.com/v2/beers?ibu_lt=" + filter.bitterness.max + "&per_page=12&page=" + pgNum);
              } else {
                return this.http.get("https://api.punkapi.com/v2/beers?" + "ibu_gt=" + filter.bitterness.min + "&per_page=12&page=" + pgNum);
              }
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