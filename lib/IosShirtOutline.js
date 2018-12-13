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

var IosShirtOutline = function (_Component) {
  _inherits(IosShirtOutline, _Component);

  function IosShirtOutline(props) {
    _classCallCheck(this, IosShirtOutline);

    var _this = _possibleConstructorReturn(this, (IosShirtOutline.__proto__ || Object.getPrototypeOf(IosShirtOutline)).call(this, props));

    _this.state = { classNames: [], animationActive: false };
    _this._getClasses = _this._getClasses.bind(_this);
    return _this;
  }

  _createClass(IosShirtOutline, [{
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
        _react2.default.createElement('path', { d: 'M745 185.2c-41-29.4-81-57.4-125-57.4s-44 16-108 16-64-16-108-16-84 28-125 57.4c-63.2 45.4-183 172.8-183 172.8l160 186.4v351.6h512v-350.8l160-187.4c0-0-119.8-127.2-183-172.6zM426.2 161.6c19.8 0 50.8 14.6 85.8 14.6s66.2-14.6 85.8-14.6c13.8 0 22.2 7.2 22.2 32 0 46.6-48.4 88-108 88s-108-42.6-108-88c0-24.6 8.2-32 22.2-32zM768 400.2c0-8.8-7.2-16-16-16s-16 7.2-16 16v463.8h-448v-463.8c0-8.8-7.2-16-16-16s-16 7.2-16 16v98.4c-27.2-32-102.8-121.8-117.2-139.2 36-37.4 113.8-115.8 159-148.2 25.8-18.6 52.4-37.6 78.4-46.4-2.8 8.2-4.2 17.8-4.2 29 0 31.4 15.8 62.6 43.2 85.6 26.6 22.2 61 34.4 96.8 34.4 36 0 70.4-12 96.8-33.8 27.4-22.8 43.2-54.2 43.2-86.2 0-11.2-1.4-20.8-4.2-29 26 8.8 52.6 27.8 78.4 46.4 45.2 32.4 122.8 110.8 158.8 148.2-14.8 18-92.2 109.8-117.2 139.2v-98.4z' })
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

  return IosShirtOutline;
}(_react.Component);

IosShirtOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosShirtOutline.propTypes = {
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

exports.default = IosShirtOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosShirtOutline.js.map