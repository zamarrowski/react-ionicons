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

var IosShirtOutline = function IosShirtOutline(props) {
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
    _react2.default.createElement('path', { d: 'M745 185.2c-41-29.4-81-57.4-125-57.4s-44 16-108 16-64-16-108-16-84 28-125 57.4c-63.2 45.4-183 172.8-183 172.8l160 186.4v351.6h512v-350.8l160-187.4c0-0-119.8-127.2-183-172.6zM426.2 161.6c19.8 0 50.8 14.6 85.8 14.6s66.2-14.6 85.8-14.6c13.8 0 22.2 7.2 22.2 32 0 46.6-48.4 88-108 88s-108-42.6-108-88c0-24.6 8.2-32 22.2-32zM768 400.2c0-8.8-7.2-16-16-16s-16 7.2-16 16v463.8h-448v-463.8c0-8.8-7.2-16-16-16s-16 7.2-16 16v98.4c-27.2-32-102.8-121.8-117.2-139.2 36-37.4 113.8-115.8 159-148.2 25.8-18.6 52.4-37.6 78.4-46.4-2.8 8.2-4.2 17.8-4.2 29 0 31.4 15.8 62.6 43.2 85.6 26.6 22.2 61 34.4 96.8 34.4 36 0 70.4-12 96.8-33.8 27.4-22.8 43.2-54.2 43.2-86.2 0-11.2-1.4-20.8-4.2-29 26 8.8 52.6 27.8 78.4 46.4 45.2 32.4 122.8 110.8 158.8 148.2-14.8 18-92.2 109.8-117.2 139.2v-98.4z' })
  );
};

IosShirtOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosShirtOutline.propTypes = {
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

exports.default = IosShirtOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosShirtOutline.js.map