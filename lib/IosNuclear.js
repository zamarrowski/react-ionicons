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

var IosNuclear = function IosNuclear(props) {
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
    _react2.default.createElement('path', { d: 'M608 544c0 53.019-42.981 96-96 96s-96-42.981-96-96c0-53.019 42.981-96 96-96s96 42.981 96 96z M960 544h-320c0 47.8-26.2 89.4-65.2 111.4l156.4 272.6c135-77.2 228.8-217.4 228.8-384z M512 416c23.4 0 45.4 6.4 64.2 17.4l161.2-276.6c-66.2-38.6-143.2-60.8-225.4-60.8-82.4 0-159.8 22.4-226.2 61.2l159.6 277.6c19.4-12 42.2-18.8 66.6-18.8z M384 544h-320c0 166.6 93.8 306.8 228.8 384l156.4-272.6c-39-22-65.2-63.6-65.2-111.4z' })
  );
};

IosNuclear.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosNuclear.propTypes = {
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

exports.default = IosNuclear;
module.exports = exports['default'];
//# sourceMappingURL=IosNuclear.js.map