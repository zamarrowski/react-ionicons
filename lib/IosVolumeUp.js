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

var IosVolumeUp = function IosVolumeUp(props) {
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
    _react2.default.createElement('path', { d: 'M748.2 256l-27.2 20.6c48.2 65.8 77 147.2 77 235.4s-28.8 169.6-77.2 235.4l27.2 20.6c52.6-71.4 83.8-160 83.8-256s-31-184.6-83.6-256z M640 703.6c40-53.6 64-119.8 64-191.6s-24-138-64-191.6l-27.2 20.2c35.8 48 57.2 107.2 57.2 171.4s-21.4 123.4-57.2 171.4l27.2 20.2z M546.2 639.8c27.4-35.8 43.8-79.8 43.8-127.8s-16.4-92-43.8-127.8l-27 19.6c23.2 30.2 37 67.6 37 108.2s-13.8 77.8-37 108.2l27 19.6z M307.8 432h-115.8v160h115.8l140.2 112v-384z' })
  );
};

IosVolumeUp.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosVolumeUp.propTypes = {
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

exports.default = IosVolumeUp;
module.exports = exports['default'];
//# sourceMappingURL=IosVolumeUp.js.map