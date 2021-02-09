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

var BandageSharp = function BandageSharp(props) {
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
      _react2.default.createElement('path', { d: 'M27.71 337.1a40 40 0 000 56.54l90.65 90.65a40 40 0 0056.54 0l75.1-75.1L102.81 262zM496 147.1a39.87 39.87 0 00-11.75-28.38l-91-91a40.14 40.14 0 00-56.75 0L264 100.28 411.72 248l72.53-72.53A39.85 39.85 0 00496 147.1zM273.06 386.19l116-116L241.77 123l-116 116zm19.63-141.5a16 16 0 110 22.62 16 16 0 010-22.62zm-48-48a16 16 0 110 22.62 16 16 0 010-22.62zm0 96a16 16 0 110 22.62 16 16 0 010-22.62zm-25.38-48a16 16 0 11-22.62 0 16 16 0 0122.62 0z' })
    )
  );
};

BandageSharp.defaultProps = {
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

BandageSharp.propTypes = {
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

exports.default = BandageSharp;
module.exports = exports['default'];
//# sourceMappingURL=BandageSharp.js.map