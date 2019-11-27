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

var LogoGithub = function LogoGithub(props) {
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
    _react2.default.createElement('path', { d: 'M512 64c-247.4 0-448 205.8-448 459.4 0 203 128.4 375 306.4 435.8 2.8 0.6 5.2 0.8 7.6 0.8 16.6 0 23-12.2 23-22.8 0-11-0.4-39.8-0.6-78.2-16.8 3.8-31.8 5.4-45.2 5.4-86.2 0-105.8-67-105.8-67-20.4-53-49.8-67.2-49.8-67.2-39-27.4-0.2-28.2 2.8-28.2 0.2 0 0.2 0 0.2 0 45 4 68.6 47.6 68.6 47.6 22.4 39.2 52.4 50.2 79.2 50.2 21 0 40-6.8 51.2-12 4-29.6 15.6-49.8 28.4-61.4-99.4-11.6-204-51-204-227 0-50.2 17.4-91.2 46-123.2-4.6-11.6-20-58.4 4.4-121.6 0 0 3.2-1 10-1 16.2 0 52.8 6.2 113.2 48.2 35.8-10.2 74-15.2 112.2-15.4 38 0.2 76.4 5.2 112.2 15.4 60.4-42 97-48.2 113.2-48.2 6.8 0 10 1 10 1 24.4 63.2 9 110 4.4 121.6 28.6 32.2 46 73.2 46 123.2 0 176.4-104.8 215.2-204.6 226.6 16 14.2 30.4 42.2 30.4 85 0 61.4-0.6 111-0.6 126 0 10.8 6.2 23 22.8 23 2.4 0 5.2-0.2 8-0.8 178.2-60.8 306.4-233 306.4-435.8 0-253.6-200.6-459.4-448-459.4z' })
  );
};

LogoGithub.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

LogoGithub.propTypes = {
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

exports.default = LogoGithub;
module.exports = exports['default'];
//# sourceMappingURL=LogoGithub.js.map