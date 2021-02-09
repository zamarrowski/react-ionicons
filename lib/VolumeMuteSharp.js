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

var VolumeMuteSharp = function VolumeMuteSharp(props) {
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
      _react2.default.createElement('path', { fill: 'none', stroke: 'currentColor', strokeLinecap: 'square', strokeMiterlimit: '10', strokeWidth: '32', d: 'M416 432L64 80' }),
      _react2.default.createElement('path', { d: 'M352 256c0-24.56-5.81-47.88-17.75-71.27L327 170.47 298.48 185l7.27 14.25C315.34 218.06 320 236.62 320 256a112.91 112.91 0 01-.63 11.74l27.32 27.32A148.8 148.8 0 00352 256zM416 256c0-51.19-13.08-83.89-34.18-120.06l-8.06-13.82-27.64 16.12 8.06 13.82C373.07 184.44 384 211.83 384 256c0 25.93-3.89 46.21-11 65.33l24.5 24.51C409.19 319.68 416 292.42 416 256z' }),
      _react2.default.createElement('path', { d: 'M480 256c0-74.26-20.19-121.11-50.51-168.61l-8.61-13.49-27 17.22 8.61 13.49C429.82 147.38 448 189.5 448 256c0 48.76-9.4 84-24.82 115.55l23.7 23.7C470.16 351.39 480 309 480 256zM256 72l-73.6 58.78 73.6 73.59V72zM32 176.1v159.8h93.65L256 440V339.63L92.47 176.1H32z' })
    )
  );
};

VolumeMuteSharp.defaultProps = {
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

VolumeMuteSharp.propTypes = {
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

exports.default = VolumeMuteSharp;
module.exports = exports['default'];
//# sourceMappingURL=VolumeMuteSharp.js.map