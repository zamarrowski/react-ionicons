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

var GiftSharp = function GiftSharp(props) {
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
      _react2.default.createElement('path', { d: 'M346 110a34 34 0 00-68 0v34h34a34 34 0 0034-34zM234 110a34 34 0 10-34 34h34z', fill: 'none' }),
      _react2.default.createElement('path', { d: 'M234 144h44v112h164a22 22 0 0022-22v-68a22 22 0 00-22-22h-59.82A77.95 77.95 0 00256 55.79 78 78 0 00129.81 144H70a22 22 0 00-22 22v68a22 22 0 0022 22h164zm44-34a34 34 0 1134 34h-34zm-112 0a34 34 0 1168 0v34h-34a34 34 0 01-34-34zM278 480h132a22 22 0 0022-22V288H278zM80 458a22 22 0 0022 22h132V288H80z' })
    )
  );
};

GiftSharp.defaultProps = {
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

GiftSharp.propTypes = {
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

exports.default = GiftSharp;
module.exports = exports['default'];
//# sourceMappingURL=GiftSharp.js.map