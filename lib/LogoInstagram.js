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

var LogoInstagram = function LogoInstagram(props) {
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
    _react2.default.createElement('path', { d: 'M672 511.666c0 88.366-71.634 160-160 160s-160-71.634-160-160c0-88.366 71.634-160 160-160s160 71.634 160 160z M355.61 353.774c42.308-42.308 98.558-65.858 158.39-65.858s116.082 23.674 158.39 65.982c26.844 26.844 46.022 59.102 56.464 95.102h168.146v-226c0-53.020-40.98-94-94-94h-576c-53.020 0-98 40.98-98 94v226h170.144c10.444-36 29.622-68.382 56.466-95.226zM833 295.4c0 14.138-11.46 25.6-25.6 25.6h-76.8c-14.138 0-25.6-11.46-25.6-25.6v-76.8c0-14.138 11.46-25.6 25.6-25.6h76.8c14.138 0 25.6 11.46 25.6 25.6v76.8z M672.39 670.558c-42.308 42.308-98.558 65.358-158.39 65.358s-116.082-22.924-158.39-65.232c-42.23-42.23-65.518-99.684-65.606-157.684h-161.004v286c0 53.020 44.98 98 98 98h576c53.020 0 94-44.98 94-98v-286h-159.004c-0.086 58-23.374 115.328-65.606 157.558z' })
  );
};

LogoInstagram.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

LogoInstagram.propTypes = {
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

exports.default = LogoInstagram;
module.exports = exports['default'];
//# sourceMappingURL=LogoInstagram.js.map