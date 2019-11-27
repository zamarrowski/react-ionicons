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

var IosCog = function IosCog(props) {
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
    _react2.default.createElement('path', { d: 'M593.2 303.2c-2.2-0.8-4.4-1.6-6.6-2.4l-56 209.2 150 150c2-2.2 3.8-4.4 5.6-6.6 32.2-40 49.8-89.4 49.8-141.4 0-59.8-23.4-116-65.6-158.4-22.4-22.4-48.6-39.4-77.2-50.4z M556.2 292.4c-2.8-0.6-5.8-1-8.6-1.6-11.6-1.8-23.6-2.8-35.6-2.8-59.8 0-116 23.4-158.4 65.6-42.2 42.4-65.6 98.6-65.6 158.4 0 11.8 1 23.6 2.8 35 0.4 3 1 6 1.6 8.8l208.4-55.8 55.4-207.6z M301 587.4c0.8 2.2 1.6 4.4 2.4 6.6 11.2 28.2 28 54.2 50.2 76.4 42.4 42.2 98.6 65.6 158.4 65.6 51.2 0 100-17.2 139.4-48.6 2.2-1.6 4.2-3.4 6.2-5.2l-149.8-149.8-206.8 55z M896 545.6v-64l-66.6-17.4-5.2-26.4 55.2-41.8-24.4-59.2-68.8 9.6-15-21.2 35.4-59.4-45.2-45.2-60.4 34.8-21.4-14.6 10.6-70-59-24.8-43.2 56.6-24.6-5.2-17.4-69.4h-64l-18.4 69.8-24.2 4.8-43-58-59.2 24.6 9.6 71.4-23.4 14.4-62.6-37.4-45.2 45.2 37.6 63-13.4 21-71-10-24.2 59.2 57.8 43.4-4.8 24.4-69.6 17.8v64l69.4 17.8 4.8 25-56.8 42.6 24.6 59.2 70-10 14.2 22.6-35.8 61.2 45.2 45.2 60.4-36.4 22.4 14.6-9 68.6 59.2 24.4 41.2-55.6 26.8 5 17.6 66.2h64l16.6-66.2 27.2-5.2 41.4 54.2 59.2-24.4-10-67.4 20.4-14.8 58 33.8 45.2-45.2-33.6-57.8 15.8-22.8 67.6 9.6 24.6-59-54.6-41 5.4-27 66.6-17.2zM512 768c-141.4 0-256-114.6-256-256s114.6-256 256-256 256 114.6 256 256-114.6 256-256 256z' })
  );
};

IosCog.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosCog.propTypes = {
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

exports.default = IosCog;
module.exports = exports['default'];
//# sourceMappingURL=IosCog.js.map