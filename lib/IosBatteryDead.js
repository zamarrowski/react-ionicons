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

var IosBatteryDead = function IosBatteryDead(props) {
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
    _react2.default.createElement('path', { d: 'M768 288h-608c-35.2 0-64 28.8-64 64v320c0 35.2 28.8 64 64 64h608c35.2 0 64-28.8 64-64v-320c0-35.2-28.8-64-64-64zM800 672c0 17.6-14.4 32-32 32h-608c-17.6 0-32-14.4-32-32v-320c0-17.6 14.4-32 32-32h608c17.6 0 32 14.4 32 32v320z M864 401.2v221.6c38.2-22.2 64-63.4 64-110.8s-25.8-88.6-64-110.8z' })
  );
};

IosBatteryDead.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosBatteryDead.propTypes = {
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

exports.default = IosBatteryDead;
module.exports = exports['default'];
//# sourceMappingURL=IosBatteryDead.js.map