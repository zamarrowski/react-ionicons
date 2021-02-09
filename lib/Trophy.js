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

var Trophy = function Trophy(props) {
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
      _react2.default.createElement('path', { d: 'M464 80h-60.1a4 4 0 01-4-4V63.92a32 32 0 00-32-31.92l-223.79.26a32 32 0 00-31.94 31.93V76a4 4 0 01-4 4H48a16 16 0 00-16 16v16c0 54.53 30 112.45 76.52 125.35a7.82 7.82 0 015.55 5.9c5.77 26.89 23.52 52.5 51.41 73.61 20.91 15.83 45.85 27.5 68.27 32.48a8 8 0 016.25 7.8V444a4 4 0 01-4 4h-59.55c-8.61 0-16 6.62-16.43 15.23A16 16 0 00176 480h159.55c8.61 0 16-6.62 16.43-15.23A16 16 0 00336 448h-60a4 4 0 01-4-4v-86.86a8 8 0 016.25-7.8c22.42-5 47.36-16.65 68.27-32.48 27.89-21.11 45.64-46.72 51.41-73.61a7.82 7.82 0 015.55-5.9C450 224.45 480 166.53 480 112V96a16 16 0 00-16-16zM112 198.22a4 4 0 01-6 3.45c-10.26-6.11-17.75-15.37-22.14-21.89-11.91-17.69-19-40.67-19.79-63.63a4 4 0 014-4.15h40a4 4 0 014 4c-.02 27.45-.07 58.87-.07 82.22zm316.13-18.44c-4.39 6.52-11.87 15.78-22.13 21.89a4 4 0 01-6-3.46c0-26.51 0-56.63-.05-82.21a4 4 0 014-4h40a4 4 0 014 4.15c-.79 22.96-7.9 45.94-19.81 63.63z' })
    )
  );
};

Trophy.defaultProps = {
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

Trophy.propTypes = {
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

exports.default = Trophy;
module.exports = exports['default'];
//# sourceMappingURL=Trophy.js.map