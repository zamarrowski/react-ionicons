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

var IosQuote = function IosQuote(props) {
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
    _react2.default.createElement('path', { d: 'M418 192h-160c-35.4 0-66 26.6-66 62v320c0 35.4 30.6 66 66 66h124c0 128-92 192-92 192h128c0 0 62-67.2 62-194 0-91.4 0-283.6 0-384 0-35.4-26.6-62-62-62v0z M770 192h-160c-35.4 0-66 26.6-66 62v320c0 35.4 30.6 66 66 66h124c0 128-92 192-92 192h128c0 0 62-67.2 62-194 0-91.4 0-283.6 0-384 0-35.4-26.6-62-62-62v0z' })
  );
};

IosQuote.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosQuote.propTypes = {
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

exports.default = IosQuote;
module.exports = exports['default'];
//# sourceMappingURL=IosQuote.js.map