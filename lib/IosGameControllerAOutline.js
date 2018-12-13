'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _SVG = require('./SVG');

var _SVG2 = _interopRequireDefault(_SVG);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IosGameControllerAOutline = function (_Component) {
  _inherits(IosGameControllerAOutline, _Component);

  function IosGameControllerAOutline(props) {
    _classCallCheck(this, IosGameControllerAOutline);

    var _this = _possibleConstructorReturn(this, (IosGameControllerAOutline.__proto__ || Object.getPrototypeOf(IosGameControllerAOutline)).call(this, props));

    _this.state = { classNames: [], animationActive: false };
    _this._getClasses = _this._getClasses.bind(_this);
    return _this;
  }

  _createClass(IosGameControllerAOutline, [{
    key: 'render',
    value: function render() {
      var style = _extends({}, this.props.style, {
        color: this.props.color,
        fontSize: this.props.fontSize
      });

      return _react2.default.createElement(
        _SVG2.default,
        {
          style: this.props.style,
          className: this._getClasses(),
          fill: this.props.color,
          width: this.props.fontSize,
          height: this.props.fontSize,
          viewBox: '0 0 1024 1024',
          onClick: this.props.onClick,
          rotate: this.props.rotate ? 1 : 0,
          shake: this.props.shake ? 1 : 0,
          beat: this.props.beat ? 1 : 0
        },
        _react2.default.createElement('path', { d: 'M389.644 480h-69.644v-69.524c0-5.634-5.208-10.476-10.606-10.476h-44.29c-5.396 0-9.104 4.744-9.104 10.356v69.644h-70.934c-5.23 0-9.066 4.286-9.066 9.542v42.854c0 5.396 4.062 11.606 9.722 11.606h70.278v70.934c0 5.23 4.286 9.066 9.542 9.066h42.854c5.396 0 11.606-4.062 11.606-9.722v-70.28h69.524c5.634 0 10.476-5.208 10.476-10.606v-44.29c-0.002-5.396-4.746-9.104-10.358-9.104z M724.628 558.126c-21.472 0-38.902 17.030-38.902 38.306 0 21.11 17.43 38.168 38.902 38.168 21.566 0 38.996-17.058 38.996-38.168 0-21.276-17.428-38.306-38.996-38.306z M639.532 474.33c-21.472 0-38.902 17.206-38.902 38.336 0 21.132 17.43 38.306 38.902 38.306 21.566 0 38.996-17.174 38.996-38.306 0-21.13-17.43-38.336-38.996-38.336z M809.724 474.33c-21.458 0-38.884 17.206-38.884 38.336 0 21.132 17.428 38.306 38.884 38.306 21.474 0 38.904-17.174 38.904-38.306 0-21.13-17.428-38.336-38.904-38.336z M724.628 390.602c-21.472 0-38.902 17.204-38.902 38.338 0 21.132 17.43 38.292 38.902 38.292 21.566 0 38.996-17.158 38.996-38.292 0-21.136-17.428-38.338-38.996-38.338z M738.538 324c51.676 0 99.408 18.628 134.408 52.458 35.504 34.314 55.054 82.036 55.054 134.378 0 52.606-19.612 100.81-55.222 135.738-35.126 34.452-82.8 53.426-134.24 53.426h-453.060c-51.424 0-99.096-18.974-134.234-53.43-35.624-34.934-55.244-83.136-55.244-135.734 0-52.334 19.56-100.056 55.078-134.376 35.008-33.83 82.74-52.46 134.4-52.46h453.060zM738.538 292h-453.060c-122.396 0-221.478 90.916-221.478 218.836 0 128.002 99.082 221.164 221.478 221.164h453.058c122.444 0 221.464-93.162 221.464-221.164 0-127.92-99.020-218.836-221.462-218.836v0z' })
      );
    }
  }, {
    key: '_getClasses',
    value: function _getClasses() {
      return [].concat(_toConsumableArray(this.state.classNames), [this.props.className]).join(' ');
    }
  }, {
    key: '_getPathByIconName',
    value: function _getPathByIconName() {
      var _this2 = this;

      var icon = icons.find(function (icon) {
        return icon.tags[0] === _this2.props.icon;
      });
      if (icon) return icon.paths.join(' ');
      return '';
    }
  }]);

  return IosGameControllerAOutline;
}(_react.Component);

IosGameControllerAOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosGameControllerAOutline.propTypes = {
  // style
  style: _propTypes2.default.object,
  color: _propTypes2.default.string,
  fontSize: _propTypes2.default.string,

  // animation
  shake: _propTypes2.default.bool,
  beat: _propTypes2.default.bool,
  rotate: _propTypes2.default.bool,

  // functions
  onClick: _propTypes2.default.func
};

exports.default = IosGameControllerAOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosGameControllerAOutline.js.map