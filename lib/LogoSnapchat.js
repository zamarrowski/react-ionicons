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

var LogoSnapchat = function LogoSnapchat(props) {
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
      _react2.default.createElement('path', { d: 'M496 347.21a190.31 190.31 0 01-32.79-5.31c-27.28-6.63-54.84-24.26-68.12-52.43-6.9-14.63-2.64-18.59 11.86-24 14.18-5.27 29.8-7.72 36.86-23 5.89-12.76 1.13-27.76-10.41-35.49-15.71-10.53-30.35-.21-46.62 2.07 3.73-46.66 8.66-88.57-22.67-127.73C338.14 48.86 297.34 32 256.29 32s-81.86 16.86-107.81 49.33c-31.38 39.26-26.4 81.18-22.67 127.92-16.32-2.25-30.81-12.79-46.63-2.18-14.72 9.85-17 29.76-5.44 43s31.64 9.5 43.45 20.6c6.49 6.09 3.49 12.61-.35 20.14-14.48 28.4-39.26 45.74-69.84 51.56-4 .76-22.31 2.87-31 3.65 0 9.28.52 16.78 1.63 21.73 2.94 13.06 12.32 23.58 23.69 30.1 11.18 6.4 35.48 6.43 41.68 15.51 3 4.48 1.76 12.28 5.33 17.38a23.8 23.8 0 0015.37 9.75c18.61 3.61 37.32-7.2 56.42-2.1 14.85 3.95 26.52 15.87 39.26 24 15.51 9.85 32.34 16.42 50.83 17.49 38.1 2.21 59.93-18.91 90.58-36.42 19.5-11.14 38.15-3.86 58.88-2.68 20.1 1.15 23.53-9.25 29.62-24.88a27.37 27.37 0 001.54-4.85 10.52 10.52 0 002.28-1.47c2-1.57 10.55-2.34 12.76-2.86 10.28-2.44 20.34-5.15 29.17-11.2 11.31-7.76 17.65-18.5 19.58-32.64a93.73 93.73 0 001.38-15.67zM208 128c8.84 0 16 10.74 16 24s-7.16 24-16 24-16-10.74-16-24 7.16-24 16-24zm103.62 77.7c-15.25 15-35 23.3-55.62 23.3a78.37 78.37 0 01-55.66-23.34 8 8 0 0111.32-11.32A62.46 62.46 0 00256 213c16.39 0 32.15-6.64 44.39-18.7a8 8 0 0111.23 11.4zM304 176c-8.84 0-16-10.75-16-24s7.16-24 16-24 16 10.75 16 24-7.16 24-16 24z' })
    )
  );
};

LogoSnapchat.defaultProps = {
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

LogoSnapchat.propTypes = {
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

exports.default = LogoSnapchat;
module.exports = exports['default'];
//# sourceMappingURL=LogoSnapchat.js.map