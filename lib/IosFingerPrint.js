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

var IosFingerPrint = function (_Component) {
  _inherits(IosFingerPrint, _Component);

  function IosFingerPrint(props) {
    _classCallCheck(this, IosFingerPrint);

    var _this = _possibleConstructorReturn(this, (IosFingerPrint.__proto__ || Object.getPrototypeOf(IosFingerPrint)).call(this, props));

    _this.state = { classNames: [], animationActive: false };
    _this._getClasses = _this._getClasses.bind(_this);
    return _this;
  }

  _createClass(IosFingerPrint, [{
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
        _react2.default.createElement('path', { d: 'M911.6 548c-0.2 0-0.4 0-0.8 0-8.8-0.4-15.6-7.8-15.2-16.6 0.2-5.4 0.4-15.2 0.4-21.4 0-85.6-36.8-192.2-82.2-237.6-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0c51.4 51.4 91.6 165.6 91.6 260.2 0 6.4-0.2 16.6-0.4 22.8-0.4 8.6-7.4 15.2-16 15.2z M764 222.6c-3.6 0-7.2-1.2-10.2-3.8-71.4-59.4-155-90.8-241.8-90.8-82.6 0-159.8 24-223.4 69.6-7.2 5.2-17.2 3.4-22.4-3.6-5.2-7.2-3.4-17.2 3.6-22.4 69.2-49.4 153-75.6 242.2-75.6 94.4 0 185 34 262.2 98.4 6.8 5.6 7.8 15.8 2 22.6-3 3.6-7.6 5.6-12.2 5.6z M142.4 703.6c-6.8 0-13.2-4.4-15.4-11.4-19-63.6-31-116.2-31-182.2 0-100.6 36.4-197.6 102.4-273.4 5.8-6.6 16-7.4 22.6-1.6s7.4 16 1.6 22.6c-61 70-94.6 159.6-94.6 252.4 0 62 11.4 112.2 29.8 173 2.6 8.4-2.2 17.4-10.6 20-1.6 0.4-3.2 0.6-4.8 0.6z M244.2 847.2c-0.4 0-0.6 0-1 0-8.8-0.6-15.6-8-15-17 5.8-98-1.4-133.2-10.6-177.8-6.6-32.4-14.2-69-18.8-135.6-6.2-86 21.8-166.8 78.4-227.8 59.6-64 145.2-99.2 241.2-99.2 71 0 137.2 24.8 191 71.4 52.4 45.4 91.8 110.4 114.2 188 25 86.2 32 194.8 20.2 314-0.8 8.8-8.8 15.2-17.4 14.4-8.8-0.8-15.2-8.6-14.4-17.4 11.2-115.2 4.6-219.8-19.2-302-20.8-71.6-56.8-131.4-104.6-172.8-48-41.6-106.8-63.6-170-63.6-87 0-164.2 31.6-217.6 89-50.6 54.4-75.6 126.8-70 203.8 4.6 64.4 11.8 100 18.2 131.4 9.6 46.8 17.2 83.8 11.2 186-0.4 8.8-7.4 15.2-15.8 15.2z M337.4 896.6c-0.8 0-1.4 0-2.2-0.2-8.8-1.2-14.8-9.4-13.6-18 16-112.8-0.8-237.2-19.2-344-11.6-67.2 1.6-125.8 38.2-169.4 38.6-45.8 102.6-73 171.4-73 57.2 0 109 22.6 149.4 65.6 40.8 43 68.6 105.4 80.4 180 10 63 15 114.4 15.2 157 0.6 86-10 154.6-10.4 157.4-1.4 8.8-9.6 14.8-18.2 13.4-8.8-1.4-14.8-9.6-13.4-18.2 0.2-0.6 10.6-69.2 10.2-152.4-0.2-41-5-90.8-14.8-152.2-21.4-134.8-97.4-218.6-198.4-218.6-59.6 0-114.4 23-147 61.6-30.8 36.6-41.4 84.8-31.2 143.2 18.8 109.2 36 236.8 19.4 354-1.2 8-8 13.8-15.8 13.8z M632.6 906c-1 0-2 0-3-0.2-8.6-1.6-14.4-10-12.8-18.8 7-36.4 5.6-74.2 5.6-74.6-0.4-8.8 6.6-16.2 15.4-16.6 0.2 0 0.4 0 0.6 0 8.6 0 15.6 6.8 16 15.4 0 1.6 1.4 41.8-6.2 81.8-1.2 7.6-8 13-15.6 13z M432.2 922.6c-0.6 0-1.4 0-2-0.2-8.8-1.2-15-9.2-13.8-18 14.4-112.6 8.8-235.6-16.8-365.4-11.8-59.6 4.4-94.6 19.8-113.4 20-24.4 51.4-37.8 88.6-37.8 57.8 0 102 41.4 121.4 113.8 15.2 56.4 23.8 136.8 25.2 232.6 0.2 8.8-7 16-15.8 16.2 0 0-0.2 0-0.2 0-8.8 0-15.8-7-16-15.8-1.2-93-9.6-170.8-24.2-224.6-21.8-81.2-70.4-90-90.4-90-27.4 0-50 9.2-63.8 26-16 19.4-20.4 49.4-13.2 86.8 26.2 133.2 32 259.6 17 375.6-1 8.4-7.8 14.2-15.8 14.2z M532 928c-0.6 0-1.2 0-1.8 0-8.8-1-15.2-8.8-14.2-17.6 15.8-142.6 3.6-330.6-25.8-402.2-3.4-8.2 0.6-17.6 8.6-21 8.2-3.4 17.6 0.6 21 8.6 31.8 77 44.6 268.2 28.2 417.8-1 8.4-8 14.4-16 14.4z' })
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

  return IosFingerPrint;
}(_react.Component);

IosFingerPrint.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosFingerPrint.propTypes = {
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

exports.default = IosFingerPrint;
module.exports = exports['default'];
//# sourceMappingURL=IosFingerPrint.js.map