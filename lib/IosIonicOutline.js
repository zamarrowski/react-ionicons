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

var IosIonicOutline = function IosIonicOutline(props) {
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
    _react2.default.createElement('path', { d: 'M851 269.6c9.4-11.8 15-27 15-43.2 0-38.4-31.2-69.8-69.6-69.8-16.4 0-31.4 5.6-43.2 15-68-48.4-150-75.6-239.8-75.6-229.8-0-417.4 185-417.4 415.2s187.4 416.8 417.2 416.8c229.8 0 414.8-186.6 414.8-416.8 0-90-28.6-173.4-77-241.6zM796 182.6c24.4 0 44 19.8 44 44 0 24.4-19.8 44-44 44-24.4 0-44-19.8-44-44s19.6-44 44-44zM783.6 783.4c-35.2 35.2-76.4 63.2-122.2 82.6-47.4 20-96.4 30.4-148.4 30.4-51.8 0-103.4-10.2-150.8-30.4-45.8-19.4-86.8-47-122.2-82.6-35.2-35.2-63-76.6-82.4-122.4-20-47.4-30.2-97.8-30.2-149.8 0-51.8 10.2-102.4 30.2-149.8 19.4-45.8 47-87 82.4-122.4s76.4-63.2 122.2-82.6c47.4-20 98.8-28.2 150.8-28.2 51.8 0 101 8 148.4 28.2 25.4 10.8 49.4 24.2 71.8 40-4.2 9-6.6 19-6.6 29.8 0 38.4 31.2 69.8 69.6 69.8 10.6 0 20.6-2.4 29.8-6.6 15.8 22.4 29.2 46.4 40 72 20 47.4 30.2 97.8 30.2 149.8 0 51.8-10.2 102.4-30.2 149.8-19.4 45.8-47 87-82.4 122.4z M513 320.2c-106 0-192 85.6-192 191.8s85.8 192.2 192 192.2c106 0 192-86 192-192.2s-86-191.8-192-191.8zM513 671.6c-88.2 0-159.4-71.6-159.4-159.6 0-88.2 71.2-159.2 159.4-159.2s159.4 71.2 159.4 159.2c0 88.2-71.4 159.6-159.4 159.6z' })
  );
};

IosIonicOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosIonicOutline.propTypes = {
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

exports.default = IosIonicOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosIonicOutline.js.map