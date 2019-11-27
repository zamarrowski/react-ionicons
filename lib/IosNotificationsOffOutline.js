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

var IosNotificationsOffOutline = function IosNotificationsOffOutline(props) {
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
    _react2.default.createElement('path', { d: 'M576 800c0 36-28.8 64-64 64s-64.4-28-64.4-64h-32c0 54 43.2 96 96.2 96s96.2-42 96.2-96h-32z M267.6 64l-27.6 16.2 516.4 879.8 27.6-16.2z M472.6 208.4c33.6-4.2 44.4-4.8 79.4 0 41.6 5.8 83.2 28 110.4 60.8 35.4 42.8 53.4 106.4 53.4 189.2 0 102.8 8.8 169.8 28.4 217.4 10.4 25.2 23.4 44 38 60h-83l18.8 32h146c-70.8-64-116.2-78-116.2-309.8 0-198.2-98-265.8-189.8-281.2 0-1.2 0.2-2.2 0.2-3.4 0-25.4-20.6-46-46-46s-46 20.6-46 46c0 1.2 0 2.4 0.2 3.6-26.2 4.4-53 13.2-77.8 28l16 27.4c20.4-12.4 43.8-21 68-24z M242.2 736c14.4-16 27.4-34.6 37.8-59.8 19.6-47.6 28.2-114.6 28.2-217.6 0-60.4 9.6-110.8 28.8-150.2l-19-32.4c-25.6 42.8-41.8 101.8-41.8 182.4 0 231.8-45 245.6-116.2 309.6h445.8l-18.8-32h-344.8z' })
  );
};

IosNotificationsOffOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosNotificationsOffOutline.propTypes = {
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

exports.default = IosNotificationsOffOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosNotificationsOffOutline.js.map