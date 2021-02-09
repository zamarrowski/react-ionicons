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

var BoatSharp = function BoatSharp(props) {
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
      _react2.default.createElement('path', { d: 'M477.77 246.42c-2.13-6-7.23-9.55-12.56-11.95L432 221.38V92a20 20 0 00-20-20h-76V40a16 16 0 00-16-16H192a16 16 0 00-16 16v32h-76a20 20 0 00-20 20v129.46l-33.08 13.06c-5.33 2.4-10.58 6-12.72 12s-3.16 11.81-1 19L84.25 415.7h1.06c34.12 0 64-17.41 85.31-43.82 21.32 26.41 51.18 42.12 85.3 42.12s64-15.76 85.31-42.17c21.32 26.41 51.18 43.87 85.3 43.87h1.06l51.25-150.17c2.16-6 1.07-13.1-1.07-19.11zM256 152l-144 56.83V108a4 4 0 014-4h280a4 4 0 014 4v100.76z' }),
      _react2.default.createElement('path', { d: 'M345.22 407c-52.25 36.26-126.35 36.25-178.6 0 0 0-45.64 63-94.64 63l13.33 1c29.86 0 58.65-11.73 85.31-25.59a185.33 185.33 0 00170.6 0c26.66 13.87 55.45 25.6 85.31 25.6l13.33-1C392.21 470 345.22 407 345.22 407z' })
    )
  );
};

BoatSharp.defaultProps = {
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

BoatSharp.propTypes = {
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

exports.default = BoatSharp;
module.exports = exports['default'];
//# sourceMappingURL=BoatSharp.js.map