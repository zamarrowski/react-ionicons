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

var MdQrScanner = function MdQrScanner(props) {
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
    _react2.default.createElement('path', { d: 'M192 248.4c0-13.8 10.4-24.4 24.4-24.4h135.6v-96h-133.6c-67 0-122.4 53.4-122.4 120.4v135.6h96v-135.6z M807.2 128h-135.2v96h134.4c13.8 0 25.6 10.4 25.6 24.4v135.6h96v-135.6c0-67-54-120.4-120.8-120.4z M832 773.6c0 13.8-10.4 24.4-24.4 24.4h-135.6v98h135.6c67 0 120.4-55.4 120.4-122.4v-133.6h-96v133.6z M216.4 798c-13.8 0-24.4-10.4-24.4-24.4v-133.6h-96v133.6c0 67 55.4 122.4 122.4 122.4h133.6v-98h-135.6z' })
  );
};

MdQrScanner.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdQrScanner.propTypes = {
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

exports.default = MdQrScanner;
module.exports = exports['default'];
//# sourceMappingURL=MdQrScanner.js.map