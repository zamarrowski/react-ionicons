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

var IosBrush = function IosBrush(props) {
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
    _react2.default.createElement('path', { d: 'M299 566.6c-103.8 0-167.8 91.4-167.8 190.2 0 45.4-20.2 78.4-67.2 96.2 28.6 55.6 124 75 191.4 75 16.8 0 31.8-1.2 43.6-3.4 71.2-12.8 160.2-49.8 181.4-154 24.6-121.2-77.6-204-181.4-204z M935.2 120.8c-15.4-15.4-33.6-24.8-52.2-24.8-12.6 0-25.4 4.4-37.6 14l-350.2 308.2c-6.8-1.8-13.2-2.8-19.4-2.8-9.6 0-18.6 2.4-26.4 7.6l-127.2 105.6c-3.2 3.2-3 8.6 0.2 11.8 1 1 2.2 1.6 3.4 2 1.2 0 2.6 0.2 3.8 0.2 0 0 0 0 0.2 0 95.8 6.8 184 75.6 180.6 181 0 1 0 2-0.2 3 0.2 1.6 1 3.4 2.2 4.6 1.6 1.6 3.8 2.4 5.8 2.4s4.2-0.8 5.8-2.4c0 0 0 0 0.2 0 0.2-0.2 0.2-0.2 0.4-0.4l108.6-124.4c8.4-12.8 9.4-28.4 4.8-45.8l308.4-350c23.4-30 14.8-64-11.2-89.8z M322.2 528.4v0 0z' })
  );
};

IosBrush.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosBrush.propTypes = {
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

exports.default = IosBrush;
module.exports = exports['default'];
//# sourceMappingURL=IosBrush.js.map