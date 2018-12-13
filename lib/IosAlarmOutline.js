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

var IosAlarmOutline = function (_Component) {
  _inherits(IosAlarmOutline, _Component);

  function IosAlarmOutline(props) {
    _classCallCheck(this, IosAlarmOutline);

    var _this = _possibleConstructorReturn(this, (IosAlarmOutline.__proto__ || Object.getPrototypeOf(IosAlarmOutline)).call(this, props));

    _this.state = { classNames: [], animationActive: false };
    _this._getClasses = _this._getClasses.bind(_this);
    return _this;
  }

  _createClass(IosAlarmOutline, [{
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
        _react2.default.createElement('path', { d: 'M876.8 384.8c24.4-28.4 39.2-64.6 39.2-104.4 0.2-87.6-71-159.2-160.8-164.2-3.2-0.2-6.2-0.2-9.6-0.2-40.8-0.2-78.2 13.6-107.6 36.2l107.6 104.8-21 20.8c-51.4-38.8-114-64-182-69.8v-0.2c0-17-14-31-31-31s-31 14-31 31v0.2c-67.8 5.8-130.2 31-181.4 69.8l-20.8-20.8 107.6-104.8c-29.4-22.8-66.8-36.4-107.4-36.2-3.2 0-6.4 0.2-9.6 0.2-90 5-161.2 76.6-160.8 164.2 0 39.6 14.8 76 39.2 104.4l108-105.2 19 19c-70.2 63.8-114.2 156-114.2 258.4 0 87.8 32.4 168 86 229.4l-72.8 89.2 24.6 20.4 70.4-85.8c63.2 60.4 148.8 97.8 243.2 97.8h0.2c0 0 0.4 0 0.6 0 94.4 0 180.4-37.4 243.6-97.8l70.4 86 24.6-20.2-73-89.4c53.6-61.6 86-141.8 86-229.4 0-102.2-44-194.6-114.4-258.6l19-19 108.2 105.2zM152.4 335.6c-8.4-17.2-12.8-36.8-13-56-0.2-70.2 56.8-129.2 131-133.6 25.4-1.4 46.2 2.8 64.2 12.2l-182.2 177.4zM831.8 553c0 175.4-144 314.2-320.2 314.2-176 0-319.6-138.8-319.6-314.2s143.6-317.4 319.8-317.4c176.2-0 320 141.8 320 317.4zM689.4 158.4c17.6-9.6 38.6-13.6 64.2-12.2 74.4 4 131.2 63 131 133.6 0 19.2-4.6 38.8-13 56.2l-182.2-177.6z M512 320v256h-192v32h224v-288z' })
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

  return IosAlarmOutline;
}(_react.Component);

IosAlarmOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosAlarmOutline.propTypes = {
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

exports.default = IosAlarmOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosAlarmOutline.js.map