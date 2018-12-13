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

var IosClosedCaptioningOutline = function (_Component) {
  _inherits(IosClosedCaptioningOutline, _Component);

  function IosClosedCaptioningOutline(props) {
    _classCallCheck(this, IosClosedCaptioningOutline);

    var _this = _possibleConstructorReturn(this, (IosClosedCaptioningOutline.__proto__ || Object.getPrototypeOf(IosClosedCaptioningOutline)).call(this, props));

    _this.state = { classNames: [], animationActive: false };
    _this._getClasses = _this._getClasses.bind(_this);
    return _this;
  }

  _createClass(IosClosedCaptioningOutline, [{
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
        _react2.default.createElement('path', { d: 'M960 832h-896v-640h896v640zM96 800h832v-576h-832v576zM540 780c-9.4 0-18.8 0-28 0s-18.4 0-27.8 0c-71.4 0-162-0.8-227.6-6.8-72.2-6.6-113-48.2-118-120l-1-15.4c-3.4-50-5.6-83-5.6-126.2 0-48 0.2-78.2 6.8-142 7.2-70.8 48-112 117.8-119.2 64-6.4 174.6-6.4 255.6-6.4 80.8 0 191.6 0 255.6 6.4 69.8 7 110.4 48.2 117.8 119.2 6.6 63.8 6.8 94 6.8 142 0 43-2.2 76-5.6 126l-1 15.6c-4.8 71.8-45.6 113.4-118 120-66 6-156.4 6.8-227.8 6.8zM512 748v0c9.2 0 18.6 0 28 0 70.8 0 160.2-0.8 224.6-6.6 56-5.2 85.2-34.8 89-90.4l1-15.6c3.4-49.2 5.6-81.8 5.6-123.8 0-47-0.2-76.6-6.6-138.8-5.8-56.2-34-85-89.2-90.6-62.4-6.2-172.2-6.2-252.4-6.2s-190 0-252.2 6.4c-55 5.6-83.4 34.4-89.2 90.6-6.4 62.2-6.6 91.8-6.6 138.8 0 42 2.2 74.6 5.6 124l1 15.4c3.8 55.6 32.8 85.2 89 90.4 64.4 6 153.8 6.6 224.6 6.6 9.4-0.2 18.8-0.2 27.8-0.2z M675.4 356.8c34.4 0 58.8 8.6 74.8 26.4 11.2 12.4 18.8 31.6 22.6 54.8h-28.2c-10.8-35.4-39.8-59.6-75.8-59.6-22.4 0-41.6 8-55.8 23.2-12.8 13.6-20.8 32.4-24.2 56v0 0c-0.2 1-3 22.6-3 56.4 0 29.8 2 46.8 2.6 51.4 4.4 47.2 37 80.2 79.6 80.2 22.2 0 42.4-8.4 57-23.6 9.6-10 16-22.2 19.6-36.2h28.8c-3.4 23.4-10.8 41.6-22.4 54.6-15.4 17.6-43.4 26.4-83.4 26.4-20.2 0-37.8-2.2-52.2-6.8-11.4-3.6-20.8-10-28.4-19.4-8.6-10.6-15.4-26-20.2-45.4-5.2-21.6-8-49.2-8-82.4 0-33.4 3.2-61.2 9.6-82.2 5.8-19.4 13.8-34.6 23.6-45.4 9.4-10.4 20.2-17.2 33.2-21.4 14.8-4.6 31.8-7 50.2-7zM675.4 324.8c-21.8 0-41.8 2.8-60 8.6s-34 15.8-47.2 30.2c-13.2 14.4-23.4 33.6-30.8 57.8-7.2 24.2-11 54.6-11 91.4 0 36 3 66 8.8 90.2 6 24.2 14.6 43.4 26.2 57.8s26.2 24.4 43.6 30c17.6 5.6 38.2 8.4 61.8 8.4 50 0 86-12.8 107.6-37.4s32.4-60.6 32.4-107.8h-92.2c0 0 0 5 0 6.8v1.4c0 32.6-20.2 51.8-47.2 51.8s-45.2-21.6-47.8-51.8c0 0-2.4-15.8-2.4-47.8s2.8-52 2.8-52c4.8-34 21.4-51.8 48.4-51.8 26.8 0 48.2 23.2 48.2 58.4 0 0.2 0 1 0 1h90.2c0-43.8-11-83.2-33.2-108-21.6-24.8-54.4-37.2-98.2-37.2v0z M365.6 356.8c34.4 0 58.8 8.6 74.8 26.4 11.2 12.4 18.8 31.6 22.6 54.8h-28.2c-10.8-35.4-39.8-59.6-75.8-59.6-22.4 0-41.6 8-55.8 23.2-12.8 13.6-20.8 32.4-24.2 56v0 0c-0.2 1-3 22.6-3 56.4 0 29.8 2 46.8 2.6 51.4 4.4 47.2 37 80.2 79.6 80.2 22.2 0 42.4-8.4 57-23.6 9.6-10 16-22.2 19.6-36.2h28.8c-3.4 23.4-10.8 41.6-22.4 54.6-15.4 17.6-43.4 26.4-83.4 26.4-20.2 0-37.8-2.2-52.2-6.8-11.4-3.6-20.8-10-28.4-19.4-8.6-10.6-15.4-26-20.2-45.4-5.2-21.6-8-49.2-8-82.4 0-33.4 3.2-61.2 9.6-82.2 5.8-19.4 13.8-34.6 23.6-45.4 9.4-10.4 20.2-17.2 33.2-21.4 14.8-4.6 31.8-7 50.2-7zM365.6 324.8c-21.8 0-41.8 2.8-60 8.6s-34 15.8-47.2 30.2c-13.2 14.4-23.4 33.6-30.8 57.8-7.2 24.2-11 54.6-11 91.4 0 36 3 66 8.8 90.2 6 24.2 14.6 43.4 26.2 57.8s26.2 24.4 43.6 30c17.6 5.6 38.2 8.4 61.8 8.4 50 0 86-12.8 107.6-37.4s32.4-60.6 32.4-107.8h-92.2c0 0 0 5 0 6.8v1.4c0 32.6-20.2 51.8-47.2 51.8s-45.2-21.6-47.8-51.8c0 0-2.4-15.8-2.4-47.8s2.8-52 2.8-52c4.8-34 21.4-51.8 48.4-51.8 26.8 0 48.2 23.2 48.2 58.4 0 0.2 0 1 0 1h90.2c0-43.8-11-83.2-33.2-108-21.6-24.8-54.4-37.2-98.2-37.2v0z' })
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

  return IosClosedCaptioningOutline;
}(_react.Component);

IosClosedCaptioningOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosClosedCaptioningOutline.propTypes = {
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

exports.default = IosClosedCaptioningOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosClosedCaptioningOutline.js.map