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

var IosArrowRoundBack = function (_Component) {
  _inherits(IosArrowRoundBack, _Component);

  function IosArrowRoundBack(props) {
    _classCallCheck(this, IosArrowRoundBack);

    var _this = _possibleConstructorReturn(this, (IosArrowRoundBack.__proto__ || Object.getPrototypeOf(IosArrowRoundBack)).call(this, props));

    _this.state = { classNames: [], animationActive: false };
    _this._getClasses = _this._getClasses.bind(_this);
    return _this;
  }

  _createClass(IosArrowRoundBack, [{
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
        _react2.default.createElement('path', { d: 'M752 496h-441.4l132.6-148.8c5.8-6.8 6.4-16.2 0.2-22.4s-17-6.6-22.8-0.2l-160 176c-0.4 0.4-0.8 0.8-1 1.2-0.2 0.2-0.2 0.4-0.4 0.6s-0.4 0.4-0.6 0.8c-0.2 0.2-0.2 0.4-0.4 0.6s-0.2 0.4-0.4 0.6c-0.2 0.2-0.2 0.4-0.4 0.8-0.2 0.2-0.2 0.4-0.4 0.6 0 0.2-0.2 0.4-0.2 0.8 0 0.2-0.2 0.6-0.2 0.8s-0.2 0.4-0.2 0.8c0 0.2-0.2 0.6-0.2 0.8s0 0.6-0.2 0.8c0 0.2 0 0.4 0 0.6-0.2 1-0.2 2.2 0 3.2 0 0.2 0 0.4 0 0.6s0 0.6 0.2 0.8c0 0.2 0.2 0.6 0.2 0.8s0.2 0.4 0.2 0.8c0 0.2 0.2 0.6 0.2 0.8s0.2 0.4 0.2 0.8c0 0.2 0.2 0.4 0.4 0.6s0.2 0.4 0.4 0.8c0.2 0.2 0.2 0.4 0.4 0.6s0.2 0.4 0.4 0.6c0.2 0.2 0.4 0.4 0.6 0.8 0.2 0.2 0.2 0.4 0.4 0.6 0.4 0.4 0.6 0.8 1 1.2l160 176c3.2 3.4 7.2 4.6 11.4 4.6 4 0 8.2-1.6 11.4-4.6 6.2-6.2 6-16 0-22.6l-132.8-148.8h441.4c8.8 0 16-7.2 16-16s-7.2-16-16-16z' })
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

  return IosArrowRoundBack;
}(_react.Component);

IosArrowRoundBack.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosArrowRoundBack.propTypes = {
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

exports.default = IosArrowRoundBack;
module.exports = exports['default'];
//# sourceMappingURL=IosArrowRoundBack.js.map