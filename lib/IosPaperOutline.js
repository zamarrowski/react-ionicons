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

var IosPaperOutline = function IosPaperOutline(props) {
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
    _react2.default.createElement('path', { d: 'M224 96v736h32v-704h608v738.2c0 16.4-13.4 29.8-29.8 29.8h-644.4c-16.4 0-29.8-13.4-29.8-29.8v-610.2h32v-32h-64v642.2c0 34 27.6 61.8 61.8 61.8h644.6c34 0 61.8-27.6 61.8-61.8v-770.2h-672.2z M320 224h256v32h-256v-32z M320 384h480v32h-480v-32z M320 544h384v32h-384v-32z M320 704h480v32h-480v-32z' })
  );
};

IosPaperOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosPaperOutline.propTypes = {
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

exports.default = IosPaperOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosPaperOutline.js.map