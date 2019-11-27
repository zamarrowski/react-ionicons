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

var LogoBuffer = function LogoBuffer(props) {
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
    _react2.default.createElement('path', { d: 'M141.4 329l338.4 163.4c8.8 4.2 20.6 6.4 32.2 6.4s23.4-2.2 32.2-6.4l338.4-163.4c17.8-8.6 17.8-22.6 0-31.2l-338.4-163.4c-8.8-4.2-20.6-6.4-32.2-6.4s-23.4 2.2-32.2 6.4l-338.4 163.4c-17.8 8.6-17.8 22.6 0 31.2z M882.6 496.4c0 0-61.8-29.8-70-33.8s-10.4-3.8-19 0.2-249.6 120.4-249.6 120.4c-9 4.2-20.6 6.4-32.2 6.4s-23.4-2.2-32.2-6.4c0 0-234.6-113.2-245.6-118.6-12-5.8-15.4-5.8-26.2-0.6-11.2 5.4-66.8 32.2-66.8 32.2-17.8 8.6-17.8 22.6 0 31.2l338.4 163.4c8.8 4.2 20.6 6.4 32.2 6.4s23.4-2.2 32.2-6.4l338.4-163.4c18.2-8.4 18.2-22.4 0.4-31z M882.6 695c0 0-61.8-29.8-70-33.8s-10.4-3.8-19 0.2-249.4 120.6-249.4 120.6c-9 4.2-20.6 6.4-32.2 6.4s-23.4-2.2-32.2-6.4c0 0-234.6-113.2-245.6-118.6-12-5.8-15.4-5.8-26.2-0.6-11.2 5.4-66.8 32.2-66.8 32.2-17.8 8.6-17.8 22.6 0 31.2l338.4 163.4c8.8 4.4 20.6 6.4 32.2 6.4s23.4-2.2 32.2-6.4l338.4-163.4c18-8.6 18-22.6 0.2-31.2z' })
  );
};

LogoBuffer.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

LogoBuffer.propTypes = {
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

exports.default = LogoBuffer;
module.exports = exports['default'];
//# sourceMappingURL=LogoBuffer.js.map