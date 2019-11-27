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

var IosSwitchOutline = function IosSwitchOutline(props) {
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
    _react2.default.createElement('path', { d: 'M288 640c53 0 96 43 96 96s-43 96-96 96-96-43-96-96 43-96 96-96zM288 608c-70.6 0-128 57.4-128 128s57.4 128 128 128 128-57.4 128-128c0-70.6-57.4-128-128-128v0z M734.4 576c88.8 0 161.2 72.2 161.2 161s-72 159-160.8 159h-446c-88.8 0-161-70.2-161-159s72.2-161 161-161h445.2zM735 544h-446c-106.6 0-193 86.4-193 193s86.4 191 193 191h446c106.6 0 193-84.4 193-191s-86.4-193-193-193v0z M736 192c53 0 96 43 96 96s-43 96-96 96-96-43-96-96 43-96 96-96zM736 160c-70.6 0-128 57.4-128 128s57.4 128 128 128 128-57.4 128-128c0-70.6-57.4-128-128-128v0z M290 128h445c88.8 0 161 72.2 161 161s-72.2 159-161 159h-446c-88.8 0-160.8-70.2-160.8-159s72.6-161 161.4-161zM289 96c-106.6 0-193 86.4-193 193s86.4 191 193 191h446c106.6 0 193-84.4 193-191s-86.4-193-193-193h-446z' })
  );
};

IosSwitchOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosSwitchOutline.propTypes = {
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

exports.default = IosSwitchOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosSwitchOutline.js.map