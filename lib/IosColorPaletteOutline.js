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

var IosColorPaletteOutline = function IosColorPaletteOutline(props) {
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
    _react2.default.createElement('path', { d: 'M570.8 160c91.2 0 174.4 29.2 234.4 82.2 37.8 33.6 58.8 78 58.8 125.2s-20.8 91.6-58.8 125.2l-60.6 53.8c-20.8 18.4-32.2 42.4-32.2 67.8 0 25.2 11.4 49.2 32.2 67.8 18.6 16.4 32.8 22.8 61.2 27.6l1.6 0.2c11.8 2 25.2 4.2 31 9.4 5.8 5.4 9.6 16 9.6 26.2 0 5.4-1.4 15.2-9 22-69.2 61.4-170 96.8-276.4 96.8-1 0-2.2 0-3.2 0-53-0.4-104.4-9.2-152.8-26.2-50.2-17.8-94.6-43.4-132-76.4-37.4-33.2-66.4-71.8-86-114.8-19-41.6-28.6-85.4-28.6-130.2s9.6-88.4 28.4-129.8c19.6-43 48.6-81.6 86-114.8 80.6-71.2 188.6-112 296.4-112zM570.8 128c-111.4 0-227.8 40.6-317.6 120.2-167 147.6-167 389.4 0 537 83 73.4 195 110 305.8 110.8 1.2 0 2.4 0 3.4 0 110.8 0 220-35.8 297.6-104.8 28.6-25.4 23.8-73.2 0-95.6-13.2-12.2-32.6-15.2-49.2-18-23-3.8-31.8-8-45.2-20-28.6-25.4-28.6-62.2 0-87.6l60.6-53.8c92.8-82 92.8-216.4 0-298.4-68.2-60-160-89.8-255.4-89.8v0z M640 288c17.6 0 32 14.4 32 32s-14.4 32-32 32-32-14.4-32-32 14.4-32 32-32zM640 256c-35.4 0-64 28.6-64 64s28.6 64 64 64 64-28.6 64-64-28.6-64-64-64v0z M448 266c17.6 0 32 14.4 32 32s-14.4 32-32 32-32-14.4-32-32 14.4-32 32-32zM448 234c-35.4 0-64 28.6-64 64s28.6 64 64 64 64-28.6 64-64-28.6-64-64-64v0z M304 400c17.6 0 32 14.4 32 32s-14.4 32-32 32-32-14.4-32-32 14.4-32 32-32zM304 368c-35.4 0-64 28.6-64 64s28.6 64 64 64 64-28.6 64-64-28.6-64-64-64v0z M320 588c17.6 0 32 14.4 32 32s-14.4 32-32 32-32-14.4-32-32 14.4-32 32-32zM320 556c-35.4 0-64 28.6-64 64s28.6 64 64 64 64-28.6 64-64-28.6-64-64-64v0z M592 800c-53 0-96-43-96-96s43-96 96-96 96 43 96 96-43 96-96 96zM592 640c-35.2 0-64 28.8-64 64s28.8 64 64 64 64-28.8 64-64-28.8-64-64-64z' })
  );
};

IosColorPaletteOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosColorPaletteOutline.propTypes = {
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

exports.default = IosColorPaletteOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosColorPaletteOutline.js.map