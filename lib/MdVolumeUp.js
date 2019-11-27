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

var MdVolumeUp = function MdVolumeUp(props) {
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
    _react2.default.createElement('path', { d: 'M128 384v256h170.668l213.332 223.086v-702.17l-213.332 223.084h-170.668zM704 512c0-76.798-42.666-144.814-106.666-177.726v353.272c64-30.73 106.666-98.746 106.666-175.546zM597.334 128v89.956c123.728 37.308 213.334 155.808 213.334 294.044 0 138.238-89.606 256.738-213.334 294.044v89.956c170.666-39.492 298.666-197.486 298.666-384 0-186.512-128-344.508-298.666-384z' })
  );
};

MdVolumeUp.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdVolumeUp.propTypes = {
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

exports.default = MdVolumeUp;
module.exports = exports['default'];
//# sourceMappingURL=MdVolumeUp.js.map