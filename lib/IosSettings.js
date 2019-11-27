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

var IosSettings = function IosSettings(props) {
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
    _react2.default.createElement('path', { d: 'M822.2 512c0-47.8 29.6-85.6 73.8-111.6-8-26.6-18.6-52.4-31.6-76.4-49.8 13-90-6.4-124-40.4-33.8-33.8-44.2-74.2-31.2-124-24-13-49.6-23.6-76.4-31.6-26 44.4-72.8 73.8-120.8 73.8-47.8 0-94.8-29.4-120.8-73.8-26.8 8-52.4 18.6-76.4 31.6 13 49.8 2.6 90-31.2 124-33.8 33.8-74.2 53.4-123.8 40.4-13.2 24-23.8 49.6-31.8 76.4 44.4 26 74 63.8 74 111.6s-29.6 94.8-74 120.8c8 26.8 18.6 52.4 31.6 76.4 49.8-13 90-2.6 123.8 31.2 34 33.8 44.2 74.2 31.2 124 24.2 13 49.6 23.6 76.4 31.6 26-44.4 73-73.8 120.8-73.8s94.8 29.4 120.8 73.8c26.8-8 52.4-18.6 76.4-31.6-13-49.8-2.6-90 31.2-124 33.8-33.8 74.2-53.4 124-40.4 13-24.2 23.6-49.8 31.6-76.4-44.2-26-73.6-63.8-73.6-111.6zM512 704c-105.8 0-192-86-192-192s86-192 192-192 192 86 192 192-86 192-192 192z' })
  );
};

IosSettings.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosSettings.propTypes = {
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

exports.default = IosSettings;
module.exports = exports['default'];
//# sourceMappingURL=IosSettings.js.map