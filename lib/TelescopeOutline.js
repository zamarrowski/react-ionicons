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

var TelescopeOutline = function TelescopeOutline(props) {
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
      _react2.default.createElement('path', { fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '32', d: 'M39.93 327.56l-4.71-8.13A24 24 0 0144 286.64l86.87-50.07a16 16 0 0121.89 5.86l12.71 22a16 16 0 01-5.86 21.85l-86.85 50.07a24.06 24.06 0 01-32.83-8.79z' }),
      _react2.default.createElement('path', { fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '32', d: 'M170.68 273.72L147.12 233a24 24 0 018.8-32.78l124.46-71.75a16 16 0 0121.89 5.86l31.57 54.59a16 16 0 01-5.84 21.84L203.51 282.5a24 24 0 01-32.83-8.78zM341.85 202.21l-46.51-80.43a24 24 0 018.8-32.78l93.29-53.78A24.07 24.07 0 01430.27 44l46.51 80.43a24 24 0 01-8.8 32.79L374.69 211a24.06 24.06 0 01-32.84-8.79zM127.59 480l96.14-207.99M271.8 256.02L368.55 448' })
    )
  );
};

TelescopeOutline.defaultProps = {
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

TelescopeOutline.propTypes = {
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

exports.default = TelescopeOutline;
module.exports = exports['default'];
//# sourceMappingURL=TelescopeOutline.js.map