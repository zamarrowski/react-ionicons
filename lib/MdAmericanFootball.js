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

var MdAmericanFootball = function MdAmericanFootball(props) {
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
    _react2.default.createElement('path', { d: 'M64 512c28.2 70 72.4 132 128 181.2v-362.4c-55.6 49.2-99.8 111.2-128 181.2z M960 512c-28.2-70-72.4-132-128-181.2v362.4c55.6-49.2 99.8-111.2 128-181.2z M512 210c-94.2 0-182 26.8-256 73v457.8c74 46.2 161.8 73 256 73s182-26.8 256-73v-457.8c-74-46.2-161.8-73-256-73zM704 480v128h-64v-64h-96v64h-64v-64h-96v64h-64v-192h64v64h96v-64h64v64h96v-64h64v64z' })
  );
};

MdAmericanFootball.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdAmericanFootball.propTypes = {
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

exports.default = MdAmericanFootball;
module.exports = exports['default'];
//# sourceMappingURL=MdAmericanFootball.js.map