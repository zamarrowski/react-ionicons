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

var IosIonitron = function IosIonitron(props) {
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
    _react2.default.createElement('path', { d: 'M935.4 538.4c-9-64-30.4-118.4-71.8-114.6 12.8 29.2 27 70.4 23.4 144-2.8-51.8-12.6-100.4-34.2-144-64-129.2-201-214.8-354.4-206.2-171.6 9.6-309.4 133.4-343.4 293.6l-22.8 3.2c-34.4 4.8-53.8 69.8-43.2 145 10.6 75.4 47 132.4 81.4 127.6l31.4-4.4c69.2 112.6 196.6 184.6 338 176.8 170.4-9.4 307.6-131.8 342.8-290.4l14.8-0.8c30.2-5 47.4-62.8 38-129.8zM180.4 528c21.4 16.4 44.6 56.6 52.2 110.2 7.8 55.4-3.6 108.2-20.8 128.6 12-29.6 16-74.6 9.4-123.8-6.6-48-22-89.4-40.8-115zM547.6 760.4c-17 1-31.6-12-32.4-29-1-17 12-31.4 29-32.4s31.6 12 32.4 29c1 17-12 31.4-29 32.4zM709.2 751c-17 1-31.6-12-32.4-29-1-17 12-31.4 29-32.4s31.6 12 32.4 29c1 17-12 31.6-29 32.4z M330.6 140c0 0 0 0.2 0 0 0.2 0.2 0.2 0.4 0.2 0.4s0 0 0 0c0.2 0.4 0.4 0.6 0.6 1 0 0 0 0.2 0 0.2 0.8 2 2.2 3.8 4.6 5.4 4 3 10 4.8 17.2 6 6.8 1 15 1.4 23.8 1 2 0 3.8-0.2 5.8-0.4-0.8-0.8-1.6-1.8-2.4-2.6-0.8 0-1.8 0-2.6 0-8.6 0.2-16.4-0.4-23.2-1.8-7-1.4-12.8-3.6-16.8-6.8-1.2-1-2-1.8-2.6-2.8-0.4-1.4-0.4-3 0-4.6 1-4.6 4.8-9.6 10.8-14.8 5.4-4.6 12.8-9.4 21.6-14 1.6-0.8 3.4-1.8 5.2-2.6 0.2-0.2 0.6-0.2 1-0.4-1.6 6.6-1.8 13.8-0.4 21 4.6 23.8 25 40.6 48.4 41.2l10 52.6 21.4-4-10-52.6c21.6-9.2 34.6-32.2 30-56-1.4-7-4-13.4-7.8-19-10.6-1.6-31.2-1.6-58.4 4.2 2.2-0.6 4.2-1.4 6.4-2 15.2-4.2 29.8-7 43-8.4 1.2-0.2 2.4-0.2 3.6-0.4 2.4-0.2 4.6-0.4 7-0.6 0.4 0 0.8 0 1.2 0 8-0.4 15.4-0.2 21.6 0.6 4.8 0.6 8.8 1.6 12.2 2.8-1.2 1.8-1.8 4-1.8 6.4 0 5.4 3.6 10 8.6 11.6 0 0 0 0 0 0-1.2 1.8-2.6 3.8-4.2 5.6s-3.6 3.8-5.8 5.6c-2.2 1.8-4.4 3.6-7 5.4l-13 7.6c-0.2 1-0.4 2-0.6 3 0.2 0 0.4-0.2 0.4-0.2l16.6-9.4c2.4-1.6 4.8-3.2 6.8-4.8 2.4-1.8 4.4-3.6 6.2-5.6 1.8-1.8 3.4-3.8 4.8-5.6 0.2-0.4 0.4-0.8 0.6-1.2 6-0.8 10.8-5.8 10.8-12 0-6.8-5.4-12.2-12.2-12.2-2 0-3.8 0.6-5.4 1.4-4-2.4-9.6-4.2-16.4-5.4-8.6-1.6-19-2-31-1.2-1.4 0-2.8 0.2-4.2 0.4s-2.6 0.4-4 0.4c-10.6-7-23.8-10-37.2-7.4-15.8 3-28.4 13-35.4 26-2.6 1-5.2 2.2-7.6 3.4-1.4 0.6-2.6 1.2-4 1.8-11.8 5.8-21.2 12.2-27.8 18.2-6.2 5.8-9.8 11.4-10.6 16.6-0.4 2.8 0 5.6 1.4 8 0.2 0.2 0.4 0.6 0.6 1z' })
  );
};

IosIonitron.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosIonitron.propTypes = {
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

exports.default = IosIonitron;
module.exports = exports['default'];
//# sourceMappingURL=IosIonitron.js.map