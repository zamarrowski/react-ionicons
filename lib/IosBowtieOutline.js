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

var IosBowtieOutline = function IosBowtieOutline(props) {
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
    _react2.default.createElement('path', { d: 'M534.4 404c0 0 0 0 0 0-14 0-29.8 2.6-46.6 5.8-23.8 4.6-40 14.2-40 14.2s7 54.6 0 117c-7 62.4-16 85-16 85s10.4 24.2 80 30c7.8 0.6 15.2 1 22 1 49 0 72.8-14.6 72.8-14.6s7.2-10.8 9.2-44.4c3.8-64.2-13.4-136.8-33-171-9.6-17.2-26.8-23-48.4-23zM583.8 596c-0.6 10.2-1.8 17.4-2.8 22.2-9 3-24.6 6.6-47.2 6.6-6.2 0-12.8-0.2-19.4-0.8-23.8-2-38-6.2-46.2-9.6 3.4-14.8 7.8-37.6 11.4-69.8 4.4-40.2 3.6-77 2.2-100 3.6-1.2 7.8-2.2 12.2-3 12.2-2.4 27.6-5 40.4-5v0 0 0c16.8 0 19.4 4.4 20.6 6.6 8.2 14.2 16.2 38.6 21.8 64.8 6.2 29.8 8.6 61.2 7 88z M168.8 224c-53 0-104.8 137-104.8 288s46 288 103 288c66.8 0 233-160 233-160s11.4-25.2 19.8-67.2l3.6-20.8c1.4-9.4 2.6-19.4 3.4-30 0.6-7 1-13.6 1.2-19.8l0.6-19.6c1.6-32-5-65.2-5-65.2-44.2-80.4-184.6-193.4-254.8-193.4zM288.4 695c-86.6 69.4-116.2 73-121.4 73-6.4 0-25.2-16.2-42.6-66-18-51.4-28.4-120.6-28.4-190 0-66 10.6-133.8 29.2-185.8 19.8-55.4 39.6-69.6 43.6-70.2 6.6 0 22 2 49 15.6 21.2 10.6 44.8 25.8 68.6 44.4 46.2 35.8 86.6 78.6 106.4 112.6 1.4 8.2 3.8 26.2 3.8 44.4-16.2-7-41.8-15.8-77.4-22.8-56-11-84.8-6.2-86-6-1.8 0.4-3.2 2-3.4 3.8 0 2 1.4 3.6 3.2 4 0.4 0 37.6 7.6 113.8 33.8 17 5.8 28.6 10 38 13.4 4 1.4 7.4 2.6 10.8 3.8-0.2 5.6-0.6 11-1 16.6-0.8 9-1.8 18.4-3 27.4l-1 5.6c-11 4-26.2 9-43.4 13.6-34 9-76 20-76 20-2 0.6-3.2 2.4-3 4.6 0.4 2 2.2 3.4 4.2 3.4 3.2-0.2 70.8-5.4 112.6-13.6-4.6 19.6-9.6 34-12.4 41.2-11.8 11.2-45.6 42.4-84.2 73.2z M855.2 224c-72.8 0-204.8 113-248.6 193.6l-1.6 2.8c0 0 2.8 5 3.8 6.8 6.8 12 13.4 28.6 18.8 48l5.8 23.4c4.4 20.4 7.4 42.4 8.4 64.4l0.4 18c0 5.8-0.2 11.4-0.6 17-2 33.4-9.2 44.2-9.2 44.2 15.2 21 150 157.8 224.4 157.8 57 0 103-137 103-288s-51.6-288-104.6-288zM857 768c-22.8 0-65.4-23.8-114.2-63.8-32.4-26.6-59.6-53.6-74-69 2.2-9 3.8-20.6 4.8-35.4 0.2-3.2 0.4-6.6 0.4-10 42.2 11.4 120.4 19.2 124.2 19.6 0.2 0 0.2 0 0.4 0 1.8 0 3.6-1.4 4-3.2 0.4-2-0.8-4-2.8-4.6-0.4-0.2-43.4-13.2-81-23-17.6-4.6-33.2-9.8-44.8-14.2v-2.2l0.2-0.4v-0.4c-1.8-21.4-4-44-8.4-65.6 40.8-22.6 126-61 127-61.4 1.8-0.8 2.8-2.8 2.2-4.8s-2.4-3.2-4.4-2.8c-0.4 0-30.8 5.2-70.6 19.2-20.2 7-42.6 14.8-61 21.2l-0.4-1.2c-4.8-17.2-10.6-32.8-16.8-45.4 21.2-33.4 57.8-72.6 98.4-105.4 54.4-43.8 95-59.4 115-59.4 4 0.6 23.8 14.6 43.6 70.2 18.6 52.2 29.2 120 29.2 185.8 0 69.4-10.4 138.6-28.4 190-17.4 50-36.2 66.2-42.6 66.2z' })
  );
};

IosBowtieOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosBowtieOutline.propTypes = {
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

exports.default = IosBowtieOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosBowtieOutline.js.map