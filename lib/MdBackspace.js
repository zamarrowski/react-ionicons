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

var MdBackspace = function MdBackspace(props) {
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
    _react2.default.createElement('path', { d: 'M867 192h-532.6c-24.4 0-43.6 12.4-56.4 31.2l-192 288.8 192 288.4c12.8 18.8 32 31.6 56.4 31.6h532.4c39 0 71-32 71-71.2v-497.6c0.2-39.2-31.8-71.2-70.8-71.2zM760.4 639.6l-50 50.2-127.4-127.6-127.4 127.6-50-50.2 127.4-127.6-127.4-127.6 50-50.2 127.4 127.6 127.4-127.6 50 50.2-127.4 127.6 127.4 127.6z' })
  );
};

MdBackspace.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdBackspace.propTypes = {
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

exports.default = MdBackspace;
module.exports = exports['default'];
//# sourceMappingURL=MdBackspace.js.map