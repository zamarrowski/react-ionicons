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

var Text = function Text(props) {
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
      _react2.default.createElement('path', { d: 'M292.6 407.78l-120-320a22 22 0 00-41.2 0l-120 320a22 22 0 0041.2 15.44l36.16-96.42a2 2 0 011.87-1.3h122.74a2 2 0 011.87 1.3l36.16 96.42a22 22 0 0041.2-15.44zm-185.84-129l43.37-115.65a2 2 0 013.74 0l43.37 115.67a2 2 0 01-1.87 2.7h-86.74a2 2 0 01-1.87-2.7zM400.77 169.5c-41.72-.3-79.08 23.87-95 61.4a22 22 0 0040.5 17.2c8.88-20.89 29.77-34.44 53.32-34.6 32.32-.22 58.41 26.5 58.41 58.85a1.5 1.5 0 01-1.45 1.5c-21.92.61-47.92 2.07-71.12 4.8-54.75 6.44-87.43 36.29-87.43 79.85 0 23.19 8.76 44 24.67 58.68C337.6 430.93 358 438.5 380 438.5c31 0 57.69-8 77.94-23.22h.06a22 22 0 1044 .19v-143c0-56.18-45-102.56-101.23-102.97zM380 394.5c-17.53 0-38-9.43-38-36 0-10.67 3.83-18.14 12.43-24.23 8.37-5.93 21.2-10.16 36.14-11.92 21.12-2.49 44.82-3.86 65.14-4.47a2 2 0 012 2.1C455 370.1 429.46 394.5 380 394.5z' })
    )
  );
};

Text.defaultProps = {
  // style
  style: {},
  color: '#000000',
  height: '22px',
  width: '22px',
  cssClasses: '',
  title: '',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

Text.propTypes = {
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

exports.default = Text;
module.exports = exports['default'];
//# sourceMappingURL=Text.js.map