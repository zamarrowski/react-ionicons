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

var IosRibbon = function IosRibbon(props) {
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
    _react2.default.createElement('path', { d: 'M512 576c141.4 0 256-114.6 256-256s-114.6-256-256-256-256 114.6-256 256 114.6 256 256 256zM512 144c97 0 176 79 176 176s-79 176-176 176-176-79-176-176 79-176 176-176z M512 464c79.4 0 144-64.6 144-144s-64.6-144-144-144-144 64.6-144 144 64.6 144 144 144z M512 608c-87 0-165-38.6-217.8-99.6l-166.2 291.6h192l96 160 96-211.6 67.2-148.4c-21.6 5.2-44 8-67.2 8z M729.8 508.4c-30.2 34.8-68.6 62.4-112 79.6l-89.6 196.2 79.8 175.8 96-160h192l-166.2-291.6z' })
  );
};

IosRibbon.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosRibbon.propTypes = {
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

exports.default = IosRibbon;
module.exports = exports['default'];
//# sourceMappingURL=IosRibbon.js.map