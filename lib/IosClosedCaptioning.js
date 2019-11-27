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

var IosClosedCaptioning = function IosClosedCaptioning(props) {
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
    _react2.default.createElement('path', { d: 'M64 192v640h896v-640h-896zM860 511.6c0 41.8-2.2 74.4-5.6 123.8l-1 15.6c-3.8 55.6-32.8 85.2-89 90.4-64.4 6-153.8 6.6-224.6 6.6-9.4 0-18.6 0-27.8 0v0c-9.2 0-18.4 0-27.8 0-70.8 0-160.4-0.8-224.6-6.6-56-5.2-85.2-34.8-89-90.4l-1-15.4c-3.4-49.4-5.6-82-5.6-124 0-47 0.2-76.6 6.6-138.8 5.8-56.2 34-85 89.2-90.6 62.4-6.4 172.2-6.4 252.2-6.4 80.2 0 190 0 252.4 6.4 55 5.6 83.4 34.4 89.2 90.6 6.2 62.2 6.6 91.8 6.4 138.8z M675.4 324.8c-21.8 0-41.8 2.8-60 8.6s-34 15.8-47.2 30.2c-13.2 14.4-23.4 33.6-30.8 57.8-7.2 24.2-11 54.6-11 91.4 0 36 3 66 8.8 90.2 6 24.2 14.6 43.4 26.2 57.8s26.2 24.4 43.6 30c17.6 5.6 38.2 8.4 61.8 8.4 50 0 86-12.8 107.6-37.4s32.4-60.6 32.4-107.8h-92.2c0 0 0 5 0 6.8v1.4c0 32.6-20.2 51.8-47.2 51.8s-45.2-21.6-47.8-51.8c0 0-2.4-15.8-2.4-47.8s2.8-52 2.8-52c4.8-34 21.4-51.8 48.4-51.8 26.8 0 48.2 23.2 48.2 58.4 0 0.2 0 1 0 1h90.2c0-43.8-11-83.2-33.2-108-21.6-24.8-54.4-37.2-98.2-37.2v0z M365.6 324.8c-21.8 0-41.8 2.8-60 8.6s-34 15.8-47.2 30.2c-13.2 14.4-23.4 33.6-30.8 57.8-7.2 24.2-11 54.6-11 91.4 0 36 3 66 8.8 90.2 6 24.2 14.6 43.4 26.2 57.8s26.2 24.4 43.6 30c17.6 5.6 38.2 8.4 61.8 8.4 50 0 86-12.8 107.6-37.4s32.4-60.6 32.4-107.8h-92.2c0 0 0 5 0 6.8v1.4c0 32.6-20.2 51.8-47.2 51.8s-45.2-21.6-47.8-51.8c0 0-2.4-15.8-2.4-47.8s2.8-52 2.8-52c4.8-34 21.4-51.8 48.4-51.8 26.8 0 48.2 23.2 48.2 58.4 0 0.2 0 1 0 1h90.2c0-43.8-11-83.2-33.2-108-21.6-24.8-54.4-37.2-98.2-37.2v0z' })
  );
};

IosClosedCaptioning.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosClosedCaptioning.propTypes = {
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

exports.default = IosClosedCaptioning;
module.exports = exports['default'];
//# sourceMappingURL=IosClosedCaptioning.js.map