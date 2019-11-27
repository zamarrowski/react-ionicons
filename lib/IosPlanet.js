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

var IosPlanet = function IosPlanet(props) {
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
    _react2.default.createElement('path', { d: 'M792.4 577.8c-2.2 9-4.6 18-7.8 26.8 11.6 9 22.8 17.8 33.6 26.6 72 58.2 118 114.4 106.4 114.4-15.8 1-55.2-2.2-142.2-34.2-24.4-9-50.6-19.4-77.6-31.2 39.4-45 63.2-103.8 63.2-168.4 0-141.4-114.6-256-256-256-114 0-210.4 74.4-243.6 177.4-24-17.2-46.4-34.2-66.6-50.6-72-58.2-95.2-90.4-102.4-104.4-8.6-14 65.2-1.8 152.2 30.2 13.6 5 27.8 10.4 42.2 16 5.6-6.6 11.6-13 17.8-19-131.8-55-228.4-75.4-245-45.8-26.2 46.2 152.2 196.4 398.2 335.8 246 139.2 466.8 214.8 492.8 168.6 16.6-29.4-50.4-101.4-165.2-186.2z M256.2 504.6c0 2.4-0.2 4.8-0.2 7.4 0 141.4 114.6 256 256 256 51.6 0 99.6-15.2 139.8-41.4-65-28.8-132.8-59-207-101-67.6-38.4-134.2-83.4-188.6-121z' })
  );
};

IosPlanet.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosPlanet.propTypes = {
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

exports.default = IosPlanet;
module.exports = exports['default'];
//# sourceMappingURL=IosPlanet.js.map