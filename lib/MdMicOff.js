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

var MdMicOff = function MdMicOff(props) {
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
    _react2.default.createElement('path', { d: 'M735.902 709.308l-361.902-361.226v0.692l-221.776-221.712-48.382 48.082 270.158 269.796v57.632c0 75.58 62.242 137.428 137.82 137.428 17.22 0 33.904-3.24 49.13-9.090l64.778 64.548c-34.666 17.586-73.624 27.72-113.564 27.72-125.972 0-242.73-97.18-242.73-233.18h-77.888c0 154.002 124.454 285.404 274.454 306.028v163.974h92v-163.974c44-6.704 86.132-22.444 123.254-45.244l190.556 190.156 48.066-48-67.694-67.57-116.432-115.918 116.448 115.918-116.296-116.060z M650 502.572v-301.144c0-75.58-62.418-137.428-138-137.428s-138 61.848-138 137.428v50.488l274.218 273.936c1.34-7.582 1.782-15.358 1.782-23.28z M832.878 490h-77.882c0 40.992-10.996 79.352-29.862 112.394l55.144 55.032c33.046-48.22 52.6-105.574 52.6-167.426z M919.998 892.854l-67.794-67.486 67.71 67.57z' })
  );
};

MdMicOff.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdMicOff.propTypes = {
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

exports.default = MdMicOff;
module.exports = exports['default'];
//# sourceMappingURL=MdMicOff.js.map