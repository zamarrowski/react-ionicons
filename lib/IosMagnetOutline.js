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

var IosMagnetOutline = function IosMagnetOutline(props) {
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
    _react2.default.createElement('path', { d: 'M380.2 266.2c32.2 3.8 65.6 21.6 93.8 49.8l335.4 335.4 118.6-118.6-355.6-355.4c-108.6-108.6-286.4-108.6-395 0v0c-108.6 108.6-108.6 286.4 0 395l355.6 355.6 118.6-118.6-335.4-335.2c-28.8-28.8-46.8-61.8-50.8-93.2-4.2-32 6.2-60.8 30.6-85.2 23-23.2 52.2-33.4 84.2-29.6zM888.4 533l-79 79-59.2-59.2 79-79 59.2 59.2zM612 809.4l-79 79-59.2-59.2 79-79 59.2 59.2zM296.4 493.8l236.6 236.6-79 79-256.8-256.6c-47.2-47.4-73.2-110.4-73.2-177.8s26-130.4 73.2-177.8c47.2-47.2 110.4-73.2 177.8-73.2s130.4 26 177.8 73.2l256.6 256.8-79 79-236.6-236.6c-65.4-65.4-156-82-217.8-20.2-64 64-45 152.2 20.4 217.6z' })
  );
};

IosMagnetOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosMagnetOutline.propTypes = {
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

exports.default = IosMagnetOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosMagnetOutline.js.map