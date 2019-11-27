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

var MdCopy = function MdCopy(props) {
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
    _react2.default.createElement('path', { d: 'M592 96h-239c-44.2 0-81 34.8-81 79v17h-15c-44.2 0-81 34.8-81 79v576c0 44.2 36.8 81 81 81h416c44.2 0 79-36.8 79-81v-15h17c44.2 0 79-36.8 79-81v-399l-256-256zM592 185.2l166.8 166.8h-166.8v-166.8zM688 847c0 9.4-6.8 17-15 17h-416c-8.8 0-17-8.2-17-17v-576c0-8.2 7.6-15 17-15h15v511c0 44.2 20.8 65 65 65h351v15zM784 751c0 9.4-6.8 17-15 17h-416c-8.8 0-17-8.2-17-17v-576c0-8.2 7.6-15 17-15h175v256h256v335z' })
  );
};

MdCopy.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdCopy.propTypes = {
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

exports.default = MdCopy;
module.exports = exports['default'];
//# sourceMappingURL=MdCopy.js.map