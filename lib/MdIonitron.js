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

var MdIonitron = function MdIonitron(props) {
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
    _react2.default.createElement('path', { d: 'M957.4 539.6c-9.4-66.8-37.4-123.6-71.4-119.6 13.6 30.6 24.2 73.6 20.6 150.6-3-54-13.2-104.8-36-150.6-67.4-135-211.4-224.4-372.6-215.4-180.4 10-325.4 139.4-361.2 306.6l-24 3.4c-36.2 5-56.6 72.8-45.6 151.4s49.4 138.4 85.6 133.4l33.2-4.6c72.8 117.6 206.8 193 355.6 184.8 179.2-9.8 323.4-137.8 360.4-303.4l15.4-1c31.8-5.2 49.8-65.6 40-135.6zM163.2 528.8c14.2 11.2 53 37 62.8 115.2s-17.8 117.8-30 134.2c12.6-31 13-78 6-129.4-6.8-50-19-93.4-38.8-120zM549.4 771.4c-17.8 1-33.2-12.6-34.2-30.4s12.6-32.8 30.6-33.8c17.8-1 33.2 12.6 34.2 30.4s-12.8 33-30.6 33.8zM719.4 761.8c-17.8 1-33.2-12.6-34.2-30.4s12.6-32.8 30.6-33.8c17.8-1 33.2 12.6 34.2 30.4 1 17.6-12.8 32.8-30.6 33.8z M321.2 123.4c0 0 0.2 0 0 0 0.2 0.2 0.2 0.4 0.2 0.4s0 0 0 0c0.2 0.4 0.4 0.8 0.6 1 0 0 0 0.2 0 0.2 0.8 2.2 2.4 4 4.8 5.8 4.2 3 10.4 5 18 6.2 7.2 1.2 15.8 1.4 25 1 2 0 4-0.2 6.2-0.4-0.8-1-1.8-1.8-2.6-2.8-1 0-1.8 0-2.8 0-9 0.2-17.4-0.4-24.4-1.8-7.4-1.4-13.6-3.8-17.6-7.2-1.2-1-2-2-2.8-3-0.4-1.4-0.4-3 0-4.8 1-4.8 5-10 11.4-15.6 5.8-4.8 13.4-9.8 22.8-14.6 1.8-1 3.6-1.8 5.6-2.8 0.4-0.2 0.6-0.2 1-0.4-1.6 7-2 14.4-0.6 21.8 4.8 25 26.4 42.4 51 43.2l10.4 55 22.6-4.2-10.4-55c22.6-9.6 36.4-33.6 31.6-58.6-1.4-7.4-4.2-14-8.2-19.8-11.2-1.6-32.8-1.6-61.4 4.4 2.2-0.6 4.4-1.4 6.8-2 16-4.4 31.4-7.4 45.2-8.8 1.2-0.2 2.6-0.2 3.8-0.4 2.4-0.2 5-0.4 7.4-0.6 0.4 0 0.8 0 1.2 0 8.6-0.4 16.2-0.2 22.6 0.8 5 0.6 9.4 1.6 12.8 3-1.2 2-2 4.2-2 6.6 0 5.8 3.8 10.6 9 12.2 0 0 0 0 0 0-1.2 2-2.6 4-4.4 6s-3.8 3.8-6 5.8c-2.2 1.8-4.8 3.8-7.4 5.6l-13.6 7.8c-0.2 1-0.4 2.2-0.6 3.2 0.2 0 0.4-0.2 0.6-0.2l17.6-9.8c2.6-1.6 5-3.4 7.2-5 2.4-2 4.6-3.8 6.6-5.8s3.6-4 5-5.8c0.2-0.4 0.4-0.8 0.6-1.2 6.4-0.8 11.2-6 11.2-12.6 0-7-5.8-12.8-12.8-12.8-2 0-4 0.6-5.8 1.4-4.2-2.6-10-4.4-17.2-5.8-9-1.6-20-2-32.6-1.4-1.4 0-3 0.2-4.4 0.4s-2.8 0.4-4.2 0.4c-11.2-7.2-25-10.4-39.2-7.8-16.6 3-30 13.6-37.2 27.2-2.8 1.2-5.4 2.2-8 3.4-1.4 0.6-2.8 1.2-4.2 2-12.4 6.2-22.4 12.6-29.2 19-6.6 6-10.4 12-11.2 17.4-0.4 3 0 5.8 1.6 8.2-0 0.8 0.2 1.2 0.4 1.6z' })
  );
};

MdIonitron.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdIonitron.propTypes = {
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

exports.default = MdIonitron;
module.exports = exports['default'];
//# sourceMappingURL=MdIonitron.js.map