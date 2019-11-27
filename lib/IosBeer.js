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

var IosBeer = function IosBeer(props) {
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
    _react2.default.createElement('path', { d: 'M224 640v-352h544c0 0-0.6-9.8-0.6-51.4s-34.4-76.6-76.2-76.6l-21-1.4c-12-54-64-94.6-118.2-94.6s-82.2 23.2-103.4 57.8c-17-19.6-42.2-30.8-70.4-30.8-36.6 0-68.2 23-83.4 53h-48.8c-50 0-86 39.2-86 90.8v8c0 57.6 32 41.8 32 79.6 0 35.6 0 213.6 0 213.6 0 26.8-22.4 38.6-22.4 70.4 0 17.6 16 33.6 33.6 33.6h20.8z M832 416h-96v-96h-480v544l-64 64v32h608v-32l-64-64v-128h96c17.6 0 32-14.4 32-32v-256c0-17.6-14.4-32-32-32zM576 408c22 0 40 18 40 40s-18 40-40 40-40-18-40-40 18-40 40-40zM576 704c0 13.2-10.8 24-24 24s-24-10.8-24-24 10.8-24 24-24 24 10.8 24 24zM512 512c17.6 0 32 14.4 32 32s-14.4 32-32 32-32-14.4-32-32 14.4-32 32-32zM832 704v0h-96v-256h96v256z' })
  );
};

IosBeer.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosBeer.propTypes = {
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

exports.default = IosBeer;
module.exports = exports['default'];
//# sourceMappingURL=IosBeer.js.map