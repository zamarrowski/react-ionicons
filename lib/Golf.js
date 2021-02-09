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

var Golf = function Golf(props) {
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
      _react2.default.createElement('path', { d: 'M272 320.46V202.3l166.62-75.73a16 16 0 000-29.14l-176-80A16 16 0 00240 32v288.46q8-.45 16-.46t16 .46z' }),
      _react2.default.createElement('path', { d: 'M463.33 457.5c-8.56-42.85-35.11-78.74-76.78-103.8-32.5-19.55-72.67-31.3-114.55-33.7v79.75a16 16 0 11-32 0V320c-41.88 2.4-82.05 14.15-114.55 33.7-41.67 25.06-68.22 60.95-76.78 103.8a32.49 32.49 0 006.44 27.08C61.13 492 70 496 80 496h352c10 0 18.88-4.05 24.9-11.42a32.49 32.49 0 006.43-27.08z' })
    )
  );
};

Golf.defaultProps = {
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

Golf.propTypes = {
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

exports.default = Golf;
module.exports = exports['default'];
//# sourceMappingURL=Golf.js.map