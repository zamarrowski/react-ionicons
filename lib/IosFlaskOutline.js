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

var IosFlaskOutline = function IosFlaskOutline(props) {
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
    _react2.default.createElement('path', { d: 'M873.8 708.8l-233.8-390.8v-190h32v-32h-64v230.8l5 7.6 233.2 389.6c13.6 25.6 18.6 52 18 76-0.4 18.6-4 35.8-13 51.2-17 28.2-46.4 44.8-81.2 44.8h-511.8c-35 0-65-16.8-82-45.4-23.8-39.6-21.8-76.2 4.6-126.2l182.8-308.4h116.4v-32h-97.4l29.4-49.6 4-7.6v-6.8h96v-32h-96v-64h64v-32h-64v-64h160v-32h-224v32h32v190l-231.8 390.8c-16.8 31.8-25 62.8-24.2 91.2 2.2 73 57.4 128 130.2 128h511.8c72.6 0 124.2-55.2 126-128 0.6-28.4-5.2-59.4-22.2-91.2z M216.6 717.2c-13.8 21-21.8 48.2-21.8 67 0 55.2 31.6 79.6 91.4 79.6h451.8c59.6 0 90-31.4 91.4-80 0.6-19-6.2-45.4-20.2-66.6l-143.8-237.2h-306.4l-142.4 237.2zM647.4 512l134.4 221.8 0.4 0.2 0.4 0.4c10.8 16.4 15.2 36.6 15 48.4-0.4 15.6-5 28-13.4 35.6-9.6 8.6-25.4 13.6-46 13.6h-452.2c-22.2 0-38.6-4.4-47.4-12-3-2.4-12-10.2-12-36.2 0-11.8 5.8-32.8 16.6-49.4l0.4-0.6h0.4l133.2-221.8h270.2z' })
  );
};

IosFlaskOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosFlaskOutline.propTypes = {
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

exports.default = IosFlaskOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosFlaskOutline.js.map