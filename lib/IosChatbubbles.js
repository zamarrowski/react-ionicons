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

var IosChatbubbles = function IosChatbubbles(props) {
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
    _react2.default.createElement('path', { d: 'M862 641.2c0-8.8 2.4-17.2 6.6-24.4 1.2-2.2 2.8-4.2 4.2-6.2 34.8-52 55.2-114.2 55.2-180.6 0.6-184.4-155-334-347.4-334-167.8 0-307.8 114.2-340.6 265.8-4.8 22.2-7.4 44.8-7.4 68.4 0 184.6 149.6 338.2 342 338.2 30.6 0 71.8-9.2 94.4-15.4s45-14.4 50.8-16.6 12.2-3.4 18.6-3.4c7.2 0 14 1.4 20.2 4l113.4 40.2c0 0 4.8 2 7.8 2 8.8 0 16-7 16-16 0-2-1-5.4-1-5.4l-32.8-116.6z M622.4 806.8c-0.6 1-0.2 1.4 1.4 0.8-0.2-0.6-0.6-0.8-1.4-0.8z M637 785c-7.2 2-16.4 4.2-26.4 6.4-21 4.4-47.8 9-68 9-192.4 0-342-153.6-342-338.2 0-13.2 1.4-30 3-42.8 1.2-8.6 2.6-17.2 4.6-25.6 2-9 4.4-18 7-26.8l-16 14.2c-65.6 57.2-103.2 138.8-103.2 223.8 0 58.6 17 115 49.6 164 4.6 7 7.2 12.4 6.4 16s-23.8 124-23.8 124c-1.2 5.8 1 11.6 5.4 15.4 3 2.4 6.6 3.6 10.2 3.6 2 0 4-0.4 5.8-1.2l112.2-44.2c3.6-1.4 7.4-2.2 11.4-2.2 0 0 4.8-0.4 12.6 2.6 37.8 14.8 79.6 24 121.4 24 93.2 0 180.8-40.2 240.2-110.2 0 0 6.4-8.8 13.8-19.2-7.4 2.6-15.8 5.2-24.2 7.4z' })
  );
};

IosChatbubbles.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosChatbubbles.propTypes = {
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

exports.default = IosChatbubbles;
module.exports = exports['default'];
//# sourceMappingURL=IosChatbubbles.js.map