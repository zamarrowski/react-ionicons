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

var IosLocateOutline = function (_Component) {
  _inherits(IosLocateOutline, _Component);

  function IosLocateOutline(props) {
    _classCallCheck(this, IosLocateOutline);

    var _this = _possibleConstructorReturn(this, (IosLocateOutline.__proto__ || Object.getPrototypeOf(IosLocateOutline)).call(this, props));

    _this.state = { classNames: [], animationActive: false };
    _this._getClasses = _this._getClasses.bind(_this);
    return _this;
  }

  _createClass(IosLocateOutline, [{
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
        _react2.default.createElement('path', { d: 'M640 512c0 70.692-57.308 128-128 128s-128-57.308-128-128c0-70.692 57.308-128 128-128s128 57.308 128 128z M944 496h-48.4c-8.2-199.4-168.2-359.4-367.6-367.6v-48.4c0-8.8-7.2-16-16-16s-16 7.2-16 16v48.4c-199.4 8.2-359.4 168.2-367.6 367.6h-48.4c-8.8 0-16 7.2-16 16s7.2 16 16 16h48.4c8.2 199.4 168.4 359.4 367.6 367.6v48.4c0 8.8 7.2 16 16 16s16-7.2 16-16v-48.4c199.4-8.2 359.4-168.4 367.6-367.6h48.4c8.8 0 16-7.2 16-16s-7.2-16-16-16zM760.8 760.8c-62.8 62.8-144.8 98.8-232.8 102.8v-79.6c0-8.8-7.2-16-16-16s-16 7.2-16 16v79.6c-88-4-170.2-40-232.8-102.8-62.8-62.6-99-144.8-102.8-232.8h79.6c8.8 0 16-7.2 16-16s-7.2-16-16-16h-79.6c4-88 40-170.2 102.8-232.8s144.8-99 232.8-102.8v79.6c0 8.8 7.2 16 16 16s16-7.2 16-16v-79.6c88 4 170.2 40 232.8 102.8s99 144.8 102.8 232.8h-79.6c-8.8 0-16 7.2-16 16s7.2 16 16 16h79.6c-3.8 88-40 170.2-102.8 232.8z' })
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

  return IosLocateOutline;
}(_react.Component);

IosLocateOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosLocateOutline.propTypes = {
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

exports.default = IosLocateOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosLocateOutline.js.map