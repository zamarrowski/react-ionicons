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

var LogoDribbble = function (_Component) {
  _inherits(LogoDribbble, _Component);

  function LogoDribbble(props) {
    _classCallCheck(this, LogoDribbble);

    var _this = _possibleConstructorReturn(this, (LogoDribbble.__proto__ || Object.getPrototypeOf(LogoDribbble)).call(this, props));

    _this.state = { classNames: [], animationActive: false };
    _this._getClasses = _this._getClasses.bind(_this);
    return _this;
  }

  _createClass(LogoDribbble, [{
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
        _react2.default.createElement('path', { d: 'M512 128c-212 0-384 172-384 384 0 212.2 172 384 384 384s384-171.8 384-384c0-212-172-384-384-384zM755.8 305c43.2 50.8 70.6 115.2 75.4 185.8-69.2-3.6-152-3.6-218.4 2.6-8.4-21.2-17-42-26.4-62 76.6-33.2 135.6-76.8 169.4-126.4zM512 192c77.6 0 148.8 27.6 204.2 73.6-34.8 44-89.4 82.2-157.4 111.2-37.2-68.8-80-128-125.6-174.6 25.4-6.4 51.6-10.2 78.8-10.2zM367.2 227c46.2 46 89.6 104.6 127.6 173.2-72.2 22-155 34.6-243.4 34.6-16.8 0-33.2-0.6-49.4-1.6 23-90.2 84-165 165.2-206.2zM192.6 496.8c18.2 0.8 36.6 1.2 55.2 1 100.8-1.2 194.6-17 275.2-42.8 7.6 15.8 14.8 32 21.6 48.6-11 2.6-20.8 5.4-28.6 8.6-110.2 46.2-197 120.8-244 211-49.6-56.4-80-130.2-80-211.2 0-5.2 0.2-10.2 0.6-15.2zM512 832c-74 0-142-25.2-196.2-67.4 42.6-84.4 118.6-154.2 214.4-197.6 9-4.2 21-7.6 34.8-10.6 11.4 31.6 21.6 64.4 30.6 98.4 13.8 53 23.6 105.4 29.6 156.2-35.2 13.4-73.2 21-113.2 21zM685 781c-6-51.4-15.8-104.2-29.8-157.8-6.8-26-14.6-51.2-23-75.8 62.8-5.2 138-4.4 197.8 0-10.8 98.2-66 182.6-145 233.6z' })
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

  return LogoDribbble;
}(_react.Component);

LogoDribbble.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

LogoDribbble.propTypes = {
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

exports.default = LogoDribbble;
module.exports = exports['default'];
//# sourceMappingURL=LogoDribbble.js.map