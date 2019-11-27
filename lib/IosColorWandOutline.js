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

var IosColorWandOutline = function IosColorWandOutline(props) {
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
    _react2.default.createElement('path', { d: 'M384 299.4l-68 68 512.2 512.2 67.8-68-512-512.2zM425.2 431.4l22.8-22.8 403 403-22.8 22.8-403-403z M368 128h32v80h-32v-80z M368 536h32v80h-32v-80z M560 352h80v32h-80v-32z M128 352h80v32h-80v-32z M200.223 211.181l22.627-22.627 56.568 56.568-22.627 22.627-56.568-56.568z M256.8 477.050l22.627 22.627-56.568 56.568-22.627-22.627 56.568-56.568z M545.154 188.548l22.627 22.627-56.568 56.568-22.627-22.627 56.568-56.568z' })
  );
};

IosColorWandOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosColorWandOutline.propTypes = {
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

exports.default = IosColorWandOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosColorWandOutline.js.map