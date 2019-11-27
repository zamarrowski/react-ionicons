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

var IosNotificationsOutline = function IosNotificationsOutline(props) {
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
    _react2.default.createElement('path', { d: 'M576 800c0 34-28.8 64-64 64s-64.4-30-64.4-64h-32c0 52 43.2 95.8 96.2 95.8s96.2-43.8 96.2-95.8h-32z M747.8 458.4c0-198-98-265.6-189.8-281 0-1.2 0.2-2.2 0.2-3.4 0-25.4-20.6-46-46-46s-46 20.6-46 46c0 1.2 0 2.4 0.2 3.6-91.8 15.6-189.8 83.8-189.8 281.4-0.4 231-45.4 245-116.6 309h704c-70.8-64-116.2-78.2-116.2-309.6zM242.2 736c14.4-16 27.4-34.8 37.8-60 19.6-47.4 28.2-114.6 28.2-217.4 0-82.6 18-146.2 53.6-189 27.2-32.8 67.4-55.4 110.8-61 33.6-4.2 44.4-4.8 79.4 0 41.6 5.8 83.2 28 110.4 60.8 35.4 42.8 53.4 106.4 53.4 189 0 102.8 8.8 169.8 28.4 217.4 10.4 25.2 23.4 44.2 38 60.2h-540z' })
  );
};

IosNotificationsOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosNotificationsOutline.propTypes = {
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

exports.default = IosNotificationsOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosNotificationsOutline.js.map