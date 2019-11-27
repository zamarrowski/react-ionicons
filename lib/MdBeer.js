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

var MdBeer = function MdBeer(props) {
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
    _react2.default.createElement('path', { d: 'M832 280h-32v-12c17.8-18 32-45.8 32-76 0-70.6-57.4-128-128-128-32.6 0-62.2 12.2-84.8 32.2-24.8-20.2-56.4-32.2-90.8-32.2-31.6 0-60.8 10.2-84.6 27.4-19.8-17-45.8-27.4-74-27.4-34.2 0-64.8 15.2-85.6 39-23.4-24-56-39-92.2-39-70.6 0-128 57.4-128 128 0 32.4 12.2 62 32 84.6v109.4c0 53 43 96 96 96v349c0 70.6 57.6 129 128.4 129h351.6c70.6 0 128.2-58.4 128.2-129 0 0 0-7.4 0-20.4v-66.6h32c100 0 128-65.4 128-136v-192c-0.2-70.6-34.2-136-128.2-136zM704 384h-416v-107.4c0.6-0.8 1.4-1.6 2-2.4 2.4-3 4.8-6 7-9.2 3 2.4 6 4.8 9.2 6.8 18.2 12.2 40 19.4 63.4 19.4 12.8 0 25.2-2.2 36.6-6 25.6 40.4 70.6 67.4 122 67.4 44 0 83.4-19.8 109.8-50.8 11.4-13.4 20.4-28.8 26.2-45.8h39.8v128zM192 256.2v150c-18 0-32-14.4-32-32v-126.6c-16-9-26.8-24.2-30.6-42-1-4.2-1.4-8.8-1.4-13.4 0-35.2 28.8-64 64-64 23.6 0 46.6 15.4 60.2 30.8s53.4 15.4 67.8 0c13.6-14.6 28.6-30.8 49.6-30.8 12 0 23.2 4.4 31.8 11.6 3.8 3.2 7.2 7 9.8 11.2 2.2 3.6 4 8.4 6.2 11.6 5.4 6.8 13 11 22.4 11 8.8 0 16.6-3.8 22-10 1.2-1.4 2.4-3 3.4-4.6 4-5 8.4-9.6 13.4-13.6 13.6-10.8 31-17.2 49.6-17.2 21.2 0 40.4 8.2 54.8 21.8 3.4 3.2 13.4 9 26.4 10.2 9 0.8 12.2 0.6 16.4 0 20.6-2.6 28.8-9.4 32.8-13.2 11.6-11.6 27.6-18.8 45.2-18.8 35.2 0 64 28.8 64 64 0.4 6.2-0.6 12.4-2.4 18.2-5-11-16.2-18.4-29.2-18.4h-110c0 0-17.4-1.4-17.4 16.4s-5.8 34.2-15.6 47.4c-14.6 19.8-38.2 32.8-64.8 32.8-29.8 0-55.8-16.2-69.6-40.4-3.2-5.4-5.6-11.2-7.4-17.2-0.2-1.2-0.6-2.2-0.8-3.2-4-11.8-15-20.4-28.2-20.4-7.8 0-15 3-20.4 8 0 0 0 0-0.2 0.2-4.8 4.2-10.6 7.4-16.8 9.4-4.8 1.6-10 2.4-15.4 2.4-15 0-29.4-8-37.6-17.2-20-22.8-47.4-13.6-59.4-11s-24.4 23.4-24.4 23.4c-2.2 4.2-4.8 8-7.8 11.6-12 13.4-30.4 22-48.4 22zM864 608c0 35.4-12.6 48-48 48h-16v-288h16c35.4 0 48 12.6 48 48v192z' })
  );
};

MdBeer.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdBeer.propTypes = {
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

exports.default = MdBeer;
module.exports = exports['default'];
//# sourceMappingURL=MdBeer.js.map