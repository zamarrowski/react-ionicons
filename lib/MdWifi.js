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

var MdWifi = function MdWifi(props) {
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
    _react2.default.createElement('path', { d: 'M512 457.438c-45.758 0-83.194 37.058-83.194 82.36 0 45.304 37.436 82.364 83.194 82.364 45.756 0 83.194-37.058 83.194-82.364 0-45.302-37.438-82.36-83.194-82.36zM761.6 539.796c0-135.892-112.326-247.078-249.6-247.078s-249.6 111.186-249.6 247.078c0 90.606 49.922 170.894 124.792 214.144l41.614-72.064c-49.944-28.834-83.208-80.306-83.208-142.080 0-90.59 74.866-164.716 166.402-164.716 91.542 0 166.402 74.126 166.402 164.716 0 61.774-33.266 113.246-83.208 142.080l41.614 72.064c74.866-43.248 124.792-123.538 124.792-214.144zM512 128c-228.806 0-416 185.308-416 411.796 0 152.374 83.184 284.14 208 356.204l41.598-72.064c-99.838-57.648-166.414-162.648-166.414-284.138 0-181.186 149.782-329.436 332.816-329.436s332.812 148.25 332.812 329.436c0 121.49-66.568 228.542-166.41 284.138l41.598 72.064c124.812-72.064 208-203.83 208-356.204 0-226.488-187.194-411.796-416-411.796z' })
  );
};

MdWifi.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdWifi.propTypes = {
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

exports.default = MdWifi;
module.exports = exports['default'];
//# sourceMappingURL=MdWifi.js.map