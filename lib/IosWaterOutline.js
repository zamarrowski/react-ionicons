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

var IosWaterOutline = function IosWaterOutline(props) {
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
    _react2.default.createElement('path', { d: 'M511.6 136c60.4 48.2 116.2 108 166.2 178.4 82.2 115.4 122 222.8 122 328.6 0 139.4-129.2 252.8-288.2 252.8-98.2 0-188.6-43.4-241.8-115.8-10.8-14.6-19.8-30.2-26.8-46.2-12.6-29.2-19.2-59.6-19.2-90.8 0-0.6 0-1.6 0-2.4 0-1.4 0.2-3 0.2-4.6 2-105.2 42-210.4 122.2-321.6 69-95.6 130.6-151 165.4-178.4zM512.2 96c-46.2 32-117.2 96.2-191.6 199.6s-125.8 215.6-128.2 340c0 2.4-0.2 5-0.2 7.4 0 36.6 7.8 71.6 21.8 103.6 8.2 18.6 18.4 36 30.4 52.4 57 77.6 155.6 128.8 267.6 128.8 176.8 0 320.2-127.6 320.2-284.8 0-126.8-54-243.2-128-347.2s-145.2-164.8-192-199.8v0z M531.8 822c-31.6 0-65.4-2.8-91.8-14.8 174-27.2 238-91.2 279.6-244.4 10.4 22.4 12.4 47.4 12.4 73.6 0 102.4-89.6 185.6-200.2 185.6z' })
  );
};

IosWaterOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosWaterOutline.propTypes = {
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

exports.default = IosWaterOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosWaterOutline.js.map