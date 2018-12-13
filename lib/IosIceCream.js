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

var IosIceCream = function (_Component) {
  _inherits(IosIceCream, _Component);

  function IosIceCream(props) {
    _classCallCheck(this, IosIceCream);

    var _this = _possibleConstructorReturn(this, (IosIceCream.__proto__ || Object.getPrototypeOf(IosIceCream)).call(this, props));

    _this.state = { classNames: [], animationActive: false };
    _this._getClasses = _this._getClasses.bind(_this);
    return _this;
  }

  _createClass(IosIceCream, [{
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
        _react2.default.createElement('path', { d: 'M438.4 801.8l14.4 44.8 28.8-18z M571.8 846.8l14.6-45.6-44 27.4z M481.6 523.8l-1.2-0.8c-40.2-5-73.8-19.6-98.2-43.8-8.2 10-23.6 18-40 23.2l19.8 61.6 9.2 28.4 18.4-11.4 92-57.2z M389.4 619l-8.2 5 30.8 95.6 69.6-43.4z M512 695.2l-92.2 57.2 3.4 2.2 88.8 55.2 92.2-57.4-1.6-1z M604.2 600l-92.2-57.2-92.2 57.2 92.2 57.4z M641.8 479.4c-24.4 24.2-58 38.8-98.2 43.8l-1.2 0.8 111.2 69.2 9.6-29.6 19.6-60.6c-16.8-5.4-32.6-13.4-41-23.6z M462.8 878l5.2 16c0 0 15 38 44 38 30 0 44.4-38 44.4-38l5-15.6-49.4-31-49.2 30.6z M542.4 676.2l70.2 43.8 31-95.6-9-5.4z M760.8 327.8c-22 25.4-56.2 33.6-56.2 33.6 17.4-12 31.2-43.2 31.2-43.2 0-0.6 0-1 0-1.6 0.2-124-100-224.6-223.8-224.6s-224 101.4-224 225.4c0 0.6 0 2.6 0 2.6h0.6c0 0 14 30.2 31.2 42.2 0 0-34.4-8.6-56.4-34.2-23.6 14-39.6 39.4-39.6 69 0 44.2 35.8 80 80 80 25 0 63.4-11.6 78.2-29.8 30.6 30.4 75.6 45.6 129.8 45.6s99.4-15.4 129.8-45.8c14.6 18.2 53 29.6 78.2 29.6 44.2 0 80-36 80-80.2 0.2-29-15.6-54.6-39-68.6z' })
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

  return IosIceCream;
}(_react.Component);

IosIceCream.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosIceCream.propTypes = {
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

exports.default = IosIceCream;
module.exports = exports['default'];
//# sourceMappingURL=IosIceCream.js.map