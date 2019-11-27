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

var IosWalk = function IosWalk(props) {
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
    _react2.default.createElement('path', { d: 'M416 692.2l-118.8 83.8c-6.4 6-9 15.6-9.2 23.8s2 15 8.2 21.4c6.2 6.6 15.4 10.6 23.8 10.6 8 0 21.8-8.4 28-14.4l122-88.6c6.4-6 10-14.4 10-23.2l16-90-80-80v156.6z M608 192c0 35.346-28.654 64-64 64s-64-28.654-64-64c0-35.346 28.654-64 64-64s64 28.654 64 64z M677.8 860.4l-26.6-201.4c-0.8-6-3.4-11.6-7.2-16.2l-99.8-118v-213.4c0-19.4-26.4-23.4-32-23.4h-64c-5 0-9.8 1.2-14.4 3.4l-119 59.4c-17.4 9.2-26.8 26.6-26.8 49.2v112c0 17.6 14.4 32 32 32s32-14.4 32-32v-108.2l64-32v140.2l173 173 25.4 184c2.2 16 16 26.8 31.6 26.8h3.6c17.4-2.2 30.6-18 28.2-35.4z M726.2 471.6l-166.2-165v90.2l121.2 120.2c12.6 12.4 32.8 12.4 45.2-0.2 6.2-6.2 9.6-12.8 9.6-20.8-0-8.2-3.4-18-9.8-24.4z' })
  );
};

IosWalk.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosWalk.propTypes = {
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

exports.default = IosWalk;
module.exports = exports['default'];
//# sourceMappingURL=IosWalk.js.map