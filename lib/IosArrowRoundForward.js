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

var IosArrowRoundForward = function IosArrowRoundForward(props) {
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
    _react2.default.createElement('path', { d: 'M272 528h441.4l-132.6 148.8c-5.8 6.8-6.4 16.2-0.2 22.4s17 6.6 22.8 0.2l160-176c0.4-0.4 0.8-0.8 1-1.2 0.2-0.2 0.2-0.4 0.4-0.6s0.4-0.4 0.6-0.8c0.2-0.2 0.2-0.4 0.4-0.6s0.2-0.4 0.4-0.6c0.2-0.2 0.2-0.4 0.4-0.8 0.2-0.2 0.2-0.4 0.4-0.6 0-0.2 0.2-0.4 0.2-0.8 0-0.2 0.2-0.6 0.2-0.8s0.2-0.4 0.2-0.8c0-0.2 0.2-0.6 0.2-0.8s0-0.6 0.2-0.8c0-0.2 0-0.4 0-0.6 0.2-1 0.2-2.2 0-3.2 0-0.2 0-0.4 0-0.6s0-0.6-0.2-0.8c0-0.2-0.2-0.6-0.2-0.8s-0.2-0.4-0.2-0.8c0-0.2-0.2-0.6-0.2-0.8s-0.2-0.4-0.2-0.8c0-0.2-0.2-0.4-0.4-0.6s-0.2-0.4-0.4-0.8c-0.2-0.2-0.2-0.4-0.4-0.6s-0.2-0.4-0.4-0.6c-0.2-0.2-0.4-0.4-0.6-0.8-0.2-0.2-0.2-0.4-0.4-0.6-0.4-0.4-0.6-0.8-1-1.2l-160-176c-3.2-3.4-7.2-4.6-11.4-4.6-4 0-8.2 1.6-11.4 4.6-6.2 6.2-6 16 0 22.6l132.6 148.6h-441.2c-8.8 0-16 7.2-16 16 0 9 7.2 16.2 16 16.2z' })
  );
};

IosArrowRoundForward.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosArrowRoundForward.propTypes = {
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

exports.default = IosArrowRoundForward;
module.exports = exports['default'];
//# sourceMappingURL=IosArrowRoundForward.js.map