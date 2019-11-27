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

var MdUmbrella = function MdUmbrella(props) {
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
    _react2.default.createElement('path', { d: 'M820.2 488.2c24 0 53.2 21.8 67.6 51.8h40.2c-0.6-100-42.4-203-118.8-281.8-72.6-74.8-166-121-265.2-131.4-6-18-23-30.8-43.2-30.8-20 0-37 13-43 30.6-207.2 21-361.8 192.8-361.8 405.8 0 2.2 0.2 3.6 0.8 7.6h43.6c13.6-30 44.4-51.8 70.6-51.8 34 0 63 21.8 73 51.8h39.6c8.2-30 33.8-51.4 66-51.4 35.6 0 66.2 29 68.2 65.2v236.6c0 18.6 0.2 48.2-26.8 48.2-13.8 0-33.2-3.6-33.2-32v-42.6h-86v42.6c0 69.2 47.2 121.4 120 121.4 39 0 66.6-17 87-37.4 26.2-26.4 27-69.4 27-100.2v-238.2c4-51.6 47.8-63.4 83.8-63.4 34.4 0 64.6 23.2 75.6 51.2h41c10.2-30 39.6-51.8 74-51.8z' })
  );
};

MdUmbrella.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdUmbrella.propTypes = {
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

exports.default = MdUmbrella;
module.exports = exports['default'];
//# sourceMappingURL=MdUmbrella.js.map