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

var IosCloudyNightOutline = function IosCloudyNightOutline(props) {
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
    _react2.default.createElement('path', { d: 'M553.2 590.8c-1 0-2.2-0.2-3.2-0.2-5.2 0-10.4 0-15.6 0.6-18.4-81.6-91.2-143.2-178.4-143.2-101 0-183 82-183 183.2 0 6.2 0.4 12.2 1 18.2-61.6 5.4-110 60.4-110 123.6 0 66.8 53.2 125 120 125h369.2c83.4 0 150.8-69.6 150.8-153s-67.6-154.2-150.8-154.2zM637 830c-22.6 22.8-52.4 36-83.8 36h-369.2c-23.2 0-45.2-10.2-61.8-27.8-16.6-17.4-26.2-41.6-26.2-65.6 0-22.8 8.4-44.8 23.8-62 15.2-17 35.4-27.4 57-29.4l32.2-2.8-3.2-32.2c-0.4-5-0.8-10.2-0.8-15.2 0-83.4 67.8-151.2 151-151.2 34.8 0 67.6 11.6 94.8 33.8 26.4 21.6 45 51.6 52.4 84.6l6.4 28.4 28.8-3.8c3.2-0.4 7.4-0.8 11.6-0.8h3.2c31.4 0 61.2 13 83.8 36.2s35.2 54 35.2 86c-0.2 32.2-12.6 63-35.2 85.8z M900 612c-5 0.2-10 0.4-15 0.4-82.8 0-160.8-31.6-219.4-88.8s-90.8-133.2-90.8-214.2c0-46 10.4-90.6 30.4-131 8.8-17.8 17.8-34.6 30-50.6h-0.6c-21.6 2.4-40.4 6.6-60.6 12.8-123.6 38-215.6 145.4-228.2 275.4 3.6-0.2 7-0.2 10.6-0.2 7.2 0 14.4 0.4 21.6 1.2 5.4-51.6 24.8-100.2 56.8-142.2 34.4-45.2 82.6-80.2 136.6-99.4-18.8 42.2-28.4 87.2-28.4 134 0 89.6 35.8 173.8 100.6 237 64.6 63 150.4 97.8 241.8 97.8 1.6 0 3.2 0 4.8 0-41.6 43.4-95.6 72.8-154.2 85.2 0.4 4.8 0.6 9.6 0.6 14.4 0 6.2-0.4 12.2-0.8 18.2 75-14 140.8-52.8 188.4-107.4 13.8-15.8 26-30.6 36.6-49-20.2 5-40.4 5.4-60.8 6.4z' })
  );
};

IosCloudyNightOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosCloudyNightOutline.propTypes = {
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

exports.default = IosCloudyNightOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosCloudyNightOutline.js.map