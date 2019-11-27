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

var IosBookmarksOutline = function IosBookmarksOutline(props) {
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
    _react2.default.createElement('path', { d: 'M864 128h-300.8c-20.6 0-38.6 9.2-51.2 23.4v0 0c-12.4-14.4-30.6-23.4-51.2-23.4h-300.8c-37.6 0-66 26.6-66 64v572.2c0 37.6 28.4 67.8 66 67.8 0 0 259 0 286.6 0s49.4 8.4 49.4 38.8c0 18.2 0 25.2 0 25.2h32c0 0 0-6.8 0-25.2 0-30.6 21.8-38.8 49.4-38.8s286.6 0 286.6 0c37.6 0 66-30.2 66-67.8v-572.2c0-37.4-28.4-64-66-64zM496 822.2c-9.4-15.6-27-22.2-47.6-22.2h-288.4c-18.8 0-32-17-32-35.8v-572.2c0-18.8 13.2-32 32-32 0 0 261.2 0 286.6 0 25.6 0 49.4 25.6 49.4 44.4v617.8zM640 160c37.6 0 86 0 128 0v200.8l-45.8-29-18.2-12.8-18.2 12.8-45.8 29v-200.8zM896 764.2c0 18.8-13.2 35.8-32 35.8h-288.4c-20.6 0-38.2 4.6-47.6 22.2v-617.8c0-18.8 23.8-44.4 49.4-44.4 4.4 0 15.4 0 30.6 0v262l96-64 96 64v-262c37.2 0 64 0 64 0 18.8 0 32 13.4 32 32v572.2z' })
  );
};

IosBookmarksOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosBookmarksOutline.propTypes = {
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

exports.default = IosBookmarksOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosBookmarksOutline.js.map