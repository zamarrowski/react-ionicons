'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _SVG = require('./SVG');

var _SVG2 = _interopRequireDefault(_SVG);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IosEyeOffOutline = function IosEyeOffOutline(props) {
  return _react2.default.createElement(
    _SVG2.default,
    {
      style: props.style,
      className: props.className,
      fill: props.color,
      width: props.fontSize,
      height: props.fontSize,
      viewBox: '0 0 1024 1024',
      onClick: props.onClick,
      rotate: props.rotate ? 1 : 0,
      shake: props.shake ? 1 : 0,
      beat: props.beat ? 1 : 0
    },
    _react2.default.createElement('path', { d: 'M240.8 80l514.8 880 27.6-16-514.8-880z M512 288c-24.6 0-48 2.6-71 7.6l13.2 22.6c18.8-3.6 38-5.4 57.8-5.4 148 0 262 102.2 348 199.2-53.8 54.6-118.4 121.2-198 161.4l12.6 21.6c91.6-46.6 164.8-125.8 221.4-183-88.8-102.8-214.8-224-384-224z M512 711.2c-152.2 0-243.2-91.6-348-199.2 71.6-72.6 134-127.4 198.4-161l-12.6-21.6c-73 38.4-143.2 101.4-221.8 182.6 115.6 118.4 212.6 224 384 224 24.6 0 48.2-2.8 71-7.8l-13.2-22.6c-18.8 3.6-38 5.6-57.8 5.6z M626 612c24.6-26.4 39.6-61.6 39.6-100 0-82.4-68.8-149.4-153.6-149.4-10.2 0-20.4 1-30 2.8l13.4 23c5.4-0.6 11-1 16.6-1 70.6 0 128 55.8 128 124.4 0 29-10.2 55.8-27.4 77l13.4 23.2z M398 412c-24.6 26.4-39.6 61.6-39.6 100 0 82.4 68.8 149.4 153.6 149.4 10.4 0 20.4-1 30.2-2.8l-13.4-23c-5.4 0.6-11 1-16.6 1-70.6 0-128-55.8-128-124.4 0-29 10.2-55.8 27.4-77l-13.6-23.2z M432.8 471.4c-6.6 12.2-10.4 26-10.4 40.6 0 46.6 37.6 84.6 85 87l-16.6-28.2c-24.8-8.6-42.8-31.6-42.8-58.6 0-4.2 0.4-8.4 1.2-12.4l-16.4-28.4z M591.2 552.6c6.6-12.2 10.4-26 10.4-40.6h-25.6c0 4.2-0.4 8.4-1.2 12.4l16.4 28.2z' })
  );
};

IosEyeOffOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosEyeOffOutline.propTypes = {
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

exports.default = IosEyeOffOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosEyeOffOutline.js.map