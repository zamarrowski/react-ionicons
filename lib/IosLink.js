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

var IosLink = function (_Component) {
  _inherits(IosLink, _Component);

  function IosLink(props) {
    _classCallCheck(this, IosLink);

    var _this = _possibleConstructorReturn(this, (IosLink.__proto__ || Object.getPrototypeOf(IosLink)).call(this, props));

    _this.state = { classNames: [], animationActive: false };
    _this._getClasses = _this._getClasses.bind(_this);
    return _this;
  }

  _createClass(IosLink, [{
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
        _react2.default.createElement('path', { d: 'M546 681.8l-135.8 135.8c-27 27-63.2 42-101.8 42s-74.8-14.8-101.8-42c-27-27-42-63.2-42-101.8s14.8-74.8 42-101.8l135.8-135.8c6.8-6.8 14.4-13 22.6-18.4 9.2-6 19-11 29.4-14.8 9.6-3.6 19.6-6 29.8-7.4 6.8-1 13.6-1.4 20.2-1.4 2.8 0 5.6 0.2 9.2 0.4 35 2.2 68 17 92.6 41.6 21.6 21.6 35.6 49.6 40.2 79.6 4.6-0.2 16.4-1 32.4-5.8s26.8-12.6 26.8-12.6c-6.6-42.4-23.2-75.6-54.2-106.4-30.8-30.8-71-51.2-114-58-3.8-0.6-7.4-1.2-11.2-1.6-7.2-0.8-14.6-1.2-22-1.2-5 0-10.2 0.2-15.4 0.6-10.8 0.8-21.4 2.4-32 4.8-2.2 0.4-4.2 1-6.4 1.6-13.4 3.6-26.4 8.4-38.6 14.4-20.2 10-38.8 23.2-54.8 39.2l-135.8 135.8c-39.2 39.2-60.6 91.4-60.6 147s21.6 108 60.6 147c39.2 39.2 91.4 60.6 147 60.6 55.8 0 108-21.6 147-60.6l135.8-135.8c14.4-14.4 26.4-30.8 36-48.6 0 0-22.4 5.4-47.2 5.4s-33.8-1.8-33.8-1.8z M862.8 161.2c-39.2-39.2-91.4-60.6-147-60.6s-108 21.6-147 60.6l-135.8 135.8c-14.4 14.4-26.4 30.8-36 48.6 0 0 0 0 0 0 10.4-2.4 30.6-4.8 48-4.8s32.4 2.2 32.4 2.2l136.6-136.2c27-27 63.2-42 101.8-42s74.8 14.8 101.8 42c27 27 42 63.2 42 101.8s-14.8 74.8-42 101.8l-135.8 135.6c-6.8 6.8-14.4 13-22.6 18.4-9.2 6-19 11-29.4 14.8-9.6 3.4-19.6 6-29.8 7.4-6.8 1-13.6 1.4-20.2 1.4-2.8 0-5.6-0.2-9.2-0.4-35-2.2-68-17-92.6-41.6-21.2-21.2-35-48.4-39.8-77.6 0 0-13.2-1-31.4 4.6-11.4 3.4-23.2 8.4-28.4 11 6 43 22.8 75.4 54.2 107v0l0.4 0.4c33.4 33.4 78 54.6 125.2 59.6 7.2 0.8 14.6 1.2 22 1.2 5.2 0 10.2-0.2 15.4-0.6 12.8-1 25.8-3 38.2-6.4 13.4-3.6 26.4-8.4 38.6-14.4 20.2-10 38.8-23.2 54.8-39.2l135.8-135.8c39.2-39.2 60.6-91.4 60.6-147s-21.8-108.4-60.8-147.6z' })
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

  return IosLink;
}(_react.Component);

IosLink.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosLink.propTypes = {
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

exports.default = IosLink;
module.exports = exports['default'];
//# sourceMappingURL=IosLink.js.map