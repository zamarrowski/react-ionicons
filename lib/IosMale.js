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

var IosMale = function IosMale(props) {
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
    _react2.default.createElement('path', { d: 'M912 96h-224c-8.8 0-16 7.2-16 16s7.2 16 16 16h184l-214 215.4c-59.6-54.2-139-87.4-226-87.4-185.6 0-336 150.4-336 336s150.4 336 336 336c185.6 0 336-150.4 336-336 0-87-33-166.4-87.4-226l215.4-214v184c0 8.8 7.2 16 16 16s16-7.2 16-16v-224c0-8.8-7.2-16-16-16zM736 592c0 81.2-31.6 157.6-89 215s-133.8 89-215 89c-81.2 0-157.6-31.6-215-89s-89-133.8-89-215 31.6-157.6 89-215 133.8-89 215-89c81.2 0 157.6 31.6 215 89s89 133.8 89 215z' })
  );
};

IosMale.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosMale.propTypes = {
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

exports.default = IosMale;
module.exports = exports['default'];
//# sourceMappingURL=IosMale.js.map