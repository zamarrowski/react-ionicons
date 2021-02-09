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

var TennisballSharp = function TennisballSharp(props) {
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
      _react2.default.createElement('path', { d: 'M246.4 480a181 181 0 003.22-22.86c.35-4.61.53-9.31.53-14 0-100-81.34-181.32-181.32-181.32A181.72 181.72 0 0032 265.61 224.2 224.2 0 00246.4 480z' }),
      _react2.default.createElement('path', { d: 'M284.63 227.37A222.73 222.73 0 01219 68.83a227.09 227.09 0 012.62-34.42A224.41 224.41 0 0034.41 221.58 227.09 227.09 0 0168.83 219a222.73 222.73 0 01158.54 65.67A222.73 222.73 0 01293 443.17c0 5.74-.22 11.54-.65 17.23s-1.11 11.51-2 17.2a224.42 224.42 0 00187.24-187.18 227.09 227.09 0 01-34.42 2.58 222.73 222.73 0 01-158.54-65.63z' }),
      _react2.default.createElement('path', { d: 'M443.17 250.15a181.72 181.72 0 0036.83-3.76A224.2 224.2 0 00265.61 32a181.72 181.72 0 00-3.76 36.83c0 99.98 81.34 181.32 181.32 181.32z' })
    )
  );
};

TennisballSharp.defaultProps = {
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

TennisballSharp.propTypes = {
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

exports.default = TennisballSharp;
module.exports = exports['default'];
//# sourceMappingURL=TennisballSharp.js.map