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

var MdMagnet = function MdMagnet(props) {
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
    _react2.default.createElement('path', { d: 'M767.2 197.6c-63-66-151.2-101.2-255.2-101.6-103.8 0.4-192 35.6-255 101.6-63.4 66.4-97 160-97 270.4 0 87 3.6 138.4 25.8 231.6 0 0 45.4 151.4 71 208.2 7 15.6 14.8 23.6 31 18.6 12.8-4 93.6-35.8 109.4-43.2 15.8-7.2 23.2-17.2 17.8-30.4-7.6-18.4-67.8-191.2-67.8-191.2-16.8-72.6-23.2-107.8-23.2-188.6 0-56.4 19.6-108.2 55.4-145.8 35-36.6 82-56.8 132.6-56.8s97.6 20.2 132.6 56.8c35.8 37.6 55.4 89.2 55.4 145.6 0 80-6.4 128-23.4 188.8s-64.4 180.2-67.8 191.2c-3.4 11.2 4.2 25 17.8 30.4s98.6 39.2 109.4 43.2c10.8 4 21.2 1.2 29-15.4 8-16.6 49.2-122.8 73-211.4 24-88.6 26-144.6 26-231.6 0-110.4-33.4-203.8-96.8-270.4zM346.2 839.4l-45.8 19.2c-13.8-32.6-34.4-86.4-51.8-154.4l44-13 53.6 148.2zM723.4 858.6l-45.8-19.2c14.4-33.2 38.2-90.2 53.2-148.2l44 13c-16.8 67.8-37.4 121.8-51.4 154.4z' })
  );
};

MdMagnet.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdMagnet.propTypes = {
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

exports.default = MdMagnet;
module.exports = exports['default'];
//# sourceMappingURL=MdMagnet.js.map