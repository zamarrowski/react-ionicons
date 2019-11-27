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

var IosNotifications = function IosNotifications(props) {
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
    _react2.default.createElement('path', { d: 'M415.6 800c0 52 43.2 95.8 96.2 95.8s96.2-43.8 96.2-95.8h-192.4z M747.8 458.4c0-198-98-265.6-189.8-281 0-1.2 0.2-2.2 0.2-3.4 0-25.4-20.6-46-46-46s-46 20.6-46 46c0 1.2 0 2.4 0.2 3.6-91.8 15.6-189.8 83.8-189.8 281.4-0.4 231-45.4 245-116.6 309h704c-70.8-64-116.2-78.2-116.2-309.6z' })
  );
};

IosNotifications.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosNotifications.propTypes = {
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

exports.default = IosNotifications;
module.exports = exports['default'];
//# sourceMappingURL=IosNotifications.js.map