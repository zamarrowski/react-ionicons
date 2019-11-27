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

var IosEyeOff = function IosEyeOff(props) {
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
    _react2.default.createElement('path', { d: 'M240.8 80l514.8 880 27.6-16-514.8-880z M512 288c-24.6 0-48 2.6-71 7.6l40.8 70c9.8-1.8 19.8-2.8 30.2-2.8 84.8 0 153.6 67 153.6 149.4 0 38.4-15 73.4-39.6 100l48.6 83c91.6-46.6 164.8-125.8 221.4-183-88.8-103-214.8-224.2-384-224.2z M512 661.4c-84.8 0-153.6-67-153.6-149.4 0-38.4 15-73.4 39.6-100l-48.2-82.4c-73 38.2-143.2 101.2-221.8 182.4 115.6 118.4 212.6 224 384 224 24.6 0 48.2-2.8 71-7.8l-40.8-69.8c-9.8 2-19.8 3-30.2 3z M601.4 506.8c-7.8 3.4-16.4 5.2-25.4 5.2-3 0-6-0.2-8.8-0.6l24 41.2c6.6-12.2 10.4-26 10.4-40.6 0-1.8 0-3.6-0.2-5.2z M432.8 471.4c-6.6 12.2-10.4 26-10.4 40.6 0 46.6 37.6 84.6 85 87l-74.6-127.6z' })
  );
};

IosEyeOff.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosEyeOff.propTypes = {
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

exports.default = IosEyeOff;
module.exports = exports['default'];
//# sourceMappingURL=IosEyeOff.js.map