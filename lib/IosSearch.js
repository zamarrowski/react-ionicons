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

var IosSearch = function IosSearch(props) {
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
    _react2.default.createElement('path', { d: 'M689 596c30-47.2 47.6-103.2 47.6-163.4 0-168.2-136.2-304.6-304.2-304.6-168.2 0-304.4 136.4-304.4 304.6s136.2 304.6 304.2 304.6c61 0 117.8-18 165.4-48.8l13.8-9.6 217.2 217.2 67.4-68.6-217-217.2 10-14.2zM602.8 262.4c45.4 45.4 70.4 105.8 70.4 170s-25 124.6-70.4 170c-45.4 45.4-105.8 70.4-170 70.4s-124.6-25-170-70.4c-45.4-45.4-70.4-105.8-70.4-170s25-124.6 70.4-170c45.4-45.4 105.8-70.4 170-70.4s124.6 25 170 70.4z' })
  );
};

IosSearch.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosSearch.propTypes = {
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

exports.default = IosSearch;
module.exports = exports['default'];
//# sourceMappingURL=IosSearch.js.map