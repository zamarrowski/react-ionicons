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

var IosSnowOutline = function IosSnowOutline(props) {
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
    _react2.default.createElement('path', { d: 'M863.4 696.8l-75.2-43.8c26.2-33.8 64.2-49.6 64.8-49.8 8.6-3.4 13.2-13.4 10.4-22.2s-12.2-13.2-20.8-9.6c-2.2 1-50.2 20.6-82.6 65l-213.6-124.4 213.4-124.4c32.2 44.4 80.4 64.2 82.6 65 8.6 3.4 18-0.8 20.8-9.6s-1.8-18.8-10.4-22.2c-0.4-0.2-38.6-15.8-64.8-49.8l75.2-43.8c8.2-4.8 11-15.4 6.2-23.8s-15.2-11.2-23.6-6.4l-75.2 43.8c-15.8-39.6-10.4-81-10.2-81.4 1.4-9.2-4.8-18.4-13.8-20.2s-17.4 4.2-18.6 13.4c-0.4 2.4-7 54.2 15 104.8l-213 124.4v-248c54-6 95-38 97-39.6 7.4-5.8 8-16 2-23-6.2-7-16.8-7.8-24-2-0.4 0.2-32.8 25.8-74.8 31.6v-87.4c0-9.6-8.4-17.4-18-17.4s-18 7.8-18 17.4v87.4c-42-6-74.4-31.4-74.8-31.6-7.4-5.8-18-4.8-24.2 2-6.2 7-5.4 17.2 1.8 23 1.8 1.4 43 33.6 97 39.6v248.2l-213-124.4c22-50.4 15-102.4 14.8-104.8-1.4-9.2-9.6-15.2-18.6-13.4s-15.2 11-13.8 20.2c0 0.4 5.6 41.6-10.2 81.4l-75.2-43.8c-8.2-4.8-18.8-2-23.6 6.4s-2 19 6.4 23.8l75.2 43.8c-26 33.6-64.2 49.6-64.6 49.8-8.6 3.4-13.2 13.4-10.4 22.2s12.2 13.2 20.8 9.6c2.2-0.8 50.2-20.6 82.6-65l213.2 124.2-213.4 124.4c-32.2-44.4-80.4-64.2-82.6-65-8.6-3.4-18 0.8-20.8 9.6s1.8 18.8 10.4 22.2c0.4 0.2 38.6 16 64.6 49.8l-75.2 43.8c-8.2 4.8-11 15.4-6.2 23.8s15.2 11.2 23.6 6.4l75.2-43.8c16 39.8 10.4 81 10.2 81.4-1.4 9.2 4.8 18.4 13.8 20.2s17.4-4.2 18.6-13.4c0.4-2.4 7-54.2-15-104.8l213.2-124.4v248.2c-54 6-95 38-97 39.6-7.4 5.8-8 16-2 23 6.2 7 16.8 7.8 24 2 0.4-0.2 32.8-25.6 74.8-31.6v87.4c0 9.6 8.4 17.4 18 17.4s18-7.8 18-17.4v-87.4c42 6 74.4 31.4 74.8 31.6 7.4 5.8 18 4.8 24.2-2 6.2-7 5.4-17.2-1.8-23-1.8-1.4-43-33.6-97-39.6v-248.2l213 124.4c-22 50.4-15 102.4-14.8 104.8 1.4 9.2 9.6 15.2 18.6 13.4s15.2-11 13.8-20.2c0-0.4-5.6-41.8 10.2-81.4l75.2 43.8c8.2 4.8 18.8 2 23.6-6.4s2-19-6.2-23.8z' })
  );
};

IosSnowOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosSnowOutline.propTypes = {
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

exports.default = IosSnowOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosSnowOutline.js.map