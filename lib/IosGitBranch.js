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

var IosGitBranch = function IosGitBranch(props) {
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
    _react2.default.createElement('path', { d: 'M832 320c0-70.6-57.4-128-128-128s-128 57.4-128 128c0 65.2 48.8 119 112 127v1c0 46-19.8 84.8-59 115-42.6 33-97.4 48.2-135.8 55-86.4 15.6-128.2 66.6-143.2 89.4-5.2-1.2-10.6-2.2-16-2.8v-385.4c64.2-7 114-61.2 114-127.2 0-70.6-57.4-128-128-128s-128 57.4-128 128c0 64.6 47.8 118 110 126.8v386.6c-62.2 8.8-110 62.2-110 126.8 0 70.6 57.4 128 128 128s128-57.4 128-128c0-48.6-27.2-91-67.2-112.6 14.6-20.2 50.2-57.4 118-69.8 42-7.6 102-24.4 149.6-61.2 46.8-36.2 71.4-84.6 71.4-140.4v-1c63.4-8.2 112.2-62 112.2-127.2zM224 192c0-53 43-96 96-96s96 43 96 96-43 96-96 96-96-43-96-96zM416 832c0 53-43 96-96 96s-96-43-96-96 43-96 96-96 96 43 96 96zM704 416c-53 0-96-43-96-96s43-96 96-96 96 43 96 96-43 96-96 96z' })
  );
};

IosGitBranch.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosGitBranch.propTypes = {
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

exports.default = IosGitBranch;
module.exports = exports['default'];
//# sourceMappingURL=IosGitBranch.js.map