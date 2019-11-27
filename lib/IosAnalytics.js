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

var IosAnalytics = function IosAnalytics(props) {
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
    _react2.default.createElement('path', { d: 'M806.2 217.8c-162.4-162.4-425.8-162.4-588.4 0s-162.4 425.8 0 588.4c162.4 162.4 425.8 162.4 588.4 0 162.4-162.4 162.4-426 0-588.4zM242.4 242.4c148.6-148.6 390.6-148.6 539.2 0 76 76 113 176.2 111.4 276-5.8-9.4-46.2-70.4-105-70.4-55.8 0-84.6 52.2-103.6 86.6-2.8 5.2-5.6 10-8 14.2-23.2 39-55.4 60.8-86.2 58.6-27.2-2-50.4-22.6-65.2-58.4-18.6-44.8-59.2-93-107.4-99.8-22.8-3.2-57.2 1.8-90.6 43.4-6.6 8.2-14 19-22.4 31.8-21.2 31.4-53 78.8-77.4 82.8-42 6.8-73.2-24.4-78.6-29.2-4-3.4-8.8-8.6-14.4-15-15.2-114 20.8-233.4 108.2-320.6z' })
  );
};

IosAnalytics.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosAnalytics.propTypes = {
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

exports.default = IosAnalytics;
module.exports = exports['default'];
//# sourceMappingURL=IosAnalytics.js.map