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

var IosShirt = function IosShirt(props) {
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
    _react2.default.createElement('path', { d: 'M745 185.4c-41-29.4-81-57.4-125-57.4s-44 16-108 16-64-16-108-16-84 28-125 57.4c-63.2 45.4-183 172.6-183 172.6s69.2 82.6 103.4 122c25.4 29.4 32 35.6 32 0 0-85.4 0-96 12.6-96s12 7.2 12 16v496h512v-496c0-8.8-0.6-16 12-16s12.6 10.6 12.6 96c0 35.6 6.6 29.4 32 0 34-39.4 103.4-122 103.4-122s-119.8-127.2-183-172.6zM512 282c-60 0-108-41.4-108-88 0-60 48-17.4 108-17.4 59.6 0 108-42.6 108 17.4 0 46.6-48.4 88-108 88z' })
  );
};

IosShirt.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosShirt.propTypes = {
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

exports.default = IosShirt;
module.exports = exports['default'];
//# sourceMappingURL=IosShirt.js.map