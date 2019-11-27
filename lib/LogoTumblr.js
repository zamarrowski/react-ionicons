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

var LogoTumblr = function LogoTumblr(props) {
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
    _react2.default.createElement('path', { d: 'M642.4 792.6c-23.6 0-44.8-5.6-63-16.6-13.8-8.2-23-19.2-28-32.8-5.2-13.8-7.2-44.6-7.2-92.8v-202.4h192v-128h-192v-224h-123.8c-5.4 43-15 89.4-29 117.2s-28 51.6-51.2 71.4c-23.2 19.8-51.2 35.8-83.8 46.6v116.8h96v280.8c0 38 4 67 11.8 87 8 20 22.2 39 42.8 56.8s45.6 31.4 74.6 41c29.2 9.6 62.8 14.4 100.8 14.4 33.4 0 60.6-3.4 89.4-10.2s61-18.6 96.4-35.2v-131.2c-41.8 27.4-83.6 41.2-125.8 41.2z' })
  );
};

LogoTumblr.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

LogoTumblr.propTypes = {
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

exports.default = LogoTumblr;
module.exports = exports['default'];
//# sourceMappingURL=LogoTumblr.js.map