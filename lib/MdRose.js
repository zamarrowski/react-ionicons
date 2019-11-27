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

var MdRose = function MdRose(props) {
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
    _react2.default.createElement('path', { d: 'M521.2 429.6c47.6-81.8 96-143.2 182.8-192.8 16.6-9.6 42.4-16 45.6-17.8-168.2-51.6-237.6-155-237.6-155s-69.4 103.4-241 153c11.6 6.8 33 13 61.4 27.4 69 34.8 125 102.6 188.8 185.2z M492.6 506.8c-119.2-184.4-229.8-253.2-396.6-253.2 108.4 157.2 104 349.2 104 430.8 0 152.2 139.6 275.6 312 275.6 115.2 0 215.8-55.2 270-137.4-71-55.2-170.2-131.4-289.4-315.8z M928 253.6c0 0-110.4-4.6-170.4 30.8-86 51-148.8 122.6-190.8 206.4 77.6 104 146 175.8 190.8 218.8 21.4 20.4 39.6 36.4 55 49 7.4-23.6 11.6-48.6 11.6-74.4-0.2-81.6-34.8-228.2 103.8-430.6z' })
  );
};

MdRose.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdRose.propTypes = {
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

exports.default = MdRose;
module.exports = exports['default'];
//# sourceMappingURL=MdRose.js.map