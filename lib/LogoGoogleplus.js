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

var LogoGoogleplus = function LogoGoogleplus(props) {
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
    _react2.default.createElement('path', { d: 'M636.4 461.8l-3.2-14h-313.2v128.2h181.4c-18.8 90-96.8 127.2-168.2 127.2-52 0-100.4-15.6-136.6-50.6-37.2-36.2-57.8-86.2-57.8-140.8 0-54.2 19.6-103.6 55.2-139.2 35.4-35.4 84-50.8 137.4-50.8 61 0 99.8 27.6 116.2 42.2l96-95.4c-27-23.4-100.6-82.6-215.4-82.6 0 0 0 0 0 0-88.6 0-173.4 33.6-235.4 95.6-61 61-92.8 148.8-92.8 230.4s30 165.2 89.2 226.6c63.4 65.4 153.2 99.4 245.8 99.4 84.2 0 163.8-33 220.6-92.6 56-58.8 84.8-140.2 84.8-225.4-0.2-36-3.8-57.4-4-58.2z M1024 448h-114v-114h-82v114h-114v82h114v114h82v-114h114z' })
  );
};

LogoGoogleplus.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

LogoGoogleplus.propTypes = {
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

exports.default = LogoGoogleplus;
module.exports = exports['default'];
//# sourceMappingURL=LogoGoogleplus.js.map