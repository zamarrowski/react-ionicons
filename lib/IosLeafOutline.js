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

var IosLeafOutline = function IosLeafOutline(props) {
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
    _react2.default.createElement('path', { d: 'M907.8 765.4c-103.6-16-109.8-25.4-109.8-25.4 31.2-148-46.4-308.2-154.2-397.2-143.6-118.4-361.8-32.4-531.8-212.4-1.6-1.6-3-2.4-4.4-2.4-33.2 0-4 481 200.6 667.8 85.6 78.4 179.8 100.2 255.4 100.2 61.6 0 111-14.6 133.6-25 45.6-21.2 77.4-67.8 77.4-67.8 74 23.2 114.6 24.4 122.6 24.4 1 0 1.4 0 1.4 0 0.8 0.2 1.6 0.2 2.4 0.2 27.6-0 40.6-57.2 6.8-62.4zM683.8 842c-17.8 8.2-63 22-120 22-39.2 0-77.4-6.4-113.4-19-43.8-15.2-84.2-39.8-120.4-72.8-40.8-37.2-77.2-90.4-108-158-26.6-58-48.6-125-65.2-199-13.6-60-23-123.6-26.8-178.8-1.2-19-1.8-34.6-1.8-47.2 92.8 76.4 195.6 92.8 287.6 107.6 77.8 12.4 151.2 24.2 207.8 70.8 51 42.2 93.4 99.4 119.2 161.2 28 66.8 31.8 133.8 25.4 201.4-360-126-529-341-529-341s145 250.4 504.6 401.6c-10.2 13-26.6 35.6-60 51.2z' })
  );
};

IosLeafOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosLeafOutline.propTypes = {
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

exports.default = IosLeafOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosLeafOutline.js.map