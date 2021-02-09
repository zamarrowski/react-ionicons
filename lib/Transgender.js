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

var Transgender = function Transgender(props) {
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
      _react2.default.createElement('path', { d: 'M458 32h-68a22 22 0 000 44h14.89l-59.57 59.57a149.69 149.69 0 00-178.64 0l-7.57-7.57 26.45-26.44a22 22 0 00-31.12-31.12L128 96.89 107.11 76H122a22 22 0 000-44H54a22 22 0 00-22 22v68a22 22 0 0044 0v-14.89L96.89 128l-26.42 26.42a22 22 0 1031.11 31.11L128 159.11l7.57 7.57A149.19 149.19 0 00106 256c0 82.71 67.29 150 150 150a149.2 149.2 0 0089.46-29.67L369 399.9l-26.54 26.54a22 22 0 0031.12 31.12l26.49-26.5 42.37 42.48a22 22 0 0031.16-31.08L431.17 400l26.39-26.39a22 22 0 00-31.12-31.12l-26.35 26.35-23.55-23.62a149.68 149.68 0 00-.11-178.49L436 107.11V122a22 22 0 0044 0V54a22 22 0 00-22-22zM150 256a106 106 0 11106 106 106.12 106.12 0 01-106-106z' })
    )
  );
};

Transgender.defaultProps = {
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

Transgender.propTypes = {
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

exports.default = Transgender;
module.exports = exports['default'];
//# sourceMappingURL=Transgender.js.map