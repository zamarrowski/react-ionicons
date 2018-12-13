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

var MdHand = function (_Component) {
  _inherits(MdHand, _Component);

  function MdHand(props) {
    _classCallCheck(this, MdHand);

    var _this = _possibleConstructorReturn(this, (MdHand.__proto__ || Object.getPrototypeOf(MdHand)).call(this, props));

    _this.state = { classNames: [], animationActive: false };
    _this._getClasses = _this._getClasses.bind(_this);
    return _this;
  }

  _createClass(MdHand, [{
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
        _react2.default.createElement('path', { d: 'M901.358 547c-29.17-29.154-72.108-31.78-101.278-2.624l-83.374 83.328c-21.704 21.672-47.86 21.718-63.128 3.704-10.114-11.936-6.122-48.748-3.288-72.098l41.814-343.698c3.734-30.706-18.14-60.37-48.86-64.102-30.716-3.734-58.644 19.878-62.382 50.578l-46.122 269.954c-2.41 6.716-7.58 7.876-8.162-1.164l-15.698-350.878c0-30.93-25.084-56-56.028-56-30.946 0-56.030 25.070-56.030 56l-1.104 353.504c0.292 4.080-3.208 5.248-3.84 0.588l-49.846-275.938c-5.5-30.438-34.646-52.406-65.096-46.906-30.454 5.496-50.678 36.374-45.182 66.806l44.386 322.91c0.046 5.744-1.882 9.026-4.616 1.662l-66.218-177.034c-10.36-29.144-42.392-46.13-71.552-35.778-29.158 10.354-44.402 44.122-34.046 73.262l116.084 379.25c0.606 2.092 1.248 4.17 1.906 6.236l0.242 0.78c0.022 0.062 0.050 0.116 0.070 0.176 32.148 98.948 125.13 170.482 234.844 170.482 70.232 0 143.182-24.756 198.714-67.344 0.002 0 0.006-0.004 0.006-0.004 59.98-36.102 252.142-242.694 252.142-242.694 29.174-29.154 24.816-73.798-4.358-102.958z' })
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

  return MdHand;
}(_react.Component);

MdHand.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdHand.propTypes = {
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

exports.default = MdHand;
module.exports = exports['default'];
//# sourceMappingURL=MdHand.js.map