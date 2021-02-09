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

var Umbrella = function Umbrella(props) {
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
      _react2.default.createElement('path', { d: 'M414.39 113.61a222.26 222.26 0 00-136.33-64.54 8.09 8.09 0 01-6.88-5.62 15.79 15.79 0 00-30.36 0 8.09 8.09 0 01-6.88 5.62A224 224 0 0032 271.52a16.41 16.41 0 007.24 13.87 16 16 0 0020.07-2.08 51.89 51.89 0 0173.31-.06 15.94 15.94 0 0022.6.15 62.59 62.59 0 0181.49-5.87 8.24 8.24 0 013.29 6.59v147.42c0 8.6-6.6 16-15.19 16.44A16 16 0 01208 432a16 16 0 00-16.29-16c-9 .16-15.9 8.11-15.7 17.1a48.06 48.06 0 0047.37 46.9c26.88.34 48.62-21.93 48.62-48.81V284.12a8.24 8.24 0 013.29-6.59 62.59 62.59 0 0181.4 5.78 16 16 0 0022.62 0 51.91 51.91 0 0173.38 0 16 16 0 0019.54 2.41 16.4 16.4 0 007.77-14.21 222.54 222.54 0 00-65.61-157.9z' })
    )
  );
};

Umbrella.defaultProps = {
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

Umbrella.propTypes = {
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

exports.default = Umbrella;
module.exports = exports['default'];
//# sourceMappingURL=Umbrella.js.map