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

var MdEye = function MdEye(props) {
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
    _react2.default.createElement('path', { d: 'M512 210c-203.6 0-376.8 124.8-448 302 71.2 177.2 244.4 302 448 302s376.8-124.8 448-302c-71.2-177.2-244.4-302-448-302zM512 713.4c-112 0-203.6-90.6-203.6-201.4s91.6-201.4 203.6-201.4 203.6 90.6 203.6 201.4-91.6 201.4-203.6 201.4zM512 391.2c-67.2 0-122.2 54.4-122.2 120.8s55 120.8 122.2 120.8 122.2-54.4 122.2-120.8-55-120.8-122.2-120.8z' })
  );
};

MdEye.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdEye.propTypes = {
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

exports.default = MdEye;
module.exports = exports['default'];
//# sourceMappingURL=MdEye.js.map