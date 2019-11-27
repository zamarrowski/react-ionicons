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

var MdPlanet = function MdPlanet(props) {
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
    _react2.default.createElement('path', { d: 'M271.4 302c-5 6-9.8 12-14.4 18.4 64.4 72.6 152.2 153 248.4 227.4 75.6 58.4 152.6 110.4 222.8 150.2 11.8 6.6 23.4 13 34.6 18.8 5-6 9.8-12 14.4-18.4 23.4-32.2 36.2-66.4 46.6-107.2 1.6-6.4 3-12.8 4.2-19 31.6-166-71.2-329.8-237-371.8-74-18.8-148.2-10.2-212.6 19.4-42.8 19.8-76.4 45.8-107 82.2z M836.4 653.6c-8.2 22-14.8 35-14.8 35 36.4 42.2 49.2 67.8 63.8 92.8 4.8 8.2 14.8 26.2 1.8 24.8-3.4-0.6-7-1.4-11-2.6-42.6-10.8-102.4-37.4-168.6-74.8-71.6-40.6-149.8-93.4-226.6-152.6-102.2-79-195-164.6-261.2-241-30.6-35.2-55.2-68.4-71.4-95.8-4.8-8.2-7.8-12.6-11.2-20.8-5-12.4 10-10.2 14-9.2 29.8 7.6 70 19.8 116.4 47.6 0 0 8.6-9.6 27.8-22.8-45.6-30.8-89.2-55.4-130.4-71-46.2-17.6-82.2-13.6-95 7.4-24.4 39.8 28 144.6 130.6 264-43 172 61.2 346.6 233 390 82.2 20.8 164.8 7.8 233.6-30 76.2 35.2 144.2 57.2 193.8 69.8 47.8 12.2 80.8 11 93.6-9.8 22.2-36.4-24.2-103.6-118.2-201z' })
  );
};

MdPlanet.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdPlanet.propTypes = {
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

exports.default = MdPlanet;
module.exports = exports['default'];
//# sourceMappingURL=MdPlanet.js.map