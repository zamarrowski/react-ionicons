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

var IosGitCommit = function IosGitCommit(props) {
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
    _react2.default.createElement('path', { d: 'M944 496h-176c-0.2 0-0.4 0-0.6 0-8.2-134-119.4-240-255.4-240s-247.2 106-255.4 240c-0.2 0-0.4 0-0.6 0h-176c-8.8 0-16 7.2-16 16s7.2 16 16 16h176c0.2 0 0.4 0 0.6 0 8.2 134 119.4 240 255.4 240s247.2-106 255.4-240c0.2 0 0.4 0 0.6 0h176c8.8 0 16-7.2 16-16s-7.2-16-16-16zM670.4 670.4c-42.4 42.4-98.6 65.6-158.4 65.6s-116-23.2-158.4-65.6c-42.2-42.4-65.6-98.6-65.6-158.4s23.4-116 65.6-158.4c42.4-42.2 98.6-65.6 158.4-65.6s116 23.4 158.4 65.6c42.2 42.4 65.6 98.6 65.6 158.4s-23.4 116-65.6 158.4z' })
  );
};

IosGitCommit.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosGitCommit.propTypes = {
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

exports.default = IosGitCommit;
module.exports = exports['default'];
//# sourceMappingURL=IosGitCommit.js.map