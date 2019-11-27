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

var IosBuildOutline = function IosBuildOutline(props) {
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
    _react2.default.createElement('path', { d: 'M695.8 128v0c8 0 18 2 28 6l-89.4 89.8 3 16.4 18.4 102.4 4 21.8 21.8 4 119 21.6 11.8-11.8 78-78.4c6 14.2 6 26 5.8 30.8-1.4 24-11.4 61-50 99.6-29.8 29.8-78.6 49.8-121.6 49.8-19 0-35.8-3.8-50-11.2v0 0c-7-3.6-18-8.4-31.8-8.4-11.2 0-28 3.4-44.6 19.4-18 17.6-362.6 384.8-377.4 400.4l-0.8 0.8c-11.4 13.2-26.8 15.2-35 15.2-14.8 0-29.4-6-40.2-16.4-10.8-11-17-26.8-16.4-42.4 0.4-9.2 3.2-22.4 15-32.4l1.2-0.8c15.6-14.8 384.6-362.2 399.8-377.2v0 0c15.8-15.8 19.2-32.4 19.4-43.6 0-13.8-4.8-25.2-7-30.8v0 0c-36.4-85.4 20.4-155.2 38.8-174.4v0 0c34.6-36.8 79.4-48.4 98.4-49.4 0-0.8 0.8-0.8 1.8-0.8zM695.8 96c-1.4 0-2.8 0-4 0.2-25 1.4-78.6 15.4-120 59.4-40.2 42.4-82.2 121.2-45 209 4.4 10.6 9.4 24.6-5.4 39.4-15.2 14.8-399.4 376.6-399.4 376.6-36 31-33.4 88.4-0.2 121.8 17 16.8 40 25.6 62.6 25.6 22.2 0 43.8-8.4 59.2-26.2 0 0 358.8-382.2 376.4-399.6 8-7.8 15.4-10.2 22.2-10.2 6.6 0 12.6 2.4 17.2 4.8 19.8 10.2 42 14.8 64.8 14.8 53.6 0 110-24.8 144.4-59.2 48.8-48.8 57.8-96 59.2-120.2 1.4-24-6.8-55.8-33.4-82.2l-105 105.4-102.4-18.6-18.4-102.4 105-105.4c-22.2-22.2-53.6-33-77.8-33v0z M205 858.6c-11 10.8-28.8 10.8-39.8 0-10.8-11-10.8-28.8 0-39.8 11-10.8 28.8-10.8 39.8 0 10.8 11.2 10.8 29 0 39.8z' })
  );
};

IosBuildOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosBuildOutline.propTypes = {
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

exports.default = IosBuildOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosBuildOutline.js.map