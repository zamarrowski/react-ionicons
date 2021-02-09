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

var BicycleSharp = function BicycleSharp(props) {
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
      _react2.default.createElement('path', { d: 'M320 192l-29.5-60.1C284.32 118 284.32 118 264 118c-13.26 0-14.76 0-23 7.3l-71.7 69.1c-8.3 8.45-9.3 9.45-9.3 26.6 0 12.67 3.78 14.61 18.51 22.9L240 278v90h32V254s-29-17-48.3-30l48.9-51.5c18.7 28.5 27.3 51.5 38 51.5H384v-32z' }),
      _react2.default.createElement('path', { d: 'M388 448a92 92 0 1192-92 92.1 92.1 0 01-92 92zm0-152a60 60 0 1060 60 60.07 60.07 0 00-60-60zM124 448a92 92 0 1192-92 92.1 92.1 0 01-92 92zm0-152a60 60 0 1060 60 60.07 60.07 0 00-60-60zM320 128a31.89 31.89 0 0032-32.1A31.55 31.55 0 00320.2 64a32 32 0 10-.2 64z' })
    )
  );
};

BicycleSharp.defaultProps = {
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

BicycleSharp.propTypes = {
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

exports.default = BicycleSharp;
module.exports = exports['default'];
//# sourceMappingURL=BicycleSharp.js.map