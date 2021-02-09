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

var Medal = function Medal(props) {
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
      _react2.default.createElement('circle', { cx: '256', cy: '352', r: '32' }),
      _react2.default.createElement('path', { d: 'M99.78 32a48 48 0 00-42.94 26.53l-31 62A48.26 48.26 0 0024.28 160h278.2a4 4 0 003.39-1.87l75.5-120A4 4 0 00378 32z' }),
      _react2.default.createElement('path', { d: 'M486.17 120.56l-31-62a47.7 47.7 0 00-32.79-25.46L342.5 160 298 231.08a128 128 0 00-84 0l-23.32-37.2a4 4 0 00-3.39-1.88H51.14a4 4 0 00-3.36 6.16l82.7 128.73a128 128 0 10251 0L483.62 168a48.22 48.22 0 002.55-47.44zm-226 295.31a64 64 0 1159.69-59.69 64.08 64.08 0 01-59.68 59.69z' })
    )
  );
};

Medal.defaultProps = {
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

Medal.propTypes = {
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

exports.default = Medal;
module.exports = exports['default'];
//# sourceMappingURL=Medal.js.map