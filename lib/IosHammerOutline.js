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

var IosHammerOutline = function (_Component) {
  _inherits(IosHammerOutline, _Component);

  function IosHammerOutline(props) {
    _classCallCheck(this, IosHammerOutline);

    var _this = _possibleConstructorReturn(this, (IosHammerOutline.__proto__ || Object.getPrototypeOf(IosHammerOutline)).call(this, props));

    _this.state = { classNames: [], animationActive: false };
    _this._getClasses = _this._getClasses.bind(_this);
    return _this;
  }

  _createClass(IosHammerOutline, [{
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
        _react2.default.createElement('path', { d: 'M924.8 433.8l-68.4-67.8c-2.2-2.2-5-3.2-7.8-3.2s-5.8 1-7.8 3.2l-7.4 7.4c-10.6 0-27.2-1.4-36.2-10.4-13.8-13.6 2.2-40.6-10.2-58-12.2-17.4-31.8-39.4-45.8-53.4s-69.2-66.8-162.4-105c-32.8-13.4-65-18.6-93.6-18.6-52.6 0-93.8 17-108.4 30.4-10.8 10-22.2 28-6.2 28 1.4 0 3-0.2 4.8-0.4 8.8-1.4 26.4-3 46.4-3 31.2 0 68.4 4.2 88.2 20 32.4 26 59 60.6 61.2 105.4 2.2 43-12.4 68-68.6 123.6l-11.4-6c-2.6-1.4-5.6-2-8.4-2-5 0-9.8 1.8-12.6 4.6 0 0-8.8 8.2-92.8 91.6-124.6 123.2-278.2 247.4-278.2 247.4-4.4 4.4-4.4 11.4 0 15.6l110.4 109.6c2.2 2.2 5 3.2 7.8 3.2s5.8-1 7.8-3.2c0 0 125.2-152.4 249.4-275.6 84-83.4 92.2-92 92.2-92 4.4-4.4 7.2-13.2 2.6-20.8l-7.8-13c50.2-49.8 70.4-71 95-77.8 8-2.2 16.6-3 25.4-3 19.2 0 38 4.4 46.6 9 10.2 5.4 19.4 22.6 20.4 37.2l-19 19c-4.4 4.4-4.4 11.4 0 15.6l68.4 67.8c2.2 2.2 5 3.2 7.8 3.2s5.8-1 7.8-3.2l110.4-109.6c4.6-4.4 4.6-11.6 0.4-15.8zM452.4 594.4c-98.8 98-198.8 215-236.4 259.6l-77.8-77.2c45.2-37.4 163-136.4 261.4-234.2 46.8-46.4 70.2-69.4 81.6-80.6l51.8 51.8c-11.4 11.8-34.6 35-80.6 80.6zM806.4 521.8l-38.6-38.4 4-4 6.4-10.4 3-14.6c-1.6-22.4-15-51.2-37.2-63-14.6-7.8-38.8-12.8-61.8-12.8-12.2 0-23.6 1.4-34 4.2-31.2 8.6-53 30.4-100.8 77.8l-8 8-3.4 3.2-14.2-14.2 2.8-2.8c57.4-56.8 80.8-90 78-147.8-2.2-48.2-26.8-91.6-73-129v0 0c-9.2-7.4-20.8-13.2-34.6-17.6 24.4 1.2 48.4 6.4 71.4 15.8 78.6 32.2 129 75.2 152 98 12.4 12.2 30.2 32.4 41.4 47.8 0.2 2.4-0.2 7-0.4 10.4-1 13.4-2.4 36.4 15 53.6 13.2 13 33 20 58.8 20l15.2-2.4 38.6 38.2-80.6 80z' })
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

  return IosHammerOutline;
}(_react.Component);

IosHammerOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosHammerOutline.propTypes = {
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

exports.default = IosHammerOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosHammerOutline.js.map