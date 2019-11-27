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

var IosWatch = function IosWatch(props) {
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
    _react2.default.createElement('path', { d: 'M255.8 752c0-4 1.4-8 4.4-11 6.2-6.4 16.2-6.6 22.6-0.4 41.8 40 93.6 61.6 158.6 65.6 38 2.4 54.2 11.6 70 20.6 18.6 10.6 37.8 21.4 108.4 21.4 143.4 0 244-118.4 244-264v-112c0-49.4-6-97.8-32.2-139.6-25.6-40.8-53.8-74-96.6-95.8-7.8-4-11-13.6-7-21.6 4-7.8 13.6-11 21.6-7 48 24.4 80.4 61.6 109.2 107.2 29.6 47 37 101.2 37 156.6v112c0 163.2-115 296-276 296-78.8 0-102.8-13.6-124-25.6-14.4-8.2-25.6-14.6-56.4-16.4-72.8-4.6-131.2-28.8-178.6-74.4-3.2-3.2-5-7.4-5-11.6z M545.4 804c0-0.8 0-1.8 0.2-2.6 1.4-8.8 9.6-14.6 18.4-13.2 71 11.6 132.2-4.8 177-47.8 6.4-6.2 16.6-5.8 22.6 0.4 6.2 6.4 5.8 16.6-0.4 22.6-52.4 50.2-123 69.6-204.2 56.2-8-1.2-13.6-8-13.6-15.6z M128 584v-112c0-55.4 7.6-109.6 37-156.6 28.6-45.6 61.2-82.8 109.2-107.2 7.8-4 17.6-0.8 21.6 7s0.8 17.6-7 21.6c-42.8 21.8-71 55-96.6 95.8-26.4 41.6-32.4 90-32.4 139.4v112c0 69.6 18 140.2 77.6 193.8 60.6 54.8 142 86.2 223.2 86.2 8.8 0 16 7.2 16 16s-7.2 16-16 16c-89 0-178-34.4-244.6-94.4-66.2-59.8-88-139-88-217.6z M646.4 208c0 20.987-17.013 38-38 38s-38-17.013-38-38c0-20.987 17.013-38 38-38s38 17.013 38 38z M750.6 258c-3.8 1.2-7.8 2-12.2 2-21 0-38-17-38-38s17-38 38-38c11.4 0 21.4 4.8 28.4 12.6-6-38.8-39.6-68.6-80-68.6h-350c-39.2 0-72.2 28-79.6 65.4 6.8-6 15.6-9.4 25.2-9.4 21 0 38 17 38 38s-17 38-38 38c-3 0-5.8-0.4-8.6-1 14.8 17.8 37.6 29 63 29h350c25.8 0 49.2-11.6 63.8-30zM554.4 208c0-29.8 24.2-54 54-54s54 24.2 54 54-24.2 54-54 54c-29.4 0-54-24.2-54-54z' })
  );
};

IosWatch.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosWatch.propTypes = {
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

exports.default = IosWatch;
module.exports = exports['default'];
//# sourceMappingURL=IosWatch.js.map