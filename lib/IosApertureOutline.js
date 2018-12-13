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

var IosApertureOutline = function (_Component) {
  _inherits(IosApertureOutline, _Component);

  function IosApertureOutline(props) {
    _classCallCheck(this, IosApertureOutline);

    var _this = _possibleConstructorReturn(this, (IosApertureOutline.__proto__ || Object.getPrototypeOf(IosApertureOutline)).call(this, props));

    _this.state = { classNames: [], animationActive: false };
    _this._getClasses = _this._getClasses.bind(_this);
    return _this;
  }

  _createClass(IosApertureOutline, [{
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
        _react2.default.createElement('path', { d: 'M512 96c-229.8 0-416 186.2-416 416 0 131 60.6 247.8 155.2 324.2l-1.2 2.2 16.6 9.6c68.8 50.4 153.6 80 245.4 80 229.8 0 416-186.2 416-416s-186.2-416-416-416zM865.8 362.6c20 47.4 30.2 97.6 30.2 149.4 0 10.8-0.4 21.4-1.4 32h-325.6l188.8-327c8.8 7.4 17.4 15.2 25.8 23.4 35.2 35.4 62.8 76.4 82.2 122.2zM474 514.2l19.8-34.2h37.4l18.8 32.8-18 31.2h-40.8l-17.2-29.8zM661.4 158.2c25 10.6 48.6 23.8 70.8 39.2l-163.6 283.4-190-329c42.6-15.8 87.4-23.8 133.4-23.8 51.8 0 102.2 10.2 149.4 30.2zM240.4 240.4c31.8-31.8 68.2-57.4 108.4-76.2l164 283.8h-379.4c5-29.4 13.2-57.8 24.8-85.4 19.4-45.8 47-86.8 82.2-122.2zM240.4 783.6c-35.2-35.2-63-76.4-82.4-122-19.8-47.4-30-97.8-30-149.6 0-10.8 0.4-21.4 1.4-32h327.6l-189.4 328c-9.4-7.6-18.4-15.8-27.2-24.4zM362.6 865.8c-24.6-10.4-47.8-23.2-69.4-38.2l162.4-281.4 188.4 326.4c-42.2 15.4-86.6 23.4-132 23.4-51.8 0-102.2-10.2-149.4-30.2zM783.6 783.6c-32 32-68.8 57.8-109.6 76.8l-164.2-284.4h381c-5 29.4-13.2 57.8-24.8 85.4-19.6 45.8-47.2 86.8-82.4 122.2z' })
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

  return IosApertureOutline;
}(_react.Component);

IosApertureOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosApertureOutline.propTypes = {
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

exports.default = IosApertureOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosApertureOutline.js.map