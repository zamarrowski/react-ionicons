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

var MdAnalytics = function MdAnalytics(props) {
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
    _react2.default.createElement('path', { d: 'M758.8 356.6l-174.4 266.8c13.6 16.6 21.6 37.6 21.6 60.6 0 53-43 96-96 96s-96-43-96-96c0-6 0.6-12 1.6-17.8l-115.2-67c-17.2 16.6-40.6 26.8-66.6 26.8-17.2 0-33.2-4.6-47.2-12.4l-122.6 114.8v114.4c0 47 38.4 85.4 85.4 85.4h725.4c47 0 85.4-38.4 85.4-85.4v-425.2l-117.2-77.8c-16.2 12.6-36.6 20.2-58.8 20.2-8.8 0-17.4-1.2-25.4-3.4z M234 434c53 0 96 43 96 96 0 4.2-0.4 8.4-0.8 12.4l120.2 67.2c16.6-13.6 37.6-21.6 60.8-21.6 7.2 0 14.2 0.8 20.8 2.2l174.8-270.8c-11.2-15.6-17.8-34.8-17.8-55.6 0-53 43-96 96-96s96 43 96 96c0 7.8-1 15.4-2.6 22.6l82.6 55.2v-160.2c0-47-38.4-85.4-85.4-85.4h-725.2c-47 0-85.4 38.4-85.4 85.4v458.6l80-76.6c-3.8-10.4-6-21.6-6-33.4 0-53 43-96 96-96z' })
  );
};

MdAnalytics.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdAnalytics.propTypes = {
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

exports.default = MdAnalytics;
module.exports = exports['default'];
//# sourceMappingURL=MdAnalytics.js.map