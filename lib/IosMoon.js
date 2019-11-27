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

var IosMoon = function IosMoon(props) {
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
    _react2.default.createElement('path', { d: 'M493.8 128c-25.2 2.8-49.8 8-73.2 15.4-155.8 49.4-268.6 195.2-268.6 367.4 0 212.8 172 385.2 384.4 385.2 117.4 0 222.4-52.8 293-135.8 16.2-19 30.4-39.6 42.8-61.6-22.8 5.6-46.2 9-70 10.2-5.8 0.2-11.8 0.4-17.6 0.4-96.8 0-188-37.8-256.4-106.4-68.6-68.6-106.2-160-106.2-257 0-55.2 12.2-108.6 35.4-157 9.8-21.4 22-41.8 36.4-60.8v0z' })
  );
};

IosMoon.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosMoon.propTypes = {
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

exports.default = IosMoon;
module.exports = exports['default'];
//# sourceMappingURL=IosMoon.js.map