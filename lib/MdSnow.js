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

var MdSnow = function MdSnow(props) {
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
    _react2.default.createElement('path', { d: 'M922.8 597l-16.6-61.8-176 47.2-120.8-69.8 120.8-69.8 176 47.2 16.6-61.8-114.2-30.6 115.4-66.6-48-83-113.2 65.4 30.6-114.2-61.8-16.6-47.2 176-124.4 71.8v-142.2l129-128.8-45.4-45.2-83.6 83.6v-133.8h-96v131.2l-83.4-83.4-45.2 45.2 128.6 128.8v142.8l-121.4-70-47.2-176-61.8 16.6 30.6 114.2-115.4-66.8-48 83.2 113.4 65.4-114.2 30.6 16.6 61.8 175.8-47.2 125.2 72.2-125.2 72.4-175.8-47.2-16.6 61.8 114.2 30.6-113.4 65.4 48 83 115.4-66.6-30.6 114 61.8 16.6 47.2-175.8 121.4-70.2v141.8l-128.6 128.8 45.2 45.2 83.4-83.6v131.2h96v-133.6l83.8 83.4 45-45.2-128.8-128.6v-141.2l124.4 72 47.2 175.8 61.8-16.6-30.6-114 113.2 65.4 48-83.2-115.4-66.6z' })
  );
};

MdSnow.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdSnow.propTypes = {
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

exports.default = MdSnow;
module.exports = exports['default'];
//# sourceMappingURL=MdSnow.js.map