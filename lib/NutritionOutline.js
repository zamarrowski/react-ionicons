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

var NutritionOutline = function NutritionOutline(props) {
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
      _react2.default.createElement('path', { d: 'M352 128c-32.26-2.89-64 16-96 16s-63.75-19-96-16c-64 6-96 64-96 160 0 80 64 192 111.2 192s51.94-24 80.8-24 33.59 24 80.8 24S448 368 448 288c0-96-29-154-96-160z', fill: 'none', stroke: 'currentColor', strokeMiterlimit: '10', strokeWidth: '32' }),
      _react2.default.createElement('path', { d: 'M323.92 83.14c-21 21-45.66 27-58.82 28.79a8 8 0 01-9.1-8.73 97.6 97.6 0 0128.61-59.33c22-22 46-26.9 58.72-27.85a8 8 0 018.67 8.92 98 98 0 01-28.08 58.2z' }),
      _react2.default.createElement('ellipse', { cx: '216', cy: '304', rx: '24', ry: '48' }),
      _react2.default.createElement('ellipse', { cx: '296', cy: '304', rx: '24', ry: '48' })
    )
  );
};

NutritionOutline.defaultProps = {
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

NutritionOutline.propTypes = {
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

exports.default = NutritionOutline;
module.exports = exports['default'];
//# sourceMappingURL=NutritionOutline.js.map