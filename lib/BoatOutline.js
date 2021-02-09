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

var BoatOutline = function BoatOutline(props) {
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
      _react2.default.createElement('path', { d: 'M461.93 261.05c-2-4.76-6.71-7.83-11.67-9.49l-187.18-74.48a23.78 23.78 0 00-14.17 0l-187 74.52c-5 1.56-9.83 4.77-11.81 9.53s-2.94 9.37-1 15.08l46.53 119.15a7.46 7.46 0 007.47 4.64c26.69-1.68 50.31-15.23 68.38-32.5a7.66 7.66 0 0110.49 0C201.29 386 227 400 256 400s54.56-14 73.88-32.54a7.67 7.67 0 0110.5 0c18.07 17.28 41.69 30.86 68.38 32.54a7.45 7.45 0 007.46-4.61l46.7-119.16c1.98-4.78.99-10.41-.99-15.18z', fill: 'none', stroke: 'currentColor', strokeMiterlimit: '10', strokeWidth: '32' }),
      _react2.default.createElement('path', { d: 'M416 473.14a6.84 6.84 0 00-3.56-6c-27.08-14.55-51.77-36.82-62.63-48a10.05 10.05 0 00-12.72-1.51c-50.33 32.42-111.61 32.44-161.95.05a10.09 10.09 0 00-12.82 1.56c-10.77 11.28-35.19 33.3-62.43 47.75a7.15 7.15 0 00-3.89 5.73 6.73 6.73 0 007.92 7.15c20.85-4.18 41-13.68 60.2-23.83a8.71 8.71 0 018-.06A185.14 185.14 0 00340 456a8.82 8.82 0 018.09.06c19.1 10 39.22 19.59 60 23.8a6.72 6.72 0 007.95-6.71z' }),
      _react2.default.createElement('path', { d: 'M320 96V72a24.07 24.07 0 00-24-24h-80a24.07 24.07 0 00-24 24v24M416 233v-89a48.14 48.14 0 00-48-48H144a48.14 48.14 0 00-48 48v92M256 183.6v212.85', fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '32' })
    )
  );
};

BoatOutline.defaultProps = {
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

BoatOutline.propTypes = {
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

exports.default = BoatOutline;
module.exports = exports['default'];
//# sourceMappingURL=BoatOutline.js.map