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

var CloudyNight = function CloudyNight(props) {
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
      _react2.default.createElement('path', { d: 'M340 480H106c-29.5 0-54.92-7.83-73.53-22.64C11.23 440.44 0 415.35 0 384.8c0-29.44 12.09-54.25 35-71.74 12.1-9.26 27.2-16.17 43.33-20.05a16 16 0 0011.81-12.21c7.15-32.54 22.25-60.49 44.33-81.75A139.82 139.82 0 01232 160c32.33 0 62.15 10.65 86.24 30.79a142.22 142.22 0 0137.65 49.54 16.06 16.06 0 0011.12 9c24 5.22 45.42 15.78 61.62 30.56C451.77 301 464 329.82 464 363.2c0 32.85-13.13 62.87-37 84.52-22.89 20.82-53.8 32.28-87 32.28zM510.53 209.79a16.34 16.34 0 00-1.35-15.8 16 16 0 00-19.57-5.58c-10.7 4.65-24.48 7.17-39.92 7.28-55.3.4-101.38-45-101.38-100.31 0-15.75 2.48-29.84 7.18-40.76a16.3 16.3 0 00-1.85-16.33 16 16 0 00-19.1-5c-38.63 16.82-66.18 51.51-75.27 92.54a4 4 0 003.19 4.79 162.54 162.54 0 0176.31 35.59 172.58 172.58 0 0139.64 47.84 16.35 16.35 0 009.54 7.64c23.89 7.17 45.1 18.9 62.25 34.54q4.44 4.07 8.48 8.42a4 4 0 005.16.57 129.12 129.12 0 0046.69-55.43z' })
    )
  );
};

CloudyNight.defaultProps = {
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

CloudyNight.propTypes = {
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

exports.default = CloudyNight;
module.exports = exports['default'];
//# sourceMappingURL=CloudyNight.js.map