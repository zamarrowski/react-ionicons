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

var NotificationsCircleOutline = function NotificationsCircleOutline(props) {
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
      _react2.default.createElement('path', { d: 'M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z', fill: 'none', stroke: 'currentColor', strokeMiterlimit: '10', strokeWidth: '32' }),
      _react2.default.createElement('path', { d: 'M365.2 313c-16.33-19.34-27.86-27.47-27.86-80.8 0-48.86-25.78-66.23-47-74.67a11.39 11.39 0 01-6.34-6.68C280.29 138.6 269.88 128 256 128s-24.31 10.6-28 22.86a11.35 11.35 0 01-6.33 6.68c-21.24 8.46-47 25.8-47 74.67 0 53.33-11.54 61.46-27.87 80.8-6.77 8-.65 23 11.19 23H354C365.77 336 371.94 321 365.2 313zM220.24 352a4 4 0 00-4 4.42C218.49 375.14 235.11 384 256 384c20.67 0 37.14-9.15 39.66-27.52a4 4 0 00-4-4.48z' })
    )
  );
};

NotificationsCircleOutline.defaultProps = {
  // style
  style: {},
  color: 'inherit',
  height: '22px',
  width: '22px',
  cssClasses: '',
  title: '',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

NotificationsCircleOutline.propTypes = {
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

exports.default = NotificationsCircleOutline;
module.exports = exports['default'];
//# sourceMappingURL=NotificationsCircleOutline.js.map