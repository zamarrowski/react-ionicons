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

var IosNutrition = function IosNutrition(props) {
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
    _react2.default.createElement('path', { d: 'M718 467.24l-0.212-0.078c-0.272-0.276-0.612-0.886-0.888-1.158l-157.806-158.004c-11.696-12-28.46-20.336-47.094-20.336-23.684 0-44.348 12.336-55.416 32.336h-0.014c0 0-14.218 22.702-36.636 58.498l65.234 79.7c5.894 7.544 6.61 15.79 2.828 19.57l-0.228 0.228c-4.592 4.592-11.788 3.070-19.57-2.828l-71.934-58.878c-47.216 75.386-113.654 181.462-167.342 267.184l38.246 46.724c5.894 7.544 6.61 15.79 2.828 19.57l-0.228 0.228c-4.592 4.592-11.788 3.070-19.57-2.828l-40.44-33.1c-40.010 63.88-69.37 110.754-71.758 114.562v0.006c-6 10.132-10 22.288-10 35.364 0 35.348 28.488 64 63.836 64 15.684 0 28.766-6.796 41.256-15.016l229.684-168.39-57.942-70.79c-5.894-7.544-6.61-15.79-2.828-19.57l0.228-0.228c4.592-4.592 11.788-3.068 19.57 2.83l75.926 62.43c109.97-80.57 212.34-155.266 212.34-155.266h0.010c15.718-12 26.048-30.638 26.048-51.714 0-17.426-6.128-33.5-18.128-45.042v-0.004z M896 277.562l-32.972-55.388-132.46 76.424 98.462-170.426-55.238-32.172-139.998 242.168 57.176 57.176z' })
  );
};

IosNutrition.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosNutrition.propTypes = {
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

exports.default = IosNutrition;
module.exports = exports['default'];
//# sourceMappingURL=IosNutrition.js.map