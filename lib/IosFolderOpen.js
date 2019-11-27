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

var IosFolderOpen = function IosFolderOpen(props) {
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
    _react2.default.createElement('path', { d: 'M896 238c0-26.6-18.8-46-45.6-46h-388.6c-5.6 0-8.6-1.2-12.2-4.8l-45.4-45.4c-9.8-9.2-17.8-13.8-34.6-13.8h-192.2c-27.6 0-49.4 20.6-49.4 46v114h768v-50z M128 320c-8 0-14.2 0-16.6 0-25.6 0-50.6 10.2-47 48.6s47 477.4 47 477.4c5.4 35.6 23.4 50 50 50h705c25.4 0 42-15.6 46-50 0 0 44.4-425.8 47.2-467 2.8-41-17.8-59-47.2-59-2.2 0-8.6 0-16.6 0h-767.8z' })
  );
};

IosFolderOpen.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosFolderOpen.propTypes = {
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

exports.default = IosFolderOpen;
module.exports = exports['default'];
//# sourceMappingURL=IosFolderOpen.js.map