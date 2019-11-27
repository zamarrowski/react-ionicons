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

var IosSync = function IosSync(props) {
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
    _react2.default.createElement('path', { d: 'M986.8 512l-63.6 63.6c19.4-126-19.6-260.4-117-357.8-162.4-162.4-426-162.6-588.4 0-32.6 32.6-58.6 69-78 108l31 15.6c17.8-35.8 41.6-69.4 71.4-99.2 148.6-148.6 390.6-148.6 539.4 0.2 91.2 91.2 126.4 217.2 105.8 336l-68.2-66.4-21.6 21.6 106.4 106.4 105.4-105.4-22.6-22.6z M781.6 781.6c-148.6 148.6-390.6 148.8-539.4 0-91-91.2-126.2-217.8-105.6-335.8l66.2 66.2 22.6-22.6-105.4-105.4-105.4 105.4 22.6 22.6 63.6-63.6c-19.6 126.8 19.4 260.4 116.8 357.8 162.4 162.4 426 162.4 588.4 0 32.6-32.6 58.6-69.2 78-108l-31-15.6c-17.8 35.8-41.6 69.2-71.4 99z' })
  );
};

IosSync.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosSync.propTypes = {
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

exports.default = IosSync;
module.exports = exports['default'];
//# sourceMappingURL=IosSync.js.map