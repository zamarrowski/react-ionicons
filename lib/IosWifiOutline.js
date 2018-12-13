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

var IosWifiOutline = function (_Component) {
  _inherits(IosWifiOutline, _Component);

  function IosWifiOutline(props) {
    _classCallCheck(this, IosWifiOutline);

    var _this = _possibleConstructorReturn(this, (IosWifiOutline.__proto__ || Object.getPrototypeOf(IosWifiOutline)).call(this, props));

    _this.state = { classNames: [], animationActive: false };
    _this._getClasses = _this._getClasses.bind(_this);
    return _this;
  }

  _createClass(IosWifiOutline, [{
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
        _react2.default.createElement('path', { d: 'M512 224c144.6 0 293 58.2 402.8 156.8l-30.8 32.6c-45.8-40.8-97.4-73.6-154-97.4-69-29.2-142.4-44-218-44s-149 14.8-218 44c-56.6 24-108.2 56.6-154 97.4l-30.8-32.6c109.8-98.6 258.2-156.8 402.8-156.8zM512 192c-166 0-332.2 71.6-448 187.4l74.6 79.2c48.6-48.6 105-86.6 167.8-113.2 65.2-27.4 134.2-41.4 205.6-41.4s140.4 14 205.4 41.4c62.8 26.6 119.4 64.6 167.8 113.2l74.6-79.2c-115.6-115.8-281.8-187.4-447.8-187.4v0z M512 450c91.2 0 177.8 31.8 246.8 89.8l-34 34c-59.8-49.2-134.4-76-212.8-76s-153 26.8-212.8 76l-34-34c69-58 155.6-89.8 246.8-89.8zM512 418c-114.4 0-218 46.2-293.2 120.8l79.2 79.2c57.4-56.8 133.2-88 214-88s156.6 31.2 214 88l79.2-79.2c-75.2-74.6-178.8-120.8-293.2-120.8v0z M512 674c30.8 0 59.8 10.8 82.6 30.2l-82.6 82.6-82.6-82.6c22.8-19.4 51.8-30.2 82.6-30.2zM512 642c-51.8 0-97.8 24.6-127.2 62.8l127.2 127.2 127.2-127.2c-29.4-38.2-75.4-62.8-127.2-62.8v0z' })
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

  return IosWifiOutline;
}(_react.Component);

IosWifiOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosWifiOutline.propTypes = {
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

exports.default = IosWifiOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosWifiOutline.js.map