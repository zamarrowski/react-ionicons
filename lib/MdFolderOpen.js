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

var MdFolderOpen = function MdFolderOpen(props) {
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
    _react2.default.createElement('path', { d: 'M874.668 288h-362.656l-85.336-96h-277.344c-46.938 0-85.332 38.396-85.332 85.334v469.332c0 46.938 38.394 85.334 85.332 85.334h725.336c46.938 0 85.332-38.396 85.332-85.334v-373.332c0-46.938-38.394-85.334-85.332-85.334zM896 746.666c0 11.564-9.77 21.334-21.332 21.334h-725.336c-11.564 0-21.332-9.77-21.332-21.334v-394.666h746.668c11.562 0 21.332 9.77 21.332 21.334v373.332z' })
  );
};

MdFolderOpen.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdFolderOpen.propTypes = {
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

exports.default = MdFolderOpen;
module.exports = exports['default'];
//# sourceMappingURL=MdFolderOpen.js.map