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

var IosThumbsDown = function IosThumbsDown(props) {
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
    _react2.default.createElement('path', { d: 'M128 309.2c0 29.8 15.8 48.6 26.2 61.2 2.8 3.2 6.4 7.6 7.6 10-0.6 1.2-2.4 3.8-3.8 5.6-8 10.4-20 26.4-20 62.2 0 32.8 19.4 48.8 30.8 58.2 1.8 1.6 4.2 3.4 5.8 5-22.2 32.2-13 72.4 7.4 95.4 21 23.6 40.6 26.4 92.8 23.4 36-2.2 111-13.8 160.4-21.6 20.2-3.2 37.8-6 43.2-6.4 25.4-2.6 30.4 0 32.8 9.8 1 4.2-3.8 13.8-9.8 26-8 16.2-19 38.4-29 71.6-20.2 66.4-18 142.4 5.4 184.4 11 19.8 29.6 34.2 52.6 34.2s40.6-4.8 49.8-15.8c6.8-8 10.6-23.2 18.4-53.6 6.2-24.8 14-61.8 24-84 15-33.2 79.4-90.2 114-120.8 8.2-7.2 15.2-13.4 20.2-18.2 17.4-16.2 35.2-42.2 51-65.4 10.8-15.6 20.8-30.4 27.4-37 14.2-14.2 33.2-21.8 44.6-21.8 8.8 0 16-7.2 16-16v-319.6c0-8.8-7.2-16-16-16-71.4 0-101.4-11.4-133.4-23.6-24.4-9.4-49.8-19-92.8-24.2-64.8-8-148.4-16.2-225.2-16.2-40.8 0-79.8 4-113.2 7.8-62 7.2-128.4 21.6-150.4 74-9.4 22.8 0 44.4 5.6 57.4 0.6 1.2 1 2.4 1.6 3.8-1.6 1.2-3.2 2.8-4.8 4-14.2 12.2-39.2 32.6-39.2 66.2z' })
  );
};

IosThumbsDown.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosThumbsDown.propTypes = {
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

exports.default = IosThumbsDown;
module.exports = exports['default'];
//# sourceMappingURL=IosThumbsDown.js.map