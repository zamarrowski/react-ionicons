'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _SvgContainer = require('./SvgContainer');

var _SvgContainer2 = _interopRequireDefault(_SvgContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CreateSharp = function CreateSharp(props) {
  return _react2.default.createElement(
    _SvgContainer2.default,
    {
      height: props.height,
      width: props.width,
      color: props.color,
      onClick: props.onClick,
      rotate: props.rotate ? 1 : 0,
      shake: props.shake ? 1 : 0,
      beat: props.beat ? 1 : 0
    },
    _react2.default.createElement('span', { dangerouslySetInnerHTML: { __html: '<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Create</title><path d="M464.37 49.2a22.07 22.07 0 00-31.88-.76l-18.31 18.25 31.18 31.1 18-17.91a22.16 22.16 0 001.01-30.68zM252.76 336H176V259.24l9.4-9.38L323.54 112H48v352h352V188.46L262.14 326.6l-9.38 9.4zM400 143.16l32.79-32.86-31.09-31.09L368.85 112H400v31.16z"/><path d="M208 304h31.49L400 143.16V112h-31.15L208 272.51V304z"/></svg>' } })
  );
};

CreateSharp.defaultProps = {
  // style
  style: {},
  color: '#000000',
  height: '22px',
  width: '22px',
  cssClasses: '',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

CreateSharp.propTypes = {
  // style
  style: _propTypes2.default.object,
  color: _propTypes2.default.string,
  height: _propTypes2.default.string,
  width: _propTypes2.default.string,
  cssClasses: _propTypes2.default.string,

  // animation
  shake: _propTypes2.default.bool,
  beat: _propTypes2.default.bool,
  rotate: _propTypes2.default.bool,

  // functions
  onClick: _propTypes2.default.func
};

exports.default = CreateSharp;
module.exports = exports['default'];
//# sourceMappingURL=CreateSharp.js.map