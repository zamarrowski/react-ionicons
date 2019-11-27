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

var IosLocateOutline = function IosLocateOutline(props) {
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
    _react2.default.createElement('path', { d: 'M640 512c0 70.692-57.308 128-128 128s-128-57.308-128-128c0-70.692 57.308-128 128-128s128 57.308 128 128z M944 496h-48.4c-8.2-199.4-168.2-359.4-367.6-367.6v-48.4c0-8.8-7.2-16-16-16s-16 7.2-16 16v48.4c-199.4 8.2-359.4 168.2-367.6 367.6h-48.4c-8.8 0-16 7.2-16 16s7.2 16 16 16h48.4c8.2 199.4 168.4 359.4 367.6 367.6v48.4c0 8.8 7.2 16 16 16s16-7.2 16-16v-48.4c199.4-8.2 359.4-168.4 367.6-367.6h48.4c8.8 0 16-7.2 16-16s-7.2-16-16-16zM760.8 760.8c-62.8 62.8-144.8 98.8-232.8 102.8v-79.6c0-8.8-7.2-16-16-16s-16 7.2-16 16v79.6c-88-4-170.2-40-232.8-102.8-62.8-62.6-99-144.8-102.8-232.8h79.6c8.8 0 16-7.2 16-16s-7.2-16-16-16h-79.6c4-88 40-170.2 102.8-232.8s144.8-99 232.8-102.8v79.6c0 8.8 7.2 16 16 16s16-7.2 16-16v-79.6c88 4 170.2 40 232.8 102.8s99 144.8 102.8 232.8h-79.6c-8.8 0-16 7.2-16 16s7.2 16 16 16h79.6c-3.8 88-40 170.2-102.8 232.8z' })
  );
};

IosLocateOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosLocateOutline.propTypes = {
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

exports.default = IosLocateOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosLocateOutline.js.map