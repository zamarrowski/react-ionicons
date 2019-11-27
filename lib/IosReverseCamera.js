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

var IosReverseCamera = function IosReverseCamera(props) {
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
    _react2.default.createElement('path', { d: 'M835 320h-123.45c-64.21-72-84.438-96-109.050-96h-177c-24.628 0-44.334 24-109.042 96h-26.458v-32h-68v32h-27c-35.29 0-67 26.434-67 61.368v352.036c0 34.934 31.71 66.596 67 66.596h640c35.29 0 61-31.662 61-66.598v-352.034c0-34.934-25.71-61.368-61-61.368zM626.152 661.564c-31.812 27.304-72.352 42.436-114.152 42.436-90.974 0-165.018-72-174.41-156h-58.958l75.068-100 77.74 100h-61.22c9.208 66 69.060 123.93 141.78 123.93 33.718 0 65.402-12.654 91.63-34.712l4.064-3.294 23.198 23.324-4.74 4.316zM670.188 614.45l-77.692-102.45h61.288c-9.234-70-69.096-127.594-141.782-127.594-33.236 0-65.776 12.266-91.628 34.010l-4.066 3.412-23.198-23.22 4.742-4.104c31.81-27.3 72.35-42.412 114.15-42.412 44.666 0 87.096 16.126 119.472 45.678 31.076 28.358 50.458 74.23 54.94 114.23h59.024l-75.25 102.45z' })
  );
};

IosReverseCamera.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosReverseCamera.propTypes = {
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

exports.default = IosReverseCamera;
module.exports = exports['default'];
//# sourceMappingURL=IosReverseCamera.js.map