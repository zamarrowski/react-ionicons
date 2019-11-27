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

var IosColorPalette = function IosColorPalette(props) {
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
    _react2.default.createElement('path', { d: 'M860.2 695.8c-13.2-12.2-32.6-15.2-49.2-18-23-3.8-31.8-8-45.2-20-28.6-25.4-28.6-62.2 0-87.6l60.6-53.8c92.8-82 92.8-216.4 0-298.4-68.4-60.2-160.2-90-255.6-90-111.4 0-227.8 40.6-317.6 120.2-167 147.6-167 389.4 0 537 83 73.4 195 110 305.8 110.8 1.2 0 2.4 0 3.4 0 110.8 0 220-35.8 297.6-104.8 28.8-25.4 24-73.2 0.2-95.4zM240 432c0-35.4 28.6-64 64-64s64 28.6 64 64-28.6 64-64 64-64-28.6-64-64zM320 684c-35.4 0-64-28.6-64-64s28.6-64 64-64 64 28.6 64 64-28.6 64-64 64zM448 362c-35.4 0-64-28.6-64-64s28.6-64 64-64 64 28.6 64 64-28.6 64-64 64zM592 800c-53 0-96-43-96-96s43-96 96-96 96 43 96 96-43 96-96 96zM640 384c-35.4 0-64-28.6-64-64s28.6-64 64-64 64 28.6 64 64-28.6 64-64 64z' })
  );
};

IosColorPalette.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosColorPalette.propTypes = {
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

exports.default = IosColorPalette;
module.exports = exports['default'];
//# sourceMappingURL=IosColorPalette.js.map