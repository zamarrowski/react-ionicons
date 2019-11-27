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

var IosClipboardOutline = function IosClipboardOutline(props) {
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
    _react2.default.createElement('path', { d: 'M544 191.4c0 17.673-14.327 32-32 32s-32-14.327-32-32c0-17.673 14.327-32 32-32s32 14.327 32 32z M800 128h-184.2c8.2 9.2 14.6 20 18.8 32h149.4c8.8 0 16 7.2 16 16v704c0 8.8-7.2 16-16 16h-544c-8.8 0-16-7.2-16-16v-704c0-8.8 7.2-16 16-16h149.4c4.2-12 10.6-22.8 18.8-32h-184.2c-17.6 0-32 14.4-32 32v736c0 17.6 14.4 32 32 32h576c17.6 0 32-14.4 32-32v-736c0-17.6-14.4-32-32-32z M352 222v34h-96v608h512v-608h-96v-34c0-17.6-12.8-30-30.4-30h-33.6c0-11.2-2-22-5.4-32-4.2-12-10.6-22.8-18.8-32-17.6-19.8-43.2-32-71.8-32s-54.2 12.2-71.8 32c-8.2 9.2-14.6 20-18.8 32-3.4 10-5.4 20.8-5.4 32h-29c-17.6 0-35 12.4-35 30zM672 320v-32h64v544h-448v-544h64v32h320zM448 224v-33c0-35.8 28.2-64 64-64s64 28.2 64 64v33h64v64h-256v-64h64z' })
  );
};

IosClipboardOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosClipboardOutline.propTypes = {
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

exports.default = IosClipboardOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosClipboardOutline.js.map