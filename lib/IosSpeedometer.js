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

var IosSpeedometer = function IosSpeedometer(props) {
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
    _react2.default.createElement('path', { d: 'M834 557.484v-1.484h59.628c-1.862-46-12.112-91.218-29.662-132.302-17.286-40.456-41.006-77.33-70.514-109.124l-49.734 49.292-22.458-21.984 49.576-49.358c-32.374-29.672-69.72-53.484-111.030-70.784-42.848-17.946-87.806-27.556-133.806-29.368v67.628h-30v-67.628c-46 1.788-89.9 11.398-132.808 29.37-40.706 17.046-77.916 40.914-110.63 70.942l49.592 49.166-1.098 1.098 0.002 0.012-0.58 0.67-20.54 20.406-49.558-48.958c-29.54 31.864-53.208 68.486-70.352 108.618-17.546 41.080-27.794 86.304-29.654 132.304h57.626v32h-57.626c1.852 44 11.83 88.864 29.658 130.594 15.378 36.002 36.796 69.328 63.662 99.852 77.57-74.754 179.916-115.856 288.308-115.856 108.226 0 210.572 41.352 288.308 116.27 26.708-30.35 48.122-63.958 63.66-100.332 17.83-41.736 27.808-86.528 29.658-130.528h-59.628v-30.516zM608 575.876c0 52.934-43.066 96-96 96-20.446 0-39.402-6.446-54.992-17.382l-24.066 24.066-22.624-22.626 23.896-23.896c-11.444-15.804-18.212-35.204-18.212-56.16 0-52.934 43.066-96 96-96 20.004 0 38.594 6.158 53.988 16.668l146.968-131.454 2.828 2.828-125.698 152.22c11.258 15.726 17.912 34.962 17.912 55.736z M512 128c-247.424 0-448 200.452-448 447.876 0 113.95 42.566 217.94 112.632 297 7.102 8.012 14.482 15.64 22.132 23.124h44.386c63.426-78.206 160.288-128.192 268.848-128.192s205.424 49.986 268.85 128.192h44.386c7.65-7.484 15.032-15.114 22.132-23.124 70.066-79.060 112.632-183.050 112.632-297 0.002-247.424-200.574-447.876-447.998-447.876zM821.488 841.594c-6.102 6.816-12.784 13.726-20.426 21.128l-0.752 0.73-0.696-0.786c-5.258-5.94-10.986-11.97-17.518-18.44-0.55-0.542-1.11-1.078-1.668-1.614l-1.008-0.97c-34.516-33.532-74.468-59.934-118.75-78.476-47.070-19.712-97.090-29.708-148.672-29.708s-101.602 9.996-148.672 29.708c-44.28 18.542-84.234 44.946-118.75 78.476l-1.008 0.97c-0.558 0.536-1.116 1.070-1.666 1.614-6.532 6.468-12.26 12.5-17.518 18.44l-0.696 0.786-0.754-0.73c-7.642-7.402-14.324-14.312-20.424-21.128-67.028-74.882-103.942-171.258-103.942-271.37 0-109.332 43.004-212.106 121.090-289.388 78.082-77.278 181.904-119.836 292.342-119.836 110.44 0 214.26 42.558 292.34 119.836 78.086 77.284 121.090 180.058 121.090 289.388 0 100.112-36.912 196.486-103.942 271.37z M576 575.876c0 35.346-28.654 64-64 64s-64-28.654-64-64c0-35.346 28.654-64 64-64s64 28.654 64 64z' })
  );
};

IosSpeedometer.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosSpeedometer.propTypes = {
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

exports.default = IosSpeedometer;
module.exports = exports['default'];
//# sourceMappingURL=IosSpeedometer.js.map