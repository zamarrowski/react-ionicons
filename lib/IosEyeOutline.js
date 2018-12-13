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

var IosEyeOutline = function (_Component) {
  _inherits(IosEyeOutline, _Component);

  function IosEyeOutline(props) {
    _classCallCheck(this, IosEyeOutline);

    var _this = _possibleConstructorReturn(this, (IosEyeOutline.__proto__ || Object.getPrototypeOf(IosEyeOutline)).call(this, props));

    _this.state = { classNames: [], animationActive: false };
    _this._getClasses = _this._getClasses.bind(_this);
    return _this;
  }

  _createClass(IosEyeOutline, [{
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
        _react2.default.createElement('path', { d: 'M894.2 512.4c-90.6-104.4-215.8-224.4-382.2-224.4-67.2 0-128.8 19-193.8 59.6-54.8 34.4-111 82.8-188.2 162.4l-2 2 13.4 13.8c110.2 112.8 205.4 210.2 370.6 210.2 73 0 143.8-23.8 216.4-72.8 61.8-41.8 114.4-94.8 156.6-137.6l11-11-1.8-2.2zM512 320c66.2 0 129.8 19 194.4 61.2 47.8 31.2 94.8 73.4 147.4 132.2-76.6 77.4-191.6 190.6-341.8 190.6-68.4 0-128.4-16.8-188.4-56.4-55-36.2-104.6-86.6-152.4-135.6 118.2-119.4 216.8-192 340.8-192z M512 672c88.2 0 160-71.8 160-160s-71.8-160-160-160c-88.2 0-160 71.8-160 160s71.8 160 160 160zM512 384.6c70.4 0 128 57.2 128 127.4s-57.6 127.4-128 127.4c-70.4 0-127.8-57.2-127.8-127.4s57.4-127.4 127.8-127.4z M576 512v0c0 35-28.8 64-63.6 64s-64.4-30.4-64.4-65.4 31.6-62.6 64-62.6v-32c-53 0-95.8 43.2-95.8 96.4s43 96.2 95.8 96.2 96-43.2 96-96.2v-0.4h-32z' })
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

  return IosEyeOutline;
}(_react.Component);

IosEyeOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosEyeOutline.propTypes = {
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

exports.default = IosEyeOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosEyeOutline.js.map