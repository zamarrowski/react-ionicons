'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _SvgContainer = require('./SvgContainer');

var _SvgContainer2 = _interopRequireDefault(_SvgContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BatteryChargingSharp = function BatteryChargingSharp(props) {
  return _react2.default.createElement(
    _SvgContainer2.default,
    {
      height: props.height,
      width: props.width,
      color: props.color,
      onClick: props.onClick,
      rotate: props.rotate ? 1 : 0,
      shake: props.shake ? 1 : 0,
      beat: props.beat ? 1 : 0,
      className: props.className
    },
    _react2.default.createElement(
      'svg',
      { style: props.style, className: props.cssClasses, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 512 512' },
      props.title ? _react2.default.createElement(
        'title',
        null,
        props.title
      ) : '',
      _react2.default.createElement('path', { d: 'M306.68 237.62h-66.5l15.33-54.7 6.43-22.92 3.94-14 4.29-15.33a3.56 3.56 0 00.06-.44v-.19a1.85 1.85 0 000-.23 2 2 0 000-.24v-.14c0-.1-.07-.19-.11-.29v-.05a2.33 2.33 0 00-2-1.35h-.1a2.25 2.25 0 00-1.8 1l-12.5 17.15-18.82 25.55-8.36 11.48-35.41 48.6L160 274.26h66.44l-30 107a3.93 3.93 0 00-.06.48v.1a1.94 1.94 0 000 .34.29.29 0 000 .09 3 3 0 00.07.32v.06a1.83 1.83 0 00.14.32 2.38 2.38 0 001.52 1.16H198.68a2.1 2.1 0 001.31-.5l.06-.05a2.6 2.6 0 00.42-.45L223.3 352l13-17.82z' }),
      _react2.default.createElement('path', { d: 'M289.78 134.55l-.14.74-.21.73-6.72 24H417V352H248.05l-23.33 32H449V128H290.13a22.62 22.62 0 01-.35 6.55zM49 160h169.49l23.31-32H17v256h159.49a22.73 22.73 0 01.34-6.67l.15-.75.2-.73 6.69-23.85H49z' }),
      _react2.default.createElement('path', { d: 'M264.76 329.08h130.55V182.92H276.28l-9.73 34.7H346l-23.16 31.78-58.08 79.68zM160 294.26h-39.31l23.15-31.78 57.95-79.56H70.69v146.16h119.6l9.77-34.82H160zM465 202.67h32v106.67h-32z' })
    )
  );
};

BatteryChargingSharp.defaultProps = {
  // style
  style: {},
  color: 'inherit',
  height: '22px',
  width: '22px',
  cssClasses: '',
  title: '',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

BatteryChargingSharp.propTypes = {
  // style
  style: _propTypes2.default.object,
  color: _propTypes2.default.string,
  height: _propTypes2.default.string,
  width: _propTypes2.default.string,
  cssClasses: _propTypes2.default.string,
  title: _propTypes2.default.string,

  // animation
  shake: _propTypes2.default.bool,
  beat: _propTypes2.default.bool,
  rotate: _propTypes2.default.bool,

  // functions
  onClick: _propTypes2.default.func
};

exports.default = BatteryChargingSharp;
module.exports = exports['default'];
//# sourceMappingURL=BatteryChargingSharp.js.map