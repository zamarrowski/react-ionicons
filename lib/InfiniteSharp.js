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

var InfiniteSharp = function InfiniteSharp(props) {
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
      _react2.default.createElement('path', { d: 'M382 136c-40.87 0-73.46 20.53-93.6 37.76l-.71.61-11.47 12.47 25.32 41.61 18.74-18.79C339.89 193.1 361.78 184 382 184c40.8 0 74 32.3 74 72s-33.2 72-74 72c-62 0-104.14-81.95-104.56-82.78C275 240.29 221.56 136 130 136 62.73 136 8 189.83 8 256s54.73 120 122 120c32.95 0 65.38-13.11 93.79-37.92l.61-.54 11.38-12.38-25.33-41.61-18.83 18.88C172 319.4 151.26 328 130 328c-40.8 0-74-32.3-74-72s33.2-72 74-72c62 0 104.14 81.95 104.56 82.78C237 271.71 290.44 376 382 376c67.27 0 122-53.83 122-120s-54.73-120-122-120z' })
    )
  );
};

InfiniteSharp.defaultProps = {
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

InfiniteSharp.propTypes = {
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

exports.default = InfiniteSharp;
module.exports = exports['default'];
//# sourceMappingURL=InfiniteSharp.js.map