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

var IosBuild = function IosBuild(props) {
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
    _react2.default.createElement('path', { d: 'M894.4 250l-105 105.4-102.4-18.6-18.4-102.4 105-105.4c-22.2-22.2-53.6-33-77.8-33-1.4 0-2.8 0-4 0.2-25 1.4-78.6 15.4-120 59.4-40.2 42.4-82.2 121.2-45 209 4.4 10.6 9.4 24.6-5.4 39.4-15.2 14.8-399.4 376.6-399.4 376.6-36 31-33.4 88.4-0.2 121.8 17 16.8 40 25.6 62.6 25.6 22.2 0 43.8-8.4 59.2-26.2 0 0 358.8-382.2 376.4-399.6 8-7.8 15.4-10.2 22.2-10.2 6.6 0 12.6 2.4 17.2 4.8 19.8 10.2 42 14.8 64.8 14.8 53.6 0 110-24.8 144.4-59.2 48.8-48.8 57.8-96 59.2-120.2 1.6-23.8-6.8-55.6-33.4-82.2z' })
  );
};

IosBuild.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosBuild.propTypes = {
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

exports.default = IosBuild;
module.exports = exports['default'];
//# sourceMappingURL=IosBuild.js.map