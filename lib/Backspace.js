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

var Backspace = function Backspace(props) {
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
      _react2.default.createElement('path', { d: 'M403.13 96H156.87a44.9 44.9 0 00-33.68 15.27 15.88 15.88 0 00-1.91 2.7L32 247.75a16 16 0 000 16.5l89.15 133.57a16.24 16.24 0 002 2.88 44.89 44.89 0 0033.7 15.3h246.28A44.92 44.92 0 00448 371.13V140.87A44.92 44.92 0 00403.13 96zM348 311a16 16 0 11-22.63 22.62L271.67 280 218 333.65A16 16 0 01195.35 311L249 257.33l-53.69-53.69A16 16 0 01218 181l53.69 53.7 53.67-53.7A16 16 0 01348 203.64l-53.7 53.69z' })
    )
  );
};

Backspace.defaultProps = {
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

Backspace.propTypes = {
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

exports.default = Backspace;
module.exports = exports['default'];
//# sourceMappingURL=Backspace.js.map