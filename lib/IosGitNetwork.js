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

var IosGitNetwork = function IosGitNetwork(props) {
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
    _react2.default.createElement('path', { d: 'M896 192c0-70.6-57.4-128-128-128s-128 57.4-128 128c0 64.6 47.8 118 110 126.8h2v119.2l-240 118.2-240-118.2v-119c63.2-7.8 112-61.6 112-127 0-70.6-57.4-128-128-128s-128 57.4-128 128c0 64.6 47.8 118 110 126.8h2v139.2l256 126v120.6c-63.2 7.8-112 61.6-112 127 0 70.6 57.4 128 128 128s128-57.4 128-128c0-64.6-47.8-118-110-126.8h-2v-120.8l256-126v-139c63.2-8 112-61.8 112-127zM160 192c0-53 43-96 96-96s96 43 96 96-43 96-96 96-96-43-96-96zM608 831.6c0 53-43 96-96 96s-96-43-96-96 43-96 96-96 96 43 96 96zM768 288c-53 0-96-43-96-96s43-96 96-96 96 43 96 96-43 96-96 96z' })
  );
};

IosGitNetwork.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosGitNetwork.propTypes = {
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

exports.default = IosGitNetwork;
module.exports = exports['default'];
//# sourceMappingURL=IosGitNetwork.js.map