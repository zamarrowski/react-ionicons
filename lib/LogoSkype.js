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

var LogoSkype = function LogoSkype(props) {
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
    _react2.default.createElement('path', { d: 'M873.8 593.6c5.6-25 8.4-50.8 8.4-77.4 0-199.4-164-361.2-366.4-361.2-21.4 0-42.2 1.8-62.6 5.2-32.6-20.4-71.2-32.2-112.8-32.2-117.2 0-212.4 93.8-212.4 209.4 0 38.8 10.6 75 29.2 106-4.8 23.4-7.4 47.8-7.4 72.6 0 199.6 164 361.2 366.2 361.2 23 0 45.4-2 67-6 30 15.8 64.2 24.8 100.4 24.8 117.4 0 212.4-93.8 212.4-209.4 0.2-33.4-7.8-65-22-93zM703.8 688.6c-17 23.6-42 42.4-74.4 55.6-32.2 13.2-70.6 19.8-114.6 19.8-52.6 0-96.6-9.2-131.2-27.2-24.6-13.2-44.8-30.8-60.4-52.8s-23.4-44-23.4-65.2c0-13.2 5.2-24.6 15.2-34.2 10-9.2 23-14 38.2-14 12.6 0 23.4 3.6 32.2 11 8.4 7 15.6 17.4 21.4 31 6.6 14.6 13.6 27 21.2 36.8 7.2 9.4 17.4 17.2 30.6 23.4 13.4 6.2 31.2 9.4 53.2 9.4 30.2 0 55-6.4 73.6-19 18.4-12.2 27.2-27 27.2-45 0-14.2-4.6-25.4-14.2-34.2-10-9.2-23-16.4-39.2-21.2-16.6-5.2-39.2-10.6-67.2-16.4-38-8-70.2-17.6-96-28.4-26.2-11-47.4-26.4-63-45.4-15.8-19.4-23.6-43.8-23.6-72.4 0-27.4 8.4-51.8 24.8-73 16.4-21 40.2-37.4 71.2-48.6 30.4-11.2 66.6-16.8 107.4-16.8 32.8 0 61.4 3.8 85.4 11 24.2 7.4 44.4 17.4 60.6 29.8 16 12.4 28 25.6 35.6 39.4 7.6 14 11.4 27.8 11.4 41.2 0 12.8-5 24.6-15 34.8s-22.6 15.6-37.6 15.6c-13.6 0-24.2-3.2-31.6-9.6-6.8-6-14-15.2-21.8-28.6-9.2-17-20.2-30.6-32.8-40.2-12.4-9.2-32.8-14-61.2-14-26.2 0-47.6 5.2-63.4 15.4-15.2 9.8-22.6 21.2-22.6 34.6 0 8.2 2.4 15 7.4 21 5.2 6.2 12.4 11.8 21.8 16.4 9.6 4.8 19.6 8.6 29.4 11.2 10.2 2.8 27.2 7 50.6 12.2 29.8 6.2 57 13.4 81 20.8 24.4 7.8 45.4 17.2 62.6 28.2 17.6 11.2 31.4 25.8 41.4 43 9.8 17.2 14.8 38.8 14.8 63.6 0.8 30.2-7.8 57.4-25 81z' })
  );
};

LogoSkype.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

LogoSkype.propTypes = {
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

exports.default = LogoSkype;
module.exports = exports['default'];
//# sourceMappingURL=LogoSkype.js.map