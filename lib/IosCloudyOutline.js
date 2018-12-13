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

var IosCloudyOutline = function (_Component) {
  _inherits(IosCloudyOutline, _Component);

  function IosCloudyOutline(props) {
    _classCallCheck(this, IosCloudyOutline);

    var _this = _possibleConstructorReturn(this, (IosCloudyOutline.__proto__ || Object.getPrototypeOf(IosCloudyOutline)).call(this, props));

    _this.state = { classNames: [], animationActive: false };
    _this._getClasses = _this._getClasses.bind(_this);
    return _this;
  }

  _createClass(IosCloudyOutline, [{
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
        _react2.default.createElement('path', { d: 'M472 224c57 0 108 18.8 147.2 54.2 35.4 31.8 60.8 76.6 71.6 126l5.8 26.6 27.4-1.8c3.2-0.2 7.4-0.2 10.2-0.2 2.4 0 4.8 0 7 0 2.4 0 5 0 7.4 0 47.2 0 92 19.6 126.2 55 34.2 35.6 53 82 53 130.8 0 48.6-18.8 95.4-52.8 130.2-34 34.6-79.6 54.8-127.2 54.8h-515.8c-36.2 0-69.2-15.8-95.4-42.8-26.2-26.6-40.6-62.6-40.6-100 0-35.8 13.2-71 37-98.8 23.6-27.6 54.8-44.6 87.8-47.4l32.2-3-3.2-32c-0.6-6.8-1.4-14.6-1.4-22.6 0-60.6 23.6-118 66.2-161.6 42.6-43.4 98.6-67.4 157.4-67.4zM472 192c-140 0-255.6 119.4-255.6 261.6 0 8.6 0.6 17.2 1.6 25.6-86.4 7.8-154 88-154 176.8 0 94 75.8 176 169.2 176h515.6c116.6 0 211.2-98.8 211.2-216s-94.6-217.6-211.2-217.6c-4.6 0-9.6-0.4-14.4-0.4-4.2 0-8.4 0-12.2 0.2-23.6-107-110.2-206.2-250.2-206.2v0z' })
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

  return IosCloudyOutline;
}(_react.Component);

IosCloudyOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosCloudyOutline.propTypes = {
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

exports.default = IosCloudyOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosCloudyOutline.js.map