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

var IosPersonOutline = function IosPersonOutline(props) {
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
    _react2.default.createElement('path', { d: 'M404.8 403.4v0 0z M726.6 727.8c-25.8-9.2-62.8-12.4-86.4-17.6-13.6-3-33.4-10.6-40-18.4-6.6-8-2.6-81.8-2.6-81.8s12.2-19.2 18.8-36 13.8-62.8 13.8-62.8 13.6 0 18.4-23.8c5.2-26 13.2-36.8 12.2-56.2-1-18-10.4-19-11.4-19v0c0 0 9.8-27.2 11.2-84.8 1.6-68.2-50.6-135.4-148.6-135.4s-150 67-148.6 135.2c1.2 57.4 11.2 84.8 11.2 84.8v0c-1 0-10.4 1-11.4 19-1 19.4 7.2 29.8 12.2 55.8 4.8 23.8 18.4 24 18.4 24s7.2 46.2 13.8 63c6.6 17 18.8 36 18.8 36s4 73.8-2.6 81.8c-6.6 8-26.4 15.4-40 18.4-23.8 5.2-60.6 8.6-86.4 17.8s-105.4 40.2-105.4 104.2h640c0-64-79.6-95-105.4-104.2zM512 800h-274.6c4-6 9.4-10.2 16.4-15.2 14-10.2 32.2-19.6 54.2-27.2 13.6-4.8 33.4-8 50.8-10.6 11.4-1.8 22.2-3.4 31.8-5.6 6.8-1.6 41.6-10 57.6-29.2 9-10.8 11.6-25.4 11.2-64.6-0.2-20-1.2-38.6-1.2-39.4l-0.4-8.4-4.6-7c-3-4.6-11.6-19-16-30.6-3.6-9.4-9.2-38.4-12-56.2 0 0 0.8 2-1-7.4s-16.8-8.6-18.8-16c-1.8-7.2-3.6-13.8-8.6-36.4s5.6-22.4 7.8-32.4c1.2-6.2 0-11.4 0-11.6v0c-0.6-2-8.2-26.8-9.4-75.4-0.6-26.4 9.2-51.2 27.6-69.8 21.2-21.6 52-33 89-33 38 0 68 11.4 89.2 33 18.4 18.6 28.2 43.4 27.6 69.8-1 48.4-8.6 73.2-9.4 75.4v0c0 0.2-1.2 3.4-0.8 10.4 0.4 10.8 13.6 11 8.6 33.6s-6.8 29.2-8.6 36.4c-1.8 7.2-17 6.6-18.8 16s-1 7.4-1 7.4c-2.8 17.8-8.4 46.8-12 56.2-4.6 11.6-13.2 26-16 30.6l-4.6 7-0.4 8.4c0 0.8-1 19.4-1.2 39.4-0.4 39.2 2.2 53.8 11.2 64.6 16 19 50.8 27.6 57.6 29.2 9.6 2.2 20.4 3.8 31.8 5.6 17.4 2.6 37.2 5.8 50.8 10.6 22 7.8 40.4 17.2 54.2 27.4 7 5 12.4 9.2 16.4 15.2l-274.4-0.2z' })
  );
};

IosPersonOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosPersonOutline.propTypes = {
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

exports.default = IosPersonOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosPersonOutline.js.map