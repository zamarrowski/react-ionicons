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

var IosCardOutline = function IosCardOutline(props) {
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
    _react2.default.createElement('path', { d: 'M864 224h-704c-35.2 0-64 28.8-64 64v448c0 35.2 28.8 64 64 64h704c35.2 0 64-28.8 64-64v-448c0-35.2-28.8-64-64-64zM160 256h704c17.6 0 32 14.4 32 32v64h-768v-64c0-17.6 14.4-32 32-32zM896 384v96h-768v-96h768zM864 768h-704c-17.6 0-32-14.4-32-32v-224h768v224c0 17.6-14.4 32-32 32z M192 640h64v32h-64v-32z M320 640h384v32h-384v-32z' })
  );
};

IosCardOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosCardOutline.propTypes = {
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

exports.default = IosCardOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosCardOutline.js.map