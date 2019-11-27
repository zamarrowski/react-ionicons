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

var IosRestaurantOutline = function IosRestaurantOutline(props) {
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
    _react2.default.createElement('path', { d: 'M769 128c-49.6 0-95.6 154.6-95.6 320 0 114 64.2 160 64.2 160s12.4 9.6 30.2 12v260c0 8.8 7.2 16 16 16s16-7.2 16-16v-730c0.2-22-20.8-22-30.8-22zM768 162v424c-2-0.2-10-2-14.6-6.2-2.6-2.2-10.4-9.2-20.6-25.8-22.6-36.2-27.2-77.6-27.2-105.8 0-69.8 8.4-142.8 24-200.2 15-56 32.4-79.4 38.4-86v0z M592 128h-16l20 207c0 8.8-7.2 15.6-16 15.6s-16-6.4-16-15.2l-12-207.4h-16l-12 207c0 8.8-7.2 15.6-16 15.6s-16-6.4-16-15.2l20-207.4h-16c0 0-48 214.2-48 255.8s26.4 78.8 64 90.6c10.6 3.4 16 3.6 16 3.6v402c0 8.8 7.2 16 16 16s16-7.2 16-16v-402c0 0 10.2-1.8 16-3.6 37.2-12 64-48.4 64-90.4s-48-256-48-256zM544 446c-57.2 0-64-53.2-64-63.2 0 0 0.2-5.4 0.6-9 7.8 5.4 17.2 8.6 27.4 8.6 14.4 0 23-6.2 36-6.2s21.6 6.2 36 6.2c10.2 0 19.6-3.2 27.4-8.6 0.4 3.8 0.6 9.2 0.6 9.2 0 9.4-6.8 63-64 63z M320 128c-53 0-96 127.8-96 255.8 0 34.6 18.4 66.4 46.4 82.6 22.8 13.4 33.6 13.6 33.6 13.6v400c0 8.8 7.2 16 16 16s16-7.2 16-16v-400c0 0 10.2 0 32.4-12.4 28.4-16 47.6-48 47.6-83.6 0-128-43-256-96-256zM352.6 439.2l-0.4 0.4c-1.4 0.8-3.2 2-5.2 2.8-2.4 0.6-4.8 1.4-7 2.6-6.8 1.4-13.6 2.6-19.8 2.6s-13-1.2-19.8-2.6c-2.2-1-4.4-1.8-7-2.4-2-1-4.4-2.4-6-3.4l-0.8-0.4c-18.8-11.2-30.6-32.2-30.6-54.8 0-58.8 9.6-119 26.2-165 9.6-26.4 19-41 25.2-48.6 6.8-8.4 11.6-10.2 12.6-10.2s5.8 1.8 12.6 10.2c6.2 7.6 15.6 22 25.2 48.6 16.6 46 26.2 106 26.2 165-0 22.6-12.4 44.4-31.4 55.2z' })
  );
};

IosRestaurantOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosRestaurantOutline.propTypes = {
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

exports.default = IosRestaurantOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosRestaurantOutline.js.map