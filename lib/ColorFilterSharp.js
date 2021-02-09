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

var ColorFilterSharp = function ColorFilterSharp(props) {
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
      _react2.default.createElement('path', { d: 'M256 185a167.85 167.85 0 01134.9-18.28C382.36 99.83 325.12 48 256 48S129.64 99.83 121.1 166.67A167.85 167.85 0 01256 185zM336 331.73a167.51 167.51 0 01-52.37 118.08A135 135 0 00344 464c75 0 136-61 136-136a136 136 0 00-59.06-112.08A168.53 168.53 0 01336 331.73zM283.58 206.19a167.87 167.87 0 0149.36 89.89 136.14 136.14 0 0058.06-95.7 135.87 135.87 0 00-107.43 5.81zM176.05 331.73a168.53 168.53 0 01-85-115.81A136 136 0 0032 328c0 75 61 136 136 136a135 135 0 0060.42-14.19 167.51 167.51 0 01-52.37-118.08zM179.06 296.08a167.87 167.87 0 0149.36-89.89A135.87 135.87 0 00121 200.38a136.14 136.14 0 0058.06 95.7zM302.9 345.33a168.22 168.22 0 01-93.8 0A135.9 135.9 0 00256 431.6a135.9 135.9 0 0046.9-86.27zM209 311.62a136 136 0 0094 0 135.93 135.93 0 00-47-87.22 135.93 135.93 0 00-47 87.22z' })
    )
  );
};

ColorFilterSharp.defaultProps = {
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

ColorFilterSharp.propTypes = {
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

exports.default = ColorFilterSharp;
module.exports = exports['default'];
//# sourceMappingURL=ColorFilterSharp.js.map