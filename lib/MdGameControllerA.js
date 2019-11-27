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

var MdGameControllerA = function MdGameControllerA(props) {
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
    _react2.default.createElement('path', { d: 'M312 430h-48v62h-62v48h62v60h48v-60h60v-48h-60z M738.6 288h-453.2c-122.4 0-221.4 93-221.4 222.8 0 130 99 225.2 221.4 225.2h453c122.4 0 221.4-95.2 221.4-225.2 0.2-129.8-98.8-222.8-221.2-222.8zM288.4 633c-66.2 0-120-54.2-120-121s53.8-121 120-121 120 54.2 120 121c0 66.8-53.6 121-120 121zM694.6 538.2c-14.4 14.4-38 14.4-52.4 0s-14.4-38 0-52.4c14.4-14.4 38-14.4 52.4 0s14.4 38 0 52.4zM769.6 613.2c-14.4 14.4-38 14.4-52.4 0s-14.4-38 0-52.4c14.4-14.4 38-14.4 52.4 0s14.6 38 0 52.4zM769.6 463.2c-14.4 14.4-38 14.4-52.4 0s-14.4-38 0-52.4c14.4-14.4 38-14.4 52.4 0s14.6 38 0 52.4zM844.8 538.2c-14.4 14.4-38 14.4-52.4 0s-14.4-38 0-52.4c14.4-14.4 38-14.4 52.4 0s14.4 38 0 52.4z' })
  );
};

MdGameControllerA.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdGameControllerA.propTypes = {
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

exports.default = MdGameControllerA;
module.exports = exports['default'];
//# sourceMappingURL=MdGameControllerA.js.map