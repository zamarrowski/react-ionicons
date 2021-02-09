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

var BuildOutline = function BuildOutline(props) {
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
      _react2.default.createElement('path', { d: 'M393.87 190a32.1 32.1 0 01-45.25 0l-26.57-26.57a32.09 32.09 0 010-45.26L382.19 58a1 1 0 00-.3-1.64c-38.82-16.64-89.15-8.16-121.11 23.57-30.58 30.35-32.32 76-21.12 115.84a31.93 31.93 0 01-9.06 32.08L64 380a48.17 48.17 0 1068 68l153.86-167a31.93 31.93 0 0131.6-9.13c39.54 10.59 84.54 8.6 114.72-21.19 32.49-32 39.5-88.56 23.75-120.93a1 1 0 00-1.6-.26z', fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeMiterlimit: '10', strokeWidth: '32' }),
      _react2.default.createElement('circle', { cx: '96', cy: '416', r: '16' })
    )
  );
};

BuildOutline.defaultProps = {
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

BuildOutline.propTypes = {
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

exports.default = BuildOutline;
module.exports = exports['default'];
//# sourceMappingURL=BuildOutline.js.map