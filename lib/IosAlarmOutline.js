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

var IosAlarmOutline = function IosAlarmOutline(props) {
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
    _react2.default.createElement('path', { d: 'M876.8 384.8c24.4-28.4 39.2-64.6 39.2-104.4 0.2-87.6-71-159.2-160.8-164.2-3.2-0.2-6.2-0.2-9.6-0.2-40.8-0.2-78.2 13.6-107.6 36.2l107.6 104.8-21 20.8c-51.4-38.8-114-64-182-69.8v-0.2c0-17-14-31-31-31s-31 14-31 31v0.2c-67.8 5.8-130.2 31-181.4 69.8l-20.8-20.8 107.6-104.8c-29.4-22.8-66.8-36.4-107.4-36.2-3.2 0-6.4 0.2-9.6 0.2-90 5-161.2 76.6-160.8 164.2 0 39.6 14.8 76 39.2 104.4l108-105.2 19 19c-70.2 63.8-114.2 156-114.2 258.4 0 87.8 32.4 168 86 229.4l-72.8 89.2 24.6 20.4 70.4-85.8c63.2 60.4 148.8 97.8 243.2 97.8h0.2c0 0 0.4 0 0.6 0 94.4 0 180.4-37.4 243.6-97.8l70.4 86 24.6-20.2-73-89.4c53.6-61.6 86-141.8 86-229.4 0-102.2-44-194.6-114.4-258.6l19-19 108.2 105.2zM152.4 335.6c-8.4-17.2-12.8-36.8-13-56-0.2-70.2 56.8-129.2 131-133.6 25.4-1.4 46.2 2.8 64.2 12.2l-182.2 177.4zM831.8 553c0 175.4-144 314.2-320.2 314.2-176 0-319.6-138.8-319.6-314.2s143.6-317.4 319.8-317.4c176.2-0 320 141.8 320 317.4zM689.4 158.4c17.6-9.6 38.6-13.6 64.2-12.2 74.4 4 131.2 63 131 133.6 0 19.2-4.6 38.8-13 56.2l-182.2-177.6z M512 320v256h-192v32h224v-288z' })
  );
};

IosAlarmOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosAlarmOutline.propTypes = {
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

exports.default = IosAlarmOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosAlarmOutline.js.map