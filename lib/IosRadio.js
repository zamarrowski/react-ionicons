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

var IosRadio = function IosRadio(props) {
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
    _react2.default.createElement('path', { d: 'M512 96c-229.8 0-416 186.2-416 416s186.2 416 416 416c229.8 0 416-186.2 416-416s-186.2-416-416-416zM323.6 727.4c-3.2 3-7.2 4.6-11.2 4.6-4.2 0-8.2-1.6-11.4-4.8-56-57.4-87-133.2-87-213.6 0-82.2 32.2-159.4 90.6-217 6.2-6.2 16.4-6.2 22.6 0.2s6.2 16.4-0.2 22.8c-52.2 51.6-81 120.6-81 194.2 0 71.8 27.6 139.8 77.8 191 6.2 6.2 6.2 16.4-0.2 22.6zM407.6 627c6.2 6.4 6.2 16.4-0.2 22.8-3.2 3-7.2 4.6-11.2 4.6-4.2 0-8.2-1.6-11.4-4.8-35.8-36.6-55.6-85-55.6-136.4 0-52.6 20.6-101.8 57.8-138.6 6.2-6.2 16.4-6.2 22.6 0.2s6.2 16.4-0.2 22.8c-31.2 30.8-48.2 71.8-48.2 115.8-0 42.6 16.4 83 46.4 113.6zM512 576.2c-35.4 0-64-28.8-64-64.2s28.6-64.2 64-64.2 64 28.8 64 64.2c0 35.4-28.6 64.2-64 64.2zM639.2 649.4c-3.2 3.2-7.2 4.8-11.4 4.8-4 0-8-1.6-11.2-4.6-6.2-6.2-6.4-16.4-0.2-22.8 30-30.6 46.4-71 46.4-113.8 0-43.8-17.2-85-48.2-115.8-6.2-6.2-6.4-16.4-0.2-22.8s16.4-6.4 22.6-0.2c37.4 36.8 57.8 86.2 57.8 138.6 0 51.6-19.8 100-55.6 136.6zM723 727.2c-3.2 3.2-7.2 4.8-11.4 4.8-4 0-8-1.6-11.2-4.6-6.2-6.2-6.4-16.4-0.2-22.8 50.2-51.2 77.8-119.2 77.8-191 0-73.6-28.8-142.6-81-194.2-6.2-6.2-6.4-16.4-0.2-22.8s16.4-6.4 22.6-0.2c58.4 57.8 90.6 134.8 90.6 217 0 80.6-31 156.4-87 213.8z' })
  );
};

IosRadio.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosRadio.propTypes = {
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

exports.default = IosRadio;
module.exports = exports['default'];
//# sourceMappingURL=IosRadio.js.map