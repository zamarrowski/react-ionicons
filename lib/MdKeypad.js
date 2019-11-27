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

var MdKeypad = function MdKeypad(props) {
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
    _react2.default.createElement('path', { d: 'M512 797c-44.6 0-81 36.6-81 81.4s36.4 81.4 81 81.4 81-36.6 81-81.4c0-44.6-36.4-81.4-81-81.4zM273 64c-44.6 0-81 36.6-81 81.4s36.4 81.4 81 81.4 81-36.6 81-81.4-36.4-81.4-81-81.4zM273 308.4c-44.6 0-81 36.6-81 81.4s36.4 81.4 81 81.4 81-36.6 81-81.4-36.4-81.4-81-81.4zM273 552.8c-44.6 0-81 36.6-81 81.4s36.4 81.4 81 81.4 81-36.6 81-81.4c0-44.8-36.4-81.4-81-81.4zM751 227c44.6 0 81-36.6 81-81.4s-36.4-81.6-81-81.6-81 36.6-81 81.4 36.4 81.6 81 81.6zM512 552.8c-44.6 0-81 36.6-81 81.4s36.4 81.4 81 81.4 81-36.6 81-81.4c0-44.8-36.4-81.4-81-81.4zM751 552.8c-44.6 0-81 36.6-81 81.4s36.4 81.4 81 81.4 81-36.6 81-81.4c0-44.8-36.4-81.4-81-81.4zM751 308.4c-44.6 0-81 36.6-81 81.4s36.4 81.4 81 81.4 81-36.6 81-81.4-36.4-81.4-81-81.4zM512 308.4c-44.6 0-81 36.6-81 81.4s36.4 81.4 81 81.4 81-36.6 81-81.4-36.4-81.4-81-81.4zM512 64c-44.6 0-81 36.6-81 81.4s36.4 81.4 81 81.4 81-36.6 81-81.4-36.4-81.4-81-81.4z' })
  );
};

MdKeypad.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdKeypad.propTypes = {
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

exports.default = MdKeypad;
module.exports = exports['default'];
//# sourceMappingURL=MdKeypad.js.map