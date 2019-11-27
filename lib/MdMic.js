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

var MdMic = function MdMic(props) {
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
    _react2.default.createElement('path', { d: 'M512 640c75.424 0 137.142-61.848 137.142-137.428v-301.144c0-75.58-61.718-137.428-137.142-137.428s-137.142 61.848-137.142 137.428v301.144c0 75.58 61.718 137.428 137.142 137.428zM754.278 489.096c0 137.428-116.564 233.63-242.278 233.63s-242.278-96.204-242.278-233.63h-77.722c0 155.746 123.438 286.306 274.288 306.93v163.974h91.426v-163.974c150.848-22.904 274.286-151.184 274.286-306.93h-77.722z' })
  );
};

MdMic.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdMic.propTypes = {
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

exports.default = MdMic;
module.exports = exports['default'];
//# sourceMappingURL=MdMic.js.map