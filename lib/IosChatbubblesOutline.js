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

var IosChatbubblesOutline = function (_Component) {
  _inherits(IosChatbubblesOutline, _Component);

  function IosChatbubblesOutline(props) {
    _classCallCheck(this, IosChatbubblesOutline);

    var _this = _possibleConstructorReturn(this, (IosChatbubblesOutline.__proto__ || Object.getPrototypeOf(IosChatbubblesOutline)).call(this, props));

    _this.state = { classNames: [], animationActive: false };
    _this._getClasses = _this._getClasses.bind(_this);
    return _this;
  }

  _createClass(IosChatbubblesOutline, [{
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
        _react2.default.createElement('path', { d: 'M862 641.2c0-8.8 2.4-17.2 6.6-24.4 1.2-2.2 2.8-4.2 4.2-6.2 34.8-52 55.2-114.2 55.2-180.6 0.6-184.4-155-334-347.4-334-167.8 0-307.8 114.2-340.6 265.8-4.8 22.2-7.4 44.8-7.4 68.4 0 184.6 149.6 338.2 342 338.2 30.6 0 71.8-9.2 94.4-15.4s45-14.4 50.8-16.6 12.2-3.4 18.6-3.4c7.2 0 14 1.4 20.2 4l113.4 40.2c0 0 4.8 2 7.8 2 8.8 0 16-7 16-16 0-2-1-5.4-1-5.4l-32.8-116.6zM770.2 707.2c-10-4-20.6-6.4-31.6-6.4-8.2 0-20.2 1.6-24.4 3.2s-22.6 7.6-22.6 7.6c-8.4 2.8-19.8 7.6-30.4 10.2-28 7.2-60.2 14.4-86.4 14.4-83.8 0-162.2-32.2-220.6-90.6-28.2-28.2-50.2-61-65.6-97.4-15.8-37.6-23.8-77.4-23.8-118.2 0-20.4 2.2-41.2 6.6-61.6 14.4-66.8 53-127.6 108.4-171.4 27.6-21.8 58.8-39 92.2-50.8 34.8-12.2 71.4-18.4 108.8-18.4 44 0 86.6 8.4 126.6 25.2 38.6 16.2 72.8 39.2 102 68.4 56 56.6 86.6 130.6 86.6 208.6v0 0c0 57.8-17.2 114-49.4 162.4-0.2 0.2-0.4 0.6-0.6 0.8-1.4 1.8-3.2 4.4-5 7.6-7 12.2-10.8 24.8-10.8 40.2s16.4 65 26 96.4l-86-30.2z M610.6 791.4c-12.6 12.2-24.2 20.8-24.2 20.8-49.8 40.4-112.8 62.8-179 62.8-37.6 0-74.2-7.2-109-21.4-0.8-0.4-1.6-0.6-2-0.8v0c-1.2-0.6-2.4-1-3.6-1.2-14-4.6-29.4-4-42.8 1.4l-85 33.6 18.6-97c0.2-1 0.2-2 0.2-3 0-10.2-2.6-20-7.8-28.6l-0.8-1.4c-1-1.6-2-3.6-3.4-5.4-28.8-43.4-44-93.8-44-145.8 0-60 21.2-125.6 75.6-185.8 1.2-8.6 2.6-17.2 4.6-25.6 2-9 4.4-18 7-26.8l-16 14.2c-65.4 57-103 138.6-103 223.6 0 58.6 17.2 115.2 49.6 164 0.2 0.2 0.4 0.4 0.6 0.8 0.4 0.4 1.2 1.8 1.6 2.8 0.4 0.6 0.6 1.2 1 1.6 2 3.4 3 6.8 3.2 10.8l-23.8 124c-1.2 5.8 1 11.6 5.4 15.4 3 2.4 6.6 3.6 10.2 3.6 2 0 4-0.4 5.8-1.2l112.2-44.2c3.6-1.4 7.4-2.2 11.4-2.2 3.6 0 7.2 0.6 10.6 1.8 0.4 0.2 1 0.4 1.4 0.4v0c0.2 0.2 0.4 0.2 0.6 0.2 38.6 16 79.6 24 121.4 24 93.2 0 180.8-40.2 240.2-110.2 0 0 6.4-8.8 13.8-19.2-7.6 2.4-16 5-24.4 7.4-7.2 2.2-16.2 4.4-26.2 6.6z' })
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

  return IosChatbubblesOutline;
}(_react.Component);

IosChatbubblesOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosChatbubblesOutline.propTypes = {
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

exports.default = IosChatbubblesOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosChatbubblesOutline.js.map