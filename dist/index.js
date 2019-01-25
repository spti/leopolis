/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/gallery.js":
/*!************************!*\
  !*** ./src/gallery.js ***!
  \************************/
/*! exports provided: Gallery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gallery", function() { return Gallery; });
/* harmony import */ var _photo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./photo.js */ "./src/photo.js");
/* harmony import */ var _lib_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib.js */ "./src/lib.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var DeckItem =
/*#__PURE__*/
function () {
  function DeckItem(imageUrl, index, options) {
    var _this = this;

    _classCallCheck(this, DeckItem);

    this.el = document.createElement('div');
    this.el.className = 'deck-item';
    this.contentEl = document.createElement('div');
    this.contentEl.className = 'deck-item-content';
    var contentWrap = document.createElement('div');
    contentWrap.className = 'deck-item-content_wrapper';
    this.el.appendChild(contentWrap);
    contentWrap.appendChild(this.contentEl);
    this.options = options || {};
    this.narrowMode = Object(_lib_js__WEBPACK_IMPORTED_MODULE_1__["getViewportWidth"])() < this.options.breakpoint;
    this.index = index;
    window.addEventListener('resize', function (ev) {
      if (Object(_lib_js__WEBPACK_IMPORTED_MODULE_1__["getViewportWidth"])() <= _this.options.breakpoint) {
        if (!_this.narrowMode) {
          // console.log('resize, turning on')
          _this.narrowMode = true; // this.turnOnNarrowMode()
        }

        _this.photo.fitByBothSides(_this.el);
      } else {
        if (_this.narrowMode) {
          // console.log('resize, turning Off')
          _this.turnOffNarrowMode();
        }
      }
    });
    this.photo = new _photo_js__WEBPACK_IMPORTED_MODULE_0__["Photo"](imageUrl);
    this.loadPhoto().catch(function (err) {
      throw err;
    });
  }

  _createClass(DeckItem, [{
    key: "turnOnNarrowMode",
    value: function turnOnNarrowMode(mode) {// this.narrowMode = true
      // this perhaps would be better to set with css vw
      // this.el.style.width = getViewportWidth() + 'px'
      // this.photo.fitByBothSides(this.el)
    }
  }, {
    key: "turnOffNarrowMode",
    value: function turnOffNarrowMode() {
      this.narrowMode = false; // this.photo.fitByHeight(this.el)
      // this.el.style.width = this.photo.dims.width + 'px'

      this.photo.clearInlineStyles();
    }
  }, {
    key: "getWidth",
    value: function getWidth() {
      return this.el.getBoundingClientRect().width;
    } // get position of the item, relative to the containing Deck

  }, {
    key: "getOffset",
    value: function getOffset() {
      return this.el.offsetLeft;
    } // get position of the midpoint of the item, relative to the containing deck

  }, {
    key: "getMidpoint",
    value: function getMidpoint() {
      return this.getOffset() + this.getWidth() / 2;
    }
    /**
      @param {String} height height in css syntax
    */

  }, {
    key: "setHeight",
    value: function setHeight(height) {
      this.el.style.height = height;
    }
  }, {
    key: "setWidth",
    value: function setWidth(width) {
      this.el.style.width = width;
    }
  }, {
    key: "isInView",
    value: function isInView() {
      var offset = this.getOffset();
      var deckPosition = this.options.getDeckPosition();
      console.log('deckItem.isInView, offset: ', offset);
      console.log('deckItem.isInView, width: ', this.getWidth());
      console.log('deckItem.isInView, getDeckPosition: ', this.options.getDeckPosition());
      console.log('deckItem.isInView, getGalleryViewportWidth: ', this.options.getGalleryViewportWidth()); // deckPosition could be negative

      return offset + deckPosition >= 0 && deckPosition + offset + this.getWidth() <= this.options.getGalleryViewportWidth() ? true : false; // if (
      //   this.getOffset() + this.options.getDeckPosition() > 0 &&
      //   this.getOffset() + this.getWidth() < this.options.getGalleryViewportWidth()
      // ) {
      //
      // }
    }
  }, {
    key: "loadPhoto",
    value: function loadPhoto(url) {
      var _this2 = this;

      return this.photo.load() // Photo.prototype.loadImage()
      .then(function (photo) {
        try {
          _this2.options.photoLoadCb(photo); // we don't want to see the img, but we want to be able to measure it with getBoundingClientRect (so display: none is not a fit)
          // img.style.visibility = "hidden"


          photo.hide();

          _this2.contentEl.appendChild(photo.el);

          if (!_this2.narrowMode) {// at the moment, seems like we handle all of this with css,
            // and don't need to fite the photo and set it's container's width respectively
            // this.photo.fitByHeight(this.el)
            // this.el.style.width = this.photo.dims.width + 'px'
          } else {
            _this2.photo.fitByBothSides(_this2.contentEl);
          }

          _this2.photo.show(); // img.style.visibility = 'visible'

        } catch (err) {
          Promise.reject(err);
        }
      }); // .catch((err) => {
      //   throw err
      // })
    }
  }]);

  return DeckItem;
}();

var Deck =
/*#__PURE__*/
function () {
  function Deck(imageUrls, options) {
    _classCallCheck(this, Deck);

    this.el = document.createElement('div');
    this.el.className = 'gallery-deck';
    this.options = options;
    this.breakpoint = options.breakpoint;
    this.position = 0;
    this.offset = 0;
    this.loaded = false;
    this.itemsLoaded = 0;
    this.items = this.initItems(imageUrls);
    this.appendItems(); // initialize the transform matrix styling

    this.el.style.transform = 'matrix(1, 0, 0, 1, 0, 0)'; // window.on('resize', (ev) => {
    //   if (getViewportWidth() < this.breakpoint) {
    //
    //   }
    // })
  }
  /*
  calculateDeckOffset(index) {
    if (getViewportWidth() < this.breakpoint) {
      const itemOffset = this.items[index].getOffset()
      const deckOffsetNew = -itemOffset
       return deckOffsetNew
    } else {
      const itemOffset = this.items[index].getMidpoint()
       const galleryMidpoint = this.options.getGalleryViewportWidth() / 2 // .getBoundingClientRect().width / 2
      const deckOffsetNew = -itemOffset + galleryMidpoint
       // console.log('Deck.calculateDeckOffset, index', index)
      // console.log('Deck.calculateDeckOffset, items[index]', this.items[index])
      // console.log('Deck.calculateDeckOffset, items[index]', this.items[index].getMidpoint())
      // console.log('Deck.calculateDeckOffset, itemOffset', itemOffset)
      // console.log('Deck.calculateDeckOffset, deckOffsetNew', deckOffsetNew)
       return deckOffsetNew
    }
  }
  */


  _createClass(Deck, [{
    key: "calculateDeckOffsetCentered",
    value: function calculateDeckOffsetCentered(index) {
      var itemOffset = this.items[index].getMidpoint();
      var galleryMidpoint = this.options.getGalleryViewportWidth() / 2; // .getBoundingClientRect().width / 2

      var deckOffsetNew = -itemOffset + galleryMidpoint; // console.log('Deck.calculateDeckOffset, index', index)
      // console.log('Deck.calculateDeckOffset, items[index]', this.items[index])
      // console.log('Deck.calculateDeckOffset, items[index]', this.items[index].getMidpoint())
      // console.log('Deck.calculateDeckOffset, itemOffset', itemOffset)
      // console.log('Deck.calculateDeckOffset, deckOffsetNew', deckOffsetNew)

      return deckOffsetNew;
    }
  }, {
    key: "calculateDeckOffset",
    value: function calculateDeckOffset(index) {
      var itemOffset = this.items[index].getOffset();
      var deckOffsetNew = -itemOffset;
      return deckOffsetNew;
    }
    /*
    // TODO:
    getActualPositionWhileTransitioning() {
      return this.el.getBoundingClientRect().left + window.parseInt(window.getComputedStyle(this.el)['margin-left'])
      - this.options.getGalleryPos().left
      + window.scrollX
    }
    */

    /**
    @param {boolean} centered if true - centers the item, if falsy - doesn't center
    */

  }, {
    key: "goToItem",
    value: function goToItem(index, centered) {
      if (index < 0 || index > this.items.length - 1) {
        throw new Error("can't go to unexisting item at " + index);
      }

      if (!this.loaded) {
        // throw new Error("")
        // TODO: make it so it can go to the items that are already loaded, and
        // then, adjust the position of the deck so it stays on the item we've gone to
        // as other items load (if necessary).
        // This could be impactful if the deck is right at the top of the page and user
        // wants to immediately be able to interact with things.
        // console.log("photos in the deck haven't loaded yet");
        return undefined;
      }

      var deckPositionNew = centered ? this.calculateDeckOffsetCentered(index) : this.calculateDeckOffset(index); // TODO:
      // this.offset = this.transitioning
      //   ? deckPositionNew - this.getActualPositionWhileTransitioning()
      //   : deckPositionNew - this.position

      this.offset = deckPositionNew - this.position;
      this.position = deckPositionNew;

      if (this.transitioning) {
        this.el.style.transform = this.makeMatrix(this.offset);
      } else {
        var transitionendCb = function transitionendCb() {
          this.transitionendCb();
          this.el.removeEventListener('transitionend', transitionendCb);
          this.transitioning = false;
        };

        this.el.classList.add('transition');
        this.transitioning = true;
        this.el.addEventListener('transitionend', transitionendCb.bind(this));
        this.el.style.transform = this.makeMatrix(this.offset);
      }

      return this.items[index];
    }
  }, {
    key: "makeMatrix",
    value: function makeMatrix(x) {
      return 'matrix(1, 0, 0, 1, ' + x + ', 0)';
    }
  }, {
    key: "transitionendCb",
    value: function transitionendCb() {
      this.el.style.left = this.position + 'px';
      this.el.classList.remove('transition');
      this.el.style.transform = 'matrix(1, 0, 0, 1, 0, 0)';
    }
  }, {
    key: "initItems",
    value: function initItems(urls) {
      var _this3 = this;

      return urls.map(function (url, i) {
        return new DeckItem(url, i, {
          breakpoint: _this3.breakpoint,
          photoLoadCb: function photoLoadCb() {
            // console.log("photoLoadCb, deck.itemsLoaded: ", this.itemsLoaded);
            _this3.itemsLoaded++;

            if (_this3.itemsLoaded == _this3.items.length) {
              // console.log("photoLoadCb, deck.itemsLoaded == deck.items.length, deck.itemsLoaded: ", this.itemsLoaded);
              _this3.loaded = true;

              _this3.options.loadCb();
            }
          },
          getGalleryViewportWidth: _this3.options.getGalleryViewportWidth,
          getDeckPosition: function getDeckPosition() {
            return _this3.position;
          }
        });
      });
    }
  }, {
    key: "appendItem",
    value: function appendItem(item) {
      this.el.appendChild(item.el);
    }
  }, {
    key: "appendItems",
    value: function appendItems() {
      var _this4 = this;

      this.items.forEach(function (item) {
        _this4.appendItem(item);
      });
    }
  }]);

  return Deck;
}();

var Gallery =
/*#__PURE__*/
function () {
  function Gallery(photoUrls, options) {
    var _this5 = this;

    _classCallCheck(this, Gallery);

    this.el = document.createElement('div');
    this.el.className = 'gallery';
    this.deck = new Deck(photoUrls, {
      getGalleryViewportWidth: function getGalleryViewportWidth() {
        return _this5.el.getBoundingClientRect().width;
      },
      loadCb: function loadCb() {
        _this5.activeItem = _this5.deck.goToItem(0, false); // this.goToNext.call(this)
      },
      breakpoint: options.breakpoint
    });
    this.el.appendChild(this.deck.el); // const activeItem = this.deck.goToItem(0)
    // this.activeItem = activeItem
  }

  _createClass(Gallery, [{
    key: "goToNext",
    value: function goToNext() {
      if (!this.deck.loaded) return;
      if (this.activeItem.index == this.deck.items.length - 1) return;
      this.activeItem = this.deck.goToItem(this.activeItem.index + 1, true);
    }
  }, {
    key: "goToPrevious",
    value: function goToPrevious() {
      if (!this.deck.loaded) return;
      if (this.activeItem.index == 0) return;
      this.activeItem = this.deck.goToItem(this.activeItem.index - 1, true);
    }
    /*
    // TODO:
    // get the actual position of the el, relative to body.
    getAbsPosition() {
      var position = 0
       // const computedStyle = window.getComputedStyle(this.el)
         position = this.el.getBoundingClientRect().left
          + window.parseInt(window.getComputedStyle(this.el)['margin-left'])
         return position
    }
    */

  }]);

  return Gallery;
}();



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib.js */ "./src/lib.js");
/* harmony import */ var _gallery_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gallery.js */ "./src/gallery.js");
/* harmony import */ var _large_view_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./large-view.js */ "./src/large-view.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// import {slide} from './slide.js'




var ShowcaseImage =
/*#__PURE__*/
function (_Enlargable) {
  _inherits(ShowcaseImage, _Enlargable);

  function ShowcaseImage(el) {
    _classCallCheck(this, ShowcaseImage);

    return _possibleConstructorReturn(this, _getPrototypeOf(ShowcaseImage).call(this, el, Object(_lib_js__WEBPACK_IMPORTED_MODULE_0__["getBackgroundImageUrl"])(el))); // this.image = new Enlargable()
  }

  return ShowcaseImage;
}(_large_view_js__WEBPACK_IMPORTED_MODULE_2__["Enlargable"]);

function nodeListToArray(selector) {
  var els = document.querySelectorAll(selector);
  els = Array.prototype.slice.call(els, 0);
  return els;
}

function initEnlargables(selector) {
  // var els = document.querySelectorAll(selector)
  // els = Array.prototype.slice.call(els, 0)
  // console.log(els);
  var els = nodeListToArray(selector);
  els.forEach(function (el) {
    new ShowcaseImage(el);
  });
}

function initGallery(photoUrls) {
  var container = document.querySelector('.gallery-container');
  var gallery = new _gallery_js__WEBPACK_IMPORTED_MODULE_1__["Gallery"](photoUrls, {
    breakpoint: 800
  });
  container.appendChild(gallery.el);
  var arrows = document.querySelector('.gallery-wrap');
  arrows.querySelector('.icon#bwd').addEventListener('click', gallery.goToPrevious.bind(gallery));
  arrows.querySelector('.icon#fwd').addEventListener('click', gallery.goToNext.bind(gallery));
  console.log('gallery', gallery);
}

function initLangSwitch() {
  var en = false;
  var contentEn = nodeListToArray('.text.en');
  var contentUa = nodeListToArray('.text.ua');

  function switchToEn() {
    contentUa.forEach(function (el) {
      return el.classList.add('noned');
    });
    contentEn.forEach(function (el) {
      return el.classList.remove('noned');
    });
  }

  function switchToUa() {
    contentEn.forEach(function (el) {
      return el.classList.add('noned');
    });
    contentUa.forEach(function (el) {
      return el.classList.remove('noned');
    });
  }

  var enSwitch = document.querySelector('.lang-switch #en');
  var uaSwitch = document.querySelector('.lang-switch #ua');
  var langSwitch = document.querySelector('.lang-switch');
  langSwitch.addEventListener('click', function (ev) {
    ev.preventDefault();

    if (!en) {
      enSwitch.classList.add('noned');
      uaSwitch.classList.remove('noned');
      switchToEn();
      en = true;
    } else {
      uaSwitch.classList.add('noned');
      enSwitch.classList.remove('noned');
      switchToUa();
      en = false;
    }
  }); // enSwitch.addEventListener('click', () => {
  //   enSwitch.classList.add('noned')
  //   uaSwitch.classList.remove('noned')
  //
  //   switchToEn()
  // })
  // uaSwitch.addEventListener('click', () => {
  //   uaSwitch.classList.add('noned')
  //   enSwitch.classList.remove('noned')
  //
  //   switchToUa()
  // })
}

function initNavAnimation(navBreakpoint) {
  var nav = document.querySelector('.navigation'); // const logo = document.querySelector('.header_container .logo')
  // const lang = document.querySelector('.header_container .lang-switch')

  var enlarged = true;
  window.addEventListener('scroll', function (ev) {
    if (window.scrollY > navBreakpoint && enlarged) {
      nav.classList.remove('larger'); // logo.classList.remove('larger')
      // lang.classList.remove('larger')

      enlarged = false;
    } else if (window.scrollY < navBreakpoint && !enlarged) {
      nav.classList.add('larger'); // logo.classList.add('larger')
      // lang.classList.add('larger')

      enlarged = true;
    }
  });
}

function boot(galleryUrls) {
  initLangSwitch();
  var largeViewWrap = document.querySelector('.large-view_wrap');
  _large_view_js__WEBPACK_IMPORTED_MODULE_2__["LargeView"].init({
    transition: 'opacity 0.4s',
    display: 'block',
    wrap: largeViewWrap
  });
  largeViewWrap.classList.remove('noned');
  largeViewWrap.appendChild(_large_view_js__WEBPACK_IMPORTED_MODULE_2__["LargeView"].container);
  largeViewWrap.querySelector('.icon#cross').addEventListener('click', function () {
    _large_view_js__WEBPACK_IMPORTED_MODULE_2__["LargeView"].hide();
  });
  console.log('LargeView', _large_view_js__WEBPACK_IMPORTED_MODULE_2__["LargeView"]);
  initGallery(galleryUrls);
  initEnlargables('#out .showcase .image-thumb');
  initEnlargables('#staff .member .avatar');
  new ShowcaseImage(document.querySelector('#contact .street-view')); // els.forEach(el => {new ShowcaseImage(el)})
  // initShowcases()

  initNavAnimation(25);
}

window.addEventListener('load', function () {
  boot(['media/in/14902841_1259112727483912_3284315106318981574_o.jpg', 'media/in/19875272_10100482296286706_3883306275546166676_n.jpg', 'media/in/3b.jpg', 'media/in/6a.jpg', 'media/in/DSC_0126.jpg', 'media/in/DSC_0128.JPG', 'media/in/DSC_0350.JPG']);
});

/***/ }),

/***/ "./src/large-view.js":
/*!***************************!*\
  !*** ./src/large-view.js ***!
  \***************************/
/*! exports provided: LargeView, Enlargable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LargeView", function() { return LargeView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Enlargable", function() { return Enlargable; });
/* harmony import */ var _lib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib.js */ "./src/lib.js");
/* harmony import */ var _photo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./photo.js */ "./src/photo.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var LargeView = {
  init: function init(options) {
    options = options || {};
    if (options.transition) this.transitionSetup = options.transition;
    this.options = options;
    var container = document.createElement('div'); // same as in the scss

    container.className = 'large-view_container';
    this.container = container; // if (options.clickCb)
    // this.container.addEventListener('click', () => {this.hide()})

    this.wrap = options.wrap || this.container;
    this.wrap.style.opacity = '0'; // this.wrap.classList.add('transparent')

    this.wrap.style.display = 'none'; // this.container.classList.add('noned')

    this.hidden = true; // this.photo = new Photo()
  },
  setPhoto: function setPhoto(url) {
    var _this = this;

    var photo = new _photo_js__WEBPACK_IMPORTED_MODULE_1__["Photo"](url); // this.photo = new Photo(url)

    return photo.load() // .then()
    .then(function (photo) {
      try {
        if (_this.hidden) {
          Promise.reject(new Error('the large-view container must be displayed before we can fit in the photo'));
        } else {
          // this.photo.hide(false)
          photo.hide(false);

          if (_this.photo) {
            _this.container.replaceChild(photo.el, _this.photo.el);
          } else {
            _this.container.appendChild(photo.el);
          }

          photo.fitByBothSides(_this.container);
          photo.show(false);
          _this.photo = photo;
        }
      } catch (err) {
        Promise.reject(err);
      }
    });
  },

  /*
  transitionendCb(cb) {
    cb()
    this.container.removeEventListener('transitionend', this.transitionendCb)
  }
  */

  /**
    @description If url is give, then, after show transition has ended, it loads the
    new photo
  */
  show: function show(url) {
    var _this2 = this;

    // if (this.showPending) {
    //   window.clearTimeout(this.showTimeoutId)
    //   // this.container.removeEventListener()
    //
    //   // should removeEventListener of itself
    //   this.transitionendCb()
    //
    //
    // }
    return new Promise(function (resolve, reject) {
      try {
        var transitionendCb = function transitionendCb() {
          self.wrap.removeEventListener('transitionend', transitionendCb);
          self.transitionOff(); // this.container.classList.remove('transition')

          self.hidden = false;
          console.log('LargeView.show, transitionendCb', self);
          resolve();
        };

        var self = _this2;
        _this2.wrap.style.display = _this2.options.display || 'flex'; // this.wrap.classList.remove('noned')

        _this2.wrap.addEventListener('transitionend', transitionendCb);

        _this2.transitionOn();

        _this2.showPending = true; // this is nuts

        _this2.showTimeoutId = window.setTimeout(function () {
          _this2.showPending = false;
          _this2.wrap.style.opacity = '1'; // this.container.classList.add('transition')
        }, 50); // this.container.classList.add('solid')
      } catch (err) {
        reject(err);
      }
    }).then(function () {
      if (url) {
        return _this2.setPhoto(url);
      }
    }, function (err) {
      Promise.reject(err);
    });
  },
  hide: function hide() {
    var _this3 = this;

    return new Promise(function (resolve, reject) {
      try {
        var transitionendCb = function transitionendCb() {
          self.wrap.removeEventListener('transitionend', transitionendCb);
          self.transitionOff(); // self.wrap.classList.remove('transition')

          self.wrap.style.display = 'none';
          self.photo.hide(false); // self.container.classList.add('noned')

          self.hidden = true;
          console.log('LargeView.hide, transitionendCb', LargeView);
          resolve();
        };

        var self = _this3;

        _this3.wrap.addEventListener('transitionend', transitionendCb);

        _this3.transitionOn(); // this.container.classList.add('transition')


        _this3.wrap.style.opacity = '0'; // this.container.classList.remove('solid')
      } catch (err) {
        reject(err);
      }
    });
  },
  transitionOff: function transitionOff() {
    this.wrap.style.transition = 'none';
  },
  transitionOn: function transitionOn() {
    this.wrap.style.transition = this.transitionSetup;
  }
}; // console.log('LargeView', LargeView)

var Enlargable =
/*#__PURE__*/
function () {
  function Enlargable(el, url) {
    _classCallCheck(this, Enlargable);

    this.el = el;
    this.url = url;
    this.el.addEventListener('click', this.clickCb.bind(this));
  }

  _createClass(Enlargable, [{
    key: "enlarge",
    value: function enlarge(url) {
      LargeView.show(url).then(function () {
        console.log('Enlargable.enlarge, LargeView shown');
      }).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: "clickCb",
    value: function clickCb() {
      console.log('Enlargable.clickCb, this: ', this);
      this.enlarge(this.url);
    }
  }]);

  return Enlargable;
}();
/*
function enlargeShowcase() {
  const imageUrl = getBackgroundImageUrl(this)
  LargeView.show(imageUrl)
}

function getEnlargableElements() {
  var els = document.querySelector('#out .showcase .image-thumb')
  els = Array.prototype.slice.call(els, 0)

  els.forEach(el => {
    el.addEventListener('click', enlargeShowcaseCb)
  })
}
*/




/***/ }),

/***/ "./src/lib.js":
/*!********************!*\
  !*** ./src/lib.js ***!
  \********************/
/*! exports provided: getViewportWidth, getViewportHeight, getBackgroundImageUrl, logFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getViewportWidth", function() { return getViewportWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getViewportHeight", function() { return getViewportHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBackgroundImageUrl", function() { return getBackgroundImageUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logFactory", function() { return logFactory; });
// https://stackoverflow.com/questions/6942785/window-innerwidth-vs-document-documentelement-clientwidth
// https://bugzilla.mozilla.org/show_bug.cgi?id=156388#c14
function getViewportHeight() {
  // getElementsByTagName, if I'm not mistaken returns a livelist (hell knows what that is, but it's
  // updated live - as dom gets changed). I'm not sure about using it, it behaved misteriously once...
  // But, querySelector is not so compatible.
  // Maybe: (document.querySelector('body') || document.getElementsByTagName('body')[0].clientWidth)
  return window.innerHeight && document.documentElement.clientHeight ? Math.min(window.innerHeight, document.documentElement.clientHeight) : window.innerHeight || document.documentElement.clientHeight || document.querySelector('body') || document.getElementsByTagName('body')[0].clientHeight;
}

function getViewportWidth() {
  return window.innerWidth && document.documentElement.clientWidth ? Math.min(window.innerWidth, document.documentElement.clientWidth) : window.innerWidth || document.documentElement.clientWidth || document.querySelector('body') || document.getElementsByTagName('body')[0].clientWidth;
}
/*

NodeList to array
function toArray(obj) {
  var array = [];
  // iterate backwards ensuring that length is an UInt32
  for (var i = obj.length >>> 0; i--;) {
    array[i] = obj[i];
  }
  return array;
}
*/


function getBackgroundImageUrl(el) {
  var computedStyle = window.getComputedStyle(el);
  var regx = new RegExp(/.*url\((?:\"?'?)(.+)(?:.\'?\"?)\).*/g);
  var result = regx.exec(computedStyle['background-image']);

  if (result[1]) {
    return result[1];
  }
}

function logFactory(env) {
  return function (data) {
    if (!env.dev) return;
    console.trace();
    console.log(data);
  };
}



/***/ }),

/***/ "./src/photo.js":
/*!**********************!*\
  !*** ./src/photo.js ***!
  \**********************/
/*! exports provided: Photo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Photo", function() { return Photo; });
/* harmony import */ var _lib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib.js */ "./src/lib.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Photo =
/*#__PURE__*/
function () {
  function Photo(url) {
    _classCallCheck(this, Photo);

    this.url = url;
    this.el = document.createElement('img');
  }

  _createClass(Photo, [{
    key: "load",
    value: function load() {
      var _this = this;

      // const img = document.createElement('img')
      return new Promise(function (resolve, reject) {
        // maybe this doesnt work in safari mobile...
        _this.el.onload = function () {
          resolve(_this);
        };

        _this.el.src = _this.url;
      });
    }
  }, {
    key: "calculateFitByBothSides",
    value: function calculateFitByBothSides(imgDims, containerDims) {
      // const imgDims = img.getBoundingClientRect()
      // const containerDims = container.getBoundingClientRect()
      imgDims.ratio = imgDims.width / imgDims.height;
      containerDims.ratio = containerDims.width / containerDims.height; // if wider than higher

      if (imgDims.ratio >= containerDims.ratio) {
        var imgDimsNew = {
          width: containerDims.width,
          height: containerDims.width / imgDims.ratio
        };
        return imgDimsNew; // if higher than wider
      } else {
        var _imgDimsNew = {
          // width: containerDims.height * imgDims.ratio,
          width: containerDims.height * imgDims.ratio,
          height: containerDims.height
        };
        return _imgDimsNew;
      }
    }
  }, {
    key: "calculateFitByHeight",
    value: function calculateFitByHeight(imgDims, containerDims) {
      // const imgDims = img.getBoundingClientRect()
      // const containerDims = container.getBoundingClientRect()
      imgDims.ratio = imgDims.width / imgDims.height;
      var imgDimsNew = {
        height: containerDims.height,
        width: containerDims.height * imgDims.ratio,
        ratio: imgDims.ratio
      };
      return imgDimsNew;
    }
  }, {
    key: "fitByHeight",
    value: function fitByHeight(container) {
      var imgDims = this.el.getBoundingClientRect();
      var containerDims = container.getBoundingClientRect();
      var imgDimsObj = {
        width: imgDims.width,
        height: imgDims.height
      };
      var containerDimsObj = {
        width: containerDims.width,
        height: containerDims.height
      };
      this.dims = this.calculateFitByHeight(imgDimsObj, containerDimsObj); // const imgDims = this.calculateFitByHeight(img, this.el)

      this.el.style.width = Math.round(this.dims.width) + 'px';
      this.el.style.height = Math.round(this.dims.height) + 'px';
      return this;
    } // in fitByHeight I didn't convert dims to string before setting them on
    // width and height in inline styles.. However, I believe, on mobile the fitByBothSides
    // should have been called, where there wasn't this typo. In the fitByBothSides I didn't
    // convert the values to whole numbers, none the less.
    // I fixed that, and I also decided to move the values of getBoundingClientRect output
    // to a regular object literal, instead of using the output itself (which i believe is an instance
    // of some special class), including adding new properties to it.
    // Another thing I want to check is whether or not the width and height in getBoundingClientRect are
    // basic implementation.. Also, maybe it makes sense to parseInt the values of getBoundingClientRect,
    // or doing something in that spirit

  }, {
    key: "fitByBothSides",
    value: function fitByBothSides(container) {
      var imgDims = this.el.getBoundingClientRect();
      var containerDims = container.getBoundingClientRect();
      var imgDimsObj = {
        width: imgDims.width,
        height: imgDims.height
      };
      var containerDimsObj = {
        width: containerDims.width,
        height: containerDims.height
      };
      this.dims = this.calculateFitByBothSides(imgDimsObj, containerDims);
      this.el.style.width = Math.round(this.dims.width) + 'px';
      this.el.style.height = Math.round(this.dims.height) + 'px';
      return this;
    }
  }, {
    key: "clearInlineStyles",
    value: function clearInlineStyles() {
      if (this.el.style.removeProperty) {
        this.el.style.removeProperty('width');
        this.el.style.removeProperty('height');
      } else {
        // IE9
        this.el.style.removeAttribute('width');
        this.el.style.removeAttribute('height');
      }
    }
  }, {
    key: "hide",
    value: function hide(hard) {
      hard ? this.el.style.display = "none" : this.el.style.visibility = "hidden";
    }
  }, {
    key: "show",
    value: function show(hard) {
      if (hard) {
        this.el.style.removeProperty('display');
      } else {
        this.el.style.removeProperty('visibility');
      } // hard ? this.el.style.display = "inline" : this.el.style.visibility = "visible"

    }
  }]);

  return Photo;
}();



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbGxlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9sYXJnZS12aWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9saWIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Bob3RvLmpzIl0sIm5hbWVzIjpbIkRlY2tJdGVtIiwiaW1hZ2VVcmwiLCJpbmRleCIsIm9wdGlvbnMiLCJlbCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImNvbnRlbnRFbCIsImNvbnRlbnRXcmFwIiwiYXBwZW5kQ2hpbGQiLCJuYXJyb3dNb2RlIiwiZ2V0Vmlld3BvcnRXaWR0aCIsImJyZWFrcG9pbnQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZXYiLCJwaG90byIsImZpdEJ5Qm90aFNpZGVzIiwidHVybk9mZk5hcnJvd01vZGUiLCJQaG90byIsImxvYWRQaG90byIsImNhdGNoIiwiZXJyIiwibW9kZSIsImNsZWFySW5saW5lU3R5bGVzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2lkdGgiLCJvZmZzZXRMZWZ0IiwiZ2V0T2Zmc2V0IiwiZ2V0V2lkdGgiLCJoZWlnaHQiLCJzdHlsZSIsIm9mZnNldCIsImRlY2tQb3NpdGlvbiIsImdldERlY2tQb3NpdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJnZXRHYWxsZXJ5Vmlld3BvcnRXaWR0aCIsInVybCIsImxvYWQiLCJ0aGVuIiwicGhvdG9Mb2FkQ2IiLCJoaWRlIiwic2hvdyIsIlByb21pc2UiLCJyZWplY3QiLCJEZWNrIiwiaW1hZ2VVcmxzIiwicG9zaXRpb24iLCJsb2FkZWQiLCJpdGVtc0xvYWRlZCIsIml0ZW1zIiwiaW5pdEl0ZW1zIiwiYXBwZW5kSXRlbXMiLCJ0cmFuc2Zvcm0iLCJpdGVtT2Zmc2V0IiwiZ2V0TWlkcG9pbnQiLCJnYWxsZXJ5TWlkcG9pbnQiLCJkZWNrT2Zmc2V0TmV3IiwiY2VudGVyZWQiLCJsZW5ndGgiLCJFcnJvciIsInVuZGVmaW5lZCIsImRlY2tQb3NpdGlvbk5ldyIsImNhbGN1bGF0ZURlY2tPZmZzZXRDZW50ZXJlZCIsImNhbGN1bGF0ZURlY2tPZmZzZXQiLCJ0cmFuc2l0aW9uaW5nIiwibWFrZU1hdHJpeCIsInRyYW5zaXRpb25lbmRDYiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjbGFzc0xpc3QiLCJhZGQiLCJiaW5kIiwieCIsImxlZnQiLCJyZW1vdmUiLCJ1cmxzIiwibWFwIiwiaSIsImxvYWRDYiIsIml0ZW0iLCJmb3JFYWNoIiwiYXBwZW5kSXRlbSIsIkdhbGxlcnkiLCJwaG90b1VybHMiLCJkZWNrIiwiYWN0aXZlSXRlbSIsImdvVG9JdGVtIiwiU2hvd2Nhc2VJbWFnZSIsImdldEJhY2tncm91bmRJbWFnZVVybCIsIkVubGFyZ2FibGUiLCJub2RlTGlzdFRvQXJyYXkiLCJzZWxlY3RvciIsImVscyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJBcnJheSIsInByb3RvdHlwZSIsInNsaWNlIiwiY2FsbCIsImluaXRFbmxhcmdhYmxlcyIsImluaXRHYWxsZXJ5IiwiY29udGFpbmVyIiwicXVlcnlTZWxlY3RvciIsImdhbGxlcnkiLCJhcnJvd3MiLCJnb1RvUHJldmlvdXMiLCJnb1RvTmV4dCIsImluaXRMYW5nU3dpdGNoIiwiZW4iLCJjb250ZW50RW4iLCJjb250ZW50VWEiLCJzd2l0Y2hUb0VuIiwic3dpdGNoVG9VYSIsImVuU3dpdGNoIiwidWFTd2l0Y2giLCJsYW5nU3dpdGNoIiwicHJldmVudERlZmF1bHQiLCJpbml0TmF2QW5pbWF0aW9uIiwibmF2QnJlYWtwb2ludCIsIm5hdiIsImVubGFyZ2VkIiwic2Nyb2xsWSIsImJvb3QiLCJnYWxsZXJ5VXJscyIsImxhcmdlVmlld1dyYXAiLCJMYXJnZVZpZXciLCJpbml0IiwidHJhbnNpdGlvbiIsImRpc3BsYXkiLCJ3cmFwIiwidHJhbnNpdGlvblNldHVwIiwib3BhY2l0eSIsImhpZGRlbiIsInNldFBob3RvIiwicmVwbGFjZUNoaWxkIiwicmVzb2x2ZSIsInNlbGYiLCJ0cmFuc2l0aW9uT2ZmIiwidHJhbnNpdGlvbk9uIiwic2hvd1BlbmRpbmciLCJzaG93VGltZW91dElkIiwic2V0VGltZW91dCIsImNsaWNrQ2IiLCJlbmxhcmdlIiwiZ2V0Vmlld3BvcnRIZWlnaHQiLCJpbm5lckhlaWdodCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudEhlaWdodCIsIk1hdGgiLCJtaW4iLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImlubmVyV2lkdGgiLCJjbGllbnRXaWR0aCIsImNvbXB1dGVkU3R5bGUiLCJnZXRDb21wdXRlZFN0eWxlIiwicmVneCIsIlJlZ0V4cCIsInJlc3VsdCIsImV4ZWMiLCJsb2dGYWN0b3J5IiwiZW52IiwiZGF0YSIsImRldiIsInRyYWNlIiwib25sb2FkIiwic3JjIiwiaW1nRGltcyIsImNvbnRhaW5lckRpbXMiLCJyYXRpbyIsImltZ0RpbXNOZXciLCJpbWdEaW1zT2JqIiwiY29udGFpbmVyRGltc09iaiIsImRpbXMiLCJjYWxjdWxhdGVGaXRCeUhlaWdodCIsInJvdW5kIiwiY2FsY3VsYXRlRml0QnlCb3RoU2lkZXMiLCJyZW1vdmVQcm9wZXJ0eSIsInJlbW92ZUF0dHJpYnV0ZSIsImhhcmQiLCJ2aXNpYmlsaXR5Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QkFFSUQsSSxFQUFNO0FBQ1QsVUFBSUEsSUFBSixFQUFVO0FBQ1IsYUFBSy9LLEVBQUwsQ0FBUTRCLEtBQVIsQ0FBY2lKLGNBQWQsQ0FBNkIsU0FBN0I7QUFDRCxPQUZELE1BRU87QUFDTCxhQUFLN0ssRUFBTCxDQUFRNEIsS0FBUixDQUFjaUosY0FBZCxDQUE2QixZQUE3QjtBQUNELE9BTFEsQ0FPVDs7QUFDRCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHtQaG90b30gZnJvbSAnLi9waG90by5qcydcbmltcG9ydCB7Z2V0Vmlld3BvcnRXaWR0aCwgZ2V0Vmlld3BvcnRIZWlnaHQsIGxvZ0ZhY3Rvcnl9IGZyb20gJy4vbGliLmpzJ1xuXG5jbGFzcyBEZWNrSXRlbSB7XG4gIGNvbnN0cnVjdG9yKGltYWdlVXJsLCBpbmRleCwgb3B0aW9ucykge1xuICAgIHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRoaXMuZWwuY2xhc3NOYW1lID0gJ2RlY2staXRlbSdcblxuICAgIHRoaXMuY29udGVudEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0aGlzLmNvbnRlbnRFbC5jbGFzc05hbWUgPSAnZGVjay1pdGVtLWNvbnRlbnQnXG5cbiAgICBjb25zdCBjb250ZW50V3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29udGVudFdyYXAuY2xhc3NOYW1lID0gJ2RlY2staXRlbS1jb250ZW50X3dyYXBwZXInXG4gICAgdGhpcy5lbC5hcHBlbmRDaGlsZChjb250ZW50V3JhcClcbiAgICBjb250ZW50V3JhcC5hcHBlbmRDaGlsZCh0aGlzLmNvbnRlbnRFbClcblxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnMgfHwge31cbiAgICB0aGlzLm5hcnJvd01vZGUgPSBnZXRWaWV3cG9ydFdpZHRoKCkgPCB0aGlzLm9wdGlvbnMuYnJlYWtwb2ludFxuICAgIHRoaXMuaW5kZXggPSBpbmRleFxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIChldikgPT4ge1xuICAgICAgaWYgKGdldFZpZXdwb3J0V2lkdGgoKSA8PSB0aGlzLm9wdGlvbnMuYnJlYWtwb2ludCkge1xuICAgICAgICBpZiAoIXRoaXMubmFycm93TW9kZSkge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZXNpemUsIHR1cm5pbmcgb24nKVxuICAgICAgICAgIHRoaXMubmFycm93TW9kZSA9IHRydWVcbiAgICAgICAgICAvLyB0aGlzLnR1cm5Pbk5hcnJvd01vZGUoKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5waG90by5maXRCeUJvdGhTaWRlcyh0aGlzLmVsKVxuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGhpcy5uYXJyb3dNb2RlKSB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ3Jlc2l6ZSwgdHVybmluZyBPZmYnKVxuICAgICAgICAgIHRoaXMudHVybk9mZk5hcnJvd01vZGUoKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9KVxuXG4gICAgdGhpcy5waG90byA9IG5ldyBQaG90byhpbWFnZVVybClcbiAgICB0aGlzLmxvYWRQaG90bygpLmNhdGNoKChlcnIpID0+IHt0aHJvdyBlcnJ9KVxuICB9XG5cbiAgdHVybk9uTmFycm93TW9kZShtb2RlKSB7XG4gICAgLy8gdGhpcy5uYXJyb3dNb2RlID0gdHJ1ZVxuXG4gICAgLy8gdGhpcyBwZXJoYXBzIHdvdWxkIGJlIGJldHRlciB0byBzZXQgd2l0aCBjc3MgdndcbiAgICAvLyB0aGlzLmVsLnN0eWxlLndpZHRoID0gZ2V0Vmlld3BvcnRXaWR0aCgpICsgJ3B4J1xuXG4gICAgLy8gdGhpcy5waG90by5maXRCeUJvdGhTaWRlcyh0aGlzLmVsKVxuICB9XG5cbiAgdHVybk9mZk5hcnJvd01vZGUoKSB7XG4gICAgdGhpcy5uYXJyb3dNb2RlID0gZmFsc2VcbiAgICAvLyB0aGlzLnBob3RvLmZpdEJ5SGVpZ2h0KHRoaXMuZWwpXG5cbiAgICAvLyB0aGlzLmVsLnN0eWxlLndpZHRoID0gdGhpcy5waG90by5kaW1zLndpZHRoICsgJ3B4J1xuICAgIHRoaXMucGhvdG8uY2xlYXJJbmxpbmVTdHlsZXMoKVxuICB9XG5cbiAgZ2V0V2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGhcbiAgfVxuXG4gIC8vIGdldCBwb3NpdGlvbiBvZiB0aGUgaXRlbSwgcmVsYXRpdmUgdG8gdGhlIGNvbnRhaW5pbmcgRGVja1xuICBnZXRPZmZzZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWwub2Zmc2V0TGVmdFxuICB9XG5cbiAgLy8gZ2V0IHBvc2l0aW9uIG9mIHRoZSBtaWRwb2ludCBvZiB0aGUgaXRlbSwgcmVsYXRpdmUgdG8gdGhlIGNvbnRhaW5pbmcgZGVja1xuICBnZXRNaWRwb2ludCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRPZmZzZXQoKSArICh0aGlzLmdldFdpZHRoKCkgLyAyKVxuICB9XG5cbiAgLyoqXG4gICAgQHBhcmFtIHtTdHJpbmd9IGhlaWdodCBoZWlnaHQgaW4gY3NzIHN5bnRheFxuICAqL1xuICBzZXRIZWlnaHQoaGVpZ2h0KSB7XG4gICAgdGhpcy5lbC5zdHlsZS5oZWlnaHQgPSBoZWlnaHRcbiAgfVxuXG4gIHNldFdpZHRoKHdpZHRoKSB7XG4gICAgdGhpcy5lbC5zdHlsZS53aWR0aCA9IHdpZHRoXG4gIH1cblxuICBpc0luVmlldygpIHtcbiAgICBjb25zdCBvZmZzZXQgPSB0aGlzLmdldE9mZnNldCgpXG4gICAgY29uc3QgZGVja1Bvc2l0aW9uID0gdGhpcy5vcHRpb25zLmdldERlY2tQb3NpdGlvbigpXG4gICAgY29uc29sZS5sb2coJ2RlY2tJdGVtLmlzSW5WaWV3LCBvZmZzZXQ6ICcsIG9mZnNldCk7XG4gICAgY29uc29sZS5sb2coJ2RlY2tJdGVtLmlzSW5WaWV3LCB3aWR0aDogJywgdGhpcy5nZXRXaWR0aCgpKTtcbiAgICBjb25zb2xlLmxvZygnZGVja0l0ZW0uaXNJblZpZXcsIGdldERlY2tQb3NpdGlvbjogJywgdGhpcy5vcHRpb25zLmdldERlY2tQb3NpdGlvbigpKTtcbiAgICBjb25zb2xlLmxvZygnZGVja0l0ZW0uaXNJblZpZXcsIGdldEdhbGxlcnlWaWV3cG9ydFdpZHRoOiAnLCB0aGlzLm9wdGlvbnMuZ2V0R2FsbGVyeVZpZXdwb3J0V2lkdGgoKSk7XG5cbiAgICAvLyBkZWNrUG9zaXRpb24gY291bGQgYmUgbmVnYXRpdmVcbiAgICByZXR1cm4gb2Zmc2V0ICsgZGVja1Bvc2l0aW9uID49IDAgJiZcbiAgICBkZWNrUG9zaXRpb24gKyBvZmZzZXQgKyB0aGlzLmdldFdpZHRoKCkgPD0gdGhpcy5vcHRpb25zLmdldEdhbGxlcnlWaWV3cG9ydFdpZHRoKClcbiAgICAgID8gdHJ1ZSA6IGZhbHNlXG5cbiAgICAvLyBpZiAoXG4gICAgLy8gICB0aGlzLmdldE9mZnNldCgpICsgdGhpcy5vcHRpb25zLmdldERlY2tQb3NpdGlvbigpID4gMCAmJlxuICAgIC8vICAgdGhpcy5nZXRPZmZzZXQoKSArIHRoaXMuZ2V0V2lkdGgoKSA8IHRoaXMub3B0aW9ucy5nZXRHYWxsZXJ5Vmlld3BvcnRXaWR0aCgpXG4gICAgLy8gKSB7XG4gICAgLy9cbiAgICAvLyB9XG4gIH1cblxuICBsb2FkUGhvdG8odXJsKSB7XG4gICAgcmV0dXJuIHRoaXMucGhvdG8ubG9hZCgpIC8vIFBob3RvLnByb3RvdHlwZS5sb2FkSW1hZ2UoKVxuICAgIC50aGVuKChwaG90bykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy5vcHRpb25zLnBob3RvTG9hZENiKHBob3RvKVxuXG4gICAgICAgIC8vIHdlIGRvbid0IHdhbnQgdG8gc2VlIHRoZSBpbWcsIGJ1dCB3ZSB3YW50IHRvIGJlIGFibGUgdG8gbWVhc3VyZSBpdCB3aXRoIGdldEJvdW5kaW5nQ2xpZW50UmVjdCAoc28gZGlzcGxheTogbm9uZSBpcyBub3QgYSBmaXQpXG4gICAgICAgIC8vIGltZy5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIlxuICAgICAgICBwaG90by5oaWRlKClcbiAgICAgICAgdGhpcy5jb250ZW50RWwuYXBwZW5kQ2hpbGQocGhvdG8uZWwpXG5cbiAgICAgICAgaWYgKCF0aGlzLm5hcnJvd01vZGUpIHtcbiAgICAgICAgICAvLyBhdCB0aGUgbW9tZW50LCBzZWVtcyBsaWtlIHdlIGhhbmRsZSBhbGwgb2YgdGhpcyB3aXRoIGNzcyxcbiAgICAgICAgICAvLyBhbmQgZG9uJ3QgbmVlZCB0byBmaXRlIHRoZSBwaG90byBhbmQgc2V0IGl0J3MgY29udGFpbmVyJ3Mgd2lkdGggcmVzcGVjdGl2ZWx5XG5cbiAgICAgICAgICAvLyB0aGlzLnBob3RvLmZpdEJ5SGVpZ2h0KHRoaXMuZWwpXG4gICAgICAgICAgLy8gdGhpcy5lbC5zdHlsZS53aWR0aCA9IHRoaXMucGhvdG8uZGltcy53aWR0aCArICdweCdcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnBob3RvLmZpdEJ5Qm90aFNpZGVzKHRoaXMuY29udGVudEVsKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5waG90by5zaG93KClcbiAgICAgICAgLy8gaW1nLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSdcbiAgICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICAgIFByb21pc2UucmVqZWN0KGVycilcbiAgICAgIH1cblxuICAgIH0pXG4gICAgLy8gLmNhdGNoKChlcnIpID0+IHtcbiAgICAvLyAgIHRocm93IGVyclxuICAgIC8vIH0pXG4gIH1cbn1cblxuY2xhc3MgRGVjayB7XG4gIGNvbnN0cnVjdG9yKGltYWdlVXJscywgb3B0aW9ucykge1xuICAgIHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRoaXMuZWwuY2xhc3NOYW1lID0gJ2dhbGxlcnktZGVjaydcblxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnNcblxuICAgIHRoaXMuYnJlYWtwb2ludCA9IG9wdGlvbnMuYnJlYWtwb2ludFxuICAgIHRoaXMucG9zaXRpb24gPSAwXG4gICAgdGhpcy5vZmZzZXQgPSAwXG5cbiAgICB0aGlzLmxvYWRlZCA9IGZhbHNlXG4gICAgdGhpcy5pdGVtc0xvYWRlZCA9IDBcbiAgICB0aGlzLml0ZW1zID0gdGhpcy5pbml0SXRlbXMoaW1hZ2VVcmxzKVxuICAgIHRoaXMuYXBwZW5kSXRlbXMoKVxuXG4gICAgLy8gaW5pdGlhbGl6ZSB0aGUgdHJhbnNmb3JtIG1hdHJpeCBzdHlsaW5nXG4gICAgdGhpcy5lbC5zdHlsZS50cmFuc2Zvcm0gPSAnbWF0cml4KDEsIDAsIDAsIDEsIDAsIDApJ1xuXG4gICAgLy8gd2luZG93Lm9uKCdyZXNpemUnLCAoZXYpID0+IHtcbiAgICAvLyAgIGlmIChnZXRWaWV3cG9ydFdpZHRoKCkgPCB0aGlzLmJyZWFrcG9pbnQpIHtcbiAgICAvL1xuICAgIC8vICAgfVxuICAgIC8vIH0pXG4gIH1cblxuICAvKlxuICBjYWxjdWxhdGVEZWNrT2Zmc2V0KGluZGV4KSB7XG4gICAgaWYgKGdldFZpZXdwb3J0V2lkdGgoKSA8IHRoaXMuYnJlYWtwb2ludCkge1xuICAgICAgY29uc3QgaXRlbU9mZnNldCA9IHRoaXMuaXRlbXNbaW5kZXhdLmdldE9mZnNldCgpXG4gICAgICBjb25zdCBkZWNrT2Zmc2V0TmV3ID0gLWl0ZW1PZmZzZXRcblxuICAgICAgcmV0dXJuIGRlY2tPZmZzZXROZXdcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaXRlbU9mZnNldCA9IHRoaXMuaXRlbXNbaW5kZXhdLmdldE1pZHBvaW50KClcblxuICAgICAgY29uc3QgZ2FsbGVyeU1pZHBvaW50ID0gdGhpcy5vcHRpb25zLmdldEdhbGxlcnlWaWV3cG9ydFdpZHRoKCkgLyAyIC8vIC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCAvIDJcbiAgICAgIGNvbnN0IGRlY2tPZmZzZXROZXcgPSAtaXRlbU9mZnNldCArIGdhbGxlcnlNaWRwb2ludFxuXG4gICAgICAvLyBjb25zb2xlLmxvZygnRGVjay5jYWxjdWxhdGVEZWNrT2Zmc2V0LCBpbmRleCcsIGluZGV4KVxuICAgICAgLy8gY29uc29sZS5sb2coJ0RlY2suY2FsY3VsYXRlRGVja09mZnNldCwgaXRlbXNbaW5kZXhdJywgdGhpcy5pdGVtc1tpbmRleF0pXG4gICAgICAvLyBjb25zb2xlLmxvZygnRGVjay5jYWxjdWxhdGVEZWNrT2Zmc2V0LCBpdGVtc1tpbmRleF0nLCB0aGlzLml0ZW1zW2luZGV4XS5nZXRNaWRwb2ludCgpKVxuICAgICAgLy8gY29uc29sZS5sb2coJ0RlY2suY2FsY3VsYXRlRGVja09mZnNldCwgaXRlbU9mZnNldCcsIGl0ZW1PZmZzZXQpXG4gICAgICAvLyBjb25zb2xlLmxvZygnRGVjay5jYWxjdWxhdGVEZWNrT2Zmc2V0LCBkZWNrT2Zmc2V0TmV3JywgZGVja09mZnNldE5ldylcblxuICAgICAgcmV0dXJuIGRlY2tPZmZzZXROZXdcbiAgICB9XG4gIH1cbiAgKi9cblxuICBjYWxjdWxhdGVEZWNrT2Zmc2V0Q2VudGVyZWQoaW5kZXgpIHtcbiAgICBjb25zdCBpdGVtT2Zmc2V0ID0gdGhpcy5pdGVtc1tpbmRleF0uZ2V0TWlkcG9pbnQoKVxuXG4gICAgY29uc3QgZ2FsbGVyeU1pZHBvaW50ID0gdGhpcy5vcHRpb25zLmdldEdhbGxlcnlWaWV3cG9ydFdpZHRoKCkgLyAyIC8vIC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCAvIDJcbiAgICBjb25zdCBkZWNrT2Zmc2V0TmV3ID0gLWl0ZW1PZmZzZXQgKyBnYWxsZXJ5TWlkcG9pbnRcblxuICAgIC8vIGNvbnNvbGUubG9nKCdEZWNrLmNhbGN1bGF0ZURlY2tPZmZzZXQsIGluZGV4JywgaW5kZXgpXG4gICAgLy8gY29uc29sZS5sb2coJ0RlY2suY2FsY3VsYXRlRGVja09mZnNldCwgaXRlbXNbaW5kZXhdJywgdGhpcy5pdGVtc1tpbmRleF0pXG4gICAgLy8gY29uc29sZS5sb2coJ0RlY2suY2FsY3VsYXRlRGVja09mZnNldCwgaXRlbXNbaW5kZXhdJywgdGhpcy5pdGVtc1tpbmRleF0uZ2V0TWlkcG9pbnQoKSlcbiAgICAvLyBjb25zb2xlLmxvZygnRGVjay5jYWxjdWxhdGVEZWNrT2Zmc2V0LCBpdGVtT2Zmc2V0JywgaXRlbU9mZnNldClcbiAgICAvLyBjb25zb2xlLmxvZygnRGVjay5jYWxjdWxhdGVEZWNrT2Zmc2V0LCBkZWNrT2Zmc2V0TmV3JywgZGVja09mZnNldE5ldylcblxuICAgIHJldHVybiBkZWNrT2Zmc2V0TmV3XG4gIH1cblxuICBjYWxjdWxhdGVEZWNrT2Zmc2V0KGluZGV4KSB7XG4gICAgY29uc3QgaXRlbU9mZnNldCA9IHRoaXMuaXRlbXNbaW5kZXhdLmdldE9mZnNldCgpXG4gICAgY29uc3QgZGVja09mZnNldE5ldyA9IC1pdGVtT2Zmc2V0XG5cbiAgICByZXR1cm4gZGVja09mZnNldE5ld1xuICB9XG5cbiAgLypcbiAgLy8gVE9ETzpcbiAgZ2V0QWN0dWFsUG9zaXRpb25XaGlsZVRyYW5zaXRpb25pbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCArIHdpbmRvdy5wYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsKVsnbWFyZ2luLWxlZnQnXSlcbiAgICAtIHRoaXMub3B0aW9ucy5nZXRHYWxsZXJ5UG9zKCkubGVmdFxuICAgICsgd2luZG93LnNjcm9sbFhcbiAgfVxuICAqL1xuXG4gIC8qKlxuICBAcGFyYW0ge2Jvb2xlYW59IGNlbnRlcmVkIGlmIHRydWUgLSBjZW50ZXJzIHRoZSBpdGVtLCBpZiBmYWxzeSAtIGRvZXNuJ3QgY2VudGVyXG4gICovXG4gIGdvVG9JdGVtKGluZGV4LCBjZW50ZXJlZCkge1xuXG4gICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+IHRoaXMuaXRlbXMubGVuZ3RoLTEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcImNhbid0IGdvIHRvIHVuZXhpc3RpbmcgaXRlbSBhdCBcIisgaW5kZXgpXG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmxvYWRlZCkge1xuICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKFwiXCIpXG4gICAgICAvLyBUT0RPOiBtYWtlIGl0IHNvIGl0IGNhbiBnbyB0byB0aGUgaXRlbXMgdGhhdCBhcmUgYWxyZWFkeSBsb2FkZWQsIGFuZFxuICAgICAgLy8gdGhlbiwgYWRqdXN0IHRoZSBwb3NpdGlvbiBvZiB0aGUgZGVjayBzbyBpdCBzdGF5cyBvbiB0aGUgaXRlbSB3ZSd2ZSBnb25lIHRvXG4gICAgICAvLyBhcyBvdGhlciBpdGVtcyBsb2FkIChpZiBuZWNlc3NhcnkpLlxuICAgICAgLy8gVGhpcyBjb3VsZCBiZSBpbXBhY3RmdWwgaWYgdGhlIGRlY2sgaXMgcmlnaHQgYXQgdGhlIHRvcCBvZiB0aGUgcGFnZSBhbmQgdXNlclxuICAgICAgLy8gd2FudHMgdG8gaW1tZWRpYXRlbHkgYmUgYWJsZSB0byBpbnRlcmFjdCB3aXRoIHRoaW5ncy5cbiAgICAgIC8vIGNvbnNvbGUubG9nKFwicGhvdG9zIGluIHRoZSBkZWNrIGhhdmVuJ3QgbG9hZGVkIHlldFwiKTtcbiAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9XG5cbiAgICBjb25zdCBkZWNrUG9zaXRpb25OZXcgPSBjZW50ZXJlZCA/IHRoaXMuY2FsY3VsYXRlRGVja09mZnNldENlbnRlcmVkKGluZGV4KSA6IHRoaXMuY2FsY3VsYXRlRGVja09mZnNldChpbmRleClcblxuICAgIC8vIFRPRE86XG4gICAgLy8gdGhpcy5vZmZzZXQgPSB0aGlzLnRyYW5zaXRpb25pbmdcbiAgICAvLyAgID8gZGVja1Bvc2l0aW9uTmV3IC0gdGhpcy5nZXRBY3R1YWxQb3NpdGlvbldoaWxlVHJhbnNpdGlvbmluZygpXG4gICAgLy8gICA6IGRlY2tQb3NpdGlvbk5ldyAtIHRoaXMucG9zaXRpb25cblxuICAgIHRoaXMub2Zmc2V0ID0gZGVja1Bvc2l0aW9uTmV3IC0gdGhpcy5wb3NpdGlvblxuICAgIHRoaXMucG9zaXRpb24gPSBkZWNrUG9zaXRpb25OZXdcblxuICAgIGlmICh0aGlzLnRyYW5zaXRpb25pbmcpIHtcbiAgICAgIHRoaXMuZWwuc3R5bGUudHJhbnNmb3JtID0gdGhpcy5tYWtlTWF0cml4KHRoaXMub2Zmc2V0KVxuICAgIH0gZWxzZSB7XG5cbiAgICAgIGZ1bmN0aW9uIHRyYW5zaXRpb25lbmRDYigpIHtcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uZW5kQ2IoKVxuICAgICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCB0cmFuc2l0aW9uZW5kQ2IpXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbmluZyA9IGZhbHNlXG4gICAgICB9XG5cbiAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgndHJhbnNpdGlvbicpXG5cbiAgICAgIHRoaXMudHJhbnNpdGlvbmluZyA9IHRydWVcbiAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHRyYW5zaXRpb25lbmRDYi5iaW5kKHRoaXMpKVxuICAgICAgdGhpcy5lbC5zdHlsZS50cmFuc2Zvcm0gPSB0aGlzLm1ha2VNYXRyaXgodGhpcy5vZmZzZXQpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuaXRlbXNbaW5kZXhdXG5cbiAgfVxuXG4gIG1ha2VNYXRyaXgoeCkge1xuICAgIHJldHVybiAnbWF0cml4KDEsIDAsIDAsIDEsICcrIHggKycsIDApJ1xuICB9XG5cbiAgdHJhbnNpdGlvbmVuZENiKCkge1xuICAgIHRoaXMuZWwuc3R5bGUubGVmdCA9IHRoaXMucG9zaXRpb24gKydweCdcblxuICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZSgndHJhbnNpdGlvbicpXG4gICAgdGhpcy5lbC5zdHlsZS50cmFuc2Zvcm0gPSAnbWF0cml4KDEsIDAsIDAsIDEsIDAsIDApJ1xuICB9XG5cbiAgaW5pdEl0ZW1zKHVybHMpIHtcbiAgICByZXR1cm4gdXJscy5tYXAoKHVybCwgaSkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBEZWNrSXRlbSh1cmwsIGksIHtcbiAgICAgICAgYnJlYWtwb2ludDogdGhpcy5icmVha3BvaW50LFxuICAgICAgICBwaG90b0xvYWRDYjogKCkgPT4ge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwicGhvdG9Mb2FkQ2IsIGRlY2suaXRlbXNMb2FkZWQ6IFwiLCB0aGlzLml0ZW1zTG9hZGVkKTtcbiAgICAgICAgICB0aGlzLml0ZW1zTG9hZGVkKytcblxuICAgICAgICAgIGlmICh0aGlzLml0ZW1zTG9hZGVkID09IHRoaXMuaXRlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInBob3RvTG9hZENiLCBkZWNrLml0ZW1zTG9hZGVkID09IGRlY2suaXRlbXMubGVuZ3RoLCBkZWNrLml0ZW1zTG9hZGVkOiBcIiwgdGhpcy5pdGVtc0xvYWRlZCk7XG4gICAgICAgICAgICB0aGlzLmxvYWRlZCA9IHRydWVcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5sb2FkQ2IoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZ2V0R2FsbGVyeVZpZXdwb3J0V2lkdGg6IHRoaXMub3B0aW9ucy5nZXRHYWxsZXJ5Vmlld3BvcnRXaWR0aCxcbiAgICAgICAgZ2V0RGVja1Bvc2l0aW9uOiAoKSA9PiB7cmV0dXJuIHRoaXMucG9zaXRpb259XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBhcHBlbmRJdGVtKGl0ZW0pIHtcbiAgICB0aGlzLmVsLmFwcGVuZENoaWxkKGl0ZW0uZWwpXG4gIH1cblxuICBhcHBlbmRJdGVtcygpIHtcbiAgICB0aGlzLml0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICB0aGlzLmFwcGVuZEl0ZW0oaXRlbSlcbiAgICB9KVxuICB9XG59XG5cbmNsYXNzIEdhbGxlcnkge1xuICBjb25zdHJ1Y3RvcihwaG90b1VybHMsIG9wdGlvbnMpIHtcbiAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0aGlzLmVsLmNsYXNzTmFtZSA9ICdnYWxsZXJ5J1xuXG5cbiAgICB0aGlzLmRlY2sgPSBuZXcgRGVjayhwaG90b1VybHMsIHtcbiAgICAgIGdldEdhbGxlcnlWaWV3cG9ydFdpZHRoOiAoKSA9PiB7IHJldHVybiB0aGlzLmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoIH0sXG4gICAgICBsb2FkQ2I6ICgpID0+IHtcbiAgICAgICAgdGhpcy5hY3RpdmVJdGVtID0gdGhpcy5kZWNrLmdvVG9JdGVtKDAsIGZhbHNlKVxuICAgICAgICAvLyB0aGlzLmdvVG9OZXh0LmNhbGwodGhpcylcbiAgICAgIH0sXG4gICAgICBicmVha3BvaW50OiBvcHRpb25zLmJyZWFrcG9pbnRcbiAgICB9KVxuXG4gICAgdGhpcy5lbC5hcHBlbmRDaGlsZCh0aGlzLmRlY2suZWwpXG5cblxuICAgIC8vIGNvbnN0IGFjdGl2ZUl0ZW0gPSB0aGlzLmRlY2suZ29Ub0l0ZW0oMClcbiAgICAvLyB0aGlzLmFjdGl2ZUl0ZW0gPSBhY3RpdmVJdGVtXG4gIH1cblxuICBnb1RvTmV4dCgpIHtcbiAgICBpZiAoIXRoaXMuZGVjay5sb2FkZWQpIHJldHVyblxuICAgIGlmICh0aGlzLmFjdGl2ZUl0ZW0uaW5kZXggPT0gdGhpcy5kZWNrLml0ZW1zLmxlbmd0aC0xKSByZXR1cm5cblxuICAgIHRoaXMuYWN0aXZlSXRlbSA9IHRoaXMuZGVjay5nb1RvSXRlbSh0aGlzLmFjdGl2ZUl0ZW0uaW5kZXgrMSwgdHJ1ZSlcbiAgfVxuXG4gIGdvVG9QcmV2aW91cygpIHtcbiAgICBpZiAoIXRoaXMuZGVjay5sb2FkZWQpIHJldHVyblxuICAgIGlmICh0aGlzLmFjdGl2ZUl0ZW0uaW5kZXggPT0gMCkgcmV0dXJuXG5cbiAgICB0aGlzLmFjdGl2ZUl0ZW0gPSB0aGlzLmRlY2suZ29Ub0l0ZW0odGhpcy5hY3RpdmVJdGVtLmluZGV4LTEsIHRydWUpXG4gIH1cbiAgLypcbiAgLy8gVE9ETzpcbiAgLy8gZ2V0IHRoZSBhY3R1YWwgcG9zaXRpb24gb2YgdGhlIGVsLCByZWxhdGl2ZSB0byBib2R5LlxuICBnZXRBYnNQb3NpdGlvbigpIHtcbiAgICB2YXIgcG9zaXRpb24gPSAwXG5cbiAgICAvLyBjb25zdCBjb21wdXRlZFN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5lbClcblxuICAgICAgcG9zaXRpb24gPSB0aGlzLmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnRcbiAgICAgICAgKyB3aW5kb3cucGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5lbClbJ21hcmdpbi1sZWZ0J10pXG5cbiAgICAgIHJldHVybiBwb3NpdGlvblxuICB9XG4gICovXG59XG5cbmV4cG9ydCB7R2FsbGVyeX1cbiIsIi8vIGltcG9ydCB7c2xpZGV9IGZyb20gJy4vc2xpZGUuanMnXG5pbXBvcnQge2dldEJhY2tncm91bmRJbWFnZVVybH0gZnJvbSAnLi9saWIuanMnXG5pbXBvcnQge0dhbGxlcnl9IGZyb20gJy4vZ2FsbGVyeS5qcydcbmltcG9ydCB7TGFyZ2VWaWV3LCBFbmxhcmdhYmxlfSBmcm9tICcuL2xhcmdlLXZpZXcuanMnXG5cbmNsYXNzIFNob3djYXNlSW1hZ2UgZXh0ZW5kcyBFbmxhcmdhYmxlIHtcbiAgY29uc3RydWN0b3IoZWwpIHtcbiAgICBzdXBlcihlbCwgZ2V0QmFja2dyb3VuZEltYWdlVXJsKGVsKSlcbiAgICAvLyB0aGlzLmltYWdlID0gbmV3IEVubGFyZ2FibGUoKVxuICB9XG59XG5cbmZ1bmN0aW9uIG5vZGVMaXN0VG9BcnJheShzZWxlY3Rvcikge1xuICB2YXIgZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcilcbiAgZWxzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZWxzLCAwKVxuICByZXR1cm4gZWxzXG59XG5cbmZ1bmN0aW9uIGluaXRFbmxhcmdhYmxlcyhzZWxlY3Rvcikge1xuICAvLyB2YXIgZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcilcbiAgLy8gZWxzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZWxzLCAwKVxuXG4gIC8vIGNvbnNvbGUubG9nKGVscyk7XG4gIHZhciBlbHMgPSBub2RlTGlzdFRvQXJyYXkoc2VsZWN0b3IpXG5cbiAgZWxzLmZvckVhY2goZWwgPT4ge25ldyBTaG93Y2FzZUltYWdlKGVsKX0pXG59XG5cbmZ1bmN0aW9uIGluaXRHYWxsZXJ5KHBob3RvVXJscykge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FsbGVyeS1jb250YWluZXInKVxuXG4gIGNvbnN0IGdhbGxlcnkgPSBuZXcgR2FsbGVyeShwaG90b1VybHMsIHticmVha3BvaW50OiA4MDB9KVxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ2FsbGVyeS5lbClcblxuICBjb25zdCBhcnJvd3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FsbGVyeS13cmFwJylcbiAgYXJyb3dzLnF1ZXJ5U2VsZWN0b3IoJy5pY29uI2J3ZCcpXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ2FsbGVyeS5nb1RvUHJldmlvdXMuYmluZChnYWxsZXJ5KSlcbiAgYXJyb3dzLnF1ZXJ5U2VsZWN0b3IoJy5pY29uI2Z3ZCcpXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ2FsbGVyeS5nb1RvTmV4dC5iaW5kKGdhbGxlcnkpKVxuXG4gIGNvbnNvbGUubG9nKCdnYWxsZXJ5JywgZ2FsbGVyeSlcbn1cblxuZnVuY3Rpb24gaW5pdExhbmdTd2l0Y2goKSB7XG5cbiAgdmFyIGVuID0gZmFsc2VcblxuICBjb25zdCBjb250ZW50RW4gPSBub2RlTGlzdFRvQXJyYXkoJy50ZXh0LmVuJylcbiAgY29uc3QgY29udGVudFVhID0gbm9kZUxpc3RUb0FycmF5KCcudGV4dC51YScpXG5cbiAgZnVuY3Rpb24gc3dpdGNoVG9FbigpIHtcbiAgICBjb250ZW50VWEuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QuYWRkKCdub25lZCcpKVxuICAgIGNvbnRlbnRFbi5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoJ25vbmVkJykpXG4gIH1cblxuICBmdW5jdGlvbiBzd2l0Y2hUb1VhKCkge1xuICAgIGNvbnRlbnRFbi5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC5hZGQoJ25vbmVkJykpXG4gICAgY29udGVudFVhLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZSgnbm9uZWQnKSlcbiAgfVxuXG4gIGNvbnN0IGVuU3dpdGNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxhbmctc3dpdGNoICNlbicpO1xuICBjb25zdCB1YVN3aXRjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sYW5nLXN3aXRjaCAjdWEnKTtcblxuICBjb25zdCBsYW5nU3dpdGNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxhbmctc3dpdGNoJyk7XG5cbiAgbGFuZ1N3aXRjaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldikgPT4ge1xuICAgIGV2LnByZXZlbnREZWZhdWx0KClcbiAgICBcbiAgICBpZiAoIWVuKSB7XG4gICAgICBlblN3aXRjaC5jbGFzc0xpc3QuYWRkKCdub25lZCcpXG4gICAgICB1YVN3aXRjaC5jbGFzc0xpc3QucmVtb3ZlKCdub25lZCcpXG5cbiAgICAgIHN3aXRjaFRvRW4oKVxuICAgICAgZW4gPSB0cnVlXG4gICAgfSBlbHNlIHtcbiAgICAgIHVhU3dpdGNoLmNsYXNzTGlzdC5hZGQoJ25vbmVkJylcbiAgICAgIGVuU3dpdGNoLmNsYXNzTGlzdC5yZW1vdmUoJ25vbmVkJylcblxuICAgICAgc3dpdGNoVG9VYSgpXG4gICAgICBlbiA9IGZhbHNlXG4gICAgfVxuICB9KVxuXG4gIC8vIGVuU3dpdGNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAvLyAgIGVuU3dpdGNoLmNsYXNzTGlzdC5hZGQoJ25vbmVkJylcbiAgLy8gICB1YVN3aXRjaC5jbGFzc0xpc3QucmVtb3ZlKCdub25lZCcpXG4gIC8vXG4gIC8vICAgc3dpdGNoVG9FbigpXG4gIC8vIH0pXG5cbiAgLy8gdWFTd2l0Y2guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIC8vICAgdWFTd2l0Y2guY2xhc3NMaXN0LmFkZCgnbm9uZWQnKVxuICAvLyAgIGVuU3dpdGNoLmNsYXNzTGlzdC5yZW1vdmUoJ25vbmVkJylcbiAgLy9cbiAgLy8gICBzd2l0Y2hUb1VhKClcbiAgLy8gfSlcbn1cblxuZnVuY3Rpb24gaW5pdE5hdkFuaW1hdGlvbihuYXZCcmVha3BvaW50KSB7XG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZpZ2F0aW9uJylcbiAgLy8gY29uc3QgbG9nbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfY29udGFpbmVyIC5sb2dvJylcbiAgLy8gY29uc3QgbGFuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfY29udGFpbmVyIC5sYW5nLXN3aXRjaCcpXG5cbiAgdmFyIGVubGFyZ2VkID0gdHJ1ZVxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKGV2KSA9PiB7XG4gICAgaWYgKHdpbmRvdy5zY3JvbGxZID4gbmF2QnJlYWtwb2ludCAmJiBlbmxhcmdlZCkge1xuICAgICAgbmF2LmNsYXNzTGlzdC5yZW1vdmUoJ2xhcmdlcicpXG4gICAgICAvLyBsb2dvLmNsYXNzTGlzdC5yZW1vdmUoJ2xhcmdlcicpXG4gICAgICAvLyBsYW5nLmNsYXNzTGlzdC5yZW1vdmUoJ2xhcmdlcicpXG4gICAgICBlbmxhcmdlZCA9IGZhbHNlXG5cbiAgICB9IGVsc2UgaWYgKHdpbmRvdy5zY3JvbGxZIDwgbmF2QnJlYWtwb2ludCAmJiAhZW5sYXJnZWQpIHtcbiAgICAgIG5hdi5jbGFzc0xpc3QuYWRkKCdsYXJnZXInKVxuICAgICAgLy8gbG9nby5jbGFzc0xpc3QuYWRkKCdsYXJnZXInKVxuICAgICAgLy8gbGFuZy5jbGFzc0xpc3QuYWRkKCdsYXJnZXInKVxuICAgICAgZW5sYXJnZWQgPSB0cnVlXG4gICAgfVxuICB9KVxufVxuXG5mdW5jdGlvbiBib290KGdhbGxlcnlVcmxzKSB7XG4gIGluaXRMYW5nU3dpdGNoKClcblxuICBjb25zdCBsYXJnZVZpZXdXcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxhcmdlLXZpZXdfd3JhcCcpXG4gIExhcmdlVmlldy5pbml0KHtcbiAgICB0cmFuc2l0aW9uOiAnb3BhY2l0eSAwLjRzJyxcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIHdyYXA6IGxhcmdlVmlld1dyYXBcbiAgfSlcblxuICBsYXJnZVZpZXdXcmFwLmNsYXNzTGlzdC5yZW1vdmUoJ25vbmVkJylcblxuICBsYXJnZVZpZXdXcmFwLmFwcGVuZENoaWxkKExhcmdlVmlldy5jb250YWluZXIpXG4gIGxhcmdlVmlld1dyYXAucXVlcnlTZWxlY3RvcignLmljb24jY3Jvc3MnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBMYXJnZVZpZXcuaGlkZSgpXG4gIH0pXG5cbiAgY29uc29sZS5sb2coJ0xhcmdlVmlldycsIExhcmdlVmlldylcblxuICBpbml0R2FsbGVyeShnYWxsZXJ5VXJscylcblxuICBpbml0RW5sYXJnYWJsZXMoJyNvdXQgLnNob3djYXNlIC5pbWFnZS10aHVtYicpXG4gIGluaXRFbmxhcmdhYmxlcygnI3N0YWZmIC5tZW1iZXIgLmF2YXRhcicpXG4gIG5ldyBTaG93Y2FzZUltYWdlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWN0IC5zdHJlZXQtdmlldycpKVxuICAvLyBlbHMuZm9yRWFjaChlbCA9PiB7bmV3IFNob3djYXNlSW1hZ2UoZWwpfSlcblxuICAvLyBpbml0U2hvd2Nhc2VzKClcbiAgaW5pdE5hdkFuaW1hdGlvbigyNSlcbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gIGJvb3QoW1xuICAgICdtZWRpYS9pbi8xNDkwMjg0MV8xMjU5MTEyNzI3NDgzOTEyXzMyODQzMTUxMDYzMTg5ODE1NzRfby5qcGcnLFxuICAgICdtZWRpYS9pbi8xOTg3NTI3Ml8xMDEwMDQ4MjI5NjI4NjcwNl8zODgzMzA2Mjc1NTQ2MTY2Njc2X24uanBnJyxcbiAgICAnbWVkaWEvaW4vM2IuanBnJyxcbiAgICAnbWVkaWEvaW4vNmEuanBnJyxcbiAgICAnbWVkaWEvaW4vRFNDXzAxMjYuanBnJyxcbiAgICAnbWVkaWEvaW4vRFNDXzAxMjguSlBHJyxcbiAgICAnbWVkaWEvaW4vRFNDXzAzNTAuSlBHJ1xuICBdKVxufSlcbiIsImltcG9ydCB7Z2V0QmFja2dyb3VuZEltYWdlVXJsLCBnZXRWaWV3cG9ydFdpZHRoLCBnZXRWaWV3cG9ydEhlaWdodH0gZnJvbSAnLi9saWIuanMnXG5pbXBvcnQge1Bob3RvfSBmcm9tICcuL3Bob3RvLmpzJ1xuXG5jb25zdCBMYXJnZVZpZXcgPSB7XG4gIGluaXQob3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG4gICAgaWYgKG9wdGlvbnMudHJhbnNpdGlvbikgdGhpcy50cmFuc2l0aW9uU2V0dXAgPSBvcHRpb25zLnRyYW5zaXRpb25cbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zXG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgLy8gc2FtZSBhcyBpbiB0aGUgc2Nzc1xuICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSAnbGFyZ2Utdmlld19jb250YWluZXInXG4gICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXJcblxuICAgIC8vIGlmIChvcHRpb25zLmNsaWNrQ2IpXG4gICAgLy8gdGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7dGhpcy5oaWRlKCl9KVxuICAgIHRoaXMud3JhcCA9IG9wdGlvbnMud3JhcCB8fCB0aGlzLmNvbnRhaW5lclxuXG4gICAgdGhpcy53cmFwLnN0eWxlLm9wYWNpdHkgPSAnMCdcbiAgICAvLyB0aGlzLndyYXAuY2xhc3NMaXN0LmFkZCgndHJhbnNwYXJlbnQnKVxuXG4gICAgdGhpcy53cmFwLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAvLyB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdub25lZCcpXG4gICAgdGhpcy5oaWRkZW4gPSB0cnVlXG4gICAgLy8gdGhpcy5waG90byA9IG5ldyBQaG90bygpXG4gIH0sXG5cbiAgc2V0UGhvdG8odXJsKSB7XG4gICAgY29uc3QgcGhvdG8gPSBuZXcgUGhvdG8odXJsKVxuICAgIC8vIHRoaXMucGhvdG8gPSBuZXcgUGhvdG8odXJsKVxuXG4gICAgcmV0dXJuIHBob3RvLmxvYWQoKVxuICAgIC8vIC50aGVuKClcbiAgICAudGhlbigocGhvdG8pID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICh0aGlzLmhpZGRlbikge1xuICAgICAgICAgIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcigndGhlIGxhcmdlLXZpZXcgY29udGFpbmVyIG11c3QgYmUgZGlzcGxheWVkIGJlZm9yZSB3ZSBjYW4gZml0IGluIHRoZSBwaG90bycpKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIHRoaXMucGhvdG8uaGlkZShmYWxzZSlcbiAgICAgICAgICBwaG90by5oaWRlKGZhbHNlKVxuICAgICAgICAgIGlmICh0aGlzLnBob3RvKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5yZXBsYWNlQ2hpbGQocGhvdG8uZWwsIHRoaXMucGhvdG8uZWwpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHBob3RvLmVsKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHBob3RvLmZpdEJ5Qm90aFNpZGVzKHRoaXMuY29udGFpbmVyKVxuICAgICAgICAgIHBob3RvLnNob3coZmFsc2UpXG4gICAgICAgICAgdGhpcy5waG90byA9IHBob3RvXG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICAgIFByb21pc2UucmVqZWN0KGVycilcbiAgICAgIH1cbiAgICB9KVxuICB9LFxuXG4gIC8qXG4gIHRyYW5zaXRpb25lbmRDYihjYikge1xuICAgIGNiKClcbiAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgdGhpcy50cmFuc2l0aW9uZW5kQ2IpXG4gIH1cbiAgKi9cblxuICAvKipcbiAgICBAZGVzY3JpcHRpb24gSWYgdXJsIGlzIGdpdmUsIHRoZW4sIGFmdGVyIHNob3cgdHJhbnNpdGlvbiBoYXMgZW5kZWQsIGl0IGxvYWRzIHRoZVxuICAgIG5ldyBwaG90b1xuICAqL1xuICBzaG93KHVybCkge1xuICAgIC8vIGlmICh0aGlzLnNob3dQZW5kaW5nKSB7XG4gICAgLy8gICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMuc2hvd1RpbWVvdXRJZClcbiAgICAvLyAgIC8vIHRoaXMuY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoKVxuICAgIC8vXG4gICAgLy8gICAvLyBzaG91bGQgcmVtb3ZlRXZlbnRMaXN0ZW5lciBvZiBpdHNlbGZcbiAgICAvLyAgIHRoaXMudHJhbnNpdGlvbmVuZENiKClcbiAgICAvL1xuICAgIC8vXG4gICAgLy8gfVxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpc1xuICAgICAgICBmdW5jdGlvbiB0cmFuc2l0aW9uZW5kQ2IoKSB7XG4gICAgICAgICAgc2VsZi53cmFwLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCB0cmFuc2l0aW9uZW5kQ2IpXG4gICAgICAgICAgc2VsZi50cmFuc2l0aW9uT2ZmKClcbiAgICAgICAgICAvLyB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCd0cmFuc2l0aW9uJylcblxuICAgICAgICAgIHNlbGYuaGlkZGVuID0gZmFsc2VcblxuICAgICAgICAgIGNvbnNvbGUubG9nKCdMYXJnZVZpZXcuc2hvdywgdHJhbnNpdGlvbmVuZENiJywgc2VsZilcbiAgICAgICAgICByZXNvbHZlKClcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMud3JhcC5zdHlsZS5kaXNwbGF5ID0gdGhpcy5vcHRpb25zLmRpc3BsYXkgfHwgJ2ZsZXgnXG4gICAgICAgIC8vIHRoaXMud3JhcC5jbGFzc0xpc3QucmVtb3ZlKCdub25lZCcpXG4gICAgICAgIHRoaXMud3JhcC5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgdHJhbnNpdGlvbmVuZENiKVxuICAgICAgICB0aGlzLnRyYW5zaXRpb25PbigpXG5cbiAgICAgICAgdGhpcy5zaG93UGVuZGluZyA9IHRydWVcbiAgICAgICAgLy8gdGhpcyBpcyBudXRzXG4gICAgICAgIHRoaXMuc2hvd1RpbWVvdXRJZCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLnNob3dQZW5kaW5nID0gZmFsc2VcbiAgICAgICAgICB0aGlzLndyYXAuc3R5bGUub3BhY2l0eSA9ICcxJ1xuICAgICAgICAgIC8vIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RyYW5zaXRpb24nKVxuICAgICAgICB9LCA1MClcblxuICAgICAgICAvLyB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzb2xpZCcpXG4gICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICByZWplY3QoZXJyKVxuICAgICAgfVxuICAgIH0pXG4gICAgLnRoZW4oKCkgPT4ge1xuICAgICAgaWYgKHVybCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXRQaG90byh1cmwpXG4gICAgICB9XG4gICAgfSwgKGVycikgPT4ge1xuICAgICAgUHJvbWlzZS5yZWplY3QoZXJyKVxuICAgIH0pXG4gIH0sXG5cbiAgaGlkZSgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGZ1bmN0aW9uIHRyYW5zaXRpb25lbmRDYigpIHtcbiAgICAgICAgICBzZWxmLndyYXAucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHRyYW5zaXRpb25lbmRDYilcbiAgICAgICAgICBzZWxmLnRyYW5zaXRpb25PZmYoKVxuICAgICAgICAgIC8vIHNlbGYud3JhcC5jbGFzc0xpc3QucmVtb3ZlKCd0cmFuc2l0aW9uJylcbiAgICAgICAgICBzZWxmLndyYXAuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgICAgIHNlbGYucGhvdG8uaGlkZShmYWxzZSlcbiAgICAgICAgICAvLyBzZWxmLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdub25lZCcpXG5cbiAgICAgICAgICBzZWxmLmhpZGRlbiA9IHRydWVcbiAgICAgICAgICBjb25zb2xlLmxvZygnTGFyZ2VWaWV3LmhpZGUsIHRyYW5zaXRpb25lbmRDYicsIExhcmdlVmlldyk7XG4gICAgICAgICAgcmVzb2x2ZSgpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLndyYXAuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHRyYW5zaXRpb25lbmRDYilcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uT24oKVxuICAgICAgICAvLyB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0cmFuc2l0aW9uJylcblxuICAgICAgICB0aGlzLndyYXAuc3R5bGUub3BhY2l0eSA9ICcwJ1xuICAgICAgICAvLyB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdzb2xpZCcpXG4gICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICByZWplY3QoZXJyKVxuICAgICAgfVxuICAgIH0pXG4gIH0sXG5cbiAgdHJhbnNpdGlvbk9mZigpIHtcbiAgICB0aGlzLndyYXAuc3R5bGUudHJhbnNpdGlvbiA9ICdub25lJ1xuICB9LFxuXG4gIHRyYW5zaXRpb25PbigpIHtcbiAgICB0aGlzLndyYXAuc3R5bGUudHJhbnNpdGlvbiA9IHRoaXMudHJhbnNpdGlvblNldHVwXG4gIH1cbn1cblxuLy8gY29uc29sZS5sb2coJ0xhcmdlVmlldycsIExhcmdlVmlldylcblxuY2xhc3MgRW5sYXJnYWJsZSB7XG4gIGNvbnN0cnVjdG9yKGVsLCB1cmwpIHtcbiAgICB0aGlzLmVsID0gZWxcbiAgICB0aGlzLnVybCA9IHVybFxuXG4gICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xpY2tDYi5iaW5kKHRoaXMpKVxuICB9XG5cbiAgZW5sYXJnZSh1cmwpIHtcbiAgICBMYXJnZVZpZXcuc2hvdyh1cmwpXG4gICAgLnRoZW4oKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ0VubGFyZ2FibGUuZW5sYXJnZSwgTGFyZ2VWaWV3IHNob3duJylcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH0pXG5cbiAgfVxuXG4gIGNsaWNrQ2IoKSB7XG4gICAgY29uc29sZS5sb2coJ0VubGFyZ2FibGUuY2xpY2tDYiwgdGhpczogJywgdGhpcyk7XG4gICAgdGhpcy5lbmxhcmdlKHRoaXMudXJsKVxuICB9XG59XG5cbi8qXG5mdW5jdGlvbiBlbmxhcmdlU2hvd2Nhc2UoKSB7XG4gIGNvbnN0IGltYWdlVXJsID0gZ2V0QmFja2dyb3VuZEltYWdlVXJsKHRoaXMpXG4gIExhcmdlVmlldy5zaG93KGltYWdlVXJsKVxufVxuXG5mdW5jdGlvbiBnZXRFbmxhcmdhYmxlRWxlbWVudHMoKSB7XG4gIHZhciBlbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3V0IC5zaG93Y2FzZSAuaW1hZ2UtdGh1bWInKVxuICBlbHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChlbHMsIDApXG5cbiAgZWxzLmZvckVhY2goZWwgPT4ge1xuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZW5sYXJnZVNob3djYXNlQ2IpXG4gIH0pXG59XG4qL1xuXG5leHBvcnQge0xhcmdlVmlldywgRW5sYXJnYWJsZX1cbiIsIlxuLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNjk0Mjc4NS93aW5kb3ctaW5uZXJ3aWR0aC12cy1kb2N1bWVudC1kb2N1bWVudGVsZW1lbnQtY2xpZW50d2lkdGhcbi8vIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTE1NjM4OCNjMTRcbmZ1bmN0aW9uIGdldFZpZXdwb3J0SGVpZ2h0KCkge1xuICAvLyBnZXRFbGVtZW50c0J5VGFnTmFtZSwgaWYgSSdtIG5vdCBtaXN0YWtlbiByZXR1cm5zIGEgbGl2ZWxpc3QgKGhlbGwga25vd3Mgd2hhdCB0aGF0IGlzLCBidXQgaXQnc1xuICAvLyB1cGRhdGVkIGxpdmUgLSBhcyBkb20gZ2V0cyBjaGFuZ2VkKS4gSSdtIG5vdCBzdXJlIGFib3V0IHVzaW5nIGl0LCBpdCBiZWhhdmVkIG1pc3RlcmlvdXNseSBvbmNlLi4uXG4gIC8vIEJ1dCwgcXVlcnlTZWxlY3RvciBpcyBub3Qgc28gY29tcGF0aWJsZS5cbiAgLy8gTWF5YmU6IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXS5jbGllbnRXaWR0aClcbiAgcmV0dXJuIHdpbmRvdy5pbm5lckhlaWdodCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0ID9cbiAgICBNYXRoLm1pbih3aW5kb3cuaW5uZXJIZWlnaHQsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpIDpcbiAgICB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodFxuICAgICAgfHwgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdLmNsaWVudEhlaWdodCk7XG59XG5cbmZ1bmN0aW9uIGdldFZpZXdwb3J0V2lkdGgoKSB7XG4gIHJldHVybiB3aW5kb3cuaW5uZXJXaWR0aCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggP1xuICAgIE1hdGgubWluKHdpbmRvdy5pbm5lcldpZHRoLCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpIDpcbiAgICB3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGhcbiAgICAgIHx8IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXS5jbGllbnRXaWR0aCk7XG59XG5cblxuLypcblxuTm9kZUxpc3QgdG8gYXJyYXlcbmZ1bmN0aW9uIHRvQXJyYXkob2JqKSB7XG4gIHZhciBhcnJheSA9IFtdO1xuICAvLyBpdGVyYXRlIGJhY2t3YXJkcyBlbnN1cmluZyB0aGF0IGxlbmd0aCBpcyBhbiBVSW50MzJcbiAgZm9yICh2YXIgaSA9IG9iai5sZW5ndGggPj4+IDA7IGktLTspIHtcbiAgICBhcnJheVtpXSA9IG9ialtpXTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG4qL1xuXG5mdW5jdGlvbiBnZXRCYWNrZ3JvdW5kSW1hZ2VVcmwoZWwpIHtcbiAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKVxuXG4gIGNvbnN0IHJlZ3ggPSBuZXcgUmVnRXhwKC8uKnVybFxcKCg/OlxcXCI/Jz8pKC4rKSg/Oi5cXCc/XFxcIj8pXFwpLiovZylcbiAgY29uc3QgcmVzdWx0ID0gcmVneC5leGVjKGNvbXB1dGVkU3R5bGVbJ2JhY2tncm91bmQtaW1hZ2UnXSlcblxuICBpZiAocmVzdWx0WzFdKSB7XG4gICAgcmV0dXJuIHJlc3VsdFsxXVxuICB9XG59XG5cbmZ1bmN0aW9uIGxvZ0ZhY3RvcnkoZW52KSB7XG4gIHJldHVybiBmdW5jdGlvbihkYXRhKSB7XG4gICAgaWYgKCFlbnYuZGV2KSByZXR1cm5cblxuICAgIGNvbnNvbGUudHJhY2UoKVxuICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gIH1cbn1cblxuZXhwb3J0IHtnZXRWaWV3cG9ydFdpZHRoLCBnZXRWaWV3cG9ydEhlaWdodCwgZ2V0QmFja2dyb3VuZEltYWdlVXJsLCBsb2dGYWN0b3J5fVxuIiwiaW1wb3J0IHtnZXRWaWV3cG9ydFdpZHRoLCBnZXRWaWV3cG9ydEhlaWdodH0gZnJvbSAnLi9saWIuanMnXG5cbmNsYXNzIFBob3RvIHtcbiAgY29uc3RydWN0b3IodXJsKSB7XG4gICAgdGhpcy51cmwgPSB1cmxcbiAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgfVxuXG4gIGxvYWQoKSB7XG4gICAgLy8gY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBcbiAgICAgIC8vIG1heWJlIHRoaXMgZG9lc250IHdvcmsgaW4gc2FmYXJpIG1vYmlsZS4uLlxuICAgICAgdGhpcy5lbC5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgIHJlc29sdmUodGhpcylcbiAgICAgIH1cblxuICAgICAgdGhpcy5lbC5zcmMgPSB0aGlzLnVybFxuICAgIH0pXG4gIH1cblxuICBjYWxjdWxhdGVGaXRCeUJvdGhTaWRlcyhpbWdEaW1zLCBjb250YWluZXJEaW1zKSB7XG4gICAgLy8gY29uc3QgaW1nRGltcyA9IGltZy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIC8vIGNvbnN0IGNvbnRhaW5lckRpbXMgPSBjb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuICAgIGltZ0RpbXMucmF0aW8gPSBpbWdEaW1zLndpZHRoIC8gaW1nRGltcy5oZWlnaHRcbiAgICBjb250YWluZXJEaW1zLnJhdGlvID0gY29udGFpbmVyRGltcy53aWR0aCAvIGNvbnRhaW5lckRpbXMuaGVpZ2h0XG5cbiAgICAvLyBpZiB3aWRlciB0aGFuIGhpZ2hlclxuICAgIGlmIChpbWdEaW1zLnJhdGlvID49IGNvbnRhaW5lckRpbXMucmF0aW8pIHtcbiAgICAgIGNvbnN0IGltZ0RpbXNOZXcgPSB7XG4gICAgICAgIHdpZHRoOiBjb250YWluZXJEaW1zLndpZHRoLFxuICAgICAgICBoZWlnaHQ6IGNvbnRhaW5lckRpbXMud2lkdGggLyBpbWdEaW1zLnJhdGlvXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBpbWdEaW1zTmV3XG5cbiAgICAvLyBpZiBoaWdoZXIgdGhhbiB3aWRlclxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBpbWdEaW1zTmV3ID0ge1xuICAgICAgICAvLyB3aWR0aDogY29udGFpbmVyRGltcy5oZWlnaHQgKiBpbWdEaW1zLnJhdGlvLFxuICAgICAgICB3aWR0aDogY29udGFpbmVyRGltcy5oZWlnaHQgKiBpbWdEaW1zLnJhdGlvLFxuICAgICAgICBoZWlnaHQ6IGNvbnRhaW5lckRpbXMuaGVpZ2h0XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBpbWdEaW1zTmV3XG4gICAgfVxuXG4gIH1cblxuICBjYWxjdWxhdGVGaXRCeUhlaWdodChpbWdEaW1zLCBjb250YWluZXJEaW1zKSB7XG4gICAgLy8gY29uc3QgaW1nRGltcyA9IGltZy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIC8vIGNvbnN0IGNvbnRhaW5lckRpbXMgPSBjb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuICAgIGltZ0RpbXMucmF0aW8gPSBpbWdEaW1zLndpZHRoIC8gaW1nRGltcy5oZWlnaHRcbiAgICBjb25zdCBpbWdEaW1zTmV3ID0ge1xuICAgICAgaGVpZ2h0OiBjb250YWluZXJEaW1zLmhlaWdodCxcbiAgICAgIHdpZHRoOiBjb250YWluZXJEaW1zLmhlaWdodCAqIGltZ0RpbXMucmF0aW8sXG4gICAgICByYXRpbzogaW1nRGltcy5yYXRpb1xuICAgIH1cblxuICAgIHJldHVybiBpbWdEaW1zTmV3XG4gIH1cblxuICBmaXRCeUhlaWdodChjb250YWluZXIpIHtcbiAgICBjb25zdCBpbWdEaW1zID0gdGhpcy5lbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIGNvbnN0IGNvbnRhaW5lckRpbXMgPSBjb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuICAgIGNvbnN0IGltZ0RpbXNPYmogPSB7XG4gICAgICB3aWR0aDogaW1nRGltcy53aWR0aCxcbiAgICAgIGhlaWdodDogaW1nRGltcy5oZWlnaHQsXG4gICAgfVxuXG4gICAgY29uc3QgY29udGFpbmVyRGltc09iaiA9IHtcbiAgICAgIHdpZHRoOiBjb250YWluZXJEaW1zLndpZHRoLFxuICAgICAgaGVpZ2h0OiBjb250YWluZXJEaW1zLmhlaWdodCxcbiAgICB9XG5cbiAgICB0aGlzLmRpbXMgPSB0aGlzLmNhbGN1bGF0ZUZpdEJ5SGVpZ2h0KFxuICAgICAgaW1nRGltc09iaixcbiAgICAgIGNvbnRhaW5lckRpbXNPYmpcbiAgICApXG5cbiAgICAvLyBjb25zdCBpbWdEaW1zID0gdGhpcy5jYWxjdWxhdGVGaXRCeUhlaWdodChpbWcsIHRoaXMuZWwpXG4gICAgdGhpcy5lbC5zdHlsZS53aWR0aCA9IE1hdGgucm91bmQodGhpcy5kaW1zLndpZHRoKSArICdweCdcbiAgICB0aGlzLmVsLnN0eWxlLmhlaWdodCA9IE1hdGgucm91bmQodGhpcy5kaW1zLmhlaWdodCkgKyAncHgnXG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgLy8gaW4gZml0QnlIZWlnaHQgSSBkaWRuJ3QgY29udmVydCBkaW1zIHRvIHN0cmluZyBiZWZvcmUgc2V0dGluZyB0aGVtIG9uXG4gIC8vIHdpZHRoIGFuZCBoZWlnaHQgaW4gaW5saW5lIHN0eWxlcy4uIEhvd2V2ZXIsIEkgYmVsaWV2ZSwgb24gbW9iaWxlIHRoZSBmaXRCeUJvdGhTaWRlc1xuICAvLyBzaG91bGQgaGF2ZSBiZWVuIGNhbGxlZCwgd2hlcmUgdGhlcmUgd2Fzbid0IHRoaXMgdHlwby4gSW4gdGhlIGZpdEJ5Qm90aFNpZGVzIEkgZGlkbid0XG4gIC8vIGNvbnZlcnQgdGhlIHZhbHVlcyB0byB3aG9sZSBudW1iZXJzLCBub25lIHRoZSBsZXNzLlxuXG4gIC8vIEkgZml4ZWQgdGhhdCwgYW5kIEkgYWxzbyBkZWNpZGVkIHRvIG1vdmUgdGhlIHZhbHVlcyBvZiBnZXRCb3VuZGluZ0NsaWVudFJlY3Qgb3V0cHV0XG4gIC8vIHRvIGEgcmVndWxhciBvYmplY3QgbGl0ZXJhbCwgaW5zdGVhZCBvZiB1c2luZyB0aGUgb3V0cHV0IGl0c2VsZiAod2hpY2ggaSBiZWxpZXZlIGlzIGFuIGluc3RhbmNlXG4gIC8vIG9mIHNvbWUgc3BlY2lhbCBjbGFzcyksIGluY2x1ZGluZyBhZGRpbmcgbmV3IHByb3BlcnRpZXMgdG8gaXQuXG5cbiAgLy8gQW5vdGhlciB0aGluZyBJIHdhbnQgdG8gY2hlY2sgaXMgd2hldGhlciBvciBub3QgdGhlIHdpZHRoIGFuZCBoZWlnaHQgaW4gZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGFyZVxuICAvLyBiYXNpYyBpbXBsZW1lbnRhdGlvbi4uIEFsc28sIG1heWJlIGl0IG1ha2VzIHNlbnNlIHRvIHBhcnNlSW50IHRoZSB2YWx1ZXMgb2YgZ2V0Qm91bmRpbmdDbGllbnRSZWN0LFxuICAvLyBvciBkb2luZyBzb21ldGhpbmcgaW4gdGhhdCBzcGlyaXRcbiAgZml0QnlCb3RoU2lkZXMoY29udGFpbmVyKSB7XG4gICAgY29uc3QgaW1nRGltcyA9IHRoaXMuZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICBjb25zdCBjb250YWluZXJEaW1zID0gY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cbiAgICBjb25zdCBpbWdEaW1zT2JqID0ge1xuICAgICAgd2lkdGg6IGltZ0RpbXMud2lkdGgsXG4gICAgICBoZWlnaHQ6IGltZ0RpbXMuaGVpZ2h0LFxuICAgIH1cblxuICAgIGNvbnN0IGNvbnRhaW5lckRpbXNPYmogPSB7XG4gICAgICB3aWR0aDogY29udGFpbmVyRGltcy53aWR0aCxcbiAgICAgIGhlaWdodDogY29udGFpbmVyRGltcy5oZWlnaHQsXG4gICAgfVxuXG4gICAgdGhpcy5kaW1zID0gdGhpcy5jYWxjdWxhdGVGaXRCeUJvdGhTaWRlcyhcbiAgICAgIGltZ0RpbXNPYmosXG4gICAgICBjb250YWluZXJEaW1zXG4gICAgKVxuXG4gICAgdGhpcy5lbC5zdHlsZS53aWR0aCA9IE1hdGgucm91bmQodGhpcy5kaW1zLndpZHRoKSArICdweCdcbiAgICB0aGlzLmVsLnN0eWxlLmhlaWdodCA9IE1hdGgucm91bmQodGhpcy5kaW1zLmhlaWdodCkgKyAncHgnXG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgY2xlYXJJbmxpbmVTdHlsZXMoKSB7XG4gICAgaWYgKHRoaXMuZWwuc3R5bGUucmVtb3ZlUHJvcGVydHkpIHtcbiAgICAgIHRoaXMuZWwuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3dpZHRoJylcbiAgICAgIHRoaXMuZWwuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2hlaWdodCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIElFOVxuICAgICAgdGhpcy5lbC5zdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ3dpZHRoJylcbiAgICAgIHRoaXMuZWwuc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdoZWlnaHQnKVxuICAgIH1cbiAgfVxuXG4gIGhpZGUoaGFyZCkge1xuICAgIGhhcmQgPyB0aGlzLmVsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIiA6IHRoaXMuZWwuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCJcbiAgfVxuXG4gIHNob3coaGFyZCkge1xuICAgIGlmIChoYXJkKSB7XG4gICAgICB0aGlzLmVsLnN0eWxlLnJlbW92ZVByb3BlcnR5KCdkaXNwbGF5JylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndmlzaWJpbGl0eScpXG4gICAgfVxuXG4gICAgLy8gaGFyZCA/IHRoaXMuZWwuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lXCIgOiB0aGlzLmVsLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIlxuICB9XG59XG5cbmV4cG9ydCB7UGhvdG99XG4iXSwic291cmNlUm9vdCI6IiJ9