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

var GitNetworkSharp = function GitNetworkSharp(props) {
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
      _react2.default.createElement('path', { d: 'M384 32a64 64 0 00-57.67 91.73l-70.83 80.82-70.19-80.1A64 64 0 10128 160c1.1 0 2.2 0 3.29-.08L224 265.7v94.91a64 64 0 1064 0v-96.05l91.78-104.71c1.39.09 2.8.15 4.22.15a64 64 0 000-128zM96 96a32 32 0 1132 32 32 32 0 01-32-32zm160 352a32 32 0 1132-32 32 32 0 01-32 32zm128-320a32 32 0 1132-32 32 32 0 01-32 32z' })
    )
  );
};

GitNetworkSharp.defaultProps = {
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

GitNetworkSharp.propTypes = {
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

exports.default = GitNetworkSharp;
module.exports = exports['default'];
//# sourceMappingURL=GitNetworkSharp.js.map