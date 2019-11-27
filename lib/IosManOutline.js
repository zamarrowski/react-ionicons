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

var IosManOutline = function IosManOutline(props) {
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
    _react2.default.createElement('path', { d: 'M511.4 213.2c0 0 0 0 0 0h-0.4c-50 0-91-40.6-91-90.6s40.8-90.6 91-90.6 91 40.6 91 90.6c0 24.2-9.4 47-26.6 64-17 17.2-39.8 26.6-64 26.6zM511 64c-32.4 0-58.8 26.2-58.8 58.6s26.4 58.6 58.8 58.6h0.4c0 0 0 0 0 0 15.6 0 30.4-6 41.4-17.2 11-11 17.2-25.8 17.2-41.4-0.2-32.4-26.6-58.6-59-58.6z M442.4 992c-28.8 0-58-21-58-60.8l2-555.2h-12v210c0 18.6-8 30.2-14.8 36.6-8.6 8.2-20.2 12.8-32.4 12.8s-23.8-4.6-32.4-12.8c-6.8-6.4-14.8-17.8-14.8-36.6v-243.2c0-27.6 10.8-55.6 29.6-76.8 20.8-23.2 49.2-36 80-36h244.6c30.8 0 59.2 12.8 80 36.2 18.8 21.2 29.6 49 29.6 76.6v243.2c0 14.6-5.4 27.6-15.2 36.6-8.8 8-20.6 12.4-33 12.4s-24.2-4.4-33-12.4c-9.8-9-15.2-22-15.2-36.6v-210h-10v555.2c0 39.4-30.8 60.8-59.6 60.8-26.8 0-56.6-18.6-58.8-59.6 0-0.2 0-0.6 0-0.8v-281.6h-16v281.2c0 0.2 0 0.4 0 0.6-1.4 39.4-31.6 60.2-60.6 60.2zM358.4 344h44.2c4.2 0 8.4 1.6 11.4 4.8s4.8 7 4.6 11.4l-2 571.2c0 21.2 13.4 28.8 25.8 28.8 13.6 0 27.6-9 28.4-29.2v-297c0-8.8 7.2-16 16-16h48.2c8.8 0 16 7.2 16 16v297c1.4 21.4 14.6 29 26.8 29 13.2 0 27.4-9 27.4-28.8v-571.2c0-8.8 7.2-16 16-16h42.2c8.8 0 16 7.2 16 16v226c0 16.2 13.4 17 16 17s16-0.8 16-17v-243.2c0-39-31.2-80.8-77.6-80.8h-244.2c-37.2 0-77.6 30.8-77.6 80.8v243.2c0 16.4 12.6 17.2 15 17.2s15-0.8 15-17.2v-226c0.2-8.8 7.4-16 16.4-16z' })
  );
};

IosManOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosManOutline.propTypes = {
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

exports.default = IosManOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosManOutline.js.map