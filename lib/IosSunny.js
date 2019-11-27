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

var IosSunny = function IosSunny(props) {
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
    _react2.default.createElement('path', { d: 'M496 800h32v128h-32v-128z M496 96h32v128h-32v-128z M96 496h128v32h-128v-32z M800 496h128v32h-128v-32z M296.903 704.327l22.627 22.627-90.509 90.509-22.627-22.627 90.509-90.509z M794.978 206.523l22.627 22.627-90.509 90.509-22.627-22.627 90.509-90.509z M319.809 297.039l-22.627 22.627-90.509-90.509 22.627-22.627 90.509 90.509z M817.341 794.842l-22.627 22.627-90.509-90.509 22.627-22.627 90.509 90.509z M512 320c-105.8 0-192 86.2-192 192s86.2 192 192 192c105.8 0 192-86.2 192-192s-86.2-192-192-192v0z' })
  );
};

IosSunny.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosSunny.propTypes = {
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

exports.default = IosSunny;
module.exports = exports['default'];
//# sourceMappingURL=IosSunny.js.map