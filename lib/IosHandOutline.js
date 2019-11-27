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

var IosHandOutline = function IosHandOutline(props) {
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
    _react2.default.createElement('path', { d: 'M546 127.8c21 0 38 17 38 37.8v265.2c0 8.8 7.2 16 16 16s16-7.2 16-16v-233.2c0-20.8 17-37.8 38-37.8s38 17 38 37.8v297c0 8.8 7.2 16 16 16s16-7.2 16-16v-201.2c0-20.8 17-37.8 38-37.8s38 17 38 37.8v428.6c0 101.6-57.2 174-140.4 174 0 0-60 0-103 0s-73.2-22.2-73.2-22.2c-77.8-46.8-169.6-177.2-204-216.8-35.8-41-70.2-76.4-48.4-98 11.2-10.6 23.4-15.6 36.2-15.6 24.4 0 52.4 17 83 44.4l49.8 43.4v-401.6c0-20.8 17-37.8 38-37.8s38 17 38 37.8v233.2c0 8.8 7.2 16 16 16s16-7.2 16-16v-297c-0-20.8 17-38 38-38zM545.8 96c-38.6 0-69.8 31.2-69.8 69.8v5.2c-10-7-24-11.2-38-11.2-38.6 0-70 31.4-70 69.8v331c-38-33.8-70.4-49-100.6-49-21.8 0-41.6 8.2-58.6 24.2l-0.8 0.4c-11.4 11.4-27.4 36.4-5 76.2 10.2 17.8 26.4 36.4 43.6 56 2.6 3 5.4 6.2 8.2 9.2 7 8 17.2 21 29.2 36 46.2 58.4 116.2 147.2 181.8 187 7.6 5.2 42.2 27.4 90.6 27.4h103c50 0 94.8-22 126.2-60.8 30.4-37 46.4-87.8 46.4-145.2v-428.6c0-38.4-31.4-69.8-70-69.8-14 0-26 4.2-38 11.2v-37.2c0-38.4-31.6-69.8-70.2-69.8-15.8 0-30.4 5.2-42.2 14.2-9.8-26.8-35.6-46-65.8-46v0z' })
  );
};

IosHandOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosHandOutline.propTypes = {
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

exports.default = IosHandOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosHandOutline.js.map