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

var IosCafeOutline = function IosCafeOutline(props) {
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
    _react2.default.createElement('path', { d: 'M64 800h896v32h-896v-32z M400 768c30 0 131.4 0 160 0 17.6 0 116-24 189.4-160.8 6.2 0.6 12.4 0.8 18.6 0.8 106 0 192-78.8 192-176 0-77.2-54.2-142.8-129.8-166.6 1.2-23.4 1.8-47.8 1.8-73.4h-704c0 512 242 576 272 576zM928 432c0 79.4-71.8 144-160 144-1 0-2.2 0-3.2 0 30.4-67.2 54.4-157.2 63.4-277.4 58.4 21.4 99.8 73.2 99.8 133.4zM160.4 224h639.2c-2.2 98.4-14.6 185.8-36.8 260.2-19.4 64.8-46.4 119.8-80.2 163.4-49 63.4-101.6 88.4-121.4 88.4s-136.6 0-160.2 0-74.4-25.2-123.4-88.4c-33.8-43.6-60.8-98.6-80.2-163.4-22.4-74.4-34.8-161.8-37-260.2z' })
  );
};

IosCafeOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosCafeOutline.propTypes = {
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

exports.default = IosCafeOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosCafeOutline.js.map