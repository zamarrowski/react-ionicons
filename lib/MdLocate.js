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

var MdLocate = function MdLocate(props) {
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
    _react2.default.createElement('path', { d: 'M512 352c-88.008 0-160.002 72-160.002 160 0 88.008 71.994 160 160.002 160 88.010 0 159.998-71.992 159.998-160 0-88-71.988-160-159.998-160zM893.876 469.334c-19.21-177.062-162.148-320-339.21-339.198v-66.136h-85.332v66.134c-177.062 19.198-320 162.136-339.208 339.198h-66.126v85.334h66.124c19.208 177.062 162.144 320 339.208 339.208v66.126h85.332v-66.124c177.062-19.208 320-162.146 339.21-339.208h66.126v-85.334h-66.124zM512 810.666c-164.274 0-298.668-134.396-298.668-298.666 0-164.272 134.394-298.666 298.668-298.666 164.27 0 298.664 134.396 298.664 298.666s-134.394 298.666-298.664 298.666z' })
  );
};

MdLocate.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdLocate.propTypes = {
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

exports.default = MdLocate;
module.exports = exports['default'];
//# sourceMappingURL=MdLocate.js.map