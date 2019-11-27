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

var MdCar = function MdCar(props) {
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
    _react2.default.createElement('path', { d: 'M806.416 234.666c-8.542-25.604-32-42.666-59.75-42.666h-469.332c-27.75 0-51.208 17.062-59.75 42.666l-89.584 234.668v320c0 23.458 19.208 42.666 42.666 42.666h42.668c23.458 0 42.666-19.208 42.666-42.666v-21.334h512v21.334c0 23.458 19.208 42.666 42.666 42.666h42.668c23.458 0 42.666-19.208 42.666-42.666v-320l-89.584-234.668zM277.334 640c-36.25 0-64-27.73-64-64s27.75-64 64-64 64 27.732 64 64-27.75 64-64 64zM746.666 640c-36.25 0-64-27.73-64-64s27.75-64 64-64 64 27.732 64 64-27.75 64-64 64zM213.334 426.666l64-170.666h469.332l64 170.666h-597.332z' })
  );
};

MdCar.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdCar.propTypes = {
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

exports.default = MdCar;
module.exports = exports['default'];
//# sourceMappingURL=MdCar.js.map