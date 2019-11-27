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

var IosFlameOutline = function IosFlameOutline(props) {
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
    _react2.default.createElement('path', { d: 'M447.8 96c51.4 269.2-193.4 263.8-191.8 534.8 1.4 222 210 297.2 256.2 297.2 46.4 0 227.8-48.2 253.8-297.2 21.4-202.8-144.8-416-318.2-534.8zM512.2 913.2c0 0-81.4-66.6-81.4-148.6s81.2-148.6 81.2-148.6 80.6 66.6 80.6 148.6c-0 82-80.4 148.6-80.4 148.6zM734.4 628c-5.6 53.8-19.4 101.2-41 141-17.4 32.4-40.2 59.6-67.4 81.2-13 10.4-26.6 18.8-39.6 25.6 20-29.6 38.2-68.2 38.2-111.2 0-94.4-87.6-167.8-91.4-170.8l-21.2-17.4-21.2 17.4c-3.8 3-92 76.4-92 170.8 0 40.6 16.4 77.2 35.2 106.2-14.8-8-30.4-18.2-46-30.6-29.4-23.6-52.8-51.2-69.4-82.4-20.2-37.6-30.4-80.4-30.8-127-0.8-118.8 48.2-177.8 100-240.2 49.2-59.2 99.6-120.2 99-226.8 65 53.6 122.6 117 165.6 183.6 62.8 96.6 91 193.6 82 280.6z' })
  );
};

IosFlameOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosFlameOutline.propTypes = {
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

exports.default = IosFlameOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosFlameOutline.js.map