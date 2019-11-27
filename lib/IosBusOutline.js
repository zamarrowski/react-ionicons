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

var IosBusOutline = function IosBusOutline(props) {
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
    _react2.default.createElement('path', { d: 'M832 832c-17 37.4-48 32-127.8 32 0 21-2.2 32 6.6 32s100.8 0 110.2 0 8.4-7.6 11-64z M192 832c3 56.8 1.6 64 11 64s101.4 0 110.2 0c8.8 0 6.6-11 6.6-32-79.8 0-100.8 6-127.8-32z M752 704c0 26.51-21.49 48-48 48s-48-21.49-48-48c0-26.51 21.49-48 48-48s48 21.49 48 48z M368 704c0 26.51-21.49 48-48 48s-48-21.49-48-48c0-26.51 21.49-48 48-48s48 21.49 48 48z M768 128h-512c-35.2 0-64 28.8-64 64v0 560c0 44 36 80 80 80h480c44 0 80-36 80-80v-560c0-35.2-28.8-64-64-64zM800 752c0 26.4-21.6 48-48 48h-480c-26.4 0-48-21.6-48-48v-144h576v144zM224 544v-255.6c0-17.6 14.8-32.4 32.4-32.4h239.6v320h-239.6c-17.6 0-32.4-14.4-32.4-32zM800 544c0 17.6-14.4 32-32 32h-240v-320h240c17.6 0 32 14.8 32 32.4v255.6zM768 224h-512c-17.6 0-32-14.4-32-32s14.4-32 32-32h512c17.6 0 32 14.4 32 32s-14.4 32-32 32z' })
  );
};

IosBusOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosBusOutline.propTypes = {
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

exports.default = IosBusOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosBusOutline.js.map