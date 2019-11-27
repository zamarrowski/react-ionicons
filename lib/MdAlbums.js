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

var MdAlbums = function MdAlbums(props) {
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
    _react2.default.createElement('path', { d: 'M309.4 928h533.4c47 0 85.4-38.4 85.4-85.4v-533.2c0-47-38.4-85.4-85.4-85.4h-533.4c-47 0-85.4 38.4-85.4 85.4v533.4c0 46.8 38.4 85.2 85.4 85.2z M181.4 96h533.4c47 0 85.4 38.4 85.4 85.4v10.6h-522.8c-47 0-85.4 38.4-85.4 85.4v522.6h-10.6c-47 0-85.4-38.4-85.4-85.4v-533.2c0-47 38.4-85.4 85.4-85.4z' })
  );
};

MdAlbums.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdAlbums.propTypes = {
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

exports.default = MdAlbums;
module.exports = exports['default'];
//# sourceMappingURL=MdAlbums.js.map