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

var MdGlobe = function MdGlobe(props) {
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
    _react2.default.createElement('path', { d: 'M512 96c-229.752 0-416 186.25-416 416s186.248 416 416 416c229.75 0 416-186.25 416-416s-186.25-416-416-416zM468.902 865.998c-78.928-9.452-151.956-44.784-209.038-101.864-67.348-67.348-104.436-156.89-104.436-252.134 0-85.74 30.072-166.848 85.202-231.318 1.42 17.034 4.926 35.296 4.028 48.35-3.28 47.59-7.976 77.374 19.88 117.524 10.852 15.638 13.518 38.056 18.8 56.156 5.166 17.708 25.804 26.996 40.038 37.906 28.718 22.018 56.192 47.61 86.644 66.988 20.098 12.79 32.652 19.152 26.766 43.678-4.734 19.724-6.056 31.874-16.26 49.446-3.114 5.362 11.754 39.836 16.702 44.784 14.996 14.994 29.876 28.75 46.222 42.25 25.342 20.938-2.462 48.144-14.548 78.234zM764.134 764.134c-51.266 51.266-115.398 84.972-185.112 98.162 9.88-24.432 27.472-46.14 43.79-58.724 14.194-10.952 31.972-32.018 39.386-48.704 7.408-16.664 17.222-31.11 27.154-46.434 14.13-21.798-34.838-54.672-50.706-61.562-35.708-15.502-62.588-36.42-94.322-58.75-22.61-15.908-68.514 8.308-94.040-2.834-34.962-15.266-63.766-41.792-94.156-64.678-31.36-23.618-29.844-51.152-29.844-85.994 24.564 0.906 59.508-6.798 75.816 12.956 5.146 6.234 22.84 34.084 34.684 24.188 9.676-8.086-7.17-40.498-10.424-48.118-10.010-23.43 22.808-32.568 39.606-48.456 21.92-20.728 68.94-53.236 65.224-68.094s-47.048-56.954-72.498-50.386c-3.814 0.984-37.394 36.194-43.882 41.718 0.172-11.492 0.344-22.982 0.52-34.474 0.11-7.256-13.536-14.704-12.902-19.384 1.6-11.828 34.524-33.294 42.714-42.714-5.738-3.586-25.318-20.404-31.244-17.936-14.348 5.98-30.552 10.1-44.9 16.078 0-4.976-0.604-9.65-1.324-14.266 28.752-12.73 59.174-21.582 90.62-26.304l28.168 11.32 19.888 23.602 19.848 20.466 17.35 5.59 27.558-25.99-7.106-18.554v-16.678c54.5 7.916 105.968 28.248 151.044 59.6-8.064 0.722-16.926 1.908-26.924 3.18-4.13-2.44-9.428-3.548-13.93-5.246 13.062 28.084 26.686 55.78 40.528 83.492 14.786 29.602 47.586 61.354 53.346 92.602 6.788 36.832 2.078 70.288 5.792 113.622 3.576 41.73 47.048 89.144 47.048 89.144s20.074 6.838 36.768 4.456c-15.562 61.566-47.466 118.028-93.538 164.104z' })
  );
};

MdGlobe.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdGlobe.propTypes = {
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

exports.default = MdGlobe;
module.exports = exports['default'];
//# sourceMappingURL=MdGlobe.js.map