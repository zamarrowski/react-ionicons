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

var IosSubwayOutline = function IosSubwayOutline(props) {
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
    _react2.default.createElement('path', { d: 'M694.4 928h45.6l-98.6-96h-45.6l32.2 32h-232l32.2-32h-45.6l-98.6 96h45.6l34.2-32h296.4z M400 144h224c8.8 0 16 7.2 16 16s-7.2 16-16 16h-224c-8.8 0-16-7.2-16-16s7.2-16 16-16z M688 128c53 0 96 43 96 96v448c0 53-43 96-96 96h-352c-53 0-96-43-96-96v-448c0-53 43-96 96-96h352zM336 512h356c35.2 0 64-28.8 64-64v-192c0-35.2-28.6-64-64-64h-356c-35.2 0-64 28.8-64 64v192c0 35.2 28.6 64 64 64zM673 751c48.6 0 88-39.4 88-88s-39.4-88-88-88-88 39.4-88 88 39.4 88 88 88zM353 751c48.6 0 88-39.4 88-88s-39.4-88-88-88-88 39.4-88 88 39.4 88 88 88zM688 96h-352c-70.6 0-128 57.4-128 128v448c0 70.6 57.4 128 128 128h352c70.6 0 128-57.4 128-128v-448c0-70.6-57.4-128-128-128v0zM336 480c-17.6 0-32-14.4-32-32v-192c0-17.6 14.4-32 32-32h356c17.6 0 32 14.4 32 32v192c0 17.6-14.4 32-32 32h-356zM673 719c-31 0-56-25-56-56s25-56 56-56c31 0 56 25 56 56s-25 56-56 56v0zM353 719c-31 0-56-25-56-56s25-56 56-56c31 0 56 25 56 56s-25 56-56 56v0z' })
  );
};

IosSubwayOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosSubwayOutline.propTypes = {
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

exports.default = IosSubwayOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosSubwayOutline.js.map