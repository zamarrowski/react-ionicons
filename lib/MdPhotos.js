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

var MdPhotos = function MdPhotos(props) {
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
    _react2.default.createElement('path', { d: 'M800 842.6v-533.2c0-47-38.4-85.4-85.4-85.4h-533.2c-47 0-85.4 38.4-85.4 85.4v533.4c0 47 38.4 85.4 85.4 85.4h533.4c46.8-0.2 85.2-38.6 85.2-85.6zM314.6 608l90.6 128 133.4-192 176 256h-533.2l133.2-192z M842.6 96h-533.2c-47 0-85.4 38.4-85.4 85.4v10.6h522.6c47 0 85.4 38.4 85.4 85.4v522.6h10.6c47 0 85.4-38.4 85.4-85.4v-533.2c0-47-38.4-85.4-85.4-85.4z' })
  );
};

MdPhotos.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdPhotos.propTypes = {
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

exports.default = MdPhotos;
module.exports = exports['default'];
//# sourceMappingURL=MdPhotos.js.map