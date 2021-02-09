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

var DocumentAttachSharp = function DocumentAttachSharp(props) {
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
      _react2.default.createElement('path', { d: 'M280 240a8 8 0 01-8-8V48h-57.25a65.42 65.42 0 00-6.5-9.81C196.72 23.88 179.59 16 160 16c-37.68 0-64 29.61-64 72v144c0 25 20.34 40 40 40a39.57 39.57 0 0040-40V80h-32v152a7.75 7.75 0 01-8 8c-2.23 0-8-1.44-8-8V88c0-19.34 8.41-40 32-40 29.69 0 32 30.15 32 39.38v138.75c0 17.45-5.47 33.23-15.41 44.46C166.5 282 152.47 288 136 288s-30.5-6-40.59-17.41C85.47 259.36 80 243.58 80 226.13V144H48v82.13c0 51.51 33.19 89.63 80 93.53V468a12 12 0 0012 12h312a12 12 0 0012-12V240z' }),
      _react2.default.createElement('path', { d: 'M308 208h146.31a2 2 0 001.42-3.41L307.41 56.27a2 2 0 00-3.41 1.42V204a4 4 0 004 4z' })
    )
  );
};

DocumentAttachSharp.defaultProps = {
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

DocumentAttachSharp.propTypes = {
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

exports.default = DocumentAttachSharp;
module.exports = exports['default'];
//# sourceMappingURL=DocumentAttachSharp.js.map