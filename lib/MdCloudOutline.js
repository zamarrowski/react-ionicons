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

var MdCloudOutline = function MdCloudOutline(props) {
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
    _react2.default.createElement('path', { d: 'M806.002 434.002c-28.008-137.998-148.006-242.002-294.002-242.002-115.996 0-215.998 65.996-265.994 162-120.002 12.004-214.006 113.996-214.006 238 0 131.992 108.008 240 240 240h520c110 0 200-90 200-200.002 0-105.994-81.994-191.998-185.998-197.996zM792 752h-520c-88.008 0-160-71.992-160-160 0-88 71.992-160 160-160h28.008c25.996-92 110-160 211.992-160 121.992 0 220 98 220 220v20h60c65.996 0 120 54.006 120 120 0 65.996-54.004 120-120 120z' })
  );
};

MdCloudOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdCloudOutline.propTypes = {
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

exports.default = MdCloudOutline;
module.exports = exports['default'];
//# sourceMappingURL=MdCloudOutline.js.map