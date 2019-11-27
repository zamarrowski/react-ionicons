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

var IosMedkitOutline = function IosMedkitOutline(props) {
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
    _react2.default.createElement('path', { d: 'M544 416v128h128v64h-128v128h-64v-128h-128v-64h128v-128h64zM576 384h-128v128h-128v128h128v128h128v-128h128v-128h-128v-128z M672 256v-64c-1-36.4-27.2-64-64.4-64h-198.2c-37.2 0-57.4 27.4-57.4 64v64h-256v640h832v-640h-256zM384 196.2c0-20.4 5.8-36.2 27.4-36.2h194.2c20.8 0 34.4 15.4 34.4 36.2v59.8h-256v-59.8zM896 864h-768v-576h768v576z' })
  );
};

IosMedkitOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosMedkitOutline.propTypes = {
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

exports.default = IosMedkitOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosMedkitOutline.js.map