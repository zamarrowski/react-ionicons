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

var LogoJavascript = function LogoJavascript(props) {
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
    _react2.default.createElement('path', { d: 'M416 176.002h-160v424.996c0 105.16-36.064 134.522-98.824 134.522-29.41 0-55.896-5.042-76.5-12.126l-16.676 124.414c29.4 10.124 74.518 16.192 109.814 16.192 144.096 0 242.186-67.742 242.186-261.96v-426.038z M764.926 160c-154.886 0-252.926 87.996-252.926 204.308 0 100.166 75.502 162.88 185.282 203.33 79.4 28.316 110.784 53.616 110.784 95.078 0 45.512-36.278 74.85-104.896 74.85-63.726 0-121.578-21.28-160.788-42.51v-0.042l-30.382 126.44c37.278 21.276 106.882 42.51 182.334 42.51 181.374-0.004 265.666-97.104 265.666-211.396 0-97.1-53.916-159.8-170.556-204.326-86.278-34.382-122.54-53.59-122.54-97.084 0-34.4 31.376-65.738 96.086-65.738 63.692 0 107.488 21.414 133.010 34.582l38.25-128c-40-17.562-93.874-32.002-169.324-32.002v0z' })
  );
};

LogoJavascript.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

LogoJavascript.propTypes = {
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

exports.default = LogoJavascript;
module.exports = exports['default'];
//# sourceMappingURL=LogoJavascript.js.map