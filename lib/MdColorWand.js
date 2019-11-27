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

var MdColorWand = function MdColorWand(props) {
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
    _react2.default.createElement('path', { d: 'M401.6 314.4l-72.8 74.8 494.6 506.8 72.6-74.8z M362 128h74v136h-74v-136z M362 524h74v136h-74v-136z M540 352h138v74h-138v-74z M611.2 231.6l-51.4-52.6-94.2 96.6 51.2 52.4z M337.6 275.6l-94.2-96.6-51.2 52.6 94.2 96.4z M192.2 555.8l51.2 52.4 94.2-96.4-51.2-52.6z M128 352h130v74h-130v-74z' })
  );
};

MdColorWand.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdColorWand.propTypes = {
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

exports.default = MdColorWand;
module.exports = exports['default'];
//# sourceMappingURL=MdColorWand.js.map