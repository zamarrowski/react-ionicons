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

var IosListBox = function IosListBox(props) {
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
    _react2.default.createElement('path', { d: 'M128 128v768h768v-768h-768zM288 736c-17.672 0-32-14.328-32-32s14.328-32 32-32 32 14.328 32 32-14.328 32-32 32zM288 544c-17.672 0-32-14.328-32-32s14.328-32 32-32 32 14.328 32 32-14.328 32-32 32zM288 352c-17.672 0-32-14.328-32-32s14.328-32 32-32 32 14.328 32 32-14.328 32-32 32zM768 720h-384v-32h384v32zM768 528h-384v-32h384v32zM768 336h-384v-32h384v32z' })
  );
};

IosListBox.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosListBox.propTypes = {
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

exports.default = IosListBox;
module.exports = exports['default'];
//# sourceMappingURL=IosListBox.js.map