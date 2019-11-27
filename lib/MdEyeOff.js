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

var MdEyeOff = function MdEyeOff(props) {
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
    _react2.default.createElement('path', { d: 'M512.2 289.6c112.4 0 203.8 90.6 203.8 202.2 0 26.2-5.2 51-14.6 74l119 118c61.6-51 110-116.8 139.8-192-70.6-177.4-244.6-303.2-448.4-303.2-57 0-111.6 10.2-162.2 28.2l88 87.4c23.2-9.2 48.2-14.6 74.6-14.6zM104.8 179.4l111.8 110.8c-67.8 52-120.8 121.6-152.6 201.6 70.4 177.4 244.4 303.2 448.2 303.2 63.2 0 123.4-12.2 178.4-34l136.6 135 51.8-51.4-722.6-716.6-51.6 51.4zM330 402.8l63.2 62.6c-2 8.4-3.2 17.4-3.2 26.2 0 67 54.6 121.2 122.2 121.2 9 0 18-1.2 26.4-3.2l63.2 62.6c-27.2 13.4-57.4 21.4-89.6 21.4-112.4 0-203.8-90.6-203.8-202.2-0-31.6 8.2-61.4 21.6-88.6zM505.6 371.4l128.4 127.4 0.8-6.4c0-67-54.6-121.2-122.2-121.2l-7 0.2z' })
  );
};

MdEyeOff.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdEyeOff.propTypes = {
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

exports.default = MdEyeOff;
module.exports = exports['default'];
//# sourceMappingURL=MdEyeOff.js.map