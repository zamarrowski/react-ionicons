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

var IosKey = function IosKey(props) {
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
    _react2.default.createElement('path', { d: 'M768 736c-17.6 0-32 14.4-32 32s14.4 32 32 32 32-14.4 32-32-14.4-32-32-32z M685.2 436.2c-26.6 0-52.2 0-76.2 8.2-103.2-86.2-375.6-313.8-396.4-335-9.6-9.8-20.2-13.4-30.6-13.4-17.4 0-34 10.4-43.4 19.2-14 13.2-51.2 53.6-41 64 30.6 30.8 54.8 53 67.4 65.6 9.6 9.6 26.8-1.6 39.2 6.6 11 7.2 20 19.8 29.2 29 10.6 10.8 18 15.6 17.8 31.4-0.2 16.6 1 27.6 12.6 40 9.4 10 18.2 15.2 31.8 15.4 18.4 0.4 29.8 4.8 41.8 19.8 11.4 14.2 4.2 28.4 9.8 44 3.6 10.2 32 36.2 36 40.2s22 0 26.6 4.6 34.4 31.6 36.4 40.8-6 18-4 27.2c2.4 11.2 14.4 24.2 21.2 34.8-13.6 31-21.2 65.2-21.2 101.4 0 137 108.8 248 242.8 248s243-111 243-248-108.8-243.8-242.8-243.8zM768 832c-35.4 0-64-28.6-64-64s28.6-64 64-64 64 28.6 64 64c0 35.4-28.6 64-64 64z' })
  );
};

IosKey.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosKey.propTypes = {
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

exports.default = IosKey;
module.exports = exports['default'];
//# sourceMappingURL=IosKey.js.map