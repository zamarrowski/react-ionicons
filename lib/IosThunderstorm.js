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

var IosThunderstorm = function IosThunderstorm(props) {
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
    _react2.default.createElement('path', { d: 'M748.8 283.8l-26.6-0.2c-23.4-107.2-110.2-187.6-250.2-187.6s-255.6 100.8-255.6 243l0.6 9.6c-84.4 11.2-153 90.6-153 179.4 0 94 75.8 176 169.4 176h193.6l17.2-64h-141.8l8.6-39 64-288 5.6-25h271.8l-12.4 41.2-35.6 118.8h135.6l-30.8 49-130.4 207h155.2c144 0 226-104 226-220 0-117.2-94.6-200.2-211.2-200.2z M682 480h-120.6l48-160h-203.4l-64 288h144l-85.8 320z' })
  );
};

IosThunderstorm.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosThunderstorm.propTypes = {
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

exports.default = IosThunderstorm;
module.exports = exports['default'];
//# sourceMappingURL=IosThunderstorm.js.map