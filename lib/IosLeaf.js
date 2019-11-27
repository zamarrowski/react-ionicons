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

var IosLeaf = function IosLeaf(props) {
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
    _react2.default.createElement('path', { d: 'M907.8 765.4c-103.6-16-111.4-31.4-111.4-31.4 31.2-148-44.8-302.2-152.6-391.2-143.6-118.4-361.8-32.4-531.8-212.4-39.6-42-16.6 471 196.2 665.4 155.6 142 338.8 98.4 389 75.2 45.6-21.2 77.4-67.8 77.4-67.8 83 26 124 24.4 124 24.4 29.2 3.6 44-56.8 9.2-62.2zM724.2 772.2c-272.4-81.8-483.2-375-483.2-375s185.8 221.4 502.8 326.4c0.2 16.2-9.2 39.4-19.6 48.6z' })
  );
};

IosLeaf.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosLeaf.propTypes = {
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

exports.default = IosLeaf;
module.exports = exports['default'];
//# sourceMappingURL=IosLeaf.js.map