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

var MdCart = function MdCart(props) {
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
    _react2.default.createElement('path', { d: 'M339.2 755.2c-45.764 0-83.2 37.436-83.2 83.202 0 45.764 37.436 83.2 83.2 83.2s83.202-37.436 83.202-83.2c-0.002-45.768-37.44-83.202-83.202-83.202zM96 102.4v83.2h83.2l149.766 303.364-62.616 101.908c-6.236 10.4-10.4 24.964-10.4 39.53 0 55.7 38.050 83.2 89.65 83.2h486.4v-80h-476.214c-6.236 0-10.4-4.164-10.4-10.4 0-2.072 4.414-10.4 4.414-10.4l41.564-65.6h309.908c31.202 0 58.256-16.634 72.8-43.672l149.764-257.6c2.474-4.922 4.164-12.492 4.164-20.798 0-22.892-18.728-39.53-41.6-39.53h-615.672l-39.528-83.202h-135.2zM748.798 755.2c-45.764 0-83.2 37.436-83.2 83.202 0 45.764 37.436 83.2 83.2 83.2s83.202-37.438 83.202-83.202c0-45.766-37.438-83.2-83.202-83.2z' })
  );
};

MdCart.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdCart.propTypes = {
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

exports.default = MdCart;
module.exports = exports['default'];
//# sourceMappingURL=MdCart.js.map