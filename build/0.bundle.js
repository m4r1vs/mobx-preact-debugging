webpackJsonp([0],{

/***/ 16:
/*!****************!*\
  !*** ./Lol.js ***!
  \****************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _dec, _class;

var _preact = __webpack_require__(/*! preact */ 0);

var _mobxPreact = __webpack_require__(/*! mobx-preact */ 6);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Lol = (_dec = (0, _mobxPreact.inject)('store'), _dec(_class = (0, _mobxPreact.observer)(_class = function (_Component) {
	_inherits(Lol, _Component);

	function Lol() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, Lol);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Lol.__proto__ || Object.getPrototypeOf(Lol)).call.apply(_ref, [this].concat(args))), _this), _this.componentDidMount = function () {
			return console.log('mounted');
		}, _this.render = function (_ref2) {
			var store = _ref2.store;
			return (0, _preact.h)(
				'h1',
				{ onClick: store.inc.bind(store) },
				'Second page: ',
				store.clicks
			);
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	return Lol;
}(_preact.Component)) || _class) || _class);
exports.default = Lol;

/***/ })

});
//# sourceMappingURL=0.bundle.js.map