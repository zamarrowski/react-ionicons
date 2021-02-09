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

var WalkSharp = function WalkSharp(props) {
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
      _react2.default.createElement('path', { d: 'M315.09 481.38l-56.95-115.12-45-57.56a73.11 73.11 0 01-10.16-37.17V142h15.73A40.36 40.36 0 01259 182.32v162.52', stroke: 'currentColor', strokeLinecap: 'square', strokeLinejoin: 'round', strokeWidth: '32' }),
      _react2.default.createElement('path', { fill: 'none', stroke: 'currentColor', strokeLinecap: 'square', strokeLinejoin: 'round', strokeWidth: '32', d: 'M128.18 291.5v-74.77l64.95-65.1' }),
      _react2.default.createElement('path', { d: 'M376.35 295.73l-83.95-56.38v-44.68l104.68 72.95-20.73 28.11zM175.13 498.58l-21.43-26.91 80.33-81.54 15.53 32.07-74.43 76.38z' }),
      _react2.default.createElement('circle', { cx: '259.02', cy: '67.21', r: '37.38', stroke: 'currentColor', strokeLinecap: 'square', strokeLinejoin: 'round', strokeWidth: '16' })
    )
  );
};

WalkSharp.defaultProps = {
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

WalkSharp.propTypes = {
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

exports.default = WalkSharp;
module.exports = exports['default'];
//# sourceMappingURL=WalkSharp.js.map