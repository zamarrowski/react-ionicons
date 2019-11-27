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

var MdFiling = function MdFiling(props) {
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
    _react2.default.createElement('path', { d: 'M898.4 416h-52.4v-64l-28.8-96h-51.2v-64l-30-96h-448l-30 96v64h-51.2l-28.8 96v64h-52.4l-29.6 96v330.6c0 47 70.4 85.4 117.4 85.4h629.4c43.6 0 85.4-39.4 85.4-82v-334l-29.8-96zM352 192h320v64h-320v-64zM270 352h484v64h-484v-64zM834 576h-165.2c-14.8 73-79.4 128-156.8 128s-142-55-156.8-128h-165.2v-64h644v64z' })
  );
};

MdFiling.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdFiling.propTypes = {
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

exports.default = MdFiling;
module.exports = exports['default'];
//# sourceMappingURL=MdFiling.js.map