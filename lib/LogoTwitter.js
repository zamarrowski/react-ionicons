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

var LogoTwitter = function LogoTwitter(props) {
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
    _react2.default.createElement('path', { d: 'M984 219c-34.8 15.4-72 25.8-111.2 30.6 40-24 70.8-62 85.2-107.2-37.4 22.2-78.8 38.4-123 47-35.4-37.8-85.8-61.4-141.4-61.4-107 0-193.6 86.8-193.6 193.8 0 15.2 1.6 30 5 44.2-161-8-303.8-85.2-399.2-202.6-16.6 28.6-26.2 62-26.2 97.4 0 67.2 34.4 126.6 86.4 161.4-32-0.8-62-9.6-88-24.2 0 0.8 0 1.6 0 2.4 0 94 66.8 172.2 155.4 190-16.2 4.4-33.4 6.8-51 6.8-12.4 0-24.6-1.2-36.4-3.6 24.6 77 96.2 133 181 134.6-66.2 52-149.8 83-240.6 83-15.6 0-31-1-46.2-2.8 85.4 55.6 187.2 87.6 296.4 87.6 356.6 0 551.4-295.4 551.4-551.6 0-8.4-0.2-16.8-0.6-25 37.8-27.4 70.6-61.4 96.6-100.4z' })
  );
};

LogoTwitter.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

LogoTwitter.propTypes = {
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

exports.default = LogoTwitter;
module.exports = exports['default'];
//# sourceMappingURL=LogoTwitter.js.map