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

var MdBus = function MdBus(props) {
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
    _react2.default.createElement('path', { d: 'M160 704c0 38.396 27.728 49.062 53.334 72.542v76.792c0 23.458 19.198 42.668 42.666 42.668h42.666c23.468 0 42.668-19.208 42.668-42.668v-42.666h341.332v42.666c0 23.458 19.208 42.668 42.668 42.668h42.666c23.458 0 42.666-19.208 42.666-42.668v-76.792c25.606-23.48 53.334-36.27 53.334-72.542v-407.332c0-149.334-164.272-168.668-352-168.668s-352 19.334-352 168.668v407.332zM320 735.978c-36.272 0-64-27.728-64-64 0-36.27 27.728-64 64-64s64 27.73 64 64c0 36.272-27.728 64-64 64zM704 735.978c-36.272 0-64-27.728-64-64 0-36.27 27.728-64 64-64s64 27.73 64 64c0 36.272-27.728 64-64 64zM768 490.666h-512v-213.332h512v213.332z' })
  );
};

MdBus.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdBus.propTypes = {
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

exports.default = MdBus;
module.exports = exports['default'];
//# sourceMappingURL=MdBus.js.map