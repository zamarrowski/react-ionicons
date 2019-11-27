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

var IosSwitch = function IosSwitch(props) {
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
    _react2.default.createElement('path', { d: 'M735 544h-446c-106.6 0-193 86.4-193 193s86.4 191 193 191h446c106.6 0 193-84.4 193-191s-86.4-193-193-193zM288 864c-70.6 0-128-57.4-128-128s57.4-128 128-128 128 57.4 128 128c0 70.6-57.4 128-128 128z M289 480h446c106.6 0 193-84.4 193-191s-86.4-193-193-193h-446c-106.6 0-193 86.4-193 193s86.4 191 193 191zM736 160c70.6 0 128 57.4 128 128s-57.4 128-128 128-128-57.4-128-128c0-70.6 57.4-128 128-128z' })
  );
};

IosSwitch.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosSwitch.propTypes = {
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

exports.default = IosSwitch;
module.exports = exports['default'];
//# sourceMappingURL=IosSwitch.js.map