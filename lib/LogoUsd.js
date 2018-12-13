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

var LogoUsd = function (_Component) {
  _inherits(LogoUsd, _Component);

  function LogoUsd(props) {
    _classCallCheck(this, LogoUsd);

    var _this = _possibleConstructorReturn(this, (LogoUsd.__proto__ || Object.getPrototypeOf(LogoUsd)).call(this, props));

    _this.state = { classNames: [], animationActive: false };
    _this._getClasses = _this._getClasses.bind(_this);
    return _this;
  }

  _createClass(LogoUsd, [{
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
        _react2.default.createElement('path', { d: 'M822.774 606.512c-6.238-19.154-15.782-37.122-28.602-53.904-12.844-16.764-28.792-31.652-47.86-44.662-19.078-12.996-41.442-23.26-67.106-30.8-10.286-2.726-28.378-7.012-52.208-12.836-17.032-4.148-33-8.4-51-12.734v-211.446c18 4.792 30.504 12.404 43.852 20.86 28.558 18.080 46.464 49.010 51.71 91.010h138.348c-1.308-36-9.3-65.52-23.992-92.040-16.14-29.086-37.954-54.048-65.46-73.912-27.5-19.844-60.45-34.98-96.754-44.91-15.768-4.306-29.702-7.928-47.702-10.366v-66.772h-128v66.334c-14 2.088-30.296 4.89-44.852 8.5-34.484 8.566-64.776 21.736-91.902 39.528-27.142 17.81-48.704 40.224-65.208 67.254-16.502 27.046-24.624 59.040-24.624 96 0 19.17 2.814 37.986 8.314 56.47 5.504 18.482 14.884 35.934 28.084 52.362 13.206 16.428 30.99 31.316 53.374 44.664 22.366 13.344 49.41 24.128 83.152 32.342 18.574 4.69 37.66 9.068 53.66 13.152v239.172c-22-5.838-43.778-14.798-61.356-26.958-18.34-12.654-32.132-27.906-42.396-47.768-9.558-18.458-14.146-41.052-14.814-65.052h-137.432c1.39 42 10.5 78.988 27.344 110.742 17.598 33.208 41.066 59.92 70.408 81.124 29.324 21.226 62.786 36.712 102.396 46.982 17.77 4.608 37.852 7.92 55.852 10.46v70.692h128v-69.080c20-2.138 37.914-5.38 57.054-9.758 37.402-8.546 71.29-22.072 100.632-40.552 29.324-18.48 53.242-42.256 71.222-71.362 17.96-29.082 27.090-64.17 27.090-105.238 0.002-19.156-3.002-38.328-9.224-57.498zM448 419.398c-24-7.486-47.824-18.176-64.102-32.096-17.242-14.71-25.346-35.068-25.346-61.090 0-18.482 4.828-33.88 14.008-46.204 9.16-12.322 19.824-22.076 33.76-29.262 12.36-6.378 27.68-11.13 41.68-14.276v182.928zM685.804 718.942c-5.878 13.346-15.398 25.152-28.606 35.422-13.204 10.266-31.488 18.656-52.754 25.154-9 2.756-16.446 4.888-28.446 6.472v-214.22c20 5.248 36.36 10.664 52.652 16.262 16.124 5.488 31.496 14.886 45.074 28.232 13.57 13.352 20.618 34.060 20.618 62.12 0.002 13.7-2.674 27.21-8.538 40.558z' })
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

  return LogoUsd;
}(_react.Component);

LogoUsd.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

LogoUsd.propTypes = {
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

exports.default = LogoUsd;
module.exports = exports['default'];
//# sourceMappingURL=LogoUsd.js.map