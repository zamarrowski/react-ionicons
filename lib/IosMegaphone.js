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

var IosMegaphone = function IosMegaphone(props) {
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
    _react2.default.createElement('path', { d: 'M152.2 374c0-76.2 44.4-142 110.6-170h-14.2c-57.4 0-121.4 60.8-132.6 139.6-11.2 1.8-19.8 14.6-19.8 29.8 0 16 9.4 28.6 21.6 29.6 8.4 60 71.4 118 113.8 130.8l20.2 6.4c-55.6-31.6-99.6-97.6-99.6-166.2z M900.4 205.6c-2-5.4-4.2-10.4-6.4-15.4-12-26.8-26.8-48.4-43.4-64.4-21-19.4-42.8-29.8-69.6-29.8s-43 10.4-51.6 15.6c-86.2 51.8-224.6 92-308 92s-126.8 0.4-126.8 0.4c-63.2 28-109.6 93.8-109.6 170 0 68.4 35.6 128.4 88.8 160 24.2 20.2 91.2 17.6 86.2 44.4s-41 219-46 254-5.8 47 8 64c14 17 83 31.6 120 31.6s43.6-17.4 43.6-87.6-34.6-263.4 17-263.4c96.6 0 163 34.6 238.6 63.4 18 6.8 28.2 9.4 40.2 9.4s37.4-3.8 69.4-36.4c18.4-18.8 31.4-37.6 43.4-64.4 2.2-5.2 4.4-10.4 6.4-16 17.8-46.4 27.4-103.8 27.4-163.8 0-59.6-9.6-117.2-27.6-163.6zM863.4 526.6c-14.4 32.8-39.8 59.2-60.8 59.2s-40.2-26.2-54.6-59.2c-16.8-38.4-27.6-94.4-27.6-156.4 0-62.6 10.8-118.6 27.8-157 14.4-32.6 33.6-52.4 54.4-52.4 21 0 46 19.8 60.6 52.4 17 38.4 32.8 94.4 32.8 157 0 62-15.6 118-32.6 156.4z' })
  );
};

IosMegaphone.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosMegaphone.propTypes = {
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

exports.default = IosMegaphone;
module.exports = exports['default'];
//# sourceMappingURL=IosMegaphone.js.map