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

var IosSubway = function IosSubway(props) {
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
    _react2.default.createElement('path', { d: 'M688 96h-352c-70.4 0-128 57.6-128 128v448c0 70.4 57.6 128 128 128h352c70.4 0 128-57.6 128-128v-448c0-70.4-57.6-128-128-128zM400 144h224c8.8 0 16 7.2 16 16s-7.2 16-16 16h-224c-8.8 0-16-7.2-16-16s7.2-16 16-16zM336 752c-31 0-56-25-56-56s25-56 56-56c31 0 56 25 56 56s-25 56-56 56zM688 752c-31 0-56-25-56-56s25-56 56-56c31 0 56 25 56 56s-25 56-56 56zM768 448c0 17.6-14.4 32-32 32h-447.6c-17.6 0-32.4-14.4-32.4-32v-191.6c0-17.6 14.8-32.4 32.4-32.4h447.6c17.6 0 32 14.8 32 32.4v191.6z M738.4 928h45.6l-98.6-96h-45.6l32.2 32h-320l32.2-32h-45.6l-98.6 96h45.6l34.2-32h384.4z' })
  );
};

IosSubway.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosSubway.propTypes = {
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

exports.default = IosSubway;
module.exports = exports['default'];
//# sourceMappingURL=IosSubway.js.map