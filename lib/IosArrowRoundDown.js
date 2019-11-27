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

var IosArrowRoundDown = function IosArrowRoundDown(props) {
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
    _react2.default.createElement('path', { d: 'M496 272v441.4l-148.8-132.6c-6.8-5.8-16.2-6.4-22.4-0.2s-6.6 17-0.2 22.8l176 160c0.4 0.4 0.8 0.8 1.2 1 0.2 0.2 0.4 0.2 0.6 0.4s0.4 0.4 0.8 0.6c0.2 0.2 0.4 0.2 0.6 0.4s0.4 0.2 0.6 0.4c0.2 0.2 0.4 0.2 0.8 0.4 0.2 0.2 0.4 0.2 0.6 0.4 0.2 0 0.4 0.2 0.8 0.2 0.2 0 0.6 0.2 0.8 0.2s0.4 0.2 0.8 0.2c0.2 0 0.6 0.2 0.8 0.2s0.6 0 0.8 0.2c0.2 0 0.4 0 0.6 0 1 0.2 2.2 0.2 3.2 0 0.2 0 0.4 0 0.6 0s0.6 0 0.8-0.2c0.2 0 0.6-0.2 0.8-0.2s0.4-0.2 0.8-0.2c0.2 0 0.6-0.2 0.8-0.2s0.4-0.2 0.8-0.2c0.2 0 0.4-0.2 0.6-0.4s0.4-0.2 0.8-0.4c0.2-0.2 0.4-0.2 0.6-0.4s0.4-0.2 0.6-0.4c0.2-0.2 0.4-0.4 0.8-0.6 0.2-0.2 0.4-0.2 0.6-0.4 0.4-0.4 0.8-0.6 1.2-1l176-160c3.4-3.2 4.6-7.2 4.6-11.4 0-4-1.6-8.2-4.6-11.4-6.2-6.2-16-6-22.6 0l-148.8 132.8v-441.4c0-8.8-7.2-16-16-16s-16 7.2-16 16z' })
  );
};

IosArrowRoundDown.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosArrowRoundDown.propTypes = {
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

exports.default = IosArrowRoundDown;
module.exports = exports['default'];
//# sourceMappingURL=IosArrowRoundDown.js.map