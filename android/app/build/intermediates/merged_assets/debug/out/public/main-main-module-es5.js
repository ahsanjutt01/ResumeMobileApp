function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-main-module"], {
  /***/
  "./node_modules/ng-circle-progress/fesm2015/ng-circle-progress.js":
  /*!************************************************************************!*\
    !*** ./node_modules/ng-circle-progress/fesm2015/ng-circle-progress.js ***!
    \************************************************************************/

  /*! exports provided: CircleProgressComponent, CircleProgressOptions, NgCircleProgressModule */

  /***/
  function node_modulesNgCircleProgressFesm2015NgCircleProgressJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CircleProgressComponent", function () {
      return CircleProgressComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CircleProgressOptions", function () {
      return CircleProgressOptions;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgCircleProgressModule", function () {
      return NgCircleProgressModule;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var CircleProgressOptions = function CircleProgressOptions() {
      _classCallCheck(this, CircleProgressOptions);

      this["class"] = '';
      this.backgroundGradient = false;
      this.backgroundColor = 'transparent';
      this.backgroundGradientStopColor = 'transparent';
      this.backgroundOpacity = 1;
      this.backgroundStroke = 'transparent';
      this.backgroundStrokeWidth = 0;
      this.backgroundPadding = 5;
      this.percent = 0;
      this.radius = 90;
      this.space = 4;
      this.toFixed = 0;
      this.maxPercent = 1000;
      this.renderOnClick = true;
      this.units = '%';
      this.unitsFontSize = '10';
      this.unitsFontWeight = 'normal';
      this.unitsColor = '#444444';
      this.outerStrokeGradient = false;
      this.outerStrokeWidth = 8;
      this.outerStrokeColor = '#78C000';
      this.outerStrokeGradientStopColor = 'transparent';
      this.outerStrokeLinecap = 'round';
      this.innerStrokeColor = '#C7E596';
      this.innerStrokeWidth = 4;
      this.titleFormat = undefined;
      this.title = 'auto';
      this.titleColor = '#444444';
      this.titleFontSize = '20';
      this.titleFontWeight = 'normal';
      this.subtitleFormat = undefined;
      this.subtitle = 'progress';
      this.subtitleColor = '#A9A9A9';
      this.subtitleFontSize = '10';
      this.subtitleFontWeight = 'normal';
      this.imageSrc = undefined;
      this.imageHeight = undefined;
      this.imageWidth = undefined;
      this.animation = true;
      this.animateTitle = true;
      this.animateSubtitle = false;
      this.animationDuration = 500;
      this.showTitle = true;
      this.showSubtitle = true;
      this.showUnits = true;
      this.showImage = false;
      this.showBackground = true;
      this.showInnerStroke = true;
      this.clockwise = true;
      this.responsive = false;
      this.startFromZero = true;
      this.showZeroOuterStroke = true;
      this.lazy = false;
    };
    /** @dynamic Prevent compiling error when using type `Document` https://github.com/angular/angular/issues/20351 */


    var CircleProgressComponent = /*#__PURE__*/function () {
      function CircleProgressComponent(defaultOptions, elRef, document) {
        var _this = this;

        _classCallCheck(this, CircleProgressComponent);

        this.elRef = elRef;
        this.document = document;
        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](); // <svg> of component

        this.svgElement = null; // whether <svg> is in viewport

        this.isInViewport = false; // event for notifying viewport change caused by scrolling or resizing

        this.onViewportChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._viewportChangedSubscriber = null;
        this.options = new CircleProgressOptions();
        this.defaultOptions = new CircleProgressOptions();
        this._lastPercent = 0;
        this._gradientUUID = null;

        this.render = function () {
          _this.applyOptions();

          if (_this.options.lazy) {
            // Draw svg if it doesn't exist
            _this.svgElement === null && _this.draw(_this._lastPercent); // Draw it only when it's in the viewport

            if (_this.isInViewport) {
              // Draw it at the latest position when I am in.
              if (_this.options.animation && _this.options.animationDuration > 0) {
                _this.animate(_this._lastPercent, _this.options.percent);
              } else {
                _this.draw(_this.options.percent);
              }

              _this._lastPercent = _this.options.percent;
            }
          } else {
            if (_this.options.animation && _this.options.animationDuration > 0) {
              _this.animate(_this._lastPercent, _this.options.percent);
            } else {
              _this.draw(_this.options.percent);
            }

            _this._lastPercent = _this.options.percent;
          }
        };

        this.polarToCartesian = function (centerX, centerY, radius, angleInDegrees) {
          var angleInRadius = angleInDegrees * Math.PI / 180;
          var x = centerX + Math.sin(angleInRadius) * radius;
          var y = centerY - Math.cos(angleInRadius) * radius;
          return {
            x: x,
            y: y
          };
        };

        this.draw = function (percent) {
          // make percent reasonable
          percent = percent === undefined ? _this.options.percent : Math.abs(percent); // circle percent shouldn't be greater than 100%.

          var circlePercent = percent > 100 ? 100 : percent; // determine box size

          var boxSize = _this.options.radius * 2 + _this.options.outerStrokeWidth * 2;

          if (_this.options.showBackground) {
            boxSize += _this.options.backgroundStrokeWidth * 2 + _this.max(0, _this.options.backgroundPadding * 2);
          } // the centre of the circle


          var centre = {
            x: boxSize / 2,
            y: boxSize / 2
          }; // the start point of the arc

          var startPoint = {
            x: centre.x,
            y: centre.y - _this.options.radius
          }; // get the end point of the arc

          var endPoint = _this.polarToCartesian(centre.x, centre.y, _this.options.radius, 360 * (_this.options.clockwise ? circlePercent : 100 - circlePercent) / 100); // ####################
          // We'll get an end point with the same [x, y] as the start point when percent is 100%, so move x a little bit.


          if (circlePercent === 100) {
            endPoint.x = endPoint.x + (_this.options.clockwise ? -0.01 : +0.01);
          } // largeArcFlag and sweepFlag


          var largeArcFlag, sweepFlag;

          if (circlePercent > 50) {
            var _ref = _this.options.clockwise ? [1, 1] : [1, 0];

            var _ref2 = _slicedToArray(_ref, 2);

            largeArcFlag = _ref2[0];
            sweepFlag = _ref2[1];
          } else {
            var _ref3 = _this.options.clockwise ? [0, 1] : [0, 0];

            var _ref4 = _slicedToArray(_ref3, 2);

            largeArcFlag = _ref4[0];
            sweepFlag = _ref4[1];
          } // percent may not equal the actual percent


          var titlePercent = _this.options.animateTitle ? percent : _this.options.percent;
          var titleTextPercent = titlePercent > _this.options.maxPercent ? "".concat(_this.options.maxPercent.toFixed(_this.options.toFixed), "+") : titlePercent.toFixed(_this.options.toFixed);
          var subtitlePercent = _this.options.animateSubtitle ? percent : _this.options.percent; // get title object

          var title = {
            x: centre.x,
            y: centre.y,
            textAnchor: 'middle',
            color: _this.options.titleColor,
            fontSize: _this.options.titleFontSize,
            fontWeight: _this.options.titleFontWeight,
            texts: [],
            tspans: []
          }; // from v0.9.9, both title and titleFormat(...) may be an array of string.

          if (_this.options.titleFormat !== undefined && _this.options.titleFormat.constructor.name === 'Function') {
            var formatted = _this.options.titleFormat(titlePercent);

            if (formatted instanceof Array) {
              title.texts = _toConsumableArray(formatted);
            } else {
              title.texts.push(formatted.toString());
            }
          } else {
            if (_this.options.title === 'auto') {
              title.texts.push(titleTextPercent);
            } else {
              if (_this.options.title instanceof Array) {
                title.texts = _toConsumableArray(_this.options.title);
              } else {
                title.texts.push(_this.options.title.toString());
              }
            }
          } // get subtitle object


          var subtitle = {
            x: centre.x,
            y: centre.y,
            textAnchor: 'middle',
            color: _this.options.subtitleColor,
            fontSize: _this.options.subtitleFontSize,
            fontWeight: _this.options.subtitleFontWeight,
            texts: [],
            tspans: []
          }; // from v0.9.9, both subtitle and subtitleFormat(...) may be an array of string.

          if (_this.options.subtitleFormat !== undefined && _this.options.subtitleFormat.constructor.name === 'Function') {
            var _formatted = _this.options.subtitleFormat(subtitlePercent);

            if (_formatted instanceof Array) {
              subtitle.texts = _toConsumableArray(_formatted);
            } else {
              subtitle.texts.push(_formatted.toString());
            }
          } else {
            if (_this.options.subtitle instanceof Array) {
              subtitle.texts = _toConsumableArray(_this.options.subtitle);
            } else {
              subtitle.texts.push(_this.options.subtitle.toString());
            }
          } // get units object


          var units = {
            text: "".concat(_this.options.units),
            fontSize: _this.options.unitsFontSize,
            fontWeight: _this.options.unitsFontWeight,
            color: _this.options.unitsColor
          }; // get total count of text lines to be shown

          var rowCount = 0,
              rowNum = 1;
          _this.options.showTitle && (rowCount += title.texts.length);
          _this.options.showSubtitle && (rowCount += subtitle.texts.length); // calc dy for each tspan for title

          if (_this.options.showTitle) {
            var _iterator = _createForOfIteratorHelper(title.texts),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var span = _step.value;
                title.tspans.push({
                  span: span,
                  dy: _this.getRelativeY(rowNum, rowCount)
                });
                rowNum++;
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          } // calc dy for each tspan for subtitle


          if (_this.options.showSubtitle) {
            var _iterator2 = _createForOfIteratorHelper(subtitle.texts),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var _span = _step2.value;
                subtitle.tspans.push({
                  span: _span,
                  dy: _this.getRelativeY(rowNum, rowCount)
                });
                rowNum++;
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          } // create ID for gradient element


          if (null === _this._gradientUUID) {
            _this._gradientUUID = _this.uuid();
          } // Bring it all together


          _this.svg = {
            viewBox: "0 0 ".concat(boxSize, " ").concat(boxSize),
            // Set both width and height to '100%' if it's responsive
            width: _this.options.responsive ? '100%' : boxSize,
            height: _this.options.responsive ? '100%' : boxSize,
            backgroundCircle: {
              cx: centre.x,
              cy: centre.y,
              r: _this.options.radius + _this.options.outerStrokeWidth / 2 + _this.options.backgroundPadding,
              fill: _this.options.backgroundColor,
              fillOpacity: _this.options.backgroundOpacity,
              stroke: _this.options.backgroundStroke,
              strokeWidth: _this.options.backgroundStrokeWidth
            },
            path: {
              // A rx ry x-axis-rotation large-arc-flag sweep-flag x y (https://developer.mozilla.org/en/docs/Web/SVG/Tutorial/Paths#Arcs)
              d: "M ".concat(startPoint.x, " ").concat(startPoint.y, "\n        A ").concat(_this.options.radius, " ").concat(_this.options.radius, " 0 ").concat(largeArcFlag, " ").concat(sweepFlag, " ").concat(endPoint.x, " ").concat(endPoint.y),
              stroke: _this.options.outerStrokeColor,
              strokeWidth: _this.options.outerStrokeWidth,
              strokeLinecap: _this.options.outerStrokeLinecap,
              fill: 'none'
            },
            circle: {
              cx: centre.x,
              cy: centre.y,
              r: _this.options.radius - _this.options.space - _this.options.outerStrokeWidth / 2 - _this.options.innerStrokeWidth / 2,
              fill: 'none',
              stroke: _this.options.innerStrokeColor,
              strokeWidth: _this.options.innerStrokeWidth
            },
            title: title,
            units: units,
            subtitle: subtitle,
            image: {
              x: centre.x - _this.options.imageWidth / 2,
              y: centre.y - _this.options.imageHeight / 2,
              src: _this.options.imageSrc,
              width: _this.options.imageWidth,
              height: _this.options.imageHeight
            },
            outerLinearGradient: {
              id: 'outer-linear-' + _this._gradientUUID,
              colorStop1: _this.options.outerStrokeColor,
              colorStop2: _this.options.outerStrokeGradientStopColor === 'transparent' ? '#FFF' : _this.options.outerStrokeGradientStopColor
            },
            radialGradient: {
              id: 'radial-' + _this._gradientUUID,
              colorStop1: _this.options.backgroundColor,
              colorStop2: _this.options.backgroundGradientStopColor === 'transparent' ? '#FFF' : _this.options.backgroundGradientStopColor
            }
          };
        };

        this.getAnimationParameters = function (previousPercent, currentPercent) {
          var MIN_INTERVAL = 10;
          var times, step, interval;
          var fromPercent = _this.options.startFromZero ? 0 : previousPercent < 0 ? 0 : previousPercent;
          var toPercent = currentPercent < 0 ? 0 : _this.min(currentPercent, _this.options.maxPercent);
          var delta = Math.abs(Math.round(toPercent - fromPercent));

          if (delta >= 100) {
            // we will finish animation in 100 times
            times = 100;

            if (!_this.options.animateTitle && !_this.options.animateSubtitle) {
              step = 1;
            } else {
              // show title or subtitle animation even if the arc is full, we also need to finish it in 100 times.
              step = Math.round(delta / times);
            }
          } else {
            // we will finish in as many times as the number of percent.
            times = delta;
            step = 1;
          } // Get the interval of timer


          interval = Math.round(_this.options.animationDuration / times); // Readjust all values if the interval of timer is extremely small.

          if (interval < MIN_INTERVAL) {
            interval = MIN_INTERVAL;
            times = _this.options.animationDuration / interval;

            if (!_this.options.animateTitle && !_this.options.animateSubtitle && delta > 100) {
              step = Math.round(100 / times);
            } else {
              step = Math.round(delta / times);
            }
          } // step must be greater than 0.


          if (step < 1) {
            step = 1;
          }

          return {
            times: times,
            step: step,
            interval: interval
          };
        };

        this.animate = function (previousPercent, currentPercent) {
          if (_this._timerSubscription && !_this._timerSubscription.closed) {
            _this._timerSubscription.unsubscribe();
          }

          var fromPercent = _this.options.startFromZero ? 0 : previousPercent;
          var toPercent = currentPercent;

          var _this$getAnimationPar = _this.getAnimationParameters(fromPercent, toPercent),
              step = _this$getAnimationPar.step,
              interval = _this$getAnimationPar.interval;

          var count = fromPercent;

          if (fromPercent < toPercent) {
            _this._timerSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(0, interval).subscribe(function () {
              count += step;

              if (count <= toPercent) {
                if (!_this.options.animateTitle && !_this.options.animateSubtitle && count >= 100) {
                  _this.draw(toPercent);

                  _this._timerSubscription.unsubscribe();
                } else {
                  _this.draw(count);
                }
              } else {
                _this.draw(toPercent);

                _this._timerSubscription.unsubscribe();
              }
            });
          } else {
            _this._timerSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(0, interval).subscribe(function () {
              count -= step;

              if (count >= toPercent) {
                if (!_this.options.animateTitle && !_this.options.animateSubtitle && toPercent >= 100) {
                  _this.draw(toPercent);

                  _this._timerSubscription.unsubscribe();
                } else {
                  _this.draw(count);
                }
              } else {
                _this.draw(toPercent);

                _this._timerSubscription.unsubscribe();
              }
            });
          }
        };

        this.emitClickEvent = function (event) {
          if (_this.options.renderOnClick) {
            _this.animate(0, _this.options.percent);
          }

          _this.onClick.emit(event);
        };

        this.applyOptions = function () {
          // the options of <circle-progress> may change already
          for (var _i2 = 0, _Object$keys = Object.keys(_this.options); _i2 < _Object$keys.length; _i2++) {
            var name = _Object$keys[_i2];

            if (_this.hasOwnProperty(name) && _this[name] !== undefined) {
              _this.options[name] = _this[name];
            } else if (_this.templateOptions && _this.templateOptions[name] !== undefined) {
              _this.options[name] = _this.templateOptions[name];
            }
          } // make sure key options valid


          _this.options.radius = Math.abs(+_this.options.radius);
          _this.options.space = +_this.options.space;
          _this.options.percent = +_this.options.percent > 0 ? +_this.options.percent : 0;
          _this.options.maxPercent = Math.abs(+_this.options.maxPercent);
          _this.options.animationDuration = Math.abs(_this.options.animationDuration);
          _this.options.outerStrokeWidth = Math.abs(+_this.options.outerStrokeWidth);
          _this.options.innerStrokeWidth = Math.abs(+_this.options.innerStrokeWidth);
          _this.options.backgroundPadding = +_this.options.backgroundPadding;
        };

        this.getRelativeY = function (rowNum, rowCount) {
          // why '-0.18em'? It's a magic number when property 'alignment-baseline' equals 'baseline'. :)
          var initialOffset = -0.18,
              offset = 1;
          return (initialOffset + offset * (rowNum - rowCount / 2)).toFixed(2) + 'em';
        };

        this.min = function (a, b) {
          return a < b ? a : b;
        };

        this.max = function (a, b) {
          return a > b ? a : b;
        };

        this.uuid = function () {
          // https://www.w3resource.com/javascript-exercises/javascript-math-exercise-23.php
          var dt = new Date().getTime();
          var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (dt + Math.random() * 16) % 16 | 0;
            dt = Math.floor(dt / 16);
            return (c == 'x' ? r : r & 0x3 | 0x8).toString(16);
          });
          return uuid;
        };

        this.findSvgElement = function () {
          if (this.svgElement === null) {
            var tags = this.elRef.nativeElement.getElementsByTagName('svg');

            if (tags.length > 0) {
              this.svgElement = tags[0];
            }
          }
        };

        this.checkViewport = function () {
          _this.findSvgElement();

          var previousValue = _this.isInViewport;
          _this.isInViewport = _this.isElementInViewport(_this.svgElement);

          if (previousValue !== _this.isInViewport) {
            _this.onViewportChanged.emit({
              oldValue: previousValue,
              newValue: _this.isInViewport
            });
          }
        };

        this.onScroll = function (event) {
          _this.checkViewport();
        };

        this.loadEventsForLazyMode = function () {
          if (_this.options.lazy) {
            _this.document.addEventListener('scroll', _this.onScroll, true);

            _this.window.addEventListener('resize', _this.onScroll, true);

            if (_this._viewportChangedSubscriber === null) {
              _this._viewportChangedSubscriber = _this.onViewportChanged.subscribe(function (_ref5) {
                var oldValue = _ref5.oldValue,
                    newValue = _ref5.newValue;
                newValue ? _this.render() : null;
              });
            } // svgElement must be created in DOM before being checked.
            // Is there a better way to check the existence of svgElemnt?


            var _timer = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(0, 50).subscribe(function () {
              _this.svgElement === null ? _this.checkViewport() : _timer.unsubscribe();
            });
          }
        };

        this.unloadEventsForLazyMode = function () {
          // Remove event listeners
          _this.document.removeEventListener('scroll', _this.onScroll, true);

          _this.window.removeEventListener('resize', _this.onScroll, true); // Unsubscribe onViewportChanged


          if (_this._viewportChangedSubscriber !== null) {
            _this._viewportChangedSubscriber.unsubscribe();

            _this._viewportChangedSubscriber = null;
          }
        };

        this.document = document;
        this.window = this.document.defaultView;
        Object.assign(this.options, defaultOptions);
        Object.assign(this.defaultOptions, defaultOptions);
      }

      _createClass(CircleProgressComponent, [{
        key: "isDrawing",
        value: function isDrawing() {
          return this._timerSubscription && !this._timerSubscription.closed;
        }
      }, {
        key: "isElementInViewport",
        value: function isElementInViewport(el) {
          // Return false if el has not been created in page.
          if (el === null || el === undefined) return false; // Check if the element is out of view due to a container scrolling

          var rect = el.getBoundingClientRect(),
              parent = el.parentNode,
              parentRect;

          do {
            parentRect = parent.getBoundingClientRect();
            if (rect.top >= parentRect.bottom) return false;
            if (rect.bottom <= parentRect.top) return false;
            if (rect.left >= parentRect.right) return false;
            if (rect.right <= parentRect.left) return false;
            parent = parent.parentNode;
          } while (parent != this.document.body); // Check its within the document viewport


          if (rect.top >= (this.window.innerHeight || this.document.documentElement.clientHeight)) return false;
          if (rect.bottom <= 0) return false;
          if (rect.left >= (this.window.innerWidth || this.document.documentElement.clientWidth)) return false;
          if (rect.right <= 0) return false;
          return true;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadEventsForLazyMode();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unloadEventsForLazyMode();
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          this.render();

          if ('lazy' in changes) {
            changes.lazy.currentValue ? this.loadEventsForLazyMode() : this.unloadEventsForLazyMode();
          }
        }
      }]);

      return CircleProgressComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], CircleProgressComponent.prototype, "onClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CircleProgressComponent.prototype, "name", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CircleProgressComponent.prototype, "class", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], CircleProgressComponent.prototype, "backgroundGradient", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CircleProgressComponent.prototype, "backgroundColor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CircleProgressComponent.prototype, "backgroundGradientStopColor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CircleProgressComponent.prototype, "backgroundOpacity", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CircleProgressComponent.prototype, "backgroundStroke", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CircleProgressComponent.prototype, "backgroundStrokeWidth", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CircleProgressComponent.prototype, "backgroundPadding", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CircleProgressComponent.prototype, "radius", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CircleProgressComponent.prototype, "space", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CircleProgressComponent.prototype, "percent", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CircleProgressComponent.prototype, "toFixed", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CircleProgressComponent.prototype, "maxPercent", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], CircleProgressComponent.prototype, "renderOnClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CircleProgressComponent.prototype, "units", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CircleProgressComponent.prototype, "unitsFontSize", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CircleProgressComponent.prototype, "unitsFontWeight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CircleProgressComponent.prototype, "unitsColor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], CircleProgressComponent.prototype, "outerStrokeGradient", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CircleProgressComponent.prototype, "outerStrokeWidth", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CircleProgressComponent.prototype, "outerStrokeColor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CircleProgressComponent.prototype, "outerStrokeGradientStopColor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CircleProgressComponent.prototype, "outerStrokeLinecap", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CircleProgressComponent.prototype, "innerStrokeColor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CircleProgressComponent.prototype, "innerStrokeWidth", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function)], CircleProgressComponent.prototype, "titleFormat", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CircleProgressComponent.prototype, "title", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CircleProgressComponent.prototype, "titleColor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CircleProgressComponent.prototype, "titleFontSize", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CircleProgressComponent.prototype, "titleFontWeight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function)], CircleProgressComponent.prototype, "subtitleFormat", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CircleProgressComponent.prototype, "subtitle", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CircleProgressComponent.prototype, "subtitleColor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CircleProgressComponent.prototype, "subtitleFontSize", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CircleProgressComponent.prototype, "subtitleFontWeight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CircleProgressComponent.prototype, "imageSrc", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CircleProgressComponent.prototype, "imageHeight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CircleProgressComponent.prototype, "imageWidth", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], CircleProgressComponent.prototype, "animation", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], CircleProgressComponent.prototype, "animateTitle", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], CircleProgressComponent.prototype, "animateSubtitle", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CircleProgressComponent.prototype, "animationDuration", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], CircleProgressComponent.prototype, "showTitle", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], CircleProgressComponent.prototype, "showSubtitle", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], CircleProgressComponent.prototype, "showUnits", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], CircleProgressComponent.prototype, "showImage", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], CircleProgressComponent.prototype, "showBackground", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], CircleProgressComponent.prototype, "showInnerStroke", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], CircleProgressComponent.prototype, "clockwise", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], CircleProgressComponent.prototype, "responsive", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], CircleProgressComponent.prototype, "startFromZero", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], CircleProgressComponent.prototype, "showZeroOuterStroke", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], CircleProgressComponent.prototype, "lazy", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('options'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", CircleProgressOptions)], CircleProgressComponent.prototype, "templateOptions", void 0);
    CircleProgressComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'circle-progress',
      template: "\n        <svg xmlns=\"http://www.w3.org/2000/svg\" *ngIf=\"svg\"\n             [attr.viewBox]=\"svg.viewBox\" preserveAspectRatio=\"xMidYMid meet\"\n             [attr.height]=\"svg.height\" [attr.width]=\"svg.width\" (click)=\"emitClickEvent($event)\" [attr.class]=\"options.class\">\n            <defs>\n                <linearGradient *ngIf=\"options.outerStrokeGradient\" [attr.id]=\"svg.outerLinearGradient.id\">\n                    <stop offset=\"5%\" [attr.stop-color]=\"svg.outerLinearGradient.colorStop1\"  [attr.stop-opacity]=\"1\"/>\n                    <stop offset=\"95%\" [attr.stop-color]=\"svg.outerLinearGradient.colorStop2\" [attr.stop-opacity]=\"1\"/>\n                </linearGradient>\n                <radialGradient *ngIf=\"options.backgroundGradient\" [attr.id]=\"svg.radialGradient.id\">\n                    <stop offset=\"5%\" [attr.stop-color]=\"svg.radialGradient.colorStop1\" [attr.stop-opacity]=\"1\"/>\n                    <stop offset=\"95%\" [attr.stop-color]=\"svg.radialGradient.colorStop2\" [attr.stop-opacity]=\"1\"/>\n                </radialGradient>\n            </defs>\n            <ng-container *ngIf=\"options.showBackground\">\n                <circle *ngIf=\"!options.backgroundGradient\"\n                        [attr.cx]=\"svg.backgroundCircle.cx\"\n                        [attr.cy]=\"svg.backgroundCircle.cy\"\n                        [attr.r]=\"svg.backgroundCircle.r\"\n                        [attr.fill]=\"svg.backgroundCircle.fill\"\n                        [attr.fill-opacity]=\"svg.backgroundCircle.fillOpacity\"\n                        [attr.stroke]=\"svg.backgroundCircle.stroke\"\n                        [attr.stroke-width]=\"svg.backgroundCircle.strokeWidth\"/>\n                <circle *ngIf=\"options.backgroundGradient\"\n                        [attr.cx]=\"svg.backgroundCircle.cx\"\n                        [attr.cy]=\"svg.backgroundCircle.cy\"\n                        [attr.r]=\"svg.backgroundCircle.r\"\n                        attr.fill=\"url(#{{svg.radialGradient.id}})\"\n                        [attr.fill-opacity]=\"svg.backgroundCircle.fillOpacity\"\n                        [attr.stroke]=\"svg.backgroundCircle.stroke\"\n                        [attr.stroke-width]=\"svg.backgroundCircle.strokeWidth\"/>\n            </ng-container>            \n            <circle *ngIf=\"options.showInnerStroke\"\n                    [attr.cx]=\"svg.circle.cx\"\n                    [attr.cy]=\"svg.circle.cy\"\n                    [attr.r]=\"svg.circle.r\"\n                    [attr.fill]=\"svg.circle.fill\"\n                    [attr.stroke]=\"svg.circle.stroke\"\n                    [attr.stroke-width]=\"svg.circle.strokeWidth\"/>\n            <ng-container *ngIf=\"+options.percent!==0 || options.showZeroOuterStroke\">\n                <path *ngIf=\"!options.outerStrokeGradient\"\n                        [attr.d]=\"svg.path.d\"\n                        [attr.stroke]=\"svg.path.stroke\"\n                        [attr.stroke-width]=\"svg.path.strokeWidth\"\n                        [attr.stroke-linecap]=\"svg.path.strokeLinecap\"\n                        [attr.fill]=\"svg.path.fill\"/>\n                <path *ngIf=\"options.outerStrokeGradient\"\n                        [attr.d]=\"svg.path.d\"\n                        attr.stroke=\"url(#{{svg.outerLinearGradient.id}})\"\n                        [attr.stroke-width]=\"svg.path.strokeWidth\"\n                        [attr.stroke-linecap]=\"svg.path.strokeLinecap\"\n                        [attr.fill]=\"svg.path.fill\"/>\n            </ng-container>\n            <text *ngIf=\"!options.showImage && (options.showTitle || options.showUnits || options.showSubtitle)\"\n                  alignment-baseline=\"baseline\"\n                  [attr.x]=\"svg.circle.cx\"\n                  [attr.y]=\"svg.circle.cy\"\n                  [attr.text-anchor]=\"svg.title.textAnchor\">\n                <ng-container *ngIf=\"options.showTitle\">\n                    <tspan *ngFor=\"let tspan of svg.title.tspans\"\n                           [attr.x]=\"svg.title.x\"\n                           [attr.y]=\"svg.title.y\"\n                           [attr.dy]=\"tspan.dy\"\n                           [attr.font-size]=\"svg.title.fontSize\"\n                           [attr.font-weight]=\"svg.title.fontWeight\"\n                           [attr.fill]=\"svg.title.color\">{{tspan.span}}</tspan>\n                </ng-container>\n                <tspan *ngIf=\"options.showUnits\"\n                       [attr.font-size]=\"svg.units.fontSize\"\n                       [attr.font-weight]=\"svg.units.fontWeight\"\n                       [attr.fill]=\"svg.units.color\">{{svg.units.text}}</tspan>\n                <ng-container *ngIf=\"options.showSubtitle\">\n                    <tspan *ngFor=\"let tspan of svg.subtitle.tspans\"\n                           [attr.x]=\"svg.subtitle.x\"\n                           [attr.y]=\"svg.subtitle.y\"\n                           [attr.dy]=\"tspan.dy\"\n                           [attr.font-size]=\"svg.subtitle.fontSize\"\n                           [attr.font-weight]=\"svg.subtitle.fontWeight\"\n                           [attr.fill]=\"svg.subtitle.color\">{{tspan.span}}</tspan>\n                </ng-container>\n            </text>\n            <image *ngIf=\"options.showImage\" preserveAspectRatio=\"none\" \n                [attr.height]=\"svg.image.height\"\n                [attr.width]=\"svg.image.width\"\n                [attr.xlink:href]=\"svg.image.src\"\n                [attr.x]=\"svg.image.x\"\n                [attr.y]=\"svg.image.y\"\n            />\n        </svg>\n    "
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [CircleProgressOptions, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], Object])], CircleProgressComponent);
    var NgCircleProgressModule_1;

    var NgCircleProgressModule = NgCircleProgressModule_1 = /*#__PURE__*/function () {
      function NgCircleProgressModule() {
        _classCallCheck(this, NgCircleProgressModule);
      }

      _createClass(NgCircleProgressModule, null, [{
        key: "forRoot",
        value: function forRoot() {
          var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          return {
            ngModule: NgCircleProgressModule_1,
            providers: [{
              provide: CircleProgressOptions,
              useValue: options
            }]
          };
        }
      }]);

      return NgCircleProgressModule;
    }();

    NgCircleProgressModule = NgCircleProgressModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      declarations: [CircleProgressComponent],
      exports: [CircleProgressComponent]
    })], NgCircleProgressModule);
    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=ng-circle-progress.js.map

    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainMainPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-title>\n      {{profile.firstName + ' ' + profile.lastName}}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"profile.firstName.length > 0\" [fullscreen]=\"true\">\n  <!-- <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title>User Name</ion-title>\n    </ion-toolbar>\n  </ion-header> -->\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div class=\"ion-text-center\">\n          <img src=\"{{profile.imageUrl}}\"\n          style=\"height: 150px; width: 150px; border-radius: 50%;\" />\n        </div>\n        <!-- <img src=\"https://blog-c7ff.kxcdn.com/blog/wp-content/uploads/2015/11/blog_dev-01-1.jpg\" /> -->\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <div class=\"ion-text-center\">\n          <h1>Hi, I am {{profile.firstName + ' ' + profile.lastName}}</h1>\n          <h5>{{profile.title}}</h5>\n          <p>{{profile.email + ' ' + profile.phone}}</p>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"profile.skills.length > 0\">\n      <ion-col>\n        <div class=\"ion-text-center\">\n          <h1>Skills</h1>\n          <ion-list>\n            <ion-item *ngFor=\"let skill of profile.skills\">\n              <ion-label>{{skill.title}}</ion-label>\n              <circle-progress\n                  [percent]=\"skill.expertiesLevel\"\n                  [radius]=\"50\"\n                  [outerStrokeWidth]=\"12\"\n                  [innerStrokeWidth]=\"6\"\n                  [outerStrokeColor]=\"'#78C000'\"\n                  [innerStrokeColor]=\"'#C7E596'\"\n                  [animation]=\"true\"\n                  [animationDuration]=\"300\"\n                ></circle-progress>\n            </ion-item>\n          </ion-list>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <!-- <ion-card>\n    <img src=\"https://blog-c7ff.kxcdn.com/blog/wp-content/uploads/2015/11/blog_dev-01-1.jpg\" />\n    <ion-card-header>\n      <ion-card-title>Card Title</ion-card-title>\n      <ion-card-subtitle>Card Subtitle</ion-card-subtitle>\n    </ion-card-header>\n  \n    <ion-card-content>\n      Keep close to Nature's heart... and break clear away, once in awhile,\n      and climb a mountain or spend a week in the woods. Wash your spirit clean.\n    </ion-card-content>\n  </ion-card> -->\n</ion-content>\n\n\n";
    /***/
  },

  /***/
  "./src/app/_models/profile.ts":
  /*!************************************!*\
    !*** ./src/app/_models/profile.ts ***!
    \************************************/

  /*! exports provided: Profile */

  /***/
  function srcApp_modelsProfileTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Profile", function () {
      return Profile;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Profile = function Profile() {
      var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var firstName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var lastName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
      var title = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
      var country = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
      var city = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : '';
      var zipCode = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : '';
      var address = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : '';
      var phone = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : '';
      var website = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : '';
      var imageUrl = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : '';
      var to = arguments.length > 11 && arguments[11] !== undefined ? arguments[11] : '';
      var dob = arguments.length > 12 && arguments[12] !== undefined ? arguments[12] : '';
      var gender = arguments.length > 13 && arguments[13] !== undefined ? arguments[13] : true;
      var skills = arguments.length > 14 && arguments[14] !== undefined ? arguments[14] : [];

      _classCallCheck(this, Profile);

      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.title = title;
      this.country = country;
      this.city = city;
      this.zipCode = zipCode;
      this.address = address;
      this.phone = phone;
      this.website = website;
      this.imageUrl = imageUrl;
      this.to = to;
      this.dob = dob;
      this.gender = gender;
      this.skills = skills;
    };
    /***/

  },

  /***/
  "./src/app/main/main-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/main/main-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: MainPageRoutingModule */

  /***/
  function srcAppMainMainRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainPageRoutingModule", function () {
      return MainPageRoutingModule;
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


    var _main_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./main.page */
    "./src/app/main/main.page.ts");

    var routes = [{
      path: '',
      component: _main_page__WEBPACK_IMPORTED_MODULE_3__["MainPage"]
    }];

    var MainPageRoutingModule = function MainPageRoutingModule() {
      _classCallCheck(this, MainPageRoutingModule);
    };

    MainPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MainPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/main/main.module.ts":
  /*!*************************************!*\
    !*** ./src/app/main/main.module.ts ***!
    \*************************************/

  /*! exports provided: MainPageModule */

  /***/
  function srcAppMainMainModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainPageModule", function () {
      return MainPageModule;
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


    var ng_circle_progress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ng-circle-progress */
    "./node_modules/ng-circle-progress/fesm2015/ng-circle-progress.js");
    /* harmony import */


    var _main_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./main-routing.module */
    "./src/app/main/main-routing.module.ts");
    /* harmony import */


    var _main_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./main.page */
    "./src/app/main/main.page.ts");

    var MainPageModule = function MainPageModule() {
      _classCallCheck(this, MainPageModule);
    };

    MainPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _main_routing_module__WEBPACK_IMPORTED_MODULE_6__["MainPageRoutingModule"], ng_circle_progress__WEBPACK_IMPORTED_MODULE_5__["NgCircleProgressModule"].forRoot({
        // set defaults here
        radius: 100,
        outerStrokeWidth: 16,
        innerStrokeWidth: 8,
        outerStrokeColor: '#78C000',
        innerStrokeColor: '#C7E596',
        animationDuration: 300
      })],
      declarations: [_main_page__WEBPACK_IMPORTED_MODULE_7__["MainPage"]]
    })], MainPageModule);
    /***/
  },

  /***/
  "./src/app/main/main.page.scss":
  /*!*************************************!*\
    !*** ./src/app/main/main.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainMainPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbi5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/main/main.page.ts":
  /*!***********************************!*\
    !*** ./src/app/main/main.page.ts ***!
    \***********************************/

  /*! exports provided: MainPage */

  /***/
  function srcAppMainMainPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainPage", function () {
      return MainPage;
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
    /* harmony import */


    var _models_profile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../_models/profile */
    "./src/app/_models/profile.ts");

    var MainPage = /*#__PURE__*/function () {
      function MainPage(commonService) {
        _classCallCheck(this, MainPage);

        this.commonService = commonService;
        this.profile = new _models_profile__WEBPACK_IMPORTED_MODULE_3__["Profile"]();
      }

      _createClass(MainPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          var _this2 = this;

          this.commonService.getProfile().subscribe(function (data) {
            _this2.profile = data;
          }, function (error) {
            debugger;
          });
        }
      }]);

      return MainPage;
    }();

    MainPage.ctorParameters = function () {
      return [{
        type: _services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]
      }];
    };

    MainPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-main',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./main.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./main.page.scss */
      "./src/app/main/main.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]])], MainPage);
    /***/
  }
}]);
//# sourceMappingURL=main-main-module-es5.js.map