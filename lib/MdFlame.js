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

var MdFlame = function MdFlame(props) {
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
    _react2.default.createElement('path', { d: 'M786.6 444.2l-0.4 20.8c-1.6 23.4-15.8 86.8-44.2 109.4 14-30.4 34.6-94.4 20.4-165.4-39.2-195-187.4-277.8-376.4-309l-34.4-4.4c79 94.4 112.2 163.4 99.4 233.6-4.6 25.2-20 46.8-28 63.2 0 0 4.8-25.8 4-57.4-0.6-28.4-13.2-62-36-79.2 7 36.8-1.6 67-18.2 95.4-49.4 84.4-170.8 115.6-180.8 271.6v7.6c0 107.4 51.2 198 137.4 250-13.6-24.6-24-70.4-11.4-120.4 8 47.4 28 72 49.8 103.6 16.4 23.4 38.2 38.6 66.2 49.8s62 14.4 95.8 14.4c111.6 0 182.8-36.2 238.2-101s64.2-136 64.2-212.8-17-121.8-45.6-169.8z' })
  );
};

MdFlame.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdFlame.propTypes = {
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

exports.default = MdFlame;
module.exports = exports['default'];
//# sourceMappingURL=MdFlame.js.map