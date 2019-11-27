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

var IosGameControllerAOutline = function IosGameControllerAOutline(props) {
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
    _react2.default.createElement('path', { d: 'M389.644 480h-69.644v-69.524c0-5.634-5.208-10.476-10.606-10.476h-44.29c-5.396 0-9.104 4.744-9.104 10.356v69.644h-70.934c-5.23 0-9.066 4.286-9.066 9.542v42.854c0 5.396 4.062 11.606 9.722 11.606h70.278v70.934c0 5.23 4.286 9.066 9.542 9.066h42.854c5.396 0 11.606-4.062 11.606-9.722v-70.28h69.524c5.634 0 10.476-5.208 10.476-10.606v-44.29c-0.002-5.396-4.746-9.104-10.358-9.104z M724.628 558.126c-21.472 0-38.902 17.030-38.902 38.306 0 21.11 17.43 38.168 38.902 38.168 21.566 0 38.996-17.058 38.996-38.168 0-21.276-17.428-38.306-38.996-38.306z M639.532 474.33c-21.472 0-38.902 17.206-38.902 38.336 0 21.132 17.43 38.306 38.902 38.306 21.566 0 38.996-17.174 38.996-38.306 0-21.13-17.43-38.336-38.996-38.336z M809.724 474.33c-21.458 0-38.884 17.206-38.884 38.336 0 21.132 17.428 38.306 38.884 38.306 21.474 0 38.904-17.174 38.904-38.306 0-21.13-17.428-38.336-38.904-38.336z M724.628 390.602c-21.472 0-38.902 17.204-38.902 38.338 0 21.132 17.43 38.292 38.902 38.292 21.566 0 38.996-17.158 38.996-38.292 0-21.136-17.428-38.338-38.996-38.338z M738.538 324c51.676 0 99.408 18.628 134.408 52.458 35.504 34.314 55.054 82.036 55.054 134.378 0 52.606-19.612 100.81-55.222 135.738-35.126 34.452-82.8 53.426-134.24 53.426h-453.060c-51.424 0-99.096-18.974-134.234-53.43-35.624-34.934-55.244-83.136-55.244-135.734 0-52.334 19.56-100.056 55.078-134.376 35.008-33.83 82.74-52.46 134.4-52.46h453.060zM738.538 292h-453.060c-122.396 0-221.478 90.916-221.478 218.836 0 128.002 99.082 221.164 221.478 221.164h453.058c122.444 0 221.464-93.162 221.464-221.164 0-127.92-99.020-218.836-221.462-218.836v0z' })
  );
};

IosGameControllerAOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosGameControllerAOutline.propTypes = {
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

exports.default = IosGameControllerAOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosGameControllerAOutline.js.map