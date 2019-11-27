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

var IosAttach = function IosAttach(props) {
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
    _react2.default.createElement('path', { d: 'M687 383c-9.4 0-17 7.6-17 17v314c0 38-15 76.4-41.8 104.8-27.4 28.8-66.6 45.2-104.2 45.2h-24c-79 0-148-72-148-150v-442.2c0-61.2 50.8-109.6 112-109.6s110 48.4 110 109.6v428.6c0 34.4-27.2 67.6-62 67.6s-64-33-64-67.6v-236.4c0-9.4-7.6-17-17-17s-17 7.6-17 17v236.4c0 57.6 44.6 99.6 98 99.6s96-40 96-99.6v-428.6c0-79.8-64.8-143.8-144.6-143.8s-143.4 64-143.4 143.8v442.2c0 46.4 19 93.6 54.6 128.6 35.4 34.8 79 53.4 125.4 53.4h24c96 0 180-82.8 180-182v-314c0-9.4-7.6-17-17-17z' })
  );
};

IosAttach.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosAttach.propTypes = {
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

exports.default = IosAttach;
module.exports = exports['default'];
//# sourceMappingURL=IosAttach.js.map