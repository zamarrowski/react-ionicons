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

var IosCloudyNight = function IosCloudyNight(props) {
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
    _react2.default.createElement('path', { d: 'M553.2 590.4c-5 0-9.8 0-14.6 0.4-1.4 0.2-2.8 0.2-4.2 0.4-8.6-38.2-29-71.8-57.2-97-2-1.8-4.2-3.6-6.2-5.4-2-1.6-4-3.2-6-4.6-2.8-2.2-5.8-4.2-8.8-6-5.6-3.6-11.2-7-17.2-10-2.2-1.2-4.6-2.2-6.8-3.4-23.2-10.8-49-16.8-76.2-16.8 0 0 0 0 0 0-2 0-3.8 0-5.8 0-0.2 0-0.4-0.2-0.6-0.2-1.8 0-3.8 0-5.6 0 0 0 0 0 0 0s0 0.2 0 0.2c-96 6.2-171 85.8-171 183 0 6.2 0.4 12.2 1 18.2-61.6 5.4-110 59.4-110 122.6 0 4.2 0.2 8.4 0.6 12.4 6 61.4 56.8 111.6 119.4 111.6h369.2c75.6 0 138.2-56.4 149.2-129.2 0 0 0 0 0 0v0 0c0.4-2.2 0.6-4.2 0.8-6.4 0-0.8 0.2-1.6 0.2-2.4 0.2-1.6 0.2-3.2 0.4-4.8 0-0.8 0-1.4 0.2-2.2 0.2-2.2 0.2-4.6 0.2-7 0-10.4-1-20.6-3-30.6-14.4-69.2-75.2-122.8-148-122.8z M900 612c-5 0.2-10 0.4-15 0.4-82.8 0-160.8-31.6-219.4-88.8s-90.8-133.2-90.8-214.2c0-46 10.4-90.6 30.4-131 8.8-17.8 17.8-34.6 30-50.6h-0.6c-21.6 2.4-40.4 6.6-60.6 12.8-123.6 38-215.6 145.4-228.2 275.4 3.6-0.2 7-0.2 10.6-0.2 49 0 97 17 135.2 48.2 30.4 24.8 53.6 57.6 67 94.2 47 1.2 91 20.8 124.6 55.2 34.4 35.2 53.2 81.6 53.2 130.4 0 6.2-0.4 12.2-0.8 18.2 75-14 140.8-52.8 188.4-107.4 13.8-15.8 26-30.6 36.6-49-20 5-40.2 5.4-60.6 6.4z' })
  );
};

IosCloudyNight.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosCloudyNight.propTypes = {
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

exports.default = IosCloudyNight;
module.exports = exports['default'];
//# sourceMappingURL=IosCloudyNight.js.map