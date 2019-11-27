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

var IosAmericanFootball = function IosAmericanFootball(props) {
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
    _react2.default.createElement('path', { d: 'M757.21 266.79c-145.406-145.408-378.448-170.794-523.51-170.79-77.852 0.002-130.382 7.316-130.382 7.316s-59.968 430.454 163.472 653.894c145.408 145.408 378.444 170.79 523.506 170.79 77.854 0 130.386-7.316 130.386-7.316s59.972-430.452-163.472-653.894zM136.248 389.456l253.166-253.164c12.246 1.722 24.328 3.65 36.224 5.798l-283.588 283.586c-2.14-11.874-4.076-23.952-5.802-36.22zM534.624 670.39l57.376-57.376-45.254-45.256-57.376 57.376-22.626-22.624 57.376-57.376-45.254-45.254-57.376 57.376-22.626-22.624 57.376-57.376-45.256-45.256-57.376 57.376-22.626-22.624 57.378-57.378-45.256-45.254-57.376 57.376-22.628-22.626 135.768-135.766 22.626 22.628-57.376 57.376 45.256 45.254 57.376-57.376 22.626 22.626-57.376 57.376 45.256 45.256 57.376-57.376 22.628 22.626-57.376 57.376 45.254 45.254 57.376-57.376 22.626 22.624-57.376 57.376 45.256 45.256 57.376-57.376 22.624 22.626-57.376 57.376 45.254 45.254 57.376-57.376 22.628 22.624-135.766 135.768-22.626-22.626 57.376-57.376-45.256-45.256-57.376 57.376-22.63-22.628zM634.518 887.782c-12.242-1.726-24.318-3.66-36.208-5.812l283.648-283.65c2.142 11.876 4.076 23.954 5.802 36.222l-253.242 253.24z' })
  );
};

IosAmericanFootball.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosAmericanFootball.propTypes = {
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

exports.default = IosAmericanFootball;
module.exports = exports['default'];
//# sourceMappingURL=IosAmericanFootball.js.map