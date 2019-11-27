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

var IosWifiOutline = function IosWifiOutline(props) {
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
    _react2.default.createElement('path', { d: 'M512 224c144.6 0 293 58.2 402.8 156.8l-30.8 32.6c-45.8-40.8-97.4-73.6-154-97.4-69-29.2-142.4-44-218-44s-149 14.8-218 44c-56.6 24-108.2 56.6-154 97.4l-30.8-32.6c109.8-98.6 258.2-156.8 402.8-156.8zM512 192c-166 0-332.2 71.6-448 187.4l74.6 79.2c48.6-48.6 105-86.6 167.8-113.2 65.2-27.4 134.2-41.4 205.6-41.4s140.4 14 205.4 41.4c62.8 26.6 119.4 64.6 167.8 113.2l74.6-79.2c-115.6-115.8-281.8-187.4-447.8-187.4v0z M512 450c91.2 0 177.8 31.8 246.8 89.8l-34 34c-59.8-49.2-134.4-76-212.8-76s-153 26.8-212.8 76l-34-34c69-58 155.6-89.8 246.8-89.8zM512 418c-114.4 0-218 46.2-293.2 120.8l79.2 79.2c57.4-56.8 133.2-88 214-88s156.6 31.2 214 88l79.2-79.2c-75.2-74.6-178.8-120.8-293.2-120.8v0z M512 674c30.8 0 59.8 10.8 82.6 30.2l-82.6 82.6-82.6-82.6c22.8-19.4 51.8-30.2 82.6-30.2zM512 642c-51.8 0-97.8 24.6-127.2 62.8l127.2 127.2 127.2-127.2c-29.4-38.2-75.4-62.8-127.2-62.8v0z' })
  );
};

IosWifiOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosWifiOutline.propTypes = {
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

exports.default = IosWifiOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosWifiOutline.js.map