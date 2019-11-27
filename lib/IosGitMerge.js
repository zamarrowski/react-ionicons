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

var IosGitMerge = function IosGitMerge(props) {
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
    _react2.default.createElement('path', { d: 'M768 448c-65.4 0-119.4 49.2-127 112.4-18.2 0-59.2-2.6-111-22.6-65.2-25.4-159.8-84.4-243-221.6 55.6-13.8 97-64.2 97-124.2 0-70.6-57.4-128-128-128s-128 57.4-128 128c0 64.6 47.8 118 110 126.8v386.6c-62.2 8.6-110 62-110 126.6 0 70.6 57.4 128 128 128s128-57.4 128-128c0-66-49.8-120.2-114-127.2v-355.2c85.4 133 181.2 191.8 248.4 218 55.6 21.6 100.2 24.8 122 24.8 0.2 0 0.4 0 0.8 0 8 62.8 61.8 111.6 127 111.6 70.6 0 128-57.4 128-128s-57.6-128-128.2-128zM160 192c0-53 43-96 96-96s96 43 96 96-43 96-96 96-96-43-96-96zM352 832c0 53-43 96-96 96s-96-43-96-96 43-96 96-96 96 43 96 96zM768 672c-53 0-96-43-96-96s43-96 96-96 96 43 96 96-43 96-96 96z' })
  );
};

IosGitMerge.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosGitMerge.propTypes = {
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

exports.default = IosGitMerge;
module.exports = exports['default'];
//# sourceMappingURL=IosGitMerge.js.map