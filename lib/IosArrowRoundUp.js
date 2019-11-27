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

var IosArrowRoundUp = function IosArrowRoundUp(props) {
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
    _react2.default.createElement('path', { d: 'M528 752v-441.4l148.8 132.6c6.8 5.8 16.2 6.4 22.4 0.2s6.6-17 0.2-22.8l-176-160c-0.4-0.4-0.8-0.8-1.2-1-0.2-0.2-0.4-0.2-0.6-0.4s-0.4-0.4-0.8-0.6c-0.2-0.2-0.4-0.2-0.6-0.4s-0.4-0.2-0.6-0.4c-0.2-0.2-0.4-0.2-0.8-0.4-0.2-0.2-0.4-0.2-0.6-0.4-0.2 0-0.4-0.2-0.8-0.2-0.2 0-0.6-0.2-0.8-0.2s-0.4-0.2-0.8-0.2c-0.2 0-0.6-0.2-0.8-0.2s-0.6 0-0.8-0.2c-0.2 0-0.4 0-0.6 0-1-0.2-2.2-0.2-3.2 0-0.2 0-0.4 0-0.6 0s-0.6 0-0.8 0.2c-0.2 0-0.6 0.2-0.8 0.2s-0.4 0.2-0.8 0.2c-0.2 0-0.6 0.2-0.8 0.2s-0.4 0.2-0.8 0.2c-0.2 0-0.4 0.2-0.6 0.4s-0.4 0.2-0.8 0.4c-0.2 0.2-0.4 0.2-0.6 0.4s-0.4 0.2-0.6 0.4c-0.2 0.2-0.4 0.4-0.8 0.6-0.2 0.2-0.4 0.2-0.6 0.4-0.4 0.4-0.8 0.6-1.2 1l-176 160c-3.4 3.2-4.6 7.2-4.6 11.4 0 4 1.6 8.2 4.6 11.4 6.2 6.2 16 6 22.6 0l148.6-132.6v441.2c0 8.8 7.2 16 16 16 9 0 16.2-7.2 16.2-16z' })
  );
};

IosArrowRoundUp.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosArrowRoundUp.propTypes = {
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

exports.default = IosArrowRoundUp;
module.exports = exports['default'];
//# sourceMappingURL=IosArrowRoundUp.js.map