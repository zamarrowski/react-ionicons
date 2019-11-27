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

var IosVideocamOutline = function IosVideocamOutline(props) {
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
    _react2.default.createElement('path', { d: 'M607.4 256h-442c-37.6 0-71.4 28.2-71.4 65.4v375.8c0 37.2 33.8 70.8 71.4 70.8h442c37.6 0 66.6-33.6 66.6-70.8v-375.8c0-37.2-29-65.4-66.6-65.4zM640 697.2c0 18.6-13.8 36.8-32.6 36.8h-442c-18.8 0-37.4-18.2-37.4-36.8v-375.8c0-18.6 18-31 36.8-31l442 0.2c18.8 0 33.2 12.2 33.2 30.8v375.8z M734 426v171.2l196 106.8v-384l-196 106zM896 380v264.6l-128-67v-131.2l128.2-67.2-0.2 0.8z' })
  );
};

IosVideocamOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosVideocamOutline.propTypes = {
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

exports.default = IosVideocamOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosVideocamOutline.js.map