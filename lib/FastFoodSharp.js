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

var FastFoodSharp = function FastFoodSharp(props) {
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
      _react2.default.createElement('path', { d: 'M384 352H184.36l-41 35-41-35H16v24c0 30.59 21.13 55.51 47.26 56 2.43 15.12 8.31 28.78 17.16 39.47C93.51 487.28 112.54 496 134 496h132c21.46 0 40.49-8.72 53.58-24.55 8.85-10.69 14.73-24.35 17.16-39.47 13.88-.25 26.35-7.4 35-18.63A61.26 61.26 0 00384 376zM105 320l38.33 28.19L182 320h202v-8a40.07 40.07 0 00-32-39.2c-.82-29.69-13-54.54-35.51-72C295.67 184.56 267.85 176 236 176h-72c-68.22 0-114.43 38.77-116 96.8A40.07 40.07 0 0016 312v8h89z' }),
      _react2.default.createElement('path', { d: 'M463.08 96h-74.59l8.92-35.66L442 45l-10-29-62 20-14.49 60H208v32h18.75l1.86 16H236c39 0 73.66 10.9 100.12 31.52A121.9 121.9 0 01371 218.07a124.16 124.16 0 0110.73 32.65 72 72 0 0127.89 90.9A96 96 0 01416 376c0 22.34-7.6 43.63-21.4 59.95a80 80 0 01-31.83 22.95 109.21 109.21 0 01-18.53 33c-1.18 1.42-2.39 2.81-3.63 4.15H416c16 0 23-8 25-23l36.4-345H496V96z' })
    )
  );
};

FastFoodSharp.defaultProps = {
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

FastFoodSharp.propTypes = {
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

exports.default = FastFoodSharp;
module.exports = exports['default'];
//# sourceMappingURL=FastFoodSharp.js.map