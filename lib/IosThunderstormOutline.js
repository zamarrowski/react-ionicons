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

var IosThunderstormOutline = function IosThunderstormOutline(props) {
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
    _react2.default.createElement('path', { d: 'M566.4 352l-35.6 118.8-12.4 41.2h105.6l-138.4 219.6 31-115.4 10.8-40.4h-145.6l49.8-224h134.8zM609.4 320h-203.4l-64 288h143.6l-85.6 320 282-448h-120.6l48-160z M748.8 283.8l-26.6-0.2c-23.4-107.2-110.2-187.6-250.2-187.6s-255.6 100.8-255.6 243l0.6 9.6c-84.4 11.2-153 90.6-153 179.4 0 94 75.8 176 169.4 176h194.6l8.4-32c-126 0-203 0-203 0-36 0-70.2-16.2-96.4-43.8-26-27.4-40.8-64.8-40.8-102 0-35 13.2-69.6 37-97 23.6-27 54.8-44.4 88.2-49l29.6-4-2-29.8-0.6-8.6c0.2-58.6 23.4-112.6 65.2-151.8s98-58.8 158.4-58.8c58.6 0 110 14.6 148.6 45.8 35.4 28.8 59.8 69.4 70.4 117.4l5.8 26.8c23-1.4 52-1.4 52-1.4 49 0 94.2 17.2 127.4 48.2 33.4 31.2 51.6 74.4 51.6 121.6 0 89.4-67.4 169.4-153.6 183.6 0 0-17.8 2.8-40.4 2.8-7.4 0-140.8 0-140.8 0l-20.4 32h161.4c144 0 226-104 226-220 0-117.2-94.6-200.2-211.2-200.2z' })
  );
};

IosThunderstormOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosThunderstormOutline.propTypes = {
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

exports.default = IosThunderstormOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosThunderstormOutline.js.map