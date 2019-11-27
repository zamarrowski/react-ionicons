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

var IosMicOffOutline = function IosMicOffOutline(props) {
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
    _react2.default.createElement('path', { d: 'M669.8 553c0 0.4 0 0.8-0.2 1.2 0-0.4 0-0.8 0.2-1.2z M670.4 544.8c0 0.4 0 0.8 0 1.4-0.2-0.6-0.2-1 0-1.4z M354 536.6v0.2c0 92.2 70.6 167.2 158.2 167.2 18.2 0 35.6-3.2 51.8-9.2l-0.2-0.2c-16.2 6-33.4 9.2-51.6 9.2-87.6-0.2-158.2-75-158.2-167.2z M512.2 671.6c-69.6 0-126.2-60.6-126.2-135v-146l-32-54.6v200.6c0 92.2 70.6 167.2 158.2 167.2 18.2 0 35.6-3.2 51.8-9.2l-16.6-28.2c-11.2 3.4-23 5.2-35.2 5.2z M670 536.8v-0.2c0 2.8 0 5.4-0.2 8.2 0.2-2.6 0.2-5.4 0.2-8z M670.2 546.2c-0.2 2.4-0.2 4.6-0.4 7 0.2-2.4 0.4-4.8 0.4-7z M640.4 634.8c15.8-23 26.2-50.6 29.2-80.4-3 29.6-13.4 57.2-29.2 80.4v0z M511.8 96c-59.2 0-110.6 34.2-137.8 84.8l20 33.8c18.2-50.8 64-87 117.8-87 69.6 0 126.2 60.6 126.2 135v273.6c0 24.2-5.8 47-16.4 66.6l18.6 31.4c15.8-23 26.4-50.6 29.4-80.4 0-0.4 0.2-0.8 0.2-1.2 0.2-2.2 0.4-4.6 0.6-7 0-0.4-0.2-0.8-0.2-1.4 0.2-2.8 0-5.4 0-8.2v-272.8c-0.2-92.2-70.8-167.2-158.4-167.2z M528.4 766.6l-16.4 1.2-16.8-1.2c-57.2-4.2-106.4-29.2-145.8-70.8s-61.4-95.6-61.4-152.2v-127.6h-32v127.6c0 134.4 108 245.2 242 254.8v97.6h-148v32h322v-32h-144v-97.4c30-2.2 58.2-9.4 84.6-21l-15.6-26.6c-22 8.6-45.2 13.8-68.6 15.6z M768 543.6v-127.6h-32v127.6c0 56.8-20.2 111-58.4 152.4-0.4 0.4-0.4 0.6-0.8 1l15.2 26.4c46.8-46.2 76-109.8 76-179.8z M267.6 64l-27.6 16.2 516.4 879.8 27.6-16.2z' })
  );
};

IosMicOffOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosMicOffOutline.propTypes = {
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

exports.default = IosMicOffOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosMicOffOutline.js.map