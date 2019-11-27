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

var IosClock = function IosClock(props) {
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
    _react2.default.createElement('path', { d: 'M806.2 217.8c-162.4-162.4-425.8-162.4-588.4 0s-162.4 425.8 0 588.4c162.4 162.4 425.8 162.4 588.4 0 162.4-162.4 162.4-426 0-588.4zM512 160c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16c0-8.8 7.2-16 16-16zM207.2 336c4.4-7.6 14.2-10.2 21.8-5.8s10.2 14.2 5.8 21.8c-4.4 7.6-14.2 10.2-21.8 5.8s-10.2-14.2-5.8-21.8zM176 528c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16c0 8.8-7.2 16-16 16zM229 693.8c-7.6 4.4-17.4 1.8-21.8-5.8s-1.8-17.4 5.8-21.8 17.4-1.8 21.8 5.8c4.4 7.6 1.8 17.4-5.8 21.8zM357.8 811c-4.4 7.6-14.2 10.2-21.8 5.8s-10.2-14.2-5.8-21.8c4.4-7.6 14.2-10.2 21.8-5.8s10.2 14.2 5.8 21.8zM352 234.8c-7.6 4.4-17.4 1.8-21.8-5.8s-1.8-17.4 5.8-21.8c7.6-4.4 17.4-1.8 21.8 5.8s1.8 17.4-5.8 21.8zM512 864c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16c0 8.8-7.2 16-16 16zM528 539.8v228.2c0 8.8-7.2 16-16 16s-16-7.2-16-16v-228.4c-4.8-2.8-8.8-6.6-11.8-11.6-6-10.4-5.4-23 0.4-32.6l-59.2-109.8c-4.6-7.6-2-17.4 5.4-22 7.6-4.6 17.4-2 22 5.4l60 110.8c10.8 0.2 21.2 6 26.8 16 9 15.6 3.8 35-11.6 44zM688 816.8c-7.6 4.4-17.4 1.8-21.8-5.8s-1.8-17.4 5.8-21.8c7.6-4.4 17.4-1.8 21.8 5.8s1.8 17.4-5.8 21.8zM693.8 229c-4.4 7.6-14.2 10.2-21.8 5.8s-10.2-14.2-5.8-21.8c4.4-7.6 14.2-10.2 21.8-5.8s10.2 14.2 5.8 21.8zM816.8 688c-4.4 7.6-14.2 10.2-21.8 5.8s-10.2-14.2-5.8-21.8c4.4-7.6 14.2-10.2 21.8-5.8s10.2 14.2 5.8 21.8zM811 357.8c-7.6 4.4-17.4 1.8-21.8-5.8s-1.8-17.4 5.8-21.8 17.4-1.8 21.8 5.8c4.4 7.6 1.8 17.4-5.8 21.8zM848 528c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16c0 8.8-7.2 16-16 16z' })
  );
};

IosClock.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosClock.propTypes = {
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

exports.default = IosClock;
module.exports = exports['default'];
//# sourceMappingURL=IosClock.js.map