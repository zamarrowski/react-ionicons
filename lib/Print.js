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

var Print = function Print(props) {
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
      _react2.default.createElement('path', { d: 'M408 112H106a58 58 0 00-58 58v158a56 56 0 0056 56h8v39.68A40.32 40.32 0 00152.32 464h207.36A40.32 40.32 0 00400 423.68V384h8a56 56 0 0056-56V168a56 56 0 00-56-56zm-40 311.68a8.35 8.35 0 01-8.32 8.32H152.32a8.35 8.35 0 01-8.32-8.32V264.32a8.35 8.35 0 018.32-8.32h207.36a8.35 8.35 0 018.32 8.32zm26-215.76a24 24 0 1122-22 24 24 0 01-22 22zM344 48H168a56.09 56.09 0 00-55.42 48h286.84A56.09 56.09 0 00344 48z' })
    )
  );
};

Print.defaultProps = {
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

Print.propTypes = {
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

exports.default = Print;
module.exports = exports['default'];
//# sourceMappingURL=Print.js.map