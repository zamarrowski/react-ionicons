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

var IosTrendingDown = function IosTrendingDown(props) {
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
    _react2.default.createElement('path', { d: 'M944 792h-224c-8.8 0-16-7.2-16-16s7.2-16 16-16h184l-328.8-328.4-167.8 168.2c-3 3-7 4.8-11.4 4.8-4.2 0-8.4-1.6-11.4-4.6l-316.4-316.8c-3.2-3.2-4.2-7.4-4.2-11.8 0-4.2 1.2-7.8 4.2-10.8 3.2-3.2 7.2-4.6 11.4-4.6 4 0 8.2 1.6 11.4 4.6l305 305.4 167.8-168c6.2-6.2 16.4-6.2 22.6 0l341.6 338.6v-184c0-8.8 7.2-16 16-16s16 7.2 16 16v224c0 8.8-7.2 15.4-16 15.4z' })
  );
};

IosTrendingDown.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosTrendingDown.propTypes = {
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

exports.default = IosTrendingDown;
module.exports = exports['default'];
//# sourceMappingURL=IosTrendingDown.js.map