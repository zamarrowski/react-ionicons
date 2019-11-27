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

var LogoPinterest = function LogoPinterest(props) {
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
    _react2.default.createElement('path', { d: 'M512 64c-247.4 0-448 200.6-448 448 0 183.4 110.4 341 268.2 410.4-1.2-31.2-0.2-68.8 7.8-102.8 8.6-36.4 57.6-244.2 57.6-244.2s-14.4-28.6-14.4-70.8c0-66.4 38.4-116 86.4-116 40.8 0 60.4 30.6 60.4 67.2 0 41-26.2 102.2-39.6 159-11.2 47.6 23.8 86.2 70.8 86.2 84.8 0 142-109 142-238.2 0-98.2-66.2-171.6-186.4-171.6-135.8 0-220.6 101.4-220.6 214.6 0 39 11.6 66.6 29.6 87.8 8.2 9.8 9.4 13.8 6.4 25-2.2 8.2-7 28-9.2 36-3 11.4-12.2 15.4-22.4 11.2-62.6-25.6-91.8-94-91.8-171.2 0-127.2 107.4-279.8 320.2-279.8 171 0 283.6 123.8 283.6 256.6 0 175.8-97.8 307-241.8 307-48.4 0-93.8-26.2-109.4-55.8 0 0-26 103.2-31.6 123.2-9.4 34.6-28 69-45 96 40.2 11.8 82.8 18.4 127 18.4 247.4 0 448-200.6 448-448 0.2-247.6-200.4-448.2-447.8-448.2z' })
  );
};

LogoPinterest.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

LogoPinterest.propTypes = {
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

exports.default = LogoPinterest;
module.exports = exports['default'];
//# sourceMappingURL=LogoPinterest.js.map