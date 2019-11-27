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

var IosTransgender = function IosTransgender(props) {
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
    _react2.default.createElement('path', { d: 'M854.6 832l68.6-68.6c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-68.6 68.6-54.6-54.6c34.4-51 54.6-112.6 54.6-178.8 0-98.8-44.8-187.2-115.2-246l179.2-178v152c0 8.8 7.2 16 16 16s16-7.2 16-16v-192c0-8.8-7.2-16-16-16h-192c-8.8 0-16 7.2-16 16s7.2 16 16 16h152l-181.4 182.4c-51-34.4-112.4-54.4-178.6-54.4s-127.6 20-178.6 54.4l-54.4-54.8 66.4-66.4c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-66.4 66.4-104.4-105h152c8.8 0 16-7.2 16-16s-7.2-16-16-16h-192c-8.8 0-16 7.2-16 16v192c0 8.8 7.2 16 16 16s16-7.2 16-16v-152l105 104.4-70.4 70.4c-6.2 6.2-6.2 16.4 0 22.6 3.2 3.2 7.2 4.6 11.4 4.6s8.2-1.6 11.4-4.6l70.4-70.4 51.6 51.2c-70.6 58.6-115.4 147-115.4 245.8 0 176.8 143.2 320 320 320 98.8 0 187.4-44.8 246-115.4l51.4 51.4-68.6 68.6c-6.2 6.2-6.2 16.4 0 22.6 3.2 3.2 7.2 4.6 11.4 4.6s8.2-1.6 11.4-4.6l68.6-68.6 68.6 68.6c3.2 3.2 7.2 4.6 11.4 4.6s8.2-1.6 11.4-4.6c6.2-6.2 6.2-16.4 0-22.6l-69-68.6zM715.6 779.6c-54.4 54.4-126.6 84.4-203.6 84.4s-149.2-30-203.6-84.4c-54.4-54.4-84.4-126.6-84.4-203.6s30-149.2 84.4-203.6c54.4-54.4 126.6-84.4 203.6-84.4s149.2 30 203.6 84.4c54.4 54.4 84.4 126.6 84.4 203.6s-30 149.2-84.4 203.6z' })
  );
};

IosTransgender.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosTransgender.propTypes = {
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

exports.default = IosTransgender;
module.exports = exports['default'];
//# sourceMappingURL=IosTransgender.js.map