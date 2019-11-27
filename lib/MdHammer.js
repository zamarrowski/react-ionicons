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

var MdHammer = function MdHammer(props) {
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
    _react2.default.createElement('path', { d: 'M948.2 796.4l-488.6-460.8c0 0 17.6-115.4 52.4-143.6 35-28.4 96-64 96-64v-64c-64 0-117.6 16.6-193.8 54.6-76 37.8-133.6 95.6-148.8 110.8s-36.2 39-49.4 57.8-10.6 40.2-10.6 40.2l-39.4 34-8-8c-4.6-4.6-12.4-4.6-17 0l-73.6 73.6c-4.6 4.6-4.6 12.4 0 17l118.8 118.8c4.6 4.6 12.4 4.6 17 0l73.6-73.6c4.6-4.6 4.6-12.4 0-17l-20.6-20.6 29.2-28.6c13.6-7.4 50.8-17.8 78.2-10.2l429.8 534.6c16.2 16.4 40.6 16.4 57 0l93.6-94.2c20.6-16 20.6-44.6 4.2-56.8z' })
  );
};

MdHammer.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdHammer.propTypes = {
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

exports.default = MdHammer;
module.exports = exports['default'];
//# sourceMappingURL=MdHammer.js.map