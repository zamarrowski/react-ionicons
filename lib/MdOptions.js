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

var MdOptions = function MdOptions(props) {
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
    _react2.default.createElement('path', { d: 'M64 768h544v64h-544v-64z M800 768h160v64h-160v-64z M768 895c0 35.898-28.654 65-64 65v0c-35.346 0-64-29.102-64-65v-190c0-35.898 28.654-65 64-65v0c35.346 0 64 29.102 64 65v190z M64 480h160v64h-160v-64z M416 480h544v64h-544v-64z M384 607c0 35.898-28.654 65-64 65v0c-35.346 0-64-29.102-64-65v-190c0-35.898 28.654-65 64-65v0c35.346 0 64 29.102 64 65v190z M64 192h544v64h-544v-64z M800 192h160v64h-160v-64z M768 319c0 35.898-28.654 65-64 65v0c-35.346 0-64-29.102-64-65v-190c0-35.898 28.654-65 64-65v0c35.346 0 64 29.102 64 65v190z' })
  );
};

MdOptions.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdOptions.propTypes = {
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

exports.default = MdOptions;
module.exports = exports['default'];
//# sourceMappingURL=MdOptions.js.map