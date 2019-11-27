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

var MdLogIn = function MdLogIn(props) {
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
    _react2.default.createElement('path', { d: 'M512 96c-85.8 0-168.4 26-238.4 75-68.4 48-120.4 114.4-150.2 192.2l-7.4 20.8h91.4l3.8-10c16.4-35.6 38.8-67.8 67-96 62.4-62.4 145.4-96.8 233.8-96.8s171.4 34.4 233.8 96.8c62.4 62.4 96.8 145.4 96.8 233.8 0 88.2-34.4 171.4-96.8 233.8s-145.4 96.8-233.8 96.8c-88.2 0-171.2-34.4-233.8-96.8-28-28-50.6-60.2-67-95.8l-3.8-10h-91.4l7.2 20.8c29.8 77.8 81.8 144.2 150.2 192.2 70.2 49.4 152.6 75.2 238.6 75.2 229.4 0 416-186.6 416-416s-186.6-416-416-416z M96 554.8h379.4l-87.2 89.4 59.8 59.8 192-192-192-192-62 59.8 89.4 89.4h-379.4v85.6z' })
  );
};

MdLogIn.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdLogIn.propTypes = {
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

exports.default = MdLogIn;
module.exports = exports['default'];
//# sourceMappingURL=MdLogIn.js.map