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

var IosCamera = function IosCamera(props) {
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
    _react2.default.createElement('path', { d: 'M835 320h-123.4c-64.2-72-84.4-96-109-96h-177c-24.6 0-44.4 24-109 96h-26.6v-32h-68v32h-27c-35.2 0-67 26.4-67 61.4v352c0 35 31.8 66.6 67 66.6h640c35.2 0 61-31.6 61-66.6v-352c0-35-25.8-61.4-61-61.4zM512 721c-94.2 0-171-76.8-171-171s76.8-171 171-171 171 76.8 171 171-76.8 171-171 171zM738 418h-34v-34h34v34z M512 411c-76.8 0-139 62.2-139 139s62.2 139 139 139 139-62.2 139-139-62.2-139-139-139zM512 614c-35.4 0-64-28.6-64-64s28.6-64 64-64 64 28.6 64 64-28.6 64-64 64z' })
  );
};

IosCamera.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosCamera.propTypes = {
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

exports.default = IosCamera;
module.exports = exports['default'];
//# sourceMappingURL=IosCamera.js.map