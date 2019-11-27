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

var MdTabletLandscape = function MdTabletLandscape(props) {
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
    _react2.default.createElement('path', { d: 'M64 240c0 85.8 0 444.6 0 544 0 26.6 21.4 48 48 48 60.8 0 742 0 800 0 26.6 0 48-21.4 48-48v-544c0-26.6-21.4-48-48-48-58 0-739.4 0-800 0-26.6 0-48 21.4-48 48zM832 256v512h-672v-512h672zM924 512c0 15.4-13 28-28.2 28-15 0-28-12.4-28-28 0-15.4 12.8-28.2 28-28.2 15.2 0.2 28.2 12.8 28.2 28.2z' })
  );
};

MdTabletLandscape.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdTabletLandscape.propTypes = {
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

exports.default = MdTabletLandscape;
module.exports = exports['default'];
//# sourceMappingURL=MdTabletLandscape.js.map