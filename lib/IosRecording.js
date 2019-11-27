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

var IosRecording = function IosRecording(props) {
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
    _react2.default.createElement('path', { d: 'M772.4 288c-121.2 0-219.6 99.8-219.6 223.6 0 80.8 42 152.4 105 190.4h-291.6c63-38 105-109.6 105-190.4 0-123.8-98.4-223.8-219.6-223.8s-219.6 100.4-219.6 224c0 123.8 98.4 224.2 219.6 224.2h520.8c121.2 0 219.6-100.2 219.6-224s-98.4-224-219.6-224zM256 640c-70.6 0-128-57.4-128-128s57.4-128 128-128 128 57.4 128 128c0 70.6-57.4 128-128 128zM768 640c-70.6 0-128-57.4-128-128s57.4-128 128-128 128 57.4 128 128c0 70.6-57.4 128-128 128z M768 416c-53 0-96 43-96 96s43 96 96 96 96-43 96-96c0-53-43-96-96-96z M256 416c-53 0-96 43-96 96s43 96 96 96 96-43 96-96c0-53-43-96-96-96z' })
  );
};

IosRecording.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosRecording.propTypes = {
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

exports.default = IosRecording;
module.exports = exports['default'];
//# sourceMappingURL=IosRecording.js.map