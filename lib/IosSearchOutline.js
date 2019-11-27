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

var IosSearchOutline = function IosSearchOutline(props) {
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
    _react2.default.createElement('path', { d: 'M896.6 849.4l-226.6-226.8c41.6-52 66.6-118.2 66.6-190.2 0-168.2-136.2-304.4-304-304.4-168 0-304 136.4-304 304.4s136.2 304.4 304 304.4c72.4 0 138.8-25.4 191-67.6l226.4 226.8 46.6-46.6zM240.2 625.2c-51.4-51.4-79.6-119.8-79.6-192.6s28.4-141.2 79.6-192.6 119.8-80 192.4-80c72.6 0 141 28.4 192.4 79.8s79.6 119.8 79.6 192.6-28.4 141.2-79.6 192.6c-51.4 51.4-119.8 79.8-192.4 79.8-72.6 0.2-141-28.2-192.4-79.6z' })
  );
};

IosSearchOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosSearchOutline.propTypes = {
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

exports.default = IosSearchOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosSearchOutline.js.map