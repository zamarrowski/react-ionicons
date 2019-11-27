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

var IosPawOutline = function IosPawOutline(props) {
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
    _react2.default.createElement('path', { d: 'M648.6 160.6c-2.4-0.4-4.8-0.6-7.2-0.6v0.2c-0.2 0-0.4 0-0.8 0-44 0-85.8 51.8-95.6 120.6-10.6 73.2 18.8 138 65.4 144.8 2.6 0.4 5.4 0.6 8 0.6 44 0 85.8-51.8 95.6-120.6 10.6-73.4-18.8-138.2-65.4-145zM682.6 300.8c-8 55.8-39.8 93.2-64.2 93.2-1.2 0-2.4 0-3.4-0.2-11.4-1.6-22.2-12.2-29.8-29-9.8-21.6-13-50.4-8.8-79.4 8-55.4 39.6-92.6 64-93.2 1.2 0 3.2 0.2 4 0.2 11.4 1.6 22 12.2 29.6 29 9.8 21.4 12.8 50.4 8.6 79.4z M641.2 160v0 0z M884.6 338.8c-7-2.8-14.2-4.2-21.8-4.2-0.2 0-0.6 0-0.8 0v0 0c-39.4 0.6-83.6 38.4-106.8 95.6-27.8 68.4-15 138.4 28.8 156.4 7 2.8 14.2 4.2 21.8 4.2 39.6 0 84.4-38 107.8-95.6 27.6-68.4 14.6-138.4-29-156.4zM883.8 483c-9.4 23-23.2 43.4-39.2 57.4-13.4 11.6-27.6 18.4-39 18.4-3.6 0-6.8-0.6-9.8-1.8-10.6-4.4-18.6-17.2-22-35.4-4.2-23.2-0.4-52.2 10.6-79.2 9.4-23 23.4-43.4 39.2-57.4 13.2-11.6 27-18.2 38.4-18.4 3.8 0 7 0.6 10 1.8 10.6 4.4 18.8 17.2 22.2 35.4 4.4 23.4 0.6 52.2-10.4 79.2z M655.2 590.8c-55.6-87.2-79.6-120-143.2-120s-87.8 33-143.4 120c-47.6 74.4-143.8 80.6-167.8 143.8-4.8 11.2-7.2 23.4-7.2 36.4 0 51.4 41.6 93 92.8 93 63.6 0 150.2-48 225.8-48s161.8 48 225.4 48c51.2 0 92.6-41.6 92.6-93 0-13-2.6-25.2-7.4-36.4-24-63.4-120-69.4-167.6-143.8zM737.6 832c-25.6 0-58.8-10.2-94-21-43-13.2-87.4-27-131.6-27s-88.6 13.6-131.6 26.8c-35.2 10.8-68.4 21-94 21-33.6 0-61-27.4-61-61 0-8.6 1.6-16.6 4.6-23.8l0.4-1.2c8-21.2 32-34.8 62.2-52 35.2-20 75-42.6 102.8-86 55.4-86.8 71.6-105.4 116.6-105.4 23.6 0 38 5.2 53.2 19 18 16.6 37.6 46.2 63.2 86.4 27.8 43.4 67.4 66 102.6 86 30.2 17.2 54 30.8 62.2 52l0.4 1.2c3.2 7.6 4.8 15.6 4.8 23.8-0 33.8-27.2 61.2-60.8 61.2z M405.6 426c2.6 0 5.4-0.2 8-0.6 46.8-6.8 76-71.6 65.4-144.8-10-69-51.8-120.6-95.6-120.6-2.6 0-5.4 0.2-8 0.6-46.8 6.8-76 71.6-65.4 144.8 10 68.8 51.8 120.6 95.6 120.6zM350.2 221.2c7.6-16.8 18.4-27.4 29.8-29 1.2-0.2 2.2-0.2 3.4-0.2 24.6 0 56.2 37.4 64.2 93.2 4.2 29 1 58-8.8 79.4-7.6 16.8-18.4 27.4-29.8 29-1.2 0.2-2.2 0.2-3.4 0.2-24.6 0-56.2-37.4-64.2-93.2-4.2-28.8-1-57.8 8.8-79.4z M240.2 586.6c43.8-18 56.6-88 28.8-156.4-23.4-57.6-68.2-95.6-107.8-95.6-7.6 0-14.8 1.4-21.8 4.2-43.8 18-56.6 88-28.8 156.4 23.4 57.6 68.2 95.6 107.8 95.6 7.6-0 14.8-1.4 21.8-4.2zM140.2 483c-11-27-14.8-56-10.6-79.2 3.4-18.2 11.4-31.2 22-35.4 3-1.2 6.2-1.8 9.8-1.8 11.6 0 25.8 6.6 39 18.4 16 14 29.8 34.4 39.2 57.4 22 54 12.2 105-11.4 114.6-3 1.2-6.2 1.8-9.8 1.8-11.6 0-25.8-6.6-39-18.4-16-14-30-34.4-39.2-57.4z' })
  );
};

IosPawOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosPawOutline.propTypes = {
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

exports.default = IosPawOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosPawOutline.js.map