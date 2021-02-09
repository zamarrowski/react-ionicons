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

var ColorFill = function ColorFill(props) {
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
      _react2.default.createElement('path', { d: 'M416 480c-35.29 0-64-29.11-64-64.88 0-33.29 28.67-65.4 44.08-82.64 1.87-2.1 3.49-3.91 4.68-5.31a19.94 19.94 0 0130.55 0c1.13 1.31 2.63 3 4.36 4.93 15.5 17.3 44.33 49.51 44.33 83.05 0 35.74-28.71 64.85-64 64.85zM398.23 276.64L166.89 47.22a52.1 52.1 0 00-73.6 0l-4.51 4.51a53.2 53.2 0 00-15.89 37.33A51.66 51.66 0 0088.14 126l41.51 41.5L45 252a44.52 44.52 0 00-13 32 42.81 42.81 0 0013.5 30.84l131.24 126a44 44 0 0061.08-.18l124.11-120.28a15.6 15.6 0 018.23-4.29 69.21 69.21 0 0111.93-.86h.3a22.53 22.53 0 0015.84-38.59zM152.29 144.85l-41.53-41.52a20 20 0 010-28.34l5.16-5.15a20.07 20.07 0 0128.39 0L186 111.21z' })
    )
  );
};

ColorFill.defaultProps = {
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

ColorFill.propTypes = {
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

exports.default = ColorFill;
module.exports = exports['default'];
//# sourceMappingURL=ColorFill.js.map