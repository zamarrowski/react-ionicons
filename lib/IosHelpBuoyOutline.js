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

var IosHelpBuoyOutline = function IosHelpBuoyOutline(props) {
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
    _react2.default.createElement('path', { d: 'M512 96c-229.8 0-416 186.2-416 416s186.2 416 416 416 416-186.2 416-416c0-229.8-186.2-416-416-416zM783.6 240.4c35.2 35.2 63 76.4 82.4 122 5.4 12.6 10 25.6 14 38.8l-202.2 13.6c-16.4-28-39.8-51.4-67.8-68l13-202.6c13 4 26 8.6 38.6 14 45.6 19.4 86.6 47 122 82.2zM896 512c0 27-2.8 53.4-8.2 79.2l-195.2-14c7.4-20.4 11.4-42.4 11.4-65.4 0-22.8-4-44.8-11.4-65.2l195.2-14c5.4 26 8.2 52.4 8.2 79.4zM512 672c-88.2 0-160-71.8-160-160s71.8-160 160-160 160 71.8 160 160c0 88.2-71.8 160-160 160zM128 512c0-27 2.8-53.4 8.2-79.2l195.2 14c-7.4 20.4-11.4 42.2-11.4 65.2 0 22.8 4 44.8 11.4 65.2l-195.2 14.2c-5.4-26-8.2-52.4-8.2-79.4zM591.2 136.2l-13.6 195.4c-20.4-7.4-42.6-11.6-65.6-11.6s-45 4-65.6 11.4l-13.8-195.2c25.8-5.4 52.4-8.2 79.2-8.2 27.2 0 53.6 2.8 79.4 8.2zM240.4 240.4c35.2-35.2 76.4-63 122-82.4 12.6-5.4 25.6-10 38.6-14l13 202.6c-27.8 16.6-51.2 40-67.8 67.8l-202.2-13.4c4-13 8.6-26 14-38.6 19.6-45.6 47.2-86.6 82.4-122zM240.4 783.6c-35.2-35.2-63-76.4-82.4-122-5.4-12.6-10-25.6-14-38.6l202.6-13c16.4 27.8 39.8 51 67.6 67.6l-13.2 202.4c-13-4-26-8.6-38.6-14-45.6-19.6-86.6-47.2-122-82.4zM432.8 887.8l14-195.2c20.4 7.4 42.4 11.4 65.2 11.4 23 0 45.2-4 65.8-11.6l13.6 195.4c-25.8 5.4-52.4 8.2-79.2 8.2-27.2 0-53.6-2.8-79.4-8.2zM783.6 783.6c-35.2 35.2-76.4 63-122 82.4-12.6 5.4-25.6 10-38.6 14l-13.4-202.2c28.2-16.6 51.6-40.2 68.2-68.4l202.2 13.6c-4 13-8.6 26-14 38.8-19.6 45.4-47.2 86.4-82.4 121.8z' })
  );
};

IosHelpBuoyOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosHelpBuoyOutline.propTypes = {
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

exports.default = IosHelpBuoyOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosHelpBuoyOutline.js.map