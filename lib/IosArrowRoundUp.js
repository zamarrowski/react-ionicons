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

var IosArrowRoundUp = function (_Component) {
  _inherits(IosArrowRoundUp, _Component);

  function IosArrowRoundUp(props) {
    _classCallCheck(this, IosArrowRoundUp);

    var _this = _possibleConstructorReturn(this, (IosArrowRoundUp.__proto__ || Object.getPrototypeOf(IosArrowRoundUp)).call(this, props));

    _this.state = { classNames: [], animationActive: false };
    _this._getClasses = _this._getClasses.bind(_this);
    return _this;
  }

  _createClass(IosArrowRoundUp, [{
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
        _react2.default.createElement('path', { d: 'M528 752v-441.4l148.8 132.6c6.8 5.8 16.2 6.4 22.4 0.2s6.6-17 0.2-22.8l-176-160c-0.4-0.4-0.8-0.8-1.2-1-0.2-0.2-0.4-0.2-0.6-0.4s-0.4-0.4-0.8-0.6c-0.2-0.2-0.4-0.2-0.6-0.4s-0.4-0.2-0.6-0.4c-0.2-0.2-0.4-0.2-0.8-0.4-0.2-0.2-0.4-0.2-0.6-0.4-0.2 0-0.4-0.2-0.8-0.2-0.2 0-0.6-0.2-0.8-0.2s-0.4-0.2-0.8-0.2c-0.2 0-0.6-0.2-0.8-0.2s-0.6 0-0.8-0.2c-0.2 0-0.4 0-0.6 0-1-0.2-2.2-0.2-3.2 0-0.2 0-0.4 0-0.6 0s-0.6 0-0.8 0.2c-0.2 0-0.6 0.2-0.8 0.2s-0.4 0.2-0.8 0.2c-0.2 0-0.6 0.2-0.8 0.2s-0.4 0.2-0.8 0.2c-0.2 0-0.4 0.2-0.6 0.4s-0.4 0.2-0.8 0.4c-0.2 0.2-0.4 0.2-0.6 0.4s-0.4 0.2-0.6 0.4c-0.2 0.2-0.4 0.4-0.8 0.6-0.2 0.2-0.4 0.2-0.6 0.4-0.4 0.4-0.8 0.6-1.2 1l-176 160c-3.4 3.2-4.6 7.2-4.6 11.4 0 4 1.6 8.2 4.6 11.4 6.2 6.2 16 6 22.6 0l148.6-132.6v441.2c0 8.8 7.2 16 16 16 9 0 16.2-7.2 16.2-16z' })
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

  return IosArrowRoundUp;
}(_react.Component);

IosArrowRoundUp.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosArrowRoundUp.propTypes = {
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

exports.default = IosArrowRoundUp;
module.exports = exports['default'];
//# sourceMappingURL=IosArrowRoundUp.js.map