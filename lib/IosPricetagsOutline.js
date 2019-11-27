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

var IosPricetagsOutline = function IosPricetagsOutline(props) {
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
    _react2.default.createElement('path', { d: 'M896 128v-64h-320l-512 576 320 320 46.942-47.808 49.058 47.808 480-544v-288h-64zM384 914.742l-275.22-274.742 480.462-544h274.758v274.754l-433.11 495.98-22.68 22.726-24.21 25.282zM928 402.754l-448 511.988-26.364-25.3 442.364-505.442v-224h32v242.754z M704 320c35.29 0 64-28.71 64-64s-28.71-64-64-64-64 28.71-64 64 28.71 64 64 64zM704 224c17.672 0 32 14.326 32 32s-14.328 32-32 32-32-14.326-32-32 14.328-32 32-32z' })
  );
};

IosPricetagsOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosPricetagsOutline.propTypes = {
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

exports.default = IosPricetagsOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosPricetagsOutline.js.map