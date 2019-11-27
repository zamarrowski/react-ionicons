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

var IosTrash = function IosTrash(props) {
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
    _react2.default.createElement('path', { d: 'M640 226v-39.4c0-32.4-26.2-58.6-58.6-58.6h-139c-32.2 0-58.4 26.2-58.4 58.6v39.4h-160v30h42.2l47.2 581.4c0 32.4 26.2 58.6 58.6 58.6h282c32.4 0 58.6-26.2 58.6-58.6l46.6-581.4h40.8v-30h-160zM414 186.6c0-16.2 12.4-28.6 28.6-28.6h139c16.2 0 28.6 12.4 28.6 28.6v39.4h-196v-39.4h-0.2zM405.4 802l-21.4-482h29l21.8 482h-29.4zM526 802h-28v-482h28v482zM618.6 802h-29.2l21.6-482h29l-21.4 482z' })
  );
};

IosTrash.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosTrash.propTypes = {
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

exports.default = IosTrash;
module.exports = exports['default'];
//# sourceMappingURL=IosTrash.js.map