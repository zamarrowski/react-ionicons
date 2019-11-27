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

var MdClosedCaptioning = function MdClosedCaptioning(props) {
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
    _react2.default.createElement('path', { d: 'M64 192v640h896v-640h-896zM876 511.6c0 46.8-2.8 82.4-6.6 140.4s-33.6 98.8-103.4 105.2c-69.8 6.4-167.6 7-254 6.8-85.8 0.2-184-0.2-254-6.8-69.8-6.4-99.4-47.2-103.4-105.2s-6.6-93.6-6.6-140.4c0-46.8 0.2-77.2 6.6-140.4s40.2-98.4 103.4-104.8 172-6.4 254-6.4 190.8 0 254 6.4c63.2 6.4 97 41.8 103.4 104.8 6.4 63.2 6.6 93.8 6.6 140.4z M715 560.8v1.4c0 32.6-20.2 51.8-47.2 51.8s-45.2-21.6-47.8-51.8c0 0-2.4-15.8-2.4-47.8s2.8-52 2.8-52c4.8-34 21.4-51.8 48.4-51.8 26.8 0 48.2 23.2 48.2 58.4 0 0.2 0 1 0 1h90.2c0-43.8-11-83.2-33.2-108-22-24.8-55-37.2-98.6-37.2-21.8 0-41.8 2.8-60 8.6s-34 15.8-47.2 30.2c-13.2 14.4-23.4 33.6-30.8 57.8-7.2 24.2-11 54.6-11 91.4 0 36 3 66 8.8 90.2 6 24.2 14.6 43.4 26.2 57.8s26.2 24.4 43.6 30c17.6 5.6 38.2 8.4 61.8 8.4 50 0 86-12.8 107.6-37.4s32.4-60.6 32.4-107.8h-92.2c0.4 0 0.4 5 0.4 6.8z M405.2 560.8v1.4c0 32.6-20.2 51.8-47.2 51.8s-45.2-21.6-47.8-51.8c0 0-2.4-15.8-2.4-47.8s2.8-52 2.8-52c4.8-34 21.4-51.8 48.4-51.8 26.8 0 48.2 23.2 48.2 58.4 0 0.2 0 1 0 1h90.2c0-43.8-11-83.2-33.2-108-22-24.8-55-37.2-98.6-37.2-21.8 0-41.8 2.8-60 8.6s-34 15.8-47.2 30.2c-13.2 14.4-23.4 33.6-30.8 57.8-7.2 24.2-11 54.6-11 91.4 0 36 3 66 8.8 90.2 6 24.2 14.6 43.4 26.2 57.8s26.2 24.4 43.6 30c17.6 5.6 38.2 8.4 61.8 8.4 50 0 86-12.8 107.6-37.4s32.4-60.6 32.4-107.8h-92.2c0.4 0 0.4 5 0.4 6.8z' })
  );
};

MdClosedCaptioning.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdClosedCaptioning.propTypes = {
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

exports.default = MdClosedCaptioning;
module.exports = exports['default'];
//# sourceMappingURL=MdClosedCaptioning.js.map