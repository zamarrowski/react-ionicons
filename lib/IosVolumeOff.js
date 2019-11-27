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

var IosVolumeOff = function IosVolumeOff(props) {
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
    _react2.default.createElement('path', { d: 'M730 776c60-70.4 94-168 94-264s-31.2-184.6-83.8-256.2l-27.2 20.6c48.4 65.8 77.2 147.4 77.2 235.6s-28.8 169.8-77.2 235.6l17 28.4z M702.4 512c0-71.8-24-138-64-191.6l-27 20.2c35.8 48 57.2 107.2 57.2 171.6 0 42.8-9.6 83.4-26.6 120l20.2 34.6c25.6-46 40.2-98.6 40.2-154.8z M587.8 512c0-48-16.4-92-43.6-127.8l-27 19.6c16 20.8 27.4 45 33 71.4l36.2 61.6c1-8 1.4-16.4 1.4-24.8z M316.8 432h-116.8v160h116.8l139.2 112v-185.6l-79-134.8z M325.6 160l-29.6 17 402.4 687 29.6-17z' })
  );
};

IosVolumeOff.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosVolumeOff.propTypes = {
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

exports.default = IosVolumeOff;
module.exports = exports['default'];
//# sourceMappingURL=IosVolumeOff.js.map