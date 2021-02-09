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

var Glasses = function Glasses(props) {
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
      _react2.default.createElement('path', { d: 'M464 184h-10.9a78.72 78.72 0 00-16-7.18C419.5 171 396.26 168 368 168s-51.5 3-69.06 8.82c-14.06 4.69-20.25 9.86-22.25 11.87a47.94 47.94 0 00-41.36 0c-2-2-8.19-7.18-22.25-11.87C195.5 171 172.26 168 144 168s-51.5 3-69.06 8.82a78.72 78.72 0 00-16 7.18H48a16 16 0 000 32h.17c1 45.46 6.44 72.78 18.11 92.23a66.78 66.78 0 0031.92 28c12.23 5.24 27.22 7.79 45.8 7.79 24.15 0 58.48-3.71 77.72-35.77 9.68-16.14 15.09-37.69 17.21-70.52A16 16 0 00240 232a16 16 0 0132 0 16 16 0 001.07 5.71c2.12 32.83 7.53 54.38 17.21 70.52a66.78 66.78 0 0031.92 28c12.23 5.24 27.22 7.79 45.8 7.79 24.15 0 58.48-3.71 77.72-35.77 11.67-19.45 17.13-46.77 18.11-92.23h.17a16 16 0 000-32z' })
    )
  );
};

Glasses.defaultProps = {
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

Glasses.propTypes = {
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

exports.default = Glasses;
module.exports = exports['default'];
//# sourceMappingURL=Glasses.js.map