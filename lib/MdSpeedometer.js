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

var MdSpeedometer = function MdSpeedometer(props) {
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
    _react2.default.createElement('path', { d: 'M256 832h512v96h-512v-96z M512 576c35.4 0 64-28.6 64-64s-28.6-64-64-64c-6 0-12 0.8-17.6 2.4l-133.4-97.4-8 7 97.8 133.4c-1.8 5.8-2.8 12-2.8 18.6 0 35.4 28.6 64 64 64z M512 96c-229.8 0-416 186.2-416 416 0 96.6 33 185.4 88.2 256h117.6l52.2-52.2-45.8-45.8-44.2 44c-39.8-48.6-64.2-108-70.4-170h62.4v-64h-62.4c6.2-62 30.6-121.4 70.4-170l44.2 44 45.8-45.8-44-44.2c48.6-39.8 108-64.2 170-70.4v62.4h64v-62.4c62 6.2 121.4 30.6 170 70.4l-44 44.2 45.8 45.8 44.2-44c39.8 48.6 64.2 108 70.4 170h-62.4v64h62.4c-6.2 62-30.6 121.4-70.4 170l-44.2-44-45.8 45.8 52.2 52.2h117.6c55.2-70.6 88.2-159.4 88.2-256-0-229.8-186.2-416-416-416z' })
  );
};

MdSpeedometer.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdSpeedometer.propTypes = {
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

exports.default = MdSpeedometer;
module.exports = exports['default'];
//# sourceMappingURL=MdSpeedometer.js.map