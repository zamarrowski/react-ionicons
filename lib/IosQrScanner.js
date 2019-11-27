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

var IosQrScanner = function IosQrScanner(props) {
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
    _react2.default.createElement('path', { d: 'M128 248.4c0-44.4 42-88.4 88.4-88.4 39.6 0 135.6 0 135.6 0v-32h-133.6c-67 0-122.4 53.4-122.4 120.4v135.6h32c0 0 0-91.4 0-135.6z M896 384h32v-135.6c0-67-55.4-120.4-122.4-120.4h-133.6v32c0 0 96 0 135.6 0 46.4 0 88.4 44 88.4 88.4s0 135.6 0 135.6z M128 640h-32v135.6c0 67 55.4 120.4 122.4 120.4h133.6v-32c0 0-96 0-135.6 0-46.4 0-88.4-44-88.4-88.4s0-135.6 0-135.6z M896 775.6c0 44.4-42 88.4-88.4 88.4-39.6 0-135.6 0-135.6 0v32h133.6c67 0 122.4-53.4 122.4-120.4v-135.6h-32c0 0 0 91.4 0 135.6z' })
  );
};

IosQrScanner.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosQrScanner.propTypes = {
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

exports.default = IosQrScanner;
module.exports = exports['default'];
//# sourceMappingURL=IosQrScanner.js.map