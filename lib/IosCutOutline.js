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

var IosCutOutline = function (_Component) {
  _inherits(IosCutOutline, _Component);

  function IosCutOutline(props) {
    _classCallCheck(this, IosCutOutline);

    var _this = _possibleConstructorReturn(this, (IosCutOutline.__proto__ || Object.getPrototypeOf(IosCutOutline)).call(this, props));

    _this.state = { classNames: [], animationActive: false };
    _this._getClasses = _this._getClasses.bind(_this);
    return _this;
  }

  _createClass(IosCutOutline, [{
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
        _react2.default.createElement('path', { d: 'M256.8 271.4c-22.8-56-29.6-109.8 9-143.4l206 276 20-26.8-210-281.2c-17.8 0-28.8 1.8-37 7.8-23.8 17.8-38.2 51.2-38.6 87.2-0.4 27 6.6 57.2 20.8 92.4 17 42 85 140.4 155.8 237.2 1.4 2 3.2 3.8 5 5.4 5.8-9.4 12-19 18-28.2-52.2-71.6-132.4-185.2-149-226.4z M780.8 109.8c-10.4-9.6-27-13.8-40-13.8l-254.8 342c0 0-0.2 0.2-0.2 0.2l-29 39.4c-0.2 0.2-0.4 0.6-0.6 0.8-1 1.6-15 21.8-30.4 45.4-6 9.2-12.2 19-18 28.2-7 11.2-13.2 22-17.6 30.4-7.2 14.2-14.6 28.8-21.4 43-7.4 15-14.4 29.2-20.8 41.4-20.4-14.6-44-22.2-68.6-22.2-35 0-67.4 15.4-91.6 43.2-23 26.4-35.8 61.4-35.8 98.4s12.8 72 35.8 98.6c24.2 27.8 56.8 43.2 91.6 43.2 28.8 0 56-10.4 78.4-30 21-18.2 36-42.6 43.6-70.8 2-6.2 23.2-69.4 52.2-114.6 18.4-28.8 44.4-46.8 59.2-55.6l27-19.4c0 0 25.2-17.4 76.2-83.4s161-223 180.4-270.8c14.4-35.2 21.2-65.6 20.8-92.4-0.2-35.8-11.8-58.6-36.4-81.2zM766.8 271.4c-22.8 56-173.6 263.8-200.8 295.4s-54.6 54.8-54.6 54.8-51.8 22.2-84.8 73.8c-33 51.4-55.8 122.6-55.8 122.6v0c-11.8 45.2-48.2 78.2-91.4 78.2-52.8 0-95.6-49.2-95.6-109.8s42.8-109.8 95.6-109.8c21.6 0 41.4 8.2 57.4 22 3.2 2.6 6 5.2 8 7.6 0 0 0.2 0.2 0.2 0.2 1 1 1.8 2 2.6 3 1.8 1.8 3.6 2.6 5.4 2.6 4.8 0 10.4-6.6 19-22.4 13.6-25.2 30.2-60.6 46.6-92.6s63.6-100.6 63.6-100.6l29-39.4 246.6-329c38.6 33.8 31.8 87.4 9 143.4z M744 644.6c-24.6 0-48.2 7.6-68.6 22.2-6.4-12.2-13.4-26.4-20.8-41.4-6.8-13.8-13.8-28-20.8-41.6l-21.8 27.8c14 27.8 27.6 56.6 39.2 78 8.6 16 14.2 22.4 19 22.4 1.8 0 3.6-1 5.4-2.6 0.8-1 1.8-2 2.6-3 0 0 0.2-0.2 0.2-0.2 2-2.6 4.6-5.2 8-7.6 16-13.8 35.8-22 57.4-22 52.8 0 96 49.2 96 109.8s-43 109.6-95.8 109.6c-43.2 0-79.6-33-91.4-78.2v0c0 0-22.8-71.2-55.8-122.6-9.4-14.8-20.6-27.2-31.4-37.4l-26 19.6c10.4 9.2 21.4 20.8 30.6 35 29 45.2 50 108.4 52.2 114.6 7.6 28.2 22.6 52.6 43.6 70.8 22.6 19.6 49.8 30 78.4 30 70.6 0 128-63.6 128-141.8s-57.6-141.4-128.2-141.4z M279.8 842.2c-26.6 0-48-25.2-48-56s21.4-56 48-56c26.6 0 48 25.2 48 56s-21.6 56-48 56z M544.2 544.4c0 17.673-14.327 32-32 32s-32-14.327-32-32c0-17.673 14.327-32 32-32s32 14.327 32 32z M744.2 842.2c-26.6 0-48-25.2-48-56s21.4-56 48-56c26.6 0 48 25.2 48 56s-21.4 56-48 56z' })
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

  return IosCutOutline;
}(_react.Component);

IosCutOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosCutOutline.propTypes = {
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

exports.default = IosCutOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosCutOutline.js.map