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

var HelpBuoySharp = function HelpBuoySharp(props) {
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
      _react2.default.createElement('path', { d: 'M256 32C132.29 32 32 132.29 32 256s100.29 224 224 224 224-100.29 224-224S379.71 32 256 32zm-64 224a64 64 0 1164 64 64 64 0 01-64-64zm237.24-62.29L342.91 199a104.86 104.86 0 00-29.86-29.86l5.24-86.33a185 185 0 01111 111zm-303.35-67.82a183.44 183.44 0 0167.82-43.13l5.29 86.33A104.86 104.86 0 00169.09 199l-86.33-5.24a183.44 183.44 0 0143.13-67.87zm-43.13 192.4l86.33-5.24A104.86 104.86 0 00199 342.91l-5.24 86.33a185 185 0 01-111-110.95zm303.35 67.82a183.44 183.44 0 01-67.82 43.13l-5.24-86.33a104.86 104.86 0 0029.86-29.86l86.33 5.24a183.44 183.44 0 01-43.13 67.82z' })
    )
  );
};

HelpBuoySharp.defaultProps = {
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

HelpBuoySharp.propTypes = {
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

exports.default = HelpBuoySharp;
module.exports = exports['default'];
//# sourceMappingURL=HelpBuoySharp.js.map