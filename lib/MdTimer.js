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

var MdTimer = function MdTimer(props) {
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
    _react2.default.createElement('path', { d: 'M465.8 743.2c0 25.4 20.8 46.2 46.2 46.2s46.2-20.8 46.2-46.2c0-25.4-20.8-46.2-46.2-46.2s-46.2 20.6-46.2 46.2zM465.8 96v184.8h92.4v-88.6c156.6 22.6 277.4 156.6 277.4 319.8 0 178.8-144.6 323.6-323.6 323.6s-323.6-144.8-323.6-323.6c0-77.6 27.2-148.8 73-204.4l250.6 250.6 65.2-65.2-314.4-314.2v1c-101.2 75.6-166.8 195.8-166.8 332.2 0 229.8 185.8 416 416 416 229.8 0 416-186.2 416-416s-186.2-416-416-416h-46.2zM789.4 512c0-25.4-20.8-46.2-46.2-46.2s-46.2 20.8-46.2 46.2 20.8 46.2 46.2 46.2c25.4 0 46.2-20.8 46.2-46.2zM234.6 512c0 25.4 20.8 46.2 46.2 46.2s46.2-20.8 46.2-46.2-20.8-46.2-46.2-46.2-46.2 20.8-46.2 46.2z' })
  );
};

MdTimer.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdTimer.propTypes = {
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

exports.default = MdTimer;
module.exports = exports['default'];
//# sourceMappingURL=MdTimer.js.map