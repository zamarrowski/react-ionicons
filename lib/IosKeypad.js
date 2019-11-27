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

var IosKeypad = function IosKeypad(props) {
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
    _react2.default.createElement('path', { d: 'M789.2 682.4c-59 0-106.8 47.8-106.8 106.8s47.8 106.8 106.8 106.8c59 0 106.8-47.8 106.8-106.8s-47.8-106.8-106.8-106.8z M512 682.4c-59 0-106.8 47.8-106.8 106.8s47.8 106.8 106.8 106.8c59 0 106.8-47.8 106.8-106.8s-47.8-106.8-106.8-106.8z M234.8 682.4c-59 0-106.8 47.8-106.8 106.8s47.8 106.8 106.8 106.8c59 0 106.8-47.8 106.8-106.8s-47.8-106.8-106.8-106.8z M789.2 405.2c-59 0-106.8 47.8-106.8 106.8s47.8 106.8 106.8 106.8c59 0 106.8-47.8 106.8-106.8s-47.8-106.8-106.8-106.8z M512 405.2c-59 0-106.8 47.8-106.8 106.8s47.8 106.8 106.8 106.8c59 0 106.8-47.8 106.8-106.8s-47.8-106.8-106.8-106.8z M234.8 405.2c-59 0-106.8 47.8-106.8 106.8s47.8 106.8 106.8 106.8c59 0 106.8-47.8 106.8-106.8s-47.8-106.8-106.8-106.8z M789.2 341.6c59 0 106.8-47.8 106.8-106.8s-47.8-106.8-106.8-106.8c-59 0-106.8 47.8-106.8 106.8s47.8 106.8 106.8 106.8z M512 128c-59 0-106.8 47.8-106.8 106.8s47.8 106.8 106.8 106.8c59 0 106.8-47.8 106.8-106.8s-47.8-106.8-106.8-106.8z M234.8 128c-59 0-106.8 47.8-106.8 106.8s47.8 106.8 106.8 106.8c59 0 106.8-47.8 106.8-106.8s-47.8-106.8-106.8-106.8z' })
  );
};

IosKeypad.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosKeypad.propTypes = {
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

exports.default = IosKeypad;
module.exports = exports['default'];
//# sourceMappingURL=IosKeypad.js.map