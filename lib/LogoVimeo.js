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

var LogoVimeo = function (_Component) {
  _inherits(LogoVimeo, _Component);

  function LogoVimeo(props) {
    _classCallCheck(this, LogoVimeo);

    var _this = _possibleConstructorReturn(this, (LogoVimeo.__proto__ || Object.getPrototypeOf(LogoVimeo)).call(this, props));

    _this.state = { classNames: [], animationActive: false };
    _this._getClasses = _this._getClasses.bind(_this);
    return _this;
  }

  _createClass(LogoVimeo, [{
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
        _react2.default.createElement('path', { d: 'M953.8 228c-10-46.8-35-77.6-81.2-92.6s-129.8-9-188.2 33.6c-59.8 43.6-95.2 119.4-107.6 167.6 29.4-12.6 48-15.4 78-13.8s49 24 49.8 50.6c0.6 19.6-0.4 37.4-7.2 55.4-21.6 57.4-55.4 113-95.2 161.6-5.8 7.2-12.8 13.8-20 19.8-20.4 16.6-37.6 12.2-50.8-10.4-10.8-18.6-18-37.8-24.4-58.2-24.8-79.4-33.6-161.8-47.6-243.2-6.6-39-14-79.6-36-113.8-23.2-35.6-57.2-49.2-100-44-29.4 3.6-73.8 35-95.6 52.8 0 0-112 93.8-163.6 142.8l42.4 54c0 0 35.8-25 55-36.6 11.4-6.8 24.8-8.2 34.4 0.4 9 7.8 19.2 18 24.6 28.2 11.4 21.4 22.4 43.8 29.4 66.8 26.4 88.6 51 177.4 75.6 266.6 12.6 45.6 27.8 88.4 56 127.2 38.6 53.2 79.2 65.4 141.8 43 50.8-18.2 93.2-52.4 132-87.8 66.2-60.4 118.2-130.8 171-202.4 40.8-55.4 74.6-111.4 102.8-174 27.8-62 38.8-127 24.6-193.6z' })
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

  return LogoVimeo;
}(_react.Component);

LogoVimeo.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

LogoVimeo.propTypes = {
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

exports.default = LogoVimeo;
module.exports = exports['default'];
//# sourceMappingURL=LogoVimeo.js.map