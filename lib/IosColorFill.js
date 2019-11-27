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

var IosColorFill = function IosColorFill(props) {
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
    _react2.default.createElement('path', { d: 'M822.8 600.6l-367.6-364c0 0 0 0 0 0l-112.4-112.6c-18.6-18.6-43.2-28-67.8-28s-49.2 9.4-67.8 28v0c-37.4 37.4-37.4 98.4 0 135.8l98.6 98.6-209.8 208.4 342.6 329.2c0 0 270.2-261.4 292.2-283.4 11.6-11.6 36.4-14.2 57.2-14.2 19 0 34.8 2.2 34.8 2.2zM229.6 237.2c-12-12-18.6-28-18.6-45.2s6.6-33.2 18.6-45.2c12-12 28-18.6 45.2-18.6s33.2 6.6 45.2 18.6l99 99-90.8 90.2-98.6-98.8z M832 672c0 0-96 106.6-96 159.8s43 96.2 96 96.2c0 0 0 0 0 0 53 0 96-43.2 96-96.2 0-53.2-96-159.8-96-159.8z' })
  );
};

IosColorFill.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosColorFill.propTypes = {
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

exports.default = IosColorFill;
module.exports = exports['default'];
//# sourceMappingURL=IosColorFill.js.map