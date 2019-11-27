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

var MdThumbsDown = function MdThumbsDown(props) {
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
    _react2.default.createElement('path', { d: 'M628 128h-344c-31.4 0-57.2 19.2-68.4 46.8l-114.4 270.8c-3.4 8.8-5.2 18-5.2 28v77.2c0 42.2 34 89.2 75.6 89.2h238.6l-36 163-1.2 12c0 15.8 6.4 30.2 16.6 40.6l40 40.2 252.4-254.4c13.6-13.8 22-33 22-54.2v-384c0-42.2-34.4-75.2-76-75.2z M800 128h128v448h-128v-448z' })
  );
};

MdThumbsDown.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdThumbsDown.propTypes = {
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

exports.default = MdThumbsDown;
module.exports = exports['default'];
//# sourceMappingURL=MdThumbsDown.js.map