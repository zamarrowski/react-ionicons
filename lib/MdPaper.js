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

var MdPaper = function MdPaper(props) {
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
    _react2.default.createElement('path', { d: 'M928 128h-544c-17.6 0-32 15.4-32 33v63h-204c-46.2 0-84 37.8-84 84v415c0 95.2 78 173 172 173h559.4c90.2 0 164.6-73.8 164.6-164v-572c0-17.6-14.4-32-32-32zM352 288v384h-84v-345.6c0-13.6-1.6-26.6-6.6-38.4h90.6zM318 798.8c-22 21.2-51.6 33.2-81 33.2-29 0-56.2-11.4-77-32-20.6-20.6-32-48-32-77v-396.6c0-21.2 16.8-38.4 38-38.4s38 17.2 38 38.4v377.6c0 17.6 14.4 32 32 32h115c-3 23.2-14.4 45.2-33 62.8zM896 732c0 26.6-10.8 51.6-29.8 70.6s-44.4 29.4-70.8 29.4h-420.8c25.6-29.8 41.4-67.8 41.4-109v-529h480v538z M496 272h320v112h-320v-112z M496 448h320v64h-320v-64z M496 576h320v64h-320v-64z M816 704h-320c0 0 0 64-16 64 14 0 277.2 0 297.4 0 38.6 0 38.6-42 38.6-64z' })
  );
};

MdPaper.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdPaper.propTypes = {
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

exports.default = MdPaper;
module.exports = exports['default'];
//# sourceMappingURL=MdPaper.js.map