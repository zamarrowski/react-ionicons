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

var IosBulb = function IosBulb(props) {
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
    _react2.default.createElement('path', { d: 'M800 377.8c0-155.8-132.2-281.8-288-281.8s-288 126.2-288 281.8c0 62 26.4 118.2 60.4 166.2h-0.6c21.8 30 42.8 55.4 63 90 44 75.6 37.2 148.6 37.4 163v3h64v-256.2l-64.2-127.8h33.2l62.8 127.8v256.2h64v-256.2l62.8-127.8h33.2l-64 127.8v256.2h64v-3c0-17.8-7.2-87.4 36.8-163 20.2-34.6 41.2-60 63-90h-0.2c34-48 60.4-104.2 60.4-166.2z M448 896h128v32h-128v-32z M416 832h192v32h-192v-32z' })
  );
};

IosBulb.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosBulb.propTypes = {
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

exports.default = IosBulb;
module.exports = exports['default'];
//# sourceMappingURL=IosBulb.js.map