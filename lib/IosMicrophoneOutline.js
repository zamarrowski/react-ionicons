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

var IosMicrophoneOutline = function IosMicrophoneOutline(props) {
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
    _react2.default.createElement('path', { d: 'M560 96h-96c-132 0-240 108-240 240v256c0 126.6 99.4 231.2 224 239.4v96.6h128v-96.6c124.6-8.4 224-112.8 224-239.4v-256c0-132-108-240-240-240zM480 896v-64h64v64h-64zM560 800h-96c-55.2 0-107.4-21.8-146.8-61.2-1-1-1.8-2-2.8-2.8h395.4c-1 1-1.8 2-2.8 2.8-39.6 39.4-91.8 61.2-147 61.2zM735 704h-446c-21.4-33.2-33-71.8-33-112v-16h160v-32h-160v-64h160v-32h-160v-64h160v-32h-160v-16c0-55.2 21.8-107.4 61.2-146.8 27.8-27.8 61.8-46.8 98.8-55.6v90.4h32v-95.4c5.2-0.4 10.6-0.6 16-0.6h32v128h32v-128h32c5.4 0 10.8 0.2 16 0.6v95.4h32v-90.4c37 8.8 71.2 27.8 98.8 55.6 39.4 39.4 61.2 91.6 61.2 146.8v16h-160v32h160v64h-160v32h160v64h-160v32h160v16c0 40.2-11.6 78.8-33 112z' })
  );
};

IosMicrophoneOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosMicrophoneOutline.propTypes = {
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

exports.default = IosMicrophoneOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosMicrophoneOutline.js.map