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

var IosColorWand = function IosColorWand(props) {
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
    _react2.default.createElement('path', { d: 'M366 124h48v128h-48v-128z M366 532h48v128h-48v-128z M548 358h128v48h-128v-48z M595.8 212.2l-33.2-33.2-90.4 90.6 33.2 33.4z M190.2 218.2l90.4 90.8 33.2-33.4-90.4-90.6z M184.2 558.2l33.2 33.4 90.4-90.6-33.2-33.4z M116 358h128v48h-128v-48z M384.4 306.8l-68 68.4 86.8 87 68.2-68.2z M894 817.6l-390.6-391.6-68.2 68.2 390.8 391.8z' })
  );
};

IosColorWand.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosColorWand.propTypes = {
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

exports.default = IosColorWand;
module.exports = exports['default'];
//# sourceMappingURL=IosColorWand.js.map