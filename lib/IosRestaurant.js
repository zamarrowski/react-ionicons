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

var IosRestaurant = function IosRestaurant(props) {
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
    _react2.default.createElement('path', { d: 'M768 128c-49.6 0-96 154.6-96 320 0 114 64 160 64 160v256c0 17.6 14.4 32 32 32s32-14.4 32-32v-714c0-22-22-22-32-22z M576 128l20 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l-12-208h-16l-12 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l20-208h-16c0 0-48 214.4-48 256s26.8 77.2 64 90.4v389.6c0 17.6 14.4 32 32 32s32-14.4 32-32v-389.6c37.2-13.2 64-48.4 64-90.4s-48-256-48-256h-16z M320 128c-53 0-96 128-96 256 0 41.6 26.8 77.2 64 90.4v389.6c0 17.6 14.4 32 32 32s32-14.4 32-32v-389.6c37.2-13.2 64-48.4 64-90.4 0-128-43-256-96-256z' })
  );
};

IosRestaurant.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosRestaurant.propTypes = {
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

exports.default = IosRestaurant;
module.exports = exports['default'];
//# sourceMappingURL=IosRestaurant.js.map