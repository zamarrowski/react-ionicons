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

var IosRibbonOutline = function IosRibbonOutline(props) {
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
    _react2.default.createElement('path', { d: 'M512 176c79.4 0 144 64.6 144 144s-64.6 144-144 144-144-64.6-144-144 64.6-144 144-144zM512 144c-97 0-176 79-176 176s79 176 176 176 176-79 176-176-79-176-176-176v0z M512 96c59.8 0 116 23.4 158.4 65.6s65.6 98.6 65.6 158.4-23.4 116-65.6 158.4-98.6 65.6-158.4 65.6-116-23.4-158.4-65.6-65.6-98.6-65.6-158.4 23.4-116 65.6-158.4 98.6-65.6 158.4-65.6zM512 64c-141.4 0-256 114.6-256 256s114.6 256 256 256 256-114.6 256-256-114.6-256-256-256v0z M301.2 560.8c58 50.8 132.8 79.2 210.8 79.2 4.8 0 9.4-0.2 14.2-0.4l-43.4 95.4-70.8 156-74-123.2h-155l118.2-207zM294.2 508.4l-166.2 291.6h192l96 160 96-211.6 67.2-148.4c-21.6 5.2-44.2 8-67.2 8-87 0-165-38.6-217.8-99.6v0z M722.8 560.8l118.2 207.2h-155.2l-9.4 15.6-64.4 107.6-48.6-107 78.2-171.6c29.4-13 57-30.6 81.2-51.8zM729.8 508.4c-30.2 34.8-68.6 62.4-112 79.6l-89.6 196.2 79.8 175.8 96-160h192l-166.2-291.6z' })
  );
};

IosRibbonOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosRibbonOutline.propTypes = {
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

exports.default = IosRibbonOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosRibbonOutline.js.map