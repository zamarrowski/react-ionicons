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

var IosTextOutline = function IosTextOutline(props) {
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
    _react2.default.createElement('path', { d: 'M512 224c194 0 352 124 352 276.6 0 71.8-35.2 138.4-99 187.8-65.6 50.8-154.8 78.6-251 78.6-57.8 0-102-6-139.4-18.6-1.2-0.4-2.6-1-4-1.4-0.6-0.2-1.2-0.4-1.6-0.4-9.4-2.8-19.4-4.2-29.4-4.2-11.2 0-22.2 1.8-32.6 5.2v0l-0.6 0.2c-1.2 0.4-17.8 6.6-22 8.6v0l-79.2 34.4c27.6-87.8 27.6-89.6 27.6-95.2 0-14.2-4.4-28.2-12.6-40.4-1-1.4-2-2.8-3.2-4.2-1.4-1.8-2.6-3.4-3.6-4.6-34.8-43.8-53.2-94.2-53.2-146-0.2-152.4 157.8-276.4 351.8-276.4zM512 192c-212.2 0-384 138.2-384 308.6 0 61.4 22.4 118.6 60.8 166.6 1.8 1.8 5.8 7.6 7.2 9.8 0 0-2-3.2-2.2-3.8 0 0 0 0 0 0v0c0 0 0 0 0 0 4.6 6.6 7.2 14.2 7.2 22.4 0 2.8-35.8 116-35.8 116v0c-2.6 8.8 4.2 17.8 15.2 20 1.6 0.4 3.2 0.4 4.8 0.4 2.6 0 5-0.4 7.4-1l3.2-1.2 101.2-44c1.8-0.8 18-7 20-7.8 0 0 1.2-0.4 1.2-0.4s-0.2 0-1.2 0.4c6.8-2.4 14.4-3.6 22.4-3.6 7.2 0 14.2 1 20.6 3 0.2 0 0.4 0 0.4 0.2 1 0.4 2 0.6 3 1 46.2 15.8 96.8 20.6 150.2 20.6 212 0 382-128.2 382-298.6 0.4-170.4-171.6-308.6-383.6-308.6v0z' })
  );
};

IosTextOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosTextOutline.propTypes = {
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

exports.default = IosTextOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosTextOutline.js.map