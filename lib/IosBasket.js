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

var IosBasket = function IosBasket(props) {
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
    _react2.default.createElement('path', { d: 'M800 448v-192c0-70.4-57.6-128-128-128h-320c-70.4 0-128 57.6-128 128v192h-160l105 388.6c9.4 34 40.8 59.4 78.2 59.4h529.4c37.4 0 68.8-25 78.6-59l104.8-389h-160zM256 256c0-25.6 10-49.6 28.2-67.8s42.2-28.2 67.8-28.2h320c25.6 0 49.6 10 67.8 28.2s28.2 42.2 28.2 67.8v192h-512v-192zM883.8 608h-147.8v128h113.4l-8.6 32h-104.8v96h-32v-96h-176v96h-32v-96h-176v96h-32v-96h-104.4l-8.6-32h113v-128h-147.6l-8.6-32h156.2v-96h32v96h176v-96h32v96h176v-96h32v96h156.4l-8.6 32z M528 608h176v128h-176v-128z M320 608h176v128h-176v-128z' })
  );
};

IosBasket.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosBasket.propTypes = {
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

exports.default = IosBasket;
module.exports = exports['default'];
//# sourceMappingURL=IosBasket.js.map