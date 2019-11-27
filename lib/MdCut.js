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

var MdCut = function MdCut(props) {
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
    _react2.default.createElement('path', { d: 'M406.2 316.6c10.4-22.4 16.2-47 16.2-73.4 0-99-80.2-179.2-179.2-179.2s-179.2 80.2-179.2 179.2 80.2 179.2 179.2 179.2c26.4 0 51-5.8 73.4-16.2l105.8 105.8-105.8 105.8c-22.4-10.4-47-16.2-73.4-16.2-99 0-179.2 80.2-179.2 179.2s80.2 179.2 179.2 179.2 179.2-80.2 179.2-179.2c0-26.4-5.8-51-16.2-73.4l105.8-105.8 313.6 313.6h134.4v-44.8l-553.8-553.8zM243.2 332.8c-49.2 0-89.6-39.8-89.6-89.6s40.4-89.6 89.6-89.6 89.6 39.8 89.6 89.6-40.4 89.6-89.6 89.6zM243.2 870.4c-49.2 0-89.6-39.8-89.6-89.6s40.4-89.6 89.6-89.6 89.6 39.8 89.6 89.6-40.4 89.6-89.6 89.6zM512 534.4c-12.6 0-22.4-9.8-22.4-22.4s9.8-22.4 22.4-22.4c12.6 0 22.4 9.8 22.4 22.4s-9.8 22.4-22.4 22.4zM825.6 108.8l-268.8 268.8 89.6 89.6 313.6-313.6v-44.8h-134.4z' })
  );
};

MdCut.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdCut.propTypes = {
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

exports.default = MdCut;
module.exports = exports['default'];
//# sourceMappingURL=MdCut.js.map