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

var IosCameraOutline = function IosCameraOutline(props) {
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
    _react2.default.createElement('path', { d: 'M835 320h-123.4c-64.2-72-84.4-96-109-96h-177c-24.6 0-44.4 24-109 96h-26.6v-32h-68v32h-27c-35.2 0-67 26.4-67 61.4v352c0 35 31.8 66.6 67 66.6h640c35.2 0 61-31.6 61-66.6v-352c0-35-25.8-61.4-61-61.4zM864 733.4c0 18.6-12.4 34.6-29 34.6h-640c-17.4 0-35-17.4-35-34.6v-352c0-16.4 16.2-29.4 35-29.4h135.6l9.6-6.4c8-9 15.4-20 22.2-27.6 22.6-25.4 39-43.4 50.6-53.8 9.4-8.4 12.4-8.2 12.4-8.2h177c0 0 3.2-0.2 13.4 9 12.2 11 29.4 33 53.2 59.6 5.8 6.6 12 13.6 18.6 21l9.6 6.4h137.8c17.6 0 29 12 29 29.4v352z M512 379c-94.2 0-171 76.8-171 171s76.8 171 171 171 171-76.8 171-171-76.8-171-171-171zM512 689c-76.8 0-139-62.2-139-139s62.2-139 139-139 139 62.2 139 139-62.2 139-139 139z M704 384h34v34h-34v-34z M576 550c0 35.346-28.654 64-64 64s-64-28.654-64-64c0-35.346 28.654-64 64-64s64 28.654 64 64z' })
  );
};

IosCameraOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosCameraOutline.propTypes = {
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

exports.default = IosCameraOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosCameraOutline.js.map