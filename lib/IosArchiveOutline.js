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

var IosArchiveOutline = function IosArchiveOutline(props) {
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
    _react2.default.createElement('path', { d: 'M575.6 480c17.6 0 32.2 14.4 32.2 32s-14 32-31.8 32h-128c-17.6 0-32-14.4-32-32s14.4-32 32-32h126zM576 448h-128c-35.2 0-64 28.8-64 64s28.8 64 64 64h128c35.2 0 64-28.8 64-64s-28.8-64-64-64v0z M832 224h-640v160h32v416h576v-416h32v-160zM768 768h-512v-384h512v384zM800 352h-576v-96h576v96z' })
  );
};

IosArchiveOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosArchiveOutline.propTypes = {
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

exports.default = IosArchiveOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosArchiveOutline.js.map