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

var MdStopwatch = function MdStopwatch(props) {
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
    _react2.default.createElement('path', { d: 'M464 613.334h96v-261.334h-96v261.334z M815.34 340.542l61.572-61.572-67.884-67.882-61.57 61.572c-65.024-50.546-146.72-80.66-235.458-80.66-212.078 0-384 171.922-384 384s171.922 384 384 384 384-171.922 384-384c0-88.738-30.114-170.434-80.66-235.458zM724.132 788.132c-56.664 56.664-132 87.868-212.132 87.868s-155.47-31.204-212.132-87.868c-56.664-56.662-87.868-132-87.868-212.132s31.204-155.47 87.868-212.132c56.662-56.664 132-87.868 212.132-87.868s155.468 31.204 212.132 87.868c56.664 56.662 87.868 132 87.868 212.132s-31.204 155.47-87.868 212.132z M384 64h256v96h-256v-96z' })
  );
};

MdStopwatch.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdStopwatch.propTypes = {
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

exports.default = MdStopwatch;
module.exports = exports['default'];
//# sourceMappingURL=MdStopwatch.js.map