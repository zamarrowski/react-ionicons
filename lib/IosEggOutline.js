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

var IosEggOutline = function IosEggOutline(props) {
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
    _react2.default.createElement('path', { d: 'M512 96c23.2 0 53 13.6 84 38.4 33.4 26.8 67.2 65.2 97.2 111.2 31.6 48.2 58 102.6 76.4 157.6 20.2 60.2 30.4 118.8 30.4 174.4 0 57.4-7.2 109.4-21.6 154.4-13.4 42.6-33.2 79-58.6 108.4-24.6 28.4-54.6 50.2-89.2 64.8-35.2 14.8-75 22.4-118.6 22.4s-83.4-7.6-118.6-22.4c-34.6-14.6-64.6-36.4-89.2-64.8-25.4-29.4-45.2-65.8-58.6-108.4-14.2-45.2-21.6-97-21.6-154.4 0-55.6 10.2-114.4 30.4-174.4 18.4-55 44.8-109.4 76.4-157.6 30.2-46 63.8-84.4 97.2-111.2 31-24.8 60.8-38.4 84-38.4zM512 64c-128 0-320 266.4-320 513.8s128 382.2 320 382.2 320-134.8 320-382.2-192-513.8-320-513.8v0z' })
  );
};

IosEggOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosEggOutline.propTypes = {
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

exports.default = IosEggOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosEggOutline.js.map