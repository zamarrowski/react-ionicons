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

var IosMedalOutline = function IosMedalOutline(props) {
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
    _react2.default.createElement('path', { d: 'M704 510.8c31.2 41.4 48 91.4 48 144.2 0 64.2-25 124.4-70.2 169.8s-105.6 70.2-169.8 70.2-124.4-25-169.8-70.2-70.2-105.6-70.2-169.8c0-52.8 17-103 48.2-144.4l-12.4-3.4-20.4-5.8c-30 43.6-47.4 96.6-47.4 153.6 0 150.2 121.8 273 272 273s272-122.8 272-273c0-56.8-17.4-109.6-47.2-153.2l-32.8 9z M597.4 540.2l-43.4 12c41 16.6 70 56.8 70 103.8 0 61.8-50.2 112-112 112s-112-50.2-112-112c0-47 29-87.2 69.8-103.8l-43.2-12c-35.6 26.2-58.6 68.4-58.6 115.8 0 79.4 64.6 144 144 144s144-64.6 144-144c0-47.4-23-89.6-58.6-115.8z M96 96v320l416 116 416-116v-320h-832zM896 128v64h-768v-64h768zM128 392v-168h224v232l-224-64zM512 497.4l-128-34v-239.4h256v239.4l-128 34zM672 456v-232h224v168l-224 64z' })
  );
};

IosMedalOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosMedalOutline.propTypes = {
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

exports.default = IosMedalOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosMedalOutline.js.map