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

var Baseball = function Baseball(props) {
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
      _react2.default.createElement('path', { d: 'M444 295.67l-.47-26.07a205.42 205.42 0 01-39.27-4.73l-5 17.35a14 14 0 11-26.88-7.81l5-17.38a206.47 206.47 0 01-36.05-17.35l-10.44 14.77a14 14 0 01-22.87-16.16l10.41-14.73a204.8 204.8 0 01-30-30L273.71 204a14 14 0 01-16.16-22.87l14.74-10.42a205.3 205.3 0 01-17.38-36.06l-17.32 5a14 14 0 11-7.81-26.89l17.3-5a205.88 205.88 0 01-4.43-32.59q-.17-3-.24-6l-18.22-.33a14 14 0 01-13.74-14A208 208 0 0055 202.42a16 16 0 0115 15.66l.44 24.43c1.58.05 3.16.11 4.73.2a205.88 205.88 0 0132.59 4.43l5-17.3a14 14 0 0126.89 7.81l-5 17.32a205.21 205.21 0 0136 17.38L181 257.61a14 14 0 0122.87 16.16l-10.39 14.73a205.65 205.65 0 0115.79 14.23 203.79 203.79 0 0114.23 15.79l14.73-10.41A14 14 0 01254.39 331l-14.76 10.43A206.86 206.86 0 01257 377.47l17.38-5.05a14 14 0 017.81 26.89l-17.35 5a205.89 205.89 0 014.7 38.28l18.27.33a16 16 0 0115.71 16.28 11.69 11.69 0 01-.08 1.19 208 208 0 00153.39-151.03A14 14 0 01444 295.67z' }),
      _react2.default.createElement('path', { d: 'M301.49 56.2A14 14 0 01287.5 70h-.25l-16.81-.3c.05 1.31.1 2.62.17 3.93a178.83 178.83 0 003.44 26.31l16.29-4.74a14 14 0 017.81 26.8l-16.27 4.73a178.06 178.06 0 0013.33 27.69l13.84-9.78a14 14 0 1116.16 22.87l-13.86 9.79q5.25 6.33 11.12 12.19c3.9 3.91 8 7.6 12.2 11.1l9.78-13.84A14 14 0 11367.32 203l-9.76 13.8a178.83 178.83 0 0027.68 13.33l4.76-16.28a14 14 0 0126.89 7.81l-4.73 16.26a177.72 177.72 0 0030.95 3.65l-.16-9a14 14 0 0113.75-14.24h.25a14.67 14.67 0 012.59.25 208 208 0 00-158-163.51c-.06.4-.04.76-.05 1.13zM208.44 457.55a16 16 0 0116.28-15.71l16.76.29a178.49 178.49 0 00-3.62-29.95l-16.26 4.72a14 14 0 11-7.81-26.9l16.21-4.7a177.92 177.92 0 00-13.33-27.68l-13.8 9.76a14 14 0 11-16.16-22.87l13.84-9.78c-3.5-4.22-7.19-8.3-11.1-12.2s-8-7.62-12.19-11.12l-9.79 13.86a14 14 0 11-22.87-16.16l9.78-13.84a177.16 177.16 0 00-27.69-13.33L122 298.21a14 14 0 11-26.9-7.81l4.73-16.29a177.32 177.32 0 00-26.31-3.44c-.89-.05-1.79-.08-2.68-.12l.16 10.59a16 16 0 01-15.71 16.28H55a16 16 0 01-3.94-.51 208 208 0 00157.65 163.87 15.72 15.72 0 01-.27-3.23z' })
    )
  );
};

Baseball.defaultProps = {
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

Baseball.propTypes = {
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

exports.default = Baseball;
module.exports = exports['default'];
//# sourceMappingURL=Baseball.js.map