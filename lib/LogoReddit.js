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

var LogoReddit = function (_Component) {
  _inherits(LogoReddit, _Component);

  function LogoReddit(props) {
    _classCallCheck(this, LogoReddit);

    var _this = _possibleConstructorReturn(this, (LogoReddit.__proto__ || Object.getPrototypeOf(LogoReddit)).call(this, props));

    _this.state = { classNames: [], animationActive: false };
    _this._getClasses = _this._getClasses.bind(_this);
    return _this;
  }

  _createClass(LogoReddit, [{
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
        _react2.default.createElement('path', { d: 'M708.2 576.8c0 35.125-28.475 63.6-63.6 63.6s-63.6-28.475-63.6-63.6c0-35.125 28.475-63.6 63.6-63.6s63.6 28.475 63.6 63.6z M444.2 576.8c0 35.125-28.475 63.6-63.6 63.6s-63.6-28.475-63.6-63.6c0-35.125 28.475-63.6 63.6-63.6s63.6 28.475 63.6 63.6z M961 502c0-55.4-44.4-100.4-99-100.4-26 0-49.4 10-67.2 26.6-66.4-46.8-156.8-77-257.4-81.4l46.6-155.4 139.2 27.8c0.4 49.4 40.2 89.4 89 89.4 49.2 0 89-40.4 89-90.2s-39.8-90.4-89-90.4c-37.2 0-69 23.2-82.4 56l-170.4-34-58.8 196.4-14.2 0.4c-100.6 4.4-191 34.8-257.4 81.4-17.6-16.6-41.2-26.6-67.2-26.6-54.6 0-99 45-99 100.4 0 39.2 22 73 54.2 89.6-1.6 9.8-2.4 19.6-2.4 29.6 0.4 151.6 178.2 274.8 397.4 274.8s397-123.2 397-275c0-10-0.8-19.8-2.2-29.6 32.2-16.6 54.2-50.4 54.2-89.4zM812.2 163.8c29.6 0 53.6 24.4 53.6 54.4s-24 54.4-53.6 54.4c-29.6 0-53.6-24.4-53.6-54.4s24-54.4 53.6-54.4zM98.4 502c0-35.6 28.6-64.4 63.6-64.4 14.4 0 27.8 5 38.4 13.2-34.6 30.4-60.2 66-74 104.8-16.8-11.8-28-31.4-28-53.6zM772.8 785.8c-69.2 47.8-161.8 74.2-260.8 74.2s-191.6-26.4-260.8-74.2c-65-45-100.8-103.6-100.8-164.8 0-6.4 0.4-13 1.2-19.4 1.4-12 4.4-23.8 8.6-35.4 11.2-31.2 32-60.6 61.4-86.8 8.8-7.8 18.4-15.4 28.8-22.6 0.2-0.2 0.6-0.4 0.8-0.6 69.2-47.8 161.8-74.2 260.8-74.2s191.6 26.4 260.8 74.2c0.2 0.2 0.6 0.4 0.8 0.6 10.4 7.2 20 14.8 28.8 22.6 29.4 26.2 50.2 55.6 61.4 86.8 4.2 11.6 7 23.4 8.6 35.4 0.8 6.4 1.2 12.8 1.2 19.4 0 61.2-35.8 119.8-100.8 164.8zM897.6 555.4c-13.8-38.8-39.4-74.4-74-104.8 10.6-8.2 24-13.2 38.4-13.2 35 0 63.6 29 63.6 64.4 0 22.4-11.2 42-28 53.6z M641 715.8c-0.4 0.4-48.4 48.4-129 48.8-81.8-0.4-128.8-48.4-129.2-48.8l-25.2 24.8c2.4 2.4 59.2 59 154.4 59.4 95.2-0.4 151.8-57 154.2-59.4l-25.2-24.8z' })
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

  return LogoReddit;
}(_react.Component);

LogoReddit.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

LogoReddit.propTypes = {
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

exports.default = LogoReddit;
module.exports = exports['default'];
//# sourceMappingURL=LogoReddit.js.map