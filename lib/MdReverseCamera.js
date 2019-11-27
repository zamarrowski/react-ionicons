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

var MdReverseCamera = function MdReverseCamera(props) {
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
    _react2.default.createElement('path', { d: 'M880 192h-176l-64-64h-256l-64 64h-176c-44.2 0-80 35.8-80 80v544c0 44.2 35.8 80 80 80h736c44.2 0 80-35.8 80-80v-544c0-44.2-35.8-80-80-80zM736 534h-195.4l89.6-90.2c-29.4-30.8-71.4-51-117.6-51-92.4 0-168 75.6-168 168s75.6 168 168 168c71 0 132.4-43 156.4-107h59.2c-26.8 94-112.4 163-215.6 163-124.6 0-224-100.8-224-224s100.8-224 224-224c61.6 0 117.4 25.2 158 65.8l65.6-65.8v197.2z' })
  );
};

MdReverseCamera.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdReverseCamera.propTypes = {
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

exports.default = MdReverseCamera;
module.exports = exports['default'];
//# sourceMappingURL=MdReverseCamera.js.map