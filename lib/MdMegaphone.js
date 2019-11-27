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

var MdMegaphone = function MdMegaphone(props) {
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
    _react2.default.createElement('path', { d: 'M764.2 286.8l-46.2 46c29.4 29.4 47.8 70.4 47.8 115.2s-18.4 85.8-47.8 115.2l46.2 46.2c41.2-41.2 66.8-98.4 66.8-161.2s-25.6-120.2-66.8-161.4z M856.4 198l-45.4 45.4c52.2 52.2 84.6 124.8 84.6 204.6 0 79.6-32.2 152.2-84.6 204.6l45.4 45.4c63.8-64.2 103.6-152.6 103.6-250s-39.6-185.8-103.6-250z M640 368.2v-208.2h-64l-192 160h-256l-64 32v224l64 32 160 256h96l-60-256h60l192 128h64v-208.2c36.8-3.4 64-37.8 64-79.8s-27.2-76.4-64-79.8z' })
  );
};

MdMegaphone.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdMegaphone.propTypes = {
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

exports.default = MdMegaphone;
module.exports = exports['default'];
//# sourceMappingURL=MdMegaphone.js.map