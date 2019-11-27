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

var MdGitCompare = function MdGitCompare(props) {
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
    _react2.default.createElement('path', { d: 'M384 764h-44c-49.2 0-58-7.2-67.6-19.2-11-13.8-16.4-38.2-16.4-108.4v-333.6c38.2-22.2 64-63.4 64-110.8 0-70.6-57.4-128-128-128s-128 57.4-128 128c0 47.4 25.8 88.6 64 110.8v333.6c0 92.8 7.4 141.6 44.2 188 39.8 50.2 90 71.6 167.8 71.6h44v128l192-192-192-192v124zM192 112c44.2 0 80 35.8 80 80s-35.8 80-80 80-80-35.8-80-80 35.8-80 80-80z M896 721.2v-339.6c0-92.8-7.4-141.6-44.2-188-39.8-50.2-90-69.6-167.8-69.6h-44v-124l-192 192 192 192v-128h44c49.2 0 58 5.2 67.6 17.2 11 13.8 16.4 38.2 16.4 108.4v339.6c-38.2 22.2-64 63.4-64 110.8 0 70.6 57.4 128 128 128s128-57.4 128-128c0-47.4-25.8-88.6-64-110.8zM832 912c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80z' })
  );
};

MdGitCompare.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdGitCompare.propTypes = {
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

exports.default = MdGitCompare;
module.exports = exports['default'];
//# sourceMappingURL=MdGitCompare.js.map