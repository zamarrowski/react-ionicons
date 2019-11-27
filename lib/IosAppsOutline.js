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

var IosAppsOutline = function IosAppsOutline(props) {
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
    _react2.default.createElement('path', { d: 'M308 160c6.6 0 12 5.4 12 12v104c0 6.6-5.4 12-12 12h-104c-6.6 0-12-5.4-12-12v-104c0-6.6 5.4-12 12-12h104zM308 128h-104c-24.2 0-44 19.8-44 44v104c0 24.2 19.8 44 44 44h104c24.2 0 44-19.8 44-44v-104c0-24.2-19.8-44-44-44v0z M564 160c6.6 0 12 5.4 12 12v104c0 6.6-5.4 12-12 12h-104c-6.6 0-12-5.4-12-12v-104c0-6.6 5.4-12 12-12h104zM564 128h-104c-24.2 0-44 19.8-44 44v104c0 24.2 19.8 44 44 44h104c24.2 0 44-19.8 44-44v-104c0-24.2-19.8-44-44-44v0z M820 160c6.6 0 12 5.4 12 12v104c0 6.6-5.4 12-12 12h-104c-6.6 0-12-5.4-12-12v-104c0-6.6 5.4-12 12-12h104zM820 128h-104c-24.2 0-44 19.8-44 44v104c0 24.2 19.8 44 44 44h104c24.2 0 44-19.8 44-44v-104c0-24.2-19.8-44-44-44v0z M308 448c6.6 0 12 5.4 12 12v104c0 6.6-5.4 12-12 12h-104c-6.6 0-12-5.4-12-12v-104c0-6.6 5.4-12 12-12h104zM308 416h-104c-24.2 0-44 19.8-44 44v104c0 24.2 19.8 44 44 44h104c24.2 0 44-19.8 44-44v-104c0-24.2-19.8-44-44-44v0z M564 448c6.6 0 12 5.4 12 12v104c0 6.6-5.4 12-12 12h-104c-6.6 0-12-5.4-12-12v-104c0-6.6 5.4-12 12-12h104zM564 416h-104c-24.2 0-44 19.8-44 44v104c0 24.2 19.8 44 44 44h104c24.2 0 44-19.8 44-44v-104c0-24.2-19.8-44-44-44v0z M820 448c6.6 0 12 5.4 12 12v104c0 6.6-5.4 12-12 12h-104c-6.6 0-12-5.4-12-12v-104c0-6.6 5.4-12 12-12h104zM820 416h-104c-24.2 0-44 19.8-44 44v104c0 24.2 19.8 44 44 44h104c24.2 0 44-19.8 44-44v-104c0-24.2-19.8-44-44-44v0z M308 736c6.6 0 12 5.4 12 12v104c0 6.6-5.4 12-12 12h-104c-6.6 0-12-5.4-12-12v-104c0-6.6 5.4-12 12-12h104zM308 704h-104c-24.2 0-44 19.8-44 44v104c0 24.2 19.8 44 44 44h104c24.2 0 44-19.8 44-44v-104c0-24.2-19.8-44-44-44v0z M564 736c6.6 0 12 5.4 12 12v104c0 6.6-5.4 12-12 12h-104c-6.6 0-12-5.4-12-12v-104c0-6.6 5.4-12 12-12h104zM564 704h-104c-24.2 0-44 19.8-44 44v104c0 24.2 19.8 44 44 44h104c24.2 0 44-19.8 44-44v-104c0-24.2-19.8-44-44-44v0z M820 736c6.6 0 12 5.4 12 12v104c0 6.6-5.4 12-12 12h-104c-6.6 0-12-5.4-12-12v-104c0-6.6 5.4-12 12-12h104zM820 704h-104c-24.2 0-44 19.8-44 44v104c0 24.2 19.8 44 44 44h104c24.2 0 44-19.8 44-44v-104c0-24.2-19.8-44-44-44v0z' })
  );
};

IosAppsOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosAppsOutline.propTypes = {
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

exports.default = IosAppsOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosAppsOutline.js.map