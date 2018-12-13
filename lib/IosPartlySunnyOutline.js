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

var IosPartlySunnyOutline = function (_Component) {
  _inherits(IosPartlySunnyOutline, _Component);

  function IosPartlySunnyOutline(props) {
    _classCallCheck(this, IosPartlySunnyOutline);

    var _this = _possibleConstructorReturn(this, (IosPartlySunnyOutline.__proto__ || Object.getPrototypeOf(IosPartlySunnyOutline)).call(this, props));

    _this.state = { classNames: [], animationActive: false };
    _this._getClasses = _this._getClasses.bind(_this);
    return _this;
  }

  _createClass(IosPartlySunnyOutline, [{
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
        _react2.default.createElement('path', { d: 'M320 128h32v108h-32v-108z M32 416h110v32h-110v-32z M119 234.8l22-22.2 62.8 63-22 22.2z M478.8 295.8l-22-22.2 62.6-63 22.2 22.2z M145 641.4l-22-22.2 62.8-63 22 22.2z M307.8 535.8c-52.6-10.4-92.4-56.8-92.4-112.4 0-63.2 51.4-114.6 114.6-114.6 36.6 0 69.2 17.2 90.2 44 9.4-5.4 19.2-10.2 29.4-14.2-26.6-37.4-70.2-61.8-119.6-61.8-81 0-146.6 65.6-146.6 146.6 0 73.6 54.2 134.6 125 145-0.6-6.6-1-13.4-1-20.2 0-4.2 0-8.2 0.4-12.4z M806.6 518.4c-1.6 0-3.2 0-4.8 0-6.2 0-12.2 0-18 0.8-22.6-100.6-112.2-176.4-219.4-176.4-29.2 0-57.2 5.6-82.8 15.8-10.2 4-20 8.8-29.4 14.2-64 37-108.2 104.8-112.4 183.2-0.2 4.2-0.4 8.2-0.4 12.4 0 6.8 0.4 13.6 1 20.2 0 0.8 0.2 1.6 0.2 2.2-75.8 6.8-135.2 74.2-135.2 152 0 82.2 66.6 153.4 148.6 153.4h452.8c102.4 0 185.4-86.8 185.4-189.6-0.2-102.8-83.2-188.2-185.6-188.2zM914.8 817.4c-29.2 30-67.6 46.6-108.2 46.6h-452.8c-63.2 0-116.6-55.8-116.6-121.4 0-29.8 11-58.8 31.2-81.4 19.8-22.4 46.6-36.2 75-38.6l32.2-2.8-3-30.2-0.2-2c-0.6-6.4-1-13-1-19.4 0-3.6 0.2-7.2 0.2-10.6 3.6-67.2 41.6-125.4 96.6-157.2 9.2-5.4 19-10 29-13.6 20.8-7.8 43.4-12 67-12 44.6 0 86.4 15 121.2 43.2 33.8 27.6 57.4 66 67 108.2l6.4 28.4 28.8-3.6c4.2-0.6 9.4-0.6 14.2-0.6h5c40.8 0 79.2 16.4 108.4 45.8 29.2 29.6 45.2 68.8 45.2 110-0.4 41.6-16.4 81.2-45.6 111.2z' })
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

  return IosPartlySunnyOutline;
}(_react.Component);

IosPartlySunnyOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosPartlySunnyOutline.propTypes = {
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

exports.default = IosPartlySunnyOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosPartlySunnyOutline.js.map