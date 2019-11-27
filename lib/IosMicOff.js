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

var IosMicOff = function IosMicOff(props) {
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
    _react2.default.createElement('path', { d: 'M354 536.8c0 92.2 70.6 167.2 158 167.2 18.2 0 35.6-3.2 51.8-9.2l-209.8-358.8v200.8z M670 536.8v-273.8c0-92.2-70.6-167.2-158-167.2-59 0-110.4 34.2-137.6 84.8l265.4 454c19-27.4 30.2-61.2 30.2-97.8z M528.4 766.6l-16.4 1.2-16.8-1.2c-57-4.2-106.4-29.2-145.8-70.8s-61.4-95.6-61.4-152.2v-127.6h-32v127.6c0 134.4 108 245.2 242 255v97.4h-148v32h322v-32h-144v-97.4c29.6-2.2 58-9.4 84.2-21l-15.6-26.6c-21.8 8.6-45 14-68.2 15.6z M768 543.6v-127.6h-32v127.6c0 56.8-20.4 111-58.6 152.6-0.4 0.4-0.6 0.6-1 1l15.4 26.4c46.8-46.4 76.2-110 76.2-180z M268.4 64l-27.6 16 514.8 880 27.6-16z' })
  );
};

IosMicOff.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosMicOff.propTypes = {
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

exports.default = IosMicOff;
module.exports = exports['default'];
//# sourceMappingURL=IosMicOff.js.map