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

var IosPower = function IosPower(props) {
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
    _react2.default.createElement('path', { d: 'M781.4 199.4c-5.6-4.8-12.8-7.4-20.4-7.4-9.2 0-18 4-23.8 11-5.4 6.4-8 14.4-7.4 22.8s4.6 16 11 21.4c79 67 124.4 164.2 124.4 266.6 0 193.8-158.4 351.6-353.2 351.6s-353.2-157.8-353.2-351.6c0-102.6 45.4-199.8 124.4-266.6 6.4-5.4 10.4-13 11-21.4s-2-16.4-7.4-22.8c-6-7-14.6-11-23.8-11-7.4 0-14.6 2.6-20.4 7.4-93.2 78.8-146.6 193.4-146.6 314.4 0 228.4 186.6 414.2 416 414.2s416-185.8 416-414.2c0-121-53.4-235.6-146.6-314.4z M514 544c17.6 0 32-14.4 32-32v-384c0-17.6-14.4-32-32-32s-32 14.4-32 32v384c0 17.6 14.4 32 32 32z' })
  );
};

IosPower.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosPower.propTypes = {
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

exports.default = IosPower;
module.exports = exports['default'];
//# sourceMappingURL=IosPower.js.map