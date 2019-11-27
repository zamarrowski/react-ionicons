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

var IosPeople = function IosPeople(props) {
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
    _react2.default.createElement('path', { d: 'M698.4 669.6c22.6 7.8-22.4-7.8 0 0v0z M698.4 669.6c-27-9.4-56.2-10-83.2-19.4-8.2-2.8-24.4-6.2-27.8-15.6-3.2-9.2-3.2-20-3.8-29.6-0.4-7.6-0.6-15.2-0.6-22.8 0-5 12.8-15.6 15.6-20.2 10.8-18 11.8-42.2 13.8-62.6 17.4 4.8 19.6-27.4 22.6-37.2 2.2-6.8 15.6-53.6-5.2-47.2 5-8.8 7-19.6 8.4-29.4 4-25.6 5.6-53.6-2.2-78.6-16.2-52-66-81.2-118.6-82.8-53.4-1.8-107 23.8-127 75.6-9.6 25.2-8.8 52.6-5.6 79 1.4 12 3.4 25.4 9.4 36.2-19.4-5.8-9 35.4-6.8 42.6 3.2 10.2 6 46.8 24.2 41.8 1.6 16.2 3.4 32.8 7.8 48.6 3 10.6 9.2 19.6 16.4 27.8 3.6 4 5.4 4.4 5.2 9.6-0.2 15.6 0.2 32.4-3.8 47.6s-37.4 21.6-50.8 24.4c-36 7.4-69.2 10.8-99.2 33.2-35 25.8-53.2 66-53.2 109.4 166.6 0 333.2 0 499.8 0 18.8 0 37.4 0 56.2 0 0-59-35.6-111-91.6-130.4z M286.6 645c1.2-0.6 2.4-1.2 3.2-1.6-0.6 0.2-1.2 0.6-1.6 0.8-0.6 0.2-1 0.4-1.6 0.8z M286.6 645c-6.8 3.4-15 7.6 1.6-0.8 6-3 4.8-2.4 1.6-0.8 13.6-6.4 28.2-8 42.8-9.4 5.6-0.6 8.2-4.4 4-9.8-8-10.2-35.6-12.2-47.2-16.8-7.2-2.8-9.2-5.4-9.8-13.4-0.2-3.6-2.2-19.6 0.6-22.2 2-2 14.6-1.2 17.4-1.6 11.4-1.4 23-3.8 33.8-8 4.6-1.8 9-4 13-6.8 4.8-3.6-3.6-12.4-5.8-17.2-6.8-15-9.8-31.4-10.8-47.8-2-32.2 3-64.6-3-96.6-9-49-46.8-73.6-95-73.6-29.8 0-59.2 10.2-75.8 36.2-18.4 28.6-17.4 64.2-16.4 96.8 0.6 18.6 1.4 37.4-1.2 56-1.2 8-3 15.8-5.8 23.4-2.2 5.8-13.4 20.2-9 23.2 16.6 11.8 44.6 15.8 64.6 14.2 0.6 9.8 2.4 22.4-1.2 31.6-5.6 14.4-47.4 18.2-60 22.4-35 11.6-61 40-61 80 36.6 0 73 0 109.6 0 16.4 0 32.8 0 49.4 0 2.6 0 12.6-18.6 15.4-21.6 13.6-15 30.2-28 48.2-37.4z M898.6 623.8c-16.2-5.2-47.4-6.8-59-20.8-5.8-7-2.6-24.8-2-33.2 8.8 0.8 18.4-0.6 27.4-1.8 8.2-1.2 16.2-2.8 24-5.6 3.6-1.4 7.2-2.8 10.6-4.8 7.8-4.6 4.2-5.4 0.2-12.2-21.8-36.6-12-83-13-123.2-0.8-33.4-9.6-70-40-88.8-27.4-17-68-17.6-97.4-5.6-84.8 34-34.8 146.4-63.8 210.8-5 10.8-12.2 14.6 0.4 21 7 3.6 14.6 6 22.2 7.8 11.6 2.8 23.6 4.4 35.6 4.8 2 0 0.6 25.2 0 27.8-2.2 9.8-23.6 12.6-31.6 14.8-8.2 2.2-21.8 2.8-25.8 11.4-6 12.8 19.8 9.6 26.2 10.8 20.6 3.8 38.8 15.2 54.8 28.2 12 9.8 28.2 23 32.6 39 53.4 0 107 0 160.4 0-0.4-40.2-26.6-68.8-61.8-80.4z' })
  );
};

IosPeople.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosPeople.propTypes = {
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

exports.default = IosPeople;
module.exports = exports['default'];
//# sourceMappingURL=IosPeople.js.map