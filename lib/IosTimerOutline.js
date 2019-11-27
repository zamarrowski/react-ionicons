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

var IosTimerOutline = function IosTimerOutline(props) {
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
    _react2.default.createElement('path', { d: 'M473.2 543.2c9.2 11.4 23 18.8 38.8 18.8 27.6 0 50-22.4 50-50 0-14.6-6.4-27.6-16.4-36.8-1.2-1.4-2.6-3-4.4-4.4 0 0-235.4-175-240.6-170.4s170.6 240.4 170.6 240.4c0.4 0.8 1.4 1.6 2 2.4z M512.4 96v0h-0.4v224h32v-189.4c195.6 16.6 350.6 181 350.6 381 0 211-171.4 382.8-382.4 382.8s-382.6-171.6-382.6-382.6c0-105.6 43-201.2 112.2-270.4l-23.8-23.6c-75.4 75.4-122 179.4-122 294.2 0 229.8 186.2 416 416 416s416-186.2 416-416c0-229.8-186-416-415.6-416z' })
  );
};

IosTimerOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosTimerOutline.propTypes = {
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

exports.default = IosTimerOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosTimerOutline.js.map