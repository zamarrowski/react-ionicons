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

var MdBug = function MdBug(props) {
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
    _react2.default.createElement('path', { d: 'M896 320h-134.8c-21.6-37.4-51.4-69.6-87.4-94l78.2-78.4-67.6-67.6-104.2 104.2c-22.2-5.4-44.6-8.2-68.2-8.2s-46 2.8-67.6 8.2l-104.8-104.2-67.6 67.6 77.8 78.2c-35.6 24.4-65.2 56.6-86.8 94h-135v96h100.4c-2.4 15.8-4.4 31.6-4.4 48v48h-96v96h96v48c0 16.4 2 32.2 4.4 48h-100.4v96h134.8c50 86 142.6 144 249.2 144s199.2-58 249.2-144h134.8v-96h-100.4c2.4-15.8 4.4-31.6 4.4-48v-48h96v-96h-96v-48c0-16.4-2-32.2-4.4-48h100.4v-95.8z' })
  );
};

MdBug.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdBug.propTypes = {
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

exports.default = MdBug;
module.exports = exports['default'];
//# sourceMappingURL=MdBug.js.map