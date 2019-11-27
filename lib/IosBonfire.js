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

var IosBonfire = function IosBonfire(props) {
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
    _react2.default.createElement('path', { d: 'M541.8 701.2c-1.4-16.4-15.2-29.2-31.8-29.2-15.2 0-28 10.8-31.2 25v0l-31.2 157c-1 4.6-1.6 9.2-1.6 14 0 35.4 28.6 60 64 60s64-24.6 64-60c0-5.8-0.8-11.4-2.2-16.8l-30-150z M611.8 710v0 0z M777.8 772.6c-3.4-2.8-6.6-5.8-10.2-7.8l-119.2-87c-11.6-7.6-24-7.4-33 1.8-8.2 8.2-9.4 20.8-3.4 30.8l90 123.6c1.8 3 4.4 5.6 6.8 8.4 15.6 18.2 50.2 19.2 69.2 0 18.8-19.6 18.6-54.4-0.2-69.8z M745 670v0 0z M870.8 640c-15.6 0-111.2 0-119 0s-14.8 4.4-16.2 12.4c-1.2 7.2 2.6 14.2 9.4 17.6v0c0 0 0.2 0 0.2 0l115.4 35.6c16.6 3.8 35.4-11 35.4-29.6 0-23.6-9.6-36-25.2-36z M278.4 670v0 0z M278.4 670v0c6.6-3.2 10.6-10.4 9.4-17.6-1.4-8-7.8-12.4-16.2-12.4s-103.8 0-119 0-24.6 16.6-24.6 35.2 18.2 34.2 34.8 30.4l115.4-35.6c-0 0 0.2 0 0.2 0z M375.8 677.6l-119.2 86.8c-3.6 2.2-7.2 4.8-10.2 7.8-19.2 19.2-19.2 50.2 0 69.2 19.2 19.2 50.2 19.2 69.2 0 2.6-2.6 4.8-5.4 6.8-8.4l90-123.2c6-10 5-22.4-3.4-30.6-9.2-9-23.6-9.6-33.2-1.6z M717.4 277.4c0-115.2-144.8-181.4-192-181.4 24 161.6-203.4 226-224 362.6s96 181.4 96 181.4c32.6-113.2 144.8-151.2 219.4-199.6 81.4-52.8 100.6-102.6 100.6-163z M717.4 519.2c10-29.4 3.8-98.6-6-126.8-18 35-52.6 64.8-94.4 92-17.2 11.2-41.8 21.6-59.6 31.8-37.4 21-68 41.2-92.6 68.8 22.6 32.8 62.6 55.4 92.6 55.4 72-0.4 128-27.4 160-121.2z M323.6 343.8c23.4-30.2 49.8-47.6 76.4-72.4 26.8-25 44.2-42.4 55-62.6-21.4-40.2-61.6-56.2-89.4-52.2 4.6 57.2-60 88-64 129.6-2.6 25.2 10.8 50 22 57.6z' })
  );
};

IosBonfire.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosBonfire.propTypes = {
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

exports.default = IosBonfire;
module.exports = exports['default'];
//# sourceMappingURL=IosBonfire.js.map