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

var LogoVimeo = function LogoVimeo(props) {
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
    _react2.default.createElement('path', { d: 'M953.8 228c-10-46.8-35-77.6-81.2-92.6s-129.8-9-188.2 33.6c-59.8 43.6-95.2 119.4-107.6 167.6 29.4-12.6 48-15.4 78-13.8s49 24 49.8 50.6c0.6 19.6-0.4 37.4-7.2 55.4-21.6 57.4-55.4 113-95.2 161.6-5.8 7.2-12.8 13.8-20 19.8-20.4 16.6-37.6 12.2-50.8-10.4-10.8-18.6-18-37.8-24.4-58.2-24.8-79.4-33.6-161.8-47.6-243.2-6.6-39-14-79.6-36-113.8-23.2-35.6-57.2-49.2-100-44-29.4 3.6-73.8 35-95.6 52.8 0 0-112 93.8-163.6 142.8l42.4 54c0 0 35.8-25 55-36.6 11.4-6.8 24.8-8.2 34.4 0.4 9 7.8 19.2 18 24.6 28.2 11.4 21.4 22.4 43.8 29.4 66.8 26.4 88.6 51 177.4 75.6 266.6 12.6 45.6 27.8 88.4 56 127.2 38.6 53.2 79.2 65.4 141.8 43 50.8-18.2 93.2-52.4 132-87.8 66.2-60.4 118.2-130.8 171-202.4 40.8-55.4 74.6-111.4 102.8-174 27.8-62 38.8-127 24.6-193.6z' })
  );
};

LogoVimeo.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

LogoVimeo.propTypes = {
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

exports.default = LogoVimeo;
module.exports = exports['default'];
//# sourceMappingURL=LogoVimeo.js.map