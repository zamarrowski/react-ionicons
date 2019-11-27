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

var MdGameControllerB = function MdGameControllerB(props) {
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
    _react2.default.createElement('path', { d: 'M326 320h-48v62h-62v48h62v60h48v-60h60v-48h-60z M934.2 408.2c-10.4-126.2-95.4-216.2-214.2-216.2h-416c-118.8 0-203.6 90-214 216.2 0 0-26 269.4-26 327.8s43 96 96 96c26.2 0 50-10.6 68-27.8v0h-0.6l156.6-162.2h256l156.6 162-0.6 0.2c18 17.2 41.8 27.8 68 27.8 53 0 96-40.6 96-96s-25.8-327.8-25.8-327.8zM302 524c-66.2 0-120-54.2-120-121s53.8-121 120-121 120 54.2 120 121c0 66.8-53.8 121-120 121zM676.2 429.2c-14.4 14.4-38 14.4-52.4 0s-14.4-38 0-52.4c14.4-14.4 38-14.4 52.4 0s14.4 38 0 52.4zM751.2 504.2c-14.4 14.4-38 14.4-52.4 0s-14.4-38 0-52.4c14.4-14.4 38-14.4 52.4 0s14.4 38 0 52.4zM751.2 354.2c-14.4 14.4-38 14.4-52.4 0s-14.4-38 0-52.4c14.4-14.4 38-14.4 52.4 0s14.4 38 0 52.4zM826.2 429.2c-14.4 14.4-38 14.4-52.4 0s-14.4-38 0-52.4c14.4-14.4 38-14.4 52.4 0s14.4 38 0 52.4z' })
  );
};

MdGameControllerB.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdGameControllerB.propTypes = {
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

exports.default = MdGameControllerB;
module.exports = exports['default'];
//# sourceMappingURL=MdGameControllerB.js.map