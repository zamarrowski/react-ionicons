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

var MdBicycle = function MdBicycle(props) {
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
    _react2.default.createElement('path', { d: 'M661.332 262.404c37.336 0 67.196-29.87 67.196-67.202s-29.86-67.202-67.196-67.202c-37.332 0-67.192 29.87-67.192 67.202s29.86 67.202 67.192 67.202zM773.332 522.668c-102.664 0-186.664 84-186.664 186.666s84 186.666 186.664 186.666c102.668 0 186.668-84 186.668-186.666s-84-186.666-186.668-186.666zM773.332 840c-72.804 0-130.664-57.86-130.664-130.666s57.86-130.666 130.664-130.666c72.808 0 130.668 57.86 130.668 130.666s-57.86 130.666-130.668 130.666zM611.194 448h156.806v-64h-117.69l-69.24-120.268c-11.21-18.666-31.738-31.728-54.14-31.728-16.798 0-33.596 7.464-44.798 18.666l-143.464 138.13c-11.202 11.202-18.666 28-18.666 44.798 0 24.262 18.404 42.93 37.070 54.13l122.928 76.54v171.732h64v-224l-78.666-64 85.858-89.066 60.002 89.066zM250.666 522.668c-102.666 0-186.666 84-186.666 186.666s84 186.666 186.666 186.666c102.666 0 186.666-84 186.666-186.666s-83.998-186.666-186.666-186.666zM250.666 840c-72.798 0-130.666-57.86-130.666-130.666s57.868-130.666 130.666-130.666c72.798 0 130.666 57.86 130.666 130.666s-57.868 130.666-130.666 130.666z' })
  );
};

MdBicycle.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdBicycle.propTypes = {
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

exports.default = MdBicycle;
module.exports = exports['default'];
//# sourceMappingURL=MdBicycle.js.map