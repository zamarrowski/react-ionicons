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

var IosBasketballOutline = function IosBasketballOutline(props) {
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
    _react2.default.createElement('path', { d: 'M512 96c-229.726 0-416 186.272-416 416s186.274 416 416 416c229.742 0 416-186.276 416-416s-186.258-416-416-416zM893.328 512c0 0.096-0.004 0.194-0.004 0.29-44.63-3.442-87.978-13.944-129.24-31.398-35.776-15.132-68.906-35.010-98.958-59.268 41.38-59.002 76.884-122.424 105.648-189.43 75.316 69.706 122.554 169.338 122.554 279.806zM745.212 210.522c-0.56 1.352-1.1 2.708-1.67 4.056-27.816 65.766-62.124 127.912-102.572 185.974-3.076-2.898-6.126-5.828-9.126-8.826-38.214-38.214-68.214-82.708-89.166-132.24-17.394-41.126-27.866-84.326-31.342-128.802 0.222 0 0.442-0.008 0.664-0.008 87.768-0.002 168.694 29.822 233.212 79.846zM479.35 132.088c8.862 116.252 62.088 220.082 142.782 294.624-18.99 25.498-39.218 50.152-60.638 73.93-95.108-100.064-209.63-181.492-337.534-238.264 63.272-72.912 153.706-121.628 255.39-130.29zM561.374 547.68c72.458 81.34 130.96 172.876 174.37 272.906-50.8 36.934-111.020 61.658-176.324 69.796-4.544-95.632-39.042-183.414-94.358-254.142 33.904-27.526 66.074-57.106 96.312-88.56zM524.078 540.078c-25.408 25.406-51.954 49.324-79.556 71.74-77.474-85.77-187.662-141.412-310.9-147.27 8.14-65.292 32.864-125.5 69.792-176.292 118.39 51.376 224.89 123.894 316.664 215.666 6.646 6.646 13.18 13.378 19.624 20.178-5.148 5.372-10.348 10.702-15.624 15.978zM131.016 496.46c50.476 2.29 98.872 13.594 142.9 32.218 49.534 20.952 94.026 50.952 132.24 89.166 4.508 4.508 8.89 9.11 13.168 13.79-62.828 47.83-130.854 88.098-203.416 120.364-53.264-65.588-85.236-149.124-85.236-239.998 0-5.208 0.136-10.382 0.344-15.54zM238.134 777.052c71.976-32.868 139.62-73.574 201.828-121.042 22.498 28.744 41.044 60.23 55.36 94.074 19.228 45.458 30.026 93.448 32.228 142.9-5.16 0.208-10.34 0.344-15.55 0.344-107.366 0-204.498-44.622-273.866-116.276zM761.62 800.042c-44.978-101.342-105.44-194.28-178.382-275.818 22.202-24.538 43.268-50.122 63.112-76.672 68.342 54.684 153.042 89.77 245.602 96.726-8.58 101.838-57.33 192.416-130.332 255.764z' })
  );
};

IosBasketballOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosBasketballOutline.propTypes = {
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

exports.default = IosBasketballOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosBasketballOutline.js.map