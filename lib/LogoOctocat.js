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

var LogoOctocat = function (_Component) {
  _inherits(LogoOctocat, _Component);

  function LogoOctocat(props) {
    _classCallCheck(this, LogoOctocat);

    var _this = _possibleConstructorReturn(this, (LogoOctocat.__proto__ || Object.getPrototypeOf(LogoOctocat)).call(this, props));

    _this.state = { classNames: [], animationActive: false };
    _this._getClasses = _this._getClasses.bind(_this);
    return _this;
  }

  _createClass(LogoOctocat, [{
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
        _react2.default.createElement('path', { d: 'M356.708 574.956c-18.246 0-33.856 8.414-46.402 25.666-12.582 16.956-18.796 37.946-18.796 62.862 0 24.948 6.332 46.016 18.796 63.018 12.546 17.080 28.078 25.542 46.402 25.542 16.988 0 31.778-8.54 44.242-25.542 12.542-17.002 18.796-38.070 18.796-63.018 0-24.838-6.332-45.86-18.796-62.862-12.466-17.174-27.134-25.666-44.242-25.666z M669.336 574.956c-18.090 0-33.782 8.414-46.364 25.666-12.542 16.956-18.718 37.946-18.718 62.862 0 24.948 6.372 46.016 18.718 63.018 12.582 17.080 28.196 25.542 46.364 25.542 17.066 0 31.812-8.54 44.356-25.542 12.586-17.002 18.836-38.070 18.836-63.018 0-24.838-6.328-45.86-18.836-62.862-12.544-17.174-27.094-25.666-44.356-25.666z M891.554 344h-0.118c0 0 5.586-28.528 0.628-78.36-4.364-49.832-14.942-95.676-32.246-137.64 0 0-8.844 1.52-25.52 5.792s-44.16 12.598-81.876 29.536c-37.082 17.080-75.972 39.576-116.594 67.010-27.606-7.868-68.816-11.878-123.988-11.878-52.578 0-93.828 4.024-123.954 11.89-89.184-61.718-163.664-95.89-224.184-102.35-17.188 41.964-27.766 87.982-32.090 137.94-4.796 49.878 0.864 78.658 0.864 78.658-48.518 52.504-68.476 128.484-68.476 190.988 0 48.488 1.316 92.156 12.25 130.96 11.128 38.62 25.324 70.26 42.196 94.442 17.222 24.242 38.024 45.576 63.152 63.876 24.934 18.628 47.976 31.924 68.778 40.432 20.922 8.744 44.75 15.204 71.964 19.722 26.66 4.772 46.876 7.29 60.954 7.992 0 0 56 2.988 128.708 2.988s128.59-2.988 128.59-2.988c14.040-0.704 34.29-3.268 61.070-7.992 27.094-4.598 51.042-11.214 71.882-19.722 20.804-8.586 43.886-21.802 68.938-40.432 25.046-18.064 45.812-39.478 63.036-63.876 16.872-24.182 30.988-55.822 42.196-94.442 10.972-38.804 12.29-82.77 12.29-131.258-0.004-60.51-20.040-137.288-68.45-191.288zM760.766 811.29c-55.724 26.182-137.794 36.71-246.644 36.71l-4.286-0.078c-108.886 0-190.722-10.496-245.696-36.82-55.016-26.184-82.542-80.114-82.542-161.476 0-48.66 17.144-87.98 50.964-118.214 14.708-13.030 32.876-22.038 55.29-27.434 22.258-5.116 42.708-5.524 61.938-4.93 18.796 0.83 45.102 4.392 78.688 6.928 33.58 2.594 58.592 6.024 83.522 6.024 23.396 0 54.426-3.914 104.208-7.918 49.98-3.942 86.988-5.942 110.934-2 24.578 4.004 45.972 12.404 64.258 29.484 35.468 31.502 53.204 71.010 53.204 118.168-0.002 81.332-28.276 135.34-83.838 161.556z' })
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

  return LogoOctocat;
}(_react.Component);

LogoOctocat.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

LogoOctocat.propTypes = {
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

exports.default = LogoOctocat;
module.exports = exports['default'];
//# sourceMappingURL=LogoOctocat.js.map