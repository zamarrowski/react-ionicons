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

var LogoAndroid = function LogoAndroid(props) {
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
    _react2.default.createElement('path', { d: 'M288 536.8v179.2c0 13.8 9 28 22.8 28h57.2v104c0 26.6 21.4 48 48 48s48-21.4 48-48v-104h98v104c0 15 6.8 28.4 17.6 37.2 7.8 6.8 18.2 10.8 29.4 10.8 0.2 0 0.4 0 0.6 0s0.2 0 0.4 0c26.6 0 48-21.4 48-48v-104h55.2c14 0 22.8-14.2 22.8-27.8v-332.2h-448v152.8z M816 352c-26.6 0-48 21.4-48 48v192c0 26.6 21.4 48 48 48s48-21.4 48-48v-192c0-26.6-21.4-48-48-48z M208 352c-26.6 0-48 21.4-48 48v192c0 26.6 21.4 48 48 48s48-21.4 48-48v-192c0-26.6-21.4-48-48-48z M622.4 178.2l37-43.8c0.8-1-0.4-3.2-2.6-5-2.2-1.6-4.8-2-5.4-0.8l-38.4 45.6c-27.2-10.8-60.4-17.6-101.2-17.6-41-0.2-74.4 6.4-101.6 17l-38-44.8c-0.8-1-3.2-0.8-5.4 0.8s-3.4 3.6-2.6 5l36.6 43.2c-96.4 41.8-110.8 144.4-112.8 174.4h447.2c-1.8-30.2-16-131.4-112.8-174zM413.6 277.8c-14.8 0-27-12-27-26.6s12-26.6 27-26.6c14.8 0 27 12 27 26.6s-12 26.6-27 26.6zM610.4 277.8c-14.8 0-27-12-27-26.6s12-26.6 27-26.6c14.8 0 27 12 27 26.6s-12.2 26.6-27 26.6z' })
  );
};

LogoAndroid.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

LogoAndroid.propTypes = {
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

exports.default = LogoAndroid;
module.exports = exports['default'];
//# sourceMappingURL=LogoAndroid.js.map