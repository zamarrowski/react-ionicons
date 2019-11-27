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

var MdCube = function MdCube(props) {
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
    _react2.default.createElement('path', { d: 'M934.6 336.2c-3.6 0-7 0.6-10.2 2l-355.2 184.2c0 0-0.2 0-0.2 0-15.2 9.4-25 25-25 42.8v371.8c0 12.8 11.2 23 25.4 23 4.4 0 8.6-1 12.2-2.8 0.4-0.2 0.8-0.4 1-0.6l350-185.6c16.4-9 27.4-25.4 27.4-44.2v-367.6c0-12.8-11.4-23-25.4-23z M908.6 237l-363.4-163.4c0 0-21.4-9.6-33.2-9.6s-33 9.6-33 9.6l-363.8 163.4c0 0-16 6.6-16 19 0 13.2 16.6 23 16.6 23l371 195.6c7.6 3.4 16.2 5.2 25.2 5.2 9.2 0 17.8-2 25.4-5.4l370.8-195.8c0 0 15-8 15-23 0.2-12.6-14.6-18.6-14.6-18.6z M455 522.4l-355.4-184.4c-3-1.2-6.6-2-10.2-2-14 0-25.4 10.2-25.4 23v367.6c0 18.8 11 35.2 27.4 44.2l0.4 0.2 349.4 185.4c3.8 2.2 8.4 3.4 13.2 3.4 14 0 25.4-10.4 25.4-23v-371.6c0.2-17.8-9.8-33.6-24.8-42.8z' })
  );
};

MdCube.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdCube.propTypes = {
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

exports.default = MdCube;
module.exports = exports['default'];
//# sourceMappingURL=MdCube.js.map