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

var MdAttach = function MdAttach(props) {
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
    _react2.default.createElement('path', { d: 'M682.668 256v469.332c0 93.876-76.792 170.668-170.668 170.668-93.874 0-170.666-76.792-170.666-170.668v-490.664c0-59.73 46.936-106.668 106.666-106.668 59.728 0 106.666 46.938 106.666 106.668v490.666c0 23.458-19.21 42.666-42.668 42.666s-42.666-19.208-42.666-42.666v-405.334h-64v405.334c0.002 59.728 46.938 106.666 106.668 106.666s106.668-46.938 106.668-106.666v-490.666c0-93.866-76.792-170.668-170.668-170.668s-170.668 76.802-170.668 170.668v490.664c0.002 130.126 104.544 234.668 234.668 234.668s234.668-104.542 234.668-234.668v-469.332h-64z' })
  );
};

MdAttach.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdAttach.propTypes = {
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

exports.default = MdAttach;
module.exports = exports['default'];
//# sourceMappingURL=MdAttach.js.map