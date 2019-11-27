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

var MdCall = function MdCall(props) {
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
    _react2.default.createElement('path', { d: 'M853.332 661.334c-53.332 0-104.542-8.542-151.458-23.458-14.938-4.272-32-2.146-42.664 10.666l-93.878 93.856c-121.604-61.856-219.728-160-281.604-281.606l93.878-93.854c10.664-10.666 14.924-27.728 10.664-42.666-17.074-49.062-25.604-100.272-25.604-153.606 0-23.458-19.198-42.666-42.666-42.666h-149.334c-23.468 0-42.666 19.208-42.666 42.666 0 401.062 324.272 725.334 725.332 725.334 23.46 0 42.668-19.208 42.668-42.666v-149.334c0-23.458-19.208-42.666-42.668-42.666z' })
  );
};

MdCall.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdCall.propTypes = {
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

exports.default = MdCall;
module.exports = exports['default'];
//# sourceMappingURL=MdCall.js.map