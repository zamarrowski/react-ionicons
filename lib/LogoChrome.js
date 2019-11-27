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

var LogoChrome = function LogoChrome(props) {
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
    _react2.default.createElement('path', { d: 'M377.6 511.85c0 73.892 60.486 134.356 134.4 134.356s134.398-60.462 134.398-134.356c0-73.89-60.484-134.358-134.398-134.358s-134.4 60.468-134.4 134.358z M953.504 435.59c-0.018 0.010-0.032 0.076-0.048 0.084-3.402-19.754-8.080-39.676-13.978-57.676h-0.214c5.966 18 10.704 38 14.144 58h-0.004c-3.438-20-8.176-40-14.14-58h-310.78c38.088 34 62.716 80.35 62.716 134.104 0 33.592-8.968 62.568-24.628 89.448l-204.484 355.354c0 0-0.018 0.528-0.028 0.528l-0.020 0.568c0.010 0 0.018 0 0.030 0l-0.010-0.524c16.406 1.84 33.062 2.524 49.94 2.524 13.684 0 27.218-0.786 40.598-2.004 20.27-1.822 40.154-5.038 59.554-9.466 199.208-45.48 347.848-223.722 347.848-436.648 0-25.998-2.242-51.506-6.496-76.292z M512 690.992c-67.202 0-123.202-35.82-154.57-89.57l-205.692-355.8c-20.586 27.792-38.030 58.044-51.806 90.246-23.118 54.022-35.932 113.504-35.932 175.982 0 125.39 51.568 238.72 134.632 320.018 58.684 57.438 133.090 98.866 216.176 117.238l0.058-0.102 155.366-269.208c-17.918 6.716-38.062 11.196-58.232 11.196z M182.584 209.15l154.7 266.5c15.682-80.624 87.346-143.65 174.716-143.65h410.344c-13.842-30-31.188-60.648-51.558-87.876 0.078 0.042 0.156 0.106 0.234 0.148 20.268 27.152 37.536 57.728 51.324 87.728h0.344c-13.768-30-31.028-60.76-51.336-87.98-0.23-0.12-0.458-0.336-0.684-0.514-81.718-108.972-211.95-179.506-358.668-179.506-52.744 0-103.346 9.138-150.344 25.872-69.23 24.654-130.606 65.834-179.374 118.812l0.284 0.486c0.006-0.008 0.012-0.014 0.018-0.020z' })
  );
};

LogoChrome.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

LogoChrome.propTypes = {
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

exports.default = LogoChrome;
module.exports = exports['default'];
//# sourceMappingURL=LogoChrome.js.map