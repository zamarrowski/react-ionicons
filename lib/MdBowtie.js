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

var MdBowtie = function MdBowtie(props) {
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
    _react2.default.createElement('path', { d: 'M552 608h-80c-30.8 0-56-25.2-56-56v-80c0-30.8 25.2-56 56-56h80c30.8 0 56 25.2 56 56v80c0 30.8-25.2 56-56 56z M352 560v-96c0-36.4 17.4-68.8 44.4-89.2-12.4-54.8-204.4-182.8-268.4-182.8-35.2 0-64 28.8-64 64v512c0 35.2 28.6 64 64 64 64 0 256-128 268.4-182.8-27-20.4-44.4-52.8-44.4-89.2z M896 192c-64 0-256 128-268.4 182.8 27 20.4 44.4 52.8 44.4 89.2v96c0 36.4-17.4 68.8-44.4 89.2 12.4 54.8 204.4 182.8 268.4 182.8 35.4 0 64-28.8 64-64v-512c0-35.2-28.8-64-64-64z' })
  );
};

MdBowtie.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdBowtie.propTypes = {
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

exports.default = MdBowtie;
module.exports = exports['default'];
//# sourceMappingURL=MdBowtie.js.map