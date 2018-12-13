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

var LogoTux = function (_Component) {
  _inherits(LogoTux, _Component);

  function LogoTux(props) {
    _classCallCheck(this, LogoTux);

    var _this = _possibleConstructorReturn(this, (LogoTux.__proto__ || Object.getPrototypeOf(LogoTux)).call(this, props));

    _this.state = { classNames: [], animationActive: false };
    _this._getClasses = _this._getClasses.bind(_this);
    return _this;
  }

  _createClass(LogoTux, [{
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
        _react2.default.createElement('path', { d: 'M852.6 792c-13.4-8-26.4-22-24-37.6 4.6-30.6 5-43-0.4-51.6-3.8-6.4-11-10-17.2-11.6 4-5 6.2-10.8 7.6-21.8 2.6-20-9.4-82-25.4-131.4s-59.8-100-89.4-136c-52-63.6-45.6-78.4-52.6-199.4-4.4-77-38.6-138.6-139.2-138.6s-134 64-134 118c0 57.4 4 102 4 102 2.6 66.8 2 78.8-16 110.6-9.8 17.4-54 60-71.4 89.4s-15.2 59-49.2 105.6c-24.8 34-27.6 56.8-19.4 88-14 16.4-7.2 39.8-10 49.8-5.2 17.4-27.4 20.6-44.6 22s-30.6 0-37.4 10.6 1.4 32 8.6 60-14.6 30-14.6 62 60 32 119.4 45.4 81.4 32.6 112 32.6 53.6-20.4 76-38.6c14.4-11.8 58-7.4 84.6-7.4s68.6-1.2 91.4 4.8 22.6 41.2 78.6 41.2 69.4-41.4 122-68.6 84-40 84-59.4-30-32-43.4-40zM399.6 903c-2.6 26-25.2 34.2-48.2 32.2-26-2.2-58-15.2-88.2-24.2s-71-15-98-19.8c-30.6-5.4 0-27.2-0.4-68.4-0.2-16-14.2-38.8-8.4-49.4s34.6-4.8 44.6-7.6 25.4-11.4 30.6-23.8c2.8-6.8 3.6-35.4 5.8-45.6 2.2-9.8 15.8-14.4 44.4 0.2s57.8 76.2 84.6 119.6 35.8 60.8 33.2 86.8zM636.6 771.4c4 20.6 6.4 49 1.4 72.6s-14 31-21.4 46c-4.4-13.6 10.6-27.6 8.8-61.6-1-19-1.6-15.6-23 3.6-24.4 21.6-55.2 40.2-106 45-42 4-65-16.6-65-16.6 10 32-8.6 49.4-8.6 49.4 0.6-7.4 1.6-28.6-5-43.2-8-18-18.6-37.4-18.6-37.4s17.2-5.4 23.2-20 4-34.6-17.4-55.4-105-75.2-111.8-84.2c-9.8-13-13.4-20.4-14-46.4s10.8-49.6 8.6-40.6c-1.6 6.4 0.2 13.6 0.2 39.6s15.2 46.6 27.8 50c19 5.2 4-52.2 16-106.2s23.4-65.6 38.4-87.6 38.4-41 34-86.2-0.2-40.2 10.2-23.6c8 13 26.6 48 49.4 44 38.8-6.6 87.8-49.2 95.2-56.4s1.4-14.2-4.6-11.6c-31 13.4-88.6 43-103 36.4s-36.2-41.2-33.6-39c30.8 27.2 39.8 22.2 52.8 18 16.8-5.6 25.6-8.6 57-22.6s41.4-10.6 44.6-17.4-0.8-13.4-9.4-11.4c-12.8 3-6.8 10.2-45.4 24.6-50.6 19-66.6 20.6-88 6-17.2-11.8-30-25.4-30-33.4s16.6-16.6 24.6-22.6 24.6-21.8 24.6-21.8 2-14.4-1.2-25.4c-3.8-13-15.6-18.6-23.8-16.2-8.2 2.2-16 11-13.6 29.6 2 16.6 14 22 14 22s-5.4 7-10.4 9.4c0 0-1.6-0.6-7-12.6s-13.2-39-0.6-62.2 39.2-10.4 47.6 7.6c7.8 16.6 4.8 45.4 4.8 45.4 12-4.4 26-4 42 7-14.2-59.6 19-82.2 44-82.2s44.6 19.2 44.6 50c0 24-7 36.4-13.8 44-8.2-1-16.4-3-12.6-6.8 2.6-2.8 8.8-11.4 8.8-26.4s-11.8-27.4-27.4-27.4c-18.4 0-25.2 16.6-27.4 26s-0.8 17.2-0.4 20.8c1.2 10 21.8 19.2 47.8 25.8s22.6 18 16.6 50.6 12.6 36.6 28.6 67.6 11.4 43.6 31.8 70.4 38 95.6 32.8 153.6c-1.8 21-7.8 20.4 14.6 13.4 11.2-3.4 24-5.4 24-5.4 6.2-12.6 6.8-32.6 7-44.6 0.4-27 1.4-83-53.4-143 0 0 59 43.4 68 124 5 44.6-4 64.8-4 64.8 10.6 2.6 19.6 14.6 25.2 23.6 7.4 12.2-7.8-11.6-40-11.6-17 0-30.6 7.8-37 15.8s-6.2 15.2-6.4 23.4c-14.2-2.4-24.8 0-33.6 9.8-11.2 14-5.6 48.4-1.6 69.2zM816.8 865.8c-48.2 20.8-65.4 47-95.4 63s-55.4 4.6-67.4-16 20.8-56.4 9.4-119.2c-8.8-48.4-12.6-62-9.8-73.6 2.8-11 18.8-8.8 23-7.8 2.6 10.8 13.4 39 54 39 0 0 46.4 5.2 65.4-42.4 0 0 11.4-0.4 14.4 7 4.6 11.6-5.8 33-5.6 42.6 0.6 31.4 23.4 42.2 56.8 64 16.4 11.2 4.2 22.2-44.8 43.4z' })
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

  return LogoTux;
}(_react.Component);

LogoTux.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

LogoTux.propTypes = {
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

exports.default = LogoTux;
module.exports = exports['default'];
//# sourceMappingURL=LogoTux.js.map