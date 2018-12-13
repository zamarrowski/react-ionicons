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

var IosThunderstormOutline = function (_Component) {
  _inherits(IosThunderstormOutline, _Component);

  function IosThunderstormOutline(props) {
    _classCallCheck(this, IosThunderstormOutline);

    var _this = _possibleConstructorReturn(this, (IosThunderstormOutline.__proto__ || Object.getPrototypeOf(IosThunderstormOutline)).call(this, props));

    _this.state = { classNames: [], animationActive: false };
    _this._getClasses = _this._getClasses.bind(_this);
    return _this;
  }

  _createClass(IosThunderstormOutline, [{
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
        _react2.default.createElement('path', { d: 'M566.4 352l-35.6 118.8-12.4 41.2h105.6l-138.4 219.6 31-115.4 10.8-40.4h-145.6l49.8-224h134.8zM609.4 320h-203.4l-64 288h143.6l-85.6 320 282-448h-120.6l48-160z M748.8 283.8l-26.6-0.2c-23.4-107.2-110.2-187.6-250.2-187.6s-255.6 100.8-255.6 243l0.6 9.6c-84.4 11.2-153 90.6-153 179.4 0 94 75.8 176 169.4 176h194.6l8.4-32c-126 0-203 0-203 0-36 0-70.2-16.2-96.4-43.8-26-27.4-40.8-64.8-40.8-102 0-35 13.2-69.6 37-97 23.6-27 54.8-44.4 88.2-49l29.6-4-2-29.8-0.6-8.6c0.2-58.6 23.4-112.6 65.2-151.8s98-58.8 158.4-58.8c58.6 0 110 14.6 148.6 45.8 35.4 28.8 59.8 69.4 70.4 117.4l5.8 26.8c23-1.4 52-1.4 52-1.4 49 0 94.2 17.2 127.4 48.2 33.4 31.2 51.6 74.4 51.6 121.6 0 89.4-67.4 169.4-153.6 183.6 0 0-17.8 2.8-40.4 2.8-7.4 0-140.8 0-140.8 0l-20.4 32h161.4c144 0 226-104 226-220 0-117.2-94.6-200.2-211.2-200.2z' })
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

  return IosThunderstormOutline;
}(_react.Component);

IosThunderstormOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosThunderstormOutline.propTypes = {
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

exports.default = IosThunderstormOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosThunderstormOutline.js.map