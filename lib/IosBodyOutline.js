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

var IosBodyOutline = function (_Component) {
  _inherits(IosBodyOutline, _Component);

  function IosBodyOutline(props) {
    _classCallCheck(this, IosBodyOutline);

    var _this = _possibleConstructorReturn(this, (IosBodyOutline.__proto__ || Object.getPrototypeOf(IosBodyOutline)).call(this, props));

    _this.state = { classNames: [], animationActive: false };
    _this._getClasses = _this._getClasses.bind(_this);
    return _this;
  }

  _createClass(IosBodyOutline, [{
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
        _react2.default.createElement('path', { d: 'M512 95.918c35.29 0 64 28.702 64 63.982s-28.71 63.98-64 63.98-64-28.702-64-63.98c0-35.28 28.71-63.982 64-63.982zM512 63.928c-53.020 0-96 42.966-96 95.972 0 53.004 42.98 95.97 96 95.97s96-42.966 96-95.97c0-53.006-42.98-95.972-96-95.972v0z M848 288h-672c-26.51 0-48 21.494-48 48s21.49 48 48 48h200.902c11.098 0 26.394 8.59 34.432 29.416 9.302 24.11 4.74 66.66-1.078 102.888l-7.846 42.52c-0.038 0.208-0.41 0.2-0.41 0.406l-64.458 344.476c-4.606 26.102 12.974 50.988 39.080 55.594 2.816 0.496 5.688 0.734 8.436 0.734 22.714 0 41.834-16.38 45.94-39.672l41.002-239.878v0.332c0 0 14.5-62.816 38.904-62.816h2.192c24.904 0 34.904 62.816 34.904 62.816v-0.164l42.966 239.79c4.104 23.284 24.662 39.63 47.526 39.63 2.774 0 5.71-0.242 8.536-0.736 26.106-4.606 43.642-29.52 39.038-55.622l-64.698-344.502c-0.004-0.016 0.022-0.040 0.018-0.054-0.038-0.208-0.064-0.434-0.104-0.644l-7.542-42.822c-5.818-36.238-10.376-78.166-1.076-102.274 8.038-20.828 24.336-29.418 34.434-29.418h200.902c26.51 0 48-21.494 48-48s-21.49-48-48-48zM176 352.226c-8.822 0-16-7.292-16-16.114s7.178-16.114 16-16.114h672c8.822 0 16 7.18 16 16s-7.178 16-16 16h-203c-31.076 0-54.876 29.476-61.964 47.844-9.692 25.114-10.008 63.884-0.776 121.376l-0.018 0.208 0.012 0.22 6.734 38.276 1.124 6.482 64.504 343.256c1 5.668-1.24 9.922-2.664 11.954-1.426 2.034-4.67 5.598-10.358 6.602-0.952 0.166-1.91 0.252-2.854 0.252-7.786 0-14.414-5.278-15.766-12.944l-42.464-239.524h-0.030c-0.542-4-3.656-20.1-10.044-37.542-4.556-12.434-9.688-22.068-15.688-30.010-14.182-18.776-30.478-22.448-41.652-22.448h-2.192c-10.94 0-27.006 3.462-41.42 21.876-6.1 7.792-11.458 17.342-16.38 29.604-7.256 18.074-11.010 35.308-11.416 37.226l-0.22 0.738-41.456 239.8c-1.386 7.772-7.5 13.192-14.882 13.192-0.918 0-1.864-0.086-2.806-0.254-5.68-1-8.91-4.55-10.33-6.576-1.418-2.026-3.648-6.272-2.646-11.95l64.87-345.016 7.594-42.91 0.042-0.252c9.258-57.658 9.054-96.6-0.664-121.782-7.086-18.362-27.152-47.474-63.52-47.474z' })
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

  return IosBodyOutline;
}(_react.Component);

IosBodyOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosBodyOutline.propTypes = {
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

exports.default = IosBodyOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosBodyOutline.js.map