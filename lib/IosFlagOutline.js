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

var IosFlagOutline = function IosFlagOutline(props) {
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
    _react2.default.createElement('path', { d: 'M736 224c-22 2.8-49.8 7-79.4 7-46.2 0-88-11.4-130.4-20.4-43-9.2-87.4-18.6-134.4-18.6-93.8 0-125.6 20.2-128.8 22.4l-6.8 4.8v612.8h32v-286.6c12-5 43.6-13.8 103.8-13.8 43.6 0 84.4 16.6 127.8 26 44 9.4 89.6 19.2 139 19.2 29.4 0 55.4-4 77.4-6.6 12-1.4 22.6-2.8 32-4.4v-346.8c-9.4 1.8-20.2 3.4-32.2 5zM736 538c-22 2.8-47.8 7-77.4 7-46.2 0-90-9.4-132.4-18.4-43-9.2-87.2-26.6-134.2-26.6-51.4 0-83.8 6-103.8 12v-274.6c12-5 43.8-13.6 103.8-13.6 43.6 0 84.4 8.6 127.8 18 44 9.4 87.6 21.2 137 21.2 29.4 0 57.4-4 79.4-6.6l-0.2 281.6z' })
  );
};

IosFlagOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosFlagOutline.propTypes = {
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

exports.default = IosFlagOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosFlagOutline.js.map