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

var IosHammer = function (_Component) {
  _inherits(IosHammer, _Component);

  function IosHammer(props) {
    _classCallCheck(this, IosHammer);

    var _this = _possibleConstructorReturn(this, (IosHammer.__proto__ || Object.getPrototypeOf(IosHammer)).call(this, props));

    _this.state = { classNames: [], animationActive: false };
    _this._getClasses = _this._getClasses.bind(_this);
    return _this;
  }

  _createClass(IosHammer, [{
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
        _react2.default.createElement('path', { d: 'M491 426c-2.6-1.4-5.6-2-8.4-2-5 0-9.8 1.8-12.6 4.6 0 0-8.8 8.2-92.8 91.6-124.4 123.2-278 247.4-278 247.4-4.4 4.4-4.4 11.4 0 15.6l110.4 109.6c2.2 2.2 5 3.2 7.8 3.2s5.8-1 7.8-3.2c0 0 125.2-152.4 249.4-275.6 84-83.4 92.2-92 92.2-92 4.4-4.4 7.2-13.2 2.6-20.8l-7.8-12.8-59.4-59.6-11.2-6z M924.8 433.8l-68.4-67.8c-2.2-2.2-5-3.2-7.8-3.2s-5.8 1-7.8 3.2l-7.4 7.4c-10.6 0-27.2-1.4-36.2-10.4-13.8-13.6 2.2-40.6-10.2-58-12.2-17.4-31.8-39.4-45.8-53.4s-69.2-66.8-162.4-105c-32.8-13.4-65-18.6-93.6-18.6-52.6 0-93.8 17-108.4 30.4-10.8 10-22.2 28-6.2 28 1.4 0 3-0.2 4.8-0.4 8.8-1.4 26.4-3 46.4-3 31.2 0 68.4 4.2 88.2 20 32.4 26 59 60.6 61.2 105.4 1.8 36.8-8.6 60.4-46.8 101.4l59.8 59.8c35-34.4 52.6-50.4 73-56 8-2.2 16.6-3 25.4-3 19.2 0 38 4.4 46.6 9 10.2 5.4 19.4 22.6 20.4 37.2l-19 19c-4.4 4.4-4.4 11.4 0 15.6l68.4 67.8c2.2 2.2 5 3.2 7.8 3.2s5.8-1 7.8-3.2l110.4-109.6c4-4.4 4-11.6-0.2-15.8z' })
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

  return IosHammer;
}(_react.Component);

IosHammer.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosHammer.propTypes = {
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

exports.default = IosHammer;
module.exports = exports['default'];
//# sourceMappingURL=IosHammer.js.map