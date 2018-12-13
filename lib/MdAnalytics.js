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

var MdAnalytics = function (_Component) {
  _inherits(MdAnalytics, _Component);

  function MdAnalytics(props) {
    _classCallCheck(this, MdAnalytics);

    var _this = _possibleConstructorReturn(this, (MdAnalytics.__proto__ || Object.getPrototypeOf(MdAnalytics)).call(this, props));

    _this.state = { classNames: [], animationActive: false };
    _this._getClasses = _this._getClasses.bind(_this);
    return _this;
  }

  _createClass(MdAnalytics, [{
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
        _react2.default.createElement('path', { d: 'M758.8 356.6l-174.4 266.8c13.6 16.6 21.6 37.6 21.6 60.6 0 53-43 96-96 96s-96-43-96-96c0-6 0.6-12 1.6-17.8l-115.2-67c-17.2 16.6-40.6 26.8-66.6 26.8-17.2 0-33.2-4.6-47.2-12.4l-122.6 114.8v114.4c0 47 38.4 85.4 85.4 85.4h725.4c47 0 85.4-38.4 85.4-85.4v-425.2l-117.2-77.8c-16.2 12.6-36.6 20.2-58.8 20.2-8.8 0-17.4-1.2-25.4-3.4z M234 434c53 0 96 43 96 96 0 4.2-0.4 8.4-0.8 12.4l120.2 67.2c16.6-13.6 37.6-21.6 60.8-21.6 7.2 0 14.2 0.8 20.8 2.2l174.8-270.8c-11.2-15.6-17.8-34.8-17.8-55.6 0-53 43-96 96-96s96 43 96 96c0 7.8-1 15.4-2.6 22.6l82.6 55.2v-160.2c0-47-38.4-85.4-85.4-85.4h-725.2c-47 0-85.4 38.4-85.4 85.4v458.6l80-76.6c-3.8-10.4-6-21.6-6-33.4 0-53 43-96 96-96z' })
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

  return MdAnalytics;
}(_react.Component);

MdAnalytics.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdAnalytics.propTypes = {
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

exports.default = MdAnalytics;
module.exports = exports['default'];
//# sourceMappingURL=MdAnalytics.js.map