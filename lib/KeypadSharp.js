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

var KeypadSharp = function KeypadSharp(props) {
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
      _react2.default.createElement('rect', { x: '80', y: '16', width: '96', height: '96', rx: '8', ry: '8' }),
      _react2.default.createElement('rect', { x: '208', y: '16', width: '96', height: '96', rx: '8', ry: '8' }),
      _react2.default.createElement('rect', { x: '336', y: '16', width: '96', height: '96', rx: '8', ry: '8' }),
      _react2.default.createElement('rect', { x: '80', y: '144', width: '96', height: '96', rx: '8', ry: '8' }),
      _react2.default.createElement('rect', { x: '208', y: '144', width: '96', height: '96', rx: '8', ry: '8' }),
      _react2.default.createElement('rect', { x: '336', y: '144', width: '96', height: '96', rx: '8', ry: '8' }),
      _react2.default.createElement('rect', { x: '80', y: '272', width: '96', height: '96', rx: '8', ry: '8' }),
      _react2.default.createElement('rect', { x: '208', y: '272', width: '96', height: '96', rx: '8', ry: '8' }),
      _react2.default.createElement('rect', { x: '208', y: '400', width: '96', height: '96', rx: '8', ry: '8' }),
      _react2.default.createElement('rect', { x: '336', y: '272', width: '96', height: '96', rx: '8', ry: '8' })
    )
  );
};

KeypadSharp.defaultProps = {
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

KeypadSharp.propTypes = {
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

exports.default = KeypadSharp;
module.exports = exports['default'];
//# sourceMappingURL=KeypadSharp.js.map