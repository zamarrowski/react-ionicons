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

var IosNoSmoking = function IosNoSmoking(props) {
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
    _react2.default.createElement('path', { d: 'M512 96c-229.8 0-416 186.2-416 416s186.2 416 416 416 416-186.2 416-416-186.2-416-416-416zM608 224c37.4 0 61.8 20.6 68.2 58.2 3.8 22.2-1.2 53.2-7 69.8h34.8c33 0 60.6 8.2 77.8 36.8 12.2 20.8 18.2 47.2 18.2 99.2h-32c0-56-7.6-72.2-13.8-82.8-11.4-19.4-28.4-21.2-50.2-21.2h-59c-5.6 0-11-3.2-13.8-7.8-2.8-4.8-3-10.8-0.2-15.8 0.2-0.4 18.8-43.6 13.8-72.6-2.6-15.2-4.8-31.6-36.8-31.6-8.8 0-16-7.2-16-16s7.2-16.2 16-16.2zM544 192c8.8 0 16 7.2 16 16s-7.2 16-16 16c-2 0-35.8 3.4-35.8 55 0 22 10 37.2 31.2 46.2 17.8 7.6 36.4 7.8 36.6 7.8 5.8 0.2 11.2 3.4 14 8.6s2.4 11.6-0.8 16.4c-9.4 14.2-13 35.4-7.4 43.8 8.2 12 14.6 14.4 40 14.2 2.4 0 4.8 0 7.2 0 47.2 0 73.8 1.2 91.4 9.4 32 14.8 31.6 46.2 31.6 60.4 0 1.2 0 2.2 0 2.2h-32c0-2 0-0.8 0-2.2 0-16.4-2-26-13.4-31.4-8.6-4-25.4-6.4-78-6.4-2.4 0-4.8 0-7 0-26 0-48.6 0.4-66.6-26.2-10.6-15.6-10-40-3.4-59.6-7.2-1.4-15.6-3.8-24-7.2-33.4-14-51.4-41-51.4-76-0-65.4 43.8-87 67.8-87zM752 512v96h-32v-96h32zM704 512v96h-40l-96-96h136zM224 608v-96h234l96 96h-330zM783.6 783.6c-3.8 3.8-7.6 7.4-11.6 11l-542.6-542.6c3.6-4 7.2-7.8 11-11.6s7.6-7.4 11.6-11l542.6 542.6c-3.6 3.8-7.2 7.8-11 11.6zM800 608h-32v-96h32v96zM800 488c0 0 0-0.2 0 0v0 0z M800 488v0 0c0-0.2 0 0 0 0z' })
  );
};

IosNoSmoking.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosNoSmoking.propTypes = {
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

exports.default = IosNoSmoking;
module.exports = exports['default'];
//# sourceMappingURL=IosNoSmoking.js.map