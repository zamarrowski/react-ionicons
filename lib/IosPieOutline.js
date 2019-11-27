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

var IosPieOutline = function IosPieOutline(props) {
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
    _react2.default.createElement('path', { d: 'M576 161.652c90.586 7.41 174.708 46.048 239.618 110.988 72.47 72.5 112.382 168.848 112.382 271.446 0 51.848-10.16 102.084-30.198 149.406-19.36 45.718-47.080 86.768-82.388 122.048-35.308 35.278-76.408 62.962-122.16 82.302-47.346 20.020-97.646 30.162-149.504 30.162-82.386 0-160.94-25.694-227.168-74.292-31.9-23.41-59.914-51.466-83.266-83.384-16.756-22.906-30.844-47.448-42.082-73.268l384.766-96.068v-438.992zM544 128v448l-395.51 98.752c54.816 165.69 211.192 285.248 395.26 285.248 229.75 0 416.25-186.25 416.25-416s-186-416-416-416v0z M480 96.362v429.886l-360.684 91.46c-18.234-47.136-22.394-113.946-22.316-138.992v-0.142c0-94.622 32.93-187.492 90.346-254.796 33.47-39.236 75.004-69.962 123.442-91.326 49.41-21.79 106.25-33.904 169.212-36.090zM512 64h-11c-320 0-437 232.5-437 414.574 0 0 0.5 113.332 37.82 176.582l410.18-104.010v-487.146z' })
  );
};

IosPieOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosPieOutline.propTypes = {
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

exports.default = IosPieOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosPieOutline.js.map