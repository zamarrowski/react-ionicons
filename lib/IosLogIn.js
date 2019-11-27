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

var IosLogIn = function IosLogIn(props) {
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
    _react2.default.createElement('path', { d: 'M274 160h572c44.2 0 80 35.8 80 80v544c0 44.2-35.8 80-80 80h-572c-44.2 0-80-35.8-80-80 0-8.8 7.2-16 16-16s16 7.2 16 16c0 26.4 21.6 48 48 48h572c26.4 0 48-21.6 48-48v-544c0-26.4-21.6-48-48-48h-572c-26.4 0-48 21.6-48 48 0 8.8-7.2 16-16 16s-16-7.2-16-16c0-44.2 35.8-80 80-80z M632.6 493.4l-169.2-168.8c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l151.2 148.8h-478c-8.8 0-16 7.2-16 16s7.2 16 16 16h478l-147.4 148.8c-6.2 6.2-6.2 16.4 0 22.6 3.2 3 7.2 4.6 11.4 4.6s8.2-1.4 11.4-4.6l165.2-164.8c12.6-12.6 12.6-28.8 0-41.2z' })
  );
};

IosLogIn.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosLogIn.propTypes = {
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

exports.default = IosLogIn;
module.exports = exports['default'];
//# sourceMappingURL=IosLogIn.js.map