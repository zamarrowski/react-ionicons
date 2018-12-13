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

var IosColorPaletteOutline = function (_Component) {
  _inherits(IosColorPaletteOutline, _Component);

  function IosColorPaletteOutline(props) {
    _classCallCheck(this, IosColorPaletteOutline);

    var _this = _possibleConstructorReturn(this, (IosColorPaletteOutline.__proto__ || Object.getPrototypeOf(IosColorPaletteOutline)).call(this, props));

    _this.state = { classNames: [], animationActive: false };
    _this._getClasses = _this._getClasses.bind(_this);
    return _this;
  }

  _createClass(IosColorPaletteOutline, [{
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
        _react2.default.createElement('path', { d: 'M570.8 160c91.2 0 174.4 29.2 234.4 82.2 37.8 33.6 58.8 78 58.8 125.2s-20.8 91.6-58.8 125.2l-60.6 53.8c-20.8 18.4-32.2 42.4-32.2 67.8 0 25.2 11.4 49.2 32.2 67.8 18.6 16.4 32.8 22.8 61.2 27.6l1.6 0.2c11.8 2 25.2 4.2 31 9.4 5.8 5.4 9.6 16 9.6 26.2 0 5.4-1.4 15.2-9 22-69.2 61.4-170 96.8-276.4 96.8-1 0-2.2 0-3.2 0-53-0.4-104.4-9.2-152.8-26.2-50.2-17.8-94.6-43.4-132-76.4-37.4-33.2-66.4-71.8-86-114.8-19-41.6-28.6-85.4-28.6-130.2s9.6-88.4 28.4-129.8c19.6-43 48.6-81.6 86-114.8 80.6-71.2 188.6-112 296.4-112zM570.8 128c-111.4 0-227.8 40.6-317.6 120.2-167 147.6-167 389.4 0 537 83 73.4 195 110 305.8 110.8 1.2 0 2.4 0 3.4 0 110.8 0 220-35.8 297.6-104.8 28.6-25.4 23.8-73.2 0-95.6-13.2-12.2-32.6-15.2-49.2-18-23-3.8-31.8-8-45.2-20-28.6-25.4-28.6-62.2 0-87.6l60.6-53.8c92.8-82 92.8-216.4 0-298.4-68.2-60-160-89.8-255.4-89.8v0z M640 288c17.6 0 32 14.4 32 32s-14.4 32-32 32-32-14.4-32-32 14.4-32 32-32zM640 256c-35.4 0-64 28.6-64 64s28.6 64 64 64 64-28.6 64-64-28.6-64-64-64v0z M448 266c17.6 0 32 14.4 32 32s-14.4 32-32 32-32-14.4-32-32 14.4-32 32-32zM448 234c-35.4 0-64 28.6-64 64s28.6 64 64 64 64-28.6 64-64-28.6-64-64-64v0z M304 400c17.6 0 32 14.4 32 32s-14.4 32-32 32-32-14.4-32-32 14.4-32 32-32zM304 368c-35.4 0-64 28.6-64 64s28.6 64 64 64 64-28.6 64-64-28.6-64-64-64v0z M320 588c17.6 0 32 14.4 32 32s-14.4 32-32 32-32-14.4-32-32 14.4-32 32-32zM320 556c-35.4 0-64 28.6-64 64s28.6 64 64 64 64-28.6 64-64-28.6-64-64-64v0z M592 800c-53 0-96-43-96-96s43-96 96-96 96 43 96 96-43 96-96 96zM592 640c-35.2 0-64 28.8-64 64s28.8 64 64 64 64-28.8 64-64-28.8-64-64-64z' })
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

  return IosColorPaletteOutline;
}(_react.Component);

IosColorPaletteOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosColorPaletteOutline.propTypes = {
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

exports.default = IosColorPaletteOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosColorPaletteOutline.js.map