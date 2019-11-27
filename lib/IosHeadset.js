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

var IosHeadset = function IosHeadset(props) {
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
    _react2.default.createElement('path', { d: 'M816 520h-48v-95.6c0-140.8-115.2-256-256-256v0 0c-140.8 0-256 115.2-256 256v95.6h-48c-79.2 0-144 64.8-144 144v31.6c0 79.2 64.8 144.4 144 144.4h48c0 8 7.2 15.8 16 15.8s16-7.4 16-16.2v-413.6c16.4 0 42 0 48 0 8.8 0 16-8 16-16.8 0-80 77.4-144.8 160-144.8s160 64.6 160 144.6c0 8.8 7.2 17.2 16 17.2 5.8 0 31 0 48 0v413.6c0 8.8 7.2 16.2 16 16.2s16-7.8 16-15.8h48c79.2 0 144-65.2 144-144.4v-31.8c0-79.2-64.8-144-144-144z' })
  );
};

IosHeadset.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosHeadset.propTypes = {
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

exports.default = IosHeadset;
module.exports = exports['default'];
//# sourceMappingURL=IosHeadset.js.map