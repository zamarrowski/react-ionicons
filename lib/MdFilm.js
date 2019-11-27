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

var MdFilm = function MdFilm(props) {
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
    _react2.default.createElement('path', { d: 'M752 128v85.334h-80v-85.334h-320v85.334h-80v-85.334h-80v768h80v-85.332h80v85.332h320v-85.332h80v85.332h80v-768h-80zM352 725.334h-80v-85.334h80v85.334zM352 554.668h-80v-85.334h80v85.334zM352 384h-80v-85.332h80v85.332zM752 725.334h-80v-85.334h80v85.334zM752 554.668h-80v-85.334h80v85.334zM752 384h-80v-85.332h80v85.332z' })
  );
};

MdFilm.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdFilm.propTypes = {
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

exports.default = MdFilm;
module.exports = exports['default'];
//# sourceMappingURL=MdFilm.js.map