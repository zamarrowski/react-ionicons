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

var IosNuclearOutline = function IosNuclearOutline(props) {
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
    _react2.default.createElement('path', { d: 'M640 544c0-47.6-26.2-89.4-65-111.4l162.4-275.8c-66.2-38.6-143.2-60.8-225.4-60.8-82.4 0-159.8 22.4-226.2 61.2l159.2 277.8c-36.6 22.6-61 63-61 109h-320c0 166.6 93.8 306.8 228.8 384l156.2-272.6c18.6 10.6 40.2 16.6 63 16.6s44.2-6 62.6-16.4l156.6 272.4c135-77.2 228.8-217.4 228.8-384h-320zM330 169.8c56.4-27.4 118.8-41.8 182-41.8 62.8 0 124.8 14.2 180.8 41.4l-147.8 251c-10.6-2.8-21.6-4.4-33-4.4-13.2 0-26 2-38 5.8l-144-252zM281.4 883.4c-51.6-34.6-94.8-79.2-126.4-130.6-33-53.6-52.6-114.2-57.8-176.8h290.8c6 23.2 18.4 43.8 35 60l-141.6 247.4zM416 544c0-34.2 18-64.2 44.8-81.2v0c0.8-0.6 1.6-1 2.4-1.6 14.2-8.4 31-13.2 48.6-13.2 53 0 96 43 96 96s-43 96-96 96-95.8-43-95.8-96zM742.4 883.4l-142.2-247c17-16.2 29.6-37 35.6-60.4h290.8c-5 62.6-24.8 123.2-57.8 176.8-31.4 51.4-74.8 96-126.4 130.6z' })
  );
};

IosNuclearOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosNuclearOutline.propTypes = {
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

exports.default = IosNuclearOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosNuclearOutline.js.map