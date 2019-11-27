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

var IosMegaphoneOutline = function IosMegaphoneOutline(props) {
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
    _react2.default.createElement('path', { d: 'M152.2 374c0-76.2 44.4-142 110.6-170h-14.2c-57.4 0-121.4 60.8-132.6 139.6-11.2 1.8-19.8 14.6-19.8 29.8 0 16 9.4 28.6 21.6 29.6 8.4 60 71.4 118 113.8 130.8l20.2 6.4c-55.6-31.6-99.6-97.6-99.6-166.2z M781 128c17.4 0 31.6 6.4 47.4 21.2 13.8 13.2 26 31.4 36.2 54.2 2 4.8 4 9.2 5.8 13.8v0.4c16.4 42.4 25.6 96.6 25.6 152.4 0 55.6-9 109.6-25.4 152.2v0.4c-1.8 4.6-3.6 9.2-5.8 14.2-10.2 22.4-20.8 38.4-37 54.8-23.8 23.8-40.6 26.4-46.8 26.4-6.4 0-12.2-1.2-28.8-7.4-12.4-4.8-24.8-9.8-37-14.6-62.2-25-126.4-50.8-213-50.8-14.2 0-27.4 5.8-37.2 16.6-29.4 32-25.4 103.4-16.4 208.8 2.4 27.4 4.6 53.4 4.6 70 0 19.8-0.6 32.8-1.8 42.6-0.8 6.8-1.8 10.6-2.6 12.4-1.4 0.2-3.6 0.4-7.2 0.4-14.8 0-36.6-2.8-56.8-7.4-24.4-5.6-36-11.2-39.2-13.4-4.2-5.2-4.6-8-0.4-38.2 4-28.6 30-168.2 41.2-227.8 2.2-11.8 3.8-20.6 4.6-25 4-21.2-6.6-40.4-28.2-51.6-11.2-5.8-24.6-9.2-37.6-12.6-10-2.6-27-7-31.4-10.6l-2-1.6-2.2-1.4c-45.2-26.8-73.2-77.6-73.2-132.4 0-30.4 9-59.8 25.8-85.4 15-22.8 35.4-40.8 59-52.6 15.4-0.2 56-0.4 119.6-0.4 43.8 0 101.2-9.8 162-27.8 61.2-18.2 119-42.6 162.4-68.6l1.2-0.8c7.8-4.4 17.6-10.4 34.6-10.4zM781 96c-27 0-43 10.4-51.6 15.6-86.2 51.8-224.6 92-308 92s-126.8 0.4-126.8 0.4c-63.2 28-109.6 93.8-109.6 170 0 68.4 35.6 128.4 88.8 160 24.2 20.2 91.2 17.6 86.2 44.4s-41 219-46 254-5.8 47 8 64c14 17 83 31.6 120 31.6s43.6-17.4 43.6-87.6-34.6-263.4 17-263.4c96.6 0 163 34.6 238.6 63.4 18 6.8 28.2 9.4 40.2 9.4s37.4-3.8 69.4-36.4c18.4-18.8 31.4-37.6 43.4-64.4 2.2-5.2 4.4-10.4 6.4-16 17.8-46.4 27.4-103.8 27.4-163.8 0-59.8-9.6-117.4-27.6-164-2-5.4-4.2-10.4-6.4-15.4-12-26.8-26.8-48.4-43.4-64.4-21-19-42.8-29.4-69.6-29.4v0z M770.6 192.6c4.2 0 20 8.2 31.4 33.4 9 20.4 30 74.8 30 144 0 68.4-20.8 123.2-29.8 143.6-10.6 24-25 37-31 39.6-4-2.8-14.2-13.4-25.8-39.6-15.8-36-25-88.4-25-143.6 0-55.8 9.2-108.2 25.2-144 12.2-27.6 23.4-33.4 25-33.4zM770.6 160.6c-20.8 0-40 19.8-54.4 52.4-17 38.4-27.8 94.4-27.8 157 0 62.2 10.8 118.2 27.6 156.4 14.4 33 33.6 59.2 54.6 59.2s46.2-26.2 60.8-59.2c16.8-38.4 32.6-94.4 32.6-156.4 0-62.6-15.6-118.6-32.8-157-14.6-32.4-39.6-52.4-60.6-52.4v0z' })
  );
};

IosMegaphoneOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosMegaphoneOutline.propTypes = {
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

exports.default = IosMegaphoneOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosMegaphoneOutline.js.map