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

var IosNoSmokingOutline = function IosNoSmokingOutline(props) {
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
    _react2.default.createElement('path', { d: 'M720 512h32v96h-32v-96z M256 576v-32h234l-32-32h-234v96h330l-32-32z M600 544h72v26h-46l38 38h40v-96h-136z M768 512h32v96h-32v-96z M512 96c-229.8 0-416 186.2-416 416s186.2 416 416 416 416-186.2 416-416-186.2-416-416-416zM512 896c-51.8 0-102.2-10.2-149.4-30.2-45.8-19.4-86.8-47-122-82.4-35.2-35.2-63-76.4-82.4-122-20-47.2-30.2-97.6-30.2-149.4s10.2-102.2 30.2-149.4c17.2-40.8 41.2-78 71.2-110.6l542.6 542.6c-32.6 30-69.6 54-110.6 71.2-47.2 20-97.6 30.2-149.4 30.2zM794.6 772l-542.6-542.6c32.6-30 69.6-54 110.6-71.2 47.2-20 97.6-30.2 149.4-30.2s102.2 10.2 149.4 30.2c45.8 19.4 86.8 47 122 82.4 35.2 35.2 63 76.4 82.4 122 20 47.4 30.2 97.6 30.2 149.4s-10.2 102.2-30.2 149.4c-17.2 40.8-41.2 78-71.2 110.6z M720.4 425.4c-17.6-8.2-44.2-9.4-91.4-9.4-2.4 0-4.8 0-7.2 0-25.4 0.2-31.8-2.2-40-14.2-5.6-8.4-2-29.6 7.4-43.8 3.2-4.8 3.6-11.2 0.8-16.4s-8.2-8.4-14-8.6c-0.2 0-18.8-0.2-36.6-7.8-21.2-9-31.2-24.2-31.2-46.2 0-51.6 33.8-55 35.8-55 8.8 0 16-7.2 16-16s-7.2-16-16-16c-24 0-67.8 21.6-67.8 87 0 35 18 62 51.4 76 8.4 3.4 16.8 5.8 24 7.2-6.6 19.6-7.2 43.8 3.4 59.4 18 26.6 40.6 26.2 66.6 26.2 2.2 0 4.6 0 7 0 52.6 0 69.4 2.4 78 6.4 11.4 5.2 13.4 15 13.4 31.4 0 1.4 0 0.2 0 2.2h32c0 0 0-1 0-2.2 0-14 0.4-45.4-31.6-60.2z M800 488c0-52-6-78.4-18.2-99-17.2-29-44.8-37-77.8-37h-34.8c5.8-16.6 10.8-47.6 7-69.8-6.4-37.6-30.8-58.2-68.2-58.2-8.8 0-16 7.2-16 16s7.2 16 16 16c32 0 34.2 16.4 36.8 31.6 5 29-13.6 72.2-13.8 72.6-2.8 5-2.6 11 0.2 15.8s8.2 8 13.8 8h59c21.8 0 38.8 1.8 50.2 21.2 6.2 10.6 13.8 26.8 13.8 82.8h32z M800 488v0 0c0-0.2 0 0 0 0z' })
  );
};

IosNoSmokingOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosNoSmokingOutline.propTypes = {
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

exports.default = IosNoSmokingOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosNoSmokingOutline.js.map