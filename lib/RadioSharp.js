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

var RadioSharp = function RadioSharp(props) {
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
      _react2.default.createElement('ellipse', { cx: '256', cy: '256', rx: '36', ry: '35.99' }),
      _react2.default.createElement('path', { d: 'M188.4 350.8l-14.62-16.44a117.91 117.91 0 010-156.71l14.62-16.43 32.87 29.24-14.62 16.43a73.93 73.93 0 000 98.25l14.62 16.44zM323.6 350.8l-32.89-29.22 14.62-16.44a73.93 73.93 0 000-98.25l-14.62-16.43 32.87-29.24 14.62 16.43a117.91 117.91 0 010 156.71z' }),
      _react2.default.createElement('path', { d: 'M138.24 401.76l-15-16.06a189.85 189.85 0 010-259.4l15-16.07 32.14 30.05-15 16.06a145.88 145.88 0 000 199.32l15 16.06zM373.76 401.76l-32.14-30 15-16.06a145.88 145.88 0 000-199.32l-15-16.06 32.14-30 15 16.07a189.85 189.85 0 010 259.4z' }),
      _react2.default.createElement('path', { d: 'M430.73 447l-32.79-29.33 14.66-16.39a218.2 218.2 0 000-290.56l-14.67-16.38L430.72 65l14.67 16.39a262.18 262.18 0 010 349.22zM81.27 447L66.6 430.61a262.18 262.18 0 010-349.22L81.28 65l32.79 29.34-14.68 16.38a218.2 218.2 0 000 290.56l14.66 16.39z' })
    )
  );
};

RadioSharp.defaultProps = {
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

RadioSharp.propTypes = {
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

exports.default = RadioSharp;
module.exports = exports['default'];
//# sourceMappingURL=RadioSharp.js.map