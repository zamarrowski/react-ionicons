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

var LogoBuffer = function (_Component) {
  _inherits(LogoBuffer, _Component);

  function LogoBuffer(props) {
    _classCallCheck(this, LogoBuffer);

    var _this = _possibleConstructorReturn(this, (LogoBuffer.__proto__ || Object.getPrototypeOf(LogoBuffer)).call(this, props));

    _this.state = { classNames: [], animationActive: false };
    _this._getClasses = _this._getClasses.bind(_this);
    return _this;
  }

  _createClass(LogoBuffer, [{
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
        _react2.default.createElement('path', { d: 'M141.4 329l338.4 163.4c8.8 4.2 20.6 6.4 32.2 6.4s23.4-2.2 32.2-6.4l338.4-163.4c17.8-8.6 17.8-22.6 0-31.2l-338.4-163.4c-8.8-4.2-20.6-6.4-32.2-6.4s-23.4 2.2-32.2 6.4l-338.4 163.4c-17.8 8.6-17.8 22.6 0 31.2z M882.6 496.4c0 0-61.8-29.8-70-33.8s-10.4-3.8-19 0.2-249.6 120.4-249.6 120.4c-9 4.2-20.6 6.4-32.2 6.4s-23.4-2.2-32.2-6.4c0 0-234.6-113.2-245.6-118.6-12-5.8-15.4-5.8-26.2-0.6-11.2 5.4-66.8 32.2-66.8 32.2-17.8 8.6-17.8 22.6 0 31.2l338.4 163.4c8.8 4.2 20.6 6.4 32.2 6.4s23.4-2.2 32.2-6.4l338.4-163.4c18.2-8.4 18.2-22.4 0.4-31z M882.6 695c0 0-61.8-29.8-70-33.8s-10.4-3.8-19 0.2-249.4 120.6-249.4 120.6c-9 4.2-20.6 6.4-32.2 6.4s-23.4-2.2-32.2-6.4c0 0-234.6-113.2-245.6-118.6-12-5.8-15.4-5.8-26.2-0.6-11.2 5.4-66.8 32.2-66.8 32.2-17.8 8.6-17.8 22.6 0 31.2l338.4 163.4c8.8 4.4 20.6 6.4 32.2 6.4s23.4-2.2 32.2-6.4l338.4-163.4c18-8.6 18-22.6 0.2-31.2z' })
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

  return LogoBuffer;
}(_react.Component);

LogoBuffer.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

LogoBuffer.propTypes = {
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

exports.default = LogoBuffer;
module.exports = exports['default'];
//# sourceMappingURL=LogoBuffer.js.map