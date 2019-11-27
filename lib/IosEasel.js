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

var IosEasel = function IosEasel(props) {
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
    _react2.default.createElement('path', { d: 'M768 768l64 160h33.2l-65.2-160z M225.2 768l-65.2 160h33.2l64-160z M496 768h32v96h-32v-96z M160 256h704v384h-704v-384z M928 160h-832c-17.6 0-32 14.4-32 32v512c0 17.6 13.8 32 31.6 32h832.4c17.6 0 32-14.4 32-32v-512c0-17.6-14.4-32-32-32zM896 672h-768v-448h768v448z M512 96c-17.6 0-32 14.4-32 32h64c0-17.6-14.4-32-32-32z' })
  );
};

IosEasel.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosEasel.propTypes = {
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

exports.default = IosEasel;
module.exports = exports['default'];
//# sourceMappingURL=IosEasel.js.map