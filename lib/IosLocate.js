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

var IosLocate = function IosLocate(props) {
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
    _react2.default.createElement('path', { d: 'M768 512c0-8.8 7.2-16 16-16h111.6c-8.2-199.4-168.2-359.4-367.6-367.6v111.6c0 8.8-7.2 16-16 16s-16-7.2-16-16v-111.6c-199.4 8.2-359.4 168.2-367.6 367.6h111.6c8.8 0 16 7.2 16 16s-7.2 16-16 16h-111.6c8.2 199.4 168.4 359.4 367.6 367.6v-111.6c0-8.8 7.2-16 16-16s16 7.2 16 16v111.6c199.4-8.2 359.4-168.4 367.6-367.6h-111.6c-8.8 0-16-7.2-16-16zM512 640c-70.6 0-128-57.4-128-128s57.4-128 128-128 128 57.4 128 128-57.4 128-128 128z M944 496h-48.4c0.2 5.4 0.4 10.6 0.4 16s-0.2 10.6-0.4 16h48.4c8.8 0 16-7.2 16-16s-7.2-16-16-16z M128.4 496h-48.4c-8.8 0-16 7.2-16 16s7.2 16 16 16h48.4c-0.2-5.4-0.4-10.6-0.4-16s0.2-10.6 0.4-16z M496 895.6v48.4c0 8.8 7.2 16 16 16s16-7.2 16-16v-48.4c-5.4 0.2-10.6 0.4-16 0.4s-10.6-0.2-16-0.4z M528 128.4v-48.4c0-8.8-7.2-16-16-16s-16 7.2-16 16v48.4c5.4-0.2 10.6-0.4 16-0.4s10.6 0.2 16 0.4z' })
  );
};

IosLocate.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosLocate.propTypes = {
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

exports.default = IosLocate;
module.exports = exports['default'];
//# sourceMappingURL=IosLocate.js.map