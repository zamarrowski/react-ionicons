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

var IosSpeedometerOutline = function IosSpeedometerOutline(props) {
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
    _react2.default.createElement('path', { d: 'M512 128c-247.424 0-448 200.452-448 447.876 0 113.95 42.566 217.94 112.632 297 7.102 8.012 14.482 15.64 22.132 23.124 6.118-6.98 12.464-13.668 19.078-20.282 0.96-0.96 1.944-1.894 2.912-2.844 37.56-36.852 81.042-65.898 129.328-86.322 51.266-21.684 105.742-32.678 161.916-32.678s110.65 10.994 161.916 32.678c48.288 20.424 91.768 49.47 129.328 86.322 0.968 0.95 1.952 1.882 2.912 2.844 6.614 6.614 12.96 13.3 19.078 20.282 7.65-7.484 15.032-15.114 22.132-23.124 70.066-79.060 112.632-183.050 112.632-297 0.004-247.424-200.572-447.876-447.996-447.876zM895.322 738.354c-17.326 40.962-40.858 78.184-70.088 111.552-80.78-79.020-191.306-127.89-313.234-127.89s-232.456 48.66-313.234 127.68c-29.23-33.37-52.762-70.344-70.088-111.306-19.62-46.38-30.456-95.388-32.346-145.388h62.668v-32h-62.668c1.89-50 12.726-100.096 32.346-146.478 18.744-44.314 44.752-84.862 77.384-120.22l53.864 53.786 10.992-11.076 10.554-10.528-0.040-0.054 1.094-1.104-53.902-53.968c35.724-33.294 76.008-59.788 120.958-78.8 46.382-19.62 95.416-30.458 145.416-32.348v74.788h32v-74.792c52 1.89 100.034 12.726 146.416 32.346 44.874 18.98 85.842 45.412 121.524 78.624l-53.95 54.138 1.154 1.094-0.008 0.038 10.57 10.492 11 11.006 54.052-54.114c32.712 35.406 58.784 76.296 77.56 120.69 19.62 46.382 30.458 96.478 32.348 146.478h-64.664v32h64.668c-1.89 50-12.726 98.972-32.346 145.354z M736.958 349.090l-170.968 147.454c-15.394-10.51-33.984-16.668-53.988-16.668-52.934 0-96 43.066-96 96 0 20.958 6.77 40.356 18.212 56.16l-23.896 23.896 22.624 22.626 24.066-24.066c15.59 10.938 34.546 17.382 54.992 17.382 52.934 0 96-43.066 96-96 0-20.774-6.654-40.010-17.912-55.736l149.698-168.22-2.828-2.828zM512 639.876c-35.346 0-64-28.652-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64z' })
  );
};

IosSpeedometerOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosSpeedometerOutline.propTypes = {
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

exports.default = IosSpeedometerOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosSpeedometerOutline.js.map