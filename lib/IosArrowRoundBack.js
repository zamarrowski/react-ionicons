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

var IosArrowRoundBack = function IosArrowRoundBack(props) {
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
    _react2.default.createElement('path', { d: 'M752 496h-441.4l132.6-148.8c5.8-6.8 6.4-16.2 0.2-22.4s-17-6.6-22.8-0.2l-160 176c-0.4 0.4-0.8 0.8-1 1.2-0.2 0.2-0.2 0.4-0.4 0.6s-0.4 0.4-0.6 0.8c-0.2 0.2-0.2 0.4-0.4 0.6s-0.2 0.4-0.4 0.6c-0.2 0.2-0.2 0.4-0.4 0.8-0.2 0.2-0.2 0.4-0.4 0.6 0 0.2-0.2 0.4-0.2 0.8 0 0.2-0.2 0.6-0.2 0.8s-0.2 0.4-0.2 0.8c0 0.2-0.2 0.6-0.2 0.8s0 0.6-0.2 0.8c0 0.2 0 0.4 0 0.6-0.2 1-0.2 2.2 0 3.2 0 0.2 0 0.4 0 0.6s0 0.6 0.2 0.8c0 0.2 0.2 0.6 0.2 0.8s0.2 0.4 0.2 0.8c0 0.2 0.2 0.6 0.2 0.8s0.2 0.4 0.2 0.8c0 0.2 0.2 0.4 0.4 0.6s0.2 0.4 0.4 0.8c0.2 0.2 0.2 0.4 0.4 0.6s0.2 0.4 0.4 0.6c0.2 0.2 0.4 0.4 0.6 0.8 0.2 0.2 0.2 0.4 0.4 0.6 0.4 0.4 0.6 0.8 1 1.2l160 176c3.2 3.4 7.2 4.6 11.4 4.6 4 0 8.2-1.6 11.4-4.6 6.2-6.2 6-16 0-22.6l-132.8-148.8h441.4c8.8 0 16-7.2 16-16s-7.2-16-16-16z' })
  );
};

IosArrowRoundBack.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosArrowRoundBack.propTypes = {
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

exports.default = IosArrowRoundBack;
module.exports = exports['default'];
//# sourceMappingURL=IosArrowRoundBack.js.map