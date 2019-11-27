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

var LogoYoutube = function LogoYoutube(props) {
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
    _react2.default.createElement('path', { d: 'M1017.2 297.6c0-90-66.2-162.4-148-162.4-110.8-5.2-223.8-7.2-339.2-7.2-6 0-12 0-18 0s-12 0-18 0c-115.2 0-228.4 2-339.2 7.2-81.6 0-147.8 72.8-147.8 162.8-5 71.2-7.2 142.4-7 213.6-0.2 71.2 2 142.4 6.8 213.8 0 90 66.2 163 147.8 163 116.4 5.4 235.8 7.8 357.2 7.6 121.6 0.4 240.6-2 357.2-7.6 81.8 0 148-73 148-163 4.8-71.4 7-142.6 6.8-214 0.4-71.2-1.8-142.4-6.6-213.8zM414 707.8v-393l290 196.4-290 196.6z' })
  );
};

LogoYoutube.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

LogoYoutube.propTypes = {
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

exports.default = LogoYoutube;
module.exports = exports['default'];
//# sourceMappingURL=LogoYoutube.js.map