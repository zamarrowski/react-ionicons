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

var MdTransgender = function MdTransgender(props) {
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
    _react2.default.createElement('path', { d: 'M704 64v70h126.2l-162.8 161c-15-14.4-26.4-22-26.4-22-36.6-25.8-81-41-129-41-60.4 0-115.2 24-155.6 62.8l-30.4-30 62.8-62.8-57-57-63 63-75-74h126.2v-70h-256v256h70v-137.4l80.6 79.8-62.4 62.4 57 57 62.8-62.8 38.8 38.4c-14.6 29.8-23 63.4-23 99 0 109.6 79 200.8 182.2 220.4v90.6h-126v80.6h126v112h84v-112h126v-80.4h-126v-90.6c101.6-19.8 182.4-111 182.4-220.6 0-35.4-8.4-69.6-23-99.2l176.6-174.6v137.4h70v-256h-256zM512 580c-70.6 0-128-57.4-128-128s57.4-128 128-128c70.6 0 128 57.4 128 128s-57.4 128-128 128z' })
  );
};

MdTransgender.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdTransgender.propTypes = {
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

exports.default = MdTransgender;
module.exports = exports['default'];
//# sourceMappingURL=MdTransgender.js.map