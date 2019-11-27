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

var LogoApple = function LogoApple(props) {
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
    _react2.default.createElement('path', { d: 'M667.2 307.8c-67.2 0-95.6 33-142.4 33-48 0-84.6-32.8-142.8-32.8-57 0-117.8 35.8-156.4 96.8-54.2 86-45 248 42.8 386 31.4 49.4 73.4 104.8 128.4 105.4 0.4 0 0.6 0 1 0 47.8 0 62-32.2 127.8-32.6 0.4 0 0.6 0 1 0 64.8 0 77.8 32.4 125.4 32.4 0.4 0 0.6 0 1 0 55-0.6 99.2-62 130.6-111.2 22.6-35.4 31-53.2 48.4-93.2-127-49.6-147.4-234.8-21.8-305.8-38.4-49.4-92.2-78-143-78v0z M652.4 128c-40 2.8-86.6 29-114 63.2-24.8 31-45.2 77-37.2 121.6 1 0 2 0 3.2 0 42.6 0 86.2-26.4 111.6-60.2 24.6-32.2 43.2-77.8 36.4-124.6v0z' })
  );
};

LogoApple.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

LogoApple.propTypes = {
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

exports.default = LogoApple;
module.exports = exports['default'];
//# sourceMappingURL=LogoApple.js.map