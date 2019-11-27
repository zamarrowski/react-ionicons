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

var MdCamera = function MdCamera(props) {
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
    _react2.default.createElement('path', { d: 'M638 560c0 69.588-56.412 126-126 126s-126-56.412-126-126c0-69.588 56.412-126 126-126s126 56.412 126 126z M880 192h-176l-64-64h-256l-64 64h-176c-44.184 0-80 35.816-80 80v544c0 44.184 35.816 80 80 80h736c44.184 0 80-35.816 80-80v-544c0-44.184-35.816-80-80-80zM512 784c-123.71 0-224-100.29-224-224s100.29-224 224-224 224 100.29 224 224-100.29 224-224 224z' })
  );
};

MdCamera.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdCamera.propTypes = {
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

exports.default = MdCamera;
module.exports = exports['default'];
//# sourceMappingURL=MdCamera.js.map