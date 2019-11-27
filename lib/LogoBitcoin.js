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

var LogoBitcoin = function LogoBitcoin(props) {
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
    _react2.default.createElement('path', { d: 'M821 558.4c-10-23-25.4-43.2-56.2-60.2-16.4-9-32.2-15.6-50.8-20 10.8-5 20-10.8 32.6-22 15-13.2 26.2-31.4 31.2-46.6 5.2-15 8.2-36 7-56.4-2.2-33.6-8.8-66.2-26.4-89.6s-42.4-41.4-75.2-54c-25.2-9.6-51-15.6-91-17.8v-127.8h-80v128h-64v-128h-82v128h-174.2v96h55.8c17.4 0 29.2 1.6 35.2 4.6 6.2 3 10.6 7 13 12 2.6 5 3.8 16.8 3.8 35v346.4c0 18-1.2 29.6-3.8 34.8s-4 9.8-10.2 12.6c-6.2 2.8-6.4 2.6-23.6 2.6h-52.8l-17.4 96h174v128h82v-128h64v128h80v-128.8c52-2.6 89-9.4 118.8-20.6 38.6-14.4 68.2-35.4 89.4-63s29.8-69.8 31.6-102.4c1.4-29-1.8-66.4-10.8-86.8zM448 300h64v148h-64v-148zM448 724v-180h64v180h-64zM592 307.8c12 5 19.8 15 27.6 25.4 8.6 11.4 13 26.6 13 42.8 0 15.6-5.8 29-15 41-7.6 9.8-13.6 16.6-25.6 22.2v-131.4zM649.6 681.2c-15.6 13.8-24.6 20.2-44.2 27.6-4 1.6-9.4 2.8-13.4 3.8v-165.6c10 1.6 15.2 3.6 22.6 6.8 15.6 6.6 30.4 13.8 39.6 26.4s16 31.2 16 49.4c0 21.8-5.6 38.4-20.6 51.6z' })
  );
};

LogoBitcoin.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

LogoBitcoin.propTypes = {
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

exports.default = LogoBitcoin;
module.exports = exports['default'];
//# sourceMappingURL=LogoBitcoin.js.map