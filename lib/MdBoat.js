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

var MdBoat = function MdBoat(props) {
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
    _react2.default.createElement('path', { d: 'M168.51 826h2.126c68.246 0 127.954-38.042 170.61-84.988 42.65 46.946 102.36 85.524 170.608 85.524s127.958-38.668 170.61-85.612c42.654 46.944 102.36 85.076 170.606 85.076h2.124l102.506-277.56c4.252-10.658 2.126-23.282-2.14-33.952-4.272-10.666-14.474-16.974-25.134-21.246l-76.426-24.976v-196.3c0-46.946-39.312-85.966-86.232-85.966h-127.958l-31.986-106h-191.938l-31.99 106h-127.958c-46.916 0-85.938 39.020-85.938 85.964v196.3l-76.148 25.066c-10.66 4.272-21.164 10.668-25.436 21.334-4.27 10.67-6.316 20.98-2.062 33.774l102.156 277.562zM256 272h512v168.522l-256-83.21-256 83.21v-168.522z M682.462 816.014c-104.506 72.534-236.712 72.516-341.216-0.018 0 0-115.276 128.004-213.264 128.004h42.654c59.708 0 117.292-23.452 170.61-51.188 106.63 55.468 234.586 55.456 341.216-0.014 53.318 27.738 110.9 51.202 170.608 51.202h42.656c-95.302 0-213.264-127.986-213.264-127.986z' })
  );
};

MdBoat.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdBoat.propTypes = {
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

exports.default = MdBoat;
module.exports = exports['default'];
//# sourceMappingURL=MdBoat.js.map