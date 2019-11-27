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

var MdInfinite = function MdInfinite(props) {
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
    _react2.default.createElement('path', { d: 'M869.4 376c-37.6-36-87.6-56-141-56-53.2 0-103.2 19.8-140.8 55.8l-35.2 31.8 66.2 64.2 34.2-31c20.2-19.2 47-30 75.4-30s55.2 10.6 75.4 29.8c20 19.2 30.8 44.6 30.8 71.6s-11 52.2-30.8 71.2c-20.2 19.2-47 30-75.4 30s-55.2-10.6-75.4-29.8l-216.4-207.6c-37.8-36-87.8-56-140.8-56-53.4 0-103.4 19.8-141 56-37.8 36.2-58.6 84.4-58.6 136 0 51.4 20.8 99.8 58.6 136 37.6 36 87.6 56 141 56s103.4-19.8 140.8-56l75.6-72.2 75.4 72.2c37.8 36 87.8 56 140.8 56 53.4 0 103.4-19.8 140.8-55.8 38-36.2 58.8-84.4 58.8-136 0.2-51.6-20.6-100-58.4-136.2zM371 583.4c-20.2 19.2-47 30-75.4 30s-55.2-10.6-75.4-29.8c-20-19.2-30.8-44.6-30.8-71.6s11-52.2 30.8-71.2c20.2-19.2 47-30 75.4-30s55.2 10.6 75.4 29.8l74.8 71.6-74.8 71.2z' })
  );
};

MdInfinite.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdInfinite.propTypes = {
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

exports.default = MdInfinite;
module.exports = exports['default'];
//# sourceMappingURL=MdInfinite.js.map