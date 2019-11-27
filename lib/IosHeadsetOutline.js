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

var IosHeadsetOutline = function IosHeadsetOutline(props) {
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
    _react2.default.createElement('path', { d: 'M688 423.6c-8.8 0-16-7.2-16-16 0-80-77.4-144-160-144s-160 64-160 144c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-50 23.6-88.6 59.2-123.2 35.2-34.2 82.4-52.8 132.8-52.8s97.6 18.8 132.8 52.8c35.6 34.4 59.2 73 59.2 123.2 0 8.8-7.2 16-16 16z M816 520h-48v-95.6c0-140.8-115.2-256-256-256v0 0c-140.8 0-256 115.2-256 256v95.6h-48c-79.2 0-144 64.8-144 144v31.6c0 79.2 64.8 144.4 144 144.4h48c0 8 7.2 15.8 16 15.8s16-7.4 16-16.2v-415.2c0-59.6 23.4-115.8 65.8-158.2s98.6-65.8 158.2-65.8c60 0 115.8 23.4 158.2 65.8s65.8 98.6 65.8 158.2v415.2c0 8.8 7.2 16.2 16 16.2s16-7.8 16-15.8h48c79.2 0 144-65.2 144-144.4v-31.6c0-79.2-64.8-144-144-144zM256 808h-48c-29.8 0-57.8-11.8-79-33.2s-33-49.4-33-79.2v-31.6c0-29.8 11.6-57.8 33-79s49.2-33 79-33h48v256zM928 695.6c0 29.8-11.6 58-33 79.2s-49.2 33.2-79 33.2h-48v-256h48c29.8 0 57.8 11.6 79 33s33 49.2 33 79v31.6z' })
  );
};

IosHeadsetOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosHeadsetOutline.propTypes = {
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

exports.default = IosHeadsetOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosHeadsetOutline.js.map