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

var IosColorFillOutline = function (_Component) {
  _inherits(IosColorFillOutline, _Component);

  function IosColorFillOutline(props) {
    _classCallCheck(this, IosColorFillOutline);

    var _this = _possibleConstructorReturn(this, (IosColorFillOutline.__proto__ || Object.getPrototypeOf(IosColorFillOutline)).call(this, props));

    _this.state = { classNames: [], animationActive: false };
    _this._getClasses = _this._getClasses.bind(_this);
    return _this;
  }

  _createClass(IosColorFillOutline, [{
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
        _react2.default.createElement('path', { d: 'M822.8 600.6l-367.6-364c0 0 0 0 0 0l-112.4-112.6c-18.6-18.6-43.2-28-67.8-28s-49.2 9.4-67.8 28v0c-37.4 37.4-37.4 98.4 0 135.8l98.6 98.6-209.8 208.4 342.6 329.2c0 0 270.2-261.4 292.2-283.4 11.6-11.6 36.4-14.2 57.2-14.2 19 0 34.8 2.2 34.8 2.2zM229.6 237.2c-12-12-18.6-28-18.6-45.2s6.6-33.2 18.6-45.2c12-12 28-18.6 45.2-18.6s33.2 6.6 45.2 18.6l99 99-90.8 90.2-98.6-98.8zM708 590c-17.8 17.8-204.6 198.6-269.6 261.6l-296.6-285.2 299.8-298.2 305.2 302.2c-16.6 3.8-29.4 10.4-38.8 19.6z M832 672c0 0-96 106.6-96 159.8s43 96.2 96 96.2c0 0 0 0 0 0 53 0 96-43.2 96-96.2 0-53.2-96-159.8-96-159.8zM877.2 877.2c-12 12.2-28.2 18.8-45.2 18.8-35.2 0-64-28.8-64-64.2 0-3.8 2-25.6 41.6-80.6 7.8-10.8 15.4-20.8 22.4-29.4 6.8 8.4 14.4 18.4 22 29 40 55.4 42 77.2 42 81 0 17.2-6.6 33.2-18.8 45.4z' })
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

  return IosColorFillOutline;
}(_react.Component);

IosColorFillOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosColorFillOutline.propTypes = {
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

exports.default = IosColorFillOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosColorFillOutline.js.map