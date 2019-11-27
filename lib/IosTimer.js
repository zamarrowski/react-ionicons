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

var IosTimer = function IosTimer(props) {
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
    _react2.default.createElement('path', { d: 'M512 96c-229.8 0-416 186.2-416 416s186.2 416 416 416c229.8 0 416-186.2 416-416s-186.2-416-416-416zM301 301c5.2-4.6 239.8 169.8 239.8 169.8 2 1.4 3.2 3 4.4 4.4 10 9.2 16.4 22 16.4 36.6 0 27.4-22.2 49.8-49.8 49.8-15.6 0-29.4-7.4-38.6-18.8-0.8-0.8-1.6-1.4-2.2-2.2 0.2 0.2-175-234.8-170-239.6zM512.2 894.4c-211.4 0-382.8-171.4-382.8-382.8 0-105.6 42.8-201.4 112-270.6l23.6 23.6c-63.2 63.2-102.4 150.6-102.4 247 0 192.6 156.8 349.4 349.4 349.4s349-156.8 349-349.4c0-180.6-141-330.2-317-348v156.4h-32v-191.2c211.4 0 383 171.4 383 382.8s-171.6 382.8-382.8 382.8z' })
  );
};

IosTimer.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosTimer.propTypes = {
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

exports.default = IosTimer;
module.exports = exports['default'];
//# sourceMappingURL=IosTimer.js.map