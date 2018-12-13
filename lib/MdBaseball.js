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

var MdBaseball = function (_Component) {
  _inherits(MdBaseball, _Component);

  function MdBaseball(props) {
    _classCallCheck(this, MdBaseball);

    var _this = _possibleConstructorReturn(this, (MdBaseball.__proto__ || Object.getPrototypeOf(MdBaseball)).call(this, props));

    _this.state = { classNames: [], animationActive: false };
    _this._getClasses = _this._getClasses.bind(_this);
    return _this;
  }

  _createClass(MdBaseball, [{
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
        _react2.default.createElement('path', { d: 'M731.8 805.2l-45.8 27-32-56 40.4-23.8c-10.4-17-19.6-34.8-27.8-53.4-2.8-6.2-5.4-12.6-7.8-19l-50.2 11.6-14.2-63.2 45.2-10.4c-5.6-24.2-9.4-48-11-74h-48.6v-64h48.6c1.6-24 5.4-49.6 11-73.6l-45.2-10.4 14.2-63.2 50.2 11.6c2.6-6.4 5.2-12.8 8-19.2 8.2-18.4 17.4-36.2 27.6-53.2l-40.4-23.8 32-56 45.6 27c10.4-12.8 21.6-25 33.4-36.6-70.2-54.4-158-86.6-253-86.6s-182.8 32.2-253 86.4c11.8 11.6 23 24 33.4 36.6l45.6-26.8 32 56-40.4 23.8c10.2 17 19.6 34.8 27.6 53.2 2.8 6.4 5.4 12.8 8 19.2l50.2-11.6 14.2 63.2-45.2 10.4c5.6 24.2 9.2 49.6 11 73.6h48.6v64h-48.6c-1.6 26-5.4 49.8-11 74l45.2 10.4-14.2 63.2-50.2-11.6c-2.4 6.4-5 12.6-7.8 19-8.2 18.4-17.4 36.2-27.8 53.4l40.4 23.8-32 56-45.8-27c-10.4 12.6-21.4 24.8-33.2 36.4 70.2 54.2 158 86.4 253 86.4s182.8-32.2 253-86.4c-11.8-11.6-22.8-23.8-33.2-36.4z M787.6 252l36.2 21.4-32 56-42.4-25c-10 16.6-19 33.8-26.6 51.8-0.4 0.8-0.8 1.8-1 2.6l42 9.8-14.2 63.2-47.8-11c-4.6 19.4-7.6 39.2-9.2 59.2h47.4v64h-47.2c1.6 20 4.6 40 9.2 59.6l47.8-11 14.2 63.2-42 9.8c0.4 0.8 0.6 1.6 1 2.4 7.6 18 16.6 35.4 26.6 52l42.2-24.8 32 56-36 21.2c6.6 7.8 13.6 15.4 21 22.6 1.2 1.2 2.6 2.6 4 4 71.2-75 115.2-176.2 115.2-287s-44-212-115.4-286.8c-1.4 1.4-2.8 2.6-4 4-7.4 7.4-14.4 15-21 22.8z M236.4 772.2l-36-21.2 32-56 42.2 24.8c10.2-16.6 19-34 26.6-52 0.4-0.8 0.6-1.6 1-2.4l-42-9.8 14.2-63.2 47.8 11c4.6-19.6 7.6-39.6 9.2-59.6h-47.4v-64h47.2c-1.6-20-4.6-39.8-9.2-59.2l-47.8 11-14.2-63.2 42-9.8c-0.4-0.8-0.6-1.8-1-2.6-7.6-18-16.4-35.4-26.6-51.8l-42.4 25-32-56 36.2-21.4c-6.8-7.8-13.8-15.4-21.2-22.8-1.2-1.2-2.6-2.6-4-4-71 75-115 176.2-115 287s44 212 115.4 286.8c1.4-1.4 2.8-2.6 4-4 7.2-7.2 14.2-14.8 21-22.6z' })
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

  return MdBaseball;
}(_react.Component);

MdBaseball.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdBaseball.propTypes = {
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

exports.default = MdBaseball;
module.exports = exports['default'];
//# sourceMappingURL=MdBaseball.js.map